import cef from './cef';
import server from './server';

export default {
    ...server,
    cef,
    computer: {
        ru: 'Робочий компютер',
        ua: "Робочий комп'ютер",
        en: 'Work computer',
        de: 'Arbeitscomputer',
        pl: 'Komputer roboczy',
    },
    cooldownLol: {
        ru: 'Недавно уже была поставка, нужно подождать немного',
        ua: 'Нещодавно вже була поставка, потрібно почекати трохи',
        en: 'There was a delivery recently, you need to wait a bit',
        de: 'Es gab kürzlich eine Lieferung, du musst noch etwas warten',
        pl: 'Dostawa była niedawno, musisz trochę poczekać',
    },
    "notYourSupply": {
        "ru": "Тут нельзя разгрузить",
        "ua": "Тут не можна розвантажити",
        "en": "Cannot unload here",
        "de": "Hier kann nicht entladen werden",
        "pl": "Tutaj nie można rozładować"
    }
};
