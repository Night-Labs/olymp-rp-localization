// The Encyclopedia tab of the fishing base window (webviews/src/systems/fishing/tabs/EncyclopediaTab.vue).
// Species names and descriptions are the catch items' (inventory.fish.<id>); tiers, day parts, rarity,
// fight styles and bait fits are shared in ./base.
export default {
    notStudied: {
        ru: 'Ещё не пойман',
        ua: 'Ще не спіймано',
        en: 'Not caught yet',
        de: 'Noch nicht gefangen',
    },
    caughtCount: {
        ru: 'Поймано: {{n}}',
        ua: 'Спіймано: {{n}}',
        en: 'Caught: {{n}}',
        de: 'Gefangen: {{n}}',
    },
    best: {
        ru: 'Рекорд',
        ua: 'Рекорд',
        en: 'Record',
        de: 'Rekord',
    },
    caught: {
        ru: 'Взято',
        ua: 'Взято',
        en: 'Kept',
        de: 'Behalten',
    },
    released: {
        ru: 'Отпущено',
        ua: 'Відпущено',
        en: 'Released',
        de: 'Freigelassen',
    },
    trophies: {
        ru: 'Трофеи',
        ua: 'Трофеї',
        en: 'Trophies',
        de: 'Trophäen',
    },
    unstudied: {
        ru: 'Поймайте хотя бы одну, чтобы узнать о ней больше',
        ua: 'Спіймайте хоча б одну, щоб дізнатися про неї більше',
        en: 'Catch one to learn more about it',
        de: 'Fang einen, um mehr über ihn zu erfahren',
    },
    habitat: {
        ru: 'Где водится',
        ua: 'Де водиться',
        en: 'Where it lives',
        de: 'Wo er lebt',
    },
    opensAt: {
        ru: 'С ранга {{rank}}',
        ua: 'З рангу {{rank}}',
        en: 'From rank {{rank}}',
        de: 'Ab Rang {{rank}}',
    },
    activity: {
        ru: 'Когда клюёт лучше всего',
        ua: 'Коли клює найкраще',
        en: 'When it bites best',
        de: 'Wann er am besten beißt',
    },
    habits: {
        ru: 'Повадки',
        ua: 'Повадки',
        en: 'Habits',
        de: 'Gewohnheiten',
    },
    fight: {
        ru: 'Характер',
        ua: 'Характер',
        en: 'Fight',
        de: 'Kampfstil',
    },
    mass: {
        ru: 'Обычная масса',
        ua: 'Звичайна маса',
        en: 'Usual weight',
        de: 'Übliches Gewicht',
    },
    massRange: {
        ru: '{{from}} - {{to}}',
        ua: '{{from}} - {{to}}',
        en: '{{from}} - {{to}}',
        de: '{{from}} - {{to}}',
    },
    trophyFrom: {
        ru: 'Трофей от',
        ua: 'Трофей від',
        en: 'Trophy from',
        de: 'Trophäe ab',
    },
    price: {
        ru: 'Скупщик, за кг',
        ua: 'Скупник, за кг',
        en: 'Buyer, per kg',
        de: 'Händler, pro kg',
    },
    priceValue: {
        ru: '{{price}}, трофей {{trophy}}',
        ua: '{{price}}, трофей {{trophy}}',
        en: '{{price}}, trophy {{trophy}}',
        de: '{{price}}, Trophäe {{trophy}}',
    },
    priceNote: {
        ru: 'Цена в окне скупщика меняется в пределах 15% в обе стороны',
        ua: 'Ціна у вікні скупника змінюється в межах 15% в обидва боки',
        en: 'The buyer\'s window price moves up to 15% either way',
        de: 'Der Preis im Fenster des Händlers schwankt um bis zu 15 % in beide Richtungen',
    },
    lockedField: {
        ru: 'Повадки, наживка и цена откроются после первого улова',
        ua: 'Повадки, наживка й ціна відкриються після першого улову',
        en: 'Habits, bait and price open with your first catch',
        de: 'Gewohnheiten, Köder und Preis werden mit deinem ersten Fang freigeschaltet',
    },
};
