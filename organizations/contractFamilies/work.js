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
            ru: 'Вечерний поток заказов мы не вытягиваем - людей нет. Возьми смену на развозе еды и закрой заказы: что дадут на стойке, то и везёшь. Точка развоза отмечена в навигаторе, платим по итогу.',
            ua: "Вечірній потік замовлень ми не витягуємо - людей немає. Візьми зміну на розвезенні їжі і закрий замовлення: що дадуть на стійці, те й везеш. Точка розвезення позначена в навігаторі, платимо за підсумком.",
            en: "We can't cover the evening rush - not enough hands. Take a shift on food delivery and close the orders out: whatever they hand you at the counter is what you drive. The dispatch point is marked in your navigator, we pay at the end.",
            de: 'Den Ansturm am Abend schaffen wir nicht - uns fehlen Leute. Nimm eine Schicht beim Essenslieferdienst und fahr die Bestellungen aus: was sie dir am Tresen geben, das bringst du weg. Der Ausgabepunkt ist im Navi markiert, bezahlt wird am Ende.',
            pl: 'Wieczornego szczytu nie ogarniamy - brakuje ludzi. Weź zmianę przy dowozie jedzenia i zamknij zamówienia: co dadzą ci przy ladzie, to wieziesz. Punkt wydawania masz zaznaczony w nawigacji, płacimy na koniec.',
        },
        objective: {
            ru: 'Развезти заказы еды: {{rolledGoal}} шт.',
            ua: 'Розвезти замовлення їжі: {{rolledGoal}} шт.',
            en: 'Deliver food orders: {{rolledGoal}}',
            de: 'Essensbestellungen ausliefern: {{rolledGoal}}',
            pl: 'Rozwieźć zamówienia z jedzeniem: {{rolledGoal}}',
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
            ru: 'У меня есть покупатель на конкретные машины - в этот раз {{subjectName}}. Заказ берёшь у Джо, машину гонишь на разбор - {{rolledGoal}} шт. Денег с меня не жди, за руль тебе платит он. Мне важно, чтобы твою семью в этих кругах знали.',
            ua: "У мене є покупець на конкретні машини - цього разу {{subjectName}}. Замовлення береш у Джо, машину женеш на розбирання - {{rolledGoal}} шт. Грошей з мене не чекай, за кермо тобі платить він. Мені важливо, щоб твою сім'ю в цих колах знали.",
            en: 'I have a buyer who wants specific cars - this time {{subjectName}}. Take the order from Joe, run the car to the yard - {{rolledGoal}} of them. Do not wait for money from me, he pays you for the drive. What I want is your family known in these circles.',
            de: 'Ich habe einen Käufer für bestimmte Wagen - diesmal {{subjectName}}. Den Auftrag holst du bei Joe, den Wagen bringst du zur Verwertung - {{rolledGoal}} Stück. Erwarte von mir kein Geld, fürs Fahren zahlt er. Mir geht es darum, dass man deine Familie in diesen Kreisen kennt.',
            pl: 'Mam kupca na konkretne auta - tym razem {{subjectName}}. Zlecenie bierzesz u Joego, auto odstawiasz na dziuplę - {{rolledGoal}} szt. Pieniędzy ode mnie nie oczekuj, za jazdę płaci on. Mnie zależy na tym, żeby twoją rodzinę znali w tych kręgach.',
        },
        objective: {
            ru: 'Угнать и сдать машины ({{subjectName}}): {{rolledGoal}} шт.',
            ua: 'Викрасти і здати машини ({{subjectName}}): {{rolledGoal}} шт.',
            en: 'Steal and deliver the cars ({{subjectName}}): {{rolledGoal}}',
            de: 'Die Wagen stehlen und abliefern ({{subjectName}}): {{rolledGoal}}',
            pl: 'Ukraść i dostarczyć auta ({{subjectName}}): {{rolledGoal}}',
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
