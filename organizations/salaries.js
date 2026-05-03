export const salaries = {
    notify: {
        header: {
            ru: 'Зарплаты организации',
            ua: 'Зарплати організації',
            en: 'Organization Salaries',
            de: 'Organisationsgehälter',
            pl: 'Wynagrodzenia organizacji',
        },
    },
    success: {
        set: {
            ru: 'Ставка игрока {{name}} установлена на ${{amount}}',
            ua: 'Ставку гравця {{name}} встановлено на ${{amount}}',
            en: 'Salary of {{name}} set to ${{amount}}',
            de: 'Gehalt von {{name}} auf ${{amount}} gesetzt',
            pl: 'Wynagrodzenie gracza {{name}} ustawione na ${{amount}}',
        },
        yourSalary: {
            ru: 'Ваша почасовая ставка изменена на ${{amount}}',
            ua: 'Вашу погодинну ставку змінено на ${{amount}}',
            en: 'Your hourly salary changed to ${{amount}}',
            de: 'Dein Stundenlohn wurde auf ${{amount}} geändert',
            pl: 'Twoja stawka godzinowa zmieniona na ${{amount}}',
        },
    },
    errors: {
        noPermission: {
            ru: 'Недостаточно прав для назначения зарплат',
            ua: 'Недостатньо прав для призначення зарплат',
            en: 'You lack permission to manage salaries',
            de: 'Du hast keine Berechtigung zur Gehaltsverwaltung',
            pl: 'Brak uprawnień do zarządzania wynagrodzeniami',
        },
        targetNotMember: {
            ru: 'Игрок не состоит в вашей организации',
            ua: 'Гравець не перебуває у вашій організації',
            en: 'Player is not in your organization',
            de: 'Spieler ist nicht in deiner Organisation',
            pl: 'Gracz nie należy do twojej organizacji',
        },
        cannotManage: {
            ru: 'Нельзя назначать зарплату игроку с равным или высшим рангом',
            ua: 'Не можна призначати зарплату гравцю з рівним чи вищим рангом',
            en: 'You cannot set salary for a player of equal or higher rank',
            de: 'Du kannst keinem Spieler mit gleichem oder höherem Rang ein Gehalt zuweisen',
            pl: 'Nie możesz ustawiać wynagrodzenia graczowi o równej lub wyższej randze',
        },
        invalidAmount: {
            ru: 'Некорректная сумма зарплаты',
            ua: 'Некоректна сума зарплати',
            en: 'Invalid salary amount',
            de: 'Ungültiger Gehaltsbetrag',
            pl: 'Nieprawidłowa kwota wynagrodzenia',
        },
        notInOrganization: {
            ru: 'Вы не состоите в организации',
            ua: 'Ви не перебуваєте в організації',
            en: 'You are not in an organization',
            de: 'Du bist in keiner Organisation',
            pl: 'Nie należysz do organizacji',
        },
        failed: {
            ru: 'Не удалось установить ставку',
            ua: 'Не вдалося встановити ставку',
            en: 'Failed to set salary',
            de: 'Gehalt konnte nicht festgelegt werden',
            pl: 'Nie udało się ustawić wynagrodzenia',
        },
    },
};
