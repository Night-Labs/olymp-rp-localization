import { cases } from './cases';
import { cef } from './cef';
import { server } from './server';

export default {
    ...cef,
    ...server,

    cases,

    promocode: {
        name: {
            ua: 'Промокод',
            en: 'Promocode',
            ru: 'Промокод',
            de: 'Promocode',
            pl: 'Kod promocyjny',
        },
        enterPromocode: {
            ua: 'Введіть промокод',
            en: 'Enter promocode',
            ru: 'Введите промокод',
            de: 'Promocode eingeben',
            pl: 'Wprowadź kod promocyjny',
        },
        forExample: {
            ua: 'Наприклад #olymprp',
            en: 'For example #olymprp',
            ru: 'Например #olymprp',
            de: 'Zum Beispiel #olymprp',
            pl: 'Na przykład #olymprp',
        },
        activate: {
            ua: 'Активувати',
            en: 'Activate',
            ru: 'Активировать',
            de: 'Aktivieren',
            pl: 'Aktywuj',
        },
        close: {
            ua: 'Закрити',
            en: 'Close',
            ru: 'Закрыть',
            de: 'Schließen',
            pl: 'Zamknij',
        },

        doesNotExist: {
            ru: 'Промокода не существует',
            ua: 'Промокоду не існує',
            en: 'Promo code does not exist',
            de: 'Der Promo-Code existiert nicht',
            pl: 'Kod promocyjny nie istnieje',
        },
        expired: {
            ru: 'У этого промо-кода истёк срок действия',
            ua: 'Термін дії цього промокоду минув',
            en: 'This promo code has expired',
            de: 'Dieser Promo-Code ist abgelaufen',
            pl: 'Ten kod promocyjny wygasł',
        },
        activated: {
            ru: 'Вы уже активировали этот промо-код',
            ua: 'Ви вже активували цей промокод',
            en: 'You have already activated this promo code',
            de: 'Sie haben diesen Promo-Code bereits aktiviert',
            pl: 'Już aktywowałeś ten kod promocyjny',
        },
        maxPlayersActivated: {
            ru: 'Этот промокод ввело максимальное количество игроков',
            ua: 'Максимальна кількість гравців вже використала цей промокод',
            en: 'This promo code has been used by the maximum number of players',
            de: 'Dieser Promo-Code wurde von der maximalen Anzahl von Spielern verwendet',
            pl: 'Ten kod promocyjny został wykorzystany przez maksymalną liczbę graczy',
        },
        successActivated: {
            ru: 'Вы активировали промокод {{promocodeName}} на {{donate}} донат-валюты',
            ua: 'Ви активували промокод {{promocodeName}} на {{donate}} донат-валюти',
            en: 'You have activated the promo code {{promocodeName}} for {{donate}} donation currency',
            de: 'Sie haben den Promo-Code {{promocodeName}} für {{donate}} Spendenwährung aktiviert',
            pl: 'Aktywowałeś kod promocyjny {{promocodeName}} na {{donate}} walutę darowizn',
        },
    },

    modal: {
        buy: {
            ru: 'Купить ?',
            ua: 'Купити ?',
            en: 'Buy ?',
            de: 'Kaufen ?',
            pl: 'Kup ?',
        },

        buyItemForDonate: {
            ru: 'Купить {{name}} за {{donate}} Olymp-Coins',
            ua: 'Купити {{name}} за {{donate}} Olymp-Coins',
            en: 'Buy {{name}} for {{donate}} Olymp-Coins',
            de: 'Kaufen {{name}} für {{donate}} Olymp-Coins',
            pl: 'Kup {{name}} za {{donate}} Olymp-Coins',
        },

        yes: {
            ru: 'Да!',
            ua: 'Так!',
            en: 'Yes!',
            de: 'Ja!',
            pl: 'Tak!',
        },

        no: {
            ru: 'Нет',
            ua: 'Ні',
            en: 'No',
            de: 'Nein',
            pl: 'Nie',
        },
    },
};
