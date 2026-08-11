export const workList = {
    courierFastfood: {
        name: {
            ru: 'Курьер фастфуда',
            ua: "Кур'єр фастфуду",
            en: 'Fast food courier',
            de: 'Fastfood-Kurier',
            pl: 'Kurier fast foodu',
        },
        description: {
            ru: 'Вечерний поток фастфуда мы не вытягиваем - людей нет. Возьми смену и развези заказы по точкам: Картошка фри x3, Чизбургер x3, Молочный коктейль x3. Стойка развоза отмечена в навигаторе, платим по итогу.',
            ua: 'Вечірній потік фастфуду ми не витягуємо - людей немає. Візьми зміну і розвези замовлення по точках: Картопля фрі x3, Чизбургер x3, Молочний коктейль x3. Стійка розвезення позначена в навігаторі, платимо за підсумком.',
            en: "We can't cover the evening fast food rush - not enough hands. Take a shift and run the orders out: Fries x3, Cheeseburger x3, Milkshake x3. The dispatch counter is marked in your navigator, we pay at the end.",
            de: 'Den Fastfood-Ansturm am Abend schaffen wir nicht - uns fehlen Leute. Nimm eine Schicht und fahr die Bestellungen aus: Pommes x3, Cheeseburger x3, Milchshake x3. Der Ausgabetresen ist im Navi markiert, bezahlt wird am Ende.',
            pl: 'Wieczornego szczytu fast foodu nie ogarniamy - brakuje ludzi. Wez zmiane i rozwiez zamowienia: Frytki x3, Cheeseburger x3, Shake mleczny x3. Punkt wydawania masz zaznaczony w nawigacji, placimy na koniec.',
        },
        objective: {
            ru: 'Развезти заказы фастфуда: {{rolledGoal}} шт.',
            ua: 'Розвезти замовлення фастфуду: {{rolledGoal}} шт.',
            en: 'Deliver fast food orders: {{rolledGoal}}',
            de: 'Fastfood-Bestellungen ausliefern: {{rolledGoal}}',
            pl: 'Rozwiezc zamowienia fast food: {{rolledGoal}}',
        },
    },
    courierCafe: {
        name: {
            ru: 'Курьер кафе',
            ua: "Кур'єр кафе",
            en: 'Cafe courier',
            de: 'Cafe-Kurier',
            pl: 'Kurier kawiarni',
        },
        description: {
            ru: 'Кафе подписали с нами утренний развоз, а это выпечка и кофе: остынет - платить будем мы. Заказы такие: Круассан x3, Кофе x3, Печенье x3. Не гони, но и не гуляй.',
            ua: 'Кафе підписали з нами ранкове розвезення, а це випічка і кава: охолоне - платитимемо ми. Замовлення такі: Круасан x3, Кава x3, Печиво x3. Не жени, але й не гуляй.',
            en: "The cafes signed us for the morning run, and that means pastry and coffee: if it goes cold, we pay for it. The orders are Croissant x3, Coffee x3, Cookie x3. Don't race, don't stroll.",
            de: 'Die Cafes haben uns die Morgentour gegeben, und das heisst Gebaeck und Kaffee: wird es kalt, zahlen wir. Die Bestellungen sind Croissant x3, Kaffee x3, Keks x3. Nicht rasen, aber auch nicht bummeln.',
            pl: 'Kawiarnie podpisaly z nami poranna trase, a to wypieki i kawa: wystygnie - my placimy. Zamowienia to Rogalik x3, Kawa x3, Ciastko x3. Nie sciguj sie, ale tez nie spaceruj.',
        },
        objective: {
            ru: 'Развезти заказы кафе: {{rolledGoal}} шт.',
            ua: 'Розвезти замовлення кафе: {{rolledGoal}} шт.',
            en: 'Deliver cafe orders: {{rolledGoal}}',
            de: 'Cafe-Bestellungen ausliefern: {{rolledGoal}}',
            pl: 'Rozwiezc zamowienia kawiarni: {{rolledGoal}}',
        },
    },
    courierRestaurant: {
        name: {
            ru: 'Курьер ресторана',
            ua: "Кур'єр ресторану",
            en: 'Restaurant courier',
            de: 'Restaurant-Kurier',
            pl: 'Kurier restauracji',
        },
        description: {
            ru: 'Это уже не бургеры: рестораны отдают нам вынос только потому, что я за курьера ручаюсь. Красное вино x3, Чай Улун x3, Мороженое x3 - и всё в целости. Один разбитый заказ, и контракт закроют вместе со мной.',
            ua: "Це вже не бургери: ресторани віддають нам виніс лише тому, що я за кур'єра ручаюся. Червоне вино x3, Чай Улун x3, Морозиво x3 - і все в цілості. Одне розбите замовлення, і контракт закриють разом зі мною.",
            en: "This isn't burgers: the restaurants hand us their takeout only because I vouch for the courier. Red wine x3, Oolong tea x3, Ice cream x3, all of it intact. One broken order and the contract goes, and I go with it.",
            de: 'Das sind keine Burger mehr: die Restaurants geben uns ihre Lieferungen nur, weil ich fuer den Kurier buerge. Rotwein x3, Oolong-Tee x3, Eis x3, alles heil. Eine zerbrochene Bestellung, und der Vertrag ist weg, ich mit ihm.',
            pl: 'To juz nie burgery: restauracje oddaja nam dowozy tylko dlatego, ze recze za kuriera. Czerwone wino x3, Herbata oolong x3, Lody x3, wszystko w calosci. Jedno rozbite zamowienie i kontrakt leci, a ja razem z nim.',
        },
        objective: {
            ru: 'Развезти заказы ресторанов: {{rolledGoal}} шт.',
            ua: 'Розвезти замовлення ресторанів: {{rolledGoal}} шт.',
            en: 'Deliver restaurant orders: {{rolledGoal}}',
            de: 'Restaurant-Bestellungen ausliefern: {{rolledGoal}}',
            pl: 'Rozwiezc zamowienia restauracji: {{rolledGoal}}',
        },
    },
    chopShop: {
        name: {
            ru: 'Заказ на угон',
            ua: 'Замовлення на викрадення',
            en: 'Stolen to order',
            de: 'Diebstahl auf Bestellung',
            pl: 'Kradziez na zamowienie',
        },
        description: {
            ru: 'У меня есть покупатель на конкретные машины: список он даёт мне, я передаю его тебе. Заказ берёшь у Джо, машину гонишь на разбор - {{rolledGoal}} шт. Денег с меня не жди, за руль тебе платит он. Мне важно, чтобы семью в этих кругах знали.',
            ua: "У мене є покупець на конкретні машини: список він дає мені, я передаю його тобі. Замовлення береш у Джо, машину женеш на розбирання - {{rolledGoal}} шт. Грошей з мене не чекай, за кермо тобі платить він. Мені важливо, щоб сім'ю в цих колах знали.",
            en: 'I have a buyer who wants specific cars: he gives me the list, I pass it to you. Take the order from Joe, run the car to the yard - {{rolledGoal}} of them. Do not wait for money from me, he pays you for the drive. What I want is your family known in these circles.',
            de: 'Ich habe einen Kaeufer fuer bestimmte Wagen: er gibt mir die Liste, ich gebe sie dir. Den Auftrag holst du bei Joe, den Wagen bringst du zur Verwertung - {{rolledGoal}} Stueck. Geld erwarte von mir keins, fuers Fahren zahlt er. Mir geht es darum, dass man deine Familie in diesen Kreisen kennt.',
            pl: 'Mam kupca na konkretne auta: on daje mi liste, ja podaje ja tobie. Zlecenie bierzesz u Joego, auto odstawiasz na dziuple - {{rolledGoal}} szt. Pieniedzy ode mnie nie oczekuj, za jazde placi on. Mnie zalezy na tym, zeby twoja rodzine znali w tych kregach.',
        },
        objective: {
            ru: 'Угнать и сдать машины по списку: {{rolledGoal}} шт.',
            ua: 'Викрасти і здати машини за списком: {{rolledGoal}} шт.',
            en: 'Steal and deliver the listed cars: {{rolledGoal}}',
            de: 'Die gelisteten Wagen stehlen und abliefern: {{rolledGoal}}',
            pl: 'Ukrasc i dostarczyc auta z listy: {{rolledGoal}}',
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
        de: 'Auftraggeber fuer Autodiebstahl',
        pl: 'Zleceniodawca kradziezy aut',
    },
};
