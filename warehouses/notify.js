export const notify = {
    header: {
        ru: 'Склад',
        ua: 'Склад',
        en: 'Warehouse',
        de: 'Lager',
        pl: 'Magazyn',
    },
};

export const errors = {
    notPurchased: {
        ru: 'Этот склад не куплен.',
        ua: 'Цей склад не куплено.',
        en: 'This warehouse is not purchased.',
        de: 'Dieses Lager ist nicht gekauft.',
        pl: 'Ten magazyn nie jest kupiony.',
    },
    notYourOrg: {
        ru: 'Этот склад принадлежит другой организации.',
        ua: 'Цей склад належить іншій організації.',
        en: 'This warehouse belongs to another organization.',
        de: 'Dieses Lager gehört einer anderen Organisation.',
        pl: 'Ten magazyn należy do innej organizacji.',
    },
    noAccess: {
        ru: 'У вас нет прав на доступ к складу.',
        ua: 'У вас немає прав доступу до складу.',
        en: 'You do not have access to the warehouse.',
        de: 'Sie haben keinen Zugriff auf das Lager.',
        pl: 'Nie masz dostępu do magazynu.',
    },
    depositOnly: {
        ru: 'У вас право только на пополнение склада, забирать предметы запрещено.',
        ua: 'У вас право лише на поповнення складу, забирати предмети заборонено.',
        en: 'Your permission allows depositing only - taking items is forbidden.',
        de: 'Ihre Berechtigung erlaubt nur das Einlagern - das Entnehmen ist verboten.',
        pl: 'Masz prawo tylko do deponowania - zabieranie przedmiotów jest zabronione.',
    },
    loadingNotInVehicle: {
        ru: 'Сядьте в транспорт с грузом, чтобы воспользоваться зоной погрузки.',
        ua: 'Сядьте у транспорт з вантажем, щоб скористатися зоною завантаження.',
        en: 'Get into a cargo vehicle to use the loading zone.',
        de: 'Steigen Sie in ein Frachtfahrzeug, um die Ladezone zu nutzen.',
        pl: 'Wsiądź do pojazdu z ładunkiem, aby skorzystać ze strefy załadunku.',
    },
    loadingNotDriver: {
        ru: 'Только водитель может пользоваться зоной погрузки.',
        ua: 'Тільки водій може користуватися зоною завантаження.',
        en: 'Only the driver can use the loading zone.',
        de: 'Nur der Fahrer kann die Ladezone benutzen.',
        pl: 'Tylko kierowca może korzystać ze strefy załadunku.',
    },
    loadingNoTrunk: {
        ru: 'У этого транспорта нет багажника для груза.',
        ua: 'У цього транспорту немає багажника для вантажу.',
        en: 'This vehicle has no cargo hold.',
        de: 'Dieses Fahrzeug hat keinen Laderaum.',
        pl: 'Ten pojazd nie ma przestrzeni ładunkowej.',
    },
};

export const taxCycle = {
    confiscation: {
        leaderRefund: {
            ru: 'Склад {{orgName}} конфискован. Вам возвращено ${{amount}}.',
            ua: 'Склад {{orgName}} конфісковано. Вам повернуто ${{amount}}.',
            en: 'Warehouse of {{orgName}} confiscated. You received ${{amount}}.',
            de: 'Lager von {{orgName}} beschlagnahmt. Sie erhielten ${{amount}}.',
            pl: 'Magazyn {{orgName}} skonfiskowany. Otrzymałeś ${{amount}}.',
        },
        sms: {
            ru: 'Склад {{orgName}} конфискован за неуплату. Возврат: {{percent}}% стоимости.',
            ua: 'Склад {{orgName}} конфісковано за несплату. Повернення: {{percent}}% вартості.',
            en: 'Warehouse {{orgName}} confiscated for non-payment. Refund: {{percent}}% of value.',
            de: 'Lager {{orgName}} wegen Nichtzahlung beschlagnahmt. Erstattung: {{percent}}% des Wertes.',
            pl: 'Magazyn {{orgName}} skonfiskowany za niepłacenie. Zwrot: {{percent}}% wartości.',
        },
        notifyMembers: {
            ru: 'Склад {{orgName}} конфискован за неуплату налога.',
            ua: 'Склад {{orgName}} конфісковано за несплату податку.',
            en: 'Warehouse of {{orgName}} confiscated for unpaid tax.',
            de: 'Lager von {{orgName}} wegen unbezahlter Steuern beschlagnahmt.',
            pl: 'Magazyn {{orgName}} skonfiskowany z powodu niezapłaconego podatku.',
        },
    },
    debt: {
        started: {
            ru: 'Не хватило средств на налог за склад {{orgName}} (${{rent}}). У вас 72 часа на погашение долга.',
            ua: 'Не вистачило коштів на податок за склад {{orgName}} (${{rent}}). У вас 72 години на погашення боргу.',
            en: 'Not enough funds for warehouse tax {{orgName}} (${{rent}}). You have 72 hours to repay the debt.',
            de: 'Nicht genügend Mittel für die Lagersteuer {{orgName}} (${{rent}}). Sie haben 72 Stunden zur Tilgung.',
            pl: 'Brak środków na podatek od magazynu {{orgName}} (${{rent}}). Masz 72 godziny na spłatę długu.',
        },
        reminder: {
            ru: 'Склад {{orgName}}: долг по налогу. До конфискации осталось {{hoursLeft}}ч (налог ${{rent}}).',
            ua: 'Склад {{orgName}}: борг по податку. До конфіскації залишилось {{hoursLeft}}год (податок ${{rent}}).',
            en: 'Warehouse {{orgName}}: tax debt. {{hoursLeft}}h until confiscation (tax ${{rent}}).',
            de: 'Lager {{orgName}}: Steuerschuld. {{hoursLeft}}h bis zur Beschlagnahmung (Steuer ${{rent}}).',
            pl: 'Magazyn {{orgName}}: dług podatkowy. Do konfiskaty zostało {{hoursLeft}}h (podatek ${{rent}}).',
        },
        cleared: {
            ru: 'Долг по налогу склада {{orgName}} погашен.',
            ua: 'Борг по податку складу {{orgName}} погашений.',
            en: 'Warehouse tax debt cleared for {{orgName}}.',
            de: 'Steuerschuld des Lagers {{orgName}} beglichen.',
            pl: 'Dług podatkowy magazynu {{orgName}} spłacony.',
        },
    },
};
