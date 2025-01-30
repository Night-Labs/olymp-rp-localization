import ban from './ban';
import { cef } from './cef';
import replays from './replays';
import { server } from './server';

export default {
    ...cef,
    ...server,
    replays,
    ban,
};
