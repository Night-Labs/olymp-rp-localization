import trucker from './trucker';
import { trucker2 } from './trucker2/trucker2';
import foodDelivery from './delivery';
import bus from './bus';
import farm from './farm';
import hunting from './hunting';
import { quarry } from './quarry/quarry';
import treasureHunter from './treasureHunter/treasureHunter';
import mushrooms from './mushrooms/mushrooms';

export default {
    // ТО ЧТО СВЯЗАНО С РАБОТАМИ
    list: {
        trucker: {
            ru: 'Грузоперевозчик',
            ua: 'Вантажоперевізник',
            en: 'Carrier',
            de: 'Lkw-Fahrer',
            pl: 'Kierowca ciężarówki',
            zh: '货物运输司机',
        },
        trucker2: {
            ua: 'Далекобійник',
            en: 'Trucker',
            ru: 'Дальнобойщик',
            de: 'Trucker',
            pl: 'Kierowca ciężarówki',
            zh: '长途卡车司机',
        },
        farm: {
            ua: 'Фермер',
            en: 'Farmer',
            ru: 'Фермер',
            de: 'Landwirt',
            pl: 'Rolnik',
            zh: '农民',
        },
        delivery: {
            ua: 'Доставник їжі',
            en: 'Food Delivery',
            ru: 'Доставщик еды',
            de: 'Essenslieferant',
            pl: 'Dostawca jedzenia',
            zh: '食品配送员',
        },
        bus: {
            ua: 'Водій автобуса',
            en: 'Bus Driver',
            ru: 'Автобусник',
            de: 'Busfahrer',
            pl: 'Kierowca autobusu',
            zh: '公交车司机',
        },
        hunter: {
            ru: 'Охотник',
            ua: 'Мисливець',
            en: 'Hunter',
            de: 'Jäger',
            pl: 'Myśliwy',
            zh: '猎人',
        },
        fishing: {
            ru: 'Рыбак',
            ua: 'Рибак',
            en: 'Fisherman',
            de: 'Angeln',
            pl: 'Wędkarstwo',
            zh: '渔夫',
        },
        treasureHunter: {
            ru: 'Искалатель сокровищ',
            ua: 'Шукач скарбів',
            en: 'Treasure Hunter',
            de: 'Schatzsucher',
            pl: 'Poszukiwacz skarbów',
        },
        quarry: {
            ru: 'Карьер',
            ua: "Кар'єр",
            en: 'Quarry',
            de: 'Steinbruch',
            pl: 'Kamieniołom',
        },
        carjacker: {
            ru: 'Автоугонщик',
            ua: 'Автокрадій',
            en: 'Carjacker',
            de: 'Autodieb',
            pl: 'Złodziej samochodów',
        },
        diver: {
            ru: 'Водолаз',
            ua: 'Водолаз',
            en: 'Diver',
            de: 'Taucher',
            pl: 'Nurek',
        },
        mushrooms: {
            ru: 'Грибник',
            ua: 'Грибник',
            en: 'Mushroom picker',
            de: 'Pilzsammler',
            pl: 'Grzybiarz',
        },
        taxi: {
            ru: 'Водитель такси',
            ua: 'Водій таксі',
            en: 'Taxi driver',
            de: 'Taxifahrer',
            pl: 'Kierowca taksówki',
        },
        garbage: {
            ru: 'Мусорщик',
            ua: 'Сміттяр',
            en: 'Garbage worker',
            de: 'Mullwerker',
            pl: 'Smieciarz',
        },
    },
    youAlreadyWorking: {
        ru: 'Вы уже работаете на другой работе, для начала увольтесь с неё',
        ua: 'Ви вже працюєте на іншій роботі, спочатку звільніться з неї',
        en: 'You are already working at another job, first resign from it',
        de: 'Sie arbeiten bereits an einem anderen Arbeitsplatz. Kündigen Sie zuerst dort',
        pl: 'Już pracujesz w innym miejscu pracy, najpierw zrezygnuj z niego',
        zh: '你已经在另一个工作岗位上，首先请从那里辞职',
    },

    // САМИ РАБОТЫ
    trucker,
    foodDelivery,
    bus,
    farm,
    trucker2,
    hunting,
    quarry,
    treasureHunter,
    mushrooms,
};
