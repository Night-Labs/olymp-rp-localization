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
        de: 'Derzeit kannst du das Inventar nicht verwenden',
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
        de: 'Diese Kleidung ist nicht für das Geschlecht deines Charakters vorgesehen',
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

    type: {
        ru: 'Тип',
        ua: 'Тип',
        en: 'Type',
        de: 'Typ',
        pl: 'Typ',
    },

    clothesAvailableForGender: {
        title: {
            ru: 'Одежда для',
            ua: 'Одяг для',
            en: 'Clothing for',
            de: 'Kleidung für',
            pl: 'Odzież dla',
        },
        male: {
            ru: 'Мужчин',
            ua: 'Чоловіків',
            en: 'Men',
            de: 'Männer',
            pl: 'Mężczyzn',
        },
        female: {
            ru: 'Женщин',
            ua: 'Жінок',
            en: 'Women',
            de: 'Frauen',
            pl: 'Kobiet',
        },
        shared: {
            ru: 'Мужчин и Женщин',
            ua: 'Чоловіків та Жінок',
            en: 'Men and Women',
            de: 'Männer und Frauen',
            pl: 'Mężczyzn i Kobiet',
        },
    },

    itemTypes: {
        item: {
            ru: 'Предмет',
            ua: 'Предмет',
            en: 'Item',
            de: 'Gegenstand',
            pl: 'Przedmiot',
        },
        eat: {
            ru: 'Еда',
            ua: 'Їжа',
            en: 'Food',
            de: 'Essen',
            pl: 'Jedzenie',
        },
        clothes: {
            ru: 'Одежда',
            ua: 'Одяг',
            en: 'Clothes',
            de: 'Kleidung',
            pl: 'Ubrania',
        },
        weapon: {
            ru: 'Оружие',
            ua: 'Зброя',
            en: 'Weapon',
            de: 'Waffe',
            pl: 'Broń',
        },
        backpack: {
            ru: 'Рюкзак',
            ua: 'Рюкзак',
            en: 'Backpack',
            de: 'Rucksack',
            pl: 'Plecak',
        },
        ammo: {
            ru: 'Патроны',
            ua: 'Набої',
            en: 'Ammunition',
            de: 'Munition',
            pl: 'Amunicja',
        },
        blueprint: {
            ru: 'Чертёж',
            ua: 'Креслення',
            en: 'Blueprint',
            de: 'Bauplan',
            pl: 'Schemat',
        },
    },

    itemCategories: {
        medical: {
            ru: 'Медицина',
            ua: 'Медицина',
            en: 'Medical',
            de: 'Medizin',
            pl: 'Medycyna',
        },
        vehicle: {
            ru: 'Авто / Транспорт',
            ua: 'Авто / Транспорт',
            en: 'Vehicle / Transport',
            de: 'Fahrzeug / Transport',
            pl: 'Auto / Transport',
        },
        electronics: {
            ru: 'Электроника',
            ua: 'Електроніка',
            en: 'Electronics',
            de: 'Elektronik',
            pl: 'Elektronika',
        },
        consumable: {
            ru: 'Расходники',
            ua: 'Витратні матеріали',
            en: 'Consumables',
            de: 'Verbrauchsmaterialien',
            pl: 'Materiały eksploatacyjne',
        },
        materials: {
            ru: 'Материалы',
            ua: 'Матеріали',
            en: 'Materials',
            de: 'Materialien',
            pl: 'Materiały',
        },
        valuables: {
            ru: 'Ценности',
            ua: 'Цінності',
            en: 'Valuables',
            de: 'Wertsachen',
            pl: 'Wartości',
        },
        restraints: {
            ru: 'Связывание / Ограничители',
            ua: "Зв'язування / Обмежувачі",
            en: 'Restraints',
            de: 'Fesseln / Beschränkungen',
            pl: 'Krępowanie / Ograniczniki',
        },
        explosives: {
            ru: 'Взрывчатка',
            ua: 'Вибухівка',
            en: 'Explosives',
            de: 'Explosivstoffe',
            pl: 'Materiały wybuchowe',
        },
        tools: {
            ru: 'Инструменты',
            ua: 'Інструменти',
            en: 'Tools',
            de: 'Werkzeuge',
            pl: 'Narzędzia',
        },
        ammo: {
            ru: 'Патроны',
            ua: 'Набої',
            en: 'Ammo',
            de: 'Munition',
            pl: 'Amunicja',
        },
        meleeWeapon: {
            ru: 'Ближнее оружие',
            ua: 'Зброя ближнього бою',
            en: 'Melee Weapons',
            de: 'Nahkampfwaffen',
            pl: 'Broń do walki wręcz',
        },
        firearm: {
            ru: 'Огнестрельное оружие',
            ua: 'Вогнепальна зброя',
            en: 'Firearms',
            de: 'Schusswaffen',
            pl: 'Broń palna',
        },
        nonLethalWeapon: {
            ru: 'Нелетальное оружие',
            ua: 'Нелетальна зброя',
            en: 'Non-lethal Weapons',
            de: 'Nichttödliche Waffen',
            pl: 'Broń nieśmiercionośna',
        },
        throwableWeapon: {
            ru: 'Метательное оружие',
            ua: 'Метальна зброя',
            en: 'Throwable Weapons',
            de: 'Wurfwaffen',
            pl: 'Broń miotana',
        },
        heavyWeapon: {
            ru: 'Тяжёлое оружие',
            ua: 'Важка зброя',
            en: 'Heavy Weapons',
            de: 'Schwere Waffen',
            pl: 'Broń ciężka',
        },
    },

    blueprintName: {
        ru: 'Чертёж',
        ua: 'Креслення',
        en: 'Blueprint',
        de: 'Bauplan',
        pl: 'Plan',
    },
    blueprintDesc: {
        ru: 'Изучив, ты получаешь возможность создавать этот предмет на верстаке {{level}} уровня',
        ua: 'Вивчивши, ти отримуєш можливість створювати цей предмет на верстаку {{level}} рівня',
        en: 'After learning it, you get the ability to craft this item at a level {{level}} workbench',
        de: 'Nachdem du ihn gelernt hast, erhältst du die Möglichkeit, diesen Gegenstand an einer Werkbank der Stufe {{level}} herzustellen',
        pl: 'Po nauczeniu się otrzymujesz możliwość tworzenia tego przedmiotu na warsztacie poziomu {{level}}',
    },
};

export default inventory;
