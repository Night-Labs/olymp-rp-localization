import ban from './ban';
import { cef } from './cef';
import replays from './replays';
import { server } from './server';
import mute from './mute';
import weaponBan from './weaponBan';
import objectPlacementBan from './objectPlacementBan';
import musicPlayer from './musicPlayer';
export default {
    ...cef,
    ...server,
    replays,
    ban,
    mute,
    weaponBan,
    objectPlacementBan,
    musicPlayer,
    getOut: {
        ru: 'Для начала выйди из админки',
        ua: 'Для початку вийди з адмінки',
        en: 'First, get out of the admin panel',
        de: 'Verlasse zuerst den Adminmodus',
        pl: 'Najpierw wyjdź z panelu administratora',
    },
};
