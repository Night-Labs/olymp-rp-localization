/** Battle royale items (`shared/systems/inventory/configs/battleRoyale`): `inventory.br.<name>`. They exist only inside a match. */
export default {
    bandage: {
        name: {
            ru: 'Бинт',
            ua: 'Бинт',
            en: 'Bandage',
            de: 'Verband',
            pl: 'Bandaż',
        },
        desc: {
            ru: 'Восстанавливает 15 HP за 3 секунды, но не выше 75 HP.',
            ua: 'Відновлює 15 HP за 3 секунди, але не вище 75 HP.',
            en: 'Restores 15 HP in 3 seconds, but no higher than 75 HP.',
            de: 'Stellt in 3 Sekunden 15 HP wieder her, aber nicht über 75 HP.',
            pl: 'Przywraca 15 HP w 3 sekundy, ale nie powyżej 75 HP.',
        },
    },
    energyDrink: {
        name: {
            ru: 'Энергетик',
            ua: 'Енергетик',
            en: 'Energy drink',
            de: 'Energydrink',
            pl: 'Energetyk',
        },
        desc: {
            ru: '20 секунд: +1 HP в секунду и бег на 10% быстрее.',
            ua: '20 секунд: +1 HP за секунду і біг на 10% швидший.',
            en: 'For 20 seconds: +1 HP a second and 10% faster sprint.',
            de: '20 Sekunden lang: +1 HP pro Sekunde und 10% schnellerer Sprint.',
            pl: 'Przez 20 sekund: +1 HP na sekundę i sprint szybszy o 10%.',
        },
    },
    adrenaline: {
        name: {
            ru: 'Адреналин',
            ua: 'Адреналін',
            en: 'Adrenaline shot',
            de: 'Adrenalinspritze',
            pl: 'Zastrzyk adrenaliny',
        },
        desc: {
            ru: 'За 6 секунд полностью восстанавливает здоровье, затем 30 секунд бег на 10% быстрее.',
            ua: 'За 6 секунд повністю відновлює здоров\'я, потім 30 секунд біг на 10% швидший.',
            en: 'Restores full health in 6 seconds, then 10% faster sprint for 30 seconds.',
            de: 'Stellt in 6 Sekunden die volle Gesundheit wieder her, danach 30 Sekunden 10% schnellerer Sprint.',
            pl: 'W 6 sekund przywraca pełne zdrowie, potem przez 30 sekund sprint szybszy o 10%.',
        },
    },
    helmet1: {
        name: {
            ru: 'Лёгкий шлем',
            ua: 'Легкий шолом',
            en: 'Light helmet',
            de: 'Leichter Helm',
            pl: 'Lekki hełm',
        },
        desc: {
            ru: 'Принимает на себя 30% урона от попадания в голову, пока не износится.',
            ua: 'Бере на себе 30% шкоди від влучання в голову, поки не зноситься.',
            en: 'Takes 30% of the damage of a head hit until it wears out.',
            de: 'Fängt 30% des Schadens eines Kopftreffers ab, bis er verschlissen ist.',
            pl: 'Przyjmuje 30% obrażeń od trafienia w głowę, dopóki się nie zużyje.',
        },
    },
    helmet2: {
        name: {
            ru: 'Тяжёлый шлем',
            ua: 'Важкий шолом',
            en: 'Heavy helmet',
            de: 'Schwerer Helm',
            pl: 'Ciężki hełm',
        },
        desc: {
            ru: 'Принимает на себя 50% урона от попадания в голову, пока не износится.',
            ua: 'Бере на себе 50% шкоди від влучання в голову, поки не зноситься.',
            en: 'Takes 50% of the damage of a head hit until it wears out.',
            de: 'Fängt 50% des Schadens eines Kopftreffers ab, bis er verschlissen ist.',
            pl: 'Przyjmuje 50% obrażeń od trafienia w głowę, dopóki się nie zużyje.',
        },
    },
    backpack1: {
        name: {
            ru: 'Малый рюкзак',
            ua: 'Малий рюкзак',
            en: 'Small backpack',
            de: 'Kleiner Rucksack',
            pl: 'Mały plecak',
        },
        desc: {
            ru: 'Карманы вмещают на 10 кг больше.',
            ua: 'Кишені вміщують на 10 кг більше.',
            en: 'Your pockets hold 10 kg more.',
            de: 'Die Taschen fassen 10 kg mehr.',
            pl: 'Kieszenie mieszczą 10 kg więcej.',
        },
    },
    backpack2: {
        name: {
            ru: 'Большой рюкзак',
            ua: 'Великий рюкзак',
            en: 'Large backpack',
            de: 'Großer Rucksack',
            pl: 'Duży plecak',
        },
        desc: {
            ru: 'Карманы вмещают на 20 кг больше.',
            ua: 'Кишені вміщують на 20 кг більше.',
            en: 'Your pockets hold 20 kg more.',
            de: 'Die Taschen fassen 20 kg mehr.',
            pl: 'Kieszenie mieszczą 20 kg więcej.',
        },
    },
    petrolcan: {
        name: {
            ru: 'Канистра бензина 10л.',
            ua: 'Каністра бензину 10л.',
            en: '10L Petrol Can',
            de: '10L Benzinkanister',
            pl: 'Kanister benzyny 10l.',
        },
        desc: {
            ru: 'Заправляет мотоцикл или лодку на 10л через меню транспорта.',
            ua: 'Заправляє мотоцикл або човен на 10л через меню транспорту.',
            en: 'Refuels a bike or a boat with 10L from the vehicle menu.',
            de: 'Betankt ein Motorrad oder ein Boot über das Fahrzeugmenü mit 10L.',
            pl: 'Tankuje motocykl lub łódź na 10l przez menu pojazdu.',
        },
    },
    scanner: {
        name: {
            ru: 'Сканер',
            ua: 'Сканер',
            en: 'Scanner',
            de: 'Scanner',
            pl: 'Skaner',
        },
        desc: {
            ru: 'Одноразовый. 3 секунды сканирования без стрельбы, затем на 6 секунд показывает примерное положение игроков в радиусе 200 м. Засеченные узнают об этом.',
            ua: 'Одноразовий. 3 секунди сканування без стрільби, потім на 6 секунд показує приблизне положення гравців у радіусі 200 м. Помічені дізнаються про це.',
            en: 'Single use. Scans for 3 seconds with no shooting, then shows roughly where players within 200 m are for 6 seconds. Anyone picked up is told.',
            de: 'Einmalig. Scannt 3 Sekunden lang ohne Schießen und zeigt dann 6 Sekunden lang ungefähr, wo Spieler im Umkreis von 200 m sind. Erfasste Spieler werden gewarnt.',
            pl: 'Jednorazowy. Skanuje przez 3 sekundy bez strzelania, potem przez 6 sekund pokazuje przybliżone położenie graczy w promieniu 200 m. Wykryci dowiadują się o tym.',
        },
    },
    flare: {
        name: {
            ru: 'Сигнальная шашка',
            ua: 'Сигнальна шашка',
            en: 'Supply flare',
            de: 'Versorgungsfackel',
            pl: 'Raca zaopatrzeniowa',
        },
        desc: {
            ru: 'Бросается как граната. Где шашка упадёт внутри круга, туда самолёт сбросит груз. Его увидят все.',
            ua: 'Кидається як граната. Де шашка впаде всередині кола, туди літак скине вантаж. Його побачать усі.',
            en: 'Thrown like a grenade. Where it lands inside the circle, a plane drops a supply. Everyone sees it.',
            de: 'Wird wie eine Granate geworfen. Wo sie im Kreis landet, wirft ein Flugzeug einen Versorgungsabwurf ab. Alle sehen ihn.',
            pl: 'Rzuca się jak granat. Tam, gdzie raca spadnie wewnątrz kręgu, samolot zrzuci zaopatrzenie. Wszyscy je zobaczą.',
        },
    },
    drone: {
        name: {
            ru: 'Разведдрон',
            ua: 'Розвідувальний дрон',
            en: 'Recon drone',
            de: 'Aufklärungsdrohne',
            pl: 'Dron zwiadowczy',
        },
        desc: {
            ru: 'Одноразовый. 25 секунд полёта в радиусе 200 м. Кого увидит камера, отмечается у вас на карте на 10 секунд. Пока дрон летит, вы стоите на месте, а любой урон возвращает вас в тело.',
            ua: 'Одноразовий. 25 секунд польоту в радіусі 200 м. Кого побачить камера, позначається у вас на карті на 10 секунд. Поки дрон летить, ви стоїте на місці, а будь-яка шкода повертає вас у тіло.',
            en: 'Single use. 25 seconds of flight within 200 m. Anyone the camera sees is marked on your map for 10 seconds. While it flies you stand still, and any damage brings you back to your body.',
            de: 'Einmalig. 25 Sekunden Flug im Umkreis von 200 m. Wen die Kamera sieht, wird 10 Sekunden lang auf deiner Karte markiert. Während sie fliegt, stehst du still, und jeder Schaden holt dich in deinen Körper zurück.',
            pl: 'Jednorazowy. 25 sekund lotu w promieniu 200 m. Każdy, kogo zobaczy kamera, zostaje oznaczony na twojej mapie na 10 sekund. Gdy dron leci, stoisz w miejscu, a każde obrażenia przywracają cię do ciała.',
        },
    },
    zoneIntel: {
        name: {
            ru: 'Разведданные о зоне',
            ua: 'Розвідка про зону',
            en: 'Zone intel',
            de: 'Zonen-Info',
            pl: 'Wywiad o strefie',
        },
        desc: {
            ru: 'Одноразовые. Показывают на карте следующий круг раньше всех.',
            ua: 'Одноразова. Показує на карті наступне коло раніше за всіх.',
            en: 'Single use. Shows the next circle on the map before anyone else sees it.',
            de: 'Einmalig. Zeigt den nächsten Kreis auf der Karte, bevor ihn andere sehen.',
            pl: 'Jednorazowy. Pokazuje na mapie następny krąg, zanim zobaczą go inni.',
        },
    },
    keyHangar: {
        name: {
            ru: 'Ключ от комнаты в ангаре',
            ua: 'Ключ від кімнати в ангарі',
            en: 'Hangar room key',
            de: 'Schlüssel für den Hangarraum',
            pl: 'Klucz do pokoju w hangarze',
        },
        desc: {
            ru: 'Открывает запертую комнату в ангаре на взлётной полосе. Ключ остаётся в замке, а комната открывается для всех.',
            ua: 'Відчиняє замкнену кімнату в ангарі на злітній смузі. Ключ лишається в замку, а кімната відчиняється для всіх.',
            en: 'Opens the locked room in the airstrip hangar. The key stays in the lock, and the room opens for everyone.',
            de: 'Öffnet den verschlossenen Raum im Hangar an der Landebahn. Der Schlüssel bleibt im Schloss, und der Raum ist für alle offen.',
            pl: 'Otwiera zamknięty pokój w hangarze przy pasie startowym. Klucz zostaje w zamku, a pokój otwiera się dla wszystkich.',
        },
    },
    keyMansion: {
        name: {
            ru: 'Ключ-карта от поместья',
            ua: 'Ключ-картка від маєтку',
            en: 'Mansion keycard',
            de: 'Schlüsselkarte der Villa',
            pl: 'Karta-klucz do posiadłości',
        },
        desc: {
            ru: 'Открывает запертую комнату Эль Рубио в поместье. Карта остаётся в замке, а комната открывается для всех.',
            ua: 'Відчиняє замкнену кімнату Ель Рубіо в маєтку. Картка лишається в замку, а кімната відчиняється для всіх.',
            en: 'Opens El Rubio\'s locked room in the mansion. The card stays in the lock, and the room opens for everyone.',
            de: 'Öffnet El Rubios verschlossenen Raum in der Villa. Die Karte bleibt im Schloss, und der Raum ist für alle offen.',
            pl: 'Otwiera zamknięty pokój El Rubio w posiadłości. Karta zostaje w zamku, a pokój otwiera się dla wszystkich.',
        },
    },
};
