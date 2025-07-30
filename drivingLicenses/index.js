import { drivingLicensesCategories } from './categories';

export default {
    categories: drivingLicensesCategories,

    title: {
        ru: 'Водительское удостоверение',
        ua: 'Водійське посвідчення',
        en: "Driver's license",
        de: 'Führerschein',
        pl: 'Prawo jazdy',
    },
    type: {
        ru: 'Тип',
        ua: 'Тип',
        en: 'Type',
        de: 'Typ',
        pl: 'Typ',
    },
    dateReceived: {
        ru: 'Дата получения',
        ua: 'Дата отримання',
        en: 'Date received',
        de: 'Empfangsdatum',
        pl: 'Data otrzymania',
    },
    dateExpiration: {
        ru: 'Дата истечения',
        ua: 'Дата закінчення',
        en: 'Expiration date',
        de: 'Ablaufdatum',
        pl: 'Data wygaśnięcia',
    },

    requiredLicense: {
        ru: 'Необходимое водительское удостоверение',
        ua: 'Необхідне посвідчення водія',
        en: "Required driver's license",
        de: 'Erforderlicher Führerschein',
        pl: 'Wymagane prawo jazdy',
    },
    licenseExpired: {
        ru: 'Ваше водительское удостоверение категории {{category}} истекло, пожалуйста обновите его в автошколе.',
        ua: 'Ваше водійське посвідчення категорії {{category}} закінчилося, будь ласка, оновіть його в автошколі.',
        en: "Your driver's license of category {{category}} has expired, please renew it at the driving school.",
        de: 'Ihr Führerschein der Kategorie {{category}} ist abgelaufen, bitte erneuern Sie ihn in der Fahrschule.',
        pl: 'Twoje prawo jazdy kategorii {{category}} wygasło, proszę odnowić je w szkole nauki jazdy.',
    },
    noLicense: {
        ru: 'У вас нет водительского удостоверения категории {{category}}, получить его можно в автошколе.',
        ua: 'У вас немає водійського посвідчення категорії {{category}}, отримати його можна в автошколі.',
        en: "You do not have a driver's license of category {{category}}, you can obtain it at the driving school.",
        de: 'Sie haben keinen Führerschein der Kategorie {{category}}, Sie können ihn in der Fahrschule erwerben.',
        pl: 'Nie masz prawa jazdy kategorii {{category}}, możesz je uzyskać w szkole nauki jazdy.',
    },
};
