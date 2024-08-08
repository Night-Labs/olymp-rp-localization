export default {
    name: {
        ru: 'Рыбалка',
        ua: 'Риболовля',
        en: 'Fishing',
        de: 'Angeln',
        pl: 'Wędkarstwo',
    },

    playingFish: {
        ru: 'Вываживание',
        ua: 'Виважування',
        en: 'Playing Fish',
        de: 'Drillen',
        pl: 'Holowanie',
    },

    catchLanding: {
        ru: 'Вытягивание',
        ua: 'Витягування',
        en: 'Catch Landing',
        de: 'Landen',
        pl: 'Lądowanie',
    },

    fishingStart: {
        ru: 'Вы забросили крючок! Ожидайте пока рыба клюнет.',
        ua: 'Ви закинули гачок! Очікуйте поки риба клюне.',
        en: 'You cast the hook! Wait for the fish to bite.',
        de: 'Sie haben den Haken ausgeworfen! Warten Sie, bis der Fisch anbeißt.',
        pl: 'Zarzucono haczyk! Czekaj, aż ryba złapie.',
    },

    startPlayingFish: {
        ru: 'Рыба клюнула! Теперь вываживайте её, для этого держите крючок внутри маркера, а также тяните указанную сторону.',
        ua: 'Риба клюнула! Тепер виважуйте її, для цього тримайте гачок всередині маркера, а також тягніть зазначений бік.',
        en: 'The fish bit! Now reel it in by keeping the hook inside the marker and pulling the indicated side.',
        de: 'Der Fisch hat angebissen! Holen Sie ihn ein, indem Sie den Haken im Marker halten und die angegebene Seite ziehen.',
        pl: 'Ryba złapała! Teraz holuj ją, trzymając haczyk wewnątrz znacznika i ciągnąc wskazaną stronę.',
    },

    startCatchLanding: {
        ru: 'Рыба устала! Теперь вытягивайте её, для этого продолжайте держать крючок внутри маркера, и тянуть как можно быстрее.',
        ua: 'Риба втомилася! Тепер витягайте її, для цього продовжуйте тримати гачок всередині маркера, і тягніть якнайшвидше.',
        en: 'The fish is tired! Now pull it out by keeping the hook inside the marker and pulling as quickly as possible.',
        de: 'Der Fisch ist müde! Ziehen Sie ihn jetzt heraus, indem Sie den Haken im Marker halten und so schnell wie möglich ziehen.',
        pl: 'Ryba się zmęczyła! Teraz wyciągaj ją, trzymając haczyk wewnątrz znacznika i ciągnąc jak najszybciej.',
    },

    errorPlace: {
        ru: 'Здесь нельзя рыбачить.',
        ua: 'Тут не можна рибалити.',
        en: 'Fishing is not allowed here.',
        de: 'Angeln ist hier nicht erlaubt.',
        pl: 'Łowienie ryb jest tutaj zabronione.',
    },

    noBite: {
        ru: 'У вас нет подходящей наживки.',
        ua: 'У вас немає підходящої наживки.',
        en: "You don't have the right bait.",
        de: 'Sie haben keinen passenden Köder.',
        pl: 'Nie masz odpowiedniej przynęty.',
    },

    isSwimming: {
        ru: 'Вы не можете рыбачить, пока вы плаваете.',
        ua: 'Ви не можете рибалити, поки ви плаваєте.',
        en: 'You cannot fish while you are swimming.',
        de: 'Sie können nicht angeln, während Sie schwimmen.',
        pl: 'Nie możesz łowić ryb, gdy pływasz.',
    },

    errorHeader: {
        ru: 'Рыба ускользнула',
        ua: 'Риба вислизнула',
        en: 'The fish slipped away',
        de: 'Der Fisch ist entwischt',
        pl: 'Ryba uciekła',
    },

    errorLvlPosition: {
        ru: 'Это место доступно с {{lvl}} уровня рыбалки',
        ua: 'Це місце доступне з {{lvl}} рівня риболовлі',
        en: 'This spot is available from fishing level {{lvl}}',
        de: 'Dieser Ort ist ab Angelstufe {{lvl}} verfügbar',
        pl: 'To miejsce jest dostępne od poziomu wędkowania {{lvl}}',
    },

    errorLvl: {
        ru: 'У ваших навыков не хватило чтобы справится с этой рыбой.',
        ua: 'Ваших навичок не вистачило, щоб впоратися з цією рибою.',
        en: 'Your skills were not enough to handle this fish.',
        de: 'Ihre Fähigkeiten reichten nicht aus, um diesen Fisch zu bewältigen.',
        pl: 'Twoje umiejętności nie wystarczyły, aby poradzić sobie z tą rybą.',
    },

    errorRod: {
        ru: 'Ваша удочка не рассчитана для рыбалки в этом месте.',
        ua: 'Ваша вудка не розрахована для риболовлі в цьому місці.',
        en: 'Your rod is not suitable for fishing in this location.',
        de: 'Ihre Angelrute ist für das Angeln an diesem Ort nicht geeignet.',
        pl: 'Twoja wędka nie nadaje się do łowienia w tym miejscu.',
    },

    noWater1: {
        ru: 'Здесь слишком мелко, попробуйте закинуть крючёк в более глубоком месте.',
        ua: 'Тут занадто мілко, спробуйте закинути гачок у глибшому місці.',
        en: "It's too shallow here, try casting the hook in a deeper spot.",
        de: 'Es ist hier zu seicht, versuchen Sie den Haken an einer tieferen Stelle auszuwerfen.',
        pl: 'Jest tu za płytko, spróbuj zarzucić haczyk w głębszym miejscu.',
    },

    noWater2: {
        ru: 'В этом месте слишком мелко, крючёк зацепился за дно и раба уплыла.',
        ua: 'У цьому місці занадто мілко, гачок зачепився за дно і риба втекла.',
        en: 'It is too shallow here, the hook got stuck on the bottom and the fish swam away.',
        de: 'Es ist hier zu seicht, der Haken hat sich am Boden verfangen und der Fisch ist weggeschwommen.',
        pl: 'Jest tu za płytko, haczyk zaczepił się o dno i ryba uciekła.',
    },

    failMistakes: {
        ru: 'Вы допустили слишком много ошибок, рыбке удалось выскочить и она уплыла.',
        ua: 'Ви допустили занадто багато помилок, рибці вдалося вискочити і вона втекла.',
        en: 'You made too many mistakes, the fish managed to escape and swim away.',
        de: 'Sie haben zu viele Fehler gemacht, der Fisch konnte entkommen und wegschwimmen.',
        pl: 'Popełniłeś zbyt wiele błędów, rybie udało się uciec i odpłynęła.',
    },

    failCatchLanding: {
        ru: 'Вы слишком неосторожно вытаскивали рыбку и она соскочила с крючка и уплыла.',
        ua: 'Ви занадто необережно витягували рибку і вона зіскочила з гачка та втекла.',
        en: 'You were too careless in landing the fish and it slipped off the hook and swam away.',
        de: 'Sie waren zu unvorsichtig beim Landen des Fisches und er rutschte vom Haken und schwamm weg.',
        pl: 'Byłeś zbyt nieostrożny przy wyciąganiu ryby i zeszła z haczyka, a następnie odpłynęła.',
    },

    waterTypes: {
        waterType: {
            ru: 'Тип воды',
            ua: 'Тип води',
            en: 'Water type',
            de: 'Wassertyp',
            pl: 'Rodzaj wody',
        },

        freshWater: {
            ru: 'Пресная вода',
            ua: 'Прісна вода',
            en: 'Fresh water',
            de: 'Süßwasser',
            pl: 'Woda słodka',
        },
        saltWater: {
            ru: 'Соленая вода',
            ua: 'Солона вода',
            en: 'Salt water',
            de: 'Salzwasser',
            pl: 'Woda słona',
        },
    },

    fishingPlace: {
        ru: 'Зона для рыбалки',
        ua: 'Зона для риболовлi',
        en: 'Fishing area',
        de: 'Angelgebiet',
        pl: 'Strefa wędkowania',
    },

    lvl: {
        ru: 'Нужен уровень',
        ua: 'Потрібен рівень',
        en: 'Level required',
        de: 'Level erforderlich',
        pl: 'Wymagany poziom',
    },

    license: {
        ru: 'Лицензия',
        ua: 'Ліцензія',
        en: 'License',
        de: 'Lizenz',
        pl: 'Licencja',
    },

    licenseTrue: {
        ru: 'нужна',
        ua: 'потрібна',
        en: 'required',
        de: 'erforderlich',
        pl: 'wymagana',
    },
    licenseFalse: {
        ru: 'не нужна',
        ua: 'не потрібна',
        en: 'not required',
        de: 'nicht erforderlich',
        pl: 'nie wymagana',
    },
};
