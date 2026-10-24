// The Shop tab of the fishing base window and its buy modal (webviews/src/systems/fishing).
export default {
    filters: {
        all: {
            ru: 'Все',
            ua: 'Усі',
            en: 'All',
            de: 'Alle',
        },
        rod: {
            ru: 'Удочки',
            ua: 'Вудки',
            en: 'Rods',
            de: 'Angeln',
        },
        reel: {
            ru: 'Катушки',
            ua: 'Котушки',
            en: 'Reels',
            de: 'Rollen',
        },
        line: {
            ru: 'Лески',
            ua: 'Волосінь',
            en: 'Lines',
            de: 'Schnüre',
        },
        bait: {
            ru: 'Наживка',
            ua: 'Наживка',
            en: 'Bait',
            de: 'Köder',
        },
        lure: {
            ru: 'Приманки',
            ua: 'Приманки',
            en: 'Lures',
            de: 'Kunstköder',
        },
    },
    // The chip in a card's corner: what kind of tackle it is.
    category: {
        rod: {
            ru: 'Удочка',
            ua: 'Вудка',
            en: 'Rod',
            de: 'Angel',
        },
        reel: {
            ru: 'Катушка',
            ua: 'Котушка',
            en: 'Reel',
            de: 'Rolle',
        },
        line: {
            ru: 'Леска',
            ua: 'Волосінь',
            en: 'Line',
            de: 'Schnur',
        },
        bait: {
            ru: 'Наживка',
            ua: 'Наживка',
            en: 'Bait',
            de: 'Köder',
        },
        lure: {
            ru: 'Приманка',
            ua: 'Приманка',
            en: 'Lure',
            de: 'Kunstköder',
        },
    },
    cash: {
        ru: 'Наличные',
        ua: 'Готівка',
        en: 'Cash',
        de: 'Bargeld',
    },
    bank: {
        ru: 'Банк',
        ua: 'Банк',
        en: 'Bank',
        de: 'Bank',
    },
    empty: {
        ru: 'В этой категории пусто',
        ua: 'У цій категорії порожньо',
        en: 'Nothing in this category',
        de: 'In dieser Kategorie ist nichts',
    },

    power: {
        ru: 'Мощность',
        ua: 'Потужність',
        en: 'Power',
        de: 'Kraft',
    },
    durability: {
        ru: 'Прочность',
        ua: 'Міцність',
        en: 'Durability',
        de: 'Haltbarkeit',
    },
    casts: {
        ru: '{{count}} забросов',
        ua: '{{count}} закидань',
        en: '{{count}} casts',
        de: '{{count}} Würfe',
    },
    unbreakable: {
        ru: 'Не изнашивается',
        ua: 'Не зношується',
        en: 'Does not wear',
        de: 'Verschleißt nicht',
    },
    use: {
        ru: 'Расход',
        ua: 'Витрата',
        en: 'Use',
        de: 'Verbrauch',
    },
    perCast: {
        ru: '1 шт. за заброс',
        ua: '1 шт. за закидання',
        en: '1 piece per cast',
        de: '1 Stk. pro Wurf',
    },
    lostOnSnap: {
        ru: 'Только при обрыве',
        ua: 'Лише при обриві',
        en: 'Only when the line snaps',
        de: 'Nur bei Schnurriss',
    },
    bestFor: {
        ru: 'Лучше всего берут',
        ua: 'Найкраще беруть',
        en: 'Best for',
        de: 'Am besten für',
    },
    // The first species the bait is best for, then how many more: "Carp +3".
    bestForMore: {
        ru: '{{species}} +{{count}}',
        ua: '{{species}} +{{count}}',
        en: '{{species}} +{{count}}',
        de: '{{species}} +{{count}}',
    },
    bestForList: {
        ru: 'Лучшая наживка для',
        ua: 'Найкраща наживка для',
        en: 'The best bait for',
        de: 'Der beste Köder für',
    },
    noBestFor: {
        ru: 'Ни для кого не основная, но берут многие',
        ua: 'Ні для кого не основна, але беруть багато хто',
        en: 'Nobody\'s favourite, but many take it',
        de: 'Für keinen der Lieblingsköder, aber viele nehmen ihn',
    },
    slot: {
        ru: 'Ячейка',
        ua: 'Комірка',
        en: 'Slot',
        de: 'Platz',
    },
    slots: {
        bait: {
            ru: 'Наживка',
            ua: 'Наживка',
            en: 'Bait',
            de: 'Köder',
        },
        reel: {
            ru: 'Катушка',
            ua: 'Котушка',
            en: 'Reel',
            de: 'Rolle',
        },
        line: {
            ru: 'Леска',
            ua: 'Волосінь',
            en: 'Line',
            de: 'Schnur',
        },
    },
    // What a piece of tackle changes in the fight (FishingGearEffects), as the card lists it.
    effects: {
        reelSpeed: {
            ru: 'Скорость подмотки',
            ua: 'Швидкість підмотування',
            en: 'Reeling speed',
            de: 'Einholgeschwindigkeit',
        },
        calmReel: {
            ru: 'Подмотка без рывков',
            ua: 'Підмотування без ривків',
            en: 'Reeling between runs',
            de: 'Einholen zwischen den Fluchten',
        },
        tensionRise: {
            ru: 'Рост натяжения',
            ua: 'Зростання натягу',
            en: 'Tension build-up',
            de: 'Spannungsaufbau',
        },
        surge: {
            ru: 'Сила рывка',
            ua: 'Сила ривка',
            en: 'Run jolt',
            de: 'Stoß einer Flucht',
        },
        snapGrace: {
            ru: 'Запас в красной зоне',
            ua: 'Запас у червоній зоні',
            en: 'Time in the red',
            de: 'Zeit im roten Bereich',
        },
        strikeWindow: {
            ru: 'Время на подсечку',
            ua: 'Час на підсікання',
            en: 'Time to strike',
            de: 'Zeit zum Anschlagen',
        },
        biteLeadMs: {
            ru: 'Поклёвка видна раньше',
            ua: 'Клювання видно раніше',
            en: 'Bite shows earlier',
            de: 'Biss früher sichtbar',
        },
    },
    seconds: {
        ru: '{{value}} с',
        ua: '{{value}} с',
        en: '{{value}} s',
        de: '{{value}} s',
    },
    weight: {
        ru: 'Вес',
        ua: 'Вага',
        en: 'Weight',
        de: 'Gewicht',
    },
    // Under a card's price when the item sells by the piece.
    perPiece: {
        ru: 'за штуку',
        ua: 'за штуку',
        en: 'per piece',
        de: 'pro Stück',
    },

    buy: {
        quantity: {
            ru: 'Количество',
            ua: 'Кількість',
            en: 'Quantity',
            de: 'Menge',
        },
        perPiece: {
            ru: '{{price}} за штуку',
            ua: '{{price}} за штуку',
            en: '{{price}} per piece',
            de: '{{price}} pro Stück',
        },
        total: {
            ru: 'Итого',
            ua: 'Разом',
            en: 'Total',
            de: 'Gesamt',
        },
        buy: {
            ru: 'Купить',
            ua: 'Купити',
            en: 'Buy',
            de: 'Kaufen',
        },
    },
};
