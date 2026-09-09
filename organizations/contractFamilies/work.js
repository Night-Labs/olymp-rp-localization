export const workList = {
    courierFood: {
        name: {
            ru: 'Курьер еды',
            ua: "Кур'єр їжі",
            en: 'Food courier',
            de: 'Essenskurier',
            pl: 'Kurier jedzenia',
        },
        description: {
            ru: 'Вечерний поток не вытягиваем, людей нет. Возьми смену на развозе: что дадут на стойке, то и везёшь. Платим по итогу.',
            ua: 'Вечірній потік не витягуємо, людей немає. Візьми зміну на розвезенні: що дадуть на стійці, те й везеш. Платимо за підсумком.',
            en: "We can't cover the evening rush, not enough hands. Take a shift on delivery: whatever they hand you at the counter is what you drive. We pay at the end.",
            de: 'Den Abendansturm schaffen wir nicht, uns fehlen Leute. Nimm eine Schicht beim Liefern: was sie dir am Tresen geben, das bringst du weg. Bezahlt wird am Ende.',
            pl: 'Wieczornego szczytu nie ogarniamy, brakuje ludzi. Weź zmianę przy dowozie: co dadzą ci przy ladzie, to wieziesz. Płacimy na koniec.',
        },
        objective: {
            ru: 'Развезти заказы еды за смену',
            ua: 'Розвезти замовлення їжі за зміну',
            en: 'Deliver the food orders on the shift',
            de: 'Die Essensbestellungen in der Schicht ausliefern',
            pl: 'Rozwieźć zamówienia z jedzeniem na zmianie',
        },
    },
    cashRun: {
        name: {
            ru: 'Инкассация',
            ua: 'Інкасація',
            en: 'Cash run',
            de: 'Geldtransport',
            pl: 'Konwój gotówki',
        },
        description: {
            ru: 'Банк отдал нам свои банкоматы, а людей в смену не хватает. Оформись у диспетчера в депо, загрузи броневик и пройди маршрут. Оплата по закрытию наряда.',
            ua: 'Банк віддав нам свої банкомати, а людей на зміну бракує. Оформись у диспетчера в депо, завантаж броньовик і пройди маршрут. Оплата після закриття наряду.',
            en: 'The bank handed us its machines and we are short of hands for the shift. Sign on with the depot dispatcher, load the van and work the route. Paid when the order is closed.',
            de: 'Die Bank hat uns ihre Automaten überlassen, und uns fehlen Leute für die Schicht. Melde dich beim Disponenten im Depot, belade den Transporter und fahr die Route. Bezahlt wird beim Abschluss.',
            pl: 'Bank oddał nam swoje bankomaty, a nam brakuje ludzi na zmianę. Zamelduj się u dyspozytora w bazie, załaduj furgon i objedź trasę. Płacimy po zamknięciu zlecenia.',
        },
        objective: {
            ru: 'Обслужить банкоматы на маршруте',
            ua: 'Обслужити банкомати на маршруті',
            en: 'Service the machines on the route',
            de: 'Die Automaten auf der Route bedienen',
            pl: 'Obsłużyć bankomaty na trasie',
        },
    },
    chopShop: {
        name: {
            ru: 'Заказ на угон',
            ua: 'Замовлення на викрадення',
            en: 'Stolen to order',
            de: 'Diebstahl auf Bestellung',
            pl: 'Kradzież na zamówienie',
        },
        description: {
            ru: 'Есть покупатель на конкретные машины - в этот раз {{subjectName}}. Заказ берёшь у Джо, машин в заказе - {{rolledGoal}}. Денег с меня не жди, платит он: мне нужно имя твоей семьи.',
            ua: "Є покупець на конкретні машини - цього разу {{subjectName}}. Замовлення береш у Джо, машин у замовленні - {{rolledGoal}}. Грошей з мене не чекай, платить він: мені потрібне ім'я твоєї сім'ї.",
            en: 'I have a buyer for specific cars - this time {{subjectName}}. Take the order from Joe, cars in the order - {{rolledGoal}}. No money from me, he pays for the drive: what I want is your family known.',
            de: 'Ich habe einen Käufer für bestimmte Wagen - diesmal {{subjectName}}. Den Auftrag holst du bei Joe, Wagen im Auftrag - {{rolledGoal}}. Geld gibt es von mir nicht, dafür zahlt er: mir geht es um den Namen deiner Familie.',
            pl: 'Mam kupca na konkretne auta - tym razem {{subjectName}}. Zlecenie bierzesz u Joego, aut w zleceniu - {{rolledGoal}}. Pieniędzy ode mnie nie licz, płaci on: mnie zależy na nazwisku twojej rodziny.',
        },
        objective: {
            ru: 'Угнать и сдать машины - {{subjectName}}',
            ua: 'Викрасти і здати машини - {{subjectName}}',
            en: 'Steal and deliver cars - {{subjectName}}',
            de: 'Wagen stehlen und abliefern - {{subjectName}}',
            pl: 'Ukraść i dostarczyć auta - {{subjectName}}',
        },
        // The order itself pays nothing (`reward.money: 0`) - the chop shop pays for the car,
        // so the tree node quotes the class instead of a sum (`tree/labels.ts`).
        treePay: {
            ru: 'Платит скупщик: чем выше класс, тем дороже машина.',
            ua: 'Платить скупник: що вищий клас, то дорожча машина.',
            en: 'The chop shop pays: the higher the class, the more the car is worth.',
            de: 'Die Verwertung zahlt: je höher die Klasse, desto teurer der Wagen.',
            pl: 'Płaci dziupla: im wyższa klasa, tym droższe auto.',
        },
    },
};

export const workBlips = {
    // Job-hook contracts own no route, so the only point they publish is where the job itself
    // is started. These name a real place and stand alone in the GPS list.
    foodDeliveryHub: {
        ru: 'Стойка развоза еды',
        ua: 'Стійка розвезення їжі',
        en: 'Food dispatch counter',
        de: 'Essensausgabe',
        pl: 'Punkt wydawania jedzenia',
    },
    cashCollectorHub: {
        ru: 'Депо инкассации',
        ua: 'Депо інкасації',
        en: 'Cash collection depot',
        de: 'Geldtransport-Depot',
        pl: 'Baza konwojów gotówki',
    },
    carjackerHub: {
        ru: 'Заказчик угона',
        ua: 'Замовник викрадення',
        en: 'Carjacking dealer',
        de: 'Auftraggeber für Autodiebstahl',
        pl: 'Zleceniodawca kradzieży aut',
    },
    // Same corner as the carjacking dealer - he hands out both - but a burglar is sent there
    // for an address, not for a car, so the point is named for what he came to collect.
    burglaryHub: {
        ru: 'Наводчик по домам',
        ua: 'Навідник по будинках',
        en: 'House tip-off man',
        de: 'Mann mit den Hausadressen',
        pl: 'Człowiek od cynków na domy',
    },
};
