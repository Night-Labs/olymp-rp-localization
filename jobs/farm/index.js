import { server } from './server';
import { cef } from './cef';
import dialogs from './dialogs';

export default {
    ...server,
    ...cef,
    dialogs,
};
