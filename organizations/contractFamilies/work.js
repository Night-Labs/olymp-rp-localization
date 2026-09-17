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
            ru: 'Банк подписал с нами договор на обслуживание банкоматов, а людей у Gruppe 6 в смену не хватает. Оформись у диспетчера в депо, загрузи броневик в кассовом центре и обслужи банкоматы по маршруту. Точка депо в навигаторе, оплата по закрытию наряда.',
            ua: 'Банк підписав з нами договір на обслуговування банкоматів, а людей у Gruppe 6 на зміну бракує. Оформись у диспетчера в депо, завантаж броньовик у касовому центрі та обслужи банкомати за маршрутом. Точка депо в навігаторі, оплата після закриття наряду.',
            en: 'The bank signed a machine-servicing contract with us and Gruppe 6 is short of hands for the shift. Sign on with the depot dispatcher, load the van at a cash centre and service the machines along the route. The depot is marked in your navigator, we pay when the order is closed.',
            de: 'Die Bank hat einen Wartungsvertrag für ihre Automaten mit uns unterschrieben, und Gruppe 6 fehlen Leute für die Schicht. Melde dich beim Disponenten im Depot, belade den Transporter im Kassenzentrum und bediene die Automaten entlang der Route. Das Depot ist im Navi markiert, gezahlt wird beim Abschluss des Auftrags.',
            pl: 'Bank podpisał z nami umowę na obsługę bankomatów, a Gruppe 6 brakuje ludzi na zmianę. Zamelduj się u dyspozytora w bazie, załaduj furgon w centrum gotówkowym i obsłuż bankomaty na trasie. Baza jest zaznaczona w nawigacji, płacimy po zamknięciu zlecenia.',
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
            ru: 'У меня есть покупатель на конкретные машины - в этот раз {{subjectName}}. Заказ берёшь у Джо, машину гонишь на разбор. Машин в заказе - {{rolledGoal}}. Денег с меня не жди, за руль тебе платит он. Мне важно, чтобы твою семью в этих кругах знали.',
            ua: "У мене є покупець на конкретні машини - цього разу {{subjectName}}. Замовлення береш у Джо, машину женеш на розбирання. Машин у замовленні - {{rolledGoal}}. Грошей з мене не чекай, за кермо тобі платить він. Мені важливо, щоб твою сім'ю в цих колах знали.",
            en: 'I have a buyer who wants specific cars - this time {{subjectName}}. Take the order from Joe, run the car to the yard. Cars in the order - {{rolledGoal}}. Do not wait for money from me, he pays you for the drive. What I want is your family known in these circles.',
            de: 'Ich habe einen Käufer für bestimmte Wagen - diesmal {{subjectName}}. Den Auftrag holst du bei Joe, den Wagen bringst du zur Verwertung. Wagen im Auftrag - {{rolledGoal}}. Erwarte von mir kein Geld, fürs Fahren zahlt er. Mir geht es darum, dass man deine Familie in diesen Kreisen kennt.',
            pl: 'Mam kupca na konkretne auta - tym razem {{subjectName}}. Zlecenie bierzesz u Joego, auto odstawiasz na dziuplę. Aut w zleceniu - {{rolledGoal}}. Pieniędzy ode mnie nie oczekuj, za jazdę płaci on. Mnie zależy na tym, żeby twoją rodzinę znali w tych kręgach.',
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
