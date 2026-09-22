export const payday = {
    notify: {
        header: {
            ru: 'Зарплата',
            ua: 'Зарплата',
            en: 'Payday',
            de: 'Lohntag',
            pl: 'Wypłata',
        },
    },
    success: {
        received: {
            ru: 'Зарплата от {{orgName}}: ${{amount}} зачислено на банк',
            ua: 'Зарплата від {{orgName}}: ${{amount}} зараховано на банк',
            en: 'Salary from {{orgName}}: ${{amount}} credited to your bank',
            de: 'Gehalt von {{orgName}}: ${{amount}} auf dein Bankkonto gutgeschrieben',
            pl: 'Wynagrodzenie od {{orgName}}: ${{amount}} zapisano na koncie bankowym',
        },
    },
    errors: {
        insufficientPool: {
            ru: 'На балансе {{orgName}} не хватило ${{pool}} на зарплаты в этом часу',
            ua: 'На балансі {{orgName}} не вистачило ${{pool}} на зарплати цієї години',
            en: 'The balance of {{orgName}} is short ${{pool}} for this hour\'s payroll',
            de: 'Dem Guthaben von {{orgName}} fehlen ${{pool}} für die Lohnzahlungen dieser Stunde',
            pl: 'Na bilansie {{orgName}} brakuje ${{pool}} na wypłaty w tej godzinie',
        },
    },
};
