import arrest from './arrest';
import upgrades from './upgrades';
import fine from './fine';
import frisk from './frisk';
import badge from './badge';

export const cef = {
    arrest,
    upgrades,
    fine,
    frisk,
    badge,

    tabsName: {
        ru: 'Все доступные действия',
        ua: 'Усі доступні дії',
        en: 'All available actions',
        de: 'Alle verfügbaren Aktionen',
        pl: 'Wszystkie dostępne działania',
        zh: '所有可用操作',
    },

    state: {
        ru: 'Состояние',
        ua: 'Стан',
        en: 'State',
        de: 'Zustand',
        pl: 'Stan',
        zh: '条件',
    },

    tabs: {
        main: {
            ru: 'Главная',
            ua: 'Головна',
            en: 'Home',
            de: 'Startseite',
            pl: 'Główna',
            zh: '主要',
        },

        quests: {
            ru: 'Квесты',
            ua: 'Квести',
            en: 'Quests',
            de: 'Quests',
            pl: 'Zadania',
            zh: '在“任务”中',
        },

        team: {
            ru: 'Состав',
            ua: 'Склад',
            en: 'Team',
            de: 'Team',
            pl: 'Zespół',
            zh: '团队',
        },

        ranks: {
            ru: 'Ранги',
            ua: 'Ранги',
            en: 'Ranks',
            de: 'Ränge',
            pl: 'Rangi',
            zh: '兰吉',
        },

        map: {
            ru: 'Карта',
            ua: 'Карта',
            en: 'Map',
            de: 'Karte',
            pl: 'Mapa',
            zh: '地图',
        },

        upgrades: {
            ru: 'Улучшения',
            ua: 'Покращення',
            en: 'Upgrades',
            de: 'Verbesserungen',
            pl: 'Ulepszenia',
            zh: '升级',
        },

        supply: {
            ru: 'Поставки',
            ua: 'Поставки',
            en: 'Supplies',
            de: 'Lieferungen',
            pl: 'Dostawy',
            zh: '设置',
        },
    },

    tabsDesc: {
        main: {
            ru: 'Здесь вы можете посмотреть общую информацию о вашей организации, а также управлять доступом к складу и бюджетом.',
            en: 'Here you can view general information about your organization, as well as manage access to the warehouse and budget.',
            ua: 'Тут ви можете переглянути загальну інформацію про вашу організацію, а також керувати доступом до складу та бюджету.',
            de: 'Hier können Sie allgemeine Informationen über Ihre Organisation einsehen sowie den Zugang zum Lager und zum Budget verwalten.',
            pl: 'Tutaj możesz przeglądać ogólne informacje o swojej organizacji, jak również zarządzać dostępem do magazynu i budżetu.',
            zh: '在这里，你可以看到有关你组织的公共信息，还可以管理仓库和预算的访问权限',
        },
        quests: {
            ru: 'Здесь отображаются общие фракционные квесты которые должны выполнить ваша фракция',
            ua: 'Тут відображаються загальні фракційні квести, які має виконати ваша фракція',
            en: 'This section displays common faction quests that your faction must complete',
            de: 'Hier werden gemeinsame Fraktionsquests angezeigt, die eure Fraktion abschließen muss',
            pl: 'Tutaj wyświetlane są wspólne zadania frakcyjne, które twoja frakcja musi wykonać',
        },
        team: {
            ru: 'Здесь вы можете просмотреть всех участников вашей организации, а также управлять ими.',
            en: 'Here you can view all members of your organization, as well as manage them.',
            ua: 'Тут ви можете переглянути всіх учасників вашої організації, а також керувати ними.',
            de: 'Hier können Sie alle Mitglieder Ihrer Organisation ansehen und sie verwalten.',
            pl: 'Tutaj możesz przeglądać wszystkich członków swojej organizacji oraz zarządzać nimi.',
            zh: '在这里，你可以查看组织中的所有参与者并对其进行管理',
        },
        ranks: {
            ru: 'Здесь вы можете управлять рангами вашей организации.',
            en: 'Here you can manage the ranks of your organization.',
            ua: 'Тут ви можете керувати рангами вашої організації.',
            de: 'Hier können Sie die Ränge Ihrer Organisation verwalten.',
            pl: 'Tutaj możesz zarządzać rangami w swojej organizacji.',
            zh: '在这里，您可以管理组织的级别',
        },
        map: {
            ru: 'С помощью этой карты вы можете следить за территориями вашей банды. А также объявлять войну за территории другим бандам.',
            ua: 'За допомогою цієї карти ви можете стежити за територіями вашої банди. А також оголошувати війну за території іншим бандам.',
            en: 'With this map, you can track the territories of your gang. You can also declare war on territories belonging to other gangs.',
            de: 'Mit dieser Karte können Sie die Gebiete Ihrer Band überwachen. Sie können auch Krieg gegen Gebiete anderer Banden erklären.',
            pl: 'Z pomocą tej mapy możesz śledzić terytoria twojej bandy. Możesz także wypowiedzieć wojnę o terytoria należące do innych band.',
            zh: '有了这张地图，你就可以追踪到你帮派的领地。你也可以对属于其他帮派的领土宣战',
        },
        upgrades: {
            ru: 'Тут лидер может управлять улучшениями для организации',
            ua: 'Тут лідер може керувати покращеннями для організації',
            en: 'Here the leader can manage upgrades for the organization',
            de: 'Hier kann der Leiter Verbesserungen für die Organisation verwalten',
            pl: 'Tutaj lider może zarządzać ulepszeniami dla organizacji',
            zh: '在这里，经理可以管理组织的改进',
        },

        supply: {
            ru: 'Тут можно заказывать поставки нужных вашей фракции материалов',
            ua: 'Тут можна замовляти поставки потрібних вашій фракції матеріалів',
            en: 'Here you can order supplies for your faction',
            de: 'Hier können Sie Lieferungen für Ihre Fraktion bestellen',
            pl: 'Tutaj możesz zamówić materiały dla swojej frakcji',
            zh: '在这里，你可以为你的材料部分订购供应品',
        },
    },

    nameSurname: {
        ru: 'Имя Фамилия',
        en: 'Name Surname',
        ua: "Ім'я Прізвище",
        de: 'Vorname Nachname',
        pl: 'Imię Nazwisko',
        zh: '姓名',
    },

    leaderDate: {
        ru: 'Назначен(а) на должность',
        en: 'Appointed to the position on',
        ua: 'Призначений(а) на посаду',
        de: 'Am Datum zum Amt ernannt',
        pl: 'Mianowany(ana) na stanowisko dnia',
        zh: '分配到任务',
    },

    generalStatistics: {
        ru: 'Общая статистика',
        en: 'General Statistics',
        ua: 'Загальна статистика',
        de: 'Allgemeine Statistik',
        pl: 'Statystyki ogólne',
        zh: '综合统计',
    },

    actionsLog: {
        ru: 'Лог действий',
        en: 'Actions Log',
        ua: 'Лог дій',
        de: 'Aktionsprotokoll',
        pl: 'Dziennik działań',
        zh: '行动日志',
    },

    search: {
        ru: 'Поиск',
        en: 'Search',
        ua: 'Пошук',
        de: 'Suche',
        pl: 'Szukaj',
        zh: '搜索',
    },

    nameRank: {
        ru: 'Имя/Ранг',
        en: 'Name/Rank',
        ua: "Ім'я/Ранг",
        de: 'Name/Rang',
        pl: 'Nazwa/Ranga',
        zh: '姓名/级别',
    },

    date: {
        ru: 'Дата',
        en: 'Date',
        ua: 'Дата',
        de: 'Datum',
        pl: 'Data',
        zh: '日期',
    },

    crimeFinance: {
        ru: 'Общаг',
        en: 'Slush fund',
        ua: 'Общак',
        de: 'Schwarzgeldkasse',
        pl: 'Czarna kasa',
        zh: '黑钱',
    },

    govFinance: {
        ru: 'Бюджет',
        en: 'Budget',
        ua: 'Бюджет',
        de: 'Haushaltsplan',
        pl: 'Budżet',
        zh: '预算',
    },

    balance: {
        ru: 'Баланс',
        en: 'Balance',
        ua: 'Баланс',
        de: 'Saldo',
        pl: 'Saldo',
        zh: '平衡',
    },

    enterSumm: {
        ru: 'Введите сумму',
        en: 'Enter the amount',
        ua: 'Введіть суму',
        de: 'Betrag eingeben',
        pl: 'Wprowadź kwotę',
        zh: '输入金额',
    },

    deposit: {
        ru: 'Положить',
        en: 'Deposit',
        ua: 'Покласти',
        de: 'Einzahlen',
        pl: 'Wpłacić',
        zh: '支付',
    },

    take: {
        ru: 'Снять',
        en: 'Withdraw',
        ua: 'Зняти',
        de: 'Abheben',
        pl: 'Wypłacić',
        zh: '支付',
    },

    limitText: {
        ru: '*Лимит на снятие {{limit}}',
        ua: '*Ліміт на зняття {{limit}}',
        en: '*Withdrawal limit {{limit}}',
        de: '*Auszahlungslimit {{limit}}',
        pl: '*Limit wypłaty {{limit}}',
        zh: '付款限额{{limit}}',
    },

    warehouse: {
        ru: 'Склад',
        en: 'Warehouse',
        ua: 'Склад',
        de: 'Lagerhaus',
        pl: 'Magazyn',
        zh: '存储',
    },

    vehicleRespawn: {
        ru: 'Респавн авто',
        ua: 'Респавн авто',
        en: 'Vehicle respawn',
        de: 'Fahrzeug-Respawn',
        pl: 'Respawn pojazdu',
        zh: '车辆重置',
    },

    status: {
        ru: 'Статус',
        en: 'Status',
        ua: 'Статус',
        de: 'Status',
        pl: 'Status',
        zh: '状态',
    },

    allowed: {
        ru: 'Разрешено',
        en: 'Allowed',
        ua: 'Дозволено',
        de: 'Erlaubt',
        pl: 'Dozwolone',
        zh: '允许',
    },

    forbidden: {
        ru: 'Запрещено',
        en: 'Forbidden',
        ua: 'Заборонено',
        de: 'Verboten',
        pl: 'Zabronione',
        zh: '禁止',
    },

    allow: {
        ru: 'Разрешить',
        en: 'Allow',
        ua: 'Дозволити',
        de: 'Erlauben',
        pl: 'Zezwolić',
        zh: '允许',
    },

    forbid: {
        ru: 'Запретить',
        en: 'Forbid',
        ua: 'Заборонити',
        de: 'Verbieten',
        pl: 'Zakazać',
        zh: '禁止',
    },

    rank: {
        ru: 'Ранг',
        en: 'Rank',
        ua: 'Ранг',
        de: 'Rang',
        pl: 'Ranga',
        zh: '范围',
    },

    warns: {
        ru: 'Выговор',
        ua: 'Догана',
        en: 'Reprimand',
        de: 'Verweis',
        pl: 'Nagana',
    },

    dateOfEntry: {
        ru: 'Дата вступления',
        en: 'Date of Entry',
        ua: 'Дата вступу',
        de: 'Eintrittsdatum',
        pl: 'Data wejścia',
        zh: '入境日期',
    },

    action: {
        ru: 'Действие',
        en: 'Action',
        ua: 'Дія',
        de: 'Aktion',
        pl: 'Akcja',
        zh: '行动',
    },

    online: {
        ru: 'Онлайн',
        en: 'Online',
        ua: 'Онлайн',
        de: 'Online',
        pl: 'Online',
        zh: '在线',
    },

    was: {
        ru: 'Был(а)',
        en: 'Was',
        ua: 'Був(ла)',
        de: 'War',
        pl: 'Był(a)',
        zh: '曾经(a)',
    },

    control: {
        ru: 'Управление',
        en: 'Control',
        ua: 'Керування',
        de: 'Steuerung',
        pl: 'Kontrola',
        zh: '控制',
    },

    controlUser: {
        ru: 'Управление игроком',
        en: 'Player Control',
        ua: 'Керування гравцем',
        de: 'Spielersteuerung',
        pl: 'Kontrola gracza',
        zh: '关于玩家控制',
    },

    kick: {
        ru: 'Выгнать',
        en: 'Kick',
        ua: 'Вигнати',
        de: 'Rauswerfen',
        pl: 'Wyrzucić',
        zh: '被开除',
    },

    giveWarn: {
        ru: 'Дать выговор',
        ua: 'Дати догану',
        en: 'Give a reprimand',
        de: 'Einen Verweis erteilen',
        pl: 'Udzielić nagany',
    },

    title: {
        ru: 'Название',
        en: 'Title',
        ua: 'Назва',
        de: 'Titel',
        pl: 'Tytuł',
        zh: '标题',
    },

    numbers: {
        ru: 'Численость',
        en: 'Numbers',
        ua: 'Чисельність',
        de: 'Anzahl',
        pl: 'Liczba',
        zh: '数字',
    },

    requiredExperience: {
        ru: 'Требуемый опыт',
        en: 'Required Experience',
        ua: 'Необхідний досвід',
        de: 'Erforderliche Erfahrung',
        pl: 'Wymagane doświadczenie',
        zh: '需要经验',
    },

    view: {
        ru: 'Просмотр',
        en: 'View',
        ua: 'Перегляд',
        de: 'Ansicht',
        pl: 'Widok',
        zh: '视图',
    },

    you: {
        ru: 'Вы',
        en: 'You',
        ua: 'Ви',
        de: 'Du',
        pl: 'Ty',
        zh: '你',
    },

    controlRank: {
        ru: 'Редактирование ранга',
        en: 'Edit Rank',
        ua: 'Редагування рангу',
        de: 'Rang bearbeiten',
        pl: 'Edytuj rangę',
        zh: '编辑排名',
    },

    createRank: {
        ru: 'Создание ранга',
        ua: 'Створення рангу',
        en: 'Create rank',
        de: 'Rang erstellen',
        pl: 'Utwórz rangę',
    },
    rankName: {
        ru: 'Название ранга',
        ua: 'Назва рангу',
        en: 'Rank name',
        de: 'Rangname',
        pl: 'Nazwa rangi',
    },
    enterRankName: {
        ru: 'Введите название ранга',
        ua: 'Введіть назву рангу',
        en: 'Enter rank name',
        de: 'Geben Sie den Rangnamen ein',
        pl: 'Wprowadź nazwę rangi',
    },
    rankSalary: {
        ru: 'Выберите зарплату ранга',
        ua: 'Виберіть зарплату рангу',
        en: 'Select rank salary',
        de: 'Wählen Sie das Ranggehalt',
        pl: 'Wybierz wynagrodzenie rangi',
    },

    saveRankButton: {
        ru: 'Сохранить',
        ua: 'Зберегти',
        en: 'Save',
        de: 'Speichern',
        pl: 'Zapisz',
    },

    permits: {
        ru: 'Разрешения',
        en: 'Permits',
        ua: 'Дозволи',
        de: 'Genehmigungen',
        pl: 'Zezwolenia',
        zh: '权限',
    },

    createRankButton: {
        ru: 'Создать',
        ua: 'Створити',
        en: 'Create',
        de: 'Erstellen',
        pl: 'Utwórz',
    },

    stateCount: {
        online: {
            ru: 'человек онлайн',
            en: 'people online',
            ua: 'людей онлайн',
            de: 'Personen online',
            pl: 'osób online',
            zh: '在线用户',
        },
        offline: {
            ru: 'человек оффлайн',
            en: 'people offline',
            ua: 'людей оффлайн',
            de: 'Personen offline',
            pl: 'osób offline',
            zh: '离线人员',
        },
        general: {
            ru: 'человек всего',
            en: 'total people',
            ua: 'всього людей',
            de: 'Gesamtanzahl Personen',
            pl: 'ogółem osób',
            zh: '总人数',
        },
    },

    //
    materials: {
        ru: 'Материалы',
        ua: 'Матеріали',
        en: 'Materials',
        de: 'Materialien',
        pl: 'Materiały',
        zh: '材料',
    },
    medicalMaterials: {
        ru: 'Мед. материалы',
        ua: 'Мед. матеріали',
        en: 'Medical materials',
        de: 'Medizinische Materialien',
        pl: 'Materiały medyczne',
        zh: '医疗材料',
    },

    noFaction: {
        ru: 'На данный момент вы не состоите в фракции, вы можете вступить в фракцию следя за новостями в чате или других сообществах.',
        ua: 'На даний момент ви не перебуваєте у фракції, ви можете вступити у фракцію, стежачи за новинами в чаті або інших спільнотах.',
        en: 'You are not currently in a faction, you can join a faction by following the news in the chat or other communities.',
        de: 'Derzeit sind Sie in keiner Fraktion, Sie können einer Fraktion beitreten, indem Sie die Nachrichten im Chat oder in anderen Gemeinschaften verfolgen.',
        pl: 'Obecnie nie należysz do frakcji, możesz dołączyć do frakcji, śledząc wiadomości na czacie lub w innych społecznościach.',
        zh: '现在你不在一个小圈子里，你可以加入一个小团体，在聊天室或其他社区看新闻',
    },

    //
    respawnButton: {
        ru: 'Зареспавнить',
        ua: 'Зареспавнити',
        en: 'Respawn',
        de: 'Respawnen',
        pl: 'Respawnować',
        zh: '休息',
    },

    createRankBtn: {
        ru: 'Создать ранг',
        ua: 'Створити ранг',
        en: 'Create rank',
        de: 'Rang erstellen',
        pl: 'Utwórz rangę',
    },

    deleteRankButton: {
        ru: 'Удалить ранг',
        ua: 'Видалити ранг',
        en: 'Delete rank',
        de: 'Rang löschen',
        pl: 'Usuń rangę',
    },
};
