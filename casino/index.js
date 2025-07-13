import { cashier } from './cashier';
import { luckyWheel } from './games/luckyWheel';
import { roulette } from './games/roulette';
import { slots } from './games/slots';
import homeless from './homeless';

export default {
    cashier,
    luckyWheel,
    roulette,
    slots,
    homeless,

    balance: {
        ru: 'Баланс:',
        ua: 'Баланс:',
        en: 'Balance:',
        de: 'Saldo:',
        pl: 'Bilans:',
       zh:'余额:',
    },

    casino: {
        ru: 'Казино',
        ua: 'Казино',
        en: 'Casino',
        de: 'Casino',
        pl: 'Kasyno',
        zh:'赌场',
    },

    notEnoughChips: {
        ru: 'У вас недостаточно фишек',
        ua: 'У вас недостатньо фішок',
        en: "You don't have enough chips",
        de: 'Du hast nicht genug Chips',
        pl: 'Nie masz wystarczająco żetonów',
       zh:'你没有足够的筹码',
    },

    youWon: {
        ru: 'Вы выиграли {{chips}} фишек!',
        ua: 'Ви виграли {{chips}} фішок!',
        en: 'You won {{chips}} chips!',
        de: 'Du hast {{chips}} Chips gewonnen!',
        pl: 'Wygrałeś {{chips}} żetonów!',
       zh:'你赢了{{chips}}筹码!',
    },

    interaction: {
        enter: {
            ru: 'Войти в казино',
            ua: 'Увійти до казино',
            en: 'Enter the casino',
            de: 'Ins Casino gehen',
            pl: 'Wejdź do kasyna',
            zh:'进入赌场',
        },
        exit: {
            ru: 'Выйти из казино',
            ua: 'Вийти з казино',
            en: 'Exit the casino',
            de: 'Das Casino verlassen',
            pl: 'Wyjdź z kasyna',
            zh:'离开赌场',
        },
        roofEnter: {
            ru: 'Выйти на крышу',
            ua: 'Вийти на дах',
            en: 'Go to the roof',
            de: 'Auf das Dach gehen',
            pl: 'Wejdź na dach',
           zh:'去楼顶',
        },
        roofExit: {
            ru: 'Спуститься в казино',
            ua: 'Спуститися в казино',
            en: 'Descend to the casino',
            de: 'Zum Casino hinabsteigen',
            pl: 'Zejdź do kasyna',
           zh:'下到赌场',
        },
        roof: {
            ru: 'Выход на крышу',
            ua: 'Вихід на дах',
            en: 'Roof access',
            de: 'Dachzugang',
            pl: 'Dostęp do dachu',
            zh:'屋顶入口',
        },
    },

    bar: {
        name: {
            ru: 'Бар',
            ua: 'Бар',
            en: 'Bar',
            de: 'Bar',
            pl: 'Bar',
            zh:'酒吧',
        },

        drinks: {
            ru: 'Напитки',
            ua: 'Напої',
            en: 'Drinks',
            de: 'Getraenke',
            pl: 'Napoży',
            zh:'饮料',
        },

        food: {
            ru: 'Еда',
            ua: 'Їжа',
            en: 'Food',
            de: 'Essen',
            pl: 'Jedzenie',
           zh:'食物',
        },
    },
};
