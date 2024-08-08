import { cashier } from './cashier';
import { luckyWheel } from './games/luckyWheel';
import { roulette } from './games/roulette';
import { slots } from './games/slots';

export default {
    cashier,
    luckyWheel,
    roulette,
    slots,

    balance: {
        ru: 'Баланс:',
        ua: 'Баланс:',
        en: 'Balance:',
        de: 'Saldo:',
        pl: 'Bilans:',
    },

    casino: {
        ru: 'Казино',
        ua: 'Казино',
        en: 'Casino',
        de: 'Casino',
        pl: 'Kasyno',
    },

    notEnoughChips: {
        ru: 'У вас недостаточно фишек',
        ua: 'У вас недостатньо фішок',
        en: "You don't have enough chips",
        de: 'Sie haben nicht genug Chips',
        pl: 'Nie masz wystarczająco żetonów',
    },

    youWon: {
        ru: 'Вы выиграли {{chips}} фишек!',
        ua: 'Ви виграли {{chips}} фішок!',
        en: 'You won {{chips}} chips!',
        de: 'Sie haben {{chips}} Chips gewonnen!',
        pl: 'Wygrałeś {{chips}} żetonów!',
    },

    interaction: {
        enter: {
            ru: 'Войти в казино',
            ua: 'Увійти до казино',
            en: 'Enter the casino',
            de: 'Ins Casino gehen',
            pl: 'Wejdź do kasyna',
        },
        exit: {
            ru: 'Выйти из казино',
            ua: 'Вийти з казино',
            en: 'Exit the casino',
            de: 'Das Casino verlassen',
            pl: 'Wyjdź z kasyna',
        },
        roofEnter: {
            ru: 'Выйти на крышу',
            ua: 'Вийти на дах',
            en: 'Go to the roof',
            de: 'Auf das Dach gehen',
            pl: 'Wejdź na dach',
        },
        roofExit: {
            ru: 'Спуститься в казино',
            ua: 'Спуститися в казино',
            en: 'Descend to the casino',
            de: 'Zum Casino hinabsteigen',
            pl: 'Zejdź do kasyna',
        },
        roof: {
            ru: 'Выход на крышу',
            ua: 'Вихід на дах',
            en: 'Roof access',
            de: 'Dachzugang',
            pl: 'Dostęp do dachu',
        },
    },

    bar: {
        name: {
            ru: 'Бар',
            ua: 'Бар',
            en: 'Bar',
            de: 'Bar',
            pl: 'Bar',
        },

        drinks: {
            ru: 'Напитки',
            ua: 'Напої',
            en: 'Drinks',
            de: 'Getraenke',
            pl: 'Napoży',
        },

        food: {
            ru: 'Еда',
            ua: 'Їжа',
            en: 'Food',
            de: 'Essen',
            pl: 'Jedzenie',
        },
    },
};
