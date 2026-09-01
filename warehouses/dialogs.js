export default {
    messages: {
        welcome: {
            ru: 'Всё под контролем: полки на месте, замки целы, заполнено процентов на {{percent}}.\n\nЧем могу помочь?',
            ua: 'Усе під контролем: полиці на місці, замки цілі, заповнено відсотків на {{percent}}.\n\nЧим можу допомогти?',
            en: 'Everything is in order: shelves in place, locks intact, about {{percent}} percent full.\n\nHow can I help?',
            de: 'Alles in Ordnung: Regale stehen, Schlösser sind heil, etwa {{percent}} Prozent belegt.\n\nWie kann ich helfen?',
            pl: 'Wszystko pod kontrolą: regały na miejscu, zamki całe, zapełnione w jakichś {{percent}} procentach.\n\nW czym mogę pomóc?',
        },

        welcomeDebt: {
            ru: 'Плохие новости: приходила бумага из мэрии. Если налог не заплатят, через {{hours}} ч. я сдам ключи и пойду искать другую работу.\n\nПока не сдал - спрашивайте.',
            ua: 'Погані новини: приходив папір з мерії. Якщо податок не сплатять, за {{hours}} год. я здам ключі й піду шукати іншу роботу.\n\nПоки не здав - питайте.',
            en: 'Bad news: the city hall sent a letter. If the tax stays unpaid, in {{hours}} h I hand over the keys and go look for another job.\n\nUntil then, ask away.',
            de: 'Schlechte Nachrichten: Post vom Rathaus. Wird die Steuer nicht gezahlt, gebe ich in {{hours}} Std. die Schlüssel ab und suche mir eine andere Stelle.\n\nBis dahin - fragen Sie ruhig.',
            pl: 'Złe wieści: przyszło pismo z ratusza. Jeśli podatek nie zostanie zapłacony, za {{hours}} godz. oddaję klucze i szukam innej roboty.\n\nNa razie pytaj śmiało.',
        },

        welcomeFull: {
            ru: 'Осторожнее тут ходите: забито на {{percent}}%. Ещё пара ящиков, и складывать придётся мне на голову.',
            ua: 'Обережніше тут ходіть: забито на {{percent}}%. Ще пара ящиків, і складати доведеться мені на голову.',
            en: 'Watch your step in here: {{percent}}% full. A couple more crates and the only free spot left is my head.',
            de: 'Vorsicht beim Gehen: {{percent}}% voll. Noch zwei Kisten und der einzige freie Platz ist mein Kopf.',
            pl: 'Uważaj, jak chodzisz: zapełnione w {{percent}}%. Jeszcze dwie skrzynie i jedyne wolne miejsce to moja głowa.',
        },

        welcomeEmpty: {
            ru: 'Пусто. Совсем. Я тут который день пересчитываю ноль и получаю ноль.\n\nМожет, привезёте уже что-нибудь?',
            ua: 'Порожньо. Зовсім. Я тут котрий день перераховую нуль і отримую нуль.\n\nМоже, привезете вже щось?',
            en: 'Empty. Completely. I have been recounting zero for days now and keep getting zero.\n\nHow about you bring something in?',
            de: 'Leer. Vollkommen. Ich zähle hier seit Tagen die Null nach und komme immer auf null.\n\nWie wäre es, wenn Sie mal etwas herbringen?',
            pl: 'Pusto. Zupełnie. Od kilku dni przeliczam zero i wychodzi mi zero.\n\nMoże w końcu coś przywieziesz?',
        },

        welcomeFresh: {
            ru: 'Помещение новое, краской пахнет. Полки я протёр, журнал завёл.\n\nОсталось дождаться первой машины.',
            ua: 'Приміщення нове, фарбою пахне. Полиці я протер, журнал завів.\n\nЛишилося дочекатися першої машини.',
            en: 'The place is brand new, still smells of paint. Shelves wiped, journal started.\n\nAll that is missing is the first truck.',
            de: 'Die Halle ist ganz neu, riecht noch nach Farbe. Regale abgewischt, Journal angelegt.\n\nJetzt fehlt nur noch der erste Lkw.',
            pl: 'Lokal jest nowy, wciąż pachnie farbą. Regały wytarte, dziennik założony.\n\nBrakuje tylko pierwszej ciężarówki.',
        },

        anythingElse: {
            ru: 'Что-то ещё?',
            ua: 'Щось іще?',
            en: 'Anything else?',
            de: 'Sonst noch etwas?',
            pl: 'Coś jeszcze?',
        },

        report: {
            ru: 'Сейчас, гляну в бумаги.\n\nСлотов занято: {{usedSlots}} из {{maxSlots}}\nВес: {{usedWeight}} из {{maxWeight}} кг\nСекций: {{sections}} из {{sectionLimit}}\nПомещение за вами: {{days}} дн.\nЧаще всего тут лежит: {{topItem}}',
            ua: 'Зараз, гляну в папери.\n\nСлотів зайнято: {{usedSlots}} з {{maxSlots}}\nВага: {{usedWeight}} з {{maxWeight}} кг\nСекцій: {{sections}} з {{sectionLimit}}\nПриміщення за вами: {{days}} дн.\nНайчастіше тут лежить: {{topItem}}',
            en: 'One moment, let me check the papers.\n\nSlots used: {{usedSlots}} of {{maxSlots}}\nWeight: {{usedWeight}} of {{maxWeight}} kg\nSections: {{sections}} of {{sectionLimit}}\nHeld by you for: {{days}} days\nMost of what sits here: {{topItem}}',
            de: 'Moment, ich schaue in die Papiere.\n\nBelegte Slots: {{usedSlots}} von {{maxSlots}}\nGewicht: {{usedWeight}} von {{maxWeight}} kg\nSektionen: {{sections}} von {{sectionLimit}}\nIn Ihrem Besitz seit: {{days}} Tagen\nAm meisten liegt hier: {{topItem}}',
            pl: 'Chwila, zajrzę do papierów.\n\nZajęte sloty: {{usedSlots}} z {{maxSlots}}\nWaga: {{usedWeight}} z {{maxWeight}} kg\nSekcji: {{sections}} z {{sectionLimit}}\nW twoich rękach od: {{days}} dni\nNajwięcej leży tu: {{topItem}}',
        },

        journal: {
            ru: 'Журнал я веду честно, никого не выгораживаю.\n\nГрузчик месяца: {{monthName}} ({{monthMoved}} предметов)\nЗа всё время: {{bestName}} ({{bestMoved}} предметов)\nЗавезли через ворота: {{loaded}} кг\nВывезли: {{shipped}} кг\nРейсов: {{trips}}',
            ua: 'Журнал я веду чесно, нікого не вигороджую.\n\nВантажник місяця: {{monthName}} ({{monthMoved}} предметів)\nЗа весь час: {{bestName}} ({{bestMoved}} предметів)\nЗавезли через ворота: {{loaded}} кг\nВивезли: {{shipped}} кг\nРейсів: {{trips}}',
            en: 'I keep the journal honestly, I cover for nobody.\n\nHauler of the month: {{monthName}} ({{monthMoved}} items)\nAll-time record: {{bestName}} ({{bestMoved}} items)\nBrought in through the gate: {{loaded}} kg\nTaken out: {{shipped}} kg\nRuns: {{trips}}',
            de: 'Das Journal führe ich ehrlich, ich decke niemanden.\n\nLagerarbeiter des Monats: {{monthName}} ({{monthMoved}} Gegenstände)\nBestwert überhaupt: {{bestName}} ({{bestMoved}} Gegenstände)\nDurchs Tor hereingebracht: {{loaded}} kg\nHinausgebracht: {{shipped}} kg\nFahrten: {{trips}}',
            pl: 'Dziennik prowadzę uczciwie, nikogo nie kryję.\n\nMagazynier miesiąca: {{monthName}} ({{monthMoved}} przedmiotów)\nRekord wszech czasów: {{bestName}} ({{bestMoved}} przedmiotów)\nPrzywieziono przez bramę: {{loaded}} kg\nWywieziono: {{shipped}} kg\nKursów: {{trips}}',
        },

        journalEmpty: {
            ru: 'Журнал пустой. Ни одного рейса, ни одного ящика - только моя подпись на первой странице.\n\nПривезите что-нибудь, и мне будет что записать.',
            ua: 'Журнал порожній. Жодного рейсу, жодного ящика - тільки мій підпис на першій сторінці.\n\nПривезіть щось, і мені буде що записати.',
            en: 'The journal is empty. Not a single run, not a single crate - just my signature on page one.\n\nBring something in and I will have something to write down.',
            de: 'Das Journal ist leer. Keine einzige Fahrt, keine einzige Kiste - nur meine Unterschrift auf Seite eins.\n\nBringen Sie etwas her, dann habe ich auch etwas einzutragen.',
            pl: 'Dziennik jest pusty. Ani jednego kursu, ani jednej skrzyni - tylko mój podpis na pierwszej stronie.\n\nPrzywieź coś, a będę miał co zapisać.',
        },

        noAccess: {
            ru: 'А вы, простите, кто? В моих списках вас нет.',
            ua: 'А ви, вибачте, хто? У моїх списках вас немає.',
            en: 'And you are, sorry? You are not on my lists.',
            de: 'Und Sie sind, bitte? Auf meinen Listen stehen Sie nicht.',
            pl: 'A ty, przepraszam, kto? Nie ma cię na moich listach.',
        },
    },

    values: {
        nothing: {
            ru: 'пыль',
            ua: 'пил',
            en: 'dust',
            de: 'Staub',
            pl: 'kurz',
        },

        nobody: {
            ru: 'никто',
            ua: 'ніхто',
            en: 'nobody',
            de: 'niemand',
            pl: 'nikt',
        },
    },

    buttons: {
        report: {
            ru: 'Как дела на складе?',
            ua: 'Як справи на складі?',
            en: 'How are things in here?',
            de: 'Wie steht es hier?',
            pl: 'Jak tam magazyn?',
        },

        journal: {
            ru: 'Что в журнале?',
            ua: 'Що в журналі?',
            en: "What's in the journal?",
            de: 'Was steht im Journal?',
            pl: 'Co w dzienniku?',
        },

        back: {
            ru: 'Ещё вопрос',
            ua: 'Ще питання',
            en: 'One more question',
            de: 'Noch eine Frage',
            pl: 'Jeszcze jedno pytanie',
        },

        leave: {
            ru: 'Ничего, спасибо',
            ua: 'Нічого, дякую',
            en: 'Nothing, thanks',
            de: 'Nichts, danke',
            pl: 'Nic, dziękuję',
        },
    },
};
