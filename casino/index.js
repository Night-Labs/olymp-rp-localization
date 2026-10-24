import { cashier } from './cashier';
import { luckyWheel } from './games/luckyWheel';
import { roulette } from './games/roulette';
import { slots } from './games/slots';
import { blackjack } from './games/blackjack';
import { poker } from './games/poker';
import { pvpPoker } from './games/pvpPoker';
import { jackpot } from './games/jackpot';
import homeless from './homeless';
import location from './location';

export default {
    cashier,
    luckyWheel,
    roulette,
    slots,
    blackjack,
    poker,
    pvpPoker,
    jackpot,
    homeless,
    location,

    balance: {
        ru: 'Баланс:',
        ua: 'Баланс:',
        en: 'Balance:',
        de: 'Guthaben:',
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

    // The signs over the game tables (client systems/casino/utils/tableSign.ts): the game, the table, its stakes.
    sign: {
        table: {
            ru: 'Стол {{n}}',
            ua: 'Стіл {{n}}',
            en: 'Table {{n}}',
            de: 'Tisch {{n}}',
            pl: 'Stół {{n}}',
            zh: '{{n}}号桌',
        },
        bet: {
            ru: 'Ставка',
            ua: 'Ставка',
            en: 'Bet',
            de: 'Einsatz',
            pl: 'Stawka',
            zh: '下注',
        },
        cellBet: {
            ru: 'Ставка на поле',
            ua: 'Ставка на поле',
            en: 'Bet per spot',
            de: 'Einsatz pro Feld',
            pl: 'Stawka na pole',
            zh: '每格下注',
        },
        // The three card game's own name is plain "Poker" in ru/ua, as Hold'em's: the sign tells them apart.
        threeCardPoker: {
            ru: 'Покер на трёх картах',
            ua: 'Покер на трьох картах',
            en: 'Three Card Poker',
            de: 'Three Card Poker',
            pl: 'Poker trzykartowy',
            zh: '三张牌扑克',
        },
    },

    // Key hints of the games' bottom bar, the ones every seated game has.
    hints: {
        chip: {
            ru: 'Сменить фишку',
            ua: 'Змінити фішку',
            en: 'Change chip',
            de: 'Chip wechseln',
            pl: 'Zmień żeton',
            zh: '切换筹码',
        },
        camera: {
            ru: 'Сменить вид',
            ua: 'Змінити вигляд',
            en: 'Switch view',
            de: 'Ansicht wechseln',
            pl: 'Zmień widok',
            zh: '切换视角',
        },
        leave: {
            ru: 'Встать',
            ua: 'Встати',
            en: 'Stand up',
            de: 'Aufstehen',
            pl: 'Wstań',
            zh: '起身',
        },
        voice: {
            ru: 'Микрофон',
            ua: 'Мікрофон',
            en: 'Microphone',
            de: 'Mikrofon',
            pl: 'Mikrofon',
            zh: '麦克风',
        },
    },

    notEnoughChips: {
        ru: 'У вас недостаточно фишек',
        ua: 'У вас недостатньо фішок',
        en: "You don't have enough chips",
        de: 'Du hast nicht genug Chips',
        pl: 'Nie masz wystarczająco żetonów',
       zh:'你没有足够的筹码',
    },

    stopAnimationFirst: {
        ru: 'Сначала остановите анимацию',
        ua: 'Спочатку зупиніть анімацію',
        en: 'Stop the animation first',
        de: 'Beende zuerst die Animation',
    },

    maxStake: {
        ru: 'На эту ставку можно поставить не больше {{max}} фишек',
        ua: 'На цю ставку можна поставити не більше {{max}} фішок',
        en: 'This bet takes at most {{max}} chips',
        de: 'Auf diesen Einsatz passen höchstens {{max}} Chips',
        pl: 'Na ten zakład można postawić najwyżej {{max}} żetonów',
        zh: '这个下注最多可以下 {{max}} 筹码',
    },

    // The manual chip's bet dialog (webviews systems/casino/betAmount.js).
    betAmount: {
        title: {
            ru: 'Своя ставка',
            ua: 'Своя ставка',
            en: 'Your bet',
            de: 'Eigener Einsatz',
            pl: 'Własny zakład',
            zh: '自定义下注',
        },
        range: {
            ru: 'От {{min}} до {{max}} фишек',
            ua: 'Від {{min}} до {{max}} фішок',
            en: 'From {{min}} to {{max}} chips',
            de: 'Von {{min}} bis {{max}} Chips',
            pl: 'Od {{min}} do {{max}} żetonów',
            zh: '{{min}} 至 {{max}} 筹码',
        },
        min: {
            ru: 'Мин',
            ua: 'Мін',
            en: 'Min',
            de: 'Min',
            pl: 'Min',
            zh: '最小',
        },
        max: {
            ru: 'Макс',
            ua: 'Макс',
            en: 'Max',
            de: 'Max',
            pl: 'Maks',
            zh: '最大',
        },
        half: {
            ru: '1/2',
            ua: '1/2',
            en: '1/2',
            de: '1/2',
            pl: '1/2',
            zh: '1/2',
        },
        double: {
            ru: 'x2',
            ua: 'x2',
            en: 'x2',
            de: 'x2',
            pl: 'x2',
            zh: 'x2',
        },
        confirm: {
            ru: 'Поставить',
            ua: 'Поставити',
            en: 'Place bet',
            de: 'Setzen',
            pl: 'Postaw',
            zh: '下注',
        },
        cancel: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
            zh: '取消',
        },
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
        // The payment sheet's line (modules/payment).
        payment: {
            description: {
                ru: 'Заказ в баре казино',
                ua: 'Замовлення в барі казино',
                en: 'Order at the casino bar',
                de: 'Bestellung an der Casino-Bar',
                pl: 'Zamówienie w barze kasyna',
                zh: '在赌场酒吧点单',
            },
        },
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
            de: 'Getränke',
            pl: 'Napoje',
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
