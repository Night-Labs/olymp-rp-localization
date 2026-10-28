// Server replies and notifications of cooking: `cooking.error.*` answer `cooking.start` (the kitchen page
// shows them), `cooking.header` and `cooking.notify.*` go through olymp.notify.
export const header = {
    ru: 'Кулинария',
    ua: 'Кулінарія',
    en: 'Cooking',
    de: 'Kochen',
};

export const error = {
    state: {
        ru: 'Сейчас готовить нельзя',
        ua: 'Зараз готувати не можна',
        en: 'You cannot cook right now',
        de: 'Du kannst gerade nicht kochen',
    },
    already: {
        ru: 'Вы уже готовите',
        ua: 'Ви вже готуєте',
        en: 'You are already cooking',
        de: 'Du kochst bereits',
    },
    recipe: {
        ru: 'Такого рецепта нет',
        ua: 'Такого рецепта немає',
        en: 'There is no such recipe',
        de: 'Dieses Rezept gibt es nicht',
    },
    station: {
        ru: 'Рядом нет кухонной техники',
        ua: 'Поруч немає кухонної техніки',
        en: 'There is no kitchen appliance nearby',
        de: 'Kein Küchengerät in der Nähe',
    },
    stationBusy: {
        ru: 'Здесь уже кто-то готовит',
        ua: 'Тут уже хтось готує',
        en: 'Someone is already cooking here',
        de: 'Hier kocht schon jemand',
    },
    season: {
        ru: 'Этот рецепт сейчас не по сезону',
        ua: 'Цей рецепт зараз не за сезоном',
        en: 'This recipe is out of season',
        de: 'Dieses Rezept hat gerade keine Saison',
    },
    level: {
        ru: 'Нужен уровень кулинарии {{level}}',
        ua: 'Потрібен рівень кулінарії {{level}}',
        en: 'Cooking level {{level}} required',
        de: 'Kochstufe {{level}} erforderlich',
    },
    stationKind: {
        ru: 'На этой технике это блюдо не приготовить',
        ua: 'На цій техніці цю страву не приготувати',
        en: 'This dish cannot be cooked on this appliance',
        de: 'Dieses Gericht lässt sich mit diesem Gerät nicht kochen',
    },
    tool: {
        ru: 'Нужно: {{tool}}',
        ua: 'Потрібно: {{tool}}',
        en: 'You need: {{tool}}',
        de: 'Benötigt: {{tool}}',
    },
    ingredients: {
        ru: 'Не хватает продуктов',
        ua: 'Бракує продуктів',
        en: 'Not enough ingredients',
        de: 'Zu wenig Zutaten',
    },
    busy: {
        ru: 'Подождите немного и попробуйте снова',
        ua: 'Зачекайте трохи і спробуйте знову',
        en: 'Wait a moment and try again',
        de: 'Warte kurz und versuche es erneut',
    },
};

export const notify = {
    left: {
        ru: 'Вы ушли с кухни, блюдо пропало',
        ua: 'Ви пішли з кухні, страва пропала',
        en: 'You left the kitchen, the dish is lost',
        de: 'Du hast die Küche verlassen, das Gericht ist verloren',
    },
    stationGone: {
        ru: 'Кухонную технику убрали, продукты возвращены',
        ua: 'Кухонну техніку прибрали, продукти повернуто',
        en: 'The appliance was moved, your ingredients are back',
        de: 'Das Gerät wurde entfernt, deine Zutaten sind zurück',
    },
    finishedEarly: {
        ru: 'Готовку прервали: блюдо доготовлено из того, что вы успели',
        ua: 'Готування перервали: страву доготовлено з того, що ви встигли',
        en: 'Cooking was cut short: the dish is made of what you had done',
        de: 'Das Kochen wurde unterbrochen: das Gericht besteht aus dem, was du geschafft hast',
    },
};
