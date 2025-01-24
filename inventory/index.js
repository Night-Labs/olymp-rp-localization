import { items } from './items';
import { drop } from './drop';
import itemEffects from './itemEffects';

const inventory = {
    ...items,
    drop,
    itemEffects,

    name: {
        ru: 'Инвентарь',
        ua: 'Інвентар',
        en: 'Inventory',
        de: 'Inventar',
        pl: 'Ekwipunek',
    },

    cantUseInventory: {
        ru: 'Сейчас вы не можете использовать инвентарь',
        ua: 'Зараз ви не можете використовувати інвентар',
        en: 'You cannot use the inventory right now',
        de: 'Derzeit können Sie das Inventar nicht verwenden',
        pl: 'Nie możesz teraz korzystać z inwentarza',
    },
    
    receiveItem: {
        ru: 'Получен предмет',
        ua: 'Отримано предмет',
        en: 'Item received',
        de: 'Gegenstand erhalten',
        pl: 'Przedmiot otrzymany',
    },

    notEnoughSpace: {
        ru: 'Недостаточно места',
        ua: 'Недостатньо місця',
        en: 'Not enough space',
        de: 'Nicht genug Platz',
        pl: 'Brak miejsca',
    },

    clothesFailedHeader: {
        ru: 'Не удалось надеть одежду',
        ua: 'Не вдалося одягнути одяг',
        en: 'Failed to Put on Clothes',
        de: 'Kleidung konnte nicht angezogen werden',
        pl: 'Nie udało się ubrać',
    },

    clothesFailedDesc: {
        ru: 'Эта одежда не предназначена для пола вашего персонажа',
        ua: 'Цей одяг не призначений для статі вашого персонажа',
        en: 'This clothing is not intended for the gender of your character',
        de: 'Diese Kleidung ist nicht für das Geschlecht Ihres Charakters vorgesehen',
        pl: 'Ta odzież nie jest przeznaczona dla płci twojej postaci',
    },

    bind: {
        keyNotAvailable: {
            ru: 'Эта клавиша недоступна для привязки к предмету.',
            ua: "Ця клавіша недоступна для прив'язки до предмету.",
            en: 'This key is not available for binding to an item.',
            de: 'Diese Taste ist nicht für die Bindung an ein Objekt verfügbar.',
            pl: 'Ten klawisz nie jest dostępny do przypisania do przedmiotu.',
        },
        hasItemWithBind: {
            ru: 'На клавишу {{key}} уже привязан предмет {{itemName}}',
            ua: "До клавіші {{key}} вже прив'язаний предмет {{itemName}}",
            en: 'The key {{key}} is already bound to the item {{itemName}}',
            de: 'Die Taste {{key}} ist bereits mit dem Objekt {{itemName}} belegt',
            pl: 'Do klawisza {{key}} jest już przypisany przedmiot {{itemName}}',
        },
        successBind: {
            ru: 'Клавиша {{key}} привязана к предмету {{itemName}}',
            ua: "Клавіша {{key}} прив'язана до предмету {{itemName}}",
            en: 'The key {{key}} is bound to the item {{itemName}}',
            de: 'Die Taste {{key}} ist mit dem Objekt {{itemName}} belegt',
            pl: 'Klawisz {{key}} jest przypisany do przedmiotu {{itemName}}',
        },
        successUnbind: {
            ru: 'Клавиша {{key}} отвязана от предмета {{itemName}}',
            ua: "Клавіша {{key}} відв'язана від предмета {{itemName}}",
            en: 'Key {{key}} unbound from item {{itemName}}',
            de: 'Taste {{key}} von Gegenstand {{itemName}} gelöst',
            pl: 'Klawisz {{key}} odpięty od przedmiotu {{itemName}}',
        },
    },
};

export default inventory;
