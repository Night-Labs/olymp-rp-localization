import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const SOURCE_EXTENSIONS = new Set(['.js', '.mjs', '.cjs']);
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules', 'tools']);
const KNOWN_LANGUAGE_KEYS = new Set(['ru', 'ua', 'en', 'de', 'pl', 'fr', 'ge', 'zh']);
const LANGUAGE_KEY_RE = /^[a-z]{2,3}$/;
const BASE_PLACEHOLDER_LANGS = ['ru', 'ua', 'en', 'de', 'pl'];
const REQUIRED_LANGUAGE_KEYS = String(process.env.LOCALES_REQUIRED_LANGS || '')
    .split(',')
    .map((lang) => lang.trim())
    .filter(Boolean);
const MAX_ERROR_COUNT = 80;

const IMPORT_RE = /^\s*import\s+(?:(?<defaultName>[A-Za-z_$][\w$]*)\s*(?:,\s*)?)?(?:\{\s*(?<named>[^}]+)\s*\}\s*)?from\s*['"](?<specifier>[^'"]+)['"]\s*;?\s*$/gm;
const SIDE_EFFECT_IMPORT_RE = /^\s*import\s*['"](?<specifier>[^'"]+)['"]\s*;?\s*$/gm;
const NAMED_EXPORT_RE = /\bexport\s+const\s+([A-Za-z_$][\w$]*)\s*=/g;
const DEFAULT_EXPORT_RE = /\bexport\s+default\b/;

const DANGEROUS_CODE_PATTERNS = [
    { pattern: /\b(?:eval|Function|require|fetch|XMLHttpRequest|WebSocket)\s*\(/, message: 'dangerous runtime API is not allowed in localization files' },
    { pattern: /\bimport\s*\(/, message: 'dynamic import is not allowed in localization files' },
    { pattern: /\b(?:process|global|globalThis|window|document|localStorage|sessionStorage)\b/, message: 'global runtime objects are not allowed in localization files' },
    { pattern: /\b(?:setTimeout|setInterval|setImmediate|queueMicrotask)\s*\(/, message: 'timers are not allowed in localization files' },
    { pattern: /\b(?:constructor|__proto__|prototype)\b/, message: 'prototype/constructor access is not allowed in localization files' },
];

const DANGEROUS_STRING_PATTERNS = [
    { pattern: /<\s*\/?\s*script\b/i, message: 'script tags are not allowed in localization strings' },
    { pattern: /<\s*\/?\s*(?:iframe|object|embed|link|meta|base|form|input|button|textarea|select|option)\b/i, message: 'active HTML tags are not allowed in localization strings' },
    { pattern: /\bjavascript\s*:/i, message: 'javascript: URLs are not allowed in localization strings' },
    { pattern: /\bdata\s*:\s*text\/html/i, message: 'data:text/html URLs are not allowed in localization strings' },
    { pattern: /\bon[a-z]+\s*=/i, message: 'inline event handlers are not allowed in localization strings' },
    { pattern: /\bsrcdoc\s*=/i, message: 'srcdoc attributes are not allowed in localization strings' },
];

const errors = [];
const moduleCache = new Map();

function report(file, message, details = '') {
    const rel = path.relative(ROOT_DIR, file).split(path.sep).join('/');
    errors.push(details ? `${rel}: ${message} (${details})` : `${rel}: ${message}`);
}

function walkFiles(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) {
                walkFiles(path.join(dir, entry.name), out);
            }
            continue;
        }

        if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
            out.push(path.join(dir, entry.name));
        }
    }

    return out;
}

function stripStringsAndComments(source) {
    let out = '';
    let i = 0;

    while (i < source.length) {
        const ch = source[i];
        const next = source[i + 1];

        if (ch === '/' && next === '/') {
            out += '  ';
            i += 2;
            while (i < source.length && source[i] !== '\n') {
                out += ' ';
                i++;
            }
            continue;
        }

        if (ch === '/' && next === '*') {
            out += '  ';
            i += 2;
            while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) {
                out += source[i] === '\n' ? '\n' : ' ';
                i++;
            }
            if (i < source.length) {
                out += '  ';
                i += 2;
            }
            continue;
        }

        if (ch === '\'' || ch === '"' || ch === '`') {
            const quote = ch;
            out += ' ';
            i++;
            while (i < source.length) {
                if (source[i] === '\\') {
                    out += '  ';
                    i += 2;
                    continue;
                }
                if (source[i] === quote) {
                    out += ' ';
                    i++;
                    break;
                }
                out += source[i] === '\n' ? '\n' : ' ';
                i++;
            }
            continue;
        }

        out += ch;
        i++;
    }

    return out;
}

function checkDangerousCode(file, source) {
    const stripped = stripStringsAndComments(source);
    for (const rule of DANGEROUS_CODE_PATTERNS) {
        if (rule.pattern.test(stripped)) {
            report(file, rule.message);
        }
    }
}

function checkTemplateLiteralInterpolations(file, source) {
    let i = 0;

    while (i < source.length) {
        const ch = source[i];
        const next = source[i + 1];

        if (ch === '/' && next === '/') {
            i += 2;
            while (i < source.length && source[i] !== '\n') i++;
            continue;
        }

        if (ch === '/' && next === '*') {
            i += 2;
            while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) i++;
            i += 2;
            continue;
        }

        if (ch !== '`') {
            i++;
            continue;
        }

        i++;
        while (i < source.length) {
            if (source[i] === '\\') {
                i += 2;
                continue;
            }
            if (source[i] === '`') {
                i++;
                break;
            }
            if (source[i] === '$' && source[i + 1] === '{') {
                report(file, 'template literal interpolation is not allowed in localization strings');
                i += 2;
                break;
            }
            i++;
        }
    }
}

function resolveImport(fromFile, specifier) {
    if (!specifier.startsWith('.')) {
        throw new Error(`Only relative imports are allowed: ${specifier}`);
    }

    const base = path.resolve(path.dirname(fromFile), specifier);
    const candidates = [
        base,
        `${base}.js`,
        `${base}.mjs`,
        `${base}.cjs`,
        path.join(base, 'index.js'),
        path.join(base, 'index.mjs'),
        path.join(base, 'index.cjs'),
    ];

    for (const candidate of candidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            const rel = path.relative(ROOT_DIR, candidate);
            if (rel.startsWith('..') || path.isAbsolute(rel)) {
                throw new Error(`Import leaves repository root: ${specifier}`);
            }
            return candidate;
        }
    }

    throw new Error(`Import target not found: ${specifier}`);
}

function parseImports(file, source) {
    const imports = [];
    const scan = (regex, sideEffectOnly = false) => {
        regex.lastIndex = 0;
        for (const match of source.matchAll(regex)) {
            const specifier = match.groups?.specifier;
            if (!specifier) continue;
            imports.push({
                sideEffectOnly,
                defaultName: match.groups?.defaultName,
                named: match.groups?.named,
                specifier,
                resolved: resolveImport(file, specifier),
            });
        }
    };

    scan(IMPORT_RE);
    scan(SIDE_EFFECT_IMPORT_RE, true);

    return imports;
}

function parseNamedImportList(raw) {
    if (!raw) return [];
    return raw
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
            const [imported, local] = part.split(/\s+as\s+/).map((value) => value.trim());
            return { imported, local: local || imported };
        });
}

function transformModule(source, exportedNames) {
    let code = source.replace(IMPORT_RE, '').replace(SIDE_EFFECT_IMPORT_RE, '');
    code = code.replace(/\bexport\s+const\s+([A-Za-z_$][\w$]*)\s*=/g, 'const $1 =');
    code = code.replace(/\bexport\s+default\b\s*/g, 'const __default__ = ');

    const exportedProps = exportedNames.map((name) => `${JSON.stringify(name)}: ${name}`).join(', ');
    const defaultProp = DEFAULT_EXPORT_RE.test(source) ? '"default": __default__' : '';
    const returnProps = [defaultProp, exportedProps].filter(Boolean).join(', ');

    return `${code}\n;({ ${returnProps} });`;
}

function evaluateModule(file, stack = []) {
    const absFile = path.resolve(file);
    if (moduleCache.has(absFile)) return moduleCache.get(absFile);

    if (stack.includes(absFile)) {
        throw new Error(`Circular import detected: ${stack.concat(absFile).map((item) => path.relative(ROOT_DIR, item)).join(' -> ')}`);
    }

    const source = fs.readFileSync(absFile, 'utf8');
    const imports = parseImports(absFile, source);
    const context = Object.create(null);

    for (const importEntry of imports) {
        const importedModule = evaluateModule(importEntry.resolved, stack.concat(absFile));
        if (importEntry.sideEffectOnly) continue;

        if (importEntry.defaultName) {
            if (!Object.prototype.hasOwnProperty.call(importedModule, 'default')) {
                throw new Error(`Missing default export in ${importEntry.specifier}`);
            }
            context[importEntry.defaultName] = importedModule.default;
        }

        for (const namedImport of parseNamedImportList(importEntry.named)) {
            if (!Object.prototype.hasOwnProperty.call(importedModule, namedImport.imported)) {
                throw new Error(`Missing named export "${namedImport.imported}" in ${importEntry.specifier}`);
            }
            context[namedImport.local] = importedModule[namedImport.imported];
        }
    }

    const exportedNames = [...source.matchAll(NAMED_EXPORT_RE)].map((match) => match[1]);
    const transformed = transformModule(source, exportedNames);

    try {
        const result = new vm.Script(transformed, { filename: absFile }).runInNewContext(context, {
            timeout: 1000,
            displayErrors: true,
        });

        if (!result || typeof result !== 'object' || (!Object.keys(result).length && /export\s+/.test(source))) {
            throw new Error('Module did not produce exports');
        }

        moduleCache.set(absFile, result);
        return result;
    } catch (error) {
        throw new Error(`Failed to evaluate module: ${error.message}`);
    }
}

function isPlainObject(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    return Object.prototype.toString.call(value) === '[object Object]';
}

function assertSerializable(file, value, pathKey) {
    const type = typeof value;
    if (value === null || type === 'string' || type === 'number' || type === 'boolean') return;

    if (type === 'undefined' || type === 'function' || type === 'symbol' || type === 'bigint') {
        report(file, `non-serializable value at ${pathKey}`, type);
        return;
    }

    if (Array.isArray(value)) {
        value.forEach((item, index) => assertSerializable(file, item, `${pathKey}[${index}]`));
        return;
    }

    if (!isPlainObject(value)) {
        report(file, `non-plain object at ${pathKey}`);
        return;
    }

    for (const [key, child] of Object.entries(value)) {
        assertSerializable(file, child, `${pathKey}.${key}`);
    }
}

function getPlaceholderSet(value) {
    const result = new Set();
    for (const match of String(value).matchAll(/\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}/g)) {
        result.add(match[1]);
    }
    return result;
}

function sameSet(a, b) {
    if (a.size !== b.size) return false;
    for (const item of a) {
        if (!b.has(item)) return false;
    }
    return true;
}

function validateString(file, value, pathKey) {
    if ((value.match(/\{\{/g) || []).length !== (value.match(/\}\}/g) || []).length) {
        report(file, `unbalanced {{ }} placeholder braces at ${pathKey}`);
    }

    for (const rule of DANGEROUS_STRING_PATTERNS) {
        if (rule.pattern.test(value)) {
            report(file, `${rule.message} at ${pathKey}`);
        }
    }
}

function validateTranslationMap(file, value, pathKey) {
    const keys = Object.keys(value);
    const knownLangKeys = keys.filter((key) => KNOWN_LANGUAGE_KEYS.has(key));
    if (!knownLangKeys.length) return false;

    const langKeys = keys.filter((key) => LANGUAGE_KEY_RE.test(key));

    if (langKeys.length !== keys.length) {
        const nonLangKeys = keys.filter((key) => !LANGUAGE_KEY_RE.test(key));
        report(file, `mixed language and non-language keys at ${pathKey}`, `unexpected keys: ${nonLangKeys.join(', ')}`);
        return true;
    }

    if (REQUIRED_LANGUAGE_KEYS.length) {
        const missingRequired = REQUIRED_LANGUAGE_KEYS.filter((lang) => !Object.prototype.hasOwnProperty.call(value, lang));
        if (missingRequired.length) {
            report(file, `missing required languages at ${pathKey}`, missingRequired.join(', '));
        }
    }

    for (const lang of langKeys) {
        if (typeof value[lang] !== 'string') {
            report(file, `translation value must be a string at ${pathKey}.${lang}`, typeof value[lang]);
            continue;
        }
        if (!value[lang].trim()) {
            report(file, `empty translation string at ${pathKey}.${lang}`);
        }
        if (BASE_PLACEHOLDER_LANGS.includes(lang)) {
            validateString(file, value[lang], `${pathKey}.${lang}`);
        } else {
            for (const rule of DANGEROUS_STRING_PATTERNS) {
                if (rule.pattern.test(value[lang])) {
                    report(file, `${rule.message} at ${pathKey}.${lang}`);
                }
            }
        }
    }

    const referenceLang = Object.prototype.hasOwnProperty.call(value, 'en') ? 'en' : langKeys[0];
    const referencePlaceholders = getPlaceholderSet(value[referenceLang]);
    for (const lang of BASE_PLACEHOLDER_LANGS) {
        if (typeof value[lang] !== 'string') continue;
        const placeholders = getPlaceholderSet(value[lang]);
        if (!sameSet(referencePlaceholders, placeholders)) {
            report(file, `placeholder mismatch at ${pathKey}.${lang}`, `expected: ${[...referencePlaceholders].join(', ') || 'none'}; got: ${[...placeholders].join(', ') || 'none'}`);
        }
    }

    return true;
}

function validateData(file, value, pathKey) {
    if (typeof value === 'string') {
        validateString(file, value, pathKey);
        return;
    }

    if (Array.isArray(value)) {
        value.forEach((item, index) => validateData(file, item, `${pathKey}[${index}]`));
        return;
    }

    if (!isPlainObject(value)) return;
    if (validateTranslationMap(file, value, pathKey)) return;

    for (const [key, child] of Object.entries(value)) {
        validateData(file, child, `${pathKey}.${key}`);
    }
}

function validateModule(file) {
    try {
        const mod = evaluateModule(file);
        for (const [exportName, value] of Object.entries(mod)) {
            assertSerializable(file, value, `$exports.${exportName}`);
            validateData(file, value, `$exports.${exportName}`);
        }
    } catch (error) {
        report(file, error.message);
    }
}

const files = walkFiles(ROOT_DIR).sort((a, b) => a.localeCompare(b));

for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    checkDangerousCode(file, source);
    checkTemplateLiteralInterpolations(file, source);
}

for (const file of files) {
    validateModule(file);
}

if (errors.length) {
    console.error(`Localization validation failed with ${errors.length} error(s):`);
    for (const error of errors.slice(0, MAX_ERROR_COUNT)) {
        console.error(`- ${error}`);
    }
    if (errors.length > MAX_ERROR_COUNT) {
        console.error(`...and ${errors.length - MAX_ERROR_COUNT} more error(s).`);
    }
    process.exit(1);
}

console.log(`Localization validation passed: ${files.length} file(s) checked.`);
