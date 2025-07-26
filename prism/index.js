export default {
    messages: {
        arrived: {
            'lspd': {
                'ru': 'Сотрудник полиции прибыл на место вызова',
                'ua': 'Співробітник поліції прибув на місце виклику',
                'en': 'A police officer has arrived at the scene',
                'de': 'Ein Polizist ist am Einsatzort eingetroffen',
                'pl': 'Policjant przybył na miejsce wezwania',
            },
            'ems': {
                'ru': 'Медик прибыл на место вызова',
                'ua': 'Медик прибув на місце виклику',
                'en': 'A medic has arrived at the scene',
                'de': 'Ein Sanitäter ist am Einsatzort eingetroffen',
                'pl': 'Ratownik medyczny przybył na miejsce wezwania',
            },
        },
        accepted: {
            'lspd': {
                'ru': 'Сотрудник полиции {{name}} принял ваш вызов и отправился на него',
                'ua': 'Співробітник поліції {{name}} прийняв ваш виклик і вирушив на нього',
                'en': 'Police officer {{name}} has accepted your call and is on the way',
                'de': 'Polizeibeamter {{name}} hat Ihren Notruf angenommen und ist unterwegs',
                'pl': 'Funkcjonariusz policji {{name}} przyjął twoje zgłoszenie i jest w drodze',
            },
            'ems': {
                'ru': 'Медик {{name}} принял ваш вызов и отправился на него',
                'ua': 'Медик {{name}} прийняв ваш виклик і вирушив на нього',
                'en': 'Medic {{name}} has accepted your call and is on the way',
                'de': 'Sanitäter {{name}} hat Ihren Notruf angenommen und ist unterwegs',
                'pl': 'Ratownik medyczny {{name}} przyjął twoje zgłoszenie i jest w drodze',
            },
        },
        "dispatchTargetDisconnect": {
            "lspd": {
                "ru": "Вызов отменён: гражданин, которому требовалась помощь полиции, покинул игру",
                "ua": "Виклик скасовано: громадянин, якому потрібна була допомога поліції, вийшов з гри",
                "en": "Call canceled: the citizen who needed police help has left the game",
                "de": "Einsatz abgebrochen: Der Bürger, der Polizeihilfe brauchte, hat das Spiel verlassen",
                "pl": "Wezwanie anulowane: obywatel, który potrzebował pomocy policji, opuścił grę",
            },
            "ems": {
                "ru": "Вызов отменён: пациент, которому требовалась медицинская помощь, покинул игру",
                "ua": "Виклик скасовано: пацієнт, якому потрібна була медична допомога, вийшов з гри",
                "en": "Call canceled: the patient who needed medical help has left the game",
                "de": "Einsatz abgebrochen: Der Patient, der medizinische Hilfe brauchte, hat das Spiel verlassen",
                "pl": "Wezwanie anulowane: pacjent, który potrzebował pomocy medycznej, opuścił grę",
            }
        },
        "dispatchTargetDeath": {
            "lspd": {
                "ru": "Вызов отменён: гражданин, которому требовалась помощь полиции, погиб",
                "ua": "Виклик скасовано: громадянин, якому потрібна була допомога поліції, загинув",
                "en": "Call canceled: the citizen who needed police help has died",
                "de": "Einsatz abgebrochen: Der Bürger, der Polizeihilfe brauchte, ist gestorben",
                "pl": "Wezwanie anulowane: obywatel, który potrzebował pomocy policji, zginął",
            },
            "ems": {
                "ru": "Вызов отменён: пациент, которому требовалась медицинская помощь, погиб",
                "ua": "Виклик скасовано: пацієнт, якому потрібна була медична допомога, загинув",
                "en": "Call canceled: the patient who needed medical help has died",
                "de": "Einsatz abgebrochen: Der Patient, der medizinische Hilfe brauchte, ist gestorben",
                "pl": "Wezwanie anulowane: pacjent, który potrzebował pomocy medycznej, zmarł",
            }
        },
        "dispatchTargetReanimated": {
            "ems": {
                "ru": "Кто-то уже реанимировал пациента, вызов отменён",
                "ua": "Хтось уже реанімував пацієнта, виклик скасовано",
                "en": "Someone already revived the patient, call canceled",
                "de": "Jemand hat den Patienten bereits wiederbelebt, Einsatz abgebrochen",
                "pl": "Ktoś już reanimował pacjenta, wezwanie anulowane",
            }
        },
        "dispatchTargetRevived": {
            "ems": {
                "ru": "Пациент по твоему вызову неожиданно воскрес, вызов отменён",
                "ua": "Пацієнт за твоїм викликом неочікувано воскрес, виклик скасовано",
                "en": "The patient from your call suddenly revived, call canceled",
                "de": "Der Patient von deinem Einsatz ist plötzlich wieder auferstanden, Einsatz abgebrochen",
                "pl": "Pacjent z twojego wezwania niespodziewanie ożył, wezwanie anulowane",
            }
        },
        "dispatchAcceptedDeath": {
            "lspd": {
                "ru": "Ты погиб и больше не участвуешь в выполнении вызова",
                "ua": "Ти загинув і більше не береш участі у виконанні виклику",
                "en": "You died and are no longer part of the call",
                "de": "Du bist gestorben und nimmst nicht mehr am Einsatz teil",
                "pl": "Zginąłeś i nie bierzesz już udziału w wezwaniu",
            },
            "ems": {
                "ru": "Ты погиб и больше не участвуешь в выполнении вызова",
                "ua": "Ти загинув і більше не береш участі у виконанні виклику",
                "en": "You died and are no longer part of the call",
                "de": "Du bist gestorben und nimmst nicht mehr am Einsatz teil",
                "pl": "Zginąłeś i nie bierzesz już udziału w wezwaniu",
            }
        }
    },
    messagesShared: {
        acceptedApp: {
            'ru': 'Вы приняли вызов, отправляйтесь на него',
            'ua': 'Ви прийняли виклик, вирушайте на нього',
            'en': 'You have accepted the call, proceed to it',
            'de': 'Sie haben den Einsatz angenommen, fahren Sie dorthin',
            'pl': 'Przyjąłeś zgłoszenie, udaj się na miejsce',
        },
        'targetLeft': {
            'ru': 'Цель покинула радиус вызова, вызов отменен',
            'ua': 'Ціль покинула радіус виклику, виклик скасовано',
            'en': 'Target left the call radius, call cancelled',
            'de': 'Ziel hat den Rufradius verlassen, Ruf abgebrochen',
            'pl': 'Cel opuścił promień wezwania, wezwanie anulowane',
        },
        'youLeftZone': {
            'ru': 'Ты покинули радиус вызова, вызов отменен',
            'ua': 'Ти покинув радіус виклику, виклик скасовано',
            'en': 'You left the call radius, call cancelled',
            'de': 'Du hast den Rufradius verlassen, Ruf abgebrochen',
            'pl': 'Opuściłeś promień wezwania, wezwanie anulowane',
        },
        youArrived: {
            'ru': 'Вы прибыли на место вызова',
            'ua': 'Ти прибув на місце виклику',
            'en': 'You arrived at the call location',
            'de': 'Du bist am Einsatzort angekommen',
            'pl': 'Dotarłeś na miejsce wezwania',
        },
        'notifyCreatedDispatch': {
            'ru': 'Поступил новый вызов. Тип: {{type}}. Расстояние: {{distance}}',
            'ua': 'Надійшов новий виклик. Тип: {{type}}. Відстань: {{distance}}',
            'en': 'A new call has been received. Type: {{type}}. Distance: {{distance}}',
            'de': 'Ein neuer Anruf ist eingegangen. Typ: {{type}}. Entfernung: {{distance}}',
            'pl': 'Otrzymano nowe wezwanie. Typ: {{type}}. Odległość: {{distance}}',
        },
        hasActiveDispatch: {
            'ru': 'У тебя уже есть принятый вызов',
            'ua': 'У тебе вже є прийнятий виклик',
            'en': 'You already have an active dispatch',
            'de': 'Du hast schon einen aktiven Einsatz',
            'pl': 'Masz już przyjęte zgłoszenie',
        },
        "dispatchTargetAwaitNewDisconnect": {
            "ru": "Исполнитель вызова вышел из игры. Ожидайте нового отклика.",
            "ua": "Виконавець виклику вийшов з гри. Очікуй нового відгуку.",
            "en": "The responder left the game. Wait for a new response.",
            "de": "Der Einsatzteilnehmer hat das Spiel verlassen. Warte auf eine neue Rückmeldung.",
            "pl": "Wykonawca wezwania opuścił grę. Oczekuj nowej odpowiedzi.",
        },
        "dispatchTargetAwaitNewDeath": {
            "ru": "Исполнитель вызова погиб. Ожидайте нового отклика.",
            "ua": "Виконавець виклику загинув. Очікуй нового відгуку.",
            "en": "The responder died. Wait for a new response.",
            "de": "Der Einsatzteilnehmer ist gestorben. Warte auf eine neue Rückmeldung.",
            "pl": "Wykonawca wezwania zginął. Oczekuj nowej odpowiedzi.",
        },
        "dispatchTargetStillComingDisconnect": {
            "ru": "Один из исполнителей вышел из игры, другие уже едут.",
            "ua": "Один з виконавців вийшов з гри, інші вже їдуть.",
            "en": "One of the responders left the game, others are already on their way.",
            "de": "Einer der Einsatzteilnehmer hat das Spiel verlassen, die anderen sind bereits unterwegs.",
            "pl": "Jeden z wykonawców opuścił grę, pozostali już jadą.",
        },
        "dispatchTargetStillComingDeath": {
            "ru": "Один из исполнителей погиб, остальные уже едут.",
            "ua": "Один з виконавців загинув, решта вже їдуть.",
            "en": "One of the responders died, the rest are already on their way.",
            "de": "Einer der Einsatzteilnehmer ist gestorben, die anderen sind bereits unterwegs.",
            "pl": "Jeden z wykonawców zginął, pozostali już jadą.",
        }
    },
    conditionsMessages: {
        needTowTruck: {
            "ru": "Чтобы принять этот вызов ты должен быть в эвакуаторе",
            "ua": "Щоб прийняти цей виклик, ти повинен бути в евакуаторі",
            "en": "To accept this call, you need to be in a tow truck",
            "de": "Um diesen Einsatz anzunehmen, musst du in einem Abschleppwagen sein",
            "pl": "Aby przyjąć to zgłoszenie, musisz być w holowniku",
        },
        noRightsForTowTruck: {
            "ru": "У тебя нет прав, чтобы работать эвакуаторщиком",
            "ua": "У тебе немає прав, щоб працювати евакуаторником",
            "en": "You don't have the license to work as a tow truck driver",
            "de": "Du hast keinen Führerschein, um als Abschleppwagenfahrer zu arbeiten",
            "pl": "Nie masz prawa jazdy, żeby pracować jako kierowca lawety",
        },
        needDeathItem: {
            "ru": "Чтобы принять этот вызов у тебя должна быть хотя бы одна аптечка или Defibrocharge",
            "ua": "Щоб прийняти цей виклик, у тебе має бути хоча б одна аптечка або Defibrocharge",
            "en": "To accept this call, you need to have at least one medkit or a Defibrocharge",
            "de": "Um diesen Einsatz anzunehmen, musst du mindestens ein Medikit oder ein Defibrocharge haben",
            "pl": "Aby przyjąć to zgłoszenie, musisz mieć przynajmniej jedną apteczkę lub Defibrocharge",
        },
    },
};