import passport from './passport';
import payday from './payday';
import aidkit from './aidkit';
import cooldowns from './cooldowns';
import vitals from './vitals';
import disease from './disease';
import statuses from './statuses';
import bodyCamera from './bodyCamera';

export default {
    congratulations: {
        ru: 'Поздравляем',
        en: 'Congratulations',
        de: 'Herzlichen Glückwunsch',
        fr: 'Félicitations',
        ua: 'Вітаємо',
        zh: '恭喜',
    },
    youHaveNewLevel: {
        ru: 'Вы достигли нового уровня {{level}}!',
        en: 'You have reached a new level {{level}}!',
        de: 'Du hast Stufe {{level}} erreicht!',
        fr: 'Vous avez atteint le niveau {{level}} !',
        ua: 'Ви досягли нового рівня {{level}}!',
        zh: '您已达到新的等级{{level}}!',
    },
    youHaveNoLicenseWeapon: {
        ru: 'У вас нет лицензии на оружие или она истекла',
        ua: 'У вас немає ліцензії на зброю або вона прострочена',
        en: 'You do not have a weapon license or it has expired',
        de: 'Sie haben keinen Waffenschein oder er ist abgelaufen',
        pl: 'Nie masz licencji na broń lub wygasła',
        zh: '你的持枪证已吊销或已过期',
    },
    activeJobAlready: {
        ru: 'Вы уже работаете где то, сначала увольтесь там',
        ua: 'Ви вже десь працюєте, спершу звільніться там',
        en: 'You are already working somewhere, quit there first',
        de: 'Du arbeitest bereits irgendwo, kündige dort zuerst',
        pl: 'Już gdzieś pracujesz, najpierw się tam zwolnij',
    },
    activeJobInFactionAlready: {
        ru: 'Вы сейчас на смене в фракции',
        ua: 'Ви зараз на зміні у фракції',
        en: 'You are currently on duty in a faction',
        de: 'Du bist gerade im Fraktionsdienst',
        pl: 'Jesteś obecnie na zmianie w frakcji',
    },
    toSeatPress: {
        ru: 'Чтобы сесть нажмите',
        ua: 'Щоб сісти, натисніть',
        en: 'To sit down, press',
        de: 'Zum Hinsetzen drücken Sie',
        pl: 'Aby usiąść, naciśnij',
    },
    //
    couldntActivateCoal: {
        ru: 'Вы не смогли активировать уголь...',
        ua: 'Ви не змогли активувати вугілля...',
        en: "You couldn't activate the coal...",
        de: 'Du konntest die Kohle nicht aktivieren...',
        pl: 'Nie udało się aktywować węgla...',
    },
    activatedCoal: {
        ru: 'Вы выполнили все условия, и активировали уголь, ваша награда:',
        ua: 'Ви виконали всі умови та активували вугілля, ваша нагорода:',
        en: 'You met all the conditions and activated the coal, your reward:',
        de: 'Du hast alle Bedingungen erfüllt und die Kohle aktiviert, deine Belohnung:',
        pl: 'Spełniłeś wszystkie warunki i aktywowałeś węgiel, twoja nagroda:',
    },
    autoHandUp: {
        ru: 'принуждает вас поднять руки',
        ua: 'змушує вас підняти руки',
        en: 'forces you to raise your hands',
        de: 'zwingt dich, die Hände zu heben',
        pl: 'zmusza cię do podniesienia rąk',
    },
    //
    passport,
    payday,
    aidkit,
    cooldowns,
    vitals,
    disease,
    statuses,
    bodyCamera,
};
