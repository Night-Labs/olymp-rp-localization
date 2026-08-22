export default {
    // Stat names shown on a buff entry in Stats -> Condition.
    stats: {
        damageResist: {
            ru: 'Сопротивление урону',
            ua: 'Опір шкоді',
            en: 'Damage resistance',
            de: 'Schadensresistenz',
            pl: 'Odporność na obrażenia',
        },
        incomingDamage: {
            ru: 'Получаемый урон',
            ua: 'Отримувана шкода',
            en: 'Damage taken',
            de: 'Erlittener Schaden',
            pl: 'Otrzymywane obrażenia',
        },
        outgoingDamage: {
            ru: 'Наносимый урон',
            ua: 'Завдана шкода',
            en: 'Damage dealt',
            de: 'Verursachter Schaden',
            pl: 'Zadawane obrażenia',
        },
        healthRegen: {
            ru: 'Регенерация',
            ua: 'Регенерація',
            en: 'Regeneration',
            de: 'Regeneration',
            pl: 'Regeneracja',
        },
        staminaDrain: {
            ru: 'Расход выносливости',
            ua: 'Витрата витривалості',
            en: 'Stamina drain',
            de: 'Ausdauerverbrauch',
            pl: 'Zużycie wytrzymałości',
        },
        sprintSpeed: {
            ru: 'Скорость бега',
            ua: 'Швидкість бігу',
            en: 'Sprint speed',
            de: 'Sprintgeschwindigkeit',
            pl: 'Prędkość biegu',
        },
    },

    // Buff source names. `stat.*` are the generic entries the legacy setters register.
    sources: {
        damageResist: {
            ru: 'Защита от урона',
            ua: 'Захист від шкоди',
            en: 'Damage protection',
            de: 'Schadensschutz',
            pl: 'Ochrona przed obrażeniami',
        },
        incomingDamage: {
            ru: 'Уязвимость',
            ua: 'Вразливість',
            en: 'Vulnerability',
            de: 'Verwundbarkeit',
            pl: 'Podatność',
        },
        outgoingDamage: {
            ru: 'Боевой настрой',
            ua: 'Бойовий настрій',
            en: 'Combat focus',
            de: 'Kampffokus',
            pl: 'Nastawienie bojowe',
        },
        healthRegen: {
            ru: 'Восстановление сил',
            ua: 'Відновлення сил',
            en: 'Recovery',
            de: 'Erholung',
            pl: 'Regeneracja sił',
        },
        energetic: {
            ru: 'Прилив бодрости',
            ua: 'Приплив бадьорості',
            en: 'Energy rush',
            de: 'Energieschub',
            pl: 'Zastrzyk energii',
        },

        drugs: {
            stank: {
                high: {
                    ru: 'STANK: приход',
                    ua: 'STANK: прихід',
                    en: 'STANK: high',
                    de: 'STANK: Rausch',
                    pl: 'STANK: haj',
                },
                comedown: {
                    ru: 'STANK: отходняк',
                    ua: 'STANK: відходняк',
                    en: 'STANK: comedown',
                    de: 'STANK: Absturz',
                    pl: 'STANK: zjazd',
                },
            },
            poof: {
                high: {
                    ru: 'POOF: приход',
                    ua: 'POOF: прихід',
                    en: 'POOF: high',
                    de: 'POOF: Rausch',
                    pl: 'POOF: haj',
                },
                comedown: {
                    ru: 'POOF: отходняк',
                    ua: 'POOF: відходняк',
                    en: 'POOF: comedown',
                    de: 'POOF: Absturz',
                    pl: 'POOF: zjazd',
                },
            },
            zap: {
                high: {
                    ru: 'ZAP!: приход',
                    ua: 'ZAP!: прихід',
                    en: 'ZAP!: high',
                    de: 'ZAP!: Rausch',
                    pl: 'ZAP!: haj',
                },
                comedown: {
                    ru: 'ZAP!: отходняк',
                    ua: 'ZAP!: відходняк',
                    en: 'ZAP!: comedown',
                    de: 'ZAP!: Absturz',
                    pl: 'ZAP!: zjazd',
                },
            },
        },

        withdrawal: {
            tier1: {
                ru: 'Ломка: лёгкая',
                ua: 'Ломка: легка',
                en: 'Withdrawal: mild',
                de: 'Entzug: leicht',
                pl: 'Głód: łagodny',
            },
            tier2: {
                ru: 'Ломка: сильная',
                ua: 'Ломка: сильна',
                en: 'Withdrawal: severe',
                de: 'Entzug: schwer',
                pl: 'Głód: silny',
            },
            tier3: {
                ru: 'Ломка: критическая',
                ua: 'Ломка: критична',
                en: 'Withdrawal: critical',
                de: 'Entzug: kritisch',
                pl: 'Głód: krytyczny',
            },
        },
    },
};
