import passport from './passport';
import payday from './payday';
import aidkit from './aidkit';
import cooldowns from './cooldowns';

export default {
    congratulations: {
        ru: 'Поздравляем',
        en: 'Congratulations',
        de: 'Herzlichen Glückwunsch',
        fr: 'Félicitations',
        ua: 'Вітаємо',
        zh:'恭喜',
    },
    youHaveNewLevel: {
        ru: 'Вы достигли нового уровня {{level}}!',
        en: 'You have reached a new level {{level}}!',
        de: 'Du hast Stufe {{level}} erreicht!',
        fr: 'Vous avez atteint le niveau {{level}} !',
        ua: 'Ви досягли нового рівня {{level}}!',
        zh:'您已达到新的等级{{level}}!',
    },
    youHaveNoLicenseWeapon: {
        ru: 'У вас нет лицензии на оружие или она истекла',
        ua: 'У вас немає ліцензії на зброю або вона прострочена',
        en: 'You do not have a weapon license or it has expired',
        de: 'Sie haben keinen Waffenschein oder er ist abgelaufen',
        pl: 'Nie masz licencji na broń lub wygasła',
        zh:'你的持枪证已吊销或已过期',
    },
    passport,
    payday,
    aidkit,
    cooldowns,
};
