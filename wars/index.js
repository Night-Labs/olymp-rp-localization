export default {
    // Баннер ожидания старта. Общий для доменов: его видит и банда на арене, и
    // организация в бункере, поэтому ключ живёт здесь, а не в `faction.gangWar`.
    toStart: {
        ru: 'До начала:',
        ua: 'До початку:',
        en: 'To start:',
        de: 'Bis zum Start:',
        pl: 'Do rozpoczecia:',
        zh: '直到开始',
    },
    // Подпись под таймером HUD на паузе перед эндингом. Место узкое, поэтому
    // только исход, без «возврат на базу через N сек»: эти секунды и есть таймер.
    outcome: {
        win: {
            ru: 'Вы победили',
            ua: 'Ви перемогли',
            en: 'You won',
            de: 'Du hast gewonnen',
            pl: 'Wygrałeś',
        },
        lose: {
            ru: 'Поражение',
            ua: 'Поразка',
            en: 'Defeat',
            de: 'Niederlage',
            pl: 'Porażka',
        },
    },
    // ESC в режиме наблюдателя: выбитый может уйти на базу, не дожидаясь эндинга.
    leaveModal: {
        title: {
            ru: 'Покинуть битву за территорию',
            ua: 'Покинути битву за територію',
            en: 'Leave the territory battle',
            de: 'Den Kampf um das Gebiet verlassen',
            pl: 'Opuścić bitwę o terytorium',
        },
        message: {
            ru: 'Вы вернётесь на базу своей банды. Вернуться в бой уже не получится.',
            ua: 'Ви повернетеся на базу своєї банди. Повернутися в бій уже не вийде.',
            en: 'You will return to your gang base. There is no way back into the fight.',
            de: 'Du kehrst zur Basis deiner Gang zurück. Zurück in den Kampf geht es nicht mehr.',
            pl: 'Wrócisz do bazy swojego gangu. Powrót do walki nie będzie już możliwy.',
        },
        confirm: {
            ru: 'Выйти',
            ua: 'Вийти',
            en: 'Leave',
            de: 'Verlassen',
            pl: 'Wyjdź',
        },
        cancel: {
            ru: 'Остаться',
            ua: 'Залишитися',
            en: 'Stay',
            de: 'Bleiben',
            pl: 'Zostań',
        },
    },
    // Панель наблюдателя в нижней части HUD: за кем смотрит выбитый и чем
    // переключаться. Подписи короткие — место под ними занимает ник.
    spectator: {
        label: {
            ru: 'Наблюдение',
            ua: 'Спостереження',
            en: 'Spectating',
            de: 'Zuschauen',
            pl: 'Obserwacja',
        },
        switch: {
            ru: 'Сменить игрока',
            ua: 'Змінити гравця',
            en: 'Switch player',
            de: 'Spieler wechseln',
            pl: 'Zmień gracza',
        },
        leave: {
            ru: 'Покинуть бой',
            ua: 'Покинути бій',
            en: 'Leave the fight',
            de: 'Kampf verlassen',
            pl: 'Opuść walkę',
        },
    },
    outOfBounds: {
        title: {
            ru: 'Вернитесь в зону боя',
            ua: 'Поверніться у зону бою',
            en: 'Return to the battle zone',
            de: 'Kehre in die Kampfzone zurück',
            pl: 'Wróć do strefy walki',
        },
        desc: {
            ru: 'Иначе вы погибните',
            ua: 'Інакше ви загинете',
            en: 'Otherwise you will die',
            de: 'Andernfalls wirst du sterben',
            pl: 'W przeciwnym razie zginiesz',
        },
    },
    // Предмет не проходит по условиям боя, объявленным атакующей стороной.
    itemBlocked: {
        header: {
            ru: 'Условия боя',
            ua: 'Умови бою',
            en: 'Battle rules',
            de: 'Kampfregeln',
            pl: 'Zasady walki',
        },
        desc: {
            ru: 'По правилам этого капта данный предмет запрещён',
            ua: 'За правилами цього капту цей предмет заборонений',
            en: 'Under the rules of this capture, this item is banned',
            de: 'Nach den Regeln dieser Einnahme ist dieser Gegenstand verboten',
            pl: 'Zgodnie z zasadami tego przejecia ten przedmiot jest zabroniony',
        },
        weapon: {
            ru: 'По правилам этого капта данное оружие запрещено',
            ua: 'За правилами цього капту ця зброя заборонена',
            en: 'Under the rules of this capture, this weapon is banned',
            de: 'Nach den Regeln dieser Einnahme ist diese Waffe verboten',
            pl: 'Zgodnie z zasadami tego przejecia ta bron jest zabroniona',
        },
        disarmed: {
            ru: 'Запрещённое снаряжение убрано в инвентарь',
            ua: 'Заборонене спорядження прибрано в інвентар',
            en: 'Banned equipment moved to your inventory',
            de: 'Verbotene Ausruestung wurde ins Inventar gelegt',
            pl: 'Zabronione wyposazenie trafilo do ekwipunku',
        },
        disarmStuck: {
            ru: 'Освободите слот в инвентаре: запрещённое снаряжение некуда убрать',
            ua: 'Звільніть слот в інвентарі: заборонене спорядження нікуди прибрати',
            en: 'Free an inventory slot: there is nowhere to put your banned equipment',
            de: 'Mach einen Inventarplatz frei: die verbotene Ausruestung kann nirgendwo hin',
            pl: 'Zwolnij slot w ekwipunku: nie ma gdzie schowac zabronionego wyposazenia',
        },
    },
    // Заголовки слотов оружия в планировщике войны.
    weaponSlots: {
        near: {
            ru: 'Ближнее',
            ua: 'Ближня',
            en: 'Melee',
            de: 'Nahkampf',
            pl: 'Biała broń',
        },
        pistol: {
            ru: 'Лёгкое',
            ua: 'Легка',
            en: 'Light',
            de: 'Leicht',
            pl: 'Lekka',
        },
        heavy: {
            ru: 'Тяжёлое',
            ua: 'Важка',
            en: 'Heavy',
            de: 'Schwer',
            pl: 'Ciężka',
        },
    },
    // Названия групп расходников для планировщика и оверлея объявления.
    itemGroups: {
        armor: {
            ru: 'Бронежилет',
            ua: 'Бронежилет',
            en: 'Body armor',
            de: 'Schutzweste',
            pl: 'Kamizelka',
        },
        heal: {
            ru: 'Лечение',
            ua: 'Лікування',
            en: 'Healing',
            de: 'Heilung',
            pl: 'Leczenie',
        },
        drugs: {
            ru: 'Стимуляторы',
            ua: 'Стимулятори',
            en: 'Stimulants',
            de: 'Stimulanzien',
            pl: 'Stymulanty',
        },
        drones: {
            ru: 'Дроны',
            ua: 'Дрони',
            en: 'Drones',
            de: 'Drohnen',
            pl: 'Drony',
        },
    },
};
