import { server } from './server';
import { selector } from './selector';
import { creator } from './creator';

export default {
    ...server,
    selector,
    creator
};
