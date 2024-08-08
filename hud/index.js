import { cef } from './cef';
import { server } from './server';

export default {
    ...cef,
    ...server,
    chat: {
        ...cef.chat,
        ...server.chat,
    },
};
