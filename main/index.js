import { server } from './server';
import { cef } from './cef';
import { npc } from './npc';

export default {
    ...server,
    ...cef,
    npc,
    meters: {
        'ru': 'м.',
        'ua': 'м.',
        'en': 'm',
        'de': 'm',
        'pl': 'm',
    },
};
