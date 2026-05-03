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
            ru: 'В казне {{orgName}} не хватило ${{pool}} на зарплаты в этом часу',
            ua: 'У казні {{orgName}} не вистачило ${{pool}} на зарплати цієї години',
            en: 'Treasury of {{orgName}} is short ${{pool}} for this hour\'s payroll',
            de: 'In der Kasse von {{orgName}} fehlen ${{pool}} für die Lohnzahlungen dieser Stunde',
            pl: 'W skarbcu {{orgName}} brakuje ${{pool}} na wypłaty w tej godzinie',
        },
    },
};
