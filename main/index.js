import { server } from './server';
import { cef } from './cef';
import { npc } from './npc';

export default {
    ...server,
    ...cef,
    npc,
    meters: {
        ru: 'м.',
        ua: 'м.',
        en: 'm',
        de: 'm',
        pl: 'm',
    },
    playing: {
        ru: 'Играет',
        ua: 'Грає',
        en: 'Playing',
        de: 'Spielt',
        pl: 'Gra',
    },
    favoriteVeh: {
        ru: 'Избранные',
        ua: 'Обрані',
        en: 'Favorites',
        de: 'Favoriten',
        pl: 'Ulubione',
    },
    rentedVeh: {
        ru: 'Арендованные',
        ua: 'Орендовані',
        en: 'Rented',
        de: 'Gemietet',
        pl: 'Wynajęte',
    },
    familyVeh: {
        ru: 'Семейные',
        ua: 'Сімейні',
        en: 'Family',
        de: 'Familie',
        pl: 'Rodzinne',
    },
};

