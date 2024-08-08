export default {
    fine: {
        ru: 'Выписать штраф',
        ua: 'Виписати штраф',
        en: 'Issue Fine',
        de: 'Bußgeld verhängen',
        pl: 'Nałożyć grzywnę',
    },
    reason: {
        ru: 'Укажите причину',
        ua: 'Вкажіть причину',
        en: 'Specify Reason',
        de: 'Geben Sie einen Grund an',
        pl: 'Podaj powód',
    },
    comment: {
        ru: 'Комментарий (?)',
        ua: 'Коментар (?)',
        en: 'Comment (?)',
        de: 'Kommentar (?)',
        pl: 'Komentarz (?)',
    },
    sum: {
        ru: 'Введите сумму от {{min}} до {{max}}',
        ua: 'Введіть суму від {{min}} до {{max}}',
        en: 'Enter Amount from {{min}} to {{max}}',
        de: 'Geben Sie einen Betrag zwischen {{min}} und {{max}} ein',
        pl: 'Wprowadź kwotę od {{min}} do {{max}}',
    },
    accept: {
        ru: 'Подтвердить',
        ua: 'Підтвердити',
        en: 'Accept',
        de: 'Bestätigen',
        pl: 'Zaakceptować',
    },
    decline: {
        ru: 'Отмена',
        ua: 'Скасування',
        en: 'Decline',
        de: 'Ablehnen',
        pl: 'Odrzucić',
    },

    // Modal

    modal: {
        title: {
            ru: 'Штраф',
            ua: 'Штраф',
            en: 'Fine',
            de: 'Bußgeld',
            pl: 'Grzywna',
        },
        text: {
            ru: '{{name}} выписал вам штраф по бланку <br /> <br/> Причина: <span style="color: white">{{reason}}</span> <br /> Сумма: <span style="color: white">${{value}}</span> <br /> <br/> Вы хотите его оплатить?',
            ua: '{{name}} виписав вам штраф за бланком <br /> <br/> Причина: <span style="color: white">{{reason}}</span> <br /> Сума: <span style="color: white">${{value}}</span> <br /> <br/> Ви хочете його оплатити?',
            en: '{{name}} has issued you a fine for a ticket. <br /> <br/> Reason: <span style="color: white">{{reason}}</span> <br /> Amount: <span style="color: white">${{value}}</span> <br /> <br/> Would you like to pay it?',
            de: '{{name}} hat Ihnen ein Bußgeld für ein Ticket ausgestellt. <br /> <br/> Grund: <span style="color: white">{{reason}}</span> <br /> Betrag: <span style="color: white">${{value}}</span> <br /> <br/> Möchten Sie es bezahlen?',
            pl: '{{name}} wystawił Ci mandat za bilet. <br /> <br/> Powód: <span style="color: white">{{reason}}</span> <br /> Kwota: <span style="color: white">${{value}}</span> <br /> <br/> Czy chcesz go zapłacić?',
        },
        confirmButton: {
            ru: 'Оплатить',
            ua: 'Оплатити',
            en: 'Pay',
            de: 'Bezahlen',
            pl: 'Opłacić',
        },
        declineButton: {
            ru: 'Отказаться',
            ua: 'Відмовитися',
            en: 'Decline',
            de: 'Ablehnen',
            pl: 'Odrzucić',
        },
    },
    youPayedFine: {
        ru: 'Вы оплатили штраф на сумму ${{value}}',
        ua: 'Ви оплатили штраф на суму ${{value}}',
        en: 'You have paid a fine of ${{value}}',
        de: 'Sie haben ein Bußgeld in Höhe von ${{value}} bezahlt',
        pl: 'Opłaciłeś grzywnę w wysokości ${{value}}',
    },
    targetPayedFine: {
        ru: '{{name}} оплатил вам штраф на сумму ${{value}}',
        ua: '{{name}} оплатив вам штраф на суму ${{value}}',
        en: '{{name}} has paid you a fine of ${{value}}',
        de: '{{name}} hat Ihnen ein Bußgeld in Höhe von ${{value}} bezahlt',
        pl: '{{name}} opłacił Ci grzywnę w wysokości ${{value}}',
    },

    errorTooFar: {
        ru: 'Вы слишком далеко от гражданина',
        ua: 'Ви занадто далеко від громадянина',
        en: 'You are too far from the citizen',
        de: 'Sie sind zu weit von dem Bürger entfernt',
        pl: 'Jesteś zbyt daleko od obywatela',
    },

    targetFailedToPayFine: {
        ru: 'Гражданин не смог оплатить штраф',
        ua: 'Громадянин не зміг оплатити штраф',
        en: 'The citizen was unable to pay the fine',
        de: 'Der Bürger konnte das Bußgeld nicht bezahlen',
        pl: 'Obywatel nie mógł zapłacić grzywny',
    },
    targetDeclinedFine: {
        ru: 'Гражданин отказался оплатить штраф',
        ua: 'Громадянин відмовився оплатити штраф',
        en: 'The citizen declined to pay the fine',
        de: 'Der Bürger hat sich geweigert, das Bußgeld zu bezahlen',
        pl: 'Obywatel odmówił zapłaty grzywny',
    },
};
