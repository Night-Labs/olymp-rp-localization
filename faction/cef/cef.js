import arrest from './arrest';
import upgrades from './upgrades';
import fine from './fine';

export const cef = {
    arrest,
    upgrades,
    fine,

    tabsName: {
        ru: 'Все доступные действия',
        ua: 'Усі доступні дії',
        en: 'All available actions',
        de: 'Alle verfügbaren Aktionen',
        pl: 'Wszystkie dostępne działania',
    },

    state: {
        ru: 'Состояние',
        ua: 'Стан',
        en: 'State',
        de: 'Zustand',
        pl: 'Stan',
    },

    tabs: {
        main: {
            ru: 'Главная',
            ua: 'Головна',
            en: 'Home',
            de: 'Startseite',
            pl: 'Główna',
        },

        quests: {
            ru: 'Квесты',
            ua: 'Квести',
            en: 'Quests',
            de: 'Quests',
            pl: 'Zadania',
        },

        team: {
            ru: 'Состав',
            ua: 'Склад',
            en: 'Team',
            de: 'Team',
            pl: 'Zespół',
        },

        ranks: {
            ru: 'Ранги',
            ua: 'Ранги',
            en: 'Ranks',
            de: 'Ränge',
            pl: 'Rangi',
        },

        map: {
            ru: 'Карта',
            ua: 'Карта',
            en: 'Map',
            de: 'Karte',
            pl: 'Mapa',
        },

        upgrades: {
            ru: 'Улучшения',
            ua: 'Покращення',
            en: 'Upgrades',
            de: 'Verbesserungen',
            pl: 'Ulepszenia',
        },

        suply: {
            ru: 'Поставки',
            ua: 'Поставки',
            en: 'Supplies',
            de: 'Lieferungen',
            pl: 'Dostawy',
        },
    },

    tabsDesc: {
        main: {
            ru: 'Здесь вы можете посмотреть общую информацию о вашей организации, а также управлять доступом к складу и бюджетом.',
            en: 'Here you can view general information about your organization, as well as manage access to the warehouse and budget.',
            ua: 'Тут ви можете переглянути загальну інформацію про вашу організацію, а також керувати доступом до складу та бюджету.',
            de: 'Hier können Sie allgemeine Informationen über Ihre Organisation einsehen sowie den Zugang zum Lager und zum Budget verwalten.',
            pl: 'Tutaj możesz przeglądać ogólne informacje o swojej organizacji, jak również zarządzać dostępem do magazynu i budżetu.',
        },
        quests: {
            ru: 'Здесь вы можете выполнять фракционные квесты.',
            en: 'Here you can complete faction quests.',
            ua: 'Тут ви можете виконувати фракційні квести.',
            de: 'Hier können Sie Fraktionsquests abschließen.',
            pl: 'Tutaj możesz wykonywać questy frakcyjne.',
        },
        team: {
            ru: 'Здесь вы можете просмотреть всех участников вашей организации, а также управлять ими.',
            en: 'Here you can view all members of your organization, as well as manage them.',
            ua: 'Тут ви можете переглянути всіх учасників вашої організації, а також керувати ними.',
            de: 'Hier können Sie alle Mitglieder Ihrer Organisation ansehen und sie verwalten.',
            pl: 'Tutaj możesz przeglądać wszystkich członków swojej organizacji oraz zarządzać nimi.',
        },
        ranks: {
            ru: 'Здесь вы можете управлять рангами вашей организации.',
            en: 'Here you can manage the ranks of your organization.',
            ua: 'Тут ви можете керувати рангами вашої організації.',
            de: 'Hier können Sie die Ränge Ihrer Organisation verwalten.',
            pl: 'Tutaj możesz zarządzać rangami w swojej organizacji.',
        },
        map: {
            ru: 'С помощью этой карты вы можете следить за территориями вашей банды. А также объявлять войну за территории другим бандам.',
            ua: 'За допомогою цієї карти ви можете стежити за територіями вашої банди. А також оголошувати війну за території іншим бандам.',
            en: 'With this map, you can track the territories of your gang. You can also declare war on territories belonging to other gangs.',
            de: 'Mit dieser Karte können Sie die Gebiete Ihrer Band überwachen. Sie können auch Krieg gegen Gebiete anderer Banden erklären.',
            pl: 'Z pomocą tej mapy możesz śledzić terytoria twojej bandy. Możesz także wypowiedzieć wojnę o terytoria należące do innych band.',
        },
        upgrades: {
            ru: 'Тут лидер может управлять улучшениями для организации',
            ua: 'Тут лідер може керувати покращеннями для організації',
            en: 'Here the leader can manage upgrades for the organization',
            de: 'Hier kann der Leiter Verbesserungen für die Organisation verwalten',
            pl: 'Tutaj lider może zarządzać ulepszeniami dla organizacji',
        },

        suply: {
            ru: 'Тут можно заказывать поставки нужных вашей фракции материалов',
            ua: 'Тут можна замовляти поставки потрібних вашій фракції матеріалів',
            en: 'Here you can order supplies for your faction',
            de: 'Hier können Sie Lieferungen für Ihre Fraktion bestellen',
            pl: 'Tutaj możesz zamówić materiały dla swojej frakcji',
        },
    },

    nameSurname: {
        ru: 'Имя Фамилия',
        en: 'Name Surname',
        ua: "Ім'я Прізвище",
        de: 'Vorname Nachname',
        pl: 'Imię Nazwisko',
    },

    leaderDate: {
        ru: 'Назначен(а) на должность',
        en: 'Appointed to the position on',
        ua: 'Призначений(а) на посаду',
        de: 'Am Datum zum Amt ernannt',
        pl: 'Mianowany(ana) na stanowisko dnia',
    },

    generalStatistics: {
        ru: 'Общая статистика',
        en: 'General Statistics',
        ua: 'Загальна статистика',
        de: 'Allgemeine Statistik',
        pl: 'Statystyki ogólne',
    },

    actionsLog: {
        ru: 'Лог действий',
        en: 'Actions Log',
        ua: 'Лог дій',
        de: 'Aktionsprotokoll',
        pl: 'Dziennik działań',
    },

    search: {
        ru: 'Поиск',
        en: 'Search',
        ua: 'Пошук',
        de: 'Suche',
        pl: 'Szukaj',
    },

    nameRank: {
        ru: 'Имя/Ранг',
        en: 'Name/Rank',
        ua: "Ім'я/Ранг",
        de: 'Name/Rang',
        pl: 'Nazwa/Ranga',
    },

    date: {
        ru: 'Дата',
        en: 'Date',
        ua: 'Дата',
        de: 'Datum',
        pl: 'Data',
    },

    crimeFinance: {
        ru: 'Общаг',
        en: 'Slush fund',
        ua: 'Общак',
        de: 'Schwarzgeldkasse',
        pl: 'Czarna kasa',
    },

    govFinance: {
        ru: 'Бюджет',
        en: 'Budget',
        ua: 'Бюджет',
        de: 'Haushaltsplan',
        pl: 'Budżet',
    },

    balance: {
        ru: 'Баланс',
        en: 'Balance',
        ua: 'Баланс',
        de: 'Saldo',
        pl: 'Saldo',
    },

    enterSumm: {
        ru: 'Введите сумму',
        en: 'Enter the amount',
        ua: 'Введіть суму',
        de: 'Betrag eingeben',
        pl: 'Wprowadź kwotę',
    },

    deposit: {
        ru: 'Положить',
        en: 'Deposit',
        ua: 'Покласти',
        de: 'Einzahlen',
        pl: 'Wpłacić',
    },

    take: {
        ru: 'Снять',
        en: 'Withdraw',
        ua: 'Зняти',
        de: 'Abheben',
        pl: 'Wypłacić',
    },

    limitText: {
        ru: '*Лимит на снятие {{limit}}',
        ua: '*Ліміт на зняття {{limit}}',
        en: '*Withdrawal limit {{limit}}',
        de: '*Auszahlungslimit {{limit}}',
        pl: '*Limit wypłaty {{limit}}',
    },

    warehouse: {
        ru: 'Склад',
        en: 'Warehouse',
        ua: 'Склад',
        de: 'Lagerhaus',
        pl: 'Magazyn',
    },

    vehicleRespawn: {
        ru: 'Респавн авто',
        ua: 'Респавн авто',
        en: 'Vehicle respawn',
        de: 'Fahrzeug-Respawn',
        pl: 'Respawn pojazdu',
    },

    status: {
        ru: 'Статус',
        en: 'Status',
        ua: 'Статус',
        de: 'Status',
        pl: 'Status',
    },

    allowed: {
        ru: 'Разрешено',
        en: 'Allowed',
        ua: 'Дозволено',
        de: 'Erlaubt',
        pl: 'Dozwolone',
    },

    forbidden: {
        ru: 'Запрещено',
        en: 'Forbidden',
        ua: 'Заборонено',
        de: 'Verboten',
        pl: 'Zabronione',
    },

    allow: {
        ru: 'Разрешить',
        en: 'Allow',
        ua: 'Дозволити',
        de: 'Erlauben',
        pl: 'Zezwolić',
    },

    forbid: {
        ru: 'Запретить',
        en: 'Forbid',
        ua: 'Заборонити',
        de: 'Verbieten',
        pl: 'Zakazać',
    },

    rank: {
        ru: 'Ранг',
        en: 'Rank',
        ua: 'Ранг',
        de: 'Rang',
        pl: 'Ranga',
    },

    dateOfEntry: {
        ru: 'Дата вступления',
        en: 'Date of Entry',
        ua: 'Дата вступу',
        de: 'Eintrittsdatum',
        pl: 'Data wejścia',
    },

    action: {
        ru: 'Действие',
        en: 'Action',
        ua: 'Дія',
        de: 'Aktion',
        pl: 'Akcja',
    },

    online: {
        ru: 'Онлайн',
        en: 'Online',
        ua: 'Онлайн',
        de: 'Online',
        pl: 'Online',
    },

    was: {
        ru: 'Был(а)',
        en: 'Was',
        ua: 'Був(ла)',
        de: 'War',
        pl: 'Był(a)',
    },

    control: {
        ru: 'Управление',
        en: 'Control',
        ua: 'Керування',
        de: 'Steuerung',
        pl: 'Kontrola',
    },

    controlUser: {
        ru: 'Управление игроком',
        en: 'Player Control',
        ua: 'Керування гравцем',
        de: 'Spielersteuerung',
        pl: 'Kontrola gracza',
    },

    kick: {
        ru: 'Выгнать',
        en: 'Kick',
        ua: 'Вигнати',
        de: 'Rauswerfen',
        pl: 'Wyrzucić',
    },

    title: {
        ru: 'Название',
        en: 'Title',
        ua: 'Назва',
        de: 'Titel',
        pl: 'Tytuł',
    },

    numbers: {
        ru: 'Численость',
        en: 'Numbers',
        ua: 'Чисельність',
        de: 'Anzahl',
        pl: 'Liczba',
    },

    requiredExperience: {
        ru: 'Требуемый опыт',
        en: 'Required Experience',
        ua: 'Необхідний досвід',
        de: 'Erforderliche Erfahrung',
        pl: 'Wymagane doświadczenie',
    },

    view: {
        ru: 'Просмотр',
        en: 'View',
        ua: 'Перегляд',
        de: 'Ansicht',
        pl: 'Widok',
    },

    you: {
        ru: 'Вы',
        en: 'You',
        ua: 'Ви',
        de: 'Du',
        pl: 'Ty',
    },

    controlRank: {
        ru: 'Редактирование ранга',
        en: 'Edit Rank',
        ua: 'Редагування рангу',
        de: 'Rang bearbeiten',
        pl: 'Edytuj rangę',
    },

    permits: {
        ru: 'Разрешения',
        en: 'Permits',
        ua: 'Дозволи',
        de: 'Genehmigungen',
        pl: 'Zezwolenia',
    },

    stateCount: {
        online: {
            ru: 'человек онлайн',
            en: 'people online',
            ua: 'людей онлайн',
            de: 'Personen online',
            pl: 'osób online',
        },
        offline: {
            ru: 'человек оффлайн',
            en: 'people offline',
            ua: 'людей оффлайн',
            de: 'Personen offline',
            pl: 'osób offline',
        },
        general: {
            ru: 'человек всего',
            en: 'total people',
            ua: 'всього людей',
            de: 'Gesamtanzahl Personen',
            pl: 'ogółem osób',
        },
    },

    //
    materials: {
        ru: 'Материалы',
        ua: 'Матеріали',
        en: 'Materials',
        de: 'Materialien',
        pl: 'Materiały',
    },
    medicalMaterials: {
        ru: 'Мед. материалы',
        ua: 'Мед. матеріали',
        en: 'Medical materials',
        de: 'Medizinische Materialien',
        pl: 'Materiały medyczne',
    },

    noFaction: {
        ru: 'На данный момент вы не состоите в фракции, вы можете вступить в фракцию следя за новостями в чате или других сообществах.',
        ua: 'На даний момент ви не перебуваєте у фракції, ви можете вступити у фракцію, стежачи за новинами в чаті або інших спільнотах.',
        en: 'You are not currently in a faction, you can join a faction by following the news in the chat or other communities.',
        de: 'Derzeit sind Sie in keiner Fraktion, Sie können einer Fraktion beitreten, indem Sie die Nachrichten im Chat oder in anderen Gemeinschaften verfolgen.',
        pl: 'Obecnie nie należysz do frakcji, możesz dołączyć do frakcji, śledząc wiadomości na czacie lub w innych społecznościach.',
    },

    //
    respawnButton: {
        ru: 'Зареспавнить',
        ua: 'Зареспавнити',
        en: 'Respawn',
        de: 'Respawnen',
        pl: 'Respawnować',
    },
};
