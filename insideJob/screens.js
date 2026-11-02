// The sabotage plan, the fix screens, the security terminals and the role ability of Inside Job (webviews
// `systems/insideJob/fixes`, `components/SecurityScreens.vue` and what it holds).
export const screens = {
    sabotageMap: {
        title: { ru: 'План диверсий', ua: 'План диверсій', en: 'Sabotage plan', de: 'Sabotageplan' },
        pick: {
            ru: 'Выбери диверсию: один клик запускает её',
            ua: 'Обери диверсію: один клік запускає її',
            en: 'Pick a sabotage: one click sets it off',
            de: 'Wähle eine Sabotage: ein Klick löst sie aus',
        },
        running: { ru: 'Диверсия уже идёт', ua: 'Диверсія вже триває', en: 'A sabotage is running', de: 'Eine Sabotage läuft' },
        cooldown: { ru: 'Следующая диверсия через {{time}}', ua: 'Наступна диверсія через {{time}}', en: 'Next sabotage in {{time}}', de: 'Nächste Sabotage in {{time}}' },
    },

    cctv: {
        rec: { ru: 'REC', ua: 'REC', en: 'REC', de: 'REC' },
        camera: { ru: 'Камера {{index}}', ua: 'Камера {{index}}', en: 'Camera {{index}}', de: 'Kamera {{index}}' },
        noSignal: { ru: 'Нет сигнала', ua: 'Немає сигналу', en: 'No signal', de: 'Kein Signal' },
        cut: { ru: 'Заглушить камеру', ua: 'Заглушити камеру', en: 'Cut the feed', de: 'Kamera kappen' },
        tablet: { ru: 'Планшет погаснет через {{time}}', ua: 'Планшет згасне через {{time}}', en: 'Tablet goes dark in {{time}}', de: 'Tablet aus in {{time}}' },
    },

    keycardLog: {
        title: { ru: 'Журнал пропусков', ua: 'Журнал перепусток', en: 'Keycard log', de: 'Kartenprotokoll' },
        hint: { ru: 'Проходы через двери, новые сверху', ua: 'Проходи через двері, нові згори', en: 'Door passes, newest first', de: 'Türdurchgänge, neueste zuerst' },
        time: { ru: 'Время', ua: 'Час', en: 'Time', de: 'Zeit' },
        room: { ru: 'Помещение', ua: 'Приміщення', en: 'Room', de: 'Raum' },
        who: { ru: 'Кто', ua: 'Хто', en: 'Who', de: 'Wer' },
        override: { ru: 'Сервисный доступ', ua: 'Сервісний доступ', en: 'Maintenance override', de: 'Wartungszugang' },
        erased: { ru: 'Запись стёрта', ua: 'Запис стерто', en: 'Record erased', de: 'Eintrag gelöscht' },
        empty: { ru: 'Проходов пока не было', ua: 'Проходів поки не було', en: 'No passes yet', de: 'Noch keine Durchgänge' },
    },

    occupancy: {
        title: { ru: 'Табло присутствия', ua: 'Табло присутності', en: 'Occupancy board', de: 'Belegungstafel' },
        hint: { ru: 'Сколько живых в каждом помещении', ua: 'Скільки живих у кожному приміщенні', en: 'Living people in each room', de: 'Lebende in jedem Raum' },
    },

    body: {
        died: { ru: '{{colour}}: смерть {{seconds}} с назад', ua: '{{colour}}: смерть {{seconds}} с тому', en: '{{colour}} died {{seconds}} s ago', de: '{{colour}} starb vor {{seconds}} s' },
    },

    blood: {
        hint: {
            ru: 'На жилете кровь: смой её у раковины',
            ua: 'На жилеті кров: змий її біля раковини',
            en: 'Blood on your vest: wash it at a sink',
            de: 'Blut an deiner Weste: wasch es am Waschbecken ab',
        },
    },

    fix: {
        breaker: {
            hint: {
                ru: 'Под горящей лампой рычаг вверх, под тёмной вниз',
                ua: 'Під лампою, що світить, важіль угору, під темною вниз',
                en: 'Switch up under a lit lamp, down under a dark one',
                de: 'Unter leuchtender Lampe Schalter hoch, unter dunkler runter',
            },
        },
        valve: {
            hold: { ru: 'Зажми вентиль и держи', ua: 'Затисни вентиль і тримай', en: 'Press and hold the wheel', de: 'Rad drücken und halten' },
            waiting: { ru: 'Ждём второй вентиль', ua: 'Чекаємо на другий вентиль', en: 'Waiting for the second valve', de: 'Warte auf das zweite Ventil' },
            both: { ru: 'Оба вентиля держат', ua: 'Обидва вентилі тримають', en: 'Both valves held', de: 'Beide Ventile gehalten' },
            held: { ru: 'Держат {{done}} из {{total}}', ua: 'Тримають {{done}} з {{total}}', en: '{{done}} of {{total}} held', de: '{{done}} von {{total}} gehalten' },
            hint: {
                ru: 'Утечку остановят только два вентиля сразу',
                ua: 'Витік зупинять лише два вентилі одночасно',
                en: 'Only both valves at once stop the leak',
                de: 'Nur beide Ventile zugleich stoppen das Leck',
            },
        },
        oxygen: {
            other: { ru: 'Код для другого пульта', ua: 'Код для іншого пульта', en: 'Code for the other console', de: 'Code für die andere Konsole' },
            otherHint: { ru: 'Его вводят на другом пульте', ua: 'Його вводять на іншому пульті', en: 'It is typed in at the other console', de: 'Er wird an der anderen Konsole eingegeben' },
            this: { ru: 'Код этого пульта', ua: 'Код цього пульта', en: "This console's code", de: 'Code dieser Konsole' },
            thisHint: { ru: 'Он показан на другом пульте', ua: 'Він показаний на іншому пульті', en: 'It is shown on the other console', de: 'Er steht auf der anderen Konsole' },
            checking: { ru: 'Проверка кода', ua: 'Перевірка коду', en: 'Checking the code', de: 'Code wird geprüft' },
        },
        tune: {
            hint: {
                ru: 'Двигай шкалу, пока сигнал не станет чистым',
                ua: 'Рухай шкалу, доки сигнал не стане чистим',
                en: 'Drag the dial until the signal is clean',
                de: 'Zieh die Skala, bis das Signal sauber ist',
            },
            locked: { ru: 'Сигнал пойман, держи', ua: 'Сигнал спіймано, тримай', en: 'Signal caught, hold it', de: 'Signal erfasst, halten' },
            unit: { ru: 'МГц', ua: 'МГц', en: 'MHz', de: 'MHz' },
        },
    },
};
