# Olymp RP — Localization

<a id="top"></a>

[![English](https://img.shields.io/badge/%F0%9F%87%AC%F0%9F%87%A7-English-2ea44f?style=for-the-badge)](#-english)
[![Українська](https://img.shields.io/badge/%F0%9F%87%BA%F0%9F%87%A6-Українська-f4d04e?style=for-the-badge)](#-українська)
[![Deutsch](https://img.shields.io/badge/%F0%9F%87%A9%F0%9F%87%AA-Deutsch-d73a49?style=for-the-badge)](#-deutsch)
[![Polski](https://img.shields.io/badge/%F0%9F%87%B5%F0%9F%87%B1-Polski-9b59b6?style=for-the-badge)](#-polski)
[![Русский](https://img.shields.io/badge/%F0%9F%87%B7%F0%9F%87%BA-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-1f6feb?style=for-the-badge)](#-русский)

> Olymp RP localization repository. Required languages: **`ru`**, **`ua`**, **`en`**, **`de`**, **`pl`** + optional `fr`, `zh`. Every PR is auto-validated via `npm test`.

---

## 🇬🇧 English

Hey! First time here? No worries, it's simpler than it looks. Step-by-step below.

### Before you start

- All strings live in `.js` files inside per-system folders (`account/`, `bank/`, `quests/`, etc.).
- Each string is an object with language keys. **All 5 languages (`ru`, `ua`, `en`, `de`, `pl`) are required.**
- Every PR is checked by `npm test` — it validates syntax, placeholders, and unsafe code. Red CI = no merge.

### Steps

1. **Fork** this repo (`Fork` button at the top right on GitHub).
2. **Clone your fork** locally:
   ```sh
   git clone https://github.com/<your-username>/olymp-rp-localization.git
   cd olymp-rp-localization
   ```
3. **Create a branch** (one branch = one PR):
   ```sh
   git checkout -b fix/account-login-en
   ```
4. **Find the file.** Files are grouped by system: editing login? → `account/`, bank? → `bank/`, etc.
5. **Edit or add the key.** Format below.
6. **Validate locally** (requires Node.js 20+):
   ```sh
   npm test
   ```
   Green? Move on. Red? Read the output — it points to the exact file and line.
7. **Commit & push:**
   ```sh
   git add .
   git commit -m "account: fix english translation for loginRecovery"
   git push origin fix/account-login-en
   ```
8. **Open a Pull Request** to the `master` branch of the upstream repo. Fill in what you changed and why.

### Translation format

```js
loginRecovery: {
    ru: 'Восстановление логина',
    ua: 'Відновлення логіну',
    en: 'Login Recovery',
    de: 'Login-Wiederherstellung',
    pl: 'Odzyskiwanie loginu',
},
```

**Rules:**
- Never skip any of the 5 base languages.
- Placeholders like `{{name}}`, `{{amount}}` must match **across all** languages. If `en` has `{{count}}` — `ru`, `ua`, `de`, `pl` need it too.
- Don't use `${...}` template literals — plain `'...'` / `"..."` only.
- No `<script>`, `onclick=`, `javascript:` — the validator will reject it.

### Pre-PR checklist

- [ ] All 5 languages filled (`ru`, `ua`, `en`, `de`, `pl`).
- [ ] Placeholders identical across languages.
- [ ] Translation is human, not raw Google Translate.
- [ ] `npm test` is green locally.
- [ ] Commit message in `<area>: <what you did>` style.

[⬆ Back to top](#top)

---

## 🇺🇦 Українська

Привіт! Якщо ти тут уперше — не хвилюйся, усе простіше, ніж здається. Покрокова інструкція нижче.

### Що варто знати заздалегідь

- Усі рядки лежать у `.js`-файлах за папками (`account/`, `bank/`, `quests/` тощо).
- Кожен рядок — це обʼєкт із ключами мов. **Усі 5 мов (`ru`, `ua`, `en`, `de`, `pl`) обовʼязкові.**
- Перед PR прогоняється `npm test` — він перевіряє синтаксис, плейсхолдери та небезпечні конструкції. Червоний CI — мерджа не буде.

### Покроково

1. **Зроби форк** цього репозиторію (кнопка `Fork` справа вгорі на GitHub).
2. **Клонуй форк** до себе:
   ```sh
   git clone https://github.com/<твій-нік>/olymp-rp-localization.git
   cd olymp-rp-localization
   ```
3. **Створи гілку** (одна гілка = один PR):
   ```sh
   git checkout -b fix/account-login-ua
   ```
4. **Знайди потрібний файл.** Структура — за системами: правиш логін — у `account/`, банк — у `bank/`, і т.д.
5. **Відредагуй або додай ключ.** Формат — нижче.
6. **Перевір локально** (потрібен Node.js 20+):
   ```sh
   npm test
   ```
   Зелене — їдемо далі. Червоне — читай вивід, там одразу зазначений файл і рядок.
7. **Закомить і запушни:**
   ```sh
   git add .
   git commit -m "account: fix ukrainian translation for loginRecovery"
   git push origin fix/account-login-ua
   ```
8. **Відкрий Pull Request** до `master` основного репозиторію. Опиши, що змінив і навіщо.

### Формат рядка

```js
loginRecovery: {
    ru: 'Восстановление логина',
    ua: 'Відновлення логіну',
    en: 'Login Recovery',
    de: 'Login-Wiederherstellung',
    pl: 'Odzyskiwanie loginu',
},
```

**Правила:**
- Не пропускай жодну з 5 базових мов.
- Плейсхолдери `{{name}}`, `{{amount}}` мають збігатися **в усіх** мовах. Якщо в `en` є `{{count}}` — він має бути і в `ru`, і в `ua`, і в `de`, і в `pl`.
- Не використовуй `${...}` у бек-тиках — лише звичайні рядки в `'...'` або `"..."`.
- Жодних `<script>`, `onclick=`, `javascript:` — валідатор відхилить.

### Чек-лист перед PR

- [ ] Усі 5 мов заповнені (`ru`, `ua`, `en`, `de`, `pl`).
- [ ] Плейсхолдери однакові в усіх мовах.
- [ ] Переклад людський, не сирий Google Translate.
- [ ] `npm test` локально зелений.
- [ ] У коміті зрозуміле повідомлення у стилі `<область>: <що зробив>`.

[⬆ Нагору](#top)

---

## 🇩🇪 Deutsch

Hi! Zum ersten Mal hier? Keine Sorge — es ist einfacher, als es aussieht. Schritt für Schritt unten.

### Bevor du loslegst

- Alle Strings liegen in `.js`-Dateien in System-Ordnern (`account/`, `bank/`, `quests/` usw.).
- Jeder String ist ein Objekt mit Sprachschlüsseln. **Alle 5 Sprachen (`ru`, `ua`, `en`, `de`, `pl`) sind Pflicht.**
- Jeder PR wird durch `npm test` geprüft — Syntax, Platzhalter, unsicherer Code. Rotes CI = kein Merge.

### Schritte

1. **Forke** dieses Repo (`Fork`-Button oben rechts auf GitHub).
2. **Klone deinen Fork** lokal:
   ```sh
   git clone https://github.com/<dein-name>/olymp-rp-localization.git
   cd olymp-rp-localization
   ```
3. **Erstelle einen Branch** (ein Branch = ein PR):
   ```sh
   git checkout -b fix/account-login-de
   ```
4. **Finde die Datei.** Sortiert nach System: Login bearbeiten? → `account/`, Bank? → `bank/`, usw.
5. **Bearbeite oder ergänze den Schlüssel.** Format unten.
6. **Lokal prüfen** (Node.js 20+ nötig):
   ```sh
   npm test
   ```
   Grün? Weiter. Rot? Lies die Ausgabe — Datei und Zeile stehen drin.
7. **Commit & Push:**
   ```sh
   git add .
   git commit -m "account: fix german translation for loginRecovery"
   git push origin fix/account-login-de
   ```
8. **Öffne einen Pull Request** gegen den `master`-Branch des Hauptrepos. Beschreibe, was du geändert hast und warum.

### Übersetzungsformat

```js
loginRecovery: {
    ru: 'Восстановление логина',
    ua: 'Відновлення логіну',
    en: 'Login Recovery',
    de: 'Login-Wiederherstellung',
    pl: 'Odzyskiwanie loginu',
},
```

**Regeln:**
- Keine der 5 Basissprachen auslassen.
- Platzhalter wie `{{name}}`, `{{amount}}` müssen in **allen** Sprachen identisch sein. Wenn `en` ein `{{count}}` hat — `ru`, `ua`, `de`, `pl` brauchen es ebenfalls.
- Keine `${...}`-Template-Literals — nur einfache Strings in `'...'` / `"..."`.
- Kein `<script>`, `onclick=`, `javascript:` — der Validator lehnt ab.

### Pre-PR-Checkliste

- [ ] Alle 5 Sprachen ausgefüllt (`ru`, `ua`, `en`, `de`, `pl`).
- [ ] Platzhalter überall identisch.
- [ ] Übersetzung von Hand, kein roher Google Translate.
- [ ] `npm test` lokal grün.
- [ ] Commit-Message im Stil `<bereich>: <was getan>`.

[⬆ Nach oben](#top)

---

## 🇵🇱 Polski

Cześć! Pierwszy raz tutaj? Spokojnie — to prostsze, niż wygląda. Krok po kroku poniżej.

### Zanim zaczniesz

- Wszystkie napisy są w plikach `.js` w folderach systemów (`account/`, `bank/`, `quests/` itd.).
- Każdy napis to obiekt z kluczami języków. **Wszystkie 5 języków (`ru`, `ua`, `en`, `de`, `pl`) są wymagane.**
- Każdy PR jest sprawdzany przez `npm test` — składnia, placeholdery, niebezpieczny kod. Czerwone CI = brak merge.

### Krok po kroku

1. **Zrób fork** tego repo (przycisk `Fork` w prawym górnym rogu na GitHub).
2. **Sklonuj swojego forka** lokalnie:
   ```sh
   git clone https://github.com/<twój-login>/olymp-rp-localization.git
   cd olymp-rp-localization
   ```
3. **Utwórz branch** (jeden branch = jeden PR):
   ```sh
   git checkout -b fix/account-login-pl
   ```
4. **Znajdź plik.** Pliki są pogrupowane wg systemu: edytujesz login? → `account/`, bank? → `bank/`, itd.
5. **Edytuj lub dodaj klucz.** Format poniżej.
6. **Sprawdź lokalnie** (potrzebny Node.js 20+):
   ```sh
   npm test
   ```
   Zielone? Lecimy dalej. Czerwone? Czytaj output — wskazuje konkretny plik i linijkę.
7. **Commit i push:**
   ```sh
   git add .
   git commit -m "account: fix polish translation for loginRecovery"
   git push origin fix/account-login-pl
   ```
8. **Otwórz Pull Request** do brancha `master` głównego repo. Opisz co i dlaczego zmieniłeś.

### Format tłumaczenia

```js
loginRecovery: {
    ru: 'Восстановление логина',
    ua: 'Відновлення логіну',
    en: 'Login Recovery',
    de: 'Login-Wiederherstellung',
    pl: 'Odzyskiwanie loginu',
},
```

**Zasady:**
- Nie pomijaj żadnego z 5 podstawowych języków.
- Placeholdery `{{name}}`, `{{amount}}` muszą być takie same we **wszystkich** językach. Jeśli `en` ma `{{count}}` — `ru`, `ua`, `de`, `pl` też muszą go mieć.
- Nie używaj `${...}` w backtickach — tylko zwykłe stringi w `'...'` / `"..."`.
- Bez `<script>`, `onclick=`, `javascript:` — walidator odrzuci.

### Checklista przed PR

- [ ] Wszystkie 5 języków wypełnione (`ru`, `ua`, `en`, `de`, `pl`).
- [ ] Placeholdery identyczne we wszystkich językach.
- [ ] Tłumaczenie ludzkie, nie surowe Google Translate.
- [ ] `npm test` lokalnie zielony.
- [ ] Commit message w stylu `<obszar>: <co zrobione>`.

[⬆ Do góry](#top)

---

## 🇷🇺 Русский

Привет! Если ты впервые тут — не переживай, всё проще, чем кажется. Ниже пошаговая инструкция.

### Что нужно знать заранее

- Все строки лежат в `.js`-файлах по папкам (`account/`, `bank/`, `quests/` и т.д.).
- Каждая строка — это объект с ключами языков. **Все 5 языков (`ru`, `ua`, `en`, `de`, `pl`) обязательны.**
- Перед PR прогоняется `npm test` — он проверяет синтаксис, плейсхолдеры и опасные конструкции. PR с красным CI не вмёрджат.

### Пошагово

1. **Форкни** этот репозиторий (кнопка `Fork` справа сверху на GitHub).
2. **Склонируй форк** к себе:
   ```sh
   git clone https://github.com/<твой-ник>/olymp-rp-localization.git
   cd olymp-rp-localization
   ```
3. **Создай ветку** (одна ветка = один PR):
   ```sh
   git checkout -b fix/account-login-ru
   ```
4. **Найди нужный файл.** Структура — по системам: правишь логин — иди в `account/`, банк — в `bank/`, и т.д.
5. **Отредактируй или добавь ключ.** Формат — ниже.
6. **Проверь локально** (нужен Node.js 20+):
   ```sh
   npm test
   ```
   Если зелёное — едем дальше. Если красное — читай вывод, там сразу указан файл и строка.
7. **Закоммить и запушь:**
   ```sh
   git add .
   git commit -m "account: fix russian translation for loginRecovery"
   git push origin fix/account-login-ru
   ```
8. **Открой Pull Request** в `master` основного репозитория. Заполни описание (что менял и зачем).

### Формат строки

```js
loginRecovery: {
    ru: 'Восстановление логина',
    ua: 'Відновлення логіну',
    en: 'Login Recovery',
    de: 'Login-Wiederherstellung',
    pl: 'Odzyskiwanie loginu',
},
```

**Правила:**
- Не пропускай ни один из 5 базовых языков.
- Плейсхолдеры `{{name}}`, `{{amount}}` должны совпадать **во всех** языках. Если в `en` есть `{{count}}` — он должен быть и в `ru`, и в `ua`, и в `de`, и в `pl`.
- Не используй `${...}` в обратных кавычках — только обычные строки в `'...'` или `"..."`.
- Никаких `<script>`, `onclick=`, `javascript:` — валидатор завернёт.

### Чек-лист перед PR

- [ ] Все 5 языков заполнены (`ru`, `ua`, `en`, `de`, `pl`).
- [ ] Плейсхолдеры одинаковые во всех языках.
- [ ] Перевод осмысленный, а не из Google Translate.
- [ ] `npm test` локально зелёный.
- [ ] В коммите понятное сообщение в стиле `<область>: <что сделал>`.

[⬆ Наверх](#top)

---

Thanks for contributing! · Дякуємо за внесок! · Danke fürs Mitmachen! · Dzięki za wkład! · Спасибо за вклад!
