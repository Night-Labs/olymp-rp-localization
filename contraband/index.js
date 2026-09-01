export const contraband = {
    name: {
        ru: 'Контрабанда',
        ua: 'Контрабанда',
        en: 'Contraband',
        de: 'Schmuggelware',
        pl: 'Kontrabanda',
    },

    family: {
        industrial: {
            ru: 'промышленное сырьё',
            ua: 'промислова сировина',
            en: 'industrial materials',
            de: 'Industriematerial',
            pl: 'surowce przemyslowe',
        },
        mechanical: {
            ru: 'механическое сырьё',
            ua: 'механічна сировина',
            en: 'mechanical materials',
            de: 'Mechanikmaterial',
            pl: 'surowce mechaniczne',
        },
        chemical: {
            ru: 'химическое сырьё',
            ua: 'хімічна сировина',
            en: 'chemical materials',
            de: 'Chemiematerial',
            pl: 'surowce chemiczne',
        },
    },

    announce: {
        ru: '~o~› ~w~Контрабанда: ящики завезли в район {{zones}}. Вскрыть их можно через {{minutes}} мин.',
        ua: '~o~› ~w~Контрабанда: ящики завезли в район {{zones}}. Розкрити їх можна через {{minutes}} хв.',
        en: '~o~› ~w~Contraband: crates dropped in {{zones}}. They can be cracked in {{minutes}} min.',
        de: '~o~› ~w~Schmuggelware: Kisten in {{zones}} abgesetzt. Aufbrechen in {{minutes}} Min. moeglich.',
        pl: '~o~› ~w~Kontrabanda: skrzynie zrzucone w {{zones}}. Mozna je otworzyc za {{minutes}} min.',
    },

    start: {
        ru: '~o~› ~w~Контрабанда: ящики можно вскрывать — {{zones}}',
        ua: '~o~› ~w~Контрабанда: ящики можна розкривати — {{zones}}',
        en: '~o~› ~w~Contraband: the crates are open for cracking — {{zones}}',
        de: '~o~› ~w~Schmuggelware: Die Kisten koennen aufgebrochen werden — {{zones}}',
        pl: '~o~› ~w~Kontrabanda: skrzynie mozna otwierac — {{zones}}',
    },

    end: {
        ru: '~o~› ~w~Контрабанда: событие завершено, несобранное пропало',
        ua: '~o~› ~w~Контрабанда: подію завершено, незібране зникло',
        en: '~o~› ~w~Contraband: the event is over, everything left behind is gone',
        de: '~o~› ~w~Schmuggelware: Das Event ist vorbei, alles Zurueckgelassene ist weg',
        pl: '~o~› ~w~Kontrabanda: wydarzenie zakonczone, niezebrane przepadlo',
    },

    crate: {
        open: {
            ru: 'Вскрыть ящик',
            ua: 'Розкрити ящик',
            en: 'Crack the crate open',
            de: 'Kiste aufbrechen',
            pl: 'Otworz skrzynie',
        },
        inspect: {
            ru: 'Осмотреть ящик',
            ua: 'Оглянути ящик',
            en: 'Inspect the crate',
            de: 'Kiste durchsuchen',
            pl: 'Przeszukaj skrzynie',
        },
        reopen: {
            ru: 'Вскрыть повторно',
            ua: 'Розкрити повторно',
            en: 'Crack it open again',
            de: 'Erneut aufbrechen',
            pl: 'Otworz ponownie',
        },
        locked: {
            ru: 'Ящик запечатан',
            ua: 'Ящик запечатаний',
            en: 'The crate is sealed',
            de: 'Die Kiste ist versiegelt',
            pl: 'Skrzynia jest zapieczetowana',
        },
        stillSealed: {
            ru: 'Ящики ещё запечатаны. Вскрыть можно через {{minutes}} мин. {{seconds}} сек.',
            ua: 'Ящики ще запечатані. Розкрити можна через {{minutes}} хв. {{seconds}} сек.',
            en: 'The crates are still sealed. They can be cracked in {{minutes}} min {{seconds}} sec.',
            de: 'Die Kisten sind noch versiegelt. Aufbrechen in {{minutes}} Min. {{seconds}} Sek.',
            pl: 'Skrzynie sa jeszcze zapieczetowane. Mozna je otworzyc za {{minutes}} min {{seconds}} sek.',
        },
        busy: {
            ru: 'Ящик уже вскрывает другой игрок',
            ua: 'Ящик вже розкриває інший гравець',
            en: 'Another player is already cracking this crate',
            de: 'Ein anderer Spieler bricht diese Kiste bereits auf',
            pl: 'Inny gracz juz otwiera te skrzynie',
        },
        interrupted: {
            ru: 'Вскрытие прервано. Прогресс не сохраняется.',
            ua: 'Розкриття перервано. Прогрес не зберігається.',
            en: 'Cracking interrupted. Progress is not saved.',
            de: 'Aufbrechen unterbrochen. Der Fortschritt wird nicht gespeichert.',
            pl: 'Otwieranie przerwane. Postep nie jest zapisywany.',
        },
        openProgress: {
            ru: 'Вскрытие ящика...',
            ua: 'Розкриття ящика...',
            en: 'Cracking the crate...',
            de: 'Kiste wird aufgebrochen...',
            pl: 'Otwieranie skrzyni...',
        },
        reopenProgress: {
            ru: 'Повторное вскрытие...',
            ua: 'Повторне розкриття...',
            en: 'Cracking it again...',
            de: 'Erneutes Aufbrechen...',
            pl: 'Ponowne otwieranie...',
        },
    },

    blocked: {
        storage: {
            ru: 'Сырьё из ящиков нельзя убрать в багажник, рюкзак или хранилище, пока активна метка «гружёный».',
            ua: 'Сировину з ящиків не можна прибрати в багажник, рюкзак чи сховище, поки активна мітка «завантажений».',
            en: 'Crate materials cannot go into a trunk, a backpack or a storage while the loaded mark is active.',
            de: 'Kistenmaterial kann nicht in Kofferraum, Rucksack oder Lager, solange die Beladen-Markierung aktiv ist.',
            pl: 'Surowcow ze skrzyn nie mozna schowac do bagaznika, plecaka ani magazynu, dopoki znacznik zaladowania jest aktywny.',
        },
        drop: {
            ru: 'Сырьё из ящиков нельзя выбросить: его можно только унести или потерять при смерти.',
            ua: 'Сировину з ящиків не можна викинути: її можна лише винести або втратити при смерті.',
            en: 'Crate materials cannot be dropped: you either carry them out or lose them when you die.',
            de: 'Kistenmaterial kann nicht weggeworfen werden: Du traegst es raus oder verlierst es beim Tod.',
            pl: 'Surowcow ze skrzyn nie mozna wyrzucic: albo je wyniesiesz, albo stracisz po smierci.',
        },
        transfer: {
            ru: 'Сырьё из ящиков нельзя передать другому игроку, пока активна метка «гружёный».',
            ua: 'Сировину з ящиків не можна передати іншому гравцеві, поки активна мітка «завантажений».',
            en: 'Crate materials cannot be handed to another player while the loaded mark is active.',
            de: 'Kistenmaterial kann nicht an andere Spieler uebergeben werden, solange die Beladen-Markierung aktiv ist.',
            pl: 'Surowcow ze skrzyn nie mozna przekazac innemu graczowi, dopoki znacznik zaladowania jest aktywny.',
        },
    },

    marked: {
        info: {
            ru: 'Вы гружёны контрабандой: сырьё нельзя убрать в багажник, хранилище или передать — и оно выпадет, если вы умрёте или выйдете из игры. Метка снимется через минуту после выхода из зоны.',
            ua: 'Ви завантажені контрабандою: сировину не можна прибрати в багажник, сховище чи передати — і вона випаде, якщо ви помрете або вийдете з гри. Мітка зніметься через хвилину після виходу із зони.',
            en: 'You are loaded with contraband: the materials cannot be stored or handed over, and they drop if you die or quit. The mark clears one minute after you leave the zone.',
            de: 'Du bist mit Schmuggelware beladen: Das Material kann nicht gelagert oder uebergeben werden und faellt, wenn du stirbst oder das Spiel verlaesst. Die Markierung endet eine Minute nach Verlassen der Zone.',
            pl: 'Jestes zaladowany kontrabanda: surowcow nie mozna schowac ani przekazac, a wypadna, gdy zginiesz lub wyjdziesz z gry. Znacznik zniknie minute po opuszczeniu strefy.',
        },
        leftZone: {
            ru: 'Вы покинули зону. Метка «гружёный» снимется через {{seconds}} сек.',
            ua: 'Ви покинули зону. Мітка «завантажений» зніметься через {{seconds}} сек.',
            en: 'You left the zone. The loaded mark clears in {{seconds}} sec.',
            de: 'Du hast die Zone verlassen. Die Beladen-Markierung endet in {{seconds}} Sek.',
            pl: 'Opusciles strefe. Znacznik zaladowania zniknie za {{seconds}} sek.',
        },
        countdown: {
            ru: 'До снятия метки «гружёный»',
            ua: 'До зняття мітки «завантажений»',
            en: 'Until the loaded mark clears',
            de: 'Bis die Beladen-Markierung endet',
            pl: 'Do zniknieca znacznika zaladowania',
        },
        cleared: {
            ru: 'Метка «гружёный» снята. Сырьё в безопасности.',
            ua: 'Мітку «завантажений» знято. Сировина в безпеці.',
            en: 'The loaded mark is cleared. Your materials are safe.',
            de: 'Die Beladen-Markierung ist weg. Dein Material ist sicher.',
            pl: 'Znacznik zaladowania zniknal. Surowce sa bezpieczne.',
        },
        dropped: {
            ru: 'Вы погибли гружёным: сырьё из ящиков выпало на землю.',
            ua: 'Ви загинули завантаженим: сировина з ящиків випала на землю.',
            en: 'You died while loaded: the crate materials dropped on the ground.',
            de: 'Du bist beladen gestorben: Das Material aus den Kisten liegt am Boden.',
            pl: 'Zginales zaladowany: surowce ze skrzyn wypadly na ziemie.',
        },
    },

    hud: {
        untilOpen: {
            ru: 'До вскрытия ящиков',
            ua: 'До розкриття ящиків',
            en: 'Until the crates open',
            de: 'Bis die Kisten oeffnen',
            pl: 'Do otwarcia skrzyn',
        },
        untilEnd: {
            ru: 'До чистки зоны',
            ua: 'До чищення зони',
            en: 'Until the zone is cleared',
            de: 'Bis die Zone geraeumt wird',
            pl: 'Do wyczyszczenia strefy',
        },
    },
};
