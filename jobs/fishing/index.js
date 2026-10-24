import base from './base';
import overlay from './overlay';

// The fishing job (src/server/jobs/fishing, src/client/jobs/fishing, src/shared/jobs/fishing).
// Species names live with the catch items (inventory.fish.<id>), the base window strings in ./base,
// the in-world bite / fight / catch card strings in ./overlay.
export default {
    base,
    overlay,

    header: {
        ru: 'Рыбалка',
        ua: 'Риболовля',
        en: 'Fishing',
        de: 'Angeln',
    },

    paymentDescription: {
        ru: 'Покупка на рыболовной базе',
        ua: 'Покупка на рибальській базі',
        en: 'Purchase at the fishing base',
        de: 'Einkauf an der Angelstation',
    },

    thanksForBuy: {
        ru: 'Покупка в карманах. Удачного клёва!',
        ua: 'Покупка в кишенях. Гарного клювання!',
        en: 'The purchase is in your pockets. Tight lines!',
        de: 'Der Einkauf ist in deinen Taschen. Petri Heil!',
    },

    notify: {
        rodInPockets: {
            ru: 'Удочка должна лежать в карманах',
            ua: 'Вудка має лежати в кишенях',
            en: 'The rod must be in your pockets',
            de: 'Die Angel muss in deinen Taschen sein',
        },
        cannotHere: {
            ru: 'Сейчас рыбачить нельзя',
            ua: 'Зараз рибалити не можна',
            en: 'You cannot fish right now',
            de: 'Du kannst gerade nicht angeln',
        },
        noZone: {
            ru: 'Здесь не ловится. Места для рыбалки отмечены на карте',
            ua: 'Тут не ловиться. Місця для риболовлі позначено на карті',
            en: 'Nothing bites here. Fishing spots are marked on the map',
            de: 'Hier beißt nichts. Angelplätze sind auf der Karte markiert',
        },
        zoneRank: {
            ru: 'Эти воды открываются с {{rank}} ранга рыбалки',
            ua: 'Ці води відкриваються з {{rank}} рангу риболовлі',
            en: 'These waters open at fishing rank {{rank}}',
            de: 'Diese Gewässer werden ab Angelrang {{rank}} freigeschaltet',
        },
        boatRequired: {
            ru: 'Здесь рыбачат только с палубы лодки',
            ua: 'Тут рибалять лише з палуби човна',
            en: 'Here you can only fish from the deck of a boat',
            de: 'Hier kannst du nur vom Deck eines Bootes aus angeln',
        },
        noBoatHere: {
            ru: 'Здесь рыбачат только с берега',
            ua: 'Тут рибалять лише з берега',
            en: 'Here you can only fish from the shore',
            de: 'Hier kannst du nur vom Ufer aus angeln',
        },
        deckRank: {
            ru: 'Рыбалка с палубы открывается с {{rank}} ранга',
            ua: 'Риболовля з палуби відкривається з {{rank}} рангу',
            en: 'Fishing from a deck opens at rank {{rank}}',
            de: 'Angeln vom Deck wird ab Rang {{rank}} freigeschaltet',
        },
        noBait: {
            ru: 'На удочке нет наживки. Наденьте её через оснастку удочки',
            ua: 'На вудці немає наживки. Надягніть її через оснащення вудки',
            en: 'There is no bait on the rod. Put some on through the rod\'s tackle',
            de: 'An der Angel ist kein Köder. Bring einen über die Ausrüstung der Angel an',
        },
        noWaterAhead: {
            ru: 'Впереди нет воды для заброса',
            ua: 'Попереду немає води для закидання',
            en: 'There is no water ahead to cast into',
            de: 'Vor dir ist kein Wasser zum Auswerfen',
        },
        baitFull: {
            ru: 'На удочке уже {{max}} шт. наживки',
            ua: 'На вудці вже {{max}} шт. наживки',
            en: 'The rod already holds {{max}} pieces of bait',
            de: 'An der Angel sind schon {{max}} Köder',
        },
        tackleBusy: {
            ru: 'Снасть нельзя менять, пока леска в воде',
            ua: 'Снасть не можна міняти, поки волосінь у воді',
            en: 'You cannot change the tackle while the line is in the water',
            de: 'Die Ausrüstung lässt sich nicht wechseln, solange die Schnur im Wasser ist',
        },
        decideCatch: {
            ru: 'Сначала заберите пойманную рыбу или отпустите её',
            ua: 'Спершу заберіть спійману рибу або відпустіть її',
            en: 'Keep or release the fish you caught first',
            de: 'Behalte zuerst den gefangenen Fisch oder lass ihn frei',
        },
        noRoomOnDeck: {
            ru: 'В карманах нет места: освободите место или отпустите рыбу',
            ua: 'У кишенях немає місця: звільніть місце або відпустіть рибу',
            en: 'No room in your pockets: make room or release the fish',
            de: 'Kein Platz in den Taschen: schaffe Platz oder lass den Fisch frei',
        },
        noSeat: {
            ru: 'Этот групповой контракт взят до того, как вы вступили в группу',
            ua: 'Цей груповий контракт узято до того, як ви вступили в групу',
            en: 'This group contract was taken before you joined the party',
            de: 'Dieser Gruppenauftrag wurde angenommen, bevor du der Gruppe beigetreten bist',
        },
        payoutFailed: {
            ru: 'Не удалось начислить награду за контракт. Сообщите администрации',
            ua: 'Не вдалося нарахувати нагороду за контракт. Повідомте адміністрацію',
            en: 'The contract reward could not be paid. Please contact the administration',
            de: 'Die Auftragsbelohnung konnte nicht ausgezahlt werden. Bitte wende dich an die Administration',
        },
        snapped: {
            ru: 'Леска оборвалась, рыба ушла',
            ua: 'Волосінь обірвалася, риба пішла',
            en: 'The line snapped and the fish got away',
            de: 'Die Schnur ist gerissen, der Fisch ist weg',
        },
        snappedLure: {
            ru: 'Леска оборвалась вместе с приманкой',
            ua: 'Волосінь обірвалася разом із приманкою',
            en: 'The line snapped and took the lure with it',
            de: 'Die Schnur ist gerissen und hat den Köder mitgenommen',
        },
        escaped: {
            ru: 'Рыба сорвалась с крючка',
            ua: 'Риба зірвалася з гачка',
            en: 'The fish slipped off the hook',
            de: 'Der Fisch hat sich vom Haken gelöst',
        },
        missed: {
            ru: 'Поклёвка прозевана',
            ua: 'Клювання проґавлено',
            en: 'You missed the bite',
            de: 'Du hast den Biss verpasst',
        },
        rodBroken: {
            ru: 'Удочка сломалась',
            ua: 'Вудка зламалася',
            en: 'The rod broke',
            de: 'Die Angel ist gebrochen',
        },
        skillMaxed: {
            ru: 'Этот навык уже изучен полностью',
            ua: 'Цю навичку вже вивчено повністю',
            en: 'This skill is already maxed out',
            de: 'Diese Fähigkeit ist bereits voll ausgebaut',
        },
        skillLocked: {
            ru: 'Сначала изучите предыдущий навык ветки',
            ua: 'Спочатку вивчіть попередню навичку гілки',
            en: 'Learn the previous skill of the branch first',
            de: 'Lerne zuerst die vorherige Fähigkeit des Zweigs',
        },
        skillNoPoints: {
            ru: 'Не хватает очков навыков',
            ua: 'Не вистачає очок навичок',
            en: 'Not enough skill points',
            de: 'Nicht genug Fähigkeitspunkte',
        },
        tooFarFromBase: {
            ru: 'Вы отошли от рыболовной базы',
            ua: 'Ви відійшли від рибальської бази',
            en: 'You walked away from the fishing base',
            de: 'Du hast dich von der Angelstation entfernt',
        },
        rankRequired: {
            ru: 'Нужен {{rank}} ранг рыбалки',
            ua: 'Потрібен {{rank}} ранг риболовлі',
            en: 'Requires fishing rank {{rank}}',
            de: 'Erfordert Angelrang {{rank}}',
        },
        cardGone: {
            ru: 'Этого контракта уже нет на доске',
            ua: 'Цього контракту вже немає на дошці',
            en: 'This contract is no longer on the board',
            de: 'Dieser Auftrag hängt nicht mehr am Brett',
        },
        noLicense: {
            ru: 'Для контрактов нужна лицензия рыболова',
            ua: 'Для контрактів потрібна ліцензія рибалки',
            en: 'Contracts require a fishing licence',
            de: 'Für Aufträge brauchst du einen Angelschein',
        },
        groupRequired: {
            ru: 'Групповой контракт: нужна группа из {{min}}-{{max}} человек',
            ua: 'Груповий контракт: потрібна група з {{min}}-{{max}} осіб',
            en: 'Group contract: you need a party of {{min}}-{{max}} people',
            de: 'Gruppenauftrag: du brauchst eine Gruppe aus {{min}}-{{max}} Personen',
        },
        noSlots: {
            ru: 'Больше контрактов не взять: сдайте или отмените один из текущих',
            ua: 'Більше контрактів не взяти: здайте або скасуйте один із поточних',
            en: 'You cannot take more contracts: hand in or abandon one of yours',
            de: 'Du kannst keine weiteren Aufträge annehmen: gib einen ab oder brich einen ab',
        },
        accepted: {
            ru: 'Контракт принят: {{species}}, {{count}} шт. Место: {{zone}}',
            ua: 'Контракт прийнято: {{species}}, {{count}} шт. Місце: {{zone}}',
            en: 'Contract taken: {{species}}, {{count}} pcs. Spot: {{zone}}',
            de: 'Auftrag angenommen: {{species}}, {{count}} Stk. Ort: {{zone}}',
        },
        acceptedDelivery: {
            ru: 'Контракт принят: сдать {{count}} кг ({{species}}) на рыболовной базе',
            ua: 'Контракт прийнято: здати {{count}} кг ({{species}}) на рибальській базі',
            en: 'Contract taken: hand in {{count}} kg ({{species}}) at a fishing base',
            de: 'Auftrag angenommen: {{count}} kg ({{species}}) an einer Angelstation abgeben',
        },
        abandoned: {
            ru: 'Контракт отменён',
            ua: 'Контракт скасовано',
            en: 'Contract abandoned',
            de: 'Auftrag abgebrochen',
        },
        complete: {
            ru: 'Контракт выполнен: {{species}}, {{count}} шт. Награда - на рыболовной базе',
            ua: 'Контракт виконано: {{species}}, {{count}} шт. Нагорода - на рибальській базі',
            en: 'Contract done: {{species}}, {{count}} pcs. Collect the reward at a fishing base',
            de: 'Auftrag erfüllt: {{species}}, {{count}} Stk. Hol dir die Belohnung an einer Angelstation',
        },
        delivered: {
            ru: 'Сдано {{mass}} улова',
            ua: 'Здано {{mass}} улову',
            en: 'Handed in {{mass}} of catch',
            de: '{{mass}} Fang abgegeben',
        },
        nothingToDeliver: {
            ru: 'У вас нет рыбы, которую берёт этот контракт',
            ua: 'У вас немає риби, яку бере цей контракт',
            en: 'You have no fish this contract takes',
            de: 'Du hast keinen Fisch, den dieser Auftrag annimmt',
        },
        notComplete: {
            ru: 'Контракт ещё не выполнен',
            ua: 'Контракт ще не виконано',
            en: 'The contract is not complete yet',
            de: 'Der Auftrag ist noch nicht erfüllt',
        },
        busy: {
            ru: 'Подождите, предыдущее действие ещё выполняется',
            ua: 'Зачекайте, попередня дія ще виконується',
            en: 'Wait, the previous action is still running',
            de: 'Warte, die vorherige Aktion läuft noch',
        },
        groupPaid: {
            ru: 'Группа сдала контракт, награда начислена',
            ua: 'Група здала контракт, нагороду нараховано',
            en: 'Your group handed the contract in, the reward is paid',
            de: 'Deine Gruppe hat den Auftrag abgegeben, die Belohnung ist ausgezahlt',
        },
        expired: {
            ru: 'Время контракта вышло: {{species}}',
            ua: 'Час контракту вийшов: {{species}}',
            en: 'The contract ran out of time: {{species}}',
            de: 'Die Zeit für den Auftrag ist abgelaufen: {{species}}',
        },
    },

    // The contract block of the HUD task list (server jobs/fishing/contracts.ts updateFishingHud).
    hud: {
        title: {
            ru: 'Контракт рыболова',
            ua: 'Контракт рибалки',
            en: 'Fishing contract',
            de: 'Angelauftrag',
        },
        deliver: {
            ru: 'Сдать: {{species}}',
            ua: 'Здати: {{species}}',
            en: 'Hand in: {{species}}',
            de: 'Abgeben: {{species}}',
        },
        kgOf: {
            ru: '{{progress}} / {{count}} кг',
            ua: '{{progress}} / {{count}} кг',
            en: '{{progress}} / {{count}} kg',
            de: '{{progress}} / {{count}} kg',
        },
        timeLeft: {
            ru: 'Осталось',
            ua: 'Залишилося',
            en: 'Time left',
            de: 'Verbleibend',
        },
        minutes: {
            ru: '{{minutes}} мин.',
            ua: '{{minutes}} хв.',
            en: '{{minutes}} min',
            de: '{{minutes}} Min.',
        },
        otherContracts: {
            ru: 'Другие контракты',
            ua: 'Інші контракти',
            en: 'Other contracts',
            de: 'Weitere Aufträge',
        },
        returnToBase: {
            ru: 'Вернитесь на рыболовную базу за наградой',
            ua: 'Поверніться на рибальську базу по нагороду',
            en: 'Return to a fishing base for the reward',
            de: 'Kehre für die Belohnung zu einer Angelstation zurück',
        },
        deliverAtBase: {
            ru: 'Сдайте улов на рыболовной базе',
            ua: 'Здайте улов на рибальській базі',
            en: 'Hand the catch in at a fishing base',
            de: 'Gib den Fang an einer Angelstation ab',
        },
    },

    // Fishing waters (shared/jobs/fishing/zones.ts): map blips, the HUD and the base window.
    zones: {
        vinewoodLake: {
            ru: 'Озеро Вайнвуд',
            ua: 'Озеро Вайнвуд',
            en: 'Lake Vinewood',
            de: 'Lake Vinewood',
        },
        delPerroPier: {
            ru: 'Пирс Дель-Перро',
            ua: 'Пірс Дель-Перро',
            en: 'Del Perro Pier',
            de: 'Del Perro Pier',
        },
        vespucciBeach: {
            ru: 'Пляж Веспуччи',
            ua: 'Пляж Веспуччі',
            en: 'Vespucci Beach',
            de: 'Vespucci Beach',
        },
        paletoCove: {
            ru: 'Палето-Коув',
            ua: 'Палето-Ков',
            en: 'Paleto Cove',
            de: 'Paleto Cove',
        },
        sanChianskiCoast: {
            ru: 'Побережье Сан-Шиански',
            ua: 'Узбережжя Сан-Шиански',
            en: 'San Chianski Coast',
            de: 'Küste von San Chianski',
        },
        landActReservoir: {
            ru: 'Водохранилище Лэнд-Экт',
            ua: 'Водосховище Ленд-Ект',
            en: 'Land Act Reservoir',
            de: 'Land-Act-Stausee',
        },
        lagoZancudo: {
            ru: 'Лаго-Занкудо',
            ua: 'Лаго-Занкудо',
            en: 'Lago Zancudo',
            de: 'Lago Zancudo',
        },
        alamoSea: {
            ru: 'Аламо-Си',
            ua: 'Аламо-Сі',
            en: 'Alamo Sea',
            de: 'Alamo Sea',
        },
        chumashCoast: {
            ru: 'Побережье Чумаш',
            ua: 'Узбережжя Чумаш',
            en: 'Chumash Coast',
            de: 'Küste von Chumash',
        },
        chiliadCoast: {
            ru: 'Побережье Чилиад',
            ua: 'Узбережжя Чиліад',
            en: 'Chiliad Coast',
            de: 'Chiliad-Küste',
        },
        procopioBeach: {
            ru: 'Пляж Прокопио',
            ua: 'Пляж Прокопіо',
            en: 'Procopio Beach',
            de: 'Procopio Beach',
        },
        northCoast: {
            ru: 'Северное побережье',
            ua: 'Північне узбережжя',
            en: 'North Coast',
            de: 'Nordküste',
        },
        elGordoCoast: {
            ru: 'Побережье Эль-Гордо',
            ua: 'Узбережжя Ель-Гордо',
            en: 'El Gordo Coast',
            de: 'Küste von El Gordo',
        },
        nearshoreWest: {
            ru: 'Прибрежные воды: запад',
            ua: 'Прибережні води: захід',
            en: 'Coastal waters: west',
            de: 'Küstengewässer: West',
        },
        nearshorePaleto: {
            ru: 'Прибрежные воды: Палето',
            ua: 'Прибережні води: Палето',
            en: 'Coastal waters: Paleto',
            de: 'Küstengewässer: Paleto',
        },
        nearshoreEast: {
            ru: 'Прибрежные воды: восток',
            ua: 'Прибережні води: схід',
            en: 'Coastal waters: east',
            de: 'Küstengewässer: Ost',
        },
        offshoreWest: {
            ru: 'Открытый океан: запад',
            ua: 'Відкритий океан: захід',
            en: 'Open ocean: west',
            de: 'Offener Ozean: West',
        },
        offshoreNorthWest: {
            ru: 'Открытый океан: северо-запад',
            ua: 'Відкритий океан: північний захід',
            en: 'Open ocean: north-west',
            de: 'Offener Ozean: Nordwest',
        },
        offshoreSouthEast: {
            ru: 'Открытый океан: юго-восток',
            ua: 'Відкритий океан: південний схід',
            en: 'Open ocean: south-east',
            de: 'Offener Ozean: Südost',
        },
        offshoreEast: {
            ru: 'Открытый океан: восток',
            ua: 'Відкритий океан: схід',
            en: 'Open ocean: east',
            de: 'Offener Ozean: Ost',
        },
    },
};
