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
    },
    youHaveNewLevel: {
        ru: 'Вы достигли нового уровня {{level}}!',
        en: 'You have reached a new level {{level}}!',
        de: 'Du hast Stufe {{level}} erreicht!',
        fr: 'Vous avez atteint le niveau {{level}} !',
        ua: 'Ви досягли нового рівня {{level}}!',
    },
    youHaveNoLicenseWeapon: {
        ru: 'У вас нет лицензии на оружие или она истекла',
        ua: 'У вас немає ліцензії на зброю або вона прострочена',
        en: 'You do not have a weapon license or it has expired',
        de: 'Sie haben keinen Waffenschein oder er ist abgelaufen',
        pl: 'Nie masz licencji na broń lub wygasła',
    },
    passport,
    payday,
    aidkit,
    cooldowns,
};
