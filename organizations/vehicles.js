export const vehicles = {
    notify: {
        header: {
            ru: 'Семейный транспорт',
            ua: 'Сімейний транспорт',
            en: 'Family Transport',
            de: 'Familientransport',
            pl: 'Transport rodzinny',
        },
    },
    transferModal: {
        title: {
            ru: 'Передача в семью',
            ua: 'Передача у сім\'ю',
            en: 'Transfer to organization',
            de: 'Übertragung an Organisation',
            pl: 'Przekazanie do organizacji',
        },
        message: {
            ru: 'Передать «{{name}}» (#{{plate}}) в семью «{{orgName}}»? Машина перестанет быть личной до выхода из организации.',
            ua: 'Передати «{{name}}» (#{{plate}}) у сім\'ю «{{orgName}}»? Машина перестане бути особистою до виходу з організації.',
            en: 'Transfer «{{name}}» (#{{plate}}) to organization «{{orgName}}»? The vehicle will leave your personal garage until you leave the organization.',
            de: '«{{name}}» (#{{plate}}) an Organisation «{{orgName}}» übertragen? Das Fahrzeug verlässt deine persönliche Garage bis du die Organisation verlässt.',
            pl: 'Przekazać «{{name}}» (#{{plate}}) do organizacji «{{orgName}}»? Pojazd opuści twój osobisty garaż do czasu wyjścia z organizacji.',
        },
        confirmButton: {
            ru: 'Передать',
            ua: 'Передати',
            en: 'Transfer',
            de: 'Übertragen',
            pl: 'Przekazać',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
        },
    },
    success: {
        transferredToOrg: {
            ru: 'Машина «{{vehicle}}» передана в семью',
            ua: 'Машина «{{vehicle}}» передана у сім\'ю',
            en: 'Vehicle «{{vehicle}}» transferred to the organization',
            de: 'Fahrzeug «{{vehicle}}» an die Organisation übertragen',
            pl: 'Pojazd «{{vehicle}}» przekazany do organizacji',
        },
        returnedToOwner: {
            ru: 'Машина «{{vehicle}}» возвращена вам после ухода из организации',
            ua: 'Машина «{{vehicle}}» повернута вам після виходу з організації',
            en: 'Vehicle «{{vehicle}}» has been returned to you after leaving the organization',
            de: 'Fahrzeug «{{vehicle}}» wurde dir nach dem Austritt aus der Organisation zurückgegeben',
            pl: 'Pojazd «{{vehicle}}» został zwrócony po wyjściu z organizacji',
        },
        returnedToImpound: {
            ru: 'Машина «{{vehicle}}» возвращена, но у вас нет свободного слота - забрать её можно на штрафстоянке',
            ua: 'Машина «{{vehicle}}» повернута, але у вас немає вільного слоту - забрати її можна на штрафмайданчику',
            en: 'Vehicle «{{vehicle}}» returned, but you have no free slot - retrieve it from the impound lot',
            de: 'Fahrzeug «{{vehicle}}» zurückgegeben, aber du hast keinen freien Stellplatz - hol es auf dem Beschlagnahmungshof ab',
            pl: 'Pojazd «{{vehicle}}» zwrócony, ale nie masz wolnego slotu - odbierz go z parkingu depozytowego',
        },
    },
    errors: {
        notInOrganization: {
            ru: 'Вы не состоите в организации',
            ua: 'Ви не перебуваєте в організації',
            en: 'You are not in an organization',
            de: 'Du bist in keiner Organisation',
            pl: 'Nie należysz do organizacji',
        },
        noPermissionTransfer: {
            ru: 'Недостаточно прав для передачи транспорта в семью',
            ua: 'Недостатньо прав для передачі транспорту у сім\'ю',
            en: 'You lack permission to transfer vehicles to the organization',
            de: 'Du hast keine Berechtigung, Fahrzeuge an die Organisation zu übertragen',
            pl: 'Brak uprawnień do przekazywania pojazdów organizacji',
        },
        cantTransferRent: {
            ru: 'Арендованную машину нельзя передать в семью',
            ua: 'Орендовану машину неможливо передати у сім\'ю',
            en: 'Rented vehicles cannot be transferred to the organization',
            de: 'Gemietete Fahrzeuge können nicht an die Organisation übertragen werden',
            pl: 'Wynajętych pojazdów nie można przekazać organizacji',
        },
        transferFailed: {
            ru: 'Не удалось передать транспорт в семью',
            ua: 'Не вдалося передати транспорт у сім\'ю',
            en: 'Failed to transfer the vehicle',
            de: 'Übertragung des Fahrzeugs fehlgeschlagen',
            pl: 'Nie udało się przekazać pojazdu',
        },
    },
};
