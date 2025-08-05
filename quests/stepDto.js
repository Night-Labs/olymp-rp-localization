import dailyFactionQuestsDto from './dailyFactionQuestsDto';

export const stepDto = {
    ...dailyFactionQuestsDto,
    goPositions: {
        pizzeria: {
            'ru': 'Отправляйся в пиццерию',
            'ua': 'Вирушай у піцерію',
            'en': 'Head to the pizzeria',
            'de': 'Geh zur Pizzeria',
            'pl': 'Idź do pizzerii',
        },
        cityhall: {
            'ru': 'Отправляйся в мэрию',
            'ua': 'Вирушай до мерії',
            'en': 'Head to city hall',
            'de': 'Geh zum Rathaus',
            'pl': 'Idź do ratusza',
        },
        bank: {
            'ru': 'Отправляйся в отделение банка',
            'ua': 'Вирушай до відділення банку',
            'en': 'Head to the bank branch',
            'de': 'Geh zur Bankfiliale',
            'pl': 'Idź do oddziału banku',
        },
        drivingSchool: {
            'ru': 'Доберись до автошколы',
            'ua': 'Дістанься до автошколи',
            'en': 'Get to the driving school',
            'de': 'Geh zur Fahrschule',
            'pl': 'Dojdź do szkoły jazdy',
        },
        farm: {
            'ru': 'Отправляйся на ферму',
            'ua': 'Вирушай на ферму',
            'en': 'Head to the farm',
            'de': 'Geh zur Farm',
            'pl': 'Idź na farmę',
        },
    },
    talkWith: {
        diana: {
            'ru': 'Поговори с Дианой',
            'ua': 'Поговори з Діаною',
            'en': 'Talk to Diana',
            'de': 'Sprich mit Diana',
            'pl': 'Porozmawiaj z Dianą',
        },
    },
    talkWithNpc: {
        'ru': 'Поговори с {{name}}',
        'ua': 'Поговори з {{name}}',
        'en': 'Talk to {{name}}',
        'de': 'Sprich mit {{name}}',
        'pl': 'Porozmawiaj z {{name}}',
    },
    rentVehicle: {
        'ru': 'Арендуй любое транспортное средство',
        'ua': 'Орендуй будь-який транспортний засіб',
        'en': 'Rent any vehicle',
        'de': 'Miete ein beliebiges Fahrzeug',
        'pl': 'Wynajmij dowolny pojazd',
    },
    deployFarm: {
        'ru': 'Устройся работать на ферме',
        'ua': 'Влаштуйся працювати на фермі',
        'en': 'Get a job at the farm',
        'de': 'Nimm einen Job auf der Farm an',
        'pl': 'Zatrudnij się na farmie',
    },
    'leaveJobFarm': {
        'ru': 'Уволься с фермы',
        'ua': 'Звільнись з ферми',
        'en': 'Quit the farm job',
        'de': 'Kündige den Job auf dem Bauernhof',
        'pl': 'Zrezygnuj z pracy na farmie',
    },
    collectTree: {
        'ru': 'Собери апельсины с {{count}} деревьев',
        'ua': 'Збери апельсини з {{count}} дерев',
        'en': 'Collect oranges from {{count}} trees',
        'de': 'Sammle Orangen von {{count}} Bäumen',
        'pl': 'Zbierz pomarańcze z {{count}} drzew',
    },
    getFarmTreesAreas: {
        'ru': 'Доберись до одного из трёх садов апельсинов',
        'ua': 'Дістанься до одного з трьох апельсинових садів',
        'en': 'Get to one of the three orange groves',
        'de': 'Geh zu einem der drei Orangengärten',
        'pl': 'Dojdź do jednego z trzech sadów pomarańczowych',
    },
    getToFarmBuyer: {
        'ru': 'Доберись до фермерского скупщика',
        'ua': 'Дістанься до фермерського скупника',
        'en': 'Get to the farm buyer',
        'de': 'Geh zum Einkäufer auf der Farm',
        'pl': 'Dojdź do skupu na farmie',
    },
    'sellToFence': {
        'ru': 'Продай скупщику {{buyerName}} {{name}} на сумму {{money}} $',
        'ua': 'Продай скупнику {{buyerName}} {{name}} на суму {{money}} $',
        'en': 'Sell {{name}} to the fence {{buyerName}} for {{money}} $',
        'de': 'Verkauf {{name}} an den Hehler {{buyerName}} für {{money}} $',
        'pl': 'Sprzedaj {{name}} paserowi {{buyerName}} za {{money}} $',
    },
    'sellToFenceAny': {
        'ru': 'Продай скупщику {{buyerName}} любой товар на сумму {{money}} $',
        'ua': 'Продай скупнику {{buyerName}} будь-який товар на суму {{money}} $',
        'en': 'Sell any item to the fence {{buyerName}} for {{money}} $',
        'de': 'Verkauf irgendeinen Gegenstand an den Hehler {{buyerName}} für {{money}} $',
        'pl': 'Sprzedaj dowolny przedmiot paserowi {{buyerName}} za {{money}} $',
    },
    'sellAllToFence': {
        'ru': 'Продай скупщику {{buyerName}} весь {{name}} что у тебя есть за раз',
        'ua': 'Продай скупнику {{buyerName}} весь {{name}}, що в тебе є, за раз',
        'en': 'Sell all your {{name}} to the fence {{buyerName}} at once',
        'de': 'Verkauf deinen ganzen {{name}} auf einmal an den Hehler {{buyerName}}',
        'pl': 'Sprzedaj cały swój {{name}} paserowi {{buyerName}} za jednym razem',
    },
    'sellAllToFenceAny': {
        'ru': 'Продай скупщику {{buyerName}} вообще всё что сможешь одним махом',
        'ua': 'Продай скупнику {{buyerName}} взагалі все, що зможеш, за один раз',
        'en': 'Sell absolutely everything you can to the fence {{buyerName}} in one go',
        'de': 'Verkauf dem Hehler {{buyerName}} alles, was du kannst, auf einmal',
        'pl': 'Sprzedaj paserowi {{buyerName}} absolut wszystko, co możesz, za jednym zamachem',
    },
    //

    deliveryPizza: {
        ru: 'Доставьте {{count}} пицц',
        ua: 'Доставте {{count}} піцц',
        en: 'Deliver {{count}} pizzas',
        de: 'Liefern Sie {{count}} Pizzas',
        pl: 'Dostarcz {{count}} pizz',
        zh: '送{{count}}披萨',
    },

    goToPosition: {
        ru: 'Доберитесь до метки',
        ua: 'Дістаньтесь до мітки',
        en: 'Reach the waypoint',
        de: 'Erreichen Sie den Wegpunkt',
        pl: 'Dotrzyj do punktu',
        zh: '到达航路点',
    },

    boughtVehicle: {
        ru: 'Купите любой транспорт',
        en: 'Buy any vehicle',
        ua: 'Купіть будь-який транспорт',
        de: 'Kaufen Sie ein beliebiges Fahrzeug',
        pl: 'Kup dowolny pojazd',
        zh: '购买任何车辆',
    },

    buyVehicleMinumumAmount: {
        ru: 'Купите машину не менее чем за {{cash}}',
        ua: 'Купіть машину не менше ніж за {{cash}}',
        en: 'Purchase a vehicle for at least {{cash}}',
        de: 'Kaufen Sie ein Fahrzeug für mindestens {{cash}}',
        pl: 'Kup pojazd za co najmniej {{cash}}',
        zh: '至少用{{cash}}购买一辆车',
    },

    waitTime: {
        ru: 'Подождите {{time}} минут',
        ua: 'Зачекайте {{time}} хвилин',
        en: 'Wait {{time}} minutes',
        de: 'Warten Sie {{time}} Minuten',
        pl: 'Poczekaj {{time}} minut(y)',
        zh: '等待{{time}}分钟',
    },

    createBankAccount: {
        ru: 'Создайте банковский счет',
        en: 'Create a bank account',
        ua: 'Створіть банківський рахунок',
        de: 'Erstellen Sie ein Bankkonto',
        pl: 'Utwórz konto bankowe',
        zh: '创建一个银行账户',
    },

    depositCash: {
        ru: 'Внесите деньги на <br/> банковский счет',
        en: 'Deposit money into the <br/> bank account',
        ua: 'Внесіть гроші на <br/> банківський рахунок',
        de: 'Zahlen Sie Geld auf das <br/> Bankkonto ein',
        pl: 'Wpłać pieniądze na konto <br/> bankowe',
        zh: '把钱存入<br/>银行账户',
    },
    withdrawCash: {
        ru: 'Снимите деньги с <br/> банковского счета',
        en: 'Withdraw money from the <br/> bank account',
        ua: 'Зніміть гроші з <br/> банківського рахунку',
        de: 'Heben Sie Geld vom <br/> Bankkonto ab',
        pl: 'Wypłać pieniądze z konta<br/>  bankowego',
        zh: '从银行账户<br/>中取钱',
    },
    //
    openPhone: {
        ru: 'Откройте телефон',
        en: 'Open the phone',
        ua: 'Відкрийте телефон',
        de: 'Öffnen Sie das Telefon',
        pl: 'Otwórz telefon',
        zh: '打开手机',
    },

    openMenu: {
        ru: 'Откройте меню',
        ua: 'Відкрийте меню',
        en: 'Open the menu',
        de: 'Öffnen Sie das Menü',
        pl: 'Otwórz menu',
        zh: '打开菜单',
    },
    // PERSONAL VEHICLE
    personalVehicleBlip: {
        ru: 'Отметьте машину на карте',
        en: 'Mark the car on the map',
        ua: 'Відзначте автомобіль на карті',
        de: 'Markiere das Auto auf der Karte',
        pl: 'Oznacz samochód na mapie',
        zh: '在地图上标出这辆车',
    },

    lockPersonalVehicle: {
        ru: 'Закройте машину',
        en: 'Lock the car',
        ua: 'Закрийте автомобіль',
        de: 'Schließen Sie das Auto ab',
        pl: 'Zamknij samochód',
        zh: '锁好车',
    },
    unlockPersonalVehicle: {
        ru: 'Откройте машину',
        en: 'Unlock the car',
        ua: 'Відкрийте автомобіль',
        de: 'Entriegeln Sie das Auto',
        pl: 'Odblokuj samochód',
        zh: '解锁汽车',
    },

    //
    buyClothesWorth: {
        ru: 'Накупите одежды на ${{goal}}',
        ua: 'Купіть одягу на ${{goal}}',
        en: 'Buy clothes worth ${{goal}}',
        de: 'Kaufen Sie Kleidung im Wert von ${{goal}}',
        pl: 'Kup ubrania za ${{goal}}',
        zh: '购买价值${{goal}}的衣服',
    },

    buyWeaponsWorth: {
        ru: 'Накупите оружия на ${{goal}}',
        ua: 'Накупіть зброї на ${{goal}}',
        en: 'Buy weapons worth ${{goal}}',
        de: 'Kaufen Sie Waffen im Wert von ${{goal}}',
        pl: 'Kup broń za ${{goal}}',
        zh: '购买价值${{goal}}的武器',
    },

    buyProductsWorth: {
        ru: 'Накупите продуктов на ${{goal}}',
        ua: 'Купіть продуктів на ${{goal}}',
        en: 'Buy products worth ${{goal}}',
        de: 'Kaufen Sie Produkte im Wert von ${{goal}}',
        pl: 'Kup produkty za ${{goal}}',
        zh: '购买价值${{goal}}的产品',
    },

    buyGunsWorth: {
        ru: 'Накупите оружия на ${{goal}}',
        ua: 'Купіть зброї на ${{goal}}',
        en: 'Buy guns worth ${{goal}}',
        de: 'Kaufen Sie Waffen im Wert von ${{goal}}',
        pl: 'Kup broń za ${{goal}}',
        zh: '购买价值${{goal}}的枪支',
    },

    // УСТРОЙСТВА НА РАБОТЫ ЕБАНЫЕ БЛЯДЬ

    deployDelivery: {
        ru: 'Устройтесь на работу доставщика еды',
        ua: 'Влаштуйтеся на роботу доставщика їжі',
        en: 'Get a job as a food delivery person',
        de: 'Bewerben Sie sich als Lebensmittellieferant',
        pl: 'Znajdź pracę jako dostawca jedzenia',
        zh: '找一份送餐员的工作',
    },

    leaveJobDelivery: {
        'ru': 'Увольтесь с работы доставщика еды',
        'ua': 'Звільнись з роботи доставника їжі',
        'en': 'Quit your food delivery job',
        'de': 'Kündige deinen Job als Essenslieferant',
        'pl': 'Zrezygnuj z pracy dostawcy jedzenia',
    },

    deployTrucker: {
        ru: 'Устройтесь на работу грузоперевозчика',
        ua: 'Влаштуйтеся на роботу вантажоперевізника',
        en: 'Get a job as a trucker',
        de: 'Arbeiten Sie als LKW-Fahrer',
        pl: 'Zostań kierowcą ciężarówki',
        zh: '找一份卡车司机的工作',
    },
    deployTrucker2: {
        ru: 'Устройтесь на работу дальнобойщика',
        ua: 'Влаштуйтеся на роботу далекобійника',
        en: 'Get a job as a long-haul trucker',
        de: 'Arbeiten Sie als Fernfahrer',
        pl: 'Zostań kierowcą ciężarówki dalekobieżnej',
        zh: '找一份长途卡车司机的工作',
    },

    // INVENTORY
    useAnyItem: {
        ru: 'Используйте любой предмет',
        ua: 'Використайте будь-який предмет',
        en: 'Use any item',
        de: 'Verwenden Sie einen beliebigen Gegenstand',
        pl: 'Użyj dowolnego przedmiotu',
        zh: '万能巧手',
    },

    eatBurger: {
        ru: 'Съешьте бургер',
        ua: 'З’їжте бургер',
        en: 'Eat a burger',
        de: 'Essen Sie einen Burger',
        pl: 'Zjedz burgera',
        zh: '吃一个汉堡',
    },

    //
    levelUpTo3: {
        ru: 'Достигните третьего уровня',
        ua: 'Досягніть третього рівня',
        en: 'Reach the third level',
        de: 'Erreichen Sie das dritte Level',
        pl: 'Osiągnij trzeci poziom',
        zh: '到达第三层',
    },

    //
    earnMoneyWorkingInTrucker: {
        ru: 'Заработайте ${{count}} грузоперевозчиком',
        ua: 'Заробіть ${{count}} вантажоперевізником',
        en: 'Earn ${{count}} as a trucker',
        de: 'Verdienen Sie ${{count}} als LKW-Fahrer',
        pl: 'Zarób ${{count}} jako kierowca ciężarówki',
        zh: '作为卡车司机赚取${{count}}',
    },
    earnMoneyWorkingInTrucker2: {
        ru: 'Заработайте ${{count}} дальнобойщиком',
        ua: 'Заробіть ${{count}} далекобійником',
        en: 'Earn ${{count}} as a long-haul trucker',
        de: 'Verdienen Sie ${{count}} als Fernfahrer',
        pl: 'Zarób ${{count}} jako kierowca długodystansowy',
        zh: '赚取${{count}}作为长途卡车司机',
    },

    earnMoneyWorkingBusman: {
        ru: 'Заработайте ${{count}} автобусником',
        ua: 'Заробіть ${{count}} автобусником',
        en: 'Earn ${{count}} working as a busman',
        de: 'Verdienen Sie ${{count}} als Busfahrer',
        pl: 'Zarób ${{count}} jako kierowca autobusu',
        zh: '当司机赚${{count}',
    },

    meetPlayers: {
        ru: 'Познакомьтесь с {{greetCount}} игроками',
        ua: 'Познайомтеся з {{greetCount}} гравцями',
        en: 'Meet {{greetCount}} players',
        de: 'Treffen Sie {{greetCount}} Spieler',
        pl: 'Poznaj {{greetCount}} graczy',
        zh: '与{{greetCount}}玩家见面',
    },

    playSlotsForChips: {
        ru: 'Сыграйте слоты на {{chipsGoal}} фишек',
        ua: 'Зіграйте в слоти на {{chipsGoal}} фішок',
        en: 'Play slots for {{chipsGoal}} chips',
        de: 'Spielen Sie Slots für {{chipsGoal}} Chips',
        pl: 'Zagraj w automaty na {{chipsGoal}} żetonów',
        zh: '为{{chipsGoal}}筹码玩插槽',
    },

    // interactions
    transferMoneyToPlayers: {
        en: 'Hand over ${{amount}} to {{transfersCount}} players',
        ru: 'Передайте ${{amount}} {{transfersCount}} игрокам',
        ua: 'Передайте ${{amount}} {{transfersCount}} гравцям',
        de: 'Übergeben Sie ${{amount}} an {{transfersCount}} Spieler',
        pl: 'Przekaż ${{amount}} do {{transfersCount}} graczy',
        zh: '将${{amount}}交给{{transfersCount}}玩家',
    },

    openInteractionOnPlayer: {
        ru: 'Найдите игрока и откройте на нём меню взаимодействия',
        ua: 'Знайдіть гравця і відкрийте на ньому меню взаємодії',
        en: 'Find a player and open the interaction menu on them',
        de: 'Finden Sie einen Spieler und öffnen Sie das Interaktionsmenü darauf',
        pl: 'Znajdź gracza i otwórz na nim menu interakcji',
        zh: '找到一个玩家并打开他们的互动菜单',
    },

    //
    tuneCar: {
        ru: 'Затюнингуйте машину не менее чем на ${{tuningAmountGoal}}',
        ua: 'Затюнінгуйте машину не менше ніж на ${{tuningAmountGoal}}',
        en: 'Tune your car for at least ${{tuningAmountGoal}}',
        de: 'Tunen Sie Ihr Auto für mindestens ${{tuningAmountGoal}}',
        pl: 'Wtuninguje swój samochód za co najmniej ${{tuningAmountGoal}}',
        zh: '为至少${{tuningAmountGoal}}调整您的汽车',
    },

    buyChipsForMoney: {
        ru: 'Купите фишек на ${{moneyGoal}}',
        ua: 'Купіть фішок на ${{moneyGoal}}',
        en: 'Purchase chips for ${{moneyGoal}}',
        de: 'Kaufen Sie Chips für ${{moneyGoal}}',
        pl: 'Kup żetony za ${{moneyGoal}}',
        zh: '${{moneyGoal}}购买筹码',
    },
    buyChips: {
        ru: 'Купите {{chipsGoal}} фишек',
        ua: 'Купіть {{chipsGoal}} фішок',
        en: 'Purchase {{chipsGoal}} chips',
        de: 'Kaufen Sie {{chipsGoal}} Chips',
        pl: 'Kup {{chipsGoal}} żetonów',
        zh: '购买{{chipsGoal}}筹码',
    },
    playRouletteForChips: {
        ru: 'Сыграйте рулетку суммой минимум {{chipsGoal}} фишек',
        ua: 'Зіграйте рулетку сумою мінімум {{chipsGoal}} фішок',
        en: 'Play roulette with a minimum of {{chipsGoal}} chips',
        de: 'Spielen Sie Roulette mit mindestens {{chipsGoal}} Chips',
        pl: 'Zagraj w ruletkę za co najmniej {{chipsGoal}} żetonów',
        zh: '玩轮盘赌最少{{chipsGoal}}筹码',
    },
    spinLuckyWheel: {
        ru: 'Покрутите колесо удачи',
        ua: 'Покрутіть колесо удачі',
        en: 'Spin the lucky wheel',
        de: 'Drehen Sie das Glücksrad',
        pl: 'Kręć kołem fortuny',
        zh: '转动幸运轮',
    },

    //
    buyAnythingInGunStore: {
        ru: 'Купите что нибудь в оружейном магазине',
        ua: 'Купіть щось у збройному магазині',
        en: 'Buy something in the gun store',
        de: 'Kaufen Sie etwas im Waffenladen',
        pl: 'Kup coś w sklepie z bronią',
        zh: '在武装国度买些东西',
    },

    //
    addAnimationsToFastAccess: {
        ru: 'Добавьте {{animationsCount}} анимаций в быстрый доступ',
        ua: 'Додайте {{animationsCount}} анімацій до швидкого доступу',
        en: 'Add {{animationsCount}} animations to quick access',
        de: 'Fügen Sie {{animationsCount}} Animationen zum Schnellzugriff hinzu',
        pl: 'Dodaj {{animationsCount}} animacji do szybkiego dostępu',
        zh: '添加{{animationsCount}}动画来快速访问',
    },

    addAnimationsToFavorite: {
        ru: 'Добавьте {{animationsCount}} анимаций в избранное',
        ua: 'Додайте {{animationsCount}} анімацій до обраного',
        en: 'Add {{animationsCount}} animations to favorites',
        de: 'Fügen Sie {{animationsCount}} Animationen zu den Favoriten hinzu',
        pl: 'Dodaj {{animationsCount}} animacji do ulubionych',
        zh: '将{{animationsCount}}动画添加到收藏夹',
    },

    playAnimation: {
        ru: 'Запустите {{count}} анимаций',
        ua: 'Запустіть {{count}} анімацій',
        en: 'Play {{count}} animations',
        de: 'Spielen Sie {{count}} Animationen',
        pl: 'Zagraj {{count}} animacji',
        zh: '播放{{count}}动画',
    },

    //
    sellAnyVehicle: {
        ru: 'Продай любое своё Т/С',
        ua: 'Продай будь-яке своє ТЗ',
        en: 'Sell any of your vehicles',
        de: 'Verkaufe jedes deiner Fahrzeuge',
        pl: 'Sprzedaj dowolny z twoich pojazdów',
        zh: '卖掉你的任何一辆车',
    },

    // house
    buyHouse: {
        ru: 'Купите дом',
        ua: 'Купіть будинок',
        en: 'Buy a house',
        de: 'Kaufe ein Haus',
        pl: 'Kup dom',
        zh: '买一所房子',
    },
    enterHouse: {
        ru: 'Войдите в дом',
        ua: 'Увійдіть до будинку',
        en: 'Enter the house',
        de: 'Betrete das Haus',
        pl: 'Wejdź do domu',
        zh: '进入房屋',
    },
    exitHouse: {
        ru: 'Выйдите из дома',
        ua: 'Вийдіть з будинку',
        en: 'Exit the house',
        de: 'Verlassen das haus',
        pl: 'Wyjść z domu',
        zh: '离开房屋',
    },
    sellHouse: {
        ru: 'Продайте дом',
        ua: 'Продайте будинок',
        en: 'Sell the house',
        de: 'Verkaufe das Haus',
        pl: 'Sprzedaj dom',
        zh: '卖掉房子',
    },
    lockHouse: {
        ru: 'Закройте дом на замок',
        ua: 'Закрийте будинок на замок',
        en: 'Lock the house',
        de: 'Schließe das Haus ab',
        pl: 'Zamknij dom na klucz',
        zh: '用锁把房子锁起来',
    },
    unlockHouse: {
        ru: 'Откройте дом',
        ua: 'Відкрийте будинок',
        en: 'Unlock the house',
        de: 'Öffne das Haus',
        pl: 'Otwórz dom',
        zh: '打开房子',
    },
    enterGarage: {
        ru: 'Заедьте в гараж на машине',
        ua: 'Заїдьте в гараж на машині',
        en: 'Enter the garage with the car',
        de: 'Fahren Sie mit dem Auto in die Garage',
        pl: 'Wjedź do garażu samochodem',
        zh: '带着车进入车库',
    },
    exitGarage: {
        ru: 'Выедьте из гаража на машине',
        ua: 'Виїдьте з гаража на машині',
        en: 'Exit the garage with the car',
        de: 'Fahren Sie mit dem Auto aus der Garage',
        pl: 'Wyjedź z garażu samochodem',
        zh: '带着车离开车库',
    },

    //
    earnMoney: {
        ru: 'Заработайте ${{moneyGoal}} любым способом',
        ua: 'Заробіть ${{moneyGoal}} будь-яким способом',
        en: 'Earn ${{moneyGoal}} by any means',
        de: 'Verdienen Sie ${{moneyGoal}} auf beliebige Weise',
        pl: 'Zarób ${{moneyGoal}} dowolnym sposobem',
        zh: '以任何方式赚取${{moneyGoal}}',
    },

    //
    gunClub: {
        ru: 'Пройдите испытание на стрельбище',
        ua: 'Пройдіть випробування на стрільбищі',
        en: 'Complete the shooting range challenge',
        de: 'Bestehen Sie die Herausforderung auf dem Schießstand',
        pl: 'Przejdź wyzwanie na strzelnicy',
        zh: '完成射击场挑战',
    },

    //
    getPassport: {
        ru: 'Получите паспорт',
        ua: 'Отримайте паспорт',
        en: 'Get a ID card',
        de: 'Holen Sie sich ein Passport',
        pl: 'Otrzymaj paszport',
        zh: '办身份证',
    },

    //
    buyAnythingInCasinoBar: {
        ru: 'Купите что-нибудь в баре в казино',
        ua: 'Купіть щось у барі в казино',
        en: 'Buy anything in the casino bar',
        de: 'Kaufen Sie etwas in der Casino-Bar',
        pl: 'Kup coś w barze kasyna',
        zh: '在赌场酒吧买任何东西',
    },
    drinkVodka: {
        ru: 'Выпейте {{goal}} бутылок водки',
        ua: 'Випийте {{goal}} пляшок горілки',
        en: 'Drink {{goal}} bottles of vodka',
        de: 'Trinken Sie {{goal}} Flaschen Wodka',
        pl: 'Wypij {{goal}} butelek wódki',
        zh: '喝{{goal}}瓶伏特加',
    },

    //
    catchAmountAnyFish: {
        ru: 'Словите {{amount}} любых рыб',
        ua: 'Зловіть {{amount}} будь-яких риб',
        en: 'Catch {{amount}} any fish',
        de: 'Fangen Sie {{amount}} beliebige Fische',
        pl: 'Złap {{amount}} dowolnych ryb',
        zh: 'Catch {{amount}} any fish',
    },
    catchSpecificFish: {
        ru: 'Словите рыбу "{{fish}}" {{fishNeeded}} раз',
        ua: 'Зловіть рибу "{{fish}}" {{fishNeeded}} разів',
        en: 'Catch the fish "{{fish}}" {{fishNeeded}} times',
        de: 'Fangen Sie den Fisch "{{fish}}" {{fishNeeded}} mal',
        pl: 'Złap rybę "{{fish}}" {{fishNeeded}} razy',
        zh: `抓鱼'{{fish}}'{{fishNeeded}}次`,
    },

    //
    huntAmountAnyAnimals: {
        ua: 'Вполюйте {{amount}} будь-яких тварин',
        ru: 'Охотьтесь на {{amount}} любых животных',
        en: 'Hunt {{amount}} any animals',
        de: 'Jagen Sie {{amount}} beliebige Tiere',
        pl: 'Upoluj {{amount}} dowolnych zwierząt',
        zh: '猎杀{{amount}}任何动物',
    },

    // Новые квесты с 03/08/2025 august
    'collectQuarryMiner': {
        'ru': 'Добудьте {{count}} любой руды работая шахтером на шахте',
        'ua': 'Добудьте {{count}} будь-якої руди, працюючи шахтарем у шахті',
        'en': 'Mine {{count}} of any ore while working as a miner in the quarry',
        'de': 'Baue {{count}} beliebiges Erz ab, während du als Bergarbeiter im Steinbruch arbeitest',
        'pl': 'Wydobądź {{count}} dowolnej rudy pracując jako górnik w kamieniołomie',
    },
    'earnMoneyWorkingDumperInQuarry': {
        'ru': 'Заработайте {{amount}}$ работая водителем самосвала на шахте',
        'ua': 'Заробіть {{amount}}$, працюючи водієм самоскида на шахті',
        'en': 'Earn {{amount}}$ working as a dumper driver in the quarry',
        'de': 'Verdiene {{amount}}$, indem du als Muldenkipperfahrer im Steinbruch arbeitest',
        'pl': 'Zarób {{amount}}$ pracując jako kierowca wywrotki w kamieniołomie',
    },
    'earnMoneyWorkingBulldozerInQuarry': {
        'ru': 'Заработайте {{amount}}$ работая водителем бульдозера на шахте',
        'ua': 'Заробіть {{amount}}$, працюючи водієм бульдозера на шахті',
        'en': 'Earn {{amount}}$ working as a bulldozer driver in the quarry',
        'de': 'Verdiene {{amount}}$, indem du als Bulldozerfahrer im Steinbruch arbeitest',
        'pl': 'Zarób {{amount}}$ pracując jako operator buldożera w kamieniołomie',
    },
    'flappyBirdReachRecord': {
        'ru': 'Побейте свой рекорд в мини игре Flappy Bird',
        'ua': 'Побий свій рекорд у мінігрі Flappy Bird',
        'en': 'Beat your record in the Flappy Bird mini-game',
        'de': 'Schlag deinen Rekord im Flappy Bird Minispiel',
        'pl': 'Pobij swój rekord w minigrze Flappy Bird',
    },
    'sendSmsPlayers': {
        'ru': 'Отправьте {{count}} смс на разные номера',
        'ua': 'Надішліть {{count}} смс на різні номери',
        'en': 'Send {{count}} SMS messages to different numbers',
        'de': 'Sende {{count}} SMS an verschiedene Nummern',
        'pl': 'Wyślij {{count}} SMS-ów na różne numery',
    },
    drinkWhiskey: {
        'ru': 'Выпейте {{goal}} бутылок виски',
        'ua': 'Випий {{goal}} пляшок віскі',
        'en': 'Drink {{goal}} bottles of whiskey',
        'de': 'Trink {{goal}} Flaschen Whiskey',
        'pl': 'Wypij {{goal}} butelek whisky',
    },
    eatBurgersCount: {
        'ru': 'Сьешь {{goal}} бургеров',
        'ua': 'З\'їж {{goal}} бургерів',
        'en': 'Eat {{goal}} burgers',
        'de': 'Iss {{goal}} Burger',
        'pl': 'Zjedz {{goal}} burgerów',
    },
    callTime: {
        'ru': 'Проведи {{minutes}} минут в звонке с кем нибудь',
        'ua': 'Проведи {{minutes}} хвилин у дзвінку з кимось',
        'en': 'Spend {{minutes}} minutes in a call with someone',
        'de': 'Verbringe {{minutes}} Minuten in einem Anruf mit jemandem',
        'pl': 'Spędź {{minutes}} minut na rozmowie z kimś',
    },
    repairAnyVehicles: {
        'ru': 'Почини {{count}} любых машин рем. комплектов',
        'ua': 'Полагодь {{count}} будь-яких машин ремкомплектом',
        'en': 'Repair {{count}} any vehicles with a repair kit',
        'de': 'Repariere {{count}} beliebige Fahrzeuge mit einem Reparaturset',
        'pl': 'Napraw {{count}} dowolnych pojazdów za pomocą zestawu naprawczego',
    },
    medicalCheckup: {
        'ru': 'Проверься в больнице на наличие болезней',
        'ua': 'Перевірся в лікарні на наявність хвороб',
        'en': 'Get checked at the hospital for any diseases',
        'de': 'Lass dich im Krankenhaus auf Krankheiten untersuchen',
        'pl': 'Zbadaj się w szpitalu pod kątem chorób',
    },
    'takeBloodMedical': {
        'ru': 'Сдай кровь в больнице',
        'ua': 'Здай кров у лікарні',
        'en': 'Donate blood at the hospital',
        'de': 'Spende Blut im Krankenhaus',
        'pl': 'Oddaj krew w szpitalu',
    },
    'getDrivingLicenseB': {
        'ru': 'Получи права категории Б',
        'ua': 'Отримай права категорії B',
        'en': 'Get a category B driving license',
        'de': 'Hol dir den Führerschein der Klasse B',
        'pl': 'Zdobądź prawo jazdy kategorii B',
    },
    'buySimcard': {
        'ru': 'Купи симкарту в супермаркете',
        'ua': 'Купи сімкарту в супермаркеті',
        'en': 'Buy a SIM card at the supermarket',
        'de': 'Kauf eine SIM-Karte im Supermarkt',
        'pl': 'Kup kartę SIM w supermarkecie',
    },
    "activateSimCard": {
        "ru": "Активируй сим-карту",
        "ua": "Активуй сім-карту",
        "en": "Activate the SIM card",
        "de": "Aktiviere die SIM-Karte",
        "pl": "Aktywuj kartę SIM",
    },
};
