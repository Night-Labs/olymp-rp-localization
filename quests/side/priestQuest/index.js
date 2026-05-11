export default {
    name: {
        ru: 'Тайна исповеди',
        ua: 'Таємниця сповіді',
        en: 'Seal of Confession',
        de: 'Beichtgeheimnis',
        pl: 'Tajemnica spowiedzi',
    },
    desc: {
        ru: 'Священник из часовни просит вернуть его дневник исповедей, который кто-то унёс на свалку в пустыне Гранд-Сенора. Если записи попадут не в те руки - десятки людей пострадают.',
        ua: 'Священник із каплиці просить повернути його щоденник сповідей, який хтось виніс на звалище в пустелі Гранд-Сенора. Якщо записи потраплять не в ті руки - десятки людей постраждають.',
        en: 'The chapel priest asks you to recover his book of confessions, taken to a junkyard in the Grand Senora Desert. If the notes fall into the wrong hands, dozens of people will suffer.',
        de: 'Der Kapellenpriester bittet dich, sein Beichtbuch zurückzubringen, das jemand auf einen Schrottplatz in der Grand-Senora-Wüste gebracht hat. Geraten die Aufzeichnungen in falsche Hände, werden Dutzende Menschen leiden.',
        pl: 'Ksiądz z kaplicy prosi o odzyskanie jego dziennika spowiedzi, który ktoś wywiózł na złomowisko na pustyni Grand Senora. Jeśli zapisy trafią w niepowołane ręce, ucierpią dziesiątki ludzi.',
    },

    dialog: {
        inProgress: {
            message: {
                ru: 'Книга ещё не у меня, дитя. Поспеши - каждый час в её отсутствие я не сплю.',
                ua: 'Книга ще не у мене, дитя. Поспіши - кожну годину без неї я не сплю.',
                en: 'The book is still not with me, child. Hasten - every hour without it I cannot sleep.',
                de: 'Das Buch ist noch nicht bei mir, Kind. Eile dich - jede Stunde ohne es schlafe ich nicht.',
                pl: 'Księgi wciąż nie mam, dziecko. Pospiesz się - każda godzina bez niej to noc bez snu.',
            },
            working: {
                ru: 'Я работаю над этим.',
                ua: 'Я працюю над цим.',
                en: 'I am working on it.',
                de: 'Ich kümmere mich darum.',
                pl: 'Pracuję nad tym.',
            },
        },

        complete: {
            message: {
                ru: 'Слава Богу... ты вернул её. Дай прикоснуться. Цела, застёжка не сорвана - значит, ещё не читали. Возьми обещанное, дитя моё, и носи моё благословение с собой. Господь видит твоё доброе сердце.',
                ua: 'Слава Богу... ти повернув її. Дай торкнутися. Ціла, застібка не зірвана - значить, ще не читали. Візьми обіцяне, дитя моє, і неси моє благословення з собою. Господь бачить твоє добре серце.',
                en: 'Thanks be to God... you have brought it back. Let me touch it. Whole, the clasp unbroken - it has not been read. Take what was promised, my child, and carry my blessing with you. The Lord sees your good heart.',
                de: 'Gott sei Dank... du hast es zurückgebracht. Lass mich es berühren. Unversehrt, die Spange nicht aufgebrochen - also wurde es nicht gelesen. Nimm, was versprochen war, mein Kind, und trage meinen Segen mit dir. Der Herr sieht dein gutes Herz.',
                pl: 'Bogu niech będą dzięki... wróciłeś z nią. Daj dotknąć. Cała, zatrzask nietknięty - znaczy, jeszcze nie czytali. Weź obiecane, dziecko moje, i nieś moje błogosławieństwo ze sobą. Pan widzi twoje dobre serce.',
            },
            thanks: {
                ru: 'Благодарю, отец.',
                ua: 'Дякую, отче.',
                en: 'Thank you, father.',
                de: 'Danke, Vater.',
                pl: 'Dziękuję, ojcze.',
            },
        },
    },

    interaction: {
        search: {
            ru: 'Осмотреть',
            ua: 'Оглянути',
            en: 'Search',
            de: 'Untersuchen',
            pl: 'Przeszukać',
        },
    },

    notify: {
        empty: {
            header: {
                ru: 'Тайна исповеди',
                ua: 'Таємниця сповіді',
                en: 'Seal of Confession',
                de: 'Beichtgeheimnis',
                pl: 'Tajemnica spowiedzi',
            },
            text: {
                ru: 'Только хлам. Здесь ничего нет.',
                ua: 'Лише мотлох. Тут нічого немає.',
                en: 'Just junk. Nothing here.',
                de: 'Nur Müll. Hier ist nichts.',
                pl: 'Tylko śmieci. Nic tutaj nie ma.',
            },
        },
        found: {
            header: {
                ru: 'Тайна исповеди',
                ua: 'Таємниця сповіді',
                en: 'Seal of Confession',
                de: 'Beichtgeheimnis',
                pl: 'Tajemnica spowiedzi',
            },
            text: {
                ru: 'Дневник найден. Верни его отцу.',
                ua: 'Щоденник знайдено. Поверни його отцю.',
                en: 'The diary is found. Bring it back to the priest.',
                de: 'Das Tagebuch ist gefunden. Bring es dem Priester zurück.',
                pl: 'Dziennik znaleziony. Zwróć go ojcu.',
            },
        },
    },
};
