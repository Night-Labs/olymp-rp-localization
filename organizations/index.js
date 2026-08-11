import { ranks } from './ranks';
import { permissions } from './permissions';
import { members } from './members';
import { lifecycle } from './lifecycle';
import { taxCycle } from './taxCycle';
import { bank } from './bank';
import { salaries } from './salaries';
import { payday } from './payday';
import { progression } from './progression';
import { contracts } from './contracts';
import { contractNpcs } from './contractNpcs';
import { contractDialogs } from './contractDialogs';
import { sideJobs } from './sideJobs';
import { tree } from './tree';
import { menu } from './menu';
import { vehicles } from './vehicles';
import { logs } from './logs';
import { territories } from './territories';
import { warsLobby } from './warsLobby';
import { warPlanner } from './warPlanner';
import { pickBan, battlefields } from './pickBan';

export default {
    ranks,
    permissions,
    members,
    lifecycle,
    taxCycle,
    bank,
    salaries,
    payday,
    progression,
    contracts,
    contractNpcs,
    contractDialogs,
    sideJobs,
    tree,
    menu,
    vehicles,
    logs,
    territories,
    wars: { ...warsLobby, planner: warPlanner, pickBan, battlefields },
};
