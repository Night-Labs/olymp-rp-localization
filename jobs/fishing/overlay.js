// The in-world fishing overlays: the rod HUD, the bite, the fight and the catch card (webviews/src/systems/fishing/overlays).
export default {
    // The rod in the hands, between casts and while the float is out.
    cast: {
        ru: 'Забросить',
        ua: 'Закинути',
        en: 'Cast',
        de: 'Auswerfen',
    },
    casting: {
        ru: 'Заброс',
        ua: 'Закидання',
        en: 'Casting',
        de: 'Wurf',
    },
    waiting: {
        ru: 'Ждём поклёвку',
        ua: 'Чекаємо на клювання',
        en: 'Waiting for a bite',
        de: 'Warten auf einen Biss',
    },
    reelIn: {
        ru: 'Вытащить леску',
        ua: 'Витягнути волосінь',
        en: 'Reel in',
        de: 'Einholen',
    },
    putAway: {
        ru: 'Шаг в сторону - убрать удочку',
        ua: 'Крок убік - прибрати вудку',
        en: 'Step away to put the rod down',
        de: 'Zur Seite gehen, um die Angel wegzulegen',
    },
    noBait: {
        ru: 'Нет наживки',
        ua: 'Немає наживки',
        en: 'No bait',
        de: 'Kein Köder',
    },
    bitesHere: {
        ru: 'Здесь клюёт',
        ua: 'Тут клює',
        en: 'Biting here',
        de: 'Hier beißt',
    },

    // The bite: the strike window.
    bite: {
        ru: 'Клюёт!',
        ua: 'Клює!',
        en: 'A bite!',
        de: 'Biss!',
    },
    strike: {
        ru: 'Подсечь',
        ua: 'Підсікти',
        en: 'Strike',
        de: 'Anschlagen',
    },

    // The fight.
    tension: {
        ru: 'Натяжение',
        ua: 'Натяг',
        en: 'Tension',
        de: 'Spannung',
    },
    line: {
        ru: 'Леска',
        ua: 'Волосінь',
        en: 'Line',
        de: 'Schnur',
    },
    fish: {
        ru: 'Рыба',
        ua: 'Риба',
        en: 'Fish',
        de: 'Fisch',
    },
    holdToReel: {
        ru: 'Держать - подматывать',
        ua: 'Тримати - підмотувати',
        en: 'Hold to reel',
        de: 'Halten zum Einholen',
    },
    states: {
        reel: {
            ru: 'Держите ЛКМ, чтобы подматывать',
            ua: 'Тримайте ЛКМ, щоб підмотувати',
            en: 'Hold LMB to reel in',
            de: 'Halte die linke Maustaste zum Einholen',
        },
        reeling: {
            ru: 'Подматываем',
            ua: 'Підмотуємо',
            en: 'Reeling in',
            de: 'Einholen',
        },
        telegraph: {
            ru: 'Сейчас дёрнет - отпустите!',
            ua: 'Зараз смикне - відпустіть!',
            en: 'It is about to run - let go!',
            de: 'Gleich zieht er - loslassen!',
        },
        surge: {
            ru: 'Рывок! Не тяните',
            ua: 'Ривок! Не тягніть',
            en: 'It runs! Do not pull',
            de: 'Flucht! Nicht ziehen',
        },
        red: {
            ru: 'Леска на пределе',
            ua: 'Волосінь на межі',
            en: 'The line is at its limit',
            de: 'Die Schnur ist am Limit',
        },
        moment: {
            ru: 'Подматывайте!',
            ua: 'Підмотуйте!',
            en: 'Reel now!',
            de: 'Jetzt einholen!',
        },
        tired: {
            ru: 'Рыба устала',
            ua: 'Риба втомилася',
            en: 'The fish is tiring',
            de: 'Der Fisch wird müde',
        },
    },

    // The catch card.
    catch: {
        caught: {
            ru: 'Улов',
            ua: 'Улов',
            en: 'Catch',
            de: 'Fang',
        },
        trophy: {
            ru: 'Трофей!',
            ua: 'Трофей!',
            en: 'Trophy!',
            de: 'Trophäe!',
        },
        record: {
            ru: 'Новый рекорд',
            ua: 'Новий рекорд',
            en: 'New record',
            de: 'Neuer Rekord',
        },
        previousBest: {
            ru: 'было {{mass}}',
            ua: 'було {{mass}}',
            en: 'was {{mass}}',
            de: 'vorher {{mass}}',
        },
        firstSpecies: {
            ru: 'Новый вид',
            ua: 'Новий вид',
            en: 'New species',
            de: 'Neue Art',
        },
        take: {
            ru: 'Забрать',
            ua: 'Забрати',
            en: 'Keep',
            de: 'Behalten',
        },
        release: {
            ru: 'Отпустить',
            ua: 'Відпустити',
            en: 'Release',
            de: 'Freilassen',
        },
        taken: {
            ru: 'В карманах',
            ua: 'У кишенях',
            en: 'In your pockets',
            de: 'In deinen Taschen',
        },
        released: {
            ru: 'Отпущена',
            ua: 'Відпущена',
            en: 'Released',
            de: 'Freigelassen',
        },
        exp: {
            ru: '+{{exp}} опыта',
            ua: '+{{exp}} досвіду',
            en: '+{{exp}} XP',
            de: '+{{exp}} EP',
        },
        contract: {
            ru: 'Контракт: {{progress}} / {{count}}',
            ua: 'Контракт: {{progress}} / {{count}}',
            en: 'Contract: {{progress}} / {{count}}',
            de: 'Auftrag: {{progress}} / {{count}}',
        },
        contractDone: {
            ru: 'Контракт выполнен',
            ua: 'Контракт виконано',
            en: 'Contract complete',
            de: 'Auftrag erfüllt',
        },
    },
};
