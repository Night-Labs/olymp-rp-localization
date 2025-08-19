

import server from './server';
export default {
    ...server,
    tabs: {
        info: {
            name: {
                ru: 'Информация',
                ua: 'Інформація',
                en: 'Information',
                de: 'Informationen',
                pl: 'Informacje',
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

            buy: {
                ru: 'Купить',
                ua: 'Купити',
                en: 'Buy',
                de: 'Kaufen',
                pl: 'Kup',
            },
            sell: {
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
                ru: 'Логи',
                ua: 'Логи',
                en: 'Logs',
                de: 'Protokolle',
                pl: 'Logi',
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
            time: {
                ru: 'Время',
                ua: 'Час',
                en: 'Time',
                de: 'Zeit',
                pl: 'Czas',
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
                    ru: 'Деньги из кассы будут автоматически доставлятся в банк на ваш банковский счёт',
                    ua: 'Гроші з каси будуть автоматично доставлятися до банку на ваш банківський рахунок',
                    en: 'Money from the cash register will be automatically deposited into your bank account',
                    de: 'Geld aus der Kasse wird automatisch auf Ihr Bankkonto eingezahlt',
                    pl: 'Pieniądze z kasy będą automatycznie wpłacane na Twoje konto bankowe',
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
                    ru: 'Заказ доставки товаров будет осуществлятся автоматически при наличии денег на вашем комерческом счёте',
                    ua: 'Замовлення доставки товарів буде здійснюватися автоматично за наявності грошей на вашому комерційному рахунку',
                    en: 'Product delivery orders will be placed automatically if there are funds available on your commercial account',
                    de: 'Warenlieferungsbestellungen werden automatisch aufgegeben, wenn auf Ihrem Geschäftskonto Gelder verfügbar sind',
                    pl: 'Zamówienia na dostawę towarów będą składane automatycznie, jeśli na Twoim koncie handlowym będą dostępne środki',
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
};
