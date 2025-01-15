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
            zh: '促销码',
        },
        enterPromocode: {
            ua: 'Введіть промокод',
            en: 'Enter promocode',
            ru: 'Введите промокод',
            de: 'Promocode eingeben',
            pl: 'Wprowadź kod promocyjny',
            zh: '输入促销码',
        },
        forExample: {
            ua: 'Наприклад #olymprp',
            en: 'For example #olymprp',
            ru: 'Например #olymprp',
            de: 'Zum Beispiel #olymprp',
            pl: 'Na przykład #olymprp',
            zh: '例如#olymprp',
        },
        activate: {
            ua: 'Активувати',
            en: 'Activate',
            ru: 'Активировать',
            de: 'Aktivieren',
            pl: 'Aktywuj',
            zh: '激活',
        },
        close: {
            ua: 'Закрити',
            en: 'Close',
            ru: 'Закрыть',
            de: 'Schließen',
            pl: 'Zamknij',
            zh: '关闭',
        },

        doesNotExist: {
            ru: 'Промокода не существует',
            ua: 'Промокоду не існує',
            en: 'Promo code does not exist',
            de: 'Der Promo-Code existiert nicht',
            pl: 'Kod promocyjny nie istnieje',
            zh: '促销代码不存在',
        },
        expired: {
            ru: 'У этого промо-кода истёк срок действия',
            ua: 'Термін дії цього промокоду минув',
            en: 'This promo code has expired',
            de: 'Dieser Promo-Code ist abgelaufen',
            pl: 'Ten kod promocyjny wygasł',
            zh: '这次促销的截止日期已经过去了',
        },
        activated: {
            ru: 'Вы уже активировали этот промо-код',
            ua: 'Ви вже активували цей промокод',
            en: 'You have already activated this promo code',
            de: 'Sie haben diesen Promo-Code bereits aktiviert',
            pl: 'Już aktywowałeś ten kod promocyjny',
            zh: '您已经激活了此代码',
        },
        maxPlayersActivated: {
            ru: 'Этот промокод ввело максимальное количество игроков',
            ua: 'Максимальна кількість гравців вже використала цей промокод',
            en: 'This promo code has been used by the maximum number of players',
            de: 'Dieser Promo-Code wurde von der maximalen Anzahl von Spielern verwendet',
            pl: 'Ten kod promocyjny został wykorzystany przez maksymalną liczbę graczy',
            zh: '此促销代码已被最大数量的玩家使用',
        },
        successActivated: {
            ru: 'Вы активировали промокод {{promocodeName}} на {{donate}} донат-валюты',
            ua: 'Ви активували промокод {{promocodeName}} на {{donate}} донат-валюти',
            en: 'You have activated the promo code {{promocodeName}} for {{donate}} donation currency',
            de: 'Sie haben den Promo-Code {{promocodeName}} für {{donate}} Spendenwährung aktiviert',
            pl: 'Aktywowałeś kod promocyjny {{promocodeName}} na {{donate}} walutę darowizn',
            zh: '您已激活用于{{捐赠}}捐赠的促销代码',
        },
    },

    modal: {
        buy: {
            ru: 'Купить ?',
            ua: 'Купити ?',
            en: 'Buy ?',
            de: 'Kaufen ?',
            pl: 'Kup ?',
            zh: '购买',
        },

        buyItemForDonate: {
            ru: 'Купить {{name}} за {{donate}} Olymp-Coins',
            ua: 'Купити {{name}} за {{donate}} Olymp-Coins',
            en: 'Buy {{name}} for {{donate}} Olymp-Coins',
            de: 'Kaufen {{name}} für {{donate}} Olymp-Coins',
            pl: 'Kup {{name}} za {{donate}} Olymp-Coins',
            zh: '用捐赠的方式购买Olymp币',
        },

        yes: {
            ru: 'Да!',
            ua: 'Так!',
            en: 'Yes!',
            de: 'Ja!',
            pl: 'Tak!',
            zh: '是的',
        },

        no: {
            ru: 'Нет',
            ua: 'Ні',
            en: 'No',
            de: 'Nein',
            pl: 'Nie',
            zh: '不',
        },
    },
};
