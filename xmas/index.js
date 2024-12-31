import exchange from './exchange';
import santa from './santa';

export default {
    exchange,
    santa,
    startEvent: {
        ru: '~r~Санта-клаус: Хоу-хоу-хоу, я разбросал по серверу подарки, собери их по скорее и получи награду!',
        ua: '~r~Санта-Клаус: Хо-хо-хо, я розкидав подарунки по серверу, збери їх якомога швидше та отримай нагороду!',
        en: '~r~Santa Claus: Ho-ho-ho, I scattered gifts across the server, collect them quickly and get a reward!',
        de: '~r~Weihnachtsmann: Ho-ho-ho, ich habe Geschenke über den Server verteilt, sammle sie schnell ein und erhalte eine Belohnung!',
        pl: '~r~Święty Mikołaj: Ho-ho-ho, rozrzuciłem prezenty po serwerze, zbierz je szybko i zdobądź nagrodę!',
    },
    interaction: {
        ru: 'Подобрать подарок',
        ua: 'Підібрати подарунок',
        en: 'Pick up the gift',
        de: 'Geschenk aufheben',
        pl: 'Podnieś prezent',
    },
};
