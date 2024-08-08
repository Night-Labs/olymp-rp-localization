import { cef } from './cef/cef';
import factions from './factions';
import server from './server';
import permissions from './permissions';
import gangWar from './gangWar';
import wardrobe from './wardrobe';
import logs from './logs';
import inventory from './inventory';
import airdrop from './airdrop';
import plants from './plants';
import suply from './suply';

export const faction = {
    factions,
    permissions,
    gangWar,
    wardrobe,
    inventory,
    logs,
    airdrop,
    suply,
    plants,
    ...cef,
    ...server,
    leader: {
        ru: 'Лидер',
        en: 'Leader',
        ua: 'Лідер',
        de: 'Anführer',
        pl: 'Lider',
    },

    ranks: {
        sheriff: {
            ru: 'Шериф',
            en: 'Sheriff',
            ua: 'Шериф',
            de: 'Sheriff',
            pl: 'Szeryf',
        },
    },
    radio: {
        ru: '!{#2196F3}[Рация {{factionName}}] {{message}}',
        ua: '!{#2196F3}[Рація {{factionName}}] {{message}}',
        en: '!{#2196F3}[Radio {{factionName}}] {{message}}',
        de: '!{#2196F3}[Funk {{factionName}}] {{message}}',
        pl: '!{#2196F3}[Radio {{factionName}}] {{message}}',
    },
    noMoney: {
        ru: 'У вашей организации недостаточно денег',
        ua: 'У вашої організації недостатньо коштів',
        en: 'Your organization does not have enough money',
        de: 'Ihre Organisation hat nicht genug Geld',
        pl: 'Twoja organizacja nie ma wystarczających gotości',
    },
    noAccess: {
        ru: 'Недостаточно прав',
        ua: 'Недостатньо прав',
        en: 'Insufficient rights',
        de: 'Nicht genug Rechte',
        pl: 'Niewystarczające uprawnienia',
    },
};
