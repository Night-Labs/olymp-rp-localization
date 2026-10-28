import shop from './shop';
import contracts from './contracts';
import encyclopedia from './encyclopedia';
import skills from './skills';

// The fishing base: its NPC and the window (webviews/src/systems/fishing). Each tab keeps its own file;
// the words several tabs share (tiers, contract kinds, the rank line) live here.
export default {
    shop,
    contracts,
    encyclopedia,
    skills,

    npcName: {
        ru: 'Смотритель рыболовной базы',
        ua: 'Доглядач рибальської бази',
        en: 'Fishing base keeper',
        de: 'Leiter der Angelstation',
    },
    interaction: {
        ru: 'Поговорить со смотрителем',
        ua: 'Поговорити з доглядачем',
        en: 'Talk to the keeper',
        de: 'Mit dem Leiter sprechen',
    },
    blip: {
        ru: 'Рыболовная база',
        ua: 'Рибальська база',
        en: 'Fishing Base',
        de: 'Angelstation',
    },

    title: {
        ru: 'Рыболовная база',
        ua: 'Рибальська база',
        en: 'Fishing base',
        de: 'Angelstation',
    },
    names: {
        paletoCove: {
            ru: 'Палето-Коув',
            ua: 'Палето-Ков',
            en: 'Paleto Cove',
            de: 'Paleto Cove',
        },
        sanChianski: {
            ru: 'Побережье Сан-Шиански',
            ua: 'Узбережжя Сан-Шиански',
            en: 'San Chianski Coast',
            de: 'Küste von San Chianski',
        },
    },
    tabs: {
        shop: {
            ru: 'Магазин',
            ua: 'Магазин',
            en: 'Shop',
            de: 'Laden',
        },
        contracts: {
            ru: 'Контракты',
            ua: 'Контракти',
            en: 'Contracts',
            de: 'Aufträge',
        },
        encyclopedia: {
            ru: 'Энциклопедия',
            ua: 'Енциклопедія',
            en: 'Encyclopedia',
            de: 'Enzyklopädie',
        },
        skills: {
            ru: 'Навыки',
            ua: 'Навички',
            en: 'Skills',
            de: 'Fertigkeiten',
        },
    },

    rank: {
        ru: 'Ранг {{rank}}',
        ua: 'Ранг {{rank}}',
        en: 'Rank {{rank}}',
        de: 'Rang {{rank}}',
    },
    exp: {
        ru: '{{exp}} / {{next}} опыта',
        ua: '{{exp}} / {{next}} досвіду',
        en: '{{exp}} / {{next}} XP',
        de: '{{exp}} / {{next}} EP',
    },
    xp: {
        ru: '{{exp}} опыта',
        ua: '{{exp}} досвіду',
        en: '{{exp}} XP',
        de: '{{exp}} EP',
    },
    topRank: {
        ru: 'Высший ранг',
        ua: 'Найвищий ранг',
        en: 'Top rank',
        de: 'Höchster Rang',
    },
    rankRequired: {
        ru: 'Нужен ранг {{rank}}',
        ua: 'Потрібен ранг {{rank}}',
        en: 'Rank {{rank}} required',
        de: 'Rang {{rank}} nötig',
    },

    // Zone tiers (shared/jobs/fishing/zones.ts), in the order they open.
    tiers: {
        shore: {
            ru: 'Пруды и пирсы',
            ua: 'Ставки та пірси',
            en: 'Ponds and piers',
            de: 'Teiche und Piers',
        },
        lakes: {
            ru: 'Озёра',
            ua: 'Озера',
            en: 'Lakes',
            de: 'Seen',
        },
        alamo: {
            ru: 'Аламо-Си',
            ua: 'Аламо-Сі',
            en: 'Alamo Sea',
            de: 'Alamo Sea',
        },
        rocky: {
            ru: 'Скалистый берег',
            ua: 'Скелястий берег',
            en: 'Rocky coast',
            de: 'Felsküste',
        },
        nearshore: {
            ru: 'Прибрежные воды',
            ua: 'Прибережні води',
            en: 'Coastal waters',
            de: 'Küstengewässer',
        },
        offshore: {
            ru: 'Открытый океан',
            ua: 'Відкритий океан',
            en: 'Open ocean',
            de: 'Offener Ozean',
        },
    },

    // Contract kinds (shared/jobs/fishing/contracts.ts).
    kinds: {
        catch: {
            ru: 'Улов',
            ua: 'Улов',
            en: 'Catch',
            de: 'Fang',
        },
        trophy: {
            ru: 'Трофей',
            ua: 'Трофей',
            en: 'Trophy',
            de: 'Trophäe',
        },
        delivery: {
            ru: 'Поставка',
            ua: 'Поставка',
            en: 'Delivery',
            de: 'Lieferung',
        },
        groupCatch: {
            ru: 'Групповой улов',
            ua: 'Груповий улов',
            en: 'Group catch',
            de: 'Gruppenfang',
        },
        groupDelivery: {
            ru: 'Групповая поставка',
            ua: 'Групова поставка',
            en: 'Group delivery',
            de: 'Gruppenlieferung',
        },
    },

    // How a zone is fished (FishingBoatRule).
    boat: {
        never: {
            ru: 'С берега',
            ua: 'З берега',
            en: 'From the shore',
            de: 'Vom Ufer',
        },
        allowed: {
            ru: 'С берега или с палубы',
            ua: 'З берега або з палуби',
            en: 'From the shore or a deck',
            de: 'Vom Ufer oder vom Deck',
        },
        required: {
            ru: 'Только с палубы лодки',
            ua: 'Лише з палуби човна',
            en: 'From a boat\'s deck only',
            de: 'Nur vom Bootsdeck',
        },
    },

    water: {
        fresh: {
            ru: 'Пресная вода',
            ua: 'Прісна вода',
            en: 'Fresh water',
            de: 'Süßwasser',
        },
        brackish: {
            ru: 'Солоноватая вода',
            ua: 'Солонувата вода',
            en: 'Brackish water',
            de: 'Brackwasser',
        },
        sea: {
            ru: 'Море',
            ua: 'Море',
            en: 'Sea',
            de: 'Meer',
        },
    },

    dayParts: {
        dawn: {
            ru: 'Рассвет',
            ua: 'Світанок',
            en: 'Dawn',
            de: 'Morgengrauen',
        },
        day: {
            ru: 'День',
            ua: 'День',
            en: 'Day',
            de: 'Tag',
        },
        dusk: {
            ru: 'Закат',
            ua: 'Захід',
            en: 'Dusk',
            de: 'Abenddämmerung',
        },
        night: {
            ru: 'Ночь',
            ua: 'Ніч',
            en: 'Night',
            de: 'Nacht',
        },
    },

    rarity: {
        common: {
            ru: 'Обычная',
            ua: 'Звичайна',
            en: 'Common',
            de: 'Häufig',
        },
        uncommon: {
            ru: 'Нечастая',
            ua: 'Нечаста',
            en: 'Uncommon',
            de: 'Gelegentlich',
        },
        rare: {
            ru: 'Редкая',
            ua: 'Рідкісна',
            en: 'Rare',
            de: 'Selten',
        },
        veryRare: {
            ru: 'Очень редкая',
            ua: 'Дуже рідкісна',
            en: 'Very rare',
            de: 'Sehr selten',
        },
    },

    // How a species fights (FishingArchetype).
    archetypes: {
        calm: {
            ru: 'Спокойная',
            ua: 'Спокійна',
            en: 'Calm',
            de: 'Ruhig',
        },
        fast: {
            ru: 'Резвая, частые рывки',
            ua: 'Жвава, часті ривки',
            en: 'Lively, frequent runs',
            de: 'Lebhaft, häufige Fluchten',
        },
        predator: {
            ru: 'Хищник, резкие рывки',
            ua: 'Хижак, різкі ривки',
            en: 'Predator, hard runs',
            de: 'Räuber, harte Fluchten',
        },
        bottom: {
            ru: 'Донная, тянет долго',
            ua: 'Донна, тягне довго',
            en: 'Bottom fish, long pulls',
            de: 'Grundfisch, lange Züge',
        },
        ocean: {
            ru: 'Океанская, выносливая',
            ua: 'Океанська, витривала',
            en: 'Ocean fish, tireless',
            de: 'Hochseefisch, ausdauernd',
        },
    },

    baitFit: {
        main: {
            ru: 'Лучшая наживка',
            ua: 'Найкраща наживка',
            en: 'Best bait',
            de: 'Bester Köder',
        },
        takes: {
            ru: 'Тоже берёт',
            ua: 'Теж бере',
            en: 'Also takes',
            de: 'Nimmt auch',
        },
    },
};
