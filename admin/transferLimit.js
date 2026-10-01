// Replies of the /transfer_limit_* commands (server commands/admin/financialMonitoring).
export default {
    accountNotFound: {
        ru: 'Аккаунт игрока не найден',
        ua: 'Акаунт гравця не знайдено',
        en: 'Player account not found',
        de: 'Spielerkonto nicht gefunden',
        pl: 'Nie znaleziono konta gracza',
    },
    temporary: {
        ru: 'Аккаунту игрока {{name}} разово установлен суточный лимит передачи ${{limit}} на {{hours}} ч.',
        ua: 'Акаунту гравця {{name}} разово встановлено добовий ліміт передачі ${{limit}} на {{hours}} год.',
        en: 'The account of {{name}} has a one-off daily transfer limit of ${{limit}} for {{hours}} h.',
        de: 'Das Konto von {{name}} hat für {{hours}} Std. ein einmaliges Tageslimit für Übertragungen von ${{limit}}.',
        pl: 'Konto gracza {{name}} ma jednorazowy dzienny limit przekazywania ${{limit}} na {{hours}} godz.',
    },
    permanent: {
        ru: 'Аккаунту игрока {{name}} установлен личный суточный лимит передачи ${{limit}}, действует каждые сутки',
        ua: 'Акаунту гравця {{name}} встановлено особистий добовий ліміт передачі ${{limit}}, діє щодоби',
        en: 'The account of {{name}} has a personal daily transfer limit of ${{limit}}, applied every day',
        de: 'Das Konto von {{name}} hat ein persönliches Tageslimit für Übertragungen von ${{limit}}, das jeden Tag gilt',
        pl: 'Konto gracza {{name}} ma osobisty dzienny limit przekazywania ${{limit}}, obowiązujący każdego dnia',
    },
    usageReset: {
        ru: 'Расход суточного лимита аккаунта {{name}} обнулён: было израсходовано ${{used}} из ${{limit}}',
        ua: 'Витрату добового ліміту акаунта {{name}} обнулено: було витрачено ${{used}} із ${{limit}}',
        en: 'The daily limit usage of the account of {{name}} is reset: ${{used}} of ${{limit}} had been spent',
        de: 'Der Verbrauch des Tageslimits des Kontos von {{name}} ist zurückgesetzt: ${{used}} von ${{limit}} waren verbraucht',
        pl: 'Wykorzystanie dziennego limitu konta gracza {{name}} wyzerowane: wykorzystano ${{used}} z ${{limit}}',
    },
    temporaryStillActive: {
        ru: 'У аккаунта ещё действует разовый лимит ${{limit}} (осталось {{time}}): пока он не истечёт, применяется он, а не личный',
        ua: 'В акаунта ще діє разовий ліміт ${{limit}} (залишилося {{time}}): поки він не спливе, застосовується він, а не особистий',
        en: 'The account still has a one-off limit of ${{limit}} ({{time}} left): until it runs out it applies instead of the personal one',
        de: 'Das Konto hat noch ein einmaliges Limit von ${{limit}} (noch {{time}}): Bis es abläuft, gilt es anstelle des persönlichen',
        pl: 'Konto ma jeszcze jednorazowy limit ${{limit}} (pozostało {{time}}): dopóki nie wygaśnie, obowiązuje on zamiast osobistego',
    },
    reset: {
        ru: 'Аккаунту игрока {{name}} возвращён стандартный лимит передачи ${{limit}}',
        ua: 'Акаунту гравця {{name}} повернено стандартний ліміт передачі ${{limit}}',
        en: 'The account of {{name}} is back to the default transfer limit of ${{limit}}',
        de: 'Das Konto von {{name}} hat wieder das Standard-Übertragungslimit von ${{limit}}',
        pl: 'Konto gracza {{name}} ma z powrotem domyślny limit przekazywania ${{limit}}',
    },
};
