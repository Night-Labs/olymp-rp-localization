/**
 * Battle royale (`server/systems/gameEvents/modes/battleRoyale`, `webviews/systems/battleRoyale`):
 * the HUD, the win screen and the result card, the crates and the special items. An eliminated
 * player gets the regular death screen (`death` module).
 */
export default {
    title: {
        ru: 'Королевская битва',
        ua: 'Королівська битва',
        en: 'Battle royale',
        de: 'Battle Royale',
        pl: 'Battle royale',
    },

    warmup: {
        timer: {
            ru: 'До посадки в самолёт',
            ua: 'До посадки в літак',
            en: 'Boarding the plane in',
            de: 'Einstieg ins Flugzeug in',
            pl: 'Wejście do samolotu za',
        },
    },

    hud: {
        island: {
            ru: 'Весь остров',
            ua: 'Увесь острів',
            en: 'The whole island',
            de: 'Die ganze Insel',
            pl: 'Cała wyspa',
        },
        circle: {
            ru: 'Круг {{phase}} из {{phases}}',
            ua: 'Коло {{phase}} з {{phases}}',
            en: 'Circle {{phase}} of {{phases}}',
            de: 'Kreis {{phase}} von {{phases}}',
            pl: 'Krąg {{phase}} z {{phases}}',
        },
        firstCircle: {
            ru: 'Первый круг через',
            ua: 'Перше коло через',
            en: 'First circle in',
            de: 'Erster Kreis in',
            pl: 'Pierwszy krąg za',
        },
        shrinksIn: {
            ru: 'Сужение через',
            ua: 'Звуження через',
            en: 'Closes in',
            de: 'Schließt sich in',
            pl: 'Zawęża się za',
        },
        shrinking: {
            ru: 'Зона сужается',
            ua: 'Зона звужується',
            en: 'Zone closing',
            de: 'Zone schließt sich',
            pl: 'Strefa się zawęża',
        },
        closed: {
            ru: 'Зона закрыта',
            ua: 'Зона закрита',
            en: 'Zone closed',
            de: 'Zone geschlossen',
            pl: 'Strefa zamknięta',
        },
        distance: {
            ru: '{{distance}} м до круга',
            ua: '{{distance}} м до кола',
            en: '{{distance}} m to the circle',
            de: '{{distance}} m bis zum Kreis',
            pl: '{{distance}} m do kręgu',
        },
    },

    plane: {
        jump: {
            ru: 'Прыгнуть',
            ua: 'Стрибнути',
            en: 'Jump',
            de: 'Springen',
            pl: 'Skocz',
        },
        waiting: {
            ru: 'Дверь пока закрыта',
            ua: 'Двері поки зачинені',
            en: 'The door is still shut',
            de: 'Die Tür ist noch zu',
            pl: 'Drzwi są jeszcze zamknięte',
        },
        opensIn: {
            ru: 'Откроется через {{time}}',
            ua: 'Відчиняться через {{time}}',
            en: 'Opens in {{time}}',
            de: 'Öffnet sich in {{time}}',
            pl: 'Otworzą się za {{time}}',
        },
        closesIn: {
            ru: 'Самолёт покинет остров через {{time}}',
            ua: 'Літак покине острів через {{time}}',
            en: 'The plane leaves the island in {{time}}',
            de: 'Das Flugzeug verlässt die Insel in {{time}}',
            pl: 'Samolot opuści wyspę za {{time}}',
        },
    },

    air: {
        altitude: {
            ru: '{{height}} м',
            ua: '{{height}} м',
            en: '{{height}} m',
            de: '{{height}} m',
            pl: '{{height}} m',
        },
        autoDeploy: {
            ru: 'Парашют раскроется сам на {{height}} м',
            ua: 'Парашут розкриється сам на {{height}} м',
            en: 'The chute opens by itself at {{height}} m',
            de: 'Der Schirm öffnet sich bei {{height}} m von selbst',
            pl: 'Spadochron otworzy się sam na {{height}} m',
        },
    },

    spectator: {
        label: {
            ru: 'Наблюдение',
            ua: 'Спостереження',
            en: 'Watching',
            de: 'Zuschauen',
            pl: 'Obserwujesz',
        },
        switch: {
            ru: 'Сменить игрока',
            ua: 'Змінити гравця',
            en: 'Switch player',
            de: 'Spieler wechseln',
            pl: 'Zmień gracza',
        },
        leave: {
            ru: 'Покинуть матч',
            ua: 'Покинути матч',
            en: 'Leave the match',
            de: 'Match verlassen',
            pl: 'Opuść mecz',
        },
    },

    victory: {
        title: {
            ru: 'Победа! Победа! Время обеда!',
            ua: 'Перемога! Перемога! Час обіду!',
            en: 'Winner winner chicken dinner!',
            de: 'Winner winner chicken dinner!',
            pl: 'Zwycięstwo! Czas na obiad!',
        },
        leave: {
            ru: 'Покинуть матч',
            ua: 'Покинути матч',
            en: 'Leave the match',
            de: 'Match verlassen',
            pl: 'Opuść mecz',
        },
        returnIn: {
            ru: 'Возвращение через {{time}}',
            ua: 'Повернення через {{time}}',
            en: 'Heading back in {{time}}',
            de: 'Rückkehr in {{time}}',
            pl: 'Powrót za {{time}}',
        },
    },

    stats: {
        kills: {
            ru: 'Убийства',
            ua: 'Вбивства',
            en: 'Kills',
            de: 'Kills',
            pl: 'Zabójstwa',
        },
        damage: {
            ru: 'Урон',
            ua: 'Шкода',
            en: 'Damage',
            de: 'Schaden',
            pl: 'Obrażenia',
        },
        survived: {
            ru: 'Продержались',
            ua: 'Протрималися',
            en: 'Survived',
            de: 'Überlebt',
            pl: 'Przetrwałeś',
        },
    },

    crate: {
        open: {
            ru: 'Открыть ящик',
            ua: 'Відкрити скриню',
            en: 'Open the crate',
            de: 'Kiste öffnen',
            pl: 'Otwórz skrzynię',
        },
        name: {
            ru: 'Ящик',
            ua: 'Скриня',
            en: 'Crate',
            de: 'Kiste',
            pl: 'Skrzynia',
        },
        refill: {
            ru: 'Пополнится через',
            ua: 'Поповниться через',
            en: 'Refills in',
            de: 'Wird aufgefüllt in',
            pl: 'Uzupełni się za',
        },
    },

    room: {
        unlock: {
            ru: 'Открыть ключом',
            ua: 'Відчинити ключем',
            en: 'Unlock with the key',
            de: 'Mit dem Schlüssel öffnen',
            pl: 'Otwórz kluczem',
        },
        noKey: {
            hangar: {
                ru: 'Нужен ключ от комнаты в ангаре',
                ua: 'Потрібен ключ від кімнати в ангарі',
                en: 'You need the hangar room key',
                de: 'Du brauchst den Schlüssel für den Hangarraum',
                pl: 'Potrzebujesz klucza do pokoju w hangarze',
            },
            mansion: {
                ru: 'Нужна ключ-карта от поместья',
                ua: 'Потрібна ключ-картка від маєтку',
                en: 'You need the mansion keycard',
                de: 'Du brauchst die Schlüsselkarte der Villa',
                pl: 'Potrzebujesz karty-klucza do posiadłości',
            },
        },
        opened: {
            ru: 'Комната открыта',
            ua: 'Кімнату відчинено',
            en: 'The room is open',
            de: 'Der Raum ist offen',
            pl: 'Pokój jest otwarty',
        },
    },

    relay: {
        use: {
            ru: 'Подключиться к реле',
            ua: 'Підключитися до реле',
            en: 'Connect to the relay',
            de: 'Mit dem Relais verbinden',
            pl: 'Połącz się z przekaźnikiem',
        },
        busy: {
            ru: 'К реле уже подключаются',
            ua: 'До реле вже підключаються',
            en: 'Someone is already connecting to the relay',
            de: 'Jemand verbindet sich bereits mit dem Relais',
            pl: 'Ktoś już łączy się z przekaźnikiem',
        },
        discharged: {
            ru: 'Реле разряжено: заряд вернется с новым кругом',
            ua: 'Реле розряджене: заряд повернеться з новим колом',
            en: 'The relay is drained: it recharges with the next circle',
            de: 'Das Relais ist leer: es lädt sich mit dem nächsten Kreis wieder auf',
            pl: 'Przekaźnik jest rozładowany: naładuje się z kolejnym kręgiem',
        },
        lost: {
            ru: 'Связь с реле потеряна: стойте у пульта до конца',
            ua: 'Зв’язок із реле втрачено: стійте біля пульта до кінця',
            en: 'Relay link lost: stay at the console until it finishes',
            de: 'Verbindung zum Relais verloren: bleib bis zum Ende am Pult',
            pl: 'Utracono połączenie z przekaźnikiem: zostań przy pulpicie do końca',
        },
        scannedWarning: {
            ru: 'Вас засекли с радиовышки: противник на мачте знает, где вы',
            ua: 'Вас помітили з радіовежі: супротивник на щоглі знає, де ви',
            en: 'The radio mast picked you up: someone on the mast knows where you are',
            de: 'Der Funkmast hat dich erfasst: jemand auf dem Mast weiß, wo du bist',
            pl: 'Maszt radiowy cię wykrył: ktoś na maszcie wie, gdzie jesteś',
        },
    },

    deathBox: {
        open: {
            ru: 'Обыскать',
            ua: 'Обшукати',
            en: 'Search the box',
            de: 'Kiste durchsuchen',
            pl: 'Przeszukaj',
        },
        name: {
            ru: 'Вещи игрока',
            ua: 'Речі гравця',
            en: "A player's gear",
            de: 'Ausrüstung eines Spielers',
            pl: 'Rzeczy gracza',
        },
    },

    corpse: {
        open: {
            ru: 'Обыскать тело',
            ua: 'Обшукати тіло',
            en: 'Search the body',
            de: 'Leiche durchsuchen',
            pl: 'Przeszukaj ciało',
        },
        name: {
            ru: 'Тело игрока',
            ua: 'Тіло гравця',
            en: "A player's body",
            de: 'Leiche eines Spielers',
            pl: 'Ciało gracza',
        },
    },

    supplyDrop: {
        open: {
            ru: 'Открыть груз',
            ua: 'Відкрити вантаж',
            en: 'Open the supply drop',
            de: 'Versorgungskiste öffnen',
            pl: 'Otwórz zrzut',
        },
        name: {
            ru: 'Сброс снабжения',
            ua: 'Скидання постачання',
            en: 'Supply drop',
            de: 'Versorgungsabwurf',
            pl: 'Zrzut zaopatrzenia',
        },
        minorName: {
            ru: 'Малый груз',
            ua: 'Малий вантаж',
            en: 'Small supply crate',
            de: 'Kleine Versorgungskiste',
            pl: 'Mała skrzynia zaopatrzenia',
        },
    },

    items: {
        scannedWarning: {
            ru: 'Вас засек сканер: противник знает, где вы',
            ua: 'Вас помітив сканер: супротивник знає, де ви',
            en: 'A scanner picked you up: someone knows where you are',
            de: 'Ein Scanner hat dich erfasst: jemand weiß, wo du bist',
            pl: 'Skaner cię wykrył: ktoś wie, gdzie jesteś',
        },
        flareOutside: {
            ru: 'Шашка упала за кругом: груза не будет',
            ua: 'Шашка впала за колом: вантажу не буде',
            en: 'The flare landed outside the circle: no supply drop',
            de: 'Die Fackel ist außerhalb des Kreises gelandet: kein Abwurf',
            pl: 'Raca spadła poza kręgiem: zrzutu nie będzie',
        },
        flareUsed: {
            ru: 'Самолёт с грузом летит к шашке',
            ua: 'Літак із вантажем летить до шашки',
            en: 'A plane is bringing the supply to your flare',
            de: 'Ein Flugzeug bringt den Abwurf zu deiner Fackel',
            pl: 'Samolot leci ze zrzutem do twojej racy',
        },
        intelNothing: {
            ru: 'Следующих кругов больше нет',
            ua: 'Наступних кіл більше немає',
            en: 'There are no more circles to show',
            de: 'Es gibt keine weiteren Kreise',
            pl: 'Nie ma już kolejnych kręgów',
        },
        droneInVehicle: {
            ru: 'Дрон нельзя запустить из транспорта',
            ua: 'Дрон не можна запустити з транспорту',
            en: 'You cannot launch the drone from a vehicle',
            de: 'Die Drohne kann nicht aus einem Fahrzeug gestartet werden',
            pl: 'Nie można uruchomić drona z pojazdu',
        },
        droneOutsideZone: {
            ru: 'Дрон нельзя запустить вне зоны',
            ua: 'Дрон не можна запустити поза зоною',
            en: 'You cannot launch the drone outside the circle',
            de: 'Die Drohne kann nicht außerhalb des Kreises gestartet werden',
            pl: 'Nie można uruchomić drona poza kręgiem',
        },
        bandageCap: {
            ru: 'Бинт не лечит выше 75 HP',
            ua: 'Бинт не лікує вище 75 HP',
            en: 'A bandage heals no higher than 75 HP',
            de: 'Ein Verband heilt nicht über 75 HP',
            pl: 'Bandaż nie leczy powyżej 75 HP',
        },
    },
};
