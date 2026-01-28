import { clothes } from './clothes/clothes';
import { food } from './eat';
import { fishing } from './fishing/fishing';
import { items as itemsList } from './items';
import { weapons } from './weapons';
import hunting from './hunting';
import farm from './farm';
import drugs from './drugs';
import medical from './medical';
import ores from './ores';
import diving from './diving';
import treasureHunter from './treasureHunter';
import mushrooms from './mushrooms';
import blueprint from './blueprints';
import craftComponents from './craftComponents';
export const items = {
    ...food,
    ...itemsList,
    ...weapons,
    ...clothes,
    ...hunting,
    ...fishing,
    ...farm,
    ...drugs,
    ...medical,
    ...ores,
    diving,
    blueprint,
    ...treasureHunter,
    ...mushrooms,
    ...craftComponents,
};
