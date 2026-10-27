// Del Perro Pier fairground (systems/fairground). The ru / en / de lines are R*'s own
// AMFW_* / AMRC_* texts from the game's text tables; ua is translated from them.
//
// Every button token LEADS its line, as in the shooting range's help: the help box
// carries <font face> markup, and markup in front of a ~INPUT_*~ token pushes its
// button sprite away from the gap reserved for it.
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
            ru: '~INPUT_CONTEXT~ - прокатиться на колесе обозрения. Стоимость - ${{cost}}.',
            ua: '~INPUT_CONTEXT~ - покататися на оглядовому колесі. Вартість - ${{cost}}.',
            en: '~INPUT_CONTEXT~ - ride the Ferris Whale. The cost is ${{cost}}.',
            de: '~INPUT_CONTEXT~ - Riesenrad fahren. Eine Fahrt kostet ${{cost}}.',
        },
        // AMFW_WAIT
        wait: {
            ru: 'Останавливается...',
            ua: 'Зупиняється...',
            en: 'Stopping...',
            de: 'Wird angehalten ...',
        },
        // AMFW_WAIT_OFF
        waitOff: {
            ru: 'Аттракцион остановится на следующем круге.',
            ua: 'Атракціон зупиниться на наступному колі.',
            en: 'The ride will stop on the next rotation.',
            de: 'Das Fahrgeschäft wird bei der nächsten Umdrehung angehalten.',
        },
        // AMFW_GET_IN
        getIn: {
            ru: '~INPUT_ENTER~ - залезть внутрь.',
            ua: '~INPUT_ENTER~ - залізти всередину.',
            en: '~INPUT_ENTER~ - get in.',
            de: '~INPUT_ENTER~ - einsteigen.',
        },
        // AMFW_GET_IN_P
        getInPaid: {
            ru: '~INPUT_ENTER~ - сесть в кабинку. Стоимость - ${{cost}}.',
            ua: '~INPUT_ENTER~ - сісти в кабінку. Вартість - ${{cost}}.',
            en: '~INPUT_ENTER~ - get in the gondola. The cost is ${{cost}}.',
            de: '~INPUT_ENTER~ - in die Gondel steigen. Die Fahrt kostet ${{cost}}.',
        },
        // AMFW_GET_OUT
        getOut: {
            ru: '~INPUT_ENTER~ - вылезти.',
            ua: '~INPUT_ENTER~ - вилізти.',
            en: '~INPUT_ENTER~ - get out.',
            de: '~INPUT_ENTER~ - aussteigen.',
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
            ru: '~INPUT_CONTEXT~ - прокатиться на "Левиафане". Стоимость - ${{cost}}.',
            ua: '~INPUT_CONTEXT~ - покататися на "Левіафані". Вартість - ${{cost}}.',
            en: '~INPUT_CONTEXT~ - ride the Leviathan. The cost is ${{cost}}.',
            de: '~INPUT_CONTEXT~ - Achterbahn fahren. Eine Fahrt kostet ${{cost}}.',
        },
        // AMRC_TIMER
        timer: {
            ru: 'АМЕРИКАНСКИЕ ГОРКИ',
            ua: 'АМЕРИКАНСЬКІ ГІРКИ',
            en: 'ROLLERCOASTER',
            de: 'ACHTERBAHN',
        },
        // AMRC_HELPTEXT, without its line about screaming for RP.
        help: {
            ru: '~INPUT_FRONTEND_X~ - поднять руки.',
            ua: '~INPUT_FRONTEND_X~ - підняти руки.',
            en: '~INPUT_FRONTEND_X~ - raise your hands.',
            de: '~INPUT_FRONTEND_X~ - die Hände hochheben.',
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
