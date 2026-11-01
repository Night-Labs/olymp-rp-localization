// The remaining task minigames of Inside Job (webviews `systems/insideJob/tasks`): animal feed, the mixture's recipe and mix,
// the freezer code's print and entry, the data backup.
export const gamesLong = {
    animalFeed: {
        cage: { ru: 'Карточка клетки', ua: 'Картка клітки', en: 'Cage card', de: 'Käfigkarte' },
        dose: { ru: 'Норма корма', ua: 'Норма корму', en: 'Feed dose', de: 'Futtermenge' },
        scale: { ru: 'Весы', ua: 'Ваги', en: 'Scale', de: 'Waage' },
        unit: { ru: 'г', ua: 'г', en: 'g', de: 'g' },
        hint: {
            ru: 'Держи, чтобы сыпать, и отпусти на норме',
            ua: 'Тримай, щоб сипати, і відпусти на нормі',
            en: 'Hold to pour, let go at the dose',
            de: 'Halten zum Einfüllen, bei der Menge loslassen',
        },
        overfill: { ru: 'Слишком много: кормушка опустошена', ua: 'Забагато: годівницю спорожнено', en: 'Too much: the feeder was emptied', de: 'Zu viel: Der Napf wurde geleert' },
        pour: { ru: 'Сыпать', ua: 'Сипати', en: 'Pour', de: 'Einfüllen' },
        animals: {
            mouse: { ru: 'Мыши', ua: 'Миші', en: 'Mice', de: 'Mäuse' },
            raven: { ru: 'Ворон', ua: 'Ворон', en: 'Raven', de: 'Rabe' },
            rabbit: { ru: 'Кролик', ua: 'Кролик', en: 'Rabbit', de: 'Kaninchen' },
            beagle: { ru: 'Бигль', ua: 'Бігль', en: 'Beagle', de: 'Beagle' },
        },
    },

    // The mixture's three reagents in the recipe's order (`task.data.recipe`, the mix's proof).
    reagents: {
        saline: { ru: 'Физраствор', ua: 'Фізрозчин', en: 'Saline', de: 'Kochsalzlösung' },
        ethanol: { ru: 'Этанол', ua: 'Етанол', en: 'Ethanol', de: 'Ethanol' },
        glycerol: { ru: 'Глицерин', ua: 'Гліцерин', en: 'Glycerol', de: 'Glycerin' },
    },

    recipe: {
        label: { ru: 'Рецепт раствора', ua: 'Рецепт розчину', en: 'Solution recipe', de: 'Rezept der Lösung' },
        remember: {
            ru: 'Запомни доли: у станции смешивания рецепта не будет',
            ua: "Запам'ятай частки: біля станції змішування рецепта не буде",
            en: 'Remember the parts: the mixing station will not show the recipe',
            de: 'Merk dir die Anteile: Die Mischstation zeigt das Rezept nicht',
        },
        noted: { ru: 'Готово', ua: 'Готово', en: 'Noted', de: 'Gemerkt' },
    },

    mix: {
        hint: { ru: 'Выставь доли по рецепту', ua: 'Вистав частки за рецептом', en: 'Set the parts from the recipe', de: 'Stell die Anteile nach dem Rezept ein' },
        total: { ru: 'Всего', ua: 'Усього', en: 'Total', de: 'Gesamt' },
        mix: { ru: 'Смешать', ua: 'Змішати', en: 'Mix', de: 'Mischen' },
    },

    codePrint: {
        slip: { ru: 'Код морозильника', ua: 'Код морозильника', en: 'Freezer code', de: 'Code Gefrierschrank' },
        remember: {
            ru: 'Запомни код: замок морозильника спросит его',
            ua: "Запам'ятай код: замок морозильника запитає його",
            en: 'Remember the code: the freezer lock will ask for it',
            de: 'Merk dir den Code: Das Schloss am Gefrierschrank fragt danach',
        },
        take: { ru: 'Забрать', ua: 'Забрати', en: 'Take', de: 'Nehmen' },
    },

    codeEntry: {
        label: { ru: 'Замок морозильника', ua: 'Замок морозильника', en: 'Freezer lock', de: 'Schloss Gefrierschrank' },
        hint: { ru: 'Введи код с распечатки', ua: 'Введи код із роздруківки', en: 'Enter the code from the printout', de: 'Gib den Code vom Ausdruck ein' },
    },

    backup: {
        starting: { ru: 'Подключение...', ua: 'Підключення...', en: 'Connecting...', de: 'Verbinden...' },
        uploading: { ru: 'Идёт копирование', ua: 'Триває копіювання', en: 'Uploading', de: 'Wird hochgeladen' },
        paused: { ru: 'Пауза: оставайся в серверной', ua: 'Пауза: залишайся в серверній', en: 'Paused: stay in the server room', de: 'Pausiert: Bleib im Serverraum' },
        done: { ru: 'Копия готова', ua: 'Копію готово', en: 'Backup complete', de: 'Sicherung fertig' },
        left: { ru: 'Осталось', ua: 'Залишилось', en: 'Time left', de: 'Verbleibend' },
        hint: {
            ru: 'Экран можно закрыть: копия идёт, пока ты в комнате',
            ua: 'Екран можна закрити: копія йде, поки ти в кімнаті',
            en: 'You can close the screen: it runs while you stay in the room',
            de: 'Du kannst den Bildschirm schließen: Es läuft, solange du im Raum bleibst',
        },
    },
};
