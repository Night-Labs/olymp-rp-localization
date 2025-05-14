import { cef } from './cef';
import { server } from './server';

// Pages
import apps from './pages/apps';
import vehicles from './pages/vehicles';
import phone from './pages/phone';
import messages from './pages/messages';
import call from './pages/call';
import gps from './pages/gps';
import settings from './pages/settings';
import weazelNews from './pages/weazelNews';
import forbes from './pages/forbes';

export default {
    ...cef,
    ...server,

    apps,
    vehicles,
    phone,
    messages,
    call,
    gps,
    settings,
    weazelNews,
    forbes
};
