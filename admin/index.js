import ban from './ban';
import { cef } from './cef';
import replays from './replays';
import { server } from './server';
import mute from './mute';
import objectPlacementBan from './objectPlacementBan';
export default {
    ...cef,
    ...server,
    replays,
    ban,
    mute,
    objectPlacementBan,
    getOut: {
        ru: 'Для начала выйди из админки',
        ua: 'Для початку вийди з адмінки',
        en: 'First, get out of the admin panel',
        de: 'Gehe zuerst aus dem Adminmodus raus',
        pl: 'Najpierw wyjdź z panelu administratora',
    },
};
