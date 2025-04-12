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
};
