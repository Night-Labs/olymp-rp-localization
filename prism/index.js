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
    },
    conditionsMessages: {
        needTowTruck: {
            "ru": "Чтобы принять этот вызов ты должен быть в эвакуаторе",
            "ua": "Щоб прийняти цей виклик, ти повинен бути в евакуаторі",
            "en": "To accept this call, you need to be in a tow truck",
            "de": "Um diesen Einsatz anzunehmen, musst du in einem Abschleppwagen sein",
            "pl": "Aby przyjąć to zgłoszenie, musisz być w holowniku",
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