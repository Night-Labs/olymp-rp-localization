export const server = {
    createdRandomPromo: {
        ua: 'Створено випадковий промокод ~o~{{promo}} ~w~на ~o~{{sum}} донат валюти ~w~ <br>Він буде діяти рівно ~o~5 хвилин ~w~, встигни ввести його в <br>~g~Меню > Магазин > Промокод',
        en: 'Created a random promo code ~o~{{promo}} ~w~for ~o~{{sum}} donation currency ~w~ <br>It will work for exactly ~o~5 minutes ~w~, hurry up to enter it in <br>~g~Menu > Store > Promo Code',
        ru: 'Создан случайный промокод ~o~{{promo}} ~w~на ~o~{{sum}} донат валюты ~w~ <br>Он будет работать ровно ~o~5 минут ~w~, успей ввести его в <br>~g~Меню > Магазин > Промокод',
        de: 'Ein zufälliger Promo-Code wurde erstellt ~o~{{promo}} ~w~für ~o~{{sum}} OlympCoins ~w~ <br>Er wird genau ~o~5 Minuten ~w~ funktionieren, beeil dich, ihn einzugeben in <br>~g~Menü > Shop > Promo-Code',
        pl: 'Utworzono losowy kod promocyjny ~o~{{promo}} ~w~dla ~o~{{sum}} waluty donacyjnej ~w~ <br>Będzie działać przez dokładnie ~o~5 minut ~w~, śpiesz się, aby go wprowadzić w <br>~g~Menu > Sklep > Kod promocyjny',
        zh: '随机代码~o~{promo}}~w~关于~o~{sum}}货币捐赠~w~<br>它将同样有效~o~5分钟~w~，请在<br>~g~菜单>杂志>代码中输入它',
    },
    donatStore: {
        ua: 'Донат магазин',
        en: 'Donation store',
        ru: 'Магазин донатов',
        de: 'Spenden-Shop',
        pl: 'Sklep donacji',
        zh: '捐赠杂志',
    },
    notEnoughDonat: {
        ru: 'Недостаточно донат-валюты',
        ua: 'Недостатньо донат-валюти',
        en: 'Not enough donation currency',
        de: 'Nicht genug Olympcoins',
        pl: 'Niewystarczająca ilość waluty darowizn',
        zh: '捐助货币不足',
    },

    phoneNumberFormatError: {
        ru: 'Формат номера телефона указан неверно, номер телефона должен быть от 1 до 9 символов и состоять только из цифр, формата, пример: 123456789',
        ua: 'Формат номера телефону вказано невірно, номер телефону повинен бути від 1 до 9 символів і складатися тільки з цифр, формату, приклад: 123456789',
        en: 'Incorrect phone number format, the phone number must be from 1 to 9 characters and consist only of digits, format, example: 123456789',
        de: 'Falsches Telefonnummerformat, die Telefonnummer muss zwischen 1 und 9 Zeichen lang sein und darf nur aus Ziffern bestehen, Format, Beispiel: 123456789',
        pl: 'Niepoprawny format numeru telefonu, numer telefonu musi mieć od 1 do 9 znaków i składać się tylko z cyfr, format, przykład: 123456789',
    },

    phoneNumberExistError: {
        ru: 'Этот номер телефона уже занят',
        ua: 'Цей номер телефону вже зайнятий',
        en: 'This phone number is already taken',
        de: 'Diese Telefonnummer ist bereits vergeben',
        pl: 'Ten numer telefonu jest już zajęty',
    },

    donateInventory: {
        ru: 'Донат-инвентарь',
        ua: 'Донат-інвентар',
        en: 'Donation inventory',
        de: 'Spendeninventar',
        pl: 'Inwentarz donacji',
        zh: '捐赠清单',
    },

    sell: {
        ru: 'Вы продали {{name}} за {{price}} Olymp-Coins',
        ua: 'Ви продали {{name}} за {{price}} Olymp-Coins',
        en: 'You sold {{name}} for {{price}} Olymp-Coins',
        de: 'Du hast {{name}} fuer {{price}} Olymp-Coins',
        pl: 'Sprzedano {{name}} za {{price}} Olymp-Coins',
        zh: '您需要购买奥林普币',
    },

    purchaseNotify: {
        ru: 'Вы купили {{name}} {{quantity}} шт.',
        ua: 'Ви купили {{name}} {{quantity}} шт.',
        en: 'You purchased {{name}} {{quantity}} pcs.',
        de: 'Du hast {{name}} {{quantity}} pcs. gekauft',
        pl: 'Kupiono {{name}} {{quantity}} szt.',
        zh: '您购买了｛｛name｝｝｛｛quantity｝件',
    },

    donated: {
        ru: '!{#ffffff}Спасибо за ваш донат проекту! <br> Вам начислено !{#fdd431}{{donateSum}} Olymp-Coins !{#ffffff}ваш баланс: !{#fdd431}{{balance}} Olymp-Coins',
        ua: '!{#ffffff}Дякуємо за ваш донат проекту! <br> Вам нараховано !{#fdd431}{{donateSum}} Olymp-Coins !{#ffffff}ваш баланс: !{#fdd431}{{balance}} Olymp-Coins',
        en: '!{#ffffff}Thank you for your donation to the project! <br> You have been credited with !{#fdd431}{{donateSum}} Olymp-Coins !{#ffffff}your balance: !{#fdd431}{{balance}} Olymp-Coins',
        de: '!{#ffffff}Danke für deine Spende an das Projekt! <br> Dir wurden !{#fdd431}{{donateSum}} Olymp-Coins gutgeschrieben !{#ffffff}Dein Kontostand: !{#fdd431}{{balance}} Olymp-Coins',
        pl: '!{#ffffff}Dziękujemy za darowiznę na rzecz projektu! <br> Zostało Ci przyznane !{#fdd431}{{donateSum}} Olymp-Coins !{#ffffff}twój stan konta: !{#fdd431}{{balance}} Olymp-Coins',
        zh: '请联系管理',
    },

    alreadyHasSkin: {
        ru: 'У вас уже есть этот скин',
        ua: 'У вас вже є цей скін',
        en: 'You already have this skin',
        de: 'Du besitzt diesen Skin bereits',
        pl: 'Masz już tę skórkę',
    },

    receive: {
        // Exp

        expMain: {
            ru: 'Получено {{exp}} опыта!',
            ua: 'Отримано {{exp}} досвіду!',
            en: 'Received {{exp}} experience!',
            de: 'Erhaltene {{exp}} Erfahrung!',
            pl: 'Otrzymano {{exp}} doswiadczenia!',
            zh: '收到｛｛exp｝｝｝经验！',
        },

        expTrucker: {
            ru: 'Получено {{exp}} опыта грузоперевозчика!',
            ua: 'Отримано {{exp}} досвіду вантажоперевізника!',
            en: 'Received {{exp}} experience for trucker!',
            de: 'Erhaltene {{exp}} Erfahrung für Transporteur!',
            pl: 'Otrzymano {{exp}} doswiadczenia dla dostawce!',
            zh: '获得了卡车司机的{{exp}}经验',
        },

        expTrucker2: {
            ru: 'Получено {{exp}} опыта дальнобойщика!',
            ua: 'Отримано {{exp}} досвіду далекобійника!',
            en: 'Received {{exp}} experience for trucker!',
            de: 'Erhaltene {{exp}} Erfahrung für Transporteur!',
            pl: 'Otrzymano {{exp}} doswiadczenia dla dostawce!',
            zh: '收到｛｛exp｝｝远程玩家体验！',
        },

        farm: {
            ru: 'Получено {{exp}} опыта фермы!',
            ua: 'Отримано {{exp}} досвіду ферми!',
            en: '{{exp}} farm experience gained!',
            de: '{{exp}} Farm-Erfahrung erhalten!',
            pl: 'Zdobyto {{exp}} doświadczenia na farmie!',
            zh: '获得了农场经验！',
        },

        fishing: {
            ru: 'Получено {{exp}} опыта рыбалки!',
            ua: 'Отримано {{exp}} досвіду рибалки!',
            en: 'Received {{exp}} experience for fishing!',
            de: 'Erhaltene {{exp}} Erfahrung für Angeln!',
            pl: 'Otrzymano {{exp}} doswiadczenia dla ryb!',
            zh: '有钓鱼经验！',
        },

        hunter: {
            ru: 'Получено {{exp}} опыта охоты!',
            ua: 'Отримано {{exp}} досвіду охоти!',
            en: 'Received {{exp}} experience for hunter!',
            de: 'Erhaltene {{exp}} Erfahrung für Jaeger!',
            pl: 'Otrzymano {{exp}} doswiadczenia dla łowco!',
            zh: '有狩猎经验！',
        },

        quarry: {
            ru: 'Получено {{exp}} опыта работы на карьере!',
            ua: "Отримано {{exp}} досвіду роботи на кар'єрі!",
            en: 'Received {{exp}} quarrying experience!',
            de: '{{exp}} Erfahrung im Steinbruch erhalten!',
            pl: 'Otrzymano {{exp}} doświadczenia w pracy w kamieniołomie!',
        },

        currency: {
            ru: 'Получено ${{currency}}',
            ua: 'Отримано ${{currency}}',
            en: 'Received ${{currency}}',
            de: 'Erhaltene ${{currency}}',
            pl: 'Otrzymano ${{currency}}',
            zh: '收到${{货币}',
        },

        vehicle: {
            ru: 'Получено {{vehicle}}',
            ua: 'Отримано {{vehicle}}',
            en: 'Received {{vehicle}}',
            de: 'Erhaltene {{vehicle}}',
            pl: 'Otrzymano {{vehicle}}',
            zh: '收到｛｛车辆｝”中',
        },

        donate: {
            ru: 'Получено {{donate}} Olymp-Coins',
            ua: 'Отримано {{donate}} Olymp-Coins',
            en: 'Received {{donate}} Olymp-Coins',
            de: '{{donate}} Olymp-Coins erhalten',
            pl: 'Otrzymano {{donate}} Olymp-Coins',
        },

        // inventory item
        item: {
            ru: '{{item}} {{quantity}} шт. добавлен в ваш инвентарь',
            ua: '{{item}} {{quantity}} шт. додано до вашого інвентарю',
            en: '{{item}} {{quantity}} pcs. added to your inventory',
            de: '{{item}} {{quantity}} Stk. in dein Inventar hinzugefügt',
            pl: '{{item}} {{quantity}} szt. dodano do twojego ekwipunku',
        },

        // Status
        status: {
            ru: 'Активирован {{status}} статус на {{days}} дней',
            ua: 'Активовано {{status}} статус на {{days}} днів',
            en: 'Activated {{status}} status for {{days}} days',
            de: '{{status}} Status für {{days}} Tage aktiviert',
            pl: 'Aktywowano status {{status}} na {{days}} dni',
        },

        // Разблокирован скин
        skin: {
            ru: 'Разблокирован новый скин {{skin}}',
            ua: 'Розблоковано новий скін {{skin}}',
            en: 'Unlocked new skin {{skin}}',
            de: 'Neuer Skin {{skin}} freigeschaltet',
            pl: 'Odblokowano nową skórkę {{skin}}',
        },
    },
};
