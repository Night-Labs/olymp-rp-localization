export default {
    name: {
        ru: 'Гонка',
        ua: 'Гонка',
        en: 'Race',
        de: 'Rennen',
        pl: 'Wyścig',
        zh: '竞速',
    },

    hud: {
        position: {
            ru: 'Место',
            ua: 'Місце',
            en: 'Position',
            de: 'Position',
            pl: 'Pozycja',
            zh: '名次',
        },
        lap: {
            ru: 'Круг',
            ua: 'Коло',
            en: 'Lap',
            de: 'Runde',
            pl: 'Okrążenie',
            zh: '圈数',
        },
    },

    finish: {
        title: {
            ru: 'Финиш',
            ua: 'Фініш',
            en: 'Finish',
            de: 'Ziel',
            pl: 'Meta',
            zh: '终点',
        },
        place: {
            ru: 'Вы заняли {{place}} место из {{total}}.',
            ua: 'Ви зайняли {{place}} місце з {{total}}.',
            en: 'You finished {{place}} of {{total}}.',
            de: 'Du wurdest {{place}} von {{total}}.',
            pl: 'Zająłeś {{place}} miejsce z {{total}}.',
            zh: '你获得第 {{place}} 名，共 {{total}} 人。',
        },
        time: {
            ru: 'Время: {{time}}',
            ua: 'Час: {{time}}',
            en: 'Time: {{time}}',
            de: 'Zeit: {{time}}',
            pl: 'Czas: {{time}}',
            zh: '时间: {{time}}',
        },
    },

    // GTA Race pickups (server gameEvents/modes/race). The special ones are used with the horn key.
    pickup: {
        boost: {
            ru: 'Ускорение. Нажмите E (гудок), чтобы включить',
            ua: 'Прискорення. Натисніть E (гудок), щоб увімкнути',
            en: 'Boost. Press E (horn) to fire it',
            de: 'Boost. Drücke E (Hupe), um ihn zu zünden',
            pl: 'Dopalacz. Naciśnij E (klakson), aby go użyć',
            zh: '加速。按 E（喇叭）启用',
        },
        rocket: {
            ru: 'Ракеты. E (гудок) - выстрел, с зажатой C - назад',
            ua: 'Ракети. E (гудок) - постріл, із затиснутою C - назад',
            en: 'Rockets. E (horn) fires them, hold C to fire backwards',
            de: 'Raketen. E (Hupe) feuert sie ab, mit gehaltenem C nach hinten',
            pl: 'Rakiety. E (klakson) strzela, z wciśniętym C do tyłu',
            zh: '火箭。按 E（喇叭）发射，按住 C 向后发射',
        },
        repair: {
            ru: 'Транспорт отремонтирован',
            ua: 'Транспорт відремонтовано',
            en: 'Vehicle repaired',
            de: 'Fahrzeug repariert',
            pl: 'Pojazd naprawiony',
            zh: '载具已修复',
        },
    },
};
