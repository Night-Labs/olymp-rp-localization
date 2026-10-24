// The Skills tab of the fishing base window (webviews/src/systems/fishing/tabs/SkillsTab.vue) and the
// tree's nodes (shared/jobs/fishing/skills.ts). A node's `text` says what it does; `effects.<effect>`
// is the number its levels add up to, written by the card as "now" and "with the next level".
export default {
    points: {
        ru: 'Очки навыков',
        ua: 'Очки навичок',
        en: 'Skill points',
        de: 'Fertigkeitspunkte',
    },
    pointsSummary: {
        ru: 'Получено {{earned}}, вложено {{spent}}',
        ua: 'Отримано {{earned}}, вкладено {{spent}}',
        en: '{{earned}} earned, {{spent}} spent',
        de: '{{earned}} erhalten, {{spent}} vergeben',
    },
    treeDone: {
        ru: 'Все навыки изучены',
        ua: 'Усі навички вивчено',
        en: 'Every skill learned',
        de: 'Alle Fertigkeiten gelernt',
    },
    nextRank: {
        ru: 'Ранг {{rank}} даст',
        ua: 'Ранг {{rank}} дасть',
        en: 'Rank {{rank}} brings',
        de: 'Rang {{rank}} bringt',
    },
    rankPoints: {
        ru: 'Очки навыков: +{{points}}',
        ua: 'Очки навичок: +{{points}}',
        en: 'Skill points: +{{points}}',
        de: 'Fertigkeitspunkte: +{{points}}',
    },
    level: {
        ru: 'Уровень {{level}} из {{max}}',
        ua: 'Рівень {{level}} з {{max}}',
        en: 'Level {{level}} of {{max}}',
        de: 'Stufe {{level}} von {{max}}',
    },
    now: {
        ru: 'Сейчас',
        ua: 'Зараз',
        en: 'Now',
        de: 'Jetzt',
    },
    next: {
        ru: 'Со следующим уровнем',
        ua: 'З наступним рівнем',
        en: 'With the next level',
        de: 'Mit der nächsten Stufe',
    },
    learn: {
        ru: 'Изучить',
        ua: 'Вивчити',
        en: 'Learn',
        de: 'Lernen',
    },
    learned: {
        ru: 'Изучено полностью',
        ua: 'Вивчено повністю',
        en: 'Fully learned',
        de: 'Voll ausgebaut',
    },
    requires: {
        ru: 'Сначала изучите: {{nodes}}',
        ua: 'Спершу вивчіть: {{nodes}}',
        en: 'Learn first: {{nodes}}',
        de: 'Zuerst lernen: {{nodes}}',
    },
    or: {
        ru: 'или',
        ua: 'або',
        en: 'or',
        de: 'oder',
    },
    noPoints: {
        ru: 'Не хватает очков навыков. Их приносит каждый новый ранг',
        ua: 'Бракує очок навичок. Їх приносить кожен новий ранг',
        en: 'Not enough skill points. Every new rank brings more',
        de: 'Nicht genug Fertigkeitspunkte. Jeder neue Rang bringt welche',
    },

    // What the next rank opens (FishingRankUnlock); the tier and contract names are base.tiers / base.kinds.
    unlocks: {
        zones: {
            ru: 'Новые воды: {{value}}',
            ua: 'Нові води: {{value}}',
            en: 'New waters: {{value}}',
            de: 'Neue Gewässer: {{value}}',
        },
        item: {
            ru: 'В магазине: {{value}}',
            ua: 'У магазині: {{value}}',
            en: 'In the shop: {{value}}',
            de: 'Im Laden: {{value}}',
        },
        contract: {
            ru: 'Контракты: {{value}}',
            ua: 'Контракти: {{value}}',
            en: 'Contracts: {{value}}',
            de: 'Aufträge: {{value}}',
        },
        slots: {
            ru: 'Контрактов одновременно: {{value}}',
            ua: 'Контрактів одночасно: {{value}}',
            en: 'Contracts at once: {{value}}',
            de: 'Aufträge gleichzeitig: {{value}}',
        },
        deck: {
            ru: 'Рыбалка с палубы лодки',
            ua: 'Риболовля з палуби човна',
            en: 'Fishing from a boat\'s deck',
            de: 'Angeln vom Bootsdeck',
        },
    },

    branches: {
        fight: {
            ru: 'Вываживание',
            ua: 'Виважування',
            en: 'Fight',
            de: 'Drill',
        },
        knowledge: {
            ru: 'Знание воды',
            ua: 'Знання води',
            en: 'Water lore',
            de: 'Gewässerkunde',
        },
        trophy: {
            ru: 'Трофеи',
            ua: 'Трофеї',
            en: 'Trophies',
            de: 'Trophäen',
        },
    },

    nodes: {
        fight: {
            softHands: {
                name: {
                    ru: 'Мягкие руки',
                    ua: "М'які руки",
                    en: 'Soft Hands',
                    de: 'Sanfte Hände',
                },
                text: {
                    ru: 'Пока вы подматываете, леска натягивается медленнее: до красной зоны остаётся больше времени.',
                    ua: 'Поки ви підмотуєте, волосінь натягується повільніше: до червоної зони лишається більше часу.',
                    en: 'While you reel, the line tightens slower: more time before the red zone.',
                    de: 'Beim Einholen spannt sich die Schnur langsamer: mehr Zeit bis zum roten Bereich.',
                },
            },
            sureStrike: {
                name: {
                    ru: 'Верная подсечка',
                    ua: 'Певне підсікання',
                    en: 'Sure Strike',
                    de: 'Sicherer Anschlag',
                },
                text: {
                    ru: 'Окно, в которое нужно подсечь после поклёвки, становится длиннее.',
                    ua: 'Вікно, у яке треба підсікти після клювання, стає довшим.',
                    en: 'The window to strike after a bite gets longer.',
                    de: 'Das Zeitfenster für den Anschlag nach dem Biss wird länger.',
                },
            },
            strongStrike: {
                name: {
                    ru: 'Резкая подсечка',
                    ua: 'Різке підсікання',
                    en: 'Hard Strike',
                    de: 'Harter Anschlag',
                },
                text: {
                    ru: 'Подсечка в первую треть окна сразу даёт вываживанию фору.',
                    ua: 'Підсікання в першу третину вікна одразу дає виважуванню фору.',
                    en: 'A strike in the first third of the window gives the fight a head start.',
                    de: 'Ein Anschlag im ersten Drittel des Fensters verschafft dem Drill einen Vorsprung.',
                },
            },
            lineControl: {
                name: {
                    ru: 'Контроль лески',
                    ua: 'Контроль волосіні',
                    en: 'Line Control',
                    de: 'Schnurkontrolle',
                },
                text: {
                    ru: 'Отпущенная леска быстрее ослабевает, а перегрузка от красной зоны быстрее сходит.',
                    ua: 'Відпущена волосінь швидше слабне, а перевантаження від червоної зони швидше минає.',
                    en: 'A released line slackens faster, and the strain from the red zone wears off faster.',
                    de: 'Eine freigegebene Schnur entspannt sich schneller, und die Belastung aus dem roten Bereich baut sich schneller ab.',
                },
            },
            senseOfTiming: {
                name: {
                    ru: 'Чувство момента',
                    ua: 'Відчуття моменту',
                    en: 'Sense of Timing',
                    de: 'Gespür für den Moment',
                },
                text: {
                    ru: 'Сразу после рывка подмотка ненадолго ускоряется, а сами рывки отнимают меньше лески.',
                    ua: 'Одразу після ривка підмотування ненадовго пришвидшується, а самі ривки забирають менше волосіні.',
                    en: 'Right after a run, reeling is faster for a moment, and runs take less line.',
                    de: 'Direkt nach einer Flucht holst du kurz schneller ein, und Fluchten nehmen weniger Schnur.',
                },
            },
            steelNerve: {
                name: {
                    ru: 'Стальные нервы',
                    ua: 'Сталеві нерви',
                    en: 'Nerves of Steel',
                    de: 'Nerven aus Stahl',
                },
                text: {
                    ru: 'Раз за вываживание леска, которая должна была лопнуть, выдерживает: натяжение сбрасывается ниже красной зоны.',
                    ua: 'Раз за виважування волосінь, яка мала луснути, витримує: натяг скидається нижче червоної зони.',
                    en: 'Once per fight a line that was about to snap holds: the tension drops below the red zone.',
                    de: 'Einmal pro Drill hält eine Schnur, die reißen würde: die Spannung fällt unter den roten Bereich.',
                },
            },
        },
        knowledge: {
            patience: {
                name: {
                    ru: 'Терпение',
                    ua: 'Терпіння',
                    en: 'Patience',
                    de: 'Geduld',
                },
                text: {
                    ru: 'Поклёвка приходит быстрее: ожидание после заброса короче.',
                    ua: 'Клювання приходить швидше: очікування після закидання коротше.',
                    en: 'Bites come sooner: the wait after a cast is shorter.',
                    de: 'Bisse kommen schneller: das Warten nach dem Auswurf ist kürzer.',
                },
            },
            baitExpert: {
                name: {
                    ru: 'Знаток наживки',
                    ua: 'Знавець наживки',
                    en: 'Bait Expert',
                    de: 'Köderkenner',
                },
                text: {
                    ru: 'Рыба, для которой ваша наживка лучшая, попадается чаще остальной.',
                    ua: 'Риба, для якої ваша наживка найкраща, трапляється частіше за решту.',
                    en: 'Fish your bait is best for bite more often than the rest.',
                    de: 'Fische, für die dein Köder der beste ist, beißen öfter als die anderen.',
                },
            },
            fishingSpot: {
                name: {
                    ru: 'Рыбное место',
                    ua: 'Рибне місце',
                    en: 'Fishing Spot',
                    de: 'Guter Platz',
                },
                text: {
                    ru: 'После заброса на экране видно, кто здесь клюёт на вашу наживку. Со вторым уровнем - ещё и доля каждого вида.',
                    ua: 'Після закидання на екрані видно, хто тут клює на вашу наживку. З другим рівнем - ще й частка кожного виду.',
                    en: 'After a cast the screen shows what bites here on your bait. At the second level, each species\' share too.',
                    de: 'Nach dem Auswurf siehst du, was hier auf deinen Köder beißt. Ab der zweiten Stufe auch den Anteil jeder Art.',
                },
            },
            baitedSpot: {
                name: {
                    ru: 'Прикормленное место',
                    ua: 'Підгодоване місце',
                    en: 'Baited Spot',
                    de: 'Angefütterter Platz',
                },
                text: {
                    ru: 'Каждый улов подряд в одной зоне сокращает следующее ожидание, до {{stacks}} уловов.',
                    ua: 'Кожен улов поспіль в одній зоні скорочує наступне очікування, до {{stacks}} уловів.',
                    en: 'Every catch in a row in one zone shortens the next wait, up to {{stacks}} catches.',
                    de: 'Jeder Fang in Folge in einer Zone verkürzt das nächste Warten, bis zu {{stacks}} Fänge.',
                },
            },
            goodTiming: {
                name: {
                    ru: 'Чувство погоды',
                    ua: 'Відчуття погоди',
                    en: 'Weather Sense',
                    de: 'Wettergespür',
                },
                text: {
                    ru: 'Ясная солнечная погода днём замедляет клёв меньше.',
                    ua: 'Ясна сонячна погода вдень сповільнює клювання менше.',
                    en: 'Clear sunny weather by day slows the bite down less.',
                    de: 'Klares Sonnenwetter am Tag bremst die Bisse weniger.',
                },
            },
            perfectBait: {
                name: {
                    ru: 'Идеальная наживка',
                    ua: 'Ідеальна наживка',
                    en: 'Perfect Bait',
                    de: 'Perfekter Köder',
                },
                text: {
                    ru: 'Рыба, для которой наживка лучшая, клюёт в полтора раза охотнее, остальная - вдвое реже.',
                    ua: 'Риба, для якої наживка найкраща, клює в півтора раза охочіше, решта - удвічі рідше.',
                    en: 'Fish the bait is best for take it half again as eagerly, the rest half as often.',
                    de: 'Fische, für die der Köder der beste ist, beißen anderthalbmal so gern, alle anderen halb so oft.',
                },
            },
        },
        trophy: {
            hunter: {
                name: {
                    ru: 'Охотник за трофеями',
                    ua: 'Мисливець за трофеями',
                    en: 'Trophy Hunter',
                    de: 'Trophäenjäger',
                },
                text: {
                    ru: 'Выше шанс, что на крючке окажется трофейный экземпляр.',
                    ua: 'Вищий шанс, що на гачку опиниться трофейний екземпляр.',
                    en: 'A higher chance that the fish on the hook is a trophy specimen.',
                    de: 'Höhere Chance, dass am Haken ein Trophäenexemplar hängt.',
                },
            },
            bigCatch: {
                name: {
                    ru: 'Крупный улов',
                    ua: 'Великий улов',
                    en: 'Big Catch',
                    de: 'Großer Fang',
                },
                text: {
                    ru: 'Крупные особи попадаются чаще: масса улова смещается к верхней границе вида. Второй уровень сдвигает ещё сильнее.',
                    ua: 'Великі особини трапляються частіше: маса улову зсувається до верхньої межі виду. Другий рівень зсуває ще сильніше.',
                    en: 'Big specimens come more often: the catch\'s weight leans to the top of its species\' range. The second level leans further.',
                    de: 'Große Exemplare kommen öfter: das Gewicht des Fangs tendiert zum oberen Ende der Art. Die zweite Stufe verstärkt das.',
                },
            },
            streak: {
                name: {
                    ru: 'Трофейная серия',
                    ua: 'Трофейна серія',
                    en: 'Trophy Streak',
                    de: 'Trophäenserie',
                },
                text: {
                    ru: 'Каждый трофей или крупный улов подряд приносит больше опыта, до {{streak}} подряд.',
                    ua: 'Кожен трофей або великий улов поспіль приносить більше досвіду, до {{streak}} поспіль.',
                    en: 'Every trophy or big catch in a row brings more exp, up to {{streak}} in a row.',
                    de: 'Jede Trophäe oder jeder große Fang in Folge bringt mehr EP, bis zu {{streak}} in Folge.',
                },
            },
            gentleRelease: {
                name: {
                    ru: 'Бережный отпуск',
                    ua: 'Дбайливе відпускання',
                    en: 'Gentle Release',
                    de: 'Schonendes Zurücksetzen',
                },
                text: {
                    ru: 'Отпущенная рыба приносит ещё больше опыта.',
                    ua: 'Відпущена риба приносить ще більше досвіду.',
                    en: 'A released fish brings even more exp.',
                    de: 'Ein freigelassener Fisch bringt noch mehr EP.',
                },
            },
            explorer: {
                name: {
                    ru: 'Исследователь',
                    ua: 'Дослідник',
                    en: 'Explorer',
                    de: 'Entdecker',
                },
                text: {
                    ru: 'Больше опыта за первый улов нового вида, первый трофей и новый рекорд.',
                    ua: 'Більше досвіду за перший улов нового виду, перший трофей і новий рекорд.',
                    en: 'More exp for the first catch of a species, a first trophy and a new record.',
                    de: 'Mehr EP für den ersten Fang einer Art, die erste Trophäe und einen neuen Rekord.',
                },
            },
            legendary: {
                name: {
                    ru: 'Легендарный улов',
                    ua: 'Легендарний улов',
                    en: 'Legendary Catch',
                    de: 'Legendärer Fang',
                },
                text: {
                    ru: 'На лучшую наживку вида в его часы активности шанс трофея в полтора раза выше.',
                    ua: 'На найкращу наживку виду в години його активності шанс трофея в півтора раза вищий.',
                    en: 'On the species\' best bait during its active hours, the trophy chance is half again higher.',
                    de: 'Mit dem besten Köder der Art zu ihrer aktiven Tageszeit ist die Trophäenchance anderthalbmal so hoch.',
                },
            },
        },
    },

    // The number a node's levels add up to (FishingSkillEffect): {{value}} is its `shown` times the level.
    effects: {
        tensionRise: {
            ru: 'Натяжение растёт на {{value}}% медленнее',
            ua: 'Натяг зростає на {{value}}% повільніше',
            en: 'Tension rises {{value}}% slower',
            de: 'Spannung steigt {{value}} % langsamer',
        },
        strikeWindow: {
            ru: 'Окно подсечки +{{value}} мс',
            ua: 'Вікно підсікання +{{value}} мс',
            en: 'Strike window +{{value}} ms',
            de: 'Anschlagfenster +{{value}} ms',
        },
        strongStrike: {
            ru: 'Фора вываживания +{{value}}%',
            ua: 'Фора виважування +{{value}}%',
            en: 'Fight head start +{{value}}%',
            de: 'Drill-Vorsprung +{{value}} %',
        },
        lineControl: {
            ru: 'Леска ослабевает и остывает на {{value}}% быстрее',
            ua: 'Волосінь слабне й відпочиває на {{value}}% швидше',
            en: 'The line slackens and recovers {{value}}% faster',
            de: 'Die Schnur entspannt und erholt sich {{value}} % schneller',
        },
        surgeTiming: {
            ru: 'После рывка подмотка +{{value}}%, рывки слабее на {{value}}%',
            ua: 'Після ривка підмотування +{{value}}%, ривки слабші на {{value}}%',
            en: 'Reeling after a run +{{value}}%, runs {{value}}% weaker',
            de: 'Einholen nach einer Flucht +{{value}} %, Fluchten {{value}} % schwächer',
        },
        biteWait: {
            ru: 'Ожидание поклёвки -{{value}}%',
            ua: 'Очікування клювання -{{value}}%',
            en: 'Bite wait -{{value}}%',
            de: 'Wartezeit auf den Biss -{{value}} %',
        },
        baitMain: {
            ru: 'Рыба под вашу наживку +{{value}}%',
            ua: 'Риба під вашу наживку +{{value}}%',
            en: 'Fish your bait is for +{{value}}%',
            de: 'Fische für deinen Köder +{{value}} %',
        },
        baitedSpot: {
            ru: 'Ожидание -{{value}}% за каждый улов подряд',
            ua: 'Очікування -{{value}}% за кожен улов поспіль',
            en: 'Wait -{{value}}% per catch in a row',
            de: 'Wartezeit -{{value}} % pro Fang in Folge',
        },
        goodTiming: {
            ru: 'Штраф ясной погоды -{{value}}%',
            ua: 'Штраф ясної погоди -{{value}}%',
            en: 'Clear weather penalty -{{value}}%',
            de: 'Malus bei klarem Wetter -{{value}} %',
        },
        trophyChance: {
            ru: 'Шанс трофея +{{value}}%',
            ua: 'Шанс трофея +{{value}}%',
            en: 'Trophy chance +{{value}}%',
            de: 'Trophäenchance +{{value}} %',
        },
        trophyStreak: {
            ru: '+{{value}}% опыта за каждый крупный улов подряд',
            ua: '+{{value}}% досвіду за кожен великий улов поспіль',
            en: '+{{value}}% exp per big catch in a row',
            de: '+{{value}} % EP pro großem Fang in Folge',
        },
        releaseExp: {
            ru: 'Опыт за отпущенную рыбу +{{value}}%',
            ua: 'Досвід за відпущену рибу +{{value}}%',
            en: 'Exp for a released fish +{{value}}%',
            de: 'EP für einen freigelassenen Fisch +{{value}} %',
        },
        explorer: {
            ru: 'Опыт за открытия +{{value}}%',
            ua: 'Досвід за відкриття +{{value}}%',
            en: 'Discovery exp +{{value}}%',
            de: 'Entdeckungs-EP +{{value}} %',
        },
    },
};
