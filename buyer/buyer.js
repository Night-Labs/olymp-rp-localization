export default {
    header: {
        ru: 'Скупщик',
        ua: 'Скупник',
        en: 'Buyer',
        de: 'Ankäufer',
        pl: 'Skupujący',
        zh: '买方',
    },

    information: {
        ru: 'Информация',
        ua: 'Інформація',
        en: 'Information',
        de: 'Information',
        pl: 'Informacja',
        zh: '消息',
    },

    listDesc: {
        ru: 'Список доступных для продажи товаров',
        ua: 'Список доступних для продажу товарів',
        en: 'List of items available for sale',
        de: 'Liste der zum Verkauf verfügbaren Artikel',
        pl: 'Lista przedmiotów dostępnych do sprzedaży',
        zh: '可供出售的物品清单',
    },

    price: {
        ru: 'Цена',
        ua: 'Ціна',
        en: 'Price',
        de: 'Preis',
        pl: 'Cena',
        zh: '价格',
    },

    maxPrice: {
        ru: 'Максимальная цена',
        ua: 'Максимальна ціна',
        en: 'Maximum price',
        de: 'Höchstpreis',
        pl: 'Maksymalna cena',
    },

    limit: {
        ru: 'Лимит',
        ua: 'Ліміт',
        en: 'Limit',
        de: 'Limit',
        pl: 'Limit',
        zh: '极限',
    },

    have: {
        ru: 'У вас',
        ua: 'У вас',
        en: 'Your',
        de: 'Deine',
        pl: 'U ciebie',
        zh: '你的',
    },

    useTrunk: {
        ru: 'Продавать из багажника машины рядом',
        ua: 'Продавати з багажника машини поруч',
        en: 'Sell from the trunk of a car nearby',
        de: 'Auch aus dem Kofferraum eines Autos in der Nähe verkaufen',
        pl: 'Sprzedawaj też z bagażnika auta obok',
        zh: '一并出售附近车辆后备箱内的物品',
    },

    noTrunkNearby: {
        ru: 'машины рядом нет',
        ua: 'машини поруч немає',
        en: 'no car nearby',
        de: 'kein Auto in der Nähe',
        pl: 'brak auta w pobliżu',
        zh: '附近没有车辆',
    },

    enterAmount: {
        ru: 'Введите количество',
        ua: 'Введіть кількість',
        en: 'Enter amount',
        de: 'Menge eingeben',
        pl: 'Wprowadź ilość',
        zh: '输入金额',
    },

    sell: {
        ru: 'Продать',
        en: 'Sell',
        ua: 'Продати',
        de: 'Verkaufen',
        pl: 'Sprzedać',
        zh: '卖',
    },

    sellAll: {
        ru: 'Продать всё',
        ua: 'Продати все',
        en: 'Sell all',
        de: 'Alles verkaufen',
        pl: 'Sprzedaj wszystko',
    },

    interaction: {
        ru: 'Открыть меню скупщика',
        ua: 'Відкрити меню скупника',
        en: "Open the buyer's menu",
        de: 'Käufermenü öffnen',
        pl: 'Otwórz menu kupującego',
        zh: '打开买方的菜单',
    },

    limitReached: {
        ru: 'Скупщику пока что больше не нужен этот товар',
        ua: 'Скупникові поки що більше не потрібен цей товар',
        en: 'The buyer no longer needs this item for now',
        de: 'Der Käufer benötigt diesen Artikel vorerst nicht mehr',
        pl: 'Kupujący na razie nie potrzebuje tego towaru',
        zh: '买家现在不再需要这个物品了',
    },

    outOfCash: {
        ru: 'У скупщика закончились наличные, следующий завоз в новом окне цен',
        ua: 'У скупника закінчилася готівка, наступне завезення у новому вікні цін',
        en: 'The buyer is out of cash, the next delivery comes with the new price window',
        de: 'Der Käufer hat kein Bargeld mehr, der Nachschub kommt mit dem neuen Preisfenster',
        pl: 'Kupujący nie ma już gotówki, kolejna dostawa w nowym oknie cen',
    },

    gates: {
        organizationOnly: {
            ru: 'Этот скупщик работает только с организациями',
            ua: 'Цей скупник працює лише з організаціями',
            en: 'This buyer only deals with organizations',
            de: 'Dieser Käufer handelt nur mit Organisationen',
            pl: 'Ten kupujący współpracuje tylko z organizacjami',
        },
        busy: {
            ru: 'Сначала закончите текущую работу',
            ua: 'Спочатку закінчіть поточну роботу',
            en: 'Finish what you are doing first',
            de: 'Beende zuerst deine aktuelle Arbeit',
            pl: 'Najpierw zakończ obecną pracę',
        },
    },

    youNotHaveItem: {
        ru: 'У вас недостаточно этого товара',
        ua: 'У вас недостатньо цього товару',
        en: 'You do not have enough of this item',
        de: 'Du hast nicht genug von diesem Artikel',
        pl: 'Nie masz wystarczająco tego towaru',
        zh: '这种货你们的数量不够',
    },

    sold: {
        ru: 'Вы продали {{name}} {{quantity}} шт. за ${{price}}',
        ua: 'Ви продали {{name}} {{quantity}} шт. за ${{price}}',
        en: 'You sold {{name}} {{quantity}} pcs. for ${{price}}',
        de: 'Du hast {{name}} {{quantity}} Stk. für ${{price}} verkauft',
        pl: 'Sprzedałeś {{name}} {{quantity}} szt. za ${{price}}',
        zh: '您售出{{name}}{{quantity}}件,价格为$ {{price}}',
    },

    soldAll: {
        ru: 'Вы продали {{quantity}} предметов. за ${{price}}',
        ua: 'Ви продали {{quantity}} предметів за ${{price}}',
        en: 'You sold {{quantity}} items for ${{price}}',
        de: 'Du hast {{quantity}} Gegenstände für ${{price}} verkauft',
        pl: 'Sprzedałeś {{quantity}} przedmiotów za ${{price}}',
    },

    updatePriceIn: {
        ru: 'Обновление цен через',
        ua: 'Оновлення цін через',
        en: 'Update prices via',
        de: 'Preise aktualisieren über',
        pl: 'Aktualizacja cen przez',
    },

    dialogs: {
        fence: {
            welcome: {
                ru: 'Ну, что привёз? Разгружай, только быстро',
                ua: 'Ну, що привіз? Розвантажуй, тільки швидко',
                en: 'So what did you bring? Unload it, and make it quick',
                de: 'Na, was hast du dabei? Lad ab, aber zügig',
                pl: 'No i co przywiozłeś? Rozładuj, tylko szybko',
            },
            open: {
                ru: 'Показать товар',
                ua: 'Показати товар',
                en: 'Show the goods',
                de: 'Ware zeigen',
                pl: 'Pokaż towar',
            },
            leave: {
                ru: 'В другой раз',
                ua: 'Іншого разу',
                en: 'Another time',
                de: 'Ein andermal',
                pl: 'Innym razem',
            },
            tail: {
                ru: 'Ты приехал ко мне прямо с дела? За тобой мог быть хвост. Всё, я тебя не знаю - {{time}}. Груз держи в багажнике, с ним ничего не случится',
                ua: "Ти приїхав до мене просто зі справи? За тобою міг бути хвіст. Усе, я тебе не знаю - {{time}}. Вантаж тримай у багажнику, з ним нічого не станеться",
                en: 'You drove here straight from the job? You could have had a tail. That is it, I do not know you for {{time}}. Keep the goods in the boot, nothing will happen to them',
                de: 'Du kommst direkt vom Ding zu mir? Dir könnte jemand gefolgt sein. Das war es, ich kenne dich {{time}} lang nicht. Lass die Ware im Kofferraum, ihr passiert nichts',
                pl: 'Przyjechałeś do mnie prosto z roboty? Mogłeś mieć ogon. Koniec, nie znam cię przez {{time}}. Towar trzymaj w bagażniku, nic mu się nie stanie',
            },
            banned: {
                ru: 'Не сейчас. Приходи через {{time}}',
                ua: 'Не зараз. Приходь через {{time}}',
                en: 'Not now. Come back in {{time}}',
                de: 'Nicht jetzt. Komm in {{time}} wieder',
                pl: 'Nie teraz. Wróć za {{time}}',
            },
            ok: {
                ru: 'Понял',
                ua: 'Зрозумів',
                en: 'Got it',
                de: 'Verstanden',
                pl: 'Jasne',
            },
        },
    },

    types: {
        fishing: {
            ru: 'Рыбы',
            ua: 'Риби',
            en: 'Fishing',
            de: 'Fischen',
            pl: 'Wędkarstwo',
            zh: '钓鱼',
        },
        meat: {
            ru: 'Мяса',
            ua: "М'яса",
            en: 'Meat',
            de: 'Fleisch',
            pl: 'Mięso',
            zh: '肉类',
        },
        farm: {
            ru: 'Агропродуктов',
            ua: 'Агропродуктiв',
            en: 'Farm',
            de: 'Landwirtschaft',
            pl: 'Gospodarstwo',
            ge: 'ფერმა',
            zh: '农场',
        },
        ores: {
            ru: 'Руды',
            ua: 'Руди',
            en: 'Ores',
            de: 'Erze',
            pl: 'Rudy',
        },
        diving: {
            ru: 'Подводных находок',
            ua: 'Підводних знахідок',
            en: 'Underwater finds',
            de: 'Unterwasserfunde',
            pl: 'Znaleziska podwodne',
        },
        antiques: {
            ru: 'Антиквариата',
            ua: 'Антикваріату',
            en: 'Antiques',
            de: 'Antiquitäten',
            pl: 'Antyki',
        },
        mushrooms: {
            ru: 'Грибов',
            ua: 'Грибів',
            en: 'Mushrooms',
            de: 'Pilze',
            pl: 'Grzybów',
        },
        bishop: {
            ru: 'Бишоп',
            ua: 'Бішоп',
            en: 'Bishop',
            de: 'Bishop',
            pl: 'Bishop',
        },
        fence: {
            ru: 'Краденого',
            ua: 'Краденого',
            en: 'Stolen goods',
            de: 'Diebesgut',
            pl: 'Kradzionych rzeczy',
        },
    },
};
