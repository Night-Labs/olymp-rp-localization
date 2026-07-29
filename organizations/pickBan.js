/**
 * Фаза выбора карты территориальной войны. Состав ждёт в бункере, стороны по
 * очереди снимают карты, последняя оставшаяся — та, на которой пойдёт бой.
 */
export const pickBan = {
    cell: {
        ru: 'Квадрат',
        ua: 'Квадрат',
        en: 'Square',
        de: 'Sektor',
        pl: 'Kwadrat',
    },
    nowPicking: {
        ru: 'Сейчас выбирает',
        ua: 'Зараз обирає',
        en: 'Now picking',
        de: 'Waehlt jetzt',
        pl: 'Teraz wybiera',
    },
    mapSelected: {
        ru: 'Карта выбрана',
        ua: 'Карту обрано',
        en: 'Map selected',
        de: 'Karte gewaehlt',
        pl: 'Wybrano mape',
    },
    sides: {
        ru: 'Стороны',
        ua: 'Сторони',
        en: 'Sides',
        de: 'Seiten',
        pl: 'Strony',
    },
    you: {
        ru: 'вы',
        ua: 'ви',
        en: 'you',
        de: 'du',
        pl: 'ty',
    },
    attackerRole: {
        ru: 'Атака',
        ua: 'Атака',
        en: 'Attack',
        de: 'Angriff',
        pl: 'Atak',
    },
    defenderRole: {
        ru: 'Оборона',
        ua: 'Оборона',
        en: 'Defense',
        de: 'Verteidigung',
        pl: 'Obrona',
    },
    stage: {
        ru: 'Ход {{n}} из {{total}}',
        ua: 'Хід {{n}} з {{total}}',
        en: 'Turn {{n}} of {{total}}',
        de: 'Zug {{n}} von {{total}}',
        pl: 'Tura {{n}} z {{total}}',
    },
    youBan: {
        ru: 'Ваш ход',
        ua: 'Ваш хід',
        en: 'Your turn',
        de: 'Dein Zug',
        pl: 'Twoja tura',
    },
    enemyBans: {
        ru: 'Ход противника',
        ua: 'Хід суперника',
        en: 'Opponent turn',
        de: 'Zug des Gegners',
        pl: 'Tura przeciwnika',
    },
    pickInstruction: {
        ru: 'Выберите карту, которую хотите убрать',
        ua: 'Оберіть карту, яку хочете прибрати',
        en: 'Pick the map you want to remove',
        de: 'Waehle die Karte, die entfernt werden soll',
        pl: 'Wybierz mape, ktora chcesz usunac',
    },
    waitInstruction: {
        ru: 'Противник убирает карту',
        ua: 'Суперник прибирає карту',
        en: 'The opponent is removing a map',
        de: 'Der Gegner entfernt eine Karte',
        pl: 'Przeciwnik usuwa mape',
    },
    // Право хода у старшего по рангу из тех, кто сейчас в бункере.
    actorHint: {
        ru: 'Карту убирает {{name}}',
        ua: 'Карту прибирає {{name}}',
        en: '{{name}} is removing the map',
        de: '{{name}} entfernt die Karte',
        pl: '{{name}} usuwa mape',
    },
    noActor: {
        ru: 'На стороне некому выбирать - карта уйдёт случайно',
        ua: 'На стороні нікому обирати - карта піде випадково',
        en: 'Nobody on the side can pick - a map will be removed at random',
        de: 'Auf dieser Seite kann niemand waehlen - eine Karte faellt zufaellig',
        pl: 'Nikt po tej stronie nie moze wybrac - mapa zniknie losowo',
    },
    helperText: {
        ru: 'Время хода истечёт - карта уйдёт случайная',
        ua: 'Час ходу мине - карта піде випадкова',
        en: 'If the turn runs out, a random map is removed',
        de: 'Laeuft der Zug ab, faellt eine zufaellige Karte',
        pl: 'Gdy tura sie skonczy, zniknie losowa mapa',
    },
    matchStartsIn: {
        ru: 'Бой начнётся через',
        ua: 'Бій почнеться через',
        en: 'Battle starts in',
        de: 'Kampf beginnt in',
        pl: 'Walka zacznie sie za',
    },
    mapPickedHelper: {
        ru: 'Карта выбрана - вас перенесёт на неё',
        ua: 'Карту обрано - вас перенесе на неї',
        en: 'The map is set - you will be moved there',
        de: 'Die Karte steht fest - du wirst dorthin gebracht',
        pl: 'Mapa wybrana - zostaniesz tam przeniesiony',
    },
};

/**
 * Названия карт. Ключ строится из id боевой карты
 * (`shared/configs/wars/battlefields.ts`).
 */
export const battlefields = {
    sawmill: {
        name: {
            ru: 'Лесопилка',
            ua: 'Лісопилка',
            en: 'Sawmill',
            de: 'Saegewerk',
            pl: 'Tartak',
        },
    },
};
