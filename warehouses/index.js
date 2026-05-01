import { server } from './server';
import { cef } from './cef';
import dialogs from './dialogs';
import { notify, errors, taxCycle } from './notify';

export default {
    server,
    cef,
    dialog: dialogs,
    notify,
    errors,
    taxCycle,
};
