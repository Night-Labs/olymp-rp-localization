import ban from './ban';
import { cef } from './cef';
import replays from './replays';
import { server } from './server';
import mute from './mute';
export default {
    ...cef,
    ...server,
    replays,
    ban,
    mute,
    getOut: {
        ru: 'Для начала выйди из админки',
        ua: 'Для початку вийди з адмінки',
        en: 'First, get out of the admin panel',
        de: 'Geh zuerst aus dem Adminbereich raus',
        pl: 'Najpierw wyjdź z panelu administratora',
    },
};
