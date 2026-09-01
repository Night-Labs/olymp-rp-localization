export const features = {
    changeName: {
        name: {
            ru: 'Изменить имя',
            ua: "Змінити ім'я",
            en: 'Change Name',
            de: 'Namen ändern',
            pl: 'Zmień imię',
        },

        modal: {
            name: {
                ru: 'Введите новое имя',
                ua: "Введіть нове ім'я",
                en: 'Enter a new name',
                de: 'Neuen Namen eingeben',
                pl: 'Wprowadź nowe imię',
            },
            desc: {
                ru: 'Имя должно состоять только из латинских букв, не должно содержать оскорбительных или нецензурных слов.',
                ua: "Ім'я повинно складатися тільки з латинських літер, не повинно містити образливих або нецензурних слів.",
                en: 'The name must consist only of Latin letters and must not contain offensive or obscene words.',
                de: 'Der Name darf nur aus lateinischen Buchstaben bestehen und keine beleidigenden oder obszönen Wörter enthalten.',
                pl: 'Imię musi składać się tylko z łacińskich liter i nie może zawierać obraźliwych lub niecenzuralnych słów.',
            },

            firstName: {
                ru: 'Имя',
                ua: "Ім'я",
                en: 'First Name',
                de: 'Vorname',
                pl: 'Imię',
            },
            lastName: {
                ru: 'Фамилия',
                ua: 'Прізвище',
                en: 'Last Name',
                de: 'Nachname',
                pl: 'Nazwisko',
            },
        },

        success: {
            ru: 'Вы успешно сменили имя на - {{firstName}} {{lastName}}',
            ua: "Ви успішно змінили ім'я на - {{firstName}} {{lastName}}",
            en: 'You have successfully changed your name to - {{firstName}} {{lastName}}',
            de: 'Du hast deinen Namen erfolgreich in - {{firstName}} {{lastName}} geändert',
            pl: 'Pomyślnie zmieniono imię na - {{firstName}} {{lastName}}',
        },

        error: {
            ru: '{{firstName}} {{lastName}} - не является допустимым именем',
            ua: "{{firstName}} {{lastName}} - не є допустимим ім'ям",
            en: '{{firstName}} {{lastName}} - is not a valid name',
            de: '{{firstName}} {{lastName}} - ist kein gültiger Name',
            pl: '{{firstName}} {{lastName}} - nie jest prawidłowym imieniem',
        },
    },
    leaveFaction: {
        name: {
            ru: 'Уволится из фракции',
            ua: 'Звільнитися з фракції',
            en: 'Resign from faction',
            de: 'Aus Fraktion austreten',
            pl: 'Wystąpienie z frakcji',
        },
        modal: {
            name: {
                ru: 'Уволится из фракции',
                ua: 'Звільнитися з фракції',
                en: 'Resign from faction',
                de: 'Aus Fraktion austreten',
                pl: 'Wystąpienie z frakcji',
            },
            desc: {
                ru: 'Вы действительно хотите уволится из фракции ?',
                ua: 'Ви дійсно хочете звільниться з фракції ?',
                en: 'Are you sure you want to leave the faction ?',
                de: 'Möchtest du wirklich die Fraktion verlassen ?',
                pl: 'Czy na pewno chcesz opuścić frakcję ?',
            },
        },

        success: {
            ru: 'Вы успешно уволились из фракции {{name}}',
            ua: 'Ви успішно звільнилися з фракції {{name}}',
            en: 'You have successfully resigned from the faction {{name}}',
            de: 'Du bist erfolgreich von der Fraktion {{name}} zurückgetreten',
            pl: 'Pomyślnie zrezygnowałeś z frakcji {{name}}',
        },
        error: {
            ru: 'Вы не состоите в фракции',
            ua: 'Ви не перебуваєте у фракції',
            en: 'You are not in a faction',
            de: 'Du bist in keiner Fraktion',
            pl: 'Nie jesteś w frakcji',
        },
    },
    miltaryTicket: {
        name: {
            ru: 'Военный билет',
            ua: 'Військовий квиток',
            en: 'Military ID',
            de: 'Militärpass',
            pl: 'Dowód wojskowy',
        },
        modal: {
            name: {
                ru: 'Купить военный билет',
                ua: 'Купити військовий квиток',
                en: 'Buy military ID',
                de: 'Militärpass kaufen',
                pl: 'Kup dowód wojskowy',
            },
            desc: {
                ru: 'Вы действительно хотите купить военный билет?',
                ua: 'Ви дійсно хочете купити військовий квиток?',
                en: 'Do you really want to buy a military ID?',
                de: 'Möchtest du wirklich einen Militärpass kaufen?',
                pl: 'Czy na pewno chcesz kupić dowód wojskowy?',
            },
        },
        success: {
            ru: 'Вы успешно получили военный билет',
            ua: 'Ви успішно отримали військовий квиток',
            en: 'You have successfully received the military ID',
            de: 'Du hast den Militärpass erfolgreich erhalten',
            pl: 'Pomyślnie otrzymałeś dowód wojskowy',
        },
        error: {
            ru: 'У вас уже есть военный билет',
            ua: 'У вас вже є військовий квиток',
            en: 'You already have a military ID',
            de: 'Du hast bereits einen Militärpass',
            pl: 'Masz już dowód wojskowy',
        },
    },

    uniquePhoneNumber: {
        name: {
            ru: 'Уникальный номер телефона',
            ua: 'Унікальний номер телефону',
            en: 'Unique phone number',
            de: 'Einmalige Telefonnummer',
            pl: 'Unikalny numer telefonu',
        },

        buyDesc: {
            ru: 'Введите желаемый номер формата ХХХ-ХХХ-ХХХ (либо короче) <br><br> Цена уникального номера зависит от количества символов <br><br> Обратите внимание, номер будет забронировал ТОЛЬКО после активации купленной сим-карты',
            ua: 'Введіть бажаний номер у форматі ХХХ-ХХХ-ХХХ (або коротший) <br><br> Ціна унікального номера залежить від кількості символів <br><br> Зверніть увагу, номер буде заброньовано ЛИШЕ після активації придбаної SIM-картки',
            en: 'Enter the desired number in the format XXX-XXX-XXX (or shorter) <br><br> The price of a unique number depends on the number of characters <br><br> Please note, the number will be reserved ONLY after the purchased SIM card is activated',
            de: 'Gib die gewünschte Nummer im Format XXX-XXX-XXX (oder kürzer) ein <br><br> Der Preis für eine individuelle Nummer hängt von der Zeichenanzahl ab <br><br> Bitte beachte die Nummer wird NUR nach der Aktivierung der gekauften SIM-Karte reserviert',
            pl: 'Wprowadź żądany numer w formacie XXX-XXX-XXX (lub krótszym) <br><br> Cena unikalnego numeru zależy od liczby znaków <br><br> Uwaga, numer zostanie zarezerwowany TYLKO po aktywacji zakupionej karty SIM',
        },

        placeholder: {
            ru: 'Введите номер телефона',
            ua: 'Введіть номер телефону',
            en: 'Enter phone number',
            de: 'Telefonnummer eingeben',
            pl: 'Wprowadź numer telefonu',
        },

        successReceived: {
            ru: 'Сим карта с номером {{phoneNumber}} добавлена в ваш инвентарь, активируйте её чтобы забронировать номер телефона',
            ua: 'Сім карта з номером {{phoneNumber}} додана до вашого інвентарю, активуйте її, щоб забронювати номер телефону',
            en: 'SIM card with number {{phoneNumber}} has been added to your inventory, activate it to reserve the phone number',
            de: 'Die SIM-Karte mit der Nummer {{phoneNumber}} wurde deinem Inventar hinzugefügt. Aktiviere sie, um die Telefonnummer zu reservieren.',
            pl: 'Karta SIM o numerze {{phoneNumber}} została dodana do Twojego ekwipunku, aktywuj ją, aby zarezerwować numer telefonu.',
        },

        error: {
            ru: 'Недостаточно места в инвентаре для сим-карты',
            ua: 'Недостатньо місця в інвентарі для сім-карти',
            en: 'Not enough inventory space for the SIM card',
            de: 'Nicht genug Platz im Inventar für die SIM-Karte',
            pl: 'Za mało miejsca w ekwipunku na kartę SIM',
        },
    },

    uniqueNumberPlate: {
        name: {
            ru: 'Уникальный номер',
            ua: 'Унікальний номер',
            en: 'Unique number plate',
            de: 'Einzigartiges Kennzeichen',
            pl: 'Unikalna tablica rejestracyjna',
        },

        buyDesc: {
            ru: 'Введите желаемый номер от 2 до 8 символов: латинские буквы и цифры <br><br> Цена зависит от длины номера и от красоты комбинации: повторы, последовательности и одинаковые символы стоят дороже <br><br> Обратите внимание, номер будет закреплён за вами ТОЛЬКО после получения предмета со склада',
            ua: 'Введіть бажаний номер від 2 до 8 символів: латинські літери та цифри <br><br> Ціна залежить від довжини номера та від краси комбінації: повтори, послідовності та однакові символи коштують дорожче <br><br> Зверніть увагу, номер буде закріплено за вами ЛИШЕ після отримання предмета зі складу',
            en: 'Enter the desired number, 2 to 8 characters: Latin letters and digits <br><br> The price depends on the length and on how rare the combination is: repeats, sequences and identical characters cost more <br><br> Please note, the number is reserved for you ONLY after you receive the item from the warehouse',
            de: 'Gib das gewünschte Kennzeichen mit 2 bis 8 Zeichen ein: lateinische Buchstaben und Ziffern <br><br> Der Preis hängt von der Länge und von der Seltenheit der Kombination ab: Wiederholungen, Folgen und identische Zeichen kosten mehr <br><br> Bitte beachte, das Kennzeichen wird NUR dann für dich reserviert, wenn du den Gegenstand aus dem Lager erhältst',
            pl: 'Wprowadź żądany numer o długości od 2 do 8 znaków: łacińskie litery i cyfry <br><br> Cena zależy od długości numeru i od rzadkości kombinacji: powtórzenia, sekwencje i identyczne znaki kosztują więcej <br><br> Uwaga, numer zostanie zarezerwowany dla Ciebie TYLKO po odebraniu przedmiotu z magazynu',
        },

        placeholder: {
            ru: 'Введите номер',
            ua: 'Введіть номер',
            en: 'Enter plate number',
            de: 'Kennzeichen eingeben',
            pl: 'Wprowadź numer',
        },

        successReceived: {
            ru: 'Номер {{number}} оформлен на вас и добавлен в ваш инвентарь',
            ua: 'Номер {{number}} оформлено на вас та додано до вашого інвентарю',
            en: 'Plate {{number}} is registered to you and added to your inventory',
            de: 'Das Kennzeichen {{number}} ist auf dich registriert und wurde deinem Inventar hinzugefügt',
            pl: 'Numer {{number}} został zarejestrowany na Ciebie i dodany do Twojego ekwipunku',
        },

        errorNoSpace: {
            ru: 'Недостаточно места в инвентаре',
            ua: 'Недостатньо місця в інвентарі',
            en: 'Not enough space in your inventory',
            de: 'Nicht genug Platz im Inventar',
            pl: 'Za mało miejsca w ekwipunku',
        },
    },
};
