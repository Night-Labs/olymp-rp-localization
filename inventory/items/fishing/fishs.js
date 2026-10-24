// The catch of the fishing job (src/shared/jobs/fishing/species.ts): one item per species, counted in grams.
// A trophy is a separate item of the same species (fishTrophy.<id>), sold at a higher price per kg.
export const fish = {
    bluegill: {
        name: {
            ru: 'Синежаберный солнечник',
            ua: 'Синьозябровий сонячний окунь',
            en: 'Bluegill',
            de: 'Blauer Sonnenbarsch',
        },
        desc: {
            ru: 'Небольшая рыбка прудов и причалов. С неё начинает почти каждый рыбак.',
            ua: 'Невелика рибка ставків і причалів. З неї починає майже кожен рибалка.',
            en: 'A small fish of ponds and piers. Almost every angler starts with it.',
            de: 'Ein kleiner Fisch aus Teichen und an Stegen. Fast jeder Angler fängt mit ihm an.',
        },
    },
    blackCrappie: {
        name: {
            ru: 'Чёрный краппи',
            ua: 'Чорний крапі',
            en: 'Black Crappie',
            de: 'Schwarzer Crappie',
        },
        desc: {
            ru: 'Стайная рыба, оживает на рассвете и в сумерках.',
            ua: 'Зграйна риба, оживає на світанку та в сутінках.',
            en: 'A schooling fish that comes alive at dawn and dusk.',
            de: 'Ein Schwarmfisch, der in der Morgen- und Abenddämmerung aktiv wird.',
        },
    },
    commonCarp: {
        name: {
            ru: 'Карп',
            ua: 'Короп',
            en: 'Common Carp',
            de: 'Karpfen',
        },
        desc: {
            ru: 'Тяжёлый и упрямый. Держится у дна и тянет к нему до последнего.',
            ua: 'Важкий і впертий. Тримається біля дна і тягне до нього до останнього.',
            en: 'Heavy and stubborn. Keeps to the bottom and pulls towards it to the end.',
            de: 'Schwer und stur. Hält sich am Grund und zieht bis zuletzt dorthin.',
        },
    },
    channelCatfish: {
        name: {
            ru: 'Канальный сомик',
            ua: 'Канальний сомик',
            en: 'Channel Catfish',
            de: 'Getüpfelter Gabelwels',
        },
        desc: {
            ru: 'Ночной охотник у дна. Чует наживку издалека.',
            ua: 'Нічний мисливець біля дна. Чує наживку здалеку.',
            en: 'A night hunter near the bottom. Smells bait from afar.',
            de: 'Ein nächtlicher Jäger am Grund. Riecht Köder von weitem.',
        },
    },
    barredSurfperch: {
        name: {
            ru: 'Полосатая эмбиотока',
            ua: 'Смугаста ембіотока',
            en: 'Barred Surfperch',
            de: 'Gebänderter Brandungsbarsch',
        },
        desc: {
            ru: 'Живёт в линии прибоя пляжей. Клюёт днём.',
            ua: 'Живе в лінії прибою пляжів. Клює вдень.',
            en: 'Lives in the surf line of the beaches. Bites by day.',
            de: 'Lebt in der Brandungszone der Strände. Beißt tagsüber.',
        },
    },
    pacificMackerel: {
        name: {
            ru: 'Тихоокеанская скумбрия',
            ua: 'Тихоокеанська скумбрія',
            en: 'Pacific Mackerel',
            de: 'Pazifische Makrele',
        },
        desc: {
            ru: 'Быстрая стайная рыба у причалов. Не стоит на месте ни секунды.',
            ua: 'Швидка зграйна риба біля причалів. Не стоїть на місці ні секунди.',
            en: 'A fast schooling fish around the piers. Never still for a second.',
            de: 'Ein schneller Schwarmfisch an den Piers. Steht keine Sekunde still.',
        },
    },
    californiaCorbina: {
        name: {
            ru: 'Калифорнийская корбина',
            ua: 'Каліфорнійська корбіна',
            en: 'California Corbina',
            de: 'Kalifornischer Umberfisch',
        },
        desc: {
            ru: 'Осторожная рыба прибоя. Берёт на рассвете и в сумерках.',
            ua: 'Обережна риба прибою. Бере на світанку та в сутінках.',
            en: 'A wary surf fish. Takes bait at dawn and dusk.',
            de: 'Ein vorsichtiger Brandungsfisch. Beißt in der Dämmerung.',
        },
    },
    largemouthBass: {
        name: {
            ru: 'Большеротый окунь',
            ua: 'Великоротий окунь',
            en: 'Largemouth Bass',
            de: 'Forellenbarsch',
        },
        desc: {
            ru: 'Главный хищник озёр. Бьёт по приманке резко и сразу уходит в сторону.',
            ua: 'Головний хижак озер. Б\'є по приманці різко і одразу йде вбік.',
            en: 'The top predator of the lakes. Hits a lure hard and runs sideways at once.',
            de: 'Der oberste Räuber der Seen. Schlägt hart auf den Köder und flüchtet sofort zur Seite.',
        },
    },
    smallmouthBass: {
        name: {
            ru: 'Малоротый окунь',
            ua: 'Малоротий окунь',
            en: 'Smallmouth Bass',
            de: 'Schwarzbarsch',
        },
        desc: {
            ru: 'Небольшой, но драчливый хищник чистой воды.',
            ua: 'Невеликий, але задиркуватий хижак чистої води.',
            en: 'A small but feisty predator of clear water.',
            de: 'Ein kleiner, aber kampflustiger Räuber klarer Gewässer.',
        },
    },
    rainbowTrout: {
        name: {
            ru: 'Радужная форель',
            ua: 'Райдужна форель',
            en: 'Rainbow Trout',
            de: 'Regenbogenforelle',
        },
        desc: {
            ru: 'Подвижная рыба холодных водохранилищ. Лучше всего клюёт утром.',
            ua: 'Рухлива риба холодних водосховищ. Найкраще клює зранку.',
            en: 'A lively fish of the cold reservoirs. Bites best in the morning.',
            de: 'Ein lebhafter Fisch der kalten Stauseen. Beißt morgens am besten.',
        },
    },
    flatheadCatfish: {
        name: {
            ru: 'Оливковый сом',
            ua: 'Оливковий сом',
            en: 'Flathead Catfish',
            de: 'Flachkopfwels',
        },
        desc: {
            ru: 'Огромный ночной сом. Выходит только в темноте.',
            ua: 'Величезний нічний сом. Виходить лише в темряві.',
            en: 'A huge night catfish. Comes out only in the dark.',
            de: 'Ein riesiger nächtlicher Wels. Kommt nur im Dunkeln heraus.',
        },
    },
    stripedBass: {
        name: {
            ru: 'Полосатый лаврак',
            ua: 'Смугастий лаврак',
            en: 'Striped Bass',
            de: 'Felsenbarsch',
        },
        desc: {
            ru: 'Крупный хищник, охотится в сумерках и ночью.',
            ua: 'Великий хижак, полює в сутінках і вночі.',
            en: 'A big predator that hunts at dusk and at night.',
            de: 'Ein großer Räuber, der in der Dämmerung und nachts jagt.',
        },
    },
    tilapia: {
        name: {
            ru: 'Тиляпия',
            ua: 'Тиляпія',
            en: 'Tilapia',
            de: 'Tilapia',
        },
        desc: {
            ru: 'Неприхотливая рыба солёного озера Аламо. Её здесь много.',
            ua: 'Невибаглива риба солоного озера Аламо. Її тут багато.',
            en: 'A hardy fish of the salty Alamo Sea, and there is plenty of it.',
            de: 'Ein genügsamer Fisch des salzigen Alamo Sea, und davon gibt es reichlich.',
        },
    },
    stripedMullet: {
        name: {
            ru: 'Лобан',
            ua: 'Лобань',
            en: 'Striped Mullet',
            de: 'Großkopfmeeräsche',
        },
        desc: {
            ru: 'Ходит стаями у поверхности Аламо. Резко срывается с места.',
            ua: 'Ходить зграями біля поверхні Аламо. Різко зривається з місця.',
            en: 'Schools near the surface of the Alamo. Bolts off without warning.',
            de: 'Zieht in Schwärmen dicht unter der Oberfläche des Alamo. Schießt ohne Vorwarnung davon.',
        },
    },
    sargo: {
        name: {
            ru: 'Сарг',
            ua: 'Сарг',
            en: 'Sargo',
            de: 'Sargo',
        },
        desc: {
            ru: 'Полосатая рыба Аламо, кормится в сумерках и ночью.',
            ua: 'Смугаста риба Аламо, годується в сутінках і вночі.',
            en: 'A striped fish of the Alamo that feeds at dusk and at night.',
            de: 'Ein gestreifter Fisch des Alamo, der in der Dämmerung und nachts frisst.',
        },
    },
    orangemouthCorvina: {
        name: {
            ru: 'Оранжеворотая корвина',
            ua: 'Помаранчеворота корвіна',
            en: 'Orangemouth Corvina',
            de: 'Orangemaul-Corvina',
        },
        desc: {
            ru: 'Самый крупный хищник Аламо. Редкая и сильная рыба.',
            ua: 'Найбільший хижак Аламо. Рідкісна і сильна риба.',
            en: 'The biggest predator of the Alamo. A rare and strong fish.',
            de: 'Der größte Räuber des Alamo. Ein seltener und kräftiger Fisch.',
        },
    },
    kelpBass: {
        name: {
            ru: 'Келповый окунь',
            ua: 'Келповий окунь',
            en: 'Kelp Bass',
            de: 'Kelpbarsch',
        },
        desc: {
            ru: 'Хозяин водорослевых зарослей у скалистых берегов.',
            ua: 'Господар водоростевих заростей біля скелястих берегів.',
            en: 'The master of the kelp beds along the rocky coast.',
            de: 'Der Herr der Kelpwälder an der Felsküste.',
        },
    },
    californiaSheephead: {
        name: {
            ru: 'Калифорнийский губан',
            ua: 'Каліфорнійський губань',
            en: 'California Sheephead',
            de: 'Kalifornischer Schafskopf',
        },
        desc: {
            ru: 'Крепкий донный житель скал с мощными зубами.',
            ua: 'Міцний донний мешканець скель із потужними зубами.',
            en: 'A tough bottom dweller of the rocks with powerful teeth.',
            de: 'Ein zäher Grundbewohner der Felsen mit kräftigen Zähnen.',
        },
    },
    vermilionRockfish: {
        name: {
            ru: 'Киноварный морской окунь',
            ua: 'Кіноварний морський окунь',
            en: 'Vermilion Rockfish',
            de: 'Zinnober-Drachenkopf',
        },
        desc: {
            ru: 'Ярко-красный житель глубоких скал. Клюёт в любое время.',
            ua: 'Яскраво-червоний мешканець глибоких скель. Клює будь-коли.',
            en: 'A bright red dweller of the deep rocks. Bites at any hour.',
            de: 'Ein leuchtend roter Bewohner tiefer Felsen. Beißt zu jeder Stunde.',
        },
    },
    californiaHalibut: {
        name: {
            ru: 'Калифорнийский палтус',
            ua: 'Каліфорнійський палтус',
            en: 'California Halibut',
            de: 'Kalifornischer Heilbutt',
        },
        desc: {
            ru: 'Плоская рыба песчаного дна. Ложится на дно и не хочет подниматься.',
            ua: 'Пласка риба піщаного дна. Лягає на дно і не хоче підійматися.',
            en: 'A flatfish of the sandy bottom. Lies flat and refuses to come up.',
            de: 'Ein Plattfisch vom Sandgrund. Legt sich flach hin und will nicht hoch.',
        },
    },
    lingcod: {
        name: {
            ru: 'Зубатый терпуг',
            ua: 'Зубатий терпуг',
            en: 'Lingcod',
            de: 'Lingcod',
        },
        desc: {
            ru: 'Зубастый хищник скал. Хватает всё, что движется.',
            ua: 'Зубатий хижак скель. Хапає все, що рухається.',
            en: 'A toothy predator of the rocks. Grabs anything that moves.',
            de: 'Ein bezahnter Räuber der Felsen. Schnappt nach allem, was sich bewegt.',
        },
    },
    leopardShark: {
        name: {
            ru: 'Леопардовая акула',
            ua: 'Леопардова акула',
            en: 'Leopard Shark',
            de: 'Leopardenhai',
        },
        desc: {
            ru: 'Небольшая пятнистая акула, подходит к берегу в сумерках.',
            ua: 'Невелика плямиста акула, підходить до берега в сутінках.',
            en: 'A small spotted shark that comes inshore at dusk.',
            de: 'Ein kleiner gefleckter Hai, der in der Dämmerung ans Ufer kommt.',
        },
    },
    pacificBarracuda: {
        name: {
            ru: 'Тихоокеанская барракуда',
            ua: 'Тихоокеанська барракуда',
            en: 'Pacific Barracuda',
            de: 'Pazifischer Barrakuda',
        },
        desc: {
            ru: 'Стремительный хищник прибрежных вод. Ловится только с лодки.',
            ua: 'Стрімкий хижак прибережних вод. Ловиться лише з човна.',
            en: 'A swift predator of the coastal waters. Caught only from a boat.',
            de: 'Ein pfeilschneller Räuber der Küstengewässer. Nur vom Boot aus zu fangen.',
        },
    },
    pacificBonito: {
        name: {
            ru: 'Тихоокеанская пеламида',
            ua: 'Тихоокеанська пеламіда',
            en: 'Pacific Bonito',
            de: 'Pazifischer Bonito',
        },
        desc: {
            ru: 'Маленький родственник тунца. Тянет долго и ровно.',
            ua: 'Маленький родич тунця. Тягне довго і рівно.',
            en: 'A small cousin of the tuna. Pulls long and steady.',
            de: 'Ein kleiner Verwandter des Thunfischs. Zieht lange und gleichmäßig.',
        },
    },
    californiaYellowtail: {
        name: {
            ru: 'Калифорнийская лакедра',
            ua: 'Каліфорнійська лакедра',
            en: 'California Yellowtail',
            de: 'Kalifornische Gelbschwanzmakrele',
        },
        desc: {
            ru: 'Сильная пелагическая рыба. Выматывает и рыбака, и снасть.',
            ua: 'Сильна пелагічна риба. Виснажує і рибалку, і снасть.',
            en: 'A strong open-water fish. Wears out both the angler and the tackle.',
            de: 'Ein kräftiger Freiwasserfisch. Zermürbt Angler und Ausrüstung.',
        },
    },
    whiteSeabass: {
        name: {
            ru: 'Белый горбыль',
            ua: 'Білий горбиль',
            en: 'White Seabass',
            de: 'Weißer Umberfisch',
        },
        desc: {
            ru: 'Крупная и редкая рыба. Подходит к берегу в сумерках и ночью.',
            ua: 'Велика і рідкісна риба. Підходить до берега в сутінках і вночі.',
            en: 'A big and rare fish. Comes closer to shore at dusk and at night.',
            de: 'Ein großer und seltener Fisch. Kommt in der Dämmerung und nachts näher ans Ufer.',
        },
    },
    dorado: {
        name: {
            ru: 'Корифена',
            ua: 'Корифена',
            en: 'Dorado',
            de: 'Goldmakrele',
        },
        desc: {
            ru: 'Золотисто-зелёная рыба открытого океана. Ходит под плавающим мусором.',
            ua: 'Золотисто-зелена риба відкритого океану. Ходить під плавучим сміттям.',
            en: 'A gold and green fish of the open ocean. Gathers under floating debris.',
            de: 'Ein goldgrüner Fisch des offenen Ozeans. Sammelt sich unter Treibgut.',
        },
    },
    yellowfin: {
        name: {
            ru: 'Желтопёрый тунец',
            ua: 'Жовтоперий тунець',
            en: 'Yellowfin Tuna',
            de: 'Gelbflossen-Thun',
        },
        desc: {
            ru: 'Мощный тунец открытого океана. Уходит в глубину рывками.',
            ua: 'Потужний тунець відкритого океану. Йде в глибину ривками.',
            en: 'A powerful tuna of the open ocean. Dives in hard runs.',
            de: 'Ein kraftvoller Thun des offenen Ozeans. Taucht in harten Fluchten ab.',
        },
    },
    pacificBluefin: {
        name: {
            ru: 'Тихоокеанский синий тунец',
            ua: 'Тихоокеанський синій тунець',
            en: 'Pacific Bluefin Tuna',
            de: 'Pazifischer Blauflossen-Thun',
        },
        desc: {
            ru: 'Мечта любого морского рыбака. Огромный, быстрый и выносливый.',
            ua: 'Мрія кожного морського рибалки. Величезний, швидкий і витривалий.',
            en: 'Every sea angler\'s dream. Huge, fast and tireless.',
            de: 'Der Traum jedes Meeresanglers. Riesig, schnell und ausdauernd.',
        },
    },
    stripedMarlin: {
        name: {
            ru: 'Полосатый марлин',
            ua: 'Смугастий марлін',
            en: 'Striped Marlin',
            de: 'Gestreifter Marlin',
        },
        desc: {
            ru: 'Копьеносец открытого океана. Берёт на троллинговую приманку.',
            ua: 'Списоносець відкритого океану. Бере на тролінгову приманку.',
            en: 'A billfish of the open ocean. Takes a trolling lure.',
            de: 'Ein Speerfisch des offenen Ozeans. Nimmt den Schleppköder.',
        },
    },
    shortfinMako: {
        name: {
            ru: 'Акула-мако',
            ua: 'Акула мако',
            en: 'Shortfin Mako',
            de: 'Kurzflossen-Mako',
        },
        desc: {
            ru: 'Самая быстрая акула. Атакует резко и сопротивляется до конца.',
            ua: 'Найшвидша акула. Атакує різко і опирається до кінця.',
            en: 'The fastest shark. Strikes hard and fights to the end.',
            de: 'Der schnellste Hai. Greift hart an und kämpft bis zuletzt.',
        },
    },
    swordfish: {
        name: {
            ru: 'Меч-рыба',
            ua: 'Риба-меч',
            en: 'Swordfish',
            de: 'Schwertfisch',
        },
        desc: {
            ru: 'Ночной гигант глубины. Самый редкий и тяжёлый улов.',
            ua: 'Нічний велетень глибини. Найрідкісніший і найважчий улов.',
            en: 'A night giant of the deep. The rarest and heaviest catch.',
            de: 'Ein nächtlicher Riese der Tiefe. Der seltenste und schwerste Fang.',
        },
    },
};

const TROPHY_DESC = {
    ru: 'Трофейный экземпляр: учитывается отдельно от обычного улова, скупщик платит за килограмм дороже.',
    ua: 'Трофейний екземпляр: враховується окремо від звичайного улову, скупник платить за кілограм дорожче.',
    en: 'A trophy specimen: kept apart from the ordinary catch, and the buyer pays more per kilogram.',
    de: 'Ein Trophäenexemplar: wird getrennt vom normalen Fang geführt, der Händler zahlt mehr pro Kilogramm.',
};

export const fishTrophy = {
    bluegill: {
        name: { ru: 'Трофейный синежаберный солнечник', ua: 'Трофейний синьозябровий сонячний окунь', en: 'Trophy Bluegill', de: 'Blauer Sonnenbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    blackCrappie: {
        name: { ru: 'Трофейный чёрный краппи', ua: 'Трофейний чорний крапі', en: 'Trophy Black Crappie', de: 'Schwarzer Crappie (Trophäe)' },
        desc: TROPHY_DESC,
    },
    commonCarp: {
        name: { ru: 'Трофейный карп', ua: 'Трофейний короп', en: 'Trophy Common Carp', de: 'Karpfen (Trophäe)' },
        desc: TROPHY_DESC,
    },
    channelCatfish: {
        name: { ru: 'Трофейный канальный сомик', ua: 'Трофейний канальний сомик', en: 'Trophy Channel Catfish', de: 'Getüpfelter Gabelwels (Trophäe)' },
        desc: TROPHY_DESC,
    },
    barredSurfperch: {
        name: { ru: 'Трофейная полосатая эмбиотока', ua: 'Трофейна смугаста ембіотока', en: 'Trophy Barred Surfperch', de: 'Gebänderter Brandungsbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    pacificMackerel: {
        name: { ru: 'Трофейная тихоокеанская скумбрия', ua: 'Трофейна тихоокеанська скумбрія', en: 'Trophy Pacific Mackerel', de: 'Pazifische Makrele (Trophäe)' },
        desc: TROPHY_DESC,
    },
    californiaCorbina: {
        name: { ru: 'Трофейная калифорнийская корбина', ua: 'Трофейна каліфорнійська корбіна', en: 'Trophy California Corbina', de: 'Kalifornischer Umberfisch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    largemouthBass: {
        name: { ru: 'Трофейный большеротый окунь', ua: 'Трофейний великоротий окунь', en: 'Trophy Largemouth Bass', de: 'Forellenbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    smallmouthBass: {
        name: { ru: 'Трофейный малоротый окунь', ua: 'Трофейний малоротий окунь', en: 'Trophy Smallmouth Bass', de: 'Schwarzbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    rainbowTrout: {
        name: { ru: 'Трофейная радужная форель', ua: 'Трофейна райдужна форель', en: 'Trophy Rainbow Trout', de: 'Regenbogenforelle (Trophäe)' },
        desc: TROPHY_DESC,
    },
    flatheadCatfish: {
        name: { ru: 'Трофейный оливковый сом', ua: 'Трофейний оливковий сом', en: 'Trophy Flathead Catfish', de: 'Flachkopfwels (Trophäe)' },
        desc: TROPHY_DESC,
    },
    stripedBass: {
        name: { ru: 'Трофейный полосатый лаврак', ua: 'Трофейний смугастий лаврак', en: 'Trophy Striped Bass', de: 'Felsenbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    tilapia: {
        name: { ru: 'Трофейная тиляпия', ua: 'Трофейна тиляпія', en: 'Trophy Tilapia', de: 'Tilapia (Trophäe)' },
        desc: TROPHY_DESC,
    },
    stripedMullet: {
        name: { ru: 'Трофейный лобан', ua: 'Трофейний лобань', en: 'Trophy Striped Mullet', de: 'Großkopfmeeräsche (Trophäe)' },
        desc: TROPHY_DESC,
    },
    sargo: {
        name: { ru: 'Трофейный сарг', ua: 'Трофейний сарг', en: 'Trophy Sargo', de: 'Sargo (Trophäe)' },
        desc: TROPHY_DESC,
    },
    orangemouthCorvina: {
        name: { ru: 'Трофейная оранжеворотая корвина', ua: 'Трофейна помаранчеворота корвіна', en: 'Trophy Orangemouth Corvina', de: 'Orangemaul-Corvina (Trophäe)' },
        desc: TROPHY_DESC,
    },
    kelpBass: {
        name: { ru: 'Трофейный келповый окунь', ua: 'Трофейний келповий окунь', en: 'Trophy Kelp Bass', de: 'Kelpbarsch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    californiaSheephead: {
        name: { ru: 'Трофейный калифорнийский губан', ua: 'Трофейний каліфорнійський губань', en: 'Trophy California Sheephead', de: 'Kalifornischer Schafskopf (Trophäe)' },
        desc: TROPHY_DESC,
    },
    vermilionRockfish: {
        name: { ru: 'Трофейный киноварный морской окунь', ua: 'Трофейний кіноварний морський окунь', en: 'Trophy Vermilion Rockfish', de: 'Zinnober-Drachenkopf (Trophäe)' },
        desc: TROPHY_DESC,
    },
    californiaHalibut: {
        name: { ru: 'Трофейный калифорнийский палтус', ua: 'Трофейний каліфорнійський палтус', en: 'Trophy California Halibut', de: 'Kalifornischer Heilbutt (Trophäe)' },
        desc: TROPHY_DESC,
    },
    lingcod: {
        name: { ru: 'Трофейный зубатый терпуг', ua: 'Трофейний зубатий терпуг', en: 'Trophy Lingcod', de: 'Lingcod (Trophäe)' },
        desc: TROPHY_DESC,
    },
    leopardShark: {
        name: { ru: 'Трофейная леопардовая акула', ua: 'Трофейна леопардова акула', en: 'Trophy Leopard Shark', de: 'Leopardenhai (Trophäe)' },
        desc: TROPHY_DESC,
    },
    pacificBarracuda: {
        name: { ru: 'Трофейная тихоокеанская барракуда', ua: 'Трофейна тихоокеанська барракуда', en: 'Trophy Pacific Barracuda', de: 'Pazifischer Barrakuda (Trophäe)' },
        desc: TROPHY_DESC,
    },
    pacificBonito: {
        name: { ru: 'Трофейная тихоокеанская пеламида', ua: 'Трофейна тихоокеанська пеламіда', en: 'Trophy Pacific Bonito', de: 'Pazifischer Bonito (Trophäe)' },
        desc: TROPHY_DESC,
    },
    californiaYellowtail: {
        name: { ru: 'Трофейная калифорнийская лакедра', ua: 'Трофейна каліфорнійська лакедра', en: 'Trophy California Yellowtail', de: 'Kalifornische Gelbschwanzmakrele (Trophäe)' },
        desc: TROPHY_DESC,
    },
    whiteSeabass: {
        name: { ru: 'Трофейный белый горбыль', ua: 'Трофейний білий горбиль', en: 'Trophy White Seabass', de: 'Weißer Umberfisch (Trophäe)' },
        desc: TROPHY_DESC,
    },
    dorado: {
        name: { ru: 'Трофейная корифена', ua: 'Трофейна корифена', en: 'Trophy Dorado', de: 'Goldmakrele (Trophäe)' },
        desc: TROPHY_DESC,
    },
    yellowfin: {
        name: { ru: 'Трофейный желтопёрый тунец', ua: 'Трофейний жовтоперий тунець', en: 'Trophy Yellowfin Tuna', de: 'Gelbflossen-Thun (Trophäe)' },
        desc: TROPHY_DESC,
    },
    pacificBluefin: {
        name: { ru: 'Трофейный тихоокеанский синий тунец', ua: 'Трофейний тихоокеанський синій тунець', en: 'Trophy Pacific Bluefin Tuna', de: 'Pazifischer Blauflossen-Thun (Trophäe)' },
        desc: TROPHY_DESC,
    },
    stripedMarlin: {
        name: { ru: 'Трофейный полосатый марлин', ua: 'Трофейний смугастий марлін', en: 'Trophy Striped Marlin', de: 'Gestreifter Marlin (Trophäe)' },
        desc: TROPHY_DESC,
    },
    shortfinMako: {
        name: { ru: 'Трофейная акула-мако', ua: 'Трофейна акула мако', en: 'Trophy Shortfin Mako', de: 'Kurzflossen-Mako (Trophäe)' },
        desc: TROPHY_DESC,
    },
    swordfish: {
        name: { ru: 'Трофейная меч-рыба', ua: 'Трофейна риба-меч', en: 'Trophy Swordfish', de: 'Schwertfisch (Trophäe)' },
        desc: TROPHY_DESC,
    },
};
