import { server } from './server';
import { cef } from './cef';
import { npc } from './npc';

export default {
    ...server,
    ...cef,
    npc,
};
