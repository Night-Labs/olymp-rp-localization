// The packing table of the `illegalSupplier` contract (webviews `systems/games/packing`).
export default {
    title: {
        ru: 'Фасовка',
        ua: 'Фасування',
        en: 'Packing',
        de: 'Abpacken',
    },
    desc: {
        ru: 'Насыпьте каждый пакет до его отметки и запаяйте. Отпущенный товар ещё падает, а весы показывают с опозданием - останавливайтесь заранее',
        ua: 'Насипте кожен пакет до його позначки й запаяйте. Відпущений товар ще падає, а ваги показують із запізненням - зупиняйтеся заздалегідь',
        en: 'Fill each bag to its mark and seal it. Product you let go is still falling and the scale reads late, so stop early',
        de: 'Fülle jeden Beutel bis zu seiner Marke und schweiße ihn zu. Losgelassene Ware fällt noch nach und die Waage zeigt verspätet an - hör früher auf',
    },
    phaseWeigh: {
        ru: 'Взвешивание',
        ua: 'Зважування',
        en: 'Weighing',
        de: 'Abwiegen',
    },
    phaseSeal: {
        ru: 'Запайка',
        ua: 'Запаювання',
        en: 'Sealing',
        de: 'Verschweißen',
    },
    defects: {
        ru: 'Брак',
        ua: 'Брак',
        en: 'Defects',
        de: 'Ausschuss',
    },
    slipTitle: {
        ru: 'Заказ',
        ua: 'Замовлення',
        en: 'Order',
        de: 'Auftrag',
    },
    boxTitle: {
        ru: 'Коробка',
        ua: 'Коробка',
        en: 'Box',
        de: 'Karton',
    },
    // Args: index (1-based).
    bag: {
        ru: 'Пакет {{index}}',
        ua: 'Пакет {{index}}',
        en: 'Bag {{index}}',
        de: 'Beutel {{index}}',
    },
    unit: {
        ru: 'г',
        ua: 'г',
        en: 'g',
        de: 'g',
    },
    gaugeWeight: {
        ru: 'Вес',
        ua: 'Вага',
        en: 'Weight',
        de: 'Gewicht',
    },
    // Args: mark, tolerance (both with the unit).
    gaugeMark: {
        ru: 'Отметка {{mark}} ± {{tolerance}}',
        ua: 'Позначка {{mark}} ± {{tolerance}}',
        en: 'Mark {{mark}} ± {{tolerance}}',
        de: 'Marke {{mark}} ± {{tolerance}}',
    },
    gaugeSeal: {
        ru: 'Нагрев',
        ua: 'Нагрів',
        en: 'Heat',
        de: 'Hitze',
    },
    gaugeSealHint: {
        ru: 'Отпустите в полосе',
        ua: 'Відпустіть у смузі',
        en: 'Let go inside the band',
        de: 'Im Band loslassen',
    },
    // Args: mark (with the unit).
    msgStart: {
        ru: 'Насыпьте пакет до отметки {{mark}}',
        ua: 'Насипте пакет до позначки {{mark}}',
        en: 'Fill the bag to the {{mark}} mark',
        de: 'Fülle den Beutel bis zur Marke {{mark}}',
    },
    msgPouring: {
        ru: 'Отпускайте раньше отметки - товар ещё в воздухе',
        ua: 'Відпускайте раніше позначки - товар ще в повітрі',
        en: 'Let go before the mark - product is still in the air',
        de: 'Vor der Marke loslassen - die Ware ist noch in der Luft',
    },
    // Args: mark (with the unit).
    msgUnder: {
        ru: 'Мало - досыпьте до {{mark}}',
        ua: 'Замало - досипте до {{mark}}',
        en: 'Short - top it up to {{mark}}',
        de: 'Zu wenig - bis {{mark}} auffüllen',
    },
    msgOver: {
        ru: 'Перевес - отсыпьте лишнее',
        ua: 'Перебір - відсипте зайве',
        en: 'Overweight - take some back',
        de: 'Zu schwer - etwas zurücknehmen',
    },
    msgSettling: {
        ru: 'Весы ещё не успокоились',
        ua: 'Ваги ще не заспокоїлися',
        en: 'The scale is still settling',
        de: 'Die Waage pendelt sich noch ein',
    },
    msgOn: {
        ru: 'Вес в норме - запаивайте',
        ua: 'Вага в нормі - запаюйте',
        en: 'On the mark - seal it',
        de: 'Auf der Marke - zuschweißen',
    },
    msgSeal: {
        ru: 'Держите и отпустите, когда нагрев в полосе',
        ua: 'Тримайте й відпустіть, коли нагрів у смузі',
        en: 'Hold, and let go when the heat is inside the band',
        de: 'Halten und loslassen, wenn die Hitze im Band ist',
    },
    msgCold: {
        ru: 'Шов не схватился - нагрейте ещё',
        ua: 'Шов не схопився - нагрійте ще',
        en: 'The seam did not take - heat it again',
        de: 'Die Naht hat nicht gehalten - nochmal erhitzen',
    },
    msgGood: {
        ru: 'Пакет в коробке',
        ua: 'Пакет у коробці',
        en: 'Bag is in the box',
        de: 'Beutel ist im Karton',
    },
    msgOff: {
        ru: 'Не тот вес - пакет в брак',
        ua: 'Не та вага - пакет у брак',
        en: 'Wrong weight - the bag is a defect',
        de: 'Falsches Gewicht - der Beutel ist Ausschuss',
    },
    msgBurnt: {
        ru: 'Пакет прожжён - в брак',
        ua: 'Пакет пропалено - у брак',
        en: 'The bag burnt through - a defect',
        de: 'Der Beutel ist durchgebrannt - Ausschuss',
    },
    hintPour: {
        ru: 'Сыпать',
        ua: 'Сипати',
        en: 'Pour',
        de: 'Schütten',
    },
    hintPinch: {
        ru: 'Отсыпать',
        ua: 'Відсипати',
        en: 'Take back',
        de: 'Zurücknehmen',
    },
    hintSeal: {
        ru: 'Запаять',
        ua: 'Запаяти',
        en: 'Seal',
        de: 'Zuschweißen',
    },
    hintExit: {
        ru: 'Выйти',
        ua: 'Вийти',
        en: 'Exit',
        de: 'Beenden',
    },
    stampDone: {
        ru: 'Упаковано',
        ua: 'Упаковано',
        en: 'Packed',
        de: 'Verpackt',
    },
    stampDoneSub: {
        ru: 'Партия готова к отправке',
        ua: 'Партія готова до відправки',
        en: 'The batch is ready to ship',
        de: 'Die Charge ist versandbereit',
    },
    stampFail: {
        ru: 'Брак',
        ua: 'Брак',
        en: 'Scrapped',
        de: 'Ausschuss',
    },
    stampFailDefects: {
        ru: 'Слишком много брака',
        ua: 'Забагато браку',
        en: 'Too many defects',
        de: 'Zu viel Ausschuss',
    },
    stampFailTime: {
        ru: 'Не успели к сроку',
        ua: 'Не встигли вчасно',
        en: 'Out of time',
        de: 'Die Zeit ist um',
    },
    stampFailLeft: {
        ru: 'Партия брошена',
        ua: 'Партію покинуто',
        en: 'The batch was left behind',
        de: 'Die Charge wurde stehen gelassen',
    },
    // Server-side notification body when a batch is scrapped (`contracts/runner.ts`).
    batchFailSub: {
        ru: 'Партия ушла в брак',
        ua: 'Партія пішла в брак',
        en: 'The batch was scrapped',
        de: 'Die Charge ist Ausschuss',
    },
};
