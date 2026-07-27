export default {
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
};
