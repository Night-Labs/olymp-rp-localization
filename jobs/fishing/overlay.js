// The in-world fishing overlays: the rod HUD, the bite, the fight and the catch card (webviews/src/systems/fishing/overlays).
export default {
    // The rod in the hands, between casts and while the float is out.
    cast: {
        ru: 'Забросить',
        ua: 'Закинути',
        en: 'Cast',
        de: 'Auswerfen',
    },
    casting: {
        ru: 'Заброс',
        ua: 'Закидання',
        en: 'Casting',
        de: 'Wurf',
    },
    waiting: {
        ru: 'Ждём поклёвку',
        ua: 'Чекаємо на клювання',
        en: 'Waiting for a bite',
        de: 'Warten auf einen Biss',
    },
    reelIn: {
        ru: 'Вытащить леску',
        ua: 'Витягнути волосінь',
        en: 'Reel in',
        de: 'Einholen',
    },
    putAway: {
        ru: 'Шаг в сторону - убрать удочку',
        ua: 'Крок убік - прибрати вудку',
        en: 'Step away to put the rod down',
        de: 'Zur Seite gehen, um die Angel wegzulegen',
    },
    // The rod's HUD (fishing/rod): the word with the rod in hand, the hints row, the view over the pond or under the water.
    ready: {
        ru: 'Готово к забросу',
        ua: 'Готово до закиду',
        en: 'Ready to cast',
        de: 'Bereit zum Wurf',
    },
    castHold: {
        ru: '(Зажмите) Забросить удочку',
        ua: '(Затисніть) Закинути вудку',
        en: '(Hold) Cast the rod',
        de: '(Halten) Rute auswerfen',
    },
    putAwayKey: {
        ru: 'Убрать удочку',
        ua: 'Прибрати вудку',
        en: 'Put the rod away',
        de: 'Rute wegstecken',
    },
    view: {
        fish: {
            ru: 'Доступная рыба',
            ua: 'Доступна риба',
            en: 'Fish here',
            de: 'Fische hier',
        },
        hideFish: {
            ru: 'Скрыть рыбу',
            ua: 'Сховати рибу',
            en: 'Hide the fish',
            de: 'Fische ausblenden',
        },
        side: {
            ru: 'Вид сбоку',
            ua: 'Вид збоку',
            en: 'Side view',
            de: 'Seitenansicht',
        },
        top: {
            ru: 'Вид сверху',
            ua: 'Вид зверху',
            en: 'Top view',
            de: 'Draufsicht',
        },
    },
    bait: {
        ru: 'Наживка',
        ua: 'Наживка',
        en: 'Bait',
        de: 'Köder',
    },
    lure: {
        ru: 'Приманка',
        ua: 'Приманка',
        en: 'Lure',
        de: 'Kunstköder',
    },
    reeled: {
        ru: 'Подтянуто',
        ua: 'Підтягнуто',
        en: 'Reeled in',
        de: 'Eingeholt',
    },
    // What the band the line landed in does, shown for a moment after the cast.
    zoneGives: {
        ru: 'Что даёт зона',
        ua: 'Що дає зона',
        en: 'This zone gives',
        de: 'Diese Zone gibt',
    },
    effects: {
        wait: {
            ru: 'Ожидание',
            ua: 'Очікування',
            en: 'Wait',
            de: 'Wartezeit',
        },
        trophy: {
            ru: 'Трофей',
            ua: 'Трофей',
            en: 'Trophy',
            de: 'Trophäe',
        },
        rare: {
            ru: 'Редкая рыба',
            ua: 'Рідкісна риба',
            en: 'Rare fish',
            de: 'Seltene Fische',
        },
        none: {
            ru: 'Без бонусов и штрафов',
            ua: 'Без бонусів і штрафів',
            en: 'No bonus, no penalty',
            de: 'Kein Bonus, keine Strafe',
        },
    },
    // What becomes of a landed fish (owner 2026-11-03): switched in R's list of places (fishing/rod/PickerList), named in
    // the rod HUD column's "Catch" block when the card no longer asks.
    catchMode: {
        title: {
            ru: 'Что делать с уловом',
            ua: 'Що робити з уловом',
            en: 'What to do with the catch',
            de: 'Was mit dem Fang geschieht',
        },
        ask: {
            ru: 'Спрашивать',
            ua: 'Питати',
            en: 'Ask',
            de: 'Fragen',
        },
        take: {
            ru: 'Забирать',
            ua: 'Забирати',
            en: 'Keep',
            de: 'Behalten',
        },
        release: {
            ru: 'Отпускать',
            ua: 'Відпускати',
            en: 'Release',
            de: 'Freilassen',
        },
        autoTake: {
            ru: 'Забирать автоматически',
            ua: 'Забирати автоматично',
            en: 'Keep automatically',
            de: 'Automatisch behalten',
        },
        autoRelease: {
            ru: 'Отпускать автоматически',
            ua: 'Відпускати автоматично',
            en: 'Release automatically',
            de: 'Automatisch freilassen',
        },
    },
    // Where a taken fish goes, picked in the menu R opens (also on the catch card); the headers of its item notify.
    target: {
        hintMove: {
            ru: 'Выбор',
            ua: 'Вибір',
            en: 'Select',
            de: 'Auswählen',
        },
        hintPick: {
            ru: 'Готово',
            ua: 'Готово',
            en: 'Confirm',
            de: 'Bestätigen',
        },
        label: {
            ru: 'Улов',
            ua: 'Улов',
            en: 'Catch',
            de: 'Fang',
        },
        pockets: {
            ru: 'Инвентарь',
            ua: 'Інвентар',
            en: 'Inventory',
            de: 'Inventar',
        },
        backpack: {
            ru: 'Рюкзак',
            ua: 'Рюкзак',
            en: 'Backpack',
            de: 'Rucksack',
        },
        trunk: {
            ru: 'Багажник {{name}}',
            ua: 'Багажник {{name}}',
            en: '{{name}} trunk',
            de: 'Kofferraum {{name}}',
        },
        intoBackpack: {
            ru: 'В рюкзак',
            ua: 'У рюкзак',
            en: 'Into the backpack',
            de: 'In den Rucksack',
        },
        intoTrunk: {
            ru: 'В багажник',
            ua: 'У багажник',
            en: 'Into the trunk',
            de: 'In den Kofferraum',
        },
        // The list of places in the rod HUD's column (fishing/rod/PickerList).
        title: {
            ru: 'Куда класть улов',
            ua: 'Куди класти улов',
            en: 'Where the catch goes',
            de: 'Wohin der Fang kommt',
        },
        choose: {
            ru: 'Выбор места',
            ua: 'Вибір місця',
            en: 'Choose a place',
            de: 'Ort wählen',
        },
        select: {
            ru: 'Выбрать',
            ua: 'Вибрати',
            en: 'Select',
            de: 'Auswählen',
        },
        close: {
            ru: 'Закрыть',
            ua: 'Закрити',
            en: 'Close',
            de: 'Schließen',
        },
        metres: {
            ru: '{{m}} м',
            ua: '{{m}} м',
            en: '{{m}} m',
            de: '{{m}} m',
        },
        none: {
            ru: 'Рядом нет транспорта',
            ua: 'Поруч немає транспорту',
            en: 'No vehicle nearby',
            de: 'Kein Fahrzeug in der Nähe',
        },
        noneHint: {
            ru: 'Подойдите к своей машине или лодке ближе {{m}} м - её багажник появится здесь.',
            ua: 'Підійдіть до своєї машини чи човна ближче {{m}} м - її багажник зʼявиться тут.',
            en: 'Get within {{m}} m of your car or boat - its trunk shows up here.',
            de: 'Geh bis auf {{m}} m an dein Auto oder Boot heran - sein Kofferraum erscheint hier.',
        },
        trunkAt: {
            ru: 'Багажник, {{m}} м',
            ua: 'Багажник, {{m}} м',
            en: 'Trunk, {{m}} m',
            de: 'Kofferraum, {{m}} m',
        },
        worn: {
            ru: 'Надет на вас',
            ua: 'Одягнений на вас',
            en: 'On your back',
            de: 'Auf dem Rücken',
        },
        always: {
            ru: 'Всегда под рукой',
            ua: 'Завжди під рукою',
            en: 'Always at hand',
            de: 'Immer zur Hand',
        },
    },
    noBait: {
        ru: 'Нет наживки',
        ua: 'Немає наживки',
        en: 'No bait',
        de: 'Kein Köder',
    },
    // The rod's tackle slots on the right of the HUD and the part picker a slot opens.
    tackle: {
        // The heading over the slots, as "Catch" heads the place under it.
        label: {
            ru: 'Оснащение',
            ua: 'Оснащення',
            en: 'Tackle',
            de: 'Ausrüstung',
        },
        noLine: {
            ru: 'Нет лески',
            ua: 'Немає волосіні',
            en: 'No line',
            de: 'Keine Schnur',
        },
        stockReel: {
            ru: 'Стандартная катушка',
            ua: 'Стандартна котушка',
            en: 'Stock reel',
            de: 'Standardrolle',
        },
        pick: {
            ru: 'Установить',
            ua: 'Встановити',
            en: 'Fit',
            de: 'Anbringen',
        },
    },
    bitesHere: {
        ru: 'Здесь клюёт',
        ua: 'Тут клює',
        en: 'Biting here',
        de: 'Hier beißt',
    },

    // The bite: the strike window.
    bite: {
        ru: 'Клюёт!',
        ua: 'Клює!',
        en: 'A bite!',
        de: 'Biss!',
    },
    strike: {
        ru: 'Подсечь',
        ua: 'Підсікти',
        en: 'Strike',
        de: 'Anschlagen',
    },

    // The fight.
    tension: {
        ru: 'Натяжение',
        ua: 'Натяг',
        en: 'Tension',
        de: 'Spannung',
    },
    line: {
        ru: 'Леска',
        ua: 'Волосінь',
        en: 'Line',
        de: 'Schnur',
    },
    fish: {
        ru: 'Рыба',
        ua: 'Риба',
        en: 'Fish',
        de: 'Fisch',
    },
    holdToReel: {
        ru: 'Держать - подматывать',
        ua: 'Тримати - підмотувати',
        en: 'Hold to reel',
        de: 'Halten zum Einholen',
    },
    states: {
        reel: {
            ru: 'Держите ЛКМ, чтобы подматывать',
            ua: 'Тримайте ЛКМ, щоб підмотувати',
            en: 'Hold LMB to reel in',
            de: 'Halte die linke Maustaste zum Einholen',
        },
        reeling: {
            ru: 'Подматываем',
            ua: 'Підмотуємо',
            en: 'Reeling in',
            de: 'Einholen',
        },
        telegraph: {
            ru: 'Сейчас дёрнет - отпустите!',
            ua: 'Зараз смикне - відпустіть!',
            en: 'It is about to run - let go!',
            de: 'Gleich zieht er - loslassen!',
        },
        surge: {
            ru: 'Рывок! Не тяните',
            ua: 'Ривок! Не тягніть',
            en: 'It runs! Do not pull',
            de: 'Flucht! Nicht ziehen',
        },
        red: {
            ru: 'Леска на пределе',
            ua: 'Волосінь на межі',
            en: 'The line is at its limit',
            de: 'Die Schnur ist am Limit',
        },
        moment: {
            ru: 'Подматывайте!',
            ua: 'Підмотуйте!',
            en: 'Reel now!',
            de: 'Jetzt einholen!',
        },
        tired: {
            ru: 'Рыба устала',
            ua: 'Риба втомилася',
            en: 'The fish is tiring',
            de: 'Der Fisch wird müde',
        },
        against: {
            ru: 'Ведите удочку против хода рыбы',
            ua: 'Ведіть вудку проти ходу риби',
            en: 'Steer the rod against the fish',
            de: 'Führe die Rute gegen den Fisch',
        },
    },
    steer: {
        ru: 'Вести удочку',
        ua: 'Вести вудку',
        en: 'Steer the rod',
        de: 'Rute führen',
    },

    // The cast's scale: let LMB go with the marker in the zone; how the cast went.
    castRelease: {
        ru: 'Отпустите в зоне',
        ua: 'Відпустіть у зоні',
        en: 'Let go in the zone',
        de: 'In der Zone loslassen',
    },
    castQuality: {
        perfect: {
            ru: 'Идеальный заброс',
            ua: 'Ідеальний закид',
            en: 'Perfect cast',
            de: 'Perfekter Wurf',
        },
        good: {
            ru: 'Хороший заброс',
            ua: 'Добрий закид',
            en: 'Good cast',
            de: 'Guter Wurf',
        },
        fair: {
            ru: 'Обычный заброс',
            ua: 'Звичайний закид',
            en: 'Fair cast',
            de: 'Ordentlicher Wurf',
        },
        weak: {
            ru: 'Слабый заброс',
            ua: 'Слабкий закид',
            en: 'Weak cast',
            de: 'Schwacher Wurf',
        },
        miss: {
            ru: 'Неудачный заброс',
            ua: 'Невдалий закид',
            en: 'Poor cast',
            de: 'Missglückter Wurf',
        },
    },

    // The catch card.
    catch: {
        caught: {
            ru: 'Улов',
            ua: 'Улов',
            en: 'Catch',
            de: 'Fang',
        },
        trophy: {
            ru: 'Трофей!',
            ua: 'Трофей!',
            en: 'Trophy!',
            de: 'Trophäe!',
        },
        record: {
            ru: 'Новый рекорд',
            ua: 'Новий рекорд',
            en: 'New record',
            de: 'Neuer Rekord',
        },
        previousBest: {
            ru: 'было {{mass}}',
            ua: 'було {{mass}}',
            en: 'was {{mass}}',
            de: 'vorher {{mass}}',
        },
        firstSpecies: {
            ru: 'Новый вид',
            ua: 'Новий вид',
            en: 'New species',
            de: 'Neue Art',
        },
        take: {
            ru: 'Забрать',
            ua: 'Забрати',
            en: 'Keep',
            de: 'Behalten',
        },
        release: {
            ru: 'Отпустить',
            ua: 'Відпустити',
            en: 'Release',
            de: 'Freilassen',
        },
        taken: {
            ru: 'В карманах',
            ua: 'У кишенях',
            en: 'In your pockets',
            de: 'In deinen Taschen',
        },
        released: {
            ru: 'Отпущена',
            ua: 'Відпущена',
            en: 'Released',
            de: 'Freigelassen',
        },
        // The card's status in place of its buttons when the catch mode decided (owner 2026-11-03..04): where the fish went;
        // a vehicle by its name and plate ("BMW M5 F90 #UWU").
        autoTaken: {
            ru: 'Забрано в {{place}}',
            ua: 'Забрано в {{place}}',
            en: 'Stored in {{place}}',
            de: 'Verstaut in {{place}}',
        },
        autoPockets: {
            ru: 'Забрано в инвентарь',
            ua: 'Забрано в інвентар',
            en: 'Stored in the inventory',
            de: 'Im Inventar verstaut',
        },
        autoBackpack: {
            ru: 'Забрано в рюкзак',
            ua: 'Забрано в рюкзак',
            en: 'Stored in the backpack',
            de: 'Im Rucksack verstaut',
        },
        autoGround: {
            ru: 'Нет места: лежит рядом',
            ua: 'Немає місця: лежить поруч',
            en: 'No room: dropped beside you',
            de: 'Kein Platz: liegt neben dir',
        },
        exp: {
            ru: '+{{exp}} опыта',
            ua: '+{{exp}} досвіду',
            en: '+{{exp}} XP',
            de: '+{{exp}} EP',
        },
        contract: {
            ru: 'Контракт: {{progress}} / {{count}}',
            ua: 'Контракт: {{progress}} / {{count}}',
            en: 'Contract: {{progress}} / {{count}}',
            de: 'Auftrag: {{progress}} / {{count}}',
        },
        contractDone: {
            ru: 'Контракт выполнен',
            ua: 'Контракт виконано',
            en: 'Contract complete',
            de: 'Auftrag erfüllt',
        },
    },
};
