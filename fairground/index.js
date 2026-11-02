// Del Perro Pier fairground (systems/fairground). The ru / en / de lines are R*'s own
// AMFW_* / AMRC_* texts from the game's text tables, shortened where our UI shows the
// key itself (the HUD action line, the ride's hint bar); ua is translated from them.
export default {
    header: {
        ru: 'Ярмарочный аттракцион',
        ua: 'Ярмарковий атракціон',
        en: 'Fairground Ride',
        de: 'Fahrgeschäft',
    },
    // AMFW_BTNCV / AMRC_CHANGEVIEW
    changeView: {
        ru: 'Изменить обзор',
        ua: 'Змінити огляд',
        en: 'Change View',
        de: 'Perspektive ändern',
    },
    ferrisWheel: {
        // AMFW_ENTER
        enter: {
            ru: 'Прокатиться на колесе обозрения за ${{cost}}',
            ua: 'Покататися на оглядовому колесі за ${{cost}}',
            en: 'Ride the Ferris Whale for ${{cost}}',
            de: 'Riesenrad fahren für ${{cost}}',
        },
        // AMFW_WAIT
        wait: {
            ru: 'Колесо останавливается...',
            ua: 'Колесо зупиняється...',
            en: 'Stopping...',
            de: 'Wird angehalten ...',
        },
        // AMFW_WAIT_OFF
        waitOff: {
            ru: 'Аттракцион остановится на следующем круге',
            ua: 'Атракціон зупиниться на наступному колі',
            en: 'The ride will stop on the next rotation',
            de: 'Das Fahrgeschäft wird bei der nächsten Umdrehung angehalten',
        },
        // AMFW_GET_IN
        getIn: {
            ru: 'Сесть в кабинку',
            ua: 'Сісти в кабінку',
            en: 'Get in',
            de: 'Einsteigen',
        },
        // AMFW_GET_IN_P
        getInPaid: {
            ru: 'Сесть в кабинку за ${{cost}}',
            ua: 'Сісти в кабінку за ${{cost}}',
            en: 'Get in the gondola for ${{cost}}',
            de: 'In die Gondel steigen für ${{cost}}',
        },
        // AMFW_GET_OUT
        getOut: {
            ru: 'Выйти из кабинки',
            ua: 'Вийти з кабінки',
            en: 'Get out',
            de: 'Aussteigen',
        },
        // AMFW_CAR_FULL
        full: {
            ru: 'Кабинка заполнена. Вы можете подождать следующую.',
            ua: 'Кабінка заповнена. Ви можете зачекати на наступну.',
            en: 'This gondola is full. You may wait for the next one.',
            de: 'Diese Gondel ist voll. Du kannst auf die nächste warten.',
        },
        // FIND_CAR found nothing: every gondola is full.
        allFull: {
            ru: 'Все кабинки заполнены.',
            ua: 'Усі кабінки заповнені.',
            en: 'All the gondolas are full.',
            de: 'Alle Gondeln sind voll.',
        },
        // AMFW_BTNEX
        exit: {
            ru: 'Выход',
            ua: 'Вихід',
            en: 'Exit',
            de: 'Beenden',
        },
    },
    rollerCoaster: {
        // AMRC_ENTER
        enter: {
            ru: 'Прокатиться на "Левиафане" за ${{cost}}',
            ua: 'Покататися на "Левіафані" за ${{cost}}',
            en: 'Ride the Leviathan for ${{cost}}',
            de: 'Achterbahn fahren für ${{cost}}',
        },
        // The countdown block around the station (AMRC_TIMER): the ride's name and what the time is to.
        name: {
            ru: 'Левиафан',
            ua: 'Левіафан',
            en: 'Leviathan',
            de: 'Leviathan',
        },
        departure: {
            ru: 'Отправление через',
            ua: 'Відправлення через',
            en: 'Departs in',
            de: 'Abfahrt in',
        },
        // AMRC_HANDSRAISE
        raiseHands: {
            ru: 'Поднять руки',
            ua: 'Підняти руки',
            en: 'Raise Hands',
            de: 'Hände hochheben',
        },
        // AMRC_HANDSLOWER
        lowerHands: {
            ru: 'Опустить руки',
            ua: 'Опустити руки',
            en: 'Lower Hands',
            de: 'Hände senken',
        },
        // AMRC_CINEMATIC
        cinematic: {
            ru: 'Кинематографичная камера',
            ua: 'Кінематографічна камера',
            en: 'Cinematic Camera',
            de: 'Kinokamera',
        },
    },
};
