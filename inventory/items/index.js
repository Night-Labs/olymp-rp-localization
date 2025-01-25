import { clothes } from './clothes/clothes';
import { food } from './eat';
import { fishing } from './fishing/fishing';
import { items as itemsList } from './items';
import { weapons } from './weapons';
import hunting from './hunting';
import farm from './farm';
import drugs from './drugs';

export const items = {
    ...food,
    ...itemsList,
    ...weapons,
    ...clothes,
    ...hunting,
    ...fishing,
    ...farm,
    ...drugs
};
