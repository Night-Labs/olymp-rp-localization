import starting from './starting';
import { stepDto } from './stepDto';
import { types } from './types';
import { cef } from './cef';
import random from './random';
import license from './license';
import daily from './daily';
import factions from './factions';
import npc from './npcs';

export default {
    starting,
    daily,
    factions,
    license,
    random,
    stepDto,
    types,
    npc,
    ...cef,
};
