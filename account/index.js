import { cef } from './cef';
import { server } from './server';
import twoFactor from './twoFactor';

export default {
    ...cef,
    ...server,
    twoFactor,
};