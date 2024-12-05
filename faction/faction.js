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
import randomTruck from './randomTruck';

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
    randomTruck,
    ...cef,
    ...server,
    leader: {
        ru: 'Лидер',
        en: 'Leader',
        ua: 'Лідер',
        de: 'Anführer',
        pl: 'Lider',
        zh: '领导者',
    },

    ranks: {
        sheriff: {
            ru: 'Шериф',
            en: 'Sheriff',
            ua: 'Шериф',
            de: 'Sheriff',
            pl: 'Szeryf',
            zh: '警长',
        },
    },
    radio: {
        ru: '!{#2196F3}[Рация {{factionName}}] {{message}}',
        ua: '!{#2196F3}[Рація {{factionName}}] {{message}}',
        en: '!{#2196F3}[Radio {{factionName}}] {{message}}',
        de: '!{#2196F3}[Funk {{factionName}}] {{message}}',
        pl: '!{#2196F3}[Radio {{factionName}}] {{message}}',
        zh: '{#2196F3}[无线电{{factionName}]{{message}',
    },
    noMoney: {
        ru: 'У вашей организации недостаточно денег',
        ua: 'У вашої організації недостатньо коштів',
        en: 'Your organization does not have enough money',
        de: 'Ihre Organisation hat nicht genug Geld',
        pl: 'Twoja organizacja nie ma wystarczających gotości',
        zh: '你的组织没有足够的资金',
    },
    noAccess: {
        ru: 'Недостаточно прав',
        ua: 'Недостатньо прав',
        en: 'Insufficient rights',
        de: 'Nicht genug Rechte',
        pl: 'Niewystarczające uprawnienia',
        zh: '权利不足',
    },
};
