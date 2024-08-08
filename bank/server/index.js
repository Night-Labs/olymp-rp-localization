import { operations } from './operations';
import { atm } from './atm';

export const server = {
    accountNotFinded: {
        ru: 'Такого счёта не существует',
        en: 'This account does not exist',
        de: 'Dieses Konto existiert nicht',
        fr: "Ce compte n'existe pas",
        ua: 'Такого рахунку не існує',
    },
    youNotEnoughtMoney: {
        ru: 'У вас недостаточно денег',
        en: "You don't have enough money",
        de: 'Du hast nicht genug Geld',
        fr: "Vous n'avez pas assez d'argent",
        ua: 'У вас недостатньо грошей',
    },
    maxDepositExceeded: {
        ru: 'Превышен максимальный размер депозита',
        en: 'Maximum deposit amount exceeded',
        de: 'Maximale Einlagengrenze überschritten',
        fr: 'Montant maximum de dépôt dépassé',
        ua: 'Перевищено максимальний розмір депозиту',
    },
    error: {
        ru: 'Произошла ошибка, попробуйте ещё раз',
        ua: 'Виникла помилка, спробуйте ще раз',
        en: 'An error occurred, please try again',
        de: 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut',
        pl: 'Wystąpił błąd, spróbuj ponownie',
    },
    operations,
    atm,
};
