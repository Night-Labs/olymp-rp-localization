// The task frame and the lab-bench minigames of Inside Job (webviews `systems/insideJob/tasks`): badge, centrifuge, pipette,
// microscope, valve, labels.
export const gamesLab = {
    frame: {
        // The subtitle of a task of several steps.
        step: { ru: 'Этап {{step}} из {{steps}}', ua: 'Етап {{step}} з {{steps}}', en: 'Step {{step}} of {{steps}}', de: 'Schritt {{step}} von {{steps}}' },
    },

    badge: {
        hint: {
            ru: 'Перетащи пропуск на считыватель и держи, пока идёт скан',
            ua: 'Перетягни перепустку на зчитувач і тримай, поки триває скан',
            en: 'Drag the badge onto the reader and hold it there while it scans',
            de: 'Zieh den Ausweis auf das Lesegerät und halte ihn dort, bis der Scan durch ist',
        },
        scanning: { ru: 'Сканирование...', ua: 'Сканування...', en: 'Scanning...', de: 'Wird gescannt...' },
        early: {
            ru: 'Держи пропуск, пока линия не дойдёт до конца',
            ua: 'Тримай перепустку, доки лінія не дійде до кінця',
            en: 'Keep it on the reader until the line reaches the end',
            de: 'Lass ihn liegen, bis die Linie unten ankommt',
        },
        misread: {
            ru: 'Ошибка чтения. Убери пропуск и приложи снова',
            ua: 'Помилка зчитування. Прибери перепустку й приклади знову',
            en: 'Misread. Take the badge off and try again',
            de: 'Lesefehler. Nimm den Ausweis weg und versuch es erneut',
        },
        granted: { ru: 'Доступ разрешён', ua: 'Доступ дозволено', en: 'Access granted', de: 'Zugang gewährt' },
    },

    centrifuge: {
        samples: { ru: 'Пробирки', ua: 'Пробірки', en: 'Samples', de: 'Proben' },
        spin: { ru: 'Запустить', ua: 'Запустити', en: 'Spin', de: 'Starten' },
        hint: {
            ru: 'Расставь пробирки так, чтобы напротив каждой стояла другая, и запусти',
            ua: 'Розстав пробірки так, щоб навпроти кожної стояла інша, і запусти',
            en: 'Place the tubes so that each one has another opposite it, then spin',
            de: 'Setz die Röhrchen so ein, dass jedem eines gegenübersteht, dann starte',
        },
        unbalanced: {
            ru: 'Дисбаланс: напротив отмеченных пробирок пусто',
            ua: 'Дисбаланс: навпроти позначених пробірок порожньо',
            en: 'Unbalanced: the marked tubes have nothing opposite them',
            de: 'Unwucht: den markierten Röhrchen steht nichts gegenüber',
        },
    },

    pipette: {
        hint: {
            ru: 'Зажми кнопку мыши, набери жидкость до отметки и отпусти',
            ua: 'Затисни кнопку миші, набери рідину до позначки й відпусти',
            en: 'Hold the mouse button to draw the liquid up to the line, then let go',
            de: 'Halte die Maustaste, zieh die Flüssigkeit bis zur Linie auf und lass los',
        },
        more: { ru: 'Мало. Добери ещё немного', ua: 'Замало. Добери ще трохи', en: 'Not enough. Draw a little more', de: 'Zu wenig. Zieh noch etwas nach' },
        spilled: { ru: 'Перебор, всё пролилось. Ещё раз', ua: 'Забагато, усе розлилося. Ще раз', en: 'Too much, it spilled. Again', de: 'Zu viel, alles verschüttet. Noch mal' },
        done: { ru: 'Точно по отметке', ua: 'Точно по позначці', en: 'Right on the line', de: 'Genau auf der Linie' },
    },

    microscope: {
        coarse: { ru: 'Грубая', ua: 'Груба', en: 'Coarse', de: 'Grob' },
        fine: { ru: 'Точная', ua: 'Точна', en: 'Fine', de: 'Fein' },
        hint: {
            ru: 'Крути ручки: зажми и веди мышью, пока препарат не станет чётким',
            ua: 'Крути ручки: затисни й веди мишею, доки препарат не стане чітким',
            en: 'Turn the knobs: press and drag until the slide is sharp',
            de: 'Dreh die Knöpfe: gedrückt halten und ziehen, bis das Präparat scharf ist',
        },
        sharp: { ru: 'Чётко. Не двигай', ua: 'Чітко. Не рухай', en: 'Sharp. Hold still', de: 'Scharf. Nicht bewegen' },
    },

    valve: {
        hint: {
            ru: 'Крути вентиль, чтобы стрелка 3 секунды держалась в зелёной зоне',
            ua: 'Крути вентиль, щоб стрілка 3 секунди трималася в зеленій зоні',
            en: 'Turn the valve to keep the needle in the green band for 3 seconds',
            de: 'Dreh das Ventil, damit die Nadel 3 Sekunden im grünen Bereich bleibt',
        },
    },

    labels: {
        hint: {
            ru: 'Перетащи каждую пробирку в штатив с тем же символом',
            ua: 'Перетягни кожну пробірку в штатив із тим самим символом',
            en: 'Drag each vial into the rack with the same symbol',
            de: 'Zieh jedes Fläschchen in das Gestell mit demselben Symbol',
        },
        wrong: { ru: 'Не тот штатив: смотри на символ', ua: 'Не той штатив: дивись на символ', en: 'Wrong rack: check the symbol', de: 'Falsches Gestell: achte auf das Symbol' },
    },
};
