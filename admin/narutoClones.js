// Shadow clone control panel (`/naruto`), page systems/admin/narutoClones.
export default {
    title: { ru: 'Теневые клоны', ua: 'Тіньові клони', en: 'Shadow clones', de: 'Schattenklone' },
    counter: { ru: '{{alive}} из {{max}}', ua: '{{alive}} з {{max}}', en: '{{alive}} of {{max}}', de: '{{alive}} von {{max}}' },
    health: { ru: 'Здоровье {{value}}%', ua: "Здоров'я {{value}}%", en: 'Health {{value}}%', de: 'Gesundheit {{value}}%' },
    noClones: { ru: 'Клонов нет', ua: 'Клонів немає', en: 'No clones', de: 'Keine Klone' },
    close: { ru: 'Закрыть', ua: 'Закрити', en: 'Close', de: 'Schließen' },

    sections: {
        summon: { ru: 'Призыв', ua: 'Призов', en: 'Summon', de: 'Beschwörung' },
        orders: { ru: 'Приказ', ua: 'Наказ', en: 'Order', de: 'Befehl' },
        look: { ru: 'Превращение', ua: 'Перетворення', en: 'Transformation', de: 'Verwandlung' },
        combat: { ru: 'Бой', ua: 'Бій', en: 'Combat', de: 'Kampf' },
        weapon: { ru: 'Оружие', ua: 'Зброя', en: 'Weapon', de: 'Waffe' },
        health: { ru: 'Здоровье клона', ua: "Здоров'я клона", en: 'Clone health', de: 'Klon-Gesundheit' },
        vehicles: { ru: 'Транспорт', ua: 'Транспорт', en: 'Vehicles', de: 'Fahrzeuge' },
        behaviour: { ru: 'Поведение', ua: 'Поведінка', en: 'Behaviour', de: 'Verhalten' },
        emotes: { ru: 'Все вместе', ua: 'Усі разом', en: 'All together', de: 'Alle zusammen' },
        vanish: { ru: 'Исчезновение', ua: 'Зникнення', en: 'Vanishing', de: 'Verschwinden' },
    },

    actions: {
        summon: { ru: 'Призвать', ua: 'Призвати', en: 'Summon', de: 'Beschwören' },
        dismiss: { ru: 'Развеять всех', ua: 'Розвіяти всіх', en: 'Dispel all', de: 'Alle auflösen' },
        recall: { ru: 'Собрать ко мне', ua: 'Зібрати до мене', en: 'Recall to me', de: 'Zu mir rufen' },
        substitute: { ru: 'Подмена', ua: 'Підміна', en: 'Substitution', de: 'Tausch' },
        shuffle: { ru: 'Перетасовка', ua: 'Перетасовка', en: 'Shuffle', de: 'Mischen' },
        henge: { ru: 'Облик', ua: 'Подоба', en: 'Look', de: 'Aussehen' },
        ownLook: { ru: 'Вернуть свой', ua: 'Повернути свій', en: 'Back to mine', de: 'Mein eigenes' },
        ceasefire: { ru: 'Отбой', ua: 'Відбій', en: 'Cease fire', de: 'Feuer einstellen' },
        attack: { ru: 'Атаковать', ua: 'Атакувати', en: 'Attack', de: 'Angreifen' },
        heal: { ru: 'Вылечить', ua: 'Вилікувати', en: 'Heal', de: 'Heilen' },
        board: { ru: 'По машинам', ua: 'По машинах', en: 'Get in', de: 'Einsteigen' },
        disembark: { ru: 'На выход', ua: 'На вихід', en: 'Get out', de: 'Aussteigen' },
        stop: { ru: 'Хватит', ua: 'Досить', en: 'Stop', de: 'Stopp' },
    },

    orders: {
        follow: { ru: 'За мной', ua: 'За мною', en: 'Follow', de: 'Folgen' },
        formation: { ru: 'Строй', ua: 'Стрій', en: 'Formation', de: 'Formation' },
        hold: { ru: 'Стоять', ua: 'Стояти', en: 'Hold', de: 'Stehen' },
        roam: { ru: 'Бродить', ua: 'Бродити', en: 'Roam', de: 'Umherziehen' },
    },

    combat: {
        assist: { ru: 'Атаковать мою цель', ua: 'Атакувати мою ціль', en: 'Attack my target', de: 'Mein Ziel angreifen' },
        assistHint: {
            ru: 'Кого бьёшь ты (игрок, зверь на охоте, прохожий), того бьют и клоны',
            ua: 'Кого б’єш ти (гравець, звір на полюванні, перехожий), того б’ють і клони',
            en: 'Whoever you hit (a player, a hunted animal, a passer-by), the clones hit too',
            de: 'Wen du triffst (Spieler, gejagtes Tier, Passant), den greifen auch die Klone an',
        },
        defend: { ru: 'Защищать меня', ua: 'Захищати мене', en: 'Defend me', de: 'Mich verteidigen' },
        defendHint: {
            ru: 'Кто ударит тебя или клона, станет целью',
            ua: 'Хто вдарить тебе або клона, стане ціллю',
            en: 'Whoever hits you or a clone becomes the target',
            de: 'Wer dich oder einen Klon trifft, wird zum Ziel',
        },
        autoSubstitute: { ru: 'Авто-подмена', ua: 'Авто-підміна', en: 'Auto substitution', de: 'Auto-Tausch' },
        autoSubstituteHint: {
            ru: 'Если удар оставит тебе {{value}} HP или меньше, ты меняешься местами с ближайшим клоном',
            ua: 'Якщо удар залишить тобі {{value}} HP або менше, ти міняєшся місцями з найближчим клоном',
            en: 'If a hit would leave you at {{value}} HP or less, you swap places with the nearest clone',
            de: 'Wenn dich ein Treffer auf {{value}} HP oder weniger bringt, tauschst du den Platz mit dem nächsten Klon',
        },
        target: { ru: 'Цель', ua: 'Ціль', en: 'Target', de: 'Ziel' },
        npc: { ru: 'Прохожий', ua: 'Перехожий', en: 'Passer-by', de: 'Passant' },
        nobody: { ru: 'Рядом никого', ua: 'Поруч нікого', en: 'Nobody nearby', de: 'Niemand in der Nähe' },
        distance: { ru: '{{value}} м', ua: '{{value}} м', en: '{{value}} m', de: '{{value}} m' },
    },

    look: {
        label: { ru: 'Облик клонов', ua: 'Подоба клонів', en: 'Clones look like', de: 'Klone sehen aus wie' },
        own: { ru: 'Ты', ua: 'Ти', en: 'You', de: 'Du' },
        hint: { ru: 'Игрока выбирают в списке ниже', ua: 'Гравця обирають у списку нижче', en: 'Pick a player in the list below', de: 'Spieler in der Liste unten wählen' },
    },

    weapons: {
        unarmed: { ru: 'Кулаки', ua: 'Кулаки', en: 'Fists', de: 'Fäuste' },
        bat: { ru: 'Бита', ua: 'Біта', en: 'Bat', de: 'Schläger' },
        machete: { ru: 'Мачете', ua: 'Мачете', en: 'Machete', de: 'Machete' },
        pistol: { ru: 'Пистолет', ua: 'Пістолет', en: 'Pistol', de: 'Pistole' },
        smg: { ru: 'ПП', ua: 'ПП', en: 'SMG', de: 'MP' },
        rifle: { ru: 'Карабин', ua: 'Карабін', en: 'Carbine', de: 'Karabiner' },
        shotgun: { ru: 'Дробовик', ua: 'Дробовик', en: 'Shotgun', de: 'Schrotflinte' },
        sniper: { ru: 'Снайперка', ua: 'Снайперка', en: 'Sniper', de: 'Sniper' },
        rpg: { ru: 'РПГ', ua: 'РПГ', en: 'RPG', de: 'RPG' },
        minigun: { ru: 'Миниган', ua: 'Мініган', en: 'Minigun', de: 'Minigun' },
    },

    vehicles: {
        autoRide: { ru: 'Ездить со мной', ua: 'Їздити зі мною', en: 'Ride with me', de: 'Mit mir fahren' },
        autoRideHint: {
            ru: 'Садятся, когда ты садишься, и выходят вместе с тобой',
            ua: 'Сідають, коли ти сідаєш, і виходять разом з тобою',
            en: 'They get in when you do and get out with you',
            de: 'Sie steigen mit dir ein und mit dir aus',
        },
        riding: { ru: 'В машинах: {{value}}', ua: 'У машинах: {{value}}', en: 'In vehicles: {{value}}', de: 'In Fahrzeugen: {{value}}' },
        drivers: { ru: 'Водители', ua: 'Водії', en: 'Drivers', de: 'Fahrer' },
    },

    drive: {
        follow: { ru: 'За мной', ua: 'За мною', en: 'Follow me', de: 'Mir folgen' },
        convoy: { ru: 'Колонна', ua: 'Колона', en: 'Convoy', de: 'Konvoi' },
        joyride: { ru: 'Катаются', ua: 'Катаються', en: 'Joyride', de: 'Spritztour' },
    },

    behaviour: {
        mirror: { ru: 'Повторять мои анимации', ua: 'Повторювати мої анімації', en: 'Copy my animations', de: 'Meine Animationen kopieren' },
        idle: { ru: 'Живут сами', ua: 'Живуть самі', en: 'Idle life', de: 'Eigenleben' },
        idleHint: {
            ru: 'Когда ты стоишь: едят, пьют, курят, сидят в телефоне, стреляют в небо',
            ua: 'Коли ти стоїш: їдять, п’ють, курять, сидять у телефоні, стріляють у небо',
            en: 'While you stand: they eat, drink, smoke, use the phone, shoot in the air',
            de: 'Wenn du stehst: sie essen, trinken, rauchen, tippen am Handy, schießen in die Luft',
        },
    },

    emotes: {
        cheer: { ru: 'Болеть', ua: 'Вболівати', en: 'Cheer', de: 'Jubeln' },
        party: { ru: 'Тусить', ua: 'Тусити', en: 'Party', de: 'Feiern' },
        flex: { ru: 'Мышцы', ua: "М'язи", en: 'Flex', de: 'Muskeln' },
        yoga: { ru: 'Йога', ua: 'Йога', en: 'Yoga', de: 'Yoga' },
        pushups: { ru: 'Отжимания', ua: 'Віджимання', en: 'Push-ups', de: 'Liegestütze' },
        film: { ru: 'Снимать', ua: 'Знімати', en: 'Film', de: 'Filmen' },
        smoke: { ru: 'Курить', ua: 'Курити', en: 'Smoke', de: 'Rauchen' },
        binoculars: { ru: 'Бинокль', ua: 'Бінокль', en: 'Binoculars', de: 'Fernglas' },
        handsUp: { ru: 'Руки вверх', ua: 'Руки вгору', en: 'Hands up', de: 'Hände hoch' },
    },

    vanish: {
        hint: {
            ru: 'Выбор сразу показывает облачко перед тобой',
            ua: 'Вибір одразу показує хмарку перед тобою',
            en: 'Picking one shows the puff right in front of you',
            de: 'Die Auswahl zeigt die Wolke direkt vor dir',
        },
        effects: {
            clone: { ru: 'Облачко клона', ua: 'Хмарка клона', en: 'Clone puff', de: 'Klon-Wölkchen' },
            whiteSmoke: { ru: 'Белый дым', ua: 'Білий дим', en: 'White smoke', de: 'Weißer Rauch' },
            beast: { ru: 'Дым с искрами', ua: 'Дим з іскрами', en: 'Smoke and sparks', de: 'Rauch mit Funken' },
            flash: { ru: 'Вспышка и дым', ua: 'Спалах і дим', en: 'Flash and smoke', de: 'Blitz und Rauch' },
            green: { ru: 'Зелёный хлопок', ua: 'Зелений хлопок', en: 'Green pop', de: 'Grüner Knall' },
            pink: { ru: 'Розовый дым', ua: 'Рожевий дим', en: 'Pink smoke', de: 'Rosa Rauch' },
        },
    },
};
