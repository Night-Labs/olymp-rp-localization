export default {
    // Login step
    title: {
        ru: 'Подтверждение входа',
        ua: 'Підтвердження входу',
        en: 'Confirm sign-in',
        de: 'Anmeldung bestätigen',
    },
    subtitle: {
        ru: 'Введите 6-значный код из приложения-аутентификатора',
        ua: 'Введіть 6-значний код із застосунку-автентифікатора',
        en: 'Enter the 6-digit code from your authenticator app',
        de: 'Gib den 6-stelligen Code aus deiner Authenticator-App ein',
    },
    placeholder: {
        ru: 'Код из приложения',
        ua: 'Код із застосунку',
        en: 'Code from the app',
        de: 'Code aus der App',
    },
    confirm: {
        ru: 'Подтвердить',
        ua: 'Підтвердити',
        en: 'Confirm',
        de: 'Bestätigen',
    },
    back: {
        ru: 'Назад',
        ua: 'Назад',
        en: 'Back',
        de: 'Zurück',
    },

    // Settings
    name: {
        ru: 'Двухфакторная аутентификация',
        ua: 'Двофакторна автентифікація',
        en: 'Two-factor authentication',
        de: 'Zwei-Faktor-Authentifizierung',
    },
    description: {
        ru: 'При входе, кроме пароля, нужен код из Google Authenticator, Authy или другого приложения-аутентификатора. Без вашего телефона в аккаунт не войти, даже зная пароль',
        ua: 'Під час входу, окрім пароля, потрібен код із Google Authenticator, Authy або іншого застосунку-автентифікатора. Без вашого телефона в акаунт не увійти, навіть знаючи пароль',
        en: 'Signing in also needs a code from Google Authenticator, Authy or another authenticator app. Without your phone nobody gets into the account, even with the password',
        de: 'Zur Anmeldung wird zusätzlich ein Code aus Google Authenticator, Authy oder einer anderen Authenticator-App benötigt. Ohne dein Handy kommt niemand ins Konto, auch nicht mit dem Passwort',
    },
    enable: {
        ru: 'Включить',
        ua: 'Увімкнути',
        en: 'Enable',
        de: 'Aktivieren',
    },
    disable: {
        ru: 'Отключить',
        ua: 'Вимкнути',
        en: 'Disable',
        de: 'Deaktivieren',
    },
    cancel: {
        ru: 'Отмена',
        ua: 'Скасувати',
        en: 'Cancel',
        de: 'Abbrechen',
    },
    setupTitle: {
        ru: 'Подключение аутентификатора',
        ua: 'Підключення автентифікатора',
        en: 'Set up the authenticator',
        de: 'Authenticator einrichten',
    },
    setupHint: {
        ru: 'Отсканируйте QR-код в Google Authenticator, Authy или другом приложении-аутентификаторе и введите код, который оно покажет',
        ua: 'Відскануйте QR-код у Google Authenticator, Authy або іншому застосунку-автентифікаторі та введіть код, який він покаже',
        en: 'Scan the QR code with Google Authenticator, Authy or another authenticator app and enter the code it shows',
        de: 'Scanne den QR-Code mit Google Authenticator, Authy oder einer anderen Authenticator-App und gib den angezeigten Code ein',
    },
    manualKey: {
        ru: 'Или введите ключ вручную',
        ua: 'Або введіть ключ вручну',
        en: 'Or enter the key manually',
        de: 'Oder gib den Schlüssel manuell ein',
    },
    keyCopied: {
        ru: 'Ключ скопирован',
        ua: 'Ключ скопійовано',
        en: 'Key copied',
        de: 'Schlüssel kopiert',
    },
    disableHint: {
        ru: 'Введите код из приложения-аутентификатора, чтобы отключить защиту',
        ua: 'Введіть код із застосунку-автентифікатора, щоб вимкнути захист',
        en: 'Enter the code from your authenticator app to turn the protection off',
        de: 'Gib den Code aus deiner Authenticator-App ein, um den Schutz zu deaktivieren',
    },

    // Server notifications
    wrongCode: {
        ru: 'Неверный код. Проверьте, что время на телефоне выставляется автоматически',
        ua: 'Невірний код. Перевірте, що час на телефоні встановлюється автоматично',
        en: 'Wrong code. Make sure the time on your phone is set automatically',
        de: 'Falscher Code. Prüfe, ob die Uhrzeit auf deinem Handy automatisch eingestellt wird',
    },
    loginExpired: {
        ru: 'Время на ввод кода истекло, войдите снова',
        ua: 'Час на введення коду минув, увійдіть знову',
        en: 'Time to enter the code is up, sign in again',
        de: 'Die Zeit für den Code ist abgelaufen, melde dich erneut an',
    },
    tooManyAttempts: {
        ru: 'Слишком много неверных кодов, войдите снова',
        ua: 'Забагато невірних кодів, увійдіть знову',
        en: 'Too many wrong codes, sign in again',
        de: 'Zu viele falsche Codes, melde dich erneut an',
    },
    locked: {
        ru: 'Слишком много неверных кодов: вход в аккаунт закрыт на {{hours}} ч. Если это были не вы, смените пароль через "Не могу войти"',
        ua: 'Забагато невірних кодів: вхід в акаунт закрито на {{hours}} год. Якщо це були не ви, змініть пароль через "Не можу увійти"',
        en: 'Too many wrong codes: sign-in to this account is closed for {{hours}} h. If it was not you, change the password via "Can\'t sign in"',
        de: 'Zu viele falsche Codes: Die Anmeldung ist für {{hours}} Std. gesperrt. Wenn du das nicht warst, ändere dein Passwort über "Anmeldung fehlgeschlagen"',
    },
    failedWarning: {
        ru: 'С прошлого входа было введено неверных кодов: {{count}}. Если это были не вы, кто-то знает ваш пароль: смените его',
        ua: 'З минулого входу було введено невірних кодів: {{count}}. Якщо це були не ви, хтось знає ваш пароль: змініть його',
        en: 'Wrong codes entered since your last sign-in: {{count}}. If it was not you, someone knows your password: change it',
        de: 'Falsche Codes seit deiner letzten Anmeldung: {{count}}. Wenn du das nicht warst, kennt jemand dein Passwort: ändere es',
    },
    alreadyEnabled: {
        ru: 'Двухфакторная аутентификация уже включена',
        ua: 'Двофакторна автентифікація вже увімкнена',
        en: 'Two-factor authentication is already on',
        de: 'Die Zwei-Faktor-Authentifizierung ist bereits aktiv',
    },
    enabled: {
        ru: 'Двухфакторная аутентификация включена',
        ua: 'Двофакторну автентифікацію увімкнено',
        en: 'Two-factor authentication is on',
        de: 'Zwei-Faktor-Authentifizierung aktiviert',
    },
    disabled: {
        ru: 'Двухфакторная аутентификация отключена',
        ua: 'Двофакторну автентифікацію вимкнено',
        en: 'Two-factor authentication is off',
        de: 'Zwei-Faktor-Authentifizierung deaktiviert',
    },

    // Admin reset (/reset_2fa)
    adminReset: {
        ru: 'Двухфакторная аутентификация {{name}} сброшена',
        ua: 'Двофакторну автентифікацію {{name}} скинуто',
        en: 'Two-factor authentication of {{name}} has been reset',
        de: 'Die Zwei-Faktor-Authentifizierung von {{name}} wurde zurückgesetzt',
    },
    adminNotEnabled: {
        ru: 'У {{name}} не включена двухфакторная аутентификация',
        ua: 'У {{name}} не увімкнена двофакторна автентифікація',
        en: '{{name}} does not have two-factor authentication on',
        de: '{{name}} hat keine Zwei-Faktor-Authentifizierung aktiviert',
    },
    adminHigherLevel: {
        ru: 'Нельзя сбросить двухфакторную аутентификацию администратору выше вашего уровня',
        ua: 'Не можна скинути двофакторну автентифікацію адміністратору вищого рівня, ніж ваш',
        en: 'You cannot reset two-factor authentication of an admin above your level',
        de: 'Du kannst die Zwei-Faktor-Authentifizierung eines Admins über deinem Rang nicht zurücksetzen',
    },
};
