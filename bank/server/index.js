import { operations } from './operations';
import { atm } from './atm';

export const server = {
    accountNotFinded: {
        ru: 'Такого счёта не существует',
        en: 'This account does not exist',
        de: 'Dieses Konto existiert nicht',
        fr: "Ce compte n'existe pas",
        ua: 'Такого рахунку не існує',
        zh:'此帐户不存在',
    },
    youNotEnoughtMoney: {
        ru: 'У вас недостаточно денег',
        en: "You don't have enough money",
        de: 'Du hast nicht genug Geld',
        fr: "Vous n'avez pas assez d'argent",
        ua: 'У вас недостатньо грошей',
        zh:'你没有足够的钱',
    },
    maxDepositExceeded: {
        ru: 'Превышен максимальный размер депозита',
        en: 'Maximum deposit amount exceeded',
        de: 'Maximale Einlagengrenze überschritten',
        fr: 'Montant maximum de dépôt dépassé',
        ua: 'Перевищено максимальний розмір депозиту',
        zh:'超过最高存款额',
    },
    invalidAmount: {
        ru: 'Введите корректную сумму',
        en: 'Enter a valid amount',
        de: 'Gib einen korrekten Betrag ein',
        fr: 'Entrez un montant valide',
        ua: 'Введіть коректну суму',
        zh: '请输入正确金额',
    },
    notEnoughWithCommission: {
        ru: 'Недостаточно средств с учетом комиссии',
        en: 'Insufficient funds including commission',
        de: 'Nicht genug Guthaben inklusive Gebühr',
        fr: "Fonds insuffisants, commission incluse",
        ua: 'Недостатньо коштів з урахуванням комісії',
        zh: '余额不足（含手续费）',
    },
    targetBalanceLimitExceeded: {
        ru: 'Превышен лимит целевого баланса',
        en: 'Target balance limit exceeded',
        de: 'Ziellimit überschritten',
        fr: 'Limite du solde cible dépassée',
        ua: 'Перевищено ліміт цільового балансу',
        zh: '超出目标余额上限',
    },
    error: {
        ru: 'Произошла ошибка, попробуйте ещё раз',
        ua: 'Виникла помилка, спробуйте ще раз',
        en: 'An error occurred, please try again',
        de: 'Ein Fehler ist aufgetreten, bitte versuche es erneut',
        pl: 'Wystąpił błąd, spróbuj ponownie',
        zh:'发生错误，请再试一次',
    },
    operations,
    atm,
};
