import trucker from './trucker';
import { trucker2 } from './trucker2/trucker2';
import delivery from './delivery';
import bus from './bus';
import farm from './farm';
import hunting from './hunting';

export default {
    // ТО ЧТО СВЯЗАНО С РАБОТАМИ
    list: {
        trucker: {
            ru: 'Грузоперевозчик',
            ua: 'Вантажоперевізник',
            en: 'Carrier',
            de: 'Lkw-Fahrer',
            pl: 'Kierowca ciężarówki',
        },
        trucker2: {
            ua: 'Далекобійник',
            en: 'Trucker',
            ru: 'Дальнобойщик',
            de: 'Trucker',
            pl: 'Kierowca ciężarówki',
        },
        farm: {
            ua: 'Фермер',
            en: 'Farmer',
            ru: 'Фермер',
            de: 'Landwirt',
            pl: 'Rolnik',
        },
        delivery: {
            ua: 'Доставник їжі',
            en: 'Food Delivery',
            ru: 'Доставщик еды',
            de: 'Essenslieferant',
            pl: 'Dostawca jedzenia',
        },
        bus: {
            ua: 'Водій автобуса',
            en: 'Bus Driver',
            ru: 'Автобусник',
            de: 'Busfahrer',
            pl: 'Kierowca autobusu',
        },
        hunter: {
            ru: 'Охотник',
            ua: 'Мисливець',
            en: 'Hunter',
            de: 'Jäger',
            pl: 'Myśliwy',
        },
        fishing: {
            ru: 'Рыбак',
            ua: 'Рибак',
            en: 'Fisherman',
            de: 'Angeln',
            pl: 'Wędkarstwo',
        },
    },
    youAlreadyWorking: {
        ru: 'Вы уже работаете на другой работе, для начала увольтесь с неё',
        ua: 'Ви вже працюєте на іншій роботі, спочатку звільніться з неї',
        en: 'You are already working at another job, first resign from it',
        de: 'Sie arbeiten bereits an einem anderen Arbeitsplatz. Kündigen Sie zuerst dort',
        pl: 'Już pracujesz w innym miejscu pracy, najpierw zrezygnuj z niego',
    },

    // САМИ РАБОТЫ
    trucker,
    delivery,
    bus,
    farm,
    trucker2,
    hunting,
};
