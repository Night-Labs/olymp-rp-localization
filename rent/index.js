import { cef } from './cef';
import { server } from './server';
import dialogs from './dialogs';

export default {
    ...cef,
    ...server,
    dialog: dialogs,
};
