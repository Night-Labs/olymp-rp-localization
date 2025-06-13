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
            de: 'Sie haben Ihren Namen erfolgreich in - {{firstName}} {{lastName}} geändert',
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
                de: 'Möchten Sie wirklich die Fraktion verlassen ?',
                pl: 'Czy na pewno chcesz opuścić frakcję ?',
            },
        },

        success: {
            ru: 'Вы успешно уволились из фракции {{name}}',
            ua: 'Ви успішно звільнилися з фракції {{name}}',
            en: 'You have successfully resigned from the faction {{name}}',
            de: 'Sie haben erfolgreich von der Fraktion {{name}} zurückgetreten',
            pl: 'Pomyślnie zrezygnowałeś z frakcji {{name}}',
        },
        error: {
            ru: 'Вы не состоите в фракции',
            ua: 'Ви не перебуваєте у фракції',
            en: 'You are not in a faction',
            de: 'Sie sind in keiner Fraktion',
            pl: 'Nie jesteś w frakcji',
        },
    },
    miltaryTicket: {
        name: {
            ru: 'Военный билет',
            ua: 'Військовий квиток',
            en: 'Military ID',
            de: 'Wehrpass',
            pl: 'Dowód wojskowy',
        },
        modal: {
            name: {
                ru: 'Купить военный билет',
                ua: 'Купити військовий квиток',
                en: 'Buy military ID',
                de: 'Wehrpass kaufen',
                pl: 'Kup dowód wojskowy',
            },
            desc: {
                ru: 'Вы действительно хотите купить военный билет?',
                ua: 'Ви дійсно хочете купити військовий квиток?',
                en: 'Do you really want to buy a military ID?',
                de: 'Möchten Sie wirklich einen Wehrpass kaufen?',
                pl: 'Czy na pewno chcesz kupić dowód wojskowy?',
            },
        },
        success: {
            ru: 'Вы успешно получили военный билет',
            ua: 'Ви успішно отримали військовий квиток',
            en: 'You have successfully received the military ID',
            de: 'Sie haben den Wehrpass erfolgreich erhalten',
            pl: 'Pomyślnie otrzymałeś dowód wojskowy',
        },
        error: {
            ru: 'У вас уже есть военный билет',
            ua: 'У вас вже є військовий квиток',
            en: 'You already have a military ID',
            de: 'Sie haben bereits einen Wehrpass',
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
            de: 'Geben Sie die gewünschte Nummer im Format XXX-XXX-XXX (oder kürzer) ein <br><br> Der Preis für eine individuelle Nummer hängt von der Zeichenanzahl ab <br><br> Bitte beachten Sie, die Nummer wird NUR nach der Aktivierung der gekauften SIM-Karte reserviert',
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
            de: 'Die SIM-Karte mit der Nummer {{phoneNumber}} wurde Ihrem Inventar hinzugefügt. Aktivieren Sie sie, um die Telefonnummer zu reservieren.',
            pl: 'Karta SIM o numerze {{phoneNumber}} została dodana do Twojego ekwipunku, aktywuj ją, aby zarezerwować numer telefonu.',
        },
    },
};
