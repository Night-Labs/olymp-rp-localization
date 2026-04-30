export const bank = {
    notify: {
        header: {
            ru: 'Банк организации',
            ua: 'Банк організації',
            en: 'Organization Bank',
            de: 'Organisationsbank',
            pl: 'Bank organizacji',
        },
    },
    success: {
        deposited: {
            ru: 'В казну зачислено ${{amount}}',
            ua: 'У казну зараховано ${{amount}}',
            en: 'Deposited ${{amount}} to the treasury',
            de: '${{amount}} in die Kasse eingezahlt',
            pl: 'Wpłacono ${{amount}} do skarbca',
        },
        withdrawn: {
            ru: 'С казны снято ${{amount}}',
            ua: 'З казни знято ${{amount}}',
            en: 'Withdrew ${{amount}} from the treasury',
            de: '${{amount}} aus der Kasse abgehoben',
            pl: 'Pobrano ${{amount}} ze skarbca',
        },
    },
    errors: {
        notInOrganization: {
            ru: 'Вы не состоите в организации',
            ua: 'Ви не перебуваєте в організації',
            en: 'You are not in an organization',
            de: 'Du bist in keiner Organisation',
            pl: 'Nie należysz do organizacji',
        },
        noPermission: {
            ru: 'Недостаточно прав для управления банком',
            ua: 'Недостатньо прав для керування банком',
            en: 'You lack permission to manage the bank',
            de: 'Du hast keine Berechtigung zur Bankverwaltung',
            pl: 'Brak uprawnień do zarządzania bankiem',
        },
        invalidAmount: {
            ru: 'Введите корректную сумму',
            ua: 'Введіть коректну суму',
            en: 'Enter a valid amount',
            de: 'Gib einen gültigen Betrag ein',
            pl: 'Wpisz poprawną kwotę',
        },
        notEnoughCash: {
            ru: 'Недостаточно наличных',
            ua: 'Недостатньо готівки',
            en: 'Not enough cash',
            de: 'Nicht genug Bargeld',
            pl: 'Niewystarczająca gotówka',
        },
        notEnoughBalance: {
            ru: 'Недостаточно средств в казне',
            ua: 'Недостатньо коштів у казні',
            en: 'Not enough funds in the treasury',
            de: 'Nicht genug Mittel in der Kasse',
            pl: 'Niewystarczające środki w skarbcu',
        },
        failed: {
            ru: 'Не удалось выполнить операцию',
            ua: 'Не вдалося виконати операцію',
            en: 'Operation failed',
            de: 'Vorgang fehlgeschlagen',
            pl: 'Operacja nie powiodła się',
        },
    },
};
