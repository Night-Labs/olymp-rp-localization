import ban from './ban';
import { cef } from './cef';
import replays from './replays';
import { server } from './server';
import mute from './mute';
import weaponBan from './weaponBan';
import vehicleBan from './vehicleBan';
import warn from './warn';
import addiction from './addiction';
import objectPlacementBan from './objectPlacementBan';
import musicPlayer from './musicPlayer';
import transferLimit from './transferLimit';
import darts from './darts';
import territories from './territories';
import battlePass from './battlePass';
export default {
    ...cef,
    ...server,
    replays,
    ban,
    mute,
    weaponBan,
    vehicleBan,
    warn,
    addiction,
    objectPlacementBan,
    musicPlayer,
    transferLimit,
    darts,
    territories,
    battlePass,
    getOut: {
        ru: 'Для начала выйди из админки',
        ua: 'Для початку вийди з адмінки',
        en: 'First, get out of the admin panel',
        de: 'Verlasse zuerst den Adminmodus',
        pl: 'Najpierw wyjdź z panelu administratora',
    },
};
