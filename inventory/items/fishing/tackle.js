// Rod tackle of the fishing job (src/shared/jobs/fishing/tackle.ts): lures go into the bait slot and stay on the rod,
// reels and lines fill their own slots. The numbers a part changes are drawn by the page from the config.
export const lures = {
    spoon: {
        name: {
            ru: 'Блесна',
            ua: 'Блешня',
            en: 'Spoon Lure',
            de: 'Blinker',
        },
        desc: {
            ru: 'Искусственная приманка для окуня, форели и скумбрии. Остаётся на удочке и теряется только при обрыве лески.',
            ua: 'Штучна приманка для окуня, форелі та скумбрії. Лишається на вудці й губиться лише при обриві волосіні.',
            en: 'An artificial lure for bass, trout and mackerel. Stays on the rod and is lost only when the line snaps.',
            de: 'Ein Kunstköder für Barsche, Forellen und Makrelen. Bleibt an der Angel und geht nur bei einem Schnurriss verloren.',
        },
    },
    wobbler: {
        name: {
            ru: 'Воблер',
            ua: 'Воблер',
            en: 'Wobbler',
            de: 'Wobbler',
        },
        desc: {
            ru: 'Приманка для крупного хищника озёр и скал. Остаётся на удочке и теряется только при обрыве лески.',
            ua: 'Приманка для великого хижака озер і скель. Лишається на вудці й губиться лише при обриві волосіні.',
            en: 'A lure for the big predators of the lakes and the rocks. Stays on the rod and is lost only when the line snaps.',
            de: 'Ein Köder für die großen Räuber der Seen und Felsen. Bleibt an der Angel und geht nur bei einem Schnurriss verloren.',
        },
    },
    offshore: {
        name: {
            ru: 'Троллинговая приманка',
            ua: 'Тролінгова приманка',
            en: 'Trolling Lure',
            de: 'Hochsee-Schleppköder',
        },
        desc: {
            ru: 'Тяжёлая приманка открытого океана: для тунца, корифены и марлина. Теряется только при обрыве лески.',
            ua: 'Важка приманка відкритого океану: для тунця, корифени й марліна. Губиться лише при обриві волосіні.',
            en: 'A heavy open-ocean lure for tuna, dorado and marlin. Lost only when the line snaps.',
            de: 'Ein schwerer Hochseeköder für Thun, Goldmakrele und Marlin. Geht nur bei einem Schnurriss verloren.',
        },
    },
};

export const reels = {
    reinforced: {
        name: {
            ru: 'Усиленная катушка',
            ua: 'Посилена котушка',
            en: 'Reinforced Reel',
            de: 'Verstärkte Rolle',
        },
        desc: {
            ru: 'Леска натягивается медленнее, но и подмотка идёт медленнее.',
            ua: 'Волосінь натягується повільніше, але й підмотування йде повільніше.',
            en: 'The line tightens slower, but reeling in is slower too.',
            de: 'Die Schnur spannt sich langsamer, aber auch das Einholen geht langsamer.',
        },
    },
    speed: {
        name: {
            ru: 'Скоростная катушка',
            ua: 'Швидкісна котушка',
            en: 'Speed Reel',
            de: 'Highspeed-Rolle',
        },
        desc: {
            ru: 'Подмотка быстрее, но леска натягивается быстрее.',
            ua: 'Підмотування швидше, але волосінь натягується швидше.',
            en: 'Reels in faster, but the line tightens faster.',
            de: 'Holt schneller ein, aber die Schnur spannt sich schneller.',
        },
    },
    smoothDrag: {
        name: {
            ru: 'Катушка с плавным фрикционом',
            ua: 'Котушка з плавним фрикціоном',
            en: 'Smooth Drag Reel',
            de: 'Rolle mit Feinbremse',
        },
        desc: {
            ru: 'Гасит рывки рыбы, но в спокойные моменты подмотка чуть медленнее.',
            ua: 'Гасить ривки риби, але в спокійні моменти підмотування трохи повільніше.',
            en: 'Softens the fish\'s runs, but reels a little slower while it is calm.',
            de: 'Dämpft die Fluchten des Fisches, holt in ruhigen Momenten aber etwas langsamer ein.',
        },
    },
};

export const lines = {
    strong: {
        name: {
            ru: 'Прочная леска',
            ua: 'Міцна волосінь',
            en: 'Strong Line',
            de: 'Starke Schnur',
        },
        desc: {
            ru: 'Дольше держит в красной зоне, но окно подсечки короче.',
            ua: 'Довше тримає в червоній зоні, але вікно підсікання коротше.',
            en: 'Holds longer in the red zone, but the strike window is shorter.',
            de: 'Hält länger im roten Bereich, aber das Anschlagfenster ist kürzer.',
        },
    },
    sensitive: {
        name: {
            ru: 'Чувствительная леска',
            ua: 'Чутлива волосінь',
            en: 'Sensitive Line',
            de: 'Sensible Schnur',
        },
        desc: {
            ru: 'Поклёвка видна раньше, а окно подсечки длиннее, но в красной зоне леска рвётся быстрее.',
            ua: 'Клювання видно раніше, а вікно підсікання довше, але в червоній зоні волосінь рветься швидше.',
            en: 'The bite shows earlier and the strike window is longer, but the line snaps sooner in the red zone.',
            de: 'Der Biss zeigt sich früher und das Anschlagfenster ist länger, aber im roten Bereich reißt die Schnur schneller.',
        },
    },
};
