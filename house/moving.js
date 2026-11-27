// Moving house (server/systems/houses/moving): the furniture packed into the character's moving box and unpacked elsewhere.
export default {
    nothing: {
        ru: 'В доме нет мебели для переезда',
        ua: 'У будинку немає меблів для переїзду',
        en: 'There is no furniture in the house to move',
        de: 'Im Haus gibt es keine Möbel für den Umzug',
    },
    busy: {
        ru: 'С мебелью этого дома сейчас что-то делают, попробуй через пару секунд',
        ua: 'З меблями цього будинку зараз щось роблять, спробуй за кілька секунд',
        en: 'The furniture of this house is busy right now, try again in a few seconds',
        de: 'Die Möbel dieses Hauses sind gerade in Bearbeitung, versuche es in ein paar Sekunden erneut',
    },
    question: {
        ru: 'Мебель можно упаковать для переезда и распаковать на складе любого твоего дома.',
        ua: 'Меблі можна запакувати для переїзду й розпакувати на складі будь-якого твого будинку.',
        en: 'Furniture can be packed for a move and unpacked into the warehouse of any house you own.',
        de: 'Möbel lassen sich für einen Umzug einpacken und im Lager jedes deiner Häuser auspacken.',
    },
    pack: {
        item: {
            ru: 'Упаковать для переезда: {{count}} шт., комиссия ${{fee}}',
            ua: 'Запакувати для переїзду: {{count}} шт., комісія ${{fee}}',
            en: 'Pack for a move: {{count}} pcs., fee ${{fee}}',
            de: 'Für den Umzug einpacken: {{count}} Stk., Gebühr ${{fee}}',
        },
        payment: {
            ru: 'Переезд мебели из дома #{{houseId}}',
            ua: 'Переїзд меблів з будинку #{{houseId}}',
            en: 'Moving the furniture out of house #{{houseId}}',
            de: 'Umzug der Möbel aus Haus #{{houseId}}',
        },
        success: {
            ru: 'Мебель упакована для переезда: {{count}} шт. Распакуй её в своём доме',
            ua: 'Меблі запаковано для переїзду: {{count}} шт. Розпакуй їх у своєму будинку',
            en: 'The furniture is packed for the move: {{count}} pcs. Unpack it in your house',
            de: 'Die Möbel sind für den Umzug eingepackt: {{count}} Stk. Packe sie in deinem Haus aus',
        },
        changed: {
            ru: 'Мебель в доме изменилась, начни переезд заново',
            ua: 'Меблі в будинку змінилися, почни переїзд заново',
            en: 'The furniture in the house has changed, start the move again',
            de: 'Die Möbel im Haus haben sich geändert, starte den Umzug neu',
        },
        failed: {
            ru: 'Не удалось упаковать мебель, оплата возвращена',
            ua: 'Не вдалося запакувати меблі, оплату повернуто',
            en: 'The furniture could not be packed, the payment was returned',
            de: 'Die Möbel konnten nicht eingepackt werden, die Zahlung wurde erstattet',
        },
    },
    unpack: {
        item: {
            ru: 'Распаковать вещи из переезда: {{count}} шт.',
            ua: 'Розпакувати речі з переїзду: {{count}} шт.',
            en: 'Unpack the moving boxes: {{count}} pcs.',
            de: 'Umzugskisten auspacken: {{count}} Stk.',
        },
        title: {
            ru: 'Переезд',
            ua: 'Переїзд',
            en: 'Moving house',
            de: 'Umzug',
        },
        message: {
            ru: 'У тебя упаковано предметов мебели: {{count}}. Распаковать их на склад дома №{{id}}? Свободно мест на складе: {{free}}.',
            ua: 'У тебе запаковано предметів меблів: {{count}}. Розпакувати їх на склад будинку №{{id}}? Вільних місць на складі: {{free}}.',
            en: 'You have {{count}} pieces of furniture packed. Unpack them into the warehouse of house #{{id}}? Free warehouse slots: {{free}}.',
            de: 'Du hast {{count}} Möbelstücke eingepackt. In das Lager von Haus Nr. {{id}} auspacken? Freie Lagerplätze: {{free}}.',
        },
        confirm: {
            ru: 'Распаковать',
            ua: 'Розпакувати',
            en: 'Unpack',
            de: 'Auspacken',
        },
        later: {
            ru: 'Позже',
            ua: 'Пізніше',
            en: 'Later',
            de: 'Später',
        },
        success: {
            ru: 'Мебель распакована на склад: {{count}} шт. Расставь её в редакторе',
            ua: 'Меблі розпаковано на склад: {{count}} шт. Розстав їх у редакторі',
            en: 'The furniture is unpacked into the warehouse: {{count}} pcs. Place it in the editor',
            de: 'Die Möbel sind ins Lager ausgepackt: {{count}} Stk. Stelle sie im Editor auf',
        },
        partial: {
            ru: 'Распаковано {{count}} шт., склад заполнен. Ещё {{left}} шт. ждут в переезде',
            ua: 'Розпаковано {{count}} шт., склад заповнений. Ще {{left}} шт. чекають у переїзді',
            en: '{{count}} pcs. unpacked, the warehouse is full. {{left}} pcs. are still packed',
            de: '{{count}} Stk. ausgepackt, das Lager ist voll. {{left}} Stk. sind noch eingepackt',
        },
        full: {
            ru: 'Склад дома заполнен. Освободи место и распакуй остальное позже',
            ua: 'Склад будинку заповнений. Звільни місце й розпакуй решту пізніше',
            en: 'The warehouse of the house is full. Make room and unpack the rest later',
            de: 'Das Lager des Hauses ist voll. Schaffe Platz und packe den Rest später aus',
        },
        failed: {
            ru: 'Не удалось распаковать мебель, она осталась в переезде',
            ua: 'Не вдалося розпакувати меблі, вони залишилися в переїзді',
            en: 'The furniture could not be unpacked, it is still packed',
            de: 'Die Möbel konnten nicht ausgepackt werden, sie bleiben eingepackt',
        },
    },
    sell: {
        question: {
            ru: 'В доме {{count}} предметов мебели вместе со складом. Если продать без переезда, они останутся в доме вместе с сейфами и шкафами.',
            ua: 'У будинку {{count}} предметів меблів разом зі складом. Якщо продати без переїзду, вони залишаться в будинку разом із сейфами й шафами.',
            en: 'The house has {{count}} pieces of furniture, the warehouse included. Sold without moving, they stay in the house with the safes and storages.',
            de: 'Im Haus sind {{count}} Möbelstücke, das Lager eingeschlossen. Ohne Umzug verkauft, bleiben sie samt Tresoren und Schränken im Haus.',
        },
        move: {
            ru: 'Перевезти мебель (комиссия ${{fee}}) и продать',
            ua: 'Перевезти меблі (комісія ${{fee}}) і продати',
            en: 'Move the furniture out (fee ${{fee}}) and sell',
            de: 'Möbel mitnehmen (Gebühr ${{fee}}) und verkaufen',
        },
        keep: {
            ru: 'Продать вместе с мебелью',
            ua: 'Продати разом із меблями',
            en: 'Sell with the furniture',
            de: 'Mit den Möbeln verkaufen',
        },
    },
};
