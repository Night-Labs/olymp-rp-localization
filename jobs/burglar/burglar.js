export default {
    header: {
        ru: 'Домушник',
        ua: 'Домушник',
        en: 'Burglar',
        de: 'Einbrecher',
        pl: 'Włamywacz',
    },

    doorBlip: {
        ru: 'Дом на очереди',
        ua: 'Будинок на черзі',
        en: 'Marked house',
        de: 'Markiertes Haus',
        pl: 'Oznaczony dom',
    },

    targetMarked: {
        ru: 'Дом отмечен на карте: {{label}}, до него {{distance}} м',
        ua: 'Будинок відзначений на карті: {{label}}, до нього {{distance}} м',
        en: 'The house is marked on the map: {{label}}, {{distance}} m away',
        de: 'Das Haus ist auf der Karte markiert: {{label}}, {{distance}} m entfernt',
        pl: 'Dom jest oznaczony na mapie: {{label}}, odległość {{distance}} m',
    },

    enterHouse: {
        ru: 'Войти в дом',
        ua: 'Увійти в будинок',
        en: 'Enter the house',
        de: 'Das Haus betreten',
        pl: 'Wejdź do domu',
    },

    leaveHouse: {
        ru: 'Выйти на улицу',
        ua: 'Вийти на вулицю',
        en: 'Go back outside',
        de: 'Nach draußen gehen',
        pl: 'Wyjdź na zewnątrz',
    },

    inside: {
        ru: 'Внутри есть чем поживиться: {{count}} вещей',
        ua: 'Усередині є чим поживитися: {{count}} речей',
        en: 'There is something worth taking inside: {{count}} items',
        de: 'Drinnen gibt es etwas zu holen: {{count}} Gegenstände',
        pl: 'W środku jest coś wartego zabrania: {{count}} przedmiotów',
    },

    takeProp: {
        ru: 'Взять вещь',
        ua: 'Взяти річ',
        en: 'Pick the item up',
        de: 'Gegenstand aufheben',
        pl: 'Podnieś przedmiot',
    },

    dropProp: {
        ru: 'Поставить вещь',
        ua: 'Поставити річ',
        en: 'Put the item down',
        de: 'Gegenstand abstellen',
        pl: 'Odłóż przedmiot',
    },

    handsFull: {
        ru: 'У вас уже занятые руки',
        ua: 'У вас уже зайняті руки',
        en: 'Your hands are already full',
        de: 'Ihre Hände sind bereits voll',
        pl: 'Masz już zajęte ręce',
    },

    alreadyInside: {
        ru: 'Сначала выйдите из дома',
        ua: 'Спочатку вийдіть з будинку',
        en: 'Leave the house first',
        de: 'Verlassen Sie zuerst das Haus',
        pl: 'Najpierw opuść dom',
    },

    unknownInterior: {
        ru: 'Интерьера «{{id}}» не существует',
        ua: 'Інтер’єру «{{id}}» не існує',
        en: 'There is no interior "{{id}}"',
        de: 'Es gibt kein Interieur "{{id}}"',
        pl: 'Nie ma wnętrza "{{id}}"',
    },

    noRun: {
        ru: 'Сейчас нет активного дела',
        ua: 'Зараз немає активної справи',
        en: 'There is no run going on right now',
        de: 'Derzeit läuft kein Einbruch',
        pl: 'Obecnie nie trwa żadna robota',
    },

    pickDoor: {
        ru: 'Вскрыть замок',
        ua: 'Зламати замок',
        en: 'Pick the lock',
        de: 'Schloss knacken',
        pl: 'Otworzyć zamek',
    },

    noLockpick: {
        ru: 'Нужна отмычка',
        ua: 'Потрібна відмичка',
        en: 'You need a lockpick',
        de: 'Sie brauchen einen Dietrich',
        pl: 'Potrzebujesz wytrycha',
    },

    lockpickBroken: {
        ru: 'Отмычка сломалась',
        ua: 'Відмичка зламалася',
        en: 'The lockpick snapped',
        de: 'Der Dietrich ist abgebrochen',
        pl: 'Wytrych się złamał',
    },

    alarmArmed: {
        ru: 'В доме сигнализация. У вас минута, чтобы её отключить',
        ua: 'У будинку сигналізація. У вас хвилина, щоб її вимкнути',
        en: 'The house is alarmed. You have a minute to kill it',
        de: 'Das Haus hat eine Alarmanlage. Sie haben eine Minute, sie abzuschalten',
        pl: 'Dom ma alarm. Masz minutę, żeby go wyłączyć',
    },

    disableAlarm: {
        ru: 'Отключить сигнализацию',
        ua: 'Вимкнути сигналізацію',
        en: 'Disable the alarm',
        de: 'Alarmanlage abschalten',
        pl: 'Wyłączyć alarm',
    },

    alarmDisabled: {
        ru: 'Сигнализация отключена. В запасе ещё {{minutes}} мин.',
        ua: 'Сигналізація вимкнена. У запасі ще {{minutes}} хв.',
        en: 'The alarm is dead. {{minutes}} min left to work with',
        de: 'Die Alarmanlage ist tot. Noch {{minutes}} Min. Zeit',
        pl: 'Alarm wyłączony. Zostało jeszcze {{minutes}} min.',
    },

    alarmTriggered: {
        ru: 'Сигнализация сработала, полиция уже едет',
        ua: 'Сигналізація спрацювала, поліція вже їде',
        en: 'The alarm went off, the police are on their way',
        de: 'Der Alarm ist losgegangen, die Polizei ist unterwegs',
        pl: 'Alarm się włączył, policja już jedzie',
    },

    timeUp: {
        ru: 'Время вышло, пора уходить',
        ua: 'Час вийшов, час іти',
        en: 'Time is up, get out',
        de: 'Die Zeit ist um, verschwinden Sie',
        pl: 'Czas minął, pora się zbierać',
    },

    lootTimer: {
        ru: 'До ухода',
        ua: 'До виходу',
        en: 'Time in the house',
        de: 'Zeit im Haus',
        pl: 'Czas w domu',
    },

    escapeTimer: {
        ru: 'Скрыться от полиции',
        ua: 'Сховатися від поліції',
        en: 'Stay out of sight',
        de: 'Untertauchen',
        pl: 'Ukryj się przed policją',
    },

    escaped: {
        ru: 'Всё утихло. Можно ехать к скупщику',
        ua: 'Усе вщухло. Можна їхати до скупника',
        en: 'It has gone quiet. Time to see the fence',
        de: 'Es ist ruhig geworden. Zeit zum Hehler',
        pl: 'Ucichło. Można jechać do pasera',
    },

    crackSafe: {
        ru: 'Вскрыть сейф',
        ua: 'Зламати сейф',
        en: 'Crack the safe',
        de: 'Safe knacken',
        pl: 'Otworzyć sejf',
    },

    safeCracked: {
        ru: 'В сейфе было {{money}}',
        ua: 'У сейфі було {{money}}',
        en: 'The safe held {{money}}',
        de: 'Im Safe waren {{money}}',
        pl: 'W sejfie było {{money}}',
    },

    policeAlert: {
        ru: 'Сигнализация: проникновение в дом, {{address}}',
        ua: 'Сигналізація: проникнення в будинок, {{address}}',
        en: 'Alarm: break-in reported, {{address}}',
        de: 'Alarm: Einbruch gemeldet, {{address}}',
        pl: 'Alarm: zgłoszono włamanie, {{address}}',
    },

    suspectBlip: {
        ru: 'Домушник',
        ua: 'Домушник',
        en: 'Burglar',
        de: 'Einbrecher',
        pl: 'Włamywacz',
    },

    cooldown: {
        ru: 'Слишком рано, подождите {{time}}',
        ua: 'Занадто рано, зачекайте {{time}}',
        en: 'Too soon, wait {{time}}',
        de: 'Zu früh, warten Sie {{time}}',
        pl: 'Za wcześnie, poczekaj {{time}}',
    },

    runInProgress: {
        ru: 'У вас уже есть адрес',
        ua: 'У вас уже є адреса',
        en: 'You already have an address',
        de: 'Sie haben bereits eine Adresse',
        pl: 'Masz już adres',
    },

    dropOnlyInside: {
        ru: 'На улице вещь можно только погрузить в багажник',
        ua: 'На вулиці річ можна лише завантажити в багажник',
        en: 'Outside, the only place to put it is the trunk',
        de: 'Draußen kann es nur in den Kofferraum',
        pl: 'Na zewnątrz można ją tylko włożyć do bagażnika',
    },

    loadedIntoTrunk: {
        ru: 'Вещь в багажнике',
        ua: 'Річ у багажнику',
        en: 'Loaded into the trunk',
        de: 'Im Kofferraum verstaut',
        pl: 'Załadowane do bagażnika',
    },

    trunkFull: {
        ru: 'В багажнике нет места',
        ua: 'У багажнику немає місця',
        en: 'There is no room in the trunk',
        de: 'Im Kofferraum ist kein Platz',
        pl: 'W bagażniku nie ma miejsca',
    },

    noTrunk: {
        ru: 'У этой машины нет багажника',
        ua: 'У цієї машини немає багажника',
        en: 'This vehicle has no trunk',
        de: 'Dieses Fahrzeug hat keinen Kofferraum',
        pl: 'Ten pojazd nie ma bagażnika',
    },

    notYourVehicle: {
        ru: 'Грузить можно только в свою машину',
        ua: 'Вантажити можна лише у свою машину',
        en: 'You can only load your own car',
        de: 'Sie können nur Ihr eigenes Auto beladen',
        pl: 'Możesz ładować tylko własne auto',
    },

    dialogs: {
        job: {
            gotAnAddressForYou: {
                ru: 'Есть адрес. Хозяев нет дома, замок простой. Возьмёшься?',
                ua: 'Є адреса. Господарів немає вдома, замок простий. Візьмешся?',
                en: 'I have got an address. Nobody home, simple lock. You in?',
                de: 'Ich habe eine Adresse. Niemand zu Hause, einfaches Schloss. Bist du dabei?',
                pl: 'Mam adres. Nikogo nie ma w domu, prosty zamek. Wchodzisz w to?',
            },
            moreInfo: {
                ru: 'Подробнее',
                ua: 'Детальніше',
                en: 'More info',
                de: 'Mehr Info',
                pl: 'Więcej informacji',
            },
            go: {
                ru: 'Давай',
                ua: 'Давай',
                en: 'Go',
                de: 'Los',
                pl: 'Dawaj',
            },
            howItWorks: {
                ru: 'Вскрываешь дверь, берёшь что унесёшь. В доме сигнализация - у тебя минута, чтобы её снять, иначе приедет полиция. Потом отсидишься и везёшь всё к скупщику.',
                ua: 'Розкриваєш двері, береш що винесеш. У будинку сигналізація - у тебе хвилина, щоб її зняти, інакше приїде поліція. Потім відсидишся і везеш усе до скупника.',
                en: 'You open the door and take what you can carry. The house is alarmed - one minute to kill it, or the police come. Then you sit it out and bring the lot to the fence.',
                de: 'Du machst die Tür auf und nimmst mit, was du tragen kannst. Das Haus hat Alarm - eine Minute, um ihn abzuschalten, sonst kommt die Polizei. Danach tauchst du unter und bringst alles zum Hehler.',
                pl: 'Otwierasz drzwi i bierzesz, co uniesiesz. Dom ma alarm - masz minutę, żeby go wyłączyć, inaczej przyjedzie policja. Potem przeczekujesz i wieziesz wszystko do pasera.',
            },
            yes: {
                ru: 'Согласен',
                ua: 'Згоден',
                en: 'I am in',
                de: 'Ich bin dabei',
                pl: 'Zgoda',
            },
            no: {
                ru: 'Нет',
                ua: 'Ні',
                en: 'No',
                de: 'Nein',
                pl: 'Nie',
            },
            addressIsOnYourMap: {
                ru: 'Адрес у тебя на карте. Работай тихо.',
                ua: 'Адреса в тебе на мапі. Працюй тихо.',
                en: 'The address is on your map. Keep it quiet.',
                de: 'Die Adresse ist auf deiner Karte. Mach es leise.',
                pl: 'Adres masz na mapie. Rób to cicho.',
            },
            okay: {
                ru: 'Понял',
                ua: 'Зрозумів',
                en: 'Got it',
                de: 'Verstanden',
                pl: 'Jasne',
            },
        },
        already: {
            youAreWorkingAlready: {
                ru: 'Я тебе уже дал адрес. Иди работай.',
                ua: 'Я тобі вже дав адресу. Іди працюй.',
                en: 'I already gave you an address. Go work it.',
                de: 'Ich habe dir schon eine Adresse gegeben. Los, arbeite.',
                pl: 'Już dałem ci adres. Idź do roboty.',
            },
            ahYes: {
                ru: 'А, точно',
                ua: 'А, точно',
                en: 'Ah, right',
                de: 'Ah, stimmt',
                pl: 'A, właśnie',
            },
        },
        cooldown: {
            tooSoon: {
                ru: 'Не так быстро. Приходи через {{minutes}} мин.',
                ua: 'Не так швидко. Приходь через {{minutes}} хв.',
                en: 'Not so fast. Come back in {{minutes}} min.',
                de: 'Nicht so schnell. Komm in {{minutes}} Min. wieder.',
                pl: 'Nie tak szybko. Wróć za {{minutes}} min.',
            },
            ok: {
                ru: 'Ладно',
                ua: 'Гаразд',
                en: 'Fine',
                de: 'Gut',
                pl: 'Dobra',
            },
        },
        gov: {
            notForYou: {
                ru: 'С тобой мне говорить не о чем. Иди отсюда.',
                ua: 'З тобою мені говорити нема про що. Іди звідси.',
                en: 'Nothing to talk about with you. Get lost.',
                de: 'Mit dir habe ich nichts zu bereden. Verschwinde.',
                pl: 'Nie mam z tobą o czym gadać. Spadaj.',
            },
            sorry: {
                ru: 'Извини',
                ua: 'Вибач',
                en: 'Sorry',
                de: 'Entschuldigung',
                pl: 'Przepraszam',
            },
            fuckYou: {
                ru: 'Сам иди',
                ua: 'Сам іди',
                en: 'You get lost',
                de: 'Verschwinde selbst',
                pl: 'Sam spadaj',
            },
        },
    },
};
