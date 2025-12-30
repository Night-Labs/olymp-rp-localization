import cef from './cef';
import { server } from './server';
import furniture from './furniture';
import safe from './safe';

export default {
    ...cef,
    ...server,
    furniture,
    safe,
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
        noAccess: {
            ru: 'У тебя нет доступа',
            ua: 'У тебе немає доступу',
            en: 'You don’t have access',
            de: 'Du hast keinen Zugriff',
            pl: 'Nie masz dostępu',
        },
    },
};
