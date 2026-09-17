const STATIC_NODES = {
    opportunities: {
        ru: 'Возможности',
        ua: 'Можливості',
        en: 'Opportunities',
        de: 'Moeglichkeiten',
        pl: 'Mozliwosci',
    },
    territoryControl: {
        ru: 'Контроль территорий',
        ua: 'Контроль територій',
        en: 'Territory control',
        de: 'Gebietskontrolle',
        pl: 'Kontrola terytoriow',
    },
    playerRobbery: {
        ru: 'Ограбление игроков',
        ua: 'Пограбування гравців',
        en: 'Player robbery',
        de: 'Spielerueberfaelle',
        pl: 'Napady na graczy',
    },
    illegalContracts: {
        ru: 'Теневые контракты',
        ua: 'Тіньові контракти',
        en: 'Shadow contracts',
        de: 'Inoffizielle Vertraege',
        pl: 'Nieoficjalne kontrakty',
    },
    legalContracts: {
        ru: 'Официальные контракты',
        ua: 'Офіційні контракти',
        en: 'Official contracts',
        de: 'Offizielle Vertraege',
        pl: 'Oficjalne kontrakty',
    },
    illegalJobs: {
        ru: 'Теневая подработка',
        ua: 'Тіньова підробка',
        en: 'Shadow side jobs',
        de: 'Inoffizielle Nebenjobs',
        pl: 'Nieoficjalne dorywcze',
    },
    robBusiness: { ru: 'Ограбление бизнеса', ua: 'Пограбування бізнесу', en: 'Business robbery', de: 'Geschaeftsueberfaelle', pl: 'Napady na biznesy' },
    robCashVan: { ru: 'Ограбление инкассации', ua: 'Пограбування інкасації', en: 'Cash van robbery', de: 'Geldtransporter-Ueberfall', pl: 'Napad na konwoj' },
};

// Only purchasable nodes need a hand-written description: category labels are not clickable
// on the canvas, and every generated row composes its own text in `tree/labels.ts`.
const STATIC_DESCRIPTIONS = {
    territoryControl: {
        ru: 'Организация сможет заявляться на квадраты и драться за них. Без этого узла войны за территории недоступны.',
        ua: 'Організація зможе заявлятися на квадрати і битися за них. Без цього вузла війни за території недоступні.',
        en: 'The organization can claim squares and fight for them. Without this node territory wars stay closed.',
        de: 'Die Organisation kann Felder beanspruchen und um sie kaempfen. Ohne diesen Knoten bleiben Gebietskriege gesperrt.',
        pl: 'Organizacja moze zglaszac sie po kwadraty i o nie walczyc. Bez tego wezla wojny o terytoria sa zamkniete.',
    },
    playerRobbery: {
        ru: 'Участники смогут грабить других игроков от имени организации.',
        ua: 'Учасники зможуть грабувати інших гравців від імені організації.',
        en: 'Members can rob other players in the organization name.',
        de: 'Mitglieder koennen andere Spieler im Namen der Organisation ausrauben.',
        pl: 'Czlonkowie moga napadac na innych graczy w imieniu organizacji.',
    },
    robBusiness: {
        ru: 'Участники смогут вскрывать кассы игровых бизнесов.',
        ua: 'Учасники зможуть розкривати каси ігрових бізнесів.',
        en: 'Members can crack the tills of player-owned businesses.',
        de: 'Mitglieder koennen die Kassen von Spieler-Geschaeften knacken.',
        pl: 'Czlonkowie moga rozbijac kasy biznesow graczy.',
    },
    robCashVan: {
        ru: 'Участники смогут останавливать броневики Gruppe 6 и забирать груз. Добыча зависит от того, сколько денег осталось в фургоне.',
        ua: 'Учасники зможуть зупиняти броньовики Gruppe 6 і забирати вантаж. Здобич залежить від того, скільки грошей лишилося у фургоні.',
        en: 'Members can stop Gruppe 6 armoured vans and take the load. The haul depends on how much money is still in the van.',
        de: 'Mitglieder koennen Panzerwagen von Gruppe 6 stoppen und die Ladung nehmen. Die Beute haengt davon ab, wie viel Geld noch im Wagen ist.',
        pl: 'Czlonkowie moga zatrzymywac furgony Gruppe 6 i zabierac ladunek. Lup zalezy od tego, ile pieniedzy zostalo w furgonie.',
    },
};

// Sentence fragments the tree assembles into a node description (`tree/labels.ts`). Every
// piece is a finished sentence: a node uses the ones that apply to it and drops the rest, so
// a row that has no payout or no task list simply says one sentence less. The numbers come
// from the contract and side-job catalogs, never from this file.
//
// `name` is the fallback title for a node that carries no display metadata - contract and
// job rows compose their title from `contracts.list.<id>.name` at resolve time instead.
const SHARED = {
    memberSlots: {
        name: { ru: '+10 участников', ua: '+10 учасників', en: '+10 members', de: '+10 Mitglieder', pl: '+10 czlonkow' },
        description: {
            ru: 'Максимальный состав: {{after}} человек вместо {{before}}.',
            ua: 'Максимальний склад: {{after}} осіб замість {{before}}.',
            en: 'Member cap: {{after}} instead of {{before}}.',
            de: 'Mitgliederlimit: {{after}} statt {{before}}.',
            pl: 'Limit czlonkow: {{after}} zamiast {{before}}.',
        },
    },
    contractTier: {
        name: { ru: 'Уровень заказа', ua: 'Рівень замовлення', en: 'Order tier', de: 'Auftragsstufe', pl: 'Poziom zlecenia' },
        description: {
            ru: 'Поднимает заказ на следующий уровень.',
            ua: 'Піднімає замовлення на наступний рівень.',
            en: 'Raises the order to its next tier.',
            de: 'Hebt den Auftrag auf die naechste Stufe.',
            pl: 'Podnosi zlecenie na kolejny poziom.',
        },
    },
    contractUnlock: {
        name: { ru: 'Открыть заказ', ua: 'Відкрити замовлення', en: 'Unlock order', de: 'Auftrag freischalten', pl: 'Odblokuj zlecenie' },
        // Who starts offering the order, and where it shows up. `*NoClient` is for the few
        // contracts that carry no client of their own.
        family: {
            ru: '{{npc}} начнёт давать этот заказ семье во вкладке «Контракты».',
            ua: '{{npc}} почне давати це замовлення сім\'ї у вкладці «Контракти».',
            en: '{{npc}} starts offering this order to the family in the Contracts tab.',
            de: '{{npc}} bietet diesen Auftrag der Familie im Tab "Vertraege" an.',
            pl: '{{npc}} zacznie dawac to zlecenie rodzinie w zakladce "Kontrakty".',
        },
        personal: {
            ru: '{{npc}} начнёт давать этот заказ участникам во вкладке «Контракты».',
            ua: '{{npc}} почне давати це замовлення учасникам у вкладці «Контракти».',
            en: '{{npc}} starts offering this order to members in the Contracts tab.',
            de: '{{npc}} bietet diesen Auftrag den Mitgliedern im Tab "Vertraege" an.',
            pl: '{{npc}} zacznie dawac to zlecenie czlonkom w zakladce "Kontrakty".',
        },
        familyNoClient: {
            ru: 'Заказ появится у семьи во вкладке «Контракты».',
            ua: 'Замовлення з\'явиться у сім\'ї у вкладці «Контракти».',
            en: 'The order shows up for the family in the Contracts tab.',
            de: 'Der Auftrag erscheint fuer die Familie im Tab "Vertraege".',
            pl: 'Zlecenie pojawi sie u rodziny w zakladce "Kontrakty".',
        },
        personalNoClient: {
            ru: 'Заказ появится у участников во вкладке «Контракты».',
            ua: 'Замовлення з\'явиться в учасників у вкладці «Контракти».',
            en: 'The order shows up for members in the Contracts tab.',
            de: 'Der Auftrag erscheint fuer die Mitglieder im Tab "Vertraege".',
            pl: 'Zlecenie pojawi sie u czlonkow w zakladce "Kontrakty".',
        },
    },
    // The task list of an order, and one line of it. Kept as separate keys so a language can
    // put the amount where it belongs instead of always after the name. Languages whose unit
    // ends in a full stop ("шт.", "szt.") close the sentence with it, so their `order` carries
    // no period of its own.
    order: {
        ru: 'Нужно: {{list}}',
        ua: 'Потрібно: {{list}}',
        en: 'Bring: {{list}}.',
        de: 'Benoetigt: {{list}}.',
        pl: 'Potrzeba: {{list}}',
    },
    orderItem: {
        ru: '{{name}} {{count}} шт.',
        ua: '{{name}} {{count}} шт.',
        en: '{{name}} x{{count}}',
        de: '{{name}} x{{count}}',
        pl: '{{name}} {{count}} szt.',
    },
    // Goods counted in units of face value (`countedAsMoney`): the amount is a sum, not a
    // piece count. The currency is already in the item's own name, so no sign is added.
    orderItemMoney: {
        ru: '{{name}} на сумму {{count}}',
        ua: '{{name}} на суму {{count}}',
        en: '{{name}} worth {{count}}',
        de: '{{name}} im Wert von {{count}}',
        pl: '{{name}} na kwote {{count}}',
    },
    payout: {
        ru: 'Платят {{payout}}.',
        ua: 'Платять {{payout}}.',
        en: 'It pays {{payout}}.',
        de: 'Zahlt {{payout}}.',
        pl: 'Placa {{payout}}.',
    },
    payoutUpgrade: {
        ru: 'Платят {{payout}} вместо {{previous}}.',
        ua: 'Платять {{payout}} замість {{previous}}.',
        en: 'It pays {{payout}} instead of {{previous}}.',
        de: 'Zahlt {{payout}} statt {{previous}}.',
        pl: 'Placa {{payout}} zamiast {{previous}}.',
    },
    jobTier: {
        name: { ru: 'Уровень работы', ua: 'Рівень роботи', en: 'Job tier', de: 'Jobstufe', pl: 'Poziom pracy' },
        description: {
            ru: 'Поднимает долю семьи с этой работы.',
            ua: "Піднімає частку сім'ї з цієї роботи.",
            en: "Raises the family's cut from this job.",
            de: 'Erhoeht den Anteil der Familie an diesem Job.',
            pl: 'Podnosi dzialke rodziny z tej pracy.',
        },
    },
    jobUnlock: {
        name: { ru: 'Открыть работу', ua: 'Відкрити роботу', en: 'Unlock job', de: 'Job freischalten', pl: 'Odblokuj prace' },
        description: {
            ru: 'Участники смогут брать эту работу, не состоя в банде.',
            ua: 'Учасники зможуть брати цю роботу, не перебуваючи в банді.',
            en: 'Members will be able to take this job without being in a gang.',
            de: 'Mitglieder koennen diesen Job auch ohne Gang annehmen.',
            pl: 'Czlonkowie beda mogli brac te prace bez przynaleznosci do gangu.',
        },
    },
    jobCut: {
        ru: 'Доля семьи: +{{percent}}% к оплате.',
        ua: "Частка сім'ї: +{{percent}}% до оплати.",
        en: "Family's cut: +{{percent}}% on the pay.",
        de: 'Anteil der Familie: +{{percent}}% auf die Bezahlung.',
        pl: 'Dzialka rodziny: +{{percent}}% do wyplaty.',
    },
    dropPay: {
        ru: 'Платят {{pay}} за закладку.',
        ua: 'Платять {{pay}} за закладку.',
        en: 'It pays {{pay}} per drop.',
        de: 'Zahlt {{pay}} pro Ablage.',
        pl: 'Placa {{pay}} za podrzut.',
    },
    dropPayUpgrade: {
        ru: 'Платят {{pay}} за закладку вместо {{previous}}.',
        ua: 'Платять {{pay}} за закладку замість {{previous}}.',
        en: 'It pays {{pay}} per drop instead of {{previous}}.',
        de: 'Zahlt {{pay}} pro Ablage statt {{previous}}.',
        pl: 'Placa {{pay}} za podrzut zamiast {{previous}}.',
    },
};

const nodes = {};
for (const id of Object.keys(STATIC_NODES)) {
    nodes[id] = STATIC_DESCRIPTIONS[id] ? { name: STATIC_NODES[id], description: STATIC_DESCRIPTIONS[id] } : { name: STATIC_NODES[id] };
}

export const tree = {
    shared: SHARED,
    notify: {
        header: {
            ru: 'Дерево улучшений',
            ua: 'Дерево покращень',
            en: 'Upgrade tree',
            de: 'Upgrade-Baum',
            pl: 'Drzewo ulepszen',
        },
        broadcast: {
            unlock: {
                ru: 'Организация купила улучшение: {{name}} (от {{by}}).',
                ua: 'Організація купила покращення: {{name}} (від {{by}}).',
                en: 'The organization bought an upgrade: {{name}} (by {{by}}).',
                de: 'Die Organisation hat ein Upgrade gekauft: {{name}} (von {{by}}).',
                pl: 'Organizacja kupila ulepszenie: {{name}} (przez {{by}}).',
            },
            unlockStarted: {
                ru: 'Начато улучшение: {{name}} (от {{by}}).',
                ua: 'Розпочато покращення: {{name}} (від {{by}}).',
                en: 'Upgrade started: {{name}} (by {{by}}).',
                de: 'Upgrade gestartet: {{name}} (von {{by}}).',
                pl: 'Rozpoczeto ulepszenie: {{name}} (przez {{by}}).',
            },
            unlockComplete: {
                ru: 'Улучшение готово: {{name}}.',
                ua: 'Покращення готове: {{name}}.',
                en: 'Upgrade complete: {{name}}.',
                de: 'Upgrade abgeschlossen: {{name}}.',
                pl: 'Ulepszenie ukonczone: {{name}}.',
            },
        },
    },
    branches: {
        legal: { ru: 'Официальная', ua: 'Офіційна', en: 'Official', de: 'Offiziell', pl: 'Oficjalna' },
        neutral: { ru: 'Смешанная', ua: 'Змішана', en: 'Mixed', de: 'Gemischt', pl: 'Mieszana' },
        crime: { ru: 'Теневая', ua: 'Тіньова', en: 'Shadow', de: 'Inoffiziell', pl: 'Nieoficjalna' },
    },
    legend: {
        unlocked: { ru: 'Куплено', ua: 'Куплено', en: 'Owned', de: 'Gekauft', pl: 'Kupione' },
        available: { ru: 'Доступно', ua: 'Доступно', en: 'Available', de: 'Verfuegbar', pl: 'Dostepne' },
        pending: { ru: 'Строится', ua: 'Будується', en: 'Building', de: 'Im Bau', pl: 'W budowie' },
        locked: { ru: 'Закрыто', ua: 'Закрито', en: 'Locked', de: 'Gesperrt', pl: 'Zablokowane' },
    },
    entry: {
        unlocked: { ru: 'РАЗБЛОКИРОВАНО', ua: 'РОЗБЛОКОВАНО', en: 'UNLOCKED', de: 'FREIGESCHALTET', pl: 'ODBLOKOWANO' },
        available: { ru: 'ДОСТУПНО', ua: 'ДОСТУПНО', en: 'AVAILABLE', de: 'VERFUEGBAR', pl: 'DOSTEPNE' },
        locked: { ru: 'ЗАБЛОКИРОВАНО', ua: 'ЗАБЛОКОВАНО', en: 'LOCKED', de: 'GESPERRT', pl: 'ZABLOKOWANE' },
    },
    usage: {
        ru: 'Использование: /tree <list|info|unlock> [nodeId]',
        ua: 'Використання: /tree <list|info|unlock> [nodeId]',
        en: 'Usage: /tree <list|info|unlock> [nodeId]',
        de: 'Verwendung: /tree <list|info|unlock> [nodeId]',
        pl: 'Uzycie: /tree <list|info|unlock> [nodeId]',
    },
    list: {
        header: {
            ru: 'Дерево улучшений (репутация: доверие {{legal}}, авторитет {{crime}}):',
            ua: 'Дерево покращень (репутація: довіра {{legal}}, авторитет {{crime}}):',
            en: 'Upgrade tree (reputation: trust {{legal}}, respect {{crime}}):',
            de: 'Upgrade-Baum (Ruf: Vertrauen {{legal}}, Ansehen {{crime}}):',
            pl: 'Drzewo ulepszen (reputacja: zaufanie {{legal}}, autorytet {{crime}}):',
        },
        branchHeader: {
            ru: '~m~--- {{branch}} ---',
            ua: '~m~--- {{branch}} ---',
            en: '~m~--- {{branch}} ---',
            de: '~m~--- {{branch}} ---',
            pl: '~m~--- {{branch}} ---',
        },
        entry: {
            ru: '~g~[{{id}}] {{name}} | {{branch}} | ур.{{level}} | ${{money}} | {{status}}',
            ua: '~g~[{{id}}] {{name}} | {{branch}} | р.{{level}} | ${{money}} | {{status}}',
            en: '~g~[{{id}}] {{name}} | {{branch}} | lvl {{level}} | ${{money}} | {{status}}',
            de: '~g~[{{id}}] {{name}} | {{branch}} | Stufe {{level}} | ${{money}} | {{status}}',
            pl: '~g~[{{id}}] {{name}} | {{branch}} | poz.{{level}} | ${{money}} | {{status}}',
        },
        footer: {
            ru: 'Подробнее: /tree info <id>. Купить: /tree unlock <id>.',
            ua: 'Детальніше: /tree info <id>. Купити: /tree unlock <id>.',
            en: 'Details: /tree info <id>. Buy: /tree unlock <id>.',
            de: 'Details: /tree info <id>. Kaufen: /tree unlock <id>.',
            pl: 'Szczegoly: /tree info <id>. Kup: /tree unlock <id>.',
        },
    },
    info: {
        header: {
            ru: '~m~{{name}} ({{branch}}) - {{status}}',
            ua: '~m~{{name}} ({{branch}}) - {{status}}',
            en: '~m~{{name}} ({{branch}}) - {{status}}',
            de: '~m~{{name}} ({{branch}}) - {{status}}',
            pl: '~m~{{name}} ({{branch}}) - {{status}}',
        },
        description: {
            ru: '{{text}}',
            ua: '{{text}}',
            en: '{{text}}',
            de: '{{text}}',
            pl: '{{text}}',
        },
        requirementLevel: {
            ru: ' - Уровень орги: {{current}}/{{required}}',
            ua: ' - Рівень орги: {{current}}/{{required}}',
            en: ' - Org level: {{current}}/{{required}}',
            de: ' - Org-Stufe: {{current}}/{{required}}',
            pl: ' - Poziom org: {{current}}/{{required}}',
        },
        requirementMembers: {
            ru: ' - Участников: {{current}}/{{required}}',
            ua: ' - Учасників: {{current}}/{{required}}',
            en: ' - Members: {{current}}/{{required}}',
            de: ' - Mitglieder: {{current}}/{{required}}',
            pl: ' - Czlonkow: {{current}}/{{required}}',
        },
        requirementRepMin: {
            ru: ' - {{scale}}: {{current}}/{{required}}',
            ua: ' - {{scale}}: {{current}}/{{required}}',
            en: ' - {{scale}}: {{current}}/{{required}}',
            de: ' - {{scale}}: {{current}}/{{required}}',
            pl: ' - {{scale}}: {{current}}/{{required}}',
        },
        requirementMoney: {
            ru: ' - Казна орги: ${{current}}/${{required}}',
            ua: ' - Казна орги: ${{current}}/${{required}}',
            en: ' - Org treasury: ${{current}}/${{required}}',
            de: ' - Org-Kasse: ${{current}}/${{required}}',
            pl: ' - Skarbiec org: ${{current}}/${{required}}',
        },
        prerequisites: {
            ru: ' - Сначала нужно купить: {{list}}',
            ua: ' - Спершу потрібно купити: {{list}}',
            en: ' - Buy these first: {{list}}',
            de: ' - Zuerst kaufen: {{list}}',
            pl: ' - Najpierw kup: {{list}}',
        },
    },
    success: {
        nodeUnlocked: {
            ru: 'Улучшение куплено: {{name}}.',
            ua: 'Покращення куплено: {{name}}.',
            en: 'Upgrade bought: {{name}}.',
            de: 'Upgrade gekauft: {{name}}.',
            pl: 'Ulepszenie kupione: {{name}}.',
        },
        nodeUnlockStarted: {
            ru: 'Начато улучшение: {{name}}.',
            ua: 'Розпочато покращення: {{name}}.',
            en: 'Upgrade started: {{name}}.',
            de: 'Upgrade gestartet: {{name}}.',
            pl: 'Rozpoczeto ulepszenie: {{name}}.',
        },
    },
    errors: {
        notInGame: {
            ru: 'Сначала войдите в игру.',
            ua: 'Спочатку увійдіть у гру.',
            en: 'You must be in-game first.',
            de: 'Du musst zuerst im Spiel sein.',
            pl: 'Najpierw wejdz do gry.',
        },
        notInOrg: {
            ru: 'Вы не состоите в организации.',
            ua: 'Ви не перебуваєте в організації.',
            en: 'You are not in an organization.',
            de: 'Du bist in keiner Organisation.',
            pl: 'Nie nalezysz do organizacji.',
        },
        noPermission: {
            ru: 'Ваш ранг не имеет права покупать улучшения.',
            ua: 'Ваш ранг не має права купувати покращення.',
            en: 'Your rank cannot buy upgrades.',
            de: 'Dein Rang darf keine Upgrades kaufen.',
            pl: 'Twoja ranga nie moze kupowac ulepszen.',
        },
        unknownNode: {
            ru: 'Неизвестное улучшение.',
            ua: 'Невідоме покращення.',
            en: 'Unknown upgrade.',
            de: 'Unbekanntes Upgrade.',
            pl: 'Nieznane ulepszenie.',
        },
        alreadyPending: {
            ru: 'Это улучшение уже строится.',
            ua: 'Це покращення вже будується.',
            en: 'This upgrade is already building.',
            de: 'Dieses Upgrade ist bereits im Bau.',
            pl: 'To ulepszenie juz sie buduje.',
        },
        alreadyUnlocked: {
            ru: 'Это улучшение уже куплено.',
            ua: 'Це покращення вже куплено.',
            en: 'This upgrade is already bought.',
            de: 'Dieses Upgrade ist bereits gekauft.',
            pl: 'To ulepszenie jest juz kupione.',
        },
        prerequisiteMissing: {
            ru: 'Сначала нужно купить: {{list}}.',
            ua: 'Спершу потрібно купити: {{list}}.',
            en: 'Buy these first: {{list}}.',
            de: 'Kaufe zuerst: {{list}}.',
            pl: 'Najpierw kup: {{list}}.',
        },
        insufficientLevel: {
            ru: 'Недостаточный уровень орги: {{current}}/{{required}}.',
            ua: 'Недостатній рівень орги: {{current}}/{{required}}.',
            en: 'Insufficient org level: {{current}}/{{required}}.',
            de: 'Org-Stufe zu niedrig: {{current}}/{{required}}.',
            pl: 'Niewystarczajacy poziom org: {{current}}/{{required}}.',
        },
        notEnoughMembers: {
            ru: 'Мало участников: {{current}}/{{required}}.',
            ua: 'Мало учасників: {{current}}/{{required}}.',
            en: 'Not enough members: {{current}}/{{required}}.',
            de: 'Zu wenige Mitglieder: {{current}}/{{required}}.',
            pl: 'Za mało członków: {{current}}/{{required}}.',
        },
        insufficientReputation: {
            ru: 'Не хватает: {{scale}} {{current}}/{{required}}.',
            ua: 'Не вистачає: {{scale}} {{current}}/{{required}}.',
            en: 'Not enough: {{scale}} {{current}}/{{required}}.',
            de: 'Zu wenig: {{scale}} {{current}}/{{required}}.',
            pl: 'Za malo: {{scale}} {{current}}/{{required}}.',
        },
        insufficientFunds: {
            ru: 'Недостаточно средств в казне орги: ${{current}}/${{required}}.',
            ua: 'Недостатньо коштів у казні орги: ${{current}}/${{required}}.',
            en: 'Insufficient org treasury: ${{current}}/${{required}}.',
            de: 'Org-Kasse nicht ausreichend: ${{current}}/${{required}}.',
            pl: 'Niewystarczajacy skarbiec org: ${{current}}/${{required}}.',
        },
        furnitureLocked: {
            ru: 'Объект «{{furniture}}» ещё не куплен в дереве улучшений.',
            ua: 'Об\'єкт «{{furniture}}» ще не куплено в дереві покращень.',
            en: 'Object "{{furniture}}" has not been bought in the upgrade tree yet.',
            de: 'Objekt "{{furniture}}" wurde im Upgrade-Baum noch nicht gekauft.',
            pl: 'Obiekt "{{furniture}}" nie zostal jeszcze kupiony w drzewie ulepszen.',
        },
    },
    panel: {
        selectNode: {
            ru: 'Выберите улучшение',
            ua: 'Виберіть покращення',
            en: 'Select an upgrade',
            de: 'Upgrade auswaehlen',
            pl: 'Wybierz ulepszenie',
        },
        selectNodeHint: {
            ru: 'Нажмите на улучшение, чтобы увидеть, что оно даёт и что для него нужно.',
            ua: 'Натисніть на покращення, щоб побачити, що воно дає і що для нього потрібно.',
            en: 'Click an upgrade to see what it gives and what it asks for.',
            de: 'Klicke ein Upgrade an, um zu sehen, was es bringt und was es verlangt.',
            pl: 'Kliknij ulepszenie, aby zobaczyc, co daje i czego wymaga.',
        },
        effect: { ru: 'Эффект', ua: 'Ефект', en: 'Effect', de: 'Effekt', pl: 'Efekt' },
        requirements: { ru: 'Требования', ua: 'Вимоги', en: 'Requirements', de: 'Anforderungen', pl: 'Wymagania' },
        prereqs: { ru: 'Сначала купить', ua: 'Спершу купити', en: 'Buy first', de: 'Zuerst kaufen', pl: 'Najpierw kup' },
        orgLevel: { ru: 'Уровень орги', ua: 'Рівень орги', en: 'Org level', de: 'Org-Stufe', pl: 'Poziom org' },
        members: { ru: 'Участников', ua: 'Учасників', en: 'Members', de: 'Mitglieder', pl: 'Członków' },
        reputation: { ru: 'Репутация', ua: 'Репутація', en: 'Reputation', de: 'Reputation', pl: 'Reputacja' },
        money: { ru: 'Казна', ua: 'Казна', en: 'Treasury', de: 'Kasse', pl: 'Skarbiec' },
        unlock: { ru: 'Купить', ua: 'Купити', en: 'Buy', de: 'Kaufen', pl: 'Kup' },
        alreadyUnlocked: { ru: 'Уже куплено', ua: 'Вже куплено', en: 'Already bought', de: 'Bereits gekauft', pl: 'Juz kupione' },
        noPermission: { ru: 'Нет прав на покупку', ua: 'Немає прав на купівлю', en: 'No permission', de: 'Keine Berechtigung', pl: 'Brak uprawnien' },
        requirementsNotMet: { ru: 'Требования не выполнены', ua: 'Вимоги не виконано', en: 'Requirements not met', de: 'Anforderungen nicht erfuellt', pl: 'Wymagania nie spelnione' },
        requirementsTitle: { ru: 'Требования к разблокировке', ua: 'Вимоги до розблокування', en: 'Unlock requirements', de: 'Freischaltungsanforderungen', pl: 'Wymagania do odblokowania' },
        priceTitle: { ru: 'Цена улучшения', ua: 'Ціна покращення', en: 'Upgrade price', de: 'Upgrade-Preis', pl: 'Cena ulepszenia' },
        timeTitle: { ru: 'Время улучшения', ua: 'Час покращення', en: 'Upgrade time', de: 'Upgrade-Zeit', pl: 'Czas ulepszenia' },
        instant: { ru: 'Мгновенно', ua: 'Миттєво', en: 'Instant', de: 'Sofort', pl: 'Natychmiast' },
        inProgress: { ru: 'В процессе', ua: 'У процесi', en: 'In progress', de: 'In Bearbeitung', pl: 'W toku' },
        timeRemaining: { ru: 'Осталось', ua: 'Залишилось', en: 'Remaining', de: 'Verbleibend', pl: 'Pozostalo' },
    },
    duration: {
        seconds: { ru: '{{value}}с', ua: '{{value}}с', en: '{{value}}s', de: '{{value}}s', pl: '{{value}}s' },
        minutes: { ru: '{{value}}м', ua: '{{value}}хв', en: '{{value}}m', de: '{{value}}m', pl: '{{value}}m' },
        hours: { ru: '{{value}}ч', ua: '{{value}}год', en: '{{value}}h', de: '{{value}}h', pl: '{{value}}g' },
        days: { ru: '{{value}}д', ua: '{{value}}д', en: '{{value}}d', de: '{{value}}t', pl: '{{value}}d' },
    },
    nodes,
};
