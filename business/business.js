import server from './server';
export default {
    ...server,
    tabs: {
        main: {
            name: {
                ru: 'Главная',
                ua: 'Головна',
                en: 'Home',
                de: 'Startseite',
                pl: 'Główna',
            },

            balance: {
                ru: 'Баланс',
                ua: 'Баланс',
                en: 'Balance',
                de: 'Guthaben',
                pl: 'Saldo',
            },
            price: {
                ru: 'Цена',
                ua: 'Ціна',
                en: 'Price',
                de: 'Preis',
                pl: 'Cena',
            },
            owner: {
                ru: 'Владелец',
                ua: 'Власник',
                en: 'Owner',
                de: 'Eigentümer',
                pl: 'Właściciel',
            },
            rentPrice: {
                ru: 'Стоимость аренды в сутки',
                ua: 'Вартість оренди за добу',
                en: 'Daily rental price',
                de: 'Tagesmietpreis',
                pl: 'Cena wynajmu za dobę',
            },
            commercialBalance: {
                ru: 'Ваш коммерческий баланс',
                ua: 'Ваш комерційний баланс',
                en: 'Your commercial balance',
                de: 'Ihr Geschäftsguthaben',
                pl: 'Twoje saldo komercyjne',
            },
            paidFor: {
                ru: 'Оплачено до',
                ua: 'Оплачено до',
                en: 'Paid until',
                de: 'Bezahlt bis',
                pl: 'Opłacono do',
            },
            tax: {
                ru: 'Налог',
                ua: 'Податок',
                en: 'Tax',
                de: 'Steuer',
                pl: 'Podatek',
            },
            todaysTakings: {
                ru: 'Выручка за сегодня',
                ua: 'Виручка за сьогодні',
                en: "Today's takings",
                de: 'Heutige Einnahmen',
                pl: 'Dzisiejsze obroty',
            },
            averageBill: {
                ru: 'Средний чек',
                ua: 'Середній чек',
                en: 'Average bill',
                de: 'Durchschnittsrechnung',
                pl: 'Średni rachunek',
            },

            govOwner: {
                ru: 'Государство',
                ua: 'Держава',
                en: 'State',
                de: 'Staat',
                pl: 'Państwo',
            },

            buttonBuy: {
                ru: 'Купить',
                ua: 'Купити',
                en: 'Buy',
                de: 'Kaufen',
                pl: 'Kup',
            },
            buttonSell: {
                ru: 'Продать',
                ua: 'Продати',
                en: 'Sell',
                de: 'Verkaufen',
                pl: 'Sprzedać',
            },
        },
        statistics: {
            name: {
                ru: 'Статистика',
                ua: 'Статистика',
                en: 'Statistics',
                de: 'Statistik',
                pl: 'Statystyki',
            },
        },

        logs: {
            name: {
                ru: 'Журнал',
                ua: 'Журнал',
                en: 'Journal',
                de: 'Tagebuch',
                pl: 'Dziennik',
            },
            message: {
                ru: 'Сообщение',
                ua: 'Повідомлення',
                en: 'Message',
                de: 'Nachricht',
                pl: 'Wiadomość',
            },
            type: {
                ru: 'Тип',
                ua: 'Тип',
                en: 'Type',
                de: 'Typ',
                pl: 'Typ',
            },
            date: {
                ru: 'Дата и время',
                ua: 'Дата і час',
                en: 'Date and time',
                de: 'Datum und Uhrzeit',
                pl: 'Data i godzina',
            },

            types: {
                sale: {
                    ru: 'Продажи',
                    ua: 'Продажі',
                    en: 'Sales',
                    de: 'Verkäufe',
                    pl: 'Sprzedaż',
                },
                withdraw: {
                    ru: 'Снятие средств',
                    ua: 'Зняття коштів',
                    en: 'Withdrawal',
                    de: 'Auszahlung',
                    pl: 'Wypłata środków',
                },
                management: {
                    ru: 'Управление',
                    ua: 'Управління',
                    en: 'Management',
                    de: 'Verwaltung',
                    pl: 'Zarządzanie',
                },
                cashCollection: {
                    ru: 'Инкассация',
                    ua: 'Інкасація',
                    en: 'Cash collection',
                    de: 'Bargeldeinzug',
                    pl: 'Inkasacja',
                },
                orderProducts: {
                    ru: 'Заказ товара',
                    ua: 'Замовлення товару',
                    en: 'Product order',
                    de: 'Warenbestellung',
                    pl: 'Zamówienie towaru',
                },
            },
        },

        control: {
            name: {
                ru: 'Управление',
                ua: 'Управління',
                en: 'Control',
                de: 'Steuerung',
                pl: 'Sterowanie',
            },
            products: {
                name: {
                    ru: 'Товары',
                    ua: 'Товари',
                    en: 'Products',
                    de: 'Produkte',
                    pl: 'Produkty',
                },
                inStorage: {
                    ru: 'Сейчас в хранилище',
                    ua: 'Зараз у сховищі',
                    en: 'Currently in storage',
                    de: 'Derzeit im Lager',
                    pl: 'Obecnie w magazynie',
                },
                pricePerUnit: {
                    ru: 'Цена за единицу',
                    ua: 'Ціна за одиницю',
                    en: 'Price per unit',
                    de: 'Preis pro Einheit',
                    pl: 'Cena za jednostkę',
                },
                pricePerDelivery: {
                    ru: 'Цена за доставку',
                    ua: 'Ціна за доставку',
                    en: 'Price per delivery',
                    de: 'Preis pro Lieferung',
                    pl: 'Cena za dostawę',
                },
                desc: {
                    ru: 'Для успешной работы бизнесс всегда должен иметь товары, не забывайте вовремя их пополнять иначе ваше предприятие просто не сможет работать!',
                    ua: 'Для успішної роботи бізнес завжди повинен мати товари, не забувайте вчасно їх поповнювати, інакше ваше підприємство просто не зможе працювати!',
                    en: "For successful operation, a business must always have goods. Don't forget to replenish them on time, otherwise your enterprise simply won't be able to function!",
                    de: 'Für einen erfolgreichen Betrieb muss ein Unternehmen immer Waren vorrätig haben. Vergessen Sie nicht, diese rechtzeitig aufzufüllen, sonst kann Ihr Unternehmen einfach nicht funktionieren!',
                    pl: 'Dla pomyślnego działania biznes zawsze musi mieć towary. Nie zapomnij uzupełniać ich na czas, w przeciwnym razie Twoje przedsiębiorstwo po prostu nie będzie mogło funkcjonować!',
                },

                buttonBuy: {
                    ru: 'Заказать товары',
                    ua: 'Замовити товари',
                    en: 'Order products',
                    de: 'Produkte bestellen',
                    pl: 'Zamów produkty',
                },
            },

            markup: {
                name: {
                    ru: 'Наценка',
                    ua: 'Націнка',
                    en: 'Markup',
                    de: 'Aufschlag',
                    pl: 'Narzut',
                },

                desc: {
                    ru: 'Наценка будет применяться к каждому товару, чем выше наценка, тем больше вы заработаете, но помните: конкуренты не спят. Если у вас будет слишком большая наценка, будут ли покупать товар именно у вас?',
                    ua: "Націнка буде застосовуватися до кожного товару, чим вища націнка, тим більше ви заробите, але пам'ятайте: конкуренти не сплять. Якщо у вас буде занадто велика націнка, чи купуватимуть товар саме у вас?",
                    en: "The markup will be applied to each product. The higher the markup, the more you will earn, but remember: competitors don't sleep. If your markup is too high, will customers buy the product specifically from you?",
                    de: 'Der Aufschlag wird auf jedes Produkt angewendet. Je höher der Aufschlag, desto mehr verdienen Sie, aber denken Sie daran: Konkurrenten schlafen nicht. Wenn Ihr Aufschlag zu hoch ist, werden Kunden das Produkt dann speziell bei Ihnen kaufen?',
                    pl: 'Marża zostanie zastosowana do każdego produktu. Im wyższa marża, tym więcej zarobisz, ale pamiętaj: konkurencja nie śpi. Jeśli Twoja marża będzie zbyt wysoka, czy klienci kupią produkt właśnie u Ciebie?',
                },

                buttonApply: {
                    ru: 'Применить наценку',
                    ua: 'Застосувати націнку',
                    en: 'Apply markup',
                    de: 'Aufschlag anwenden',
                    pl: 'Zastosuj narzut',
                },
            },

            cashCollection: {
                name: {
                    ru: 'Инкасация',
                    ua: 'Інкасація',
                    en: 'Cash Collection',
                    de: 'Geldeinzug',
                    pl: 'Inkaso',
                },
                desc: {
                    ru: 'Деньги из кассы будут автоматически доставляться в банк на твой банковский счёт каждый час',
                    ua: 'Гроші з каси будуть автоматично доставлятися в банк на твій банківський рахунок щогодини',
                    en: 'Money from the cash register will be automatically delivered to the bank into your bank account every hour',
                    de: 'Das Geld aus der Kasse wird automatisch jede Stunde auf dein Bankkonto überwiesen',
                    pl: 'Pieniądze z kasy będą automatycznie przekazywane do banku na twoje konto bankowe co godzinę',
                },
            },

            autoReplenishment: {
                name: {
                    ru: 'Авто пополнение товара',
                    ua: 'Автоматичне поповнення товару',
                    en: 'Automatic product replenishment',
                    de: 'Automatische Produktnachfüllung',
                    pl: 'Automatyczne uzupełnianie towaru',
                },
                desc: {
                    ru: 'Автозаказ оформится, если на коммерческом счёте достаточно денег и запас на складе опустится ниже 10% от максимума.',
                    ua: 'Автозамовлення спрацює, якщо на комерційному рахунку достатньо коштів і запас на складі впаде нижче 10% від максимального.',
                    en: 'Auto-ordering will trigger when the business account has sufficient funds and the warehouse stock falls below 10% of its maximum.',
                    de: 'Die automatische Bestellung wird ausgelöst, wenn auf dem Geschäftskonto genug Geld ist und der Lagerbestand unter 10% des Maximums fällt.',
                    pl: 'Automatyczne zamówienie uruchomi się, gdy na koncie firmowym jest wystarczająco środków, a stan magazynu spadnie poniżej 10% maksymalnej pojemności.',
                },
            },
        },

        reputation: {
            name: {
                ru: 'Репутация',
                ua: 'Репутація',
                en: 'Reputation',
                de: 'Ruf',
                pl: 'Reputacja',
            },
            yourReputation: {
                ru: 'Ваша репутация',
                ua: 'Ваша репутація',
                en: 'Your reputation',
                de: 'Ihr Ruf',
                pl: 'Twoja reputacja',
            },
            desc: {
                ru: 'Репутация вашего бизнеса это очень важно, от этого зависит какой процент вы будите получать от каждой покупки ваших клиентов, если ваша репутация 0 - вы будите получать всего 50% от покупок ваших посетителей, если же репутация 100 то и получать вы будите 100% от каждой покупки.',
                ua: 'Репутація вашого бізнесу це дуже важливо, від цього залежить який відсоток ви будете отримувати від кожної покупки ваших клієнтів, якщо ваша репутація 0 - ви будете отримувати лише 50% від покупок ваших відвідувачів, якщо ж репутація 100, то й отримувати ви будете 100% від кожної покупки.',
                en: "Your business reputation is very important; it determines the percentage you will receive from each purchase made by your clients. If your reputation is 0, you will only receive 50% of your visitors' purchases. If your reputation is 100, you will receive 100% from each purchase.",
                de: 'Der Ruf Ihres Unternehmens ist sehr wichtig; davon hängt ab, welchen Prozentsatz Sie von jedem Einkauf Ihrer Kunden erhalten werden. Wenn Ihr Ruf 0 ist, erhalten Sie nur 50% der Einkäufe Ihrer Besucher. Wenn der Ruf 100 ist, erhalten Sie 100% von jedem Einkauf.',
                pl: 'Reputacja Twojego biznesu jest bardzo ważna; od niej zależy, jaki procent będziesz otrzymywać od każdego zakupu Twoich klientów. Jeśli Twoja reputacja wynosi 0, będziesz otrzymywać tylko 50% z zakupów Twoich odwiedzających. Jeśli reputacja wynosi 100, będziesz otrzymywać 100% z każdego zakupu.',
            },
            inDev: {
                ru: 'На текущий момент эта система находится в разработке и пока что не работает, если у вас есть идеи, какие ивенты вы хотите видеть между владельцами бизнессов пишите их в наш Discord, мы будем рады их обдумать!',
                ua: 'На поточний момент ця система знаходиться в розробці і поки що не працює. Якщо у вас є ідеї, які події ви хочете бачити між власниками бізнесів, пишіть їх у наш Discord, ми будемо раді їх обміркувати!',
                en: "Currently, this system is under development and is not yet functional. If you have ideas for events you'd like to see between business owners, please share them in our Discord; we would be happy to consider them!",
                de: 'Derzeit befindet sich dieses System in Entwicklung und ist noch nicht funktionsfähig. Wenn Sie Ideen für Events haben, die Sie zwischen Geschäftsinhabern sehen möchten, teilen Sie diese bitte in unserem Discord mit; wir würden uns freuen, sie zu berücksichtigen!',
                pl: 'Obecnie ten system jest w fazie rozwoju i jeszcze nie działa. Jeśli masz pomysły na wydarzenia, które chciałbyś zobaczyć między właścicielami firm, napisz o nich na naszym Discordzie; chętnie je rozważymy!',
            },
        },
    },

    commission: {
        ru: 'Комиссия',
        ua: 'Комісія',
        en: 'Commission',
        de: 'Provision',
        pl: 'Prowizja',
    },

    enable: {
        ru: 'Включить',
        ua: 'Увімкнути',
        en: 'Enable',
        de: 'Aktivieren',
        pl: 'Włączyć',
    },

    disable: {
        ru: 'Выключить',
        ua: 'Вимкнути',
        en: 'Disable',
        de: 'Deaktivieren',
        pl: 'Wyłączyć',
    },

    logs: {
        sale: {
            ru: 'Продано {{quantity}} товара для {{characterName}} на сумму {{amount}}',
            ua: 'Продано {{quantity}} товару для {{characterName}} на суму {{amount}}',
            en: 'Sold {{quantity}} item(s) to {{characterName}} for a total of {{amount}}',
            de: '{{quantity}} Artikel an {{characterName}} verkauft für insgesamt {{amount}}',
            pl: 'Sprzedano {{quantity}} przedmiot(ów) dla {{characterName}} za {{amount}}',
        },
        markupChanged: {
            ru: 'Наценка товара обновлена: теперь {{markup}}% (раньше было {{oldMarkup}}%)',
            ua: 'Націнку товару оновлено: тепер {{markup}}% (раніше було {{oldMarkup}}%)',
            en: 'Product markup updated: now {{markup}}% (was {{oldMarkup}}%)',
            de: 'Produktaufschlag aktualisiert: jetzt {{markup}}% (vorher {{oldMarkup}}%)',
            pl: 'Marża produktu zaktualizowana: teraz {{markup}}% (wcześniej było {{oldMarkup}}%)',
        },
        orderProducts: {
            ru: 'Заказано {{amount}} товаров на сумму {{price}}',
            ua: 'Замовлено {{amount}} товарів на суму {{price}}',
            en: 'Ordered {{amount}} items for a total of {{price}}',
            de: '{{amount}} Artikel für insgesamt {{price}} bestellt',
            pl: 'Zamówiono {{amount}} przedmiotów za {{price}}',
        },
        withdrawMoney: {
            ru: 'Снято {{initialSum}} из кассы. Налог {{tax}}. Итого {{finalAmount}}',
            ua: 'Знято {{initialSum}} з каси. Податок {{tax}}. Разом {{finalAmount}}',
            en: 'Withdrawn {{initialSum}} from the cash register. Tax {{tax}}. Total {{finalAmount}}',
            de: '{{initialSum}} aus der Kasse entnommen. Steuer {{tax}}. Summe {{finalAmount}}',
            pl: 'Wypłacono {{initialSum}} z kasy. Podatek {{tax}}. Razem {{finalAmount}}',
        },
        cashCollectionEnabled: {
            ru: 'Инкасация включена',
            ua: 'Інкасація ввімкнена',
            en: 'Cash collection enabled',
            de: 'Inkasso eingeschaltet',
            pl: 'Inkasacja włączona',
        },
        cashCollectionDisabled: {
            ru: 'Инкасация выключена',
            ua: 'Інкасація вимкнена',
            en: 'Cash collection disabled',
            de: 'Inkasso ausgeschaltet',
            pl: 'Inkasacja wyłączona',
        },
        autoReplenishmentEnabled: {
            ru: 'Автопополнение товара включено',
            ua: 'Автопоповнення товару ввімкнене',
            en: 'Auto product replenishment enabled',
            de: 'Automatische Warenauffüllung eingeschaltet',
            pl: 'Automatyczne uzupełnianie towaru włączone',
        },
        autoReplenishmentDisabled: {
            ru: 'Автопополнение товара выключено',
            ua: 'Автопоповнення товару вимкнене',
            en: 'Auto product replenishment disabled',
            de: 'Automatische Warenauffüllung ausgeschaltet',
            pl: 'Automatyczne uzupełnianie towaru wyłączone',
        },
        cashCollectedSuccess: {
            ru: 'Инкассировано {{initBalance}}. Комиссия: {{commission}} ({{commissionAmount}}). На счёт поступило: {{amount}}',
            ua: 'Інкасовано {{initBalance}}. Комісія: {{commission}} ({{commissionAmount}}). На рахунок надійшло: {{amount}}',
            en: 'Collected {{initBalance}}. Fee: {{commission}} ({{commissionAmount}}). Credited to account: {{amount}}',
            de: 'Eingezogen {{initBalance}}. Gebühr: {{commission}} ({{commissionAmount}}). Auf dein Konto gutgeschrieben: {{amount}}',
            pl: 'Zainkasowano {{initBalance}}. Prowizja: {{commission}} ({{commissionAmount}}). Na konto wpłynęło: {{amount}}',
        },
        cashCollectedFailed: {
            ru: 'Не удалось инкассировать деньги, возможно у вас нет банковского счёта?',
            ua: 'Не вдалося інкасувати гроші, можливо, у тебе немає банківського рахунку?',
            en: 'Failed to collect money, maybe you don’t have a bank account?',
            de: 'Geld konnte nicht eingezogen werden, vielleicht hast du kein Bankkonto?',
            pl: 'Nie udało się zainkasować pieniędzy, może nie masz konta bankowego?',
        },
        cashCollectedFailedNoMoney: {
            ru: 'Не удалось инкассировать деньги, на балансе бизнеса нет денег',
            ua: 'Не вдалося інкасувати гроші, на балансі бізнесу немає грошей',
            en: 'Failed to collect money, there is no money on the business balance',
            de: 'Geld konnte nicht eingezogen werden, auf dem Geschäftskonto ist kein Geld',
            pl: 'Nie udało się zainkasować pieniędzy, na saldzie biznesu nie ma pieniędzy',
        },
        orderProductsSuccess: {
            ru: 'Заказано товаров на сумму {{deliveryPrice}}$. Добавлено: {{addedGoods}} шт. Теперь на складе: {{finalGoods}} шт.',
            ua: 'Замовлено товарів на суму {{deliveryPrice}}$. Додано: {{addedGoods}} шт. Тепер на складі: {{finalGoods}} шт.',
            en: 'Products ordered for {{deliveryPrice}}$. Added: {{addedGoods}} pcs. Now in stock: {{finalGoods}} pcs.',
            de: 'Waren im Wert von {{deliveryPrice}}$ bestellt. Hinzugefügt: {{addedGoods}} Stk. Jetzt im Lager: {{finalGoods}} Stk.',
            pl: 'Zamówiono towary o wartości {{deliveryPrice}}$. Dodano: {{addedGoods}} szt. Teraz w magazynie: {{finalGoods}} szt.',
        },
    },
};
