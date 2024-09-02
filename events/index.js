
import santa from "./santa";
import exchange from "./exchange";
import gift from "./gift";

export default {
    presents: {
        takePresent: {
            ru: 'Взять подарок',
            ua: 'Взяти подарунок',
            en: 'Take the present',
            de: 'Das Geschenk nehmen',
            pl: 'Wziąć prezent',
           zh:'接受礼物',
        },
        santaStartMessage: {
            ru: '~r~Санта-клаус: Хоу-хоу-хоу, я разбросал по серверу подарки, собирайте быстрее!',
            ua: '~r~Санта-Клаус: Хо-хо-хо, я розкидав по серверу подарунки, збирайте швидше!',
            en: "~r~Santa Claus: Ho-ho-ho, I've scattered gifts around the server, collect them quickly!",
            de: '~r~Santa Claus: Ho-ho-ho, ich habe Geschenke über den Server verteilt, sammelt sie schnell!',
            pl: '~r~Święty Mikołaj: Ho-ho-ho, rozrzuciłem prezenty po serwerze, zbierajcie je szybko!',
            zh:'呵呵，我已经在服务器上分发了礼物，快收起来',
        },
        santaEndMessage: {
            ru: '~r~Санта-клаус: Хоу-хоу-хоу, сбор подарков окончен!',
            ua: '~r~Санта-Клаус: Хо-хо-хо, збір подарунків завершено!',
            en: '~r~Santa Claus: Ho-ho-ho, the collection of presents is over!',
            de: '~r~Santa Claus: Ho-ho-ho, das Sammeln der Geschenke ist beendet!',
            pl: '~r~Święty Mikołaj: Ho-ho-ho, zbiór prezentów zakończony!',
           zh:',呵呵，礼物收集完成了',
        },
        youCollected: {
            ru: 'Вы заработали конфеты в количестве - {{count}}',
            ua: 'Ви заробили цукерки у кількості - {{count}}',
            en: 'You have earned candies in the amount of - {{count}}',
            de: 'Sie haben Süßigkeiten in der Menge von - {{count}} verdient',
            pl: 'Zdobyłeś cukierki w ilości - {{count}}',
            zh:'你赚了很多糖果',
        },
    },
    santa,
    exchange,
    gift
};
