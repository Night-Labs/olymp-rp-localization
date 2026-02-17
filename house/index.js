import cef from './cef';
import { server } from './server';
import furniture from './furniture';
import safe from './safe';
import upgrade from './upgrade';
import residents from './residents';
import tv from './tv';

export default {
    ...cef,
    ...server,
    furniture,
    safe,
    upgrade,
    residents,
    tv,
    houseResident: {
        ru: 'Житель дома',
        ua: 'Мешканець дому',
        en: 'House resident',
        de: 'Hausbewohner',
        pl: 'Mieszkaniec domu',
    },
    youHaveKickedRecently: {
        ru: 'Тебя недавно выгоняли из этого дома',
        ua: 'Тебе нещодавно виганяли з цього дому',
        en: 'You were kicked out of this house recently',
        de: 'Du wurdest kürzlich aus diesem Haus rausgeworfen',
        pl: 'Niedawno zostałeś wyrzucony z tego domu',
    },
    sms: {
        confiscatedHouse: {
            ru: 'Ваш дом №{{id}} был конфискован за неуплату. Вам зачислено {{percent}}% от его стоимости на банковский счёт.',
            ua: 'Ваш будинок №{{id}} було конфісковано за несплату. Вам зараховано {{percent}}% від його вартості на банківський рахунок.',
            en: 'Your house #{{id}} was confiscated for non-payment. {{percent}}% of its value has been credited to your bank account.',
            de: 'Ihr Haus Nr. {{id}} wurde wegen Nichtzahlung beschlagnahmt. {{percent}} % seines Wertes wurden Ihrem Bankkonto gutgeschrieben.',
            pl: 'Pański/Pani dom nr {{id}} został skonfiskowany z powodu braku płatności. {{percent}}% jego wartości zostało przelane na konto bankowe.',
        },
    },
    storage: {
        interact: {
            ru: 'Открыть хранилище',
            ua: 'Відкрити сховище',
            en: 'Open storage',
            de: 'Lager öffnen',
            pl: 'Otwórz magazyn',
        },
        noAccess: {
            ru: 'У тебя нет доступа',
            ua: 'У тебе немає доступу',
            en: 'You don’t have access',
            de: 'Du hast keinen Zugriff',
            pl: 'Nie masz dostępu',
        },
    },
    workshop: {
        interact: {
            ru: 'Открыть мастерскую',
            ua: 'Відкрити майстерню',
            en: 'Open workshop',
            de: 'Werkstatt öffnen',
            pl: 'Otwórz warsztat',
        },
    },
};
