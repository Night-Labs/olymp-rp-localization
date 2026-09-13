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
            ru: 'На баланс организации зачислено ${{amount}}',
            ua: 'На баланс організації зараховано ${{amount}}',
            en: 'Deposited ${{amount}} to the organization balance',
            de: '${{amount}} auf das Organisationsguthaben eingezahlt',
            pl: 'Wpłacono ${{amount}} na bilans organizacji',
        },
        withdrawn: {
            ru: 'С баланса организации снято ${{amount}}',
            ua: 'З балансу організації знято ${{amount}}',
            en: 'Withdrew ${{amount}} from the organization balance',
            de: '${{amount}} vom Organisationsguthaben abgehoben',
            pl: 'Pobrano ${{amount}} z bilansu organizacji',
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
            ru: 'Недостаточно средств на балансе организации',
            ua: 'Недостатньо коштів на балансі організації',
            en: 'Not enough funds on the organization balance',
            de: 'Nicht genug Organisationsguthaben',
            pl: 'Niewystarczające środki na bilansie organizacji',
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
