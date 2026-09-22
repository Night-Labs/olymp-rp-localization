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

    qtyShort: {
        ru: 'шт.',
        ua: 'шт.',
        en: 'pcs',
        de: 'St.',
        pl: 'szt.',
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

    dismantle: {
        notWorn: {
            ru: 'Разобрать можно только сильно изношенное снаряжение',
            ua: 'Розібрати можна лише сильно зношене спорядження',
            en: 'Only badly worn gear can be dismantled',
            de: 'Nur stark abgenutzte Ausrüstung kann zerlegt werden',
            pl: 'Rozłożyć można tylko mocno zużyty sprzęt',
        },
    },

    weaponBroken: {
        ru: 'Ваше оружие сломалось от износа. Его можно починить в мастерской',
        ua: 'Ваша зброя зламалася від зносу. Її можна полагодити в майстерні',
        en: 'Your weapon broke from wear. It can be repaired at a workshop',
        de: 'Deine Waffe ist durch Verschleiß zerbrochen. Sie kann in einer Werkstatt repariert werden',
        pl: 'Twoja broń zepsuła się od zużycia. Można ją naprawić w warsztacie',
    },

    weaponBrokenUse: {
        ru: 'Оружие сломано. Почините его в мастерской',
        ua: 'Зброя зламана. Полагодьте її в майстерні',
        en: 'The weapon is broken. Repair it at a workshop',
        de: 'Die Waffe ist zerbrochen. Repariere sie in einer Werkstatt',
        pl: 'Broń jest zepsuta. Napraw ją w warsztacie',
    },

    broken: {
        stamp: {
            ru: 'Сломано',
            ua: 'Зламано',
            en: 'Broken',
            de: 'Kaputt',
            pl: 'Zepsute',
        },
    },

    weaponRaisedHands: {
        ru: 'Сначала опустите руки',
        ua: 'Спершу опустіть руки',
        en: 'Lower your hands first',
        de: 'Nimm zuerst die Hände runter',
        pl: 'Najpierw opuść ręce',
    },

    handsBusy: {
        ru: 'Сначала освободите руки',
        ua: 'Спершу звільніть руки',
        en: 'Free your hands first',
        de: 'Mach zuerst die Haende frei',
        pl: 'Najpierw zwolnij rece',
    },
    notEnoughSpace: {
        ru: 'Недостаточно места',
        ua: 'Недостатньо місця',
        en: 'Not enough space',
        de: 'Nicht genug Platz',
        pl: 'Brak miejsca',
    },

    itemNotAccepted: {
        ru: 'Это сюда не кладут',
        ua: 'Це сюди не кладуть',
        en: 'This container does not take that',
        de: 'Dieser Behälter nimmt das nicht',
        pl: 'Tego się tu nie wkłada',
    },

    attachments: {
        doesNotFit: {
            ru: 'Этот обвес на это оружие не ставится',
            ua: 'Цей обвіс на цю зброю не ставиться',
            en: 'This part does not fit this weapon',
            de: 'Dieser Aufsatz passt nicht auf diese Waffe',
            pl: 'Ten dodatek nie pasuje do tej broni',
        },
        wrongSlot: {
            ru: 'Этот обвес ставится в другой слот',
            ua: 'Цей обвіс ставиться в інший слот',
            en: 'This part goes into a different slot',
            de: 'Dieser Aufsatz gehört in einen anderen Steckplatz',
            pl: 'Ten dodatek montuje się w innym gnieździe',
        },
        broken: {
            ru: 'Обвес {{name}} сломался от износа',
            ua: 'Обвіс {{name}} зламався від зносу',
            en: 'Your {{name}} broke from wear',
            de: 'Dein {{name}} ist durch Verschleiß zerbrochen',
            pl: 'Dodatek {{name}} zepsuł się od zużycia',
        },
    },

    slotsNotEqual: {
        ru: 'Инвентарь изменился, откройте его заново',
        ua: 'Інвентар змінився, відкрийте його заново',
        en: 'Your inventory has changed, open it again',
        de: 'Dein Inventar hat sich geändert, öffne es erneut',
        pl: 'Twój ekwipunek się zmienił, otwórz go ponownie',
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

    // Служебная выдача: предмет выдан на смену и остаётся у игрока в руках и на теле,
    // но не является его имуществом (shared/systems/inventory/serviceIssue).
    serviceIssue: {
        blocked: {
            ru: 'Служебное имущество нельзя выбросить, передать или убрать в хранилище',
            ua: 'Службове майно не можна викинути, передати або покласти у сховище',
            en: 'Issued gear cannot be dropped, handed over or put into storage',
            de: 'Dienstausrüstung kann nicht fallen gelassen, übergeben oder eingelagert werden',
            pl: 'Sprzetu sluzbowego nie mozna wyrzucic, przekazac ani schowac do magazynu',
        },
        blockedUse: {
            ru: 'Это не ваше имущество, его нельзя расходовать на себя',
            ua: 'Це не ваше майно, його не можна витрачати на себе',
            en: 'This is not your property, you cannot spend it on yourself',
            de: 'Das ist nicht dein Eigentum, du kannst es nicht für dich verbrauchen',
            pl: 'To nie jest twoja wlasnosc, nie mozesz jej zuzyc na siebie',
        },
        stamp: {
            ru: 'Служебное',
            ua: 'Службове',
            en: 'Issued',
            de: 'Dienstlich',
            pl: 'Sluzbowe',
        },
        note: {
            ru: 'Служебное имущество. Выдано на смену: его нельзя выбросить, продать или передать, и оно будет сдано по окончании работы.',
            ua: 'Службове майно. Видано на зміну: його не можна викинути, продати чи передати, і воно буде здане після закінчення роботи.',
            en: 'Issued gear. Signed out for the shift: it cannot be dropped, sold or handed over, and it goes back when the work ends.',
            de: 'Dienstausrüstung. Für die Schicht ausgegeben: sie kann nicht fallen gelassen, verkauft oder übergeben werden und wird nach der Arbeit zurückgegeben.',
            pl: 'Sprzet sluzbowy. Wydany na zmiane: nie mozna go wyrzucic, sprzedac ani przekazac, a po pracy zostanie zdany.',
        },
        issuedBy: {
            ru: 'Выдал',
            ua: 'Видав',
            en: 'Issued by',
            de: 'Ausgegeben von',
            pl: 'Wydal',
        },
        issuers: {
            cashCollector: {
                ru: 'Gruppe 6',
                ua: 'Gruppe 6',
                en: 'Gruppe 6',
                de: 'Gruppe 6',
                pl: 'Gruppe 6',
            },
            stashContract: {
                ru: 'Dice',
                ua: 'Dice',
                en: 'Dice',
                de: 'Dice',
                pl: 'Dice',
            },
        },
    },

    // Evidence: an item seized in a police search. It stays in the officer's pockets until it
    // is handed in to the evidence room (shared/systems/inventory/evidence).
    evidence: {
        blocked: {
            ru: 'Изъятое нельзя использовать, передать или убрать: его можно только сдать в хранилище улик',
            ua: 'Вилучене не можна використати, передати або прибрати: його можна лише здати до сховища речових доказів',
            en: 'Seized items cannot be used, handed over or stored: they can only be handed in to the evidence room',
            de: 'Beschlagnahmte Gegenstände können nicht benutzt, übergeben oder eingelagert werden: sie können nur in der Asservatenkammer abgegeben werden',
            pl: 'Zatrzymanych przedmiotów nie można użyć, przekazać ani schować: można je tylko oddać do magazynu dowodów rzeczowych',
        },
        pocketsOnly: {
            ru: 'Изъятое кладётся только в карманы',
            ua: 'Вилучене кладеться лише до кишень',
            en: 'Seized items go into your pockets only',
            de: 'Beschlagnahmte Gegenstände kommen nur in die Taschen',
            pl: 'Zatrzymane przedmioty trafiają tylko do kieszeni',
        },
        stamp: {
            ru: 'Улика',
            ua: 'Речдок',
            en: 'Evidence',
            de: 'Beweis',
            pl: 'Dowód',
        },
        note: {
            ru: 'Улика. Изъята при обыске: её нельзя использовать, выбросить, продать или передать. Сдайте её в хранилище улик.',
            ua: 'Речовий доказ. Вилучено під час обшуку: його не можна використати, викинути, продати чи передати. Здайте його до сховища речових доказів.',
            en: 'Evidence. Seized in a search: it cannot be used, dropped, sold or handed over. Hand it in to the evidence room.',
            de: 'Beweismittel. Bei einer Durchsuchung beschlagnahmt: es kann nicht benutzt, fallen gelassen, verkauft oder übergeben werden. Gib es in der Asservatenkammer ab.',
            pl: 'Dowód rzeczowy. Zatrzymany podczas przeszukania: nie można go użyć, wyrzucić, sprzedać ani przekazać. Oddaj go do magazynu dowodów rzeczowych.',
        },
        seizedFrom: {
            ru: 'Изъято у',
            ua: 'Вилучено у',
            en: 'Seized from',
            de: 'Beschlagnahmt bei',
            pl: 'Zatrzymano u',
        },
    },

    backpackIntoItself: {
        ru: 'Ты дурачёк?',
        ua: 'Ти дурник?',
        en: 'Are you dumb?',
        de: 'Bist du dumm?',
        pl: 'Głupi jesteś?',
    },

    search: {
        takeOnly: {
            ru: 'Во время обыска вещи можно только изымать',
            ua: 'Під час обшуку речі можна лише вилучати',
            en: 'During a search you can only take items',
            de: 'Während einer Durchsuchung können Gegenstände nur abgenommen werden',
            pl: 'Podczas przeszukania przedmioty można tylko zabierać',
        },
        targetLost: {
            ru: 'Обыск прерван: игрок недоступен',
            ua: 'Обшук перервано: гравець недоступний',
            en: 'Search interrupted: the player is unavailable',
            de: 'Durchsuchung abgebrochen: Spieler nicht verfügbar',
            pl: 'Przeszukanie przerwane: gracz jest niedostępny',
        },
        tooFar: {
            ru: 'Обыск прерван: игрок слишком далеко',
            ua: 'Обшук перервано: гравець занадто далеко',
            en: 'Search interrupted: the player is too far away',
            de: 'Durchsuchung abgebrochen: Spieler zu weit entfernt',
            pl: 'Przeszukanie przerwane: gracz jest za daleko',
        },
        trunkLost: {
            ru: 'Обыск прерван: машина недоступна',
            ua: 'Обшук перервано: машина недоступна',
            en: 'Search interrupted: the vehicle is unavailable',
            de: 'Durchsuchung abgebrochen: Fahrzeug nicht verfügbar',
            pl: 'Przeszukanie przerwane: pojazd jest niedostępny',
        },
        trunkTooFar: {
            ru: 'Обыск прерван: машина слишком далеко',
            ua: 'Обшук перервано: машина занадто далеко',
            en: 'Search interrupted: the vehicle is too far away',
            de: 'Durchsuchung abgebrochen: Fahrzeug zu weit entfernt',
            pl: 'Przeszukanie przerwane: pojazd jest za daleko',
        },
        notSeizable: {
            ru: 'Изымать можно только оружие, патроны и запрещённые предметы',
            ua: 'Вилучати можна лише зброю, набої та заборонені предмети',
            en: 'Only weapons, ammunition and illegal items can be seized',
            de: 'Beschlagnahmt werden können nur Waffen, Munition und illegale Gegenstände',
            pl: 'Zatrzymać można tylko broń, amunicję i nielegalne przedmioty',
        },
        freeSlotOnly: {
            ru: 'Изъятое кладётся в свободную ячейку',
            ua: 'Вилучене кладеться у вільну комірку',
            en: 'Put the seized item into a free slot',
            de: 'Lege den beschlagnahmten Gegenstand in ein freies Feld',
            pl: 'Połóż zatrzymany przedmiot w wolnym miejscu',
        },
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

    clothesStyle: {
        title: {
            ru: 'Стиль одежды',
            ua: 'Стиль одягу',
            en: 'Clothing style',
            de: 'Kleidungsstil',
            pl: 'Styl ubioru',
        },
    },

    itemId: {
        title: {
            ru: 'ID',
            ua: 'ID',
            en: 'ID',
            de: 'ID',
            pl: 'ID',
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
        drink: {
            ru: 'Напиток',
            ua: 'Напій',
            en: 'Drink',
            de: 'Getränk',
            pl: 'Napój',
        },
        document: {
            ru: 'Документ',
            ua: 'Документ',
            en: 'Document',
            de: 'Dokument',
            pl: 'Dokument',
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
