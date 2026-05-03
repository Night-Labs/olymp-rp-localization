export const taxCycle = {
    notify: {
        header: {
            ru: 'Налог организации',
            ua: 'Податок організації',
            en: 'Organization Tax',
            de: 'Organisationssteuer',
            pl: 'Podatek organizacji',
        },
    },
    debt: {
        started: {
            ru: 'На казне организации {{orgName}} не хватило ${{rent}} на ежедневный налог. У вас 72 часа на погашение долга, иначе HQ будет конфискован',
            ua: 'У казні організації {{orgName}} не вистачило ${{rent}} на щоденний податок. У вас 72 години на погашення боргу, інакше HQ буде конфісковано',
            en: 'The treasury of {{orgName}} is short ${{rent}} for daily tax. You have 72 hours to repay before the HQ is confiscated',
            de: 'In der Kasse von {{orgName}} fehlen ${{rent}} für die Tagessteuer. Du hast 72 Stunden zur Tilgung, sonst wird das HQ beschlagnahmt',
            pl: 'W skarbcu organizacji {{orgName}} brakuje ${{rent}} na dzienny podatek. Masz 72 godziny na spłatę, inaczej HQ zostanie skonfiskowany',
        },
        reminder: {
            ru: 'Долг по налогу {{orgName}} не погашен. Осталось {{hoursLeft}}ч до конфискации HQ. Требуется ${{rent}}',
            ua: 'Борг з податку {{orgName}} не погашено. Залишилося {{hoursLeft}}год до конфіскації HQ. Потрібно ${{rent}}',
            en: 'Tax debt of {{orgName}} is unpaid. {{hoursLeft}}h until HQ confiscation. Required: ${{rent}}',
            de: 'Steuerschuld von {{orgName}} nicht beglichen. Noch {{hoursLeft}}h bis zur HQ-Beschlagnahmung. Benötigt: ${{rent}}',
            pl: 'Dług podatkowy {{orgName}} niespłacony. {{hoursLeft}}h do konfiskaty HQ. Wymagane: ${{rent}}',
        },
        cleared: {
            ru: 'Долг по налогу организации {{orgName}} погашен',
            ua: 'Борг з податку організації {{orgName}} погашено',
            en: 'Tax debt of {{orgName}} has been cleared',
            de: 'Steuerschuld von {{orgName}} wurde beglichen',
            pl: 'Dług podatkowy {{orgName}} został spłacony',
        },
    },
    confiscation: {
        notifyMembers: {
            ru: 'HQ организации {{orgName}} конфискован за неуплату налога. Организация распущена',
            ua: 'HQ організації {{orgName}} конфісковано за несплату податку. Організацію розпущено',
            en: 'The HQ of {{orgName}} has been confiscated for unpaid tax. The organization is disbanded',
            de: 'Das HQ von {{orgName}} wurde wegen unbezahlter Steuern beschlagnahmt. Die Organisation ist aufgelöst',
            pl: 'HQ organizacji {{orgName}} zostało skonfiskowane za nieopłacony podatek. Organizacja rozwiązana',
        },
        leaderRefund: {
            ru: 'HQ организации {{orgName}} конфискован. На банк зачислено ${{amount}}',
            ua: 'HQ організації {{orgName}} конфісковано. На банк зараховано ${{amount}}',
            en: 'HQ of {{orgName}} confiscated. ${{amount}} credited to your bank',
            de: 'HQ von {{orgName}} beschlagnahmt. ${{amount}} wurden deinem Bankkonto gutgeschrieben',
            pl: 'HQ {{orgName}} skonfiskowane. ${{amount}} zapisano na koncie bankowym',
        },
        sms: {
            ru: 'HQ вашей организации {{orgName}} конфискован за неуплату налога. Возвращено {{percent}}% от стоимости + остаток казны',
            ua: 'HQ вашої організації {{orgName}} конфісковано за несплату податку. Повернуто {{percent}}% від вартості + залишок казни',
            en: 'HQ of your organization {{orgName}} confiscated for unpaid tax. {{percent}}% refund + treasury leftover credited',
            de: 'HQ deiner Organisation {{orgName}} wegen unbezahlter Steuern beschlagnahmt. {{percent}}% Erstattung + Restguthaben gutgeschrieben',
            pl: 'HQ twojej organizacji {{orgName}} skonfiskowane za nieopłacony podatek. Zwrócono {{percent}}% wartości + saldo skarbca',
        },
    },
};
