/**
 * Inside Job (docs/inside-job-design.md): the hidden-saboteur match in Humane Labs. The mode's name stays English in every
 * language (owner 2026-11-01). Colours are said out loud at meetings, so every colour has a name in every language.
 */
import { gamesLab } from './gamesLab';
import { gamesLong } from './gamesLong';
import { screens } from './screens';
import { server } from './server';

export default {
    // The task minigames (16.7) and their frame, the fix and security screens (16.6, 16.8, 16.9), the server's texts.
    gamesLab,
    gamesLong,
    screens,
    server,

    name: { ru: 'Inside Job', ua: 'Inside Job', en: 'Inside Job', de: 'Inside Job' },

    colours: {
        red: { ru: 'Красный', ua: 'Червоний', en: 'Red', de: 'Rot' },
        blue: { ru: 'Синий', ua: 'Синій', en: 'Blue', de: 'Blau' },
        green: { ru: 'Зелёный', ua: 'Зелений', en: 'Green', de: 'Grün' },
        yellow: { ru: 'Жёлтый', ua: 'Жовтий', en: 'Yellow', de: 'Gelb' },
        orange: { ru: 'Оранжевый', ua: 'Помаранчевий', en: 'Orange', de: 'Orange' },
        purple: { ru: 'Фиолетовый', ua: 'Фіолетовий', en: 'Purple', de: 'Lila' },
        cyan: { ru: 'Голубой', ua: 'Блакитний', en: 'Cyan', de: 'Hellblau' },
        pink: { ru: 'Розовый', ua: 'Рожевий', en: 'Pink', de: 'Rosa' },
        white: { ru: 'Белый', ua: 'Білий', en: 'White', de: 'Weiß' },
        black: { ru: 'Чёрный', ua: 'Чорний', en: 'Black', de: 'Schwarz' },
        brown: { ru: 'Коричневый', ua: 'Коричневий', en: 'Brown', de: 'Braun' },
        lime: { ru: 'Салатовый', ua: 'Салатовий', en: 'Lime', de: 'Hellgrün' },
        maroon: { ru: 'Бордовый', ua: 'Бордовий', en: 'Maroon', de: 'Weinrot' },
        teal: { ru: 'Бирюзовый', ua: 'Бірюзовий', en: 'Teal', de: 'Petrol' },
    },

    sides: {
        staff: { ru: 'Сотрудник', ua: 'Співробітник', en: 'Staff', de: 'Personal' },
        mole: { ru: 'Крот', ua: 'Кріт', en: 'Mole', de: 'Maulwurf' },
    },

    roles: {
        securityChief: {
            name: { ru: 'Начальник охраны', ua: 'Начальник охорони', en: 'Security Chief', de: 'Sicherheitschef' },
            ability: {
                ru: 'Смотрит камеры с планшета где угодно',
                ua: 'Дивиться камери з планшета будь-де',
                en: 'Watches the cameras from a tablet anywhere',
                de: 'Sieht die Kameras überall per Tablet',
            },
        },
        medic: {
            name: { ru: 'Медик', ua: 'Медик', en: 'Medic', de: 'Sanitäter' },
            ability: {
                ru: 'У тела видит, сколько секунд назад наступила смерть',
                ua: 'Біля тіла бачить, скільки секунд тому настала смерть',
                en: 'Sees at a body how many seconds ago the person died',
                de: 'Sieht an einer Leiche, wie viele Sekunden der Tod her ist',
            },
        },
        engineer: {
            name: { ru: 'Инженер', ua: 'Інженер', en: 'Engineer', de: 'Ingenieur' },
            ability: {
                ru: 'Раз за раунд устраняет обычную диверсию откуда угодно',
                ua: 'Раз за раунд усуває звичайну диверсію звідусіль',
                en: 'Fixes a non-critical sabotage from anywhere once a round',
                de: 'Behebt einmal pro Runde eine einfache Sabotage von überall',
            },
        },
        courier: {
            name: { ru: 'Курьер', ua: "Кур'єр", en: 'Courier', de: 'Kurier' },
            ability: {
                ru: 'Носит грузы быстрее и видит их на плане',
                ua: 'Носить вантажі швидше й бачить їх на плані',
                en: 'Carries faster and sees every load on the plan',
                de: 'Trägt schneller und sieht jede Fracht auf dem Plan',
            },
        },
        forger: {
            name: { ru: 'Двойник', ua: 'Двійник', en: 'Forger', de: 'Fälscher' },
            ability: {
                ru: 'На 15 секунд принимает облик живого цвета',
                ua: 'На 15 секунд набуває вигляду живого кольору',
                en: 'Takes the look of a living colour for 15 s',
                de: 'Nimmt 15 s das Aussehen einer lebenden Farbe an',
            },
        },
        hacker: {
            name: { ru: 'Хакер', ua: 'Хакер', en: 'Hacker', de: 'Hacker' },
            ability: {
                ru: 'Стирает журнал пропусков и глушит камеру',
                ua: 'Стирає журнал перепусток і глушить камеру',
                en: 'Wipes the keycard log and cuts a camera',
                de: 'Löscht das Kartenprotokoll und kappt eine Kamera',
            },
        },
        silencer: {
            name: { ru: 'Чистильщик', ua: 'Чистильник', en: 'Silencer', de: 'Vertuscher' },
            ability: {
                ru: 'Тело жертвы нельзя найти первые 12 секунд',
                ua: 'Тіло жертви не можна знайти перші 12 секунд',
                en: 'A body cannot be reported for its first 12 s',
                de: 'Eine Leiche kann 12 s lang nicht gemeldet werden',
            },
        },
    },

    rooms: {
        lobby: { ru: 'Вестибюль', ua: 'Вестибюль', en: 'Lobby', de: 'Eingang' },
        briefing: { ru: 'Переговорная', ua: 'Переговорна', en: 'Briefing', de: 'Besprechung' },
        tankHall: { ru: 'Зал резервуаров', ua: 'Зал резервуарів', en: 'Tank Hall', de: 'Tankhalle' },
        specimenLab: { ru: 'Лаборатория образцов', ua: 'Лабораторія зразків', en: 'Specimen Lab', de: 'Probenlabor' },
        chemistry: { ru: 'Химлаборатория', ua: 'Хімлабораторія', en: 'Chemistry', de: 'Chemielabor' },
        coldStorage: { ru: 'Холодильник', ua: 'Холодильна камера', en: 'Cold Storage', de: 'Kühlraum' },
        serverRoom: { ru: 'Серверная', ua: 'Серверна', en: 'Server Room', de: 'Serverraum' },
        powerRoom: { ru: 'Щитовая', ua: 'Щитова', en: 'Power Room', de: 'Elektroraum' },
        animalWing: { ru: 'Виварий', ua: 'Віварій', en: 'Animal Wing', de: 'Tierstation' },
        waste: { ru: 'Отходы', ua: 'Відходи', en: 'Waste', de: 'Abfall' },
        decon: { ru: 'Дезинфекция', ua: 'Дезінфекція', en: 'Decontamination', de: 'Dekontamination' },
        bridge: { ru: 'Мостик', ua: 'Місток', en: 'Bridge', de: 'Brücke' },
        canteen: { ru: 'Столовая персонала', ua: 'Їдальня персоналу', en: 'Staff Canteen', de: 'Personalkantine' },
        pumpRoom: { ru: 'Насосная охлаждения', ua: 'Насосна охолодження', en: 'Cooling Pumps', de: 'Kühlpumpenraum' },
        generatorRoom: { ru: 'Генераторная', ua: 'Генераторна', en: 'Generator Room', de: 'Generatorraum' },
        storage: { ru: 'Склад и утилизация', ua: 'Склад і утилізація', en: 'Storage and Disposal', de: 'Lager und Entsorgung' },
        guardPost: { ru: 'Пост охраны', ua: 'Пост охорони', en: 'Guard Post', de: 'Wachposten' },
        checkpoint: { ru: 'Проходная', ua: 'Прохідна', en: 'Checkpoint', de: 'Zugangskontrolle' },
        ventilation: { ru: 'Вентиляционная', ua: 'Вентиляційна', en: 'Ventilation', de: 'Lüftungsraum' },
        corridors: { ru: 'Коридоры', ua: 'Коридори', en: 'Corridors', de: 'Flure' },
    },

    tasks: {
        badgeIn: { ru: 'Отметить пропуск', ua: 'Відмітити перепустку', en: 'Badge in', de: 'Ausweis scannen' },
        centrifuge: { ru: 'Запустить центрифугу', ua: 'Запустити центрифугу', en: 'Run the centrifuge', de: 'Zentrifuge starten' },
        pipette: { ru: 'Набрать пипетку', ua: 'Набрати піпетку', en: 'Fill the pipette', de: 'Pipette füllen' },
        microscope: { ru: 'Навести микроскоп', ua: 'Налаштувати мікроскоп', en: 'Focus the microscope', de: 'Mikroskop scharfstellen' },
        valve: { ru: 'Удержать давление', ua: 'Утримати тиск', en: 'Hold the pressure', de: 'Druck halten' },
        labels: { ru: 'Разложить пробирки', ua: 'Розкласти пробірки', en: 'Sort the vials', de: 'Fläschchen sortieren' },
        animalFeed: { ru: 'Покормить животных', ua: 'Нагодувати тварин', en: 'Feed the animals', de: 'Tiere füttern' },
        generatorSync: { ru: 'Синхронизировать генератор', ua: 'Синхронізувати генератор', en: 'Sync the generator', de: 'Generator synchronisieren' },
        fuses: { ru: 'Заменить предохранители', ua: 'Замінити запобіжники', en: 'Replace the fuses', de: 'Sicherungen tauschen' },
        airflow: { ru: 'Отрегулировать вентиляцию', ua: 'Відрегулювати вентиляцію', en: 'Balance the airflow', de: 'Lüftung einregeln' },
        mixture: { ru: 'Смешать раствор', ua: 'Змішати розчин', en: 'Mix the solution', de: 'Lösung mischen' },
        freezerCode: { ru: 'Код морозильника', ua: 'Код морозильника', en: 'Freezer code', de: 'Gefriercode' },
        backup: { ru: 'Резервная копия', ua: 'Резервна копія', en: 'Data backup', de: 'Datensicherung' },
        filterSwap: { ru: 'Заменить фильтр', ua: 'Замінити фільтр', en: 'Swap the filter', de: 'Filter wechseln' },
        wasteBarrel: { ru: 'Вывезти отходы', ua: 'Вивезти відходи', en: 'Ship the waste', de: 'Abfall entsorgen' },
    },

    sabotage: {
        blackout: { ru: 'Свет отключён', ua: 'Світло вимкнено', en: 'Lights out', de: 'Licht aus' },
        containment: { ru: 'Утечка токсина', ua: 'Витік токсину', en: 'Containment breach', de: 'Eindämmungsbruch' },
        oxygen: { ru: 'Отказ вентиляции', ua: 'Відмова вентиляції', en: 'Air supply failure', de: 'Luftversorgung ausgefallen' },
        commsJam: { ru: 'Связь заглушена', ua: "Зв'язок заглушено", en: 'Comms jammed', de: 'Funk gestört' },
        lockdown: { ru: 'Двери заблокированы', ua: 'Двері заблоковано', en: 'Doors locked', de: 'Türen verriegelt' },
        decoyAlarm: { ru: 'Тревога', ua: 'Тривога', en: 'Alarm', de: 'Alarm' },
        fixed: { ru: 'Устранено {{done}} из {{total}}', ua: 'Усунуто {{done}} з {{total}}', en: 'Fixed {{done}} of {{total}}', de: 'Behoben: {{done}} von {{total}}' },
    },

    reveal: {
        // {{moles}} is drawn in red: "2 Moles" from moleOne / moleFew.
        hidingOne: {
            ru: 'Среди сотрудников прячется {{moles}}',
            ua: 'Серед співробітників ховається {{moles}}',
            en: '{{moles}} is hiding among the staff',
            de: 'Im Personal versteckt sich {{moles}}',
        },
        hidingFew: {
            ru: 'Среди сотрудников прячутся {{moles}}',
            ua: 'Серед співробітників ховаються {{moles}}',
            en: '{{moles}} are hiding among the staff',
            de: 'Im Personal verstecken sich {{moles}}',
        },
        moleOne: { ru: '{{count}} крот', ua: '{{count}} кріт', en: '{{count}} Mole', de: '{{count}} Maulwurf' },
        moleFew: { ru: '{{count}} крота', ua: '{{count}} кроти', en: '{{count}} Moles', de: '{{count}} Maulwürfe' },
        fellows: { ru: 'Свои', ua: 'Свої', en: 'Your fellow Moles', de: 'Deine Mit-Maulwürfe' },
        alone: { ru: 'Ты работаешь один', ua: 'Ти працюєш сам', en: 'You work alone', de: 'Du arbeitest allein' },
        staffGoal: {
            ru: 'Выполняй задания и найди кротов',
            ua: 'Виконуй завдання та знайди кротів',
            en: 'Do your tasks and find the Moles',
            de: 'Erledige deine Aufgaben und finde die Maulwürfe',
        },
        moleGoal: {
            ru: 'Устраняй сотрудников по одному, саботируй и не попадись',
            ua: 'Усувай співробітників по одному, саботуй і не попадись',
            en: 'Take the staff out one by one, sabotage, and do not get caught',
            de: 'Schalte das Personal einzeln aus, sabotiere und lass dich nicht erwischen',
        },
    },

    hud: {
        bar: { ru: 'Работа лаборатории', ua: 'Робота лабораторії', en: 'Lab work', de: 'Laborarbeit' },
        tasks: { ru: 'Задания', ua: 'Завдання', en: 'Tasks', de: 'Aufgaben' },
        fakeTasks: { ru: 'Прикрытие: не засчитывается', ua: 'Прикриття: не зараховується', en: 'Cover: does not count', de: 'Tarnung: zählt nicht' },
        jammed: { ru: 'Связь заглушена', ua: "Зв'язок заглушено", en: 'Comms jammed', de: 'Funk gestört' },
        use: { ru: 'Действие', ua: 'Дія', en: 'Use', de: 'Benutzen' },
        report: { ru: 'Сообщить', ua: 'Повідомити', en: 'Report', de: 'Melden' },
        kill: { ru: 'Устранить', ua: 'Усунути', en: 'Kill', de: 'Ausschalten' },
        sabotage: { ru: 'Диверсия', ua: 'Диверсія', en: 'Sabotage', de: 'Sabotage' },
        plan: { ru: 'План', ua: 'План', en: 'Plan', de: 'Plan' },
        ghost: { ru: 'Ты призрак', ua: 'Ти привид', en: 'You are a ghost', de: 'Du bist ein Geist' },
        ghostStaff: {
            ru: 'Живые тебя не видят. Задания всё ещё засчитываются',
            ua: 'Живі тебе не бачать. Завдання досі зараховуються',
            en: 'The living cannot see you. Your tasks still count',
            de: 'Die Lebenden sehen dich nicht. Deine Aufgaben zählen weiter',
        },
        ghostMole: {
            ru: 'Живые тебя не видят. Диверсии тебе всё ещё доступны',
            ua: 'Живі тебе не бачать. Диверсії тобі досі доступні',
            en: 'The living cannot see you. You can still sabotage',
            de: 'Die Lebenden sehen dich nicht. Sabotage geht weiter',
        },
    },

    killed: {
        title: { ru: 'Тебя устранили', ua: 'Тебе усунули', en: 'You were eliminated', de: 'Du wurdest ausgeschaltet' },
        by: { ru: 'Кто', ua: 'Хто', en: 'By', de: 'Von' },
        next: {
            ru: 'Теперь ты призрак и остаёшься в матче',
            ua: 'Тепер ти привид і лишаєшся в матчі',
            en: 'You are a ghost now and stay in the match',
            de: 'Du bist jetzt ein Geist und bleibst im Match',
        },
    },

    splash: {
        body: { ru: 'Найдено тело', ua: 'Знайдено тіло', en: 'Body found', de: 'Leiche gefunden' },
        alarm: { ru: 'Тревога', ua: 'Тривога', en: 'Alarm', de: 'Alarm' },
        reportedBy: { ru: 'Нашёл', ua: 'Знайшов', en: 'Found by', de: 'Gefunden von' },
        victim: { ru: 'Погибший', ua: 'Загиблий', en: 'Victim', de: 'Opfer' },
        pressedBy: { ru: 'Поднял тревогу', ua: 'Здійняв тривогу', en: 'Raised by', de: 'Ausgelöst von' },
    },

    meeting: {
        title: { ru: 'Кто крот?', ua: 'Хто кріт?', en: 'Who is the Mole?', de: 'Wer ist der Maulwurf?' },
        votingIn: { ru: 'Голосование через', ua: 'Голосування через', en: 'Voting opens in', de: 'Abstimmung in' },
        votingEnds: { ru: 'До конца голосования', ua: 'До кінця голосування', en: 'Voting ends in', de: 'Abstimmung endet in' },
        counting: { ru: 'Подсчёт голосов', ua: 'Підрахунок голосів', en: 'Counting the votes', de: 'Stimmen werden gezählt' },
        you: { ru: 'Ты', ua: 'Ти', en: 'You', de: 'Du' },
        voted: { ru: 'Проголосовал', ua: 'Проголосував', en: 'Voted', de: 'Abgestimmt' },
        yourVote: { ru: 'Твой голос', ua: 'Твій голос', en: 'Your vote', de: 'Deine Stimme' },
        dead: { ru: 'Мёртв', ua: 'Мертвий', en: 'Dead', de: 'Tot' },
        deadFresh: { ru: 'Погиб в этом раунде', ua: 'Загинув у цьому раунді', en: 'Died this round', de: 'In dieser Runde gestorben' },
        ejected: { ru: 'Изгнан', ua: 'Вигнаний', en: 'Ejected', de: 'Rausgeworfen' },
        left: { ru: 'Покинул матч', ua: 'Покинув матч', en: 'Left the match', de: 'Hat das Match verlassen' },
        skip: { ru: 'Пропустить голос', ua: 'Пропустити голос', en: 'Skip vote', de: 'Stimme auslassen' },
        skipped: { ru: 'Пропустили', ua: 'Пропустили', en: 'Skipped', de: 'Ausgelassen' },
        tie: { ru: 'Ничья: никто не изгнан', ua: 'Нічия: ніхто не вигнаний', en: 'A tie: nobody is ejected', de: 'Gleichstand: niemand fliegt raus' },
        skipWon: { ru: 'Большинство пропустило', ua: 'Більшість пропустила', en: 'Most skipped', de: 'Die meisten haben ausgelassen' },
        ghost: {
            ru: 'Ты призрак: смотришь собрание, но не голосуешь',
            ua: 'Ти привид: дивишся збори, але не голосуєш',
            en: 'You are a ghost: you watch the meeting but cannot vote',
            de: 'Du bist ein Geist: du siehst zu, stimmst aber nicht ab',
        },
    },

    chat: {
        title: { ru: 'Чат', ua: 'Чат', en: 'Chat', de: 'Chat' },
        empty: { ru: 'Пока тихо', ua: 'Поки тихо', en: 'Nothing said yet', de: 'Noch nichts gesagt' },
        meeting: { ru: 'Собрание {{index}}', ua: 'Збори {{index}}', en: 'Meeting {{index}}', de: 'Besprechung {{index}}' },
        placeholder: { ru: 'Сообщение', ua: 'Повідомлення', en: 'Message', de: 'Nachricht' },
        ghostPlaceholder: {
            ru: 'Чат призраков: живые его не видят',
            ua: 'Чат привидів: живі його не бачать',
            en: 'Ghost chat: the living do not see it',
            de: 'Geisterchat: die Lebenden sehen ihn nicht',
        },
        ghostTitle: { ru: 'Чат призраков', ua: 'Чат привидів', en: 'Ghost chat', de: 'Geisterchat' },
    },

    ejection: {
        wasMole: { ru: '{{colour}} был кротом', ua: '{{colour}} був кротом', en: '{{colour}} was a Mole', de: '{{colour}} war ein Maulwurf' },
        wasNotMole: { ru: '{{colour}} не был кротом', ua: '{{colour}} не був кротом', en: '{{colour}} was not a Mole', de: '{{colour}} war kein Maulwurf' },
        ejected: { ru: '{{colour}} изгнан', ua: '{{colour}} вигнаний', en: '{{colour}} was ejected', de: '{{colour}} wurde rausgeworfen' },
        nobody: { ru: 'Никто не изгнан', ua: 'Нікого не вигнано', en: 'Nobody was ejected', de: 'Niemand wurde rausgeworfen' },
        leftOne: { ru: 'Остался {{count}} крот', ua: 'Залишився {{count}} кріт', en: '{{count}} Mole remains', de: '{{count}} Maulwurf bleibt' },
        leftFew: { ru: 'Осталось {{count}} крота', ua: 'Залишилося {{count}} кроти', en: '{{count}} Moles remain', de: '{{count}} Maulwürfe bleiben' },
        leftNone: { ru: 'Кротов не осталось', ua: 'Кротів не залишилося', en: 'No Moles remain', de: 'Keine Maulwürfe mehr' },
    },

    result: {
        victory: { ru: 'Победа', ua: 'Перемога', en: 'Victory', de: 'Sieg' },
        defeat: { ru: 'Поражение', ua: 'Поразка', en: 'Defeat', de: 'Niederlage' },
        staffWin: { ru: 'Победа сотрудников', ua: 'Перемога співробітників', en: 'Staff win', de: 'Das Personal gewinnt' },
        moleWin: { ru: 'Победа кротов', ua: 'Перемога кротів', en: 'Moles win', de: 'Die Maulwürfe gewinnen' },
        reasons: {
            molesFound: { ru: 'Все кроты найдены', ua: 'Усіх кротів знайдено', en: 'All Moles found', de: 'Alle Maulwürfe gefunden' },
            tasksDone: { ru: 'Работа лаборатории завершена', ua: 'Роботу лабораторії завершено', en: 'Lab work complete', de: 'Laborarbeit erledigt' },
            parity: { ru: 'Лаборатория потеряна', ua: 'Лабораторію втрачено', en: 'The lab is lost', de: 'Das Labor ist verloren' },
            containment: { ru: 'Утечку не остановили', ua: 'Витік не зупинили', en: 'Containment failed', de: 'Eindämmung gescheitert' },
            oxygen: { ru: 'Воздух закончился', ua: 'Повітря скінчилося', en: 'Air supply failed', de: 'Luftversorgung versagt' },
            timeout: { ru: 'Время вышло', ua: 'Час вийшов', en: 'Time ran out', de: 'Die Zeit ist um' },
        },
        winners: { ru: 'Победители', ua: 'Переможці', en: 'Winners', de: 'Gewinner' },
        losers: { ru: 'Проигравшие', ua: 'Переможені', en: 'Defeated', de: 'Verlierer' },
        backIn: { ru: 'Возвращение в зал через {{time}}', ua: 'Повернення до зали через {{time}}', en: 'Back to the hall in {{time}}', de: 'Zurück in die Halle in {{time}}' },
    },

    plan: {
        title: { ru: 'План лаборатории', ua: 'План лабораторії', en: 'Lab plan', de: 'Laborplan' },
        you: { ru: 'Ты', ua: 'Ти', en: 'You', de: 'Du' },
        task: { ru: 'Твоё задание', ua: 'Твоє завдання', en: 'Your task', de: 'Deine Aufgabe' },
        fix: { ru: 'Точка устранения', ua: 'Точка усунення', en: 'Fix point', de: 'Reparaturpunkt' },
        close: { ru: 'Закрыть', ua: 'Закрити', en: 'Close', de: 'Schließen' },
    },
};
