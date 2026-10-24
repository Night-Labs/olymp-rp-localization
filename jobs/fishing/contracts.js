// The Contracts tab of the fishing base window and the "Contract completed" modal (webviews/src/systems/fishing).
export default {
    board: {
        ru: 'Доска',
        ua: 'Дошка',
        en: 'Board',
        de: 'Brett',
    },
    active: {
        ru: 'Активные',
        ua: 'Активні',
        en: 'Active',
        de: 'Aktiv',
    },
    filters: {
        all: {
            ru: 'Все',
            ua: 'Усі',
            en: 'All',
            de: 'Alle',
        },
        solo: {
            ru: 'Одиночные',
            ua: 'Одиночні',
            en: 'Solo',
            de: 'Solo',
        },
        group: {
            ru: 'Групповые',
            ua: 'Групові',
            en: 'Group',
            de: 'Gruppe',
        },
    },
    sortReward: {
        ru: 'По награде',
        ua: 'За нагородою',
        en: 'By reward',
        de: 'Nach Belohnung',
    },
    refreshIn: {
        ru: 'Новые контракты через {{time}}',
        ua: 'Нові контракти через {{time}}',
        en: 'New contracts in {{time}}',
        de: 'Neue Aufträge in {{time}}',
    },
    // Contracts are for licence holders; fishing itself is free.
    licenseNotice: {
        ru: 'Контракты берут только с лицензией рыболова. Для обычной рыбалки она не нужна',
        ua: 'Контракти беруть лише з ліцензією рибалки. Для звичайної риболовлі вона не потрібна',
        en: 'Contracts need a fishing licence. Fishing itself does not',
        de: 'Für Aufträge brauchst du einen Angelschein. Zum Angeln selbst nicht',
    },
    // Card titles by kind. Kilograms for deliveries, pieces otherwise.
    title: {
        catch: {
            ru: 'Улов: {{species}} x{{count}}',
            ua: 'Улов: {{species}} x{{count}}',
            en: 'Catch: {{species}} x{{count}}',
            de: 'Fang: {{species}} x{{count}}',
        },
        trophy: {
            ru: 'Трофей: {{species}} x{{count}}',
            ua: 'Трофей: {{species}} x{{count}}',
            en: 'Trophy: {{species}} x{{count}}',
            de: 'Trophäe: {{species}} x{{count}}',
        },
        delivery: {
            ru: 'Поставка: {{count}} кг',
            ua: 'Поставка: {{count}} кг',
            en: 'Delivery: {{count}} kg',
            de: 'Lieferung: {{count}} kg',
        },
        groupCatch: {
            ru: 'Групповой улов: {{count}} шт.',
            ua: 'Груповий улов: {{count}} шт.',
            en: 'Group catch: {{count}} fish',
            de: 'Gruppenfang: {{count}} Stk.',
        },
        groupDelivery: {
            ru: 'Групповая поставка: {{count}} кг',
            ua: 'Групова поставка: {{count}} кг',
            en: 'Group delivery: {{count}} kg',
            de: 'Gruppenlieferung: {{count}} kg',
        },
    },
    // A card that takes any of several species lists them.
    speciesList: {
        ru: 'Подходит: {{list}}',
        ua: 'Підходить: {{list}}',
        en: 'Counts: {{list}}',
        de: 'Zählt: {{list}}',
    },
    minMass: {
        ru: 'От {{mass}}',
        ua: 'Від {{mass}}',
        en: 'From {{mass}}',
        de: 'Ab {{mass}}',
    },
    group: {
        ru: 'Группа',
        ua: 'Група',
        en: 'Group',
        de: 'Gruppe',
    },
    // A group card of the party's leader, shown to a member who hands kilograms in toward it.
    leaderCard: {
        ru: 'Контракт лидера',
        ua: 'Контракт лідера',
        en: 'Leader\'s contract',
        de: 'Auftrag des Anführers',
    },
    complete: {
        ru: 'Выполнен',
        ua: 'Виконано',
        en: 'Complete',
        de: 'Erfüllt',
    },
    take: {
        ru: 'Взять',
        ua: 'Взяти',
        en: 'Take',
        de: 'Annehmen',
    },
    handIn: {
        ru: 'Сдать',
        ua: 'Здати',
        en: 'Hand in',
        de: 'Abgeben',
    },
    // Delivery cards: the fish the player carries go into the order.
    deliver: {
        ru: 'Сдать улов: {{mass}}',
        ua: 'Здати улов: {{mass}}',
        en: 'Hand in the catch: {{mass}}',
        de: 'Fang abgeben: {{mass}}',
    },
    nothingToDeliver: {
        ru: 'Нет подходящей рыбы',
        ua: 'Немає відповідної риби',
        en: 'No matching fish',
        de: 'Kein passender Fisch',
    },
    abandon: {
        ru: 'Отказаться',
        ua: 'Відмовитися',
        en: 'Abandon',
        de: 'Abbrechen',
    },
    track: {
        ru: 'Следить',
        ua: 'Стежити',
        en: 'Track',
        de: 'Verfolgen',
    },
    tracked: {
        ru: 'Отслеживается',
        ua: 'Відстежується',
        en: 'Tracked',
        de: 'Verfolgt',
    },
    timeLeft: {
        ru: 'Осталось {{time}}',
        ua: 'Залишилося {{time}}',
        en: '{{time}} left',
        de: 'Noch {{time}}',
    },
    participants: {
        ru: 'Рыбаков: {{count}}',
        ua: 'Рибалок: {{count}}',
        en: 'Anglers: {{count}}',
        de: 'Angler: {{count}}',
    },
    bonus: {
        noSnap: {
            ru: '+{{percent}}%, если леска ни разу не порвётся',
            ua: '+{{percent}}%, якщо волосінь жодного разу не порветься',
            en: '+{{percent}}% if the line never snaps',
            de: '+{{percent}}%, wenn die Schnur nie reißt',
        },
    },
    bonusLost: {
        ru: 'Бонус потерян',
        ua: 'Бонус втрачено',
        en: 'Bonus lost',
        de: 'Bonus verloren',
    },
    locked: {
        license: {
            ru: 'Нужна лицензия рыболова',
            ua: 'Потрібна ліцензія рибалки',
            en: 'Fishing licence required',
            de: 'Angelschein nötig',
        },
        group: {
            ru: 'Для лидера группы из {{min}}-{{max}} человек',
            ua: 'Для лідера групи з {{min}}-{{max}} осіб',
            en: 'For a group leader, {{min}}-{{max}} anglers',
            de: 'Für den Anführer einer Gruppe von {{min}}-{{max}}',
        },
        slots: {
            ru: 'Все слоты заняты',
            ua: 'Усі слоти зайняті',
            en: 'All slots are taken',
            de: 'Alle Plätze belegt',
        },
    },
    emptyBoard: {
        ru: 'Нет контрактов под этот фильтр',
        ua: 'Немає контрактів під цей фільтр',
        en: 'No contracts match this filter',
        de: 'Keine Aufträge für diesen Filter',
    },
    emptyActive: {
        ru: 'Нет активных контрактов. Возьмите контракт на доске',
        ua: 'Немає активних контрактів. Візьміть контракт на дошці',
        en: 'No active contracts. Take one on the board',
        de: 'Keine aktiven Aufträge. Nimm einen vom Brett',
    },

    done: {
        title: {
            ru: 'Контракт выполнен',
            ua: 'Контракт виконано',
            en: 'Contract completed',
            de: 'Auftrag erfüllt',
        },
        goal: {
            ru: 'Награда за цель',
            ua: 'Нагорода за ціль',
            en: 'Goal reward',
            de: 'Belohnung für das Ziel',
        },
        bonus: {
            ru: 'Леска не порвалась',
            ua: 'Волосінь не порвалася',
            en: 'The line never snapped',
            de: 'Die Schnur ist nie gerissen',
        },
        groupBonus: {
            ru: 'Бонус группы',
            ua: 'Бонус групи',
            en: 'Group bonus',
            de: 'Gruppenbonus',
        },
        statusBonus: {
            ru: 'Бонус статуса',
            ua: 'Бонус статусу',
            en: 'Status bonus',
            de: 'Statusbonus',
        },
        total: {
            ru: 'Итого',
            ua: 'Разом',
            en: 'Total',
            de: 'Gesamt',
        },
    },
};
