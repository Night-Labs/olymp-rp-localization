import { cef } from './cef';

export const quarry = {
    ...cef,

    gotJob: {

    },
    
    leaveJob: {
        ru: 'Вы успешно уволились с работы',
        ua: 'Ви успішно звільнилися з роботи',
        en: 'You have successfully left the job',
        de: 'Sie haben erfolgreich den Job verlassen',
        pl: 'Pomyślnie zrezygnowałeś z pracy',
        zh: '你已成功离职',
    },
    yourVehicleDestroyed: {
        ru: 'Ваш рабочий транспорт уничтожен, вы уволены',
        ua: 'Ваш робочий транспорт знищено, вас звільнено',
        en: 'Your work vehicle has been destroyed, you have been fired',
        de: 'Ihr Arbeitsfahrzeug wurde zerstört, Sie wurden entlassen',
        pl: 'Twój pojazd służbowy został zniszczony, zostałeś zwolniony',
        zh: '你的工作车辆已被摧毁，你已被解雇',
    },
    youCantEnterVehicle: {
        ru: 'Это не ваш рабочий транспорт',
        ua: 'Це не ваш робочий транспорт',
        en: 'This is not your work vehicle',
        de: 'Dies ist nicht Ihr Arbeitsfahrzeug',
        pl: 'To nie jest twój pojazd służbowy',
        zh: '这不是你的工作车辆',
    },
    youHaveReturnedToVehicle: {
        ru: 'Вы вернулись в рабочий транспорт',
        ua: 'Ви повернулися у робочий транспорт',
        en: 'You have returned to the work vehicle',
        de: 'Sie sind zum Arbeitsfahrzeug zurückgekehrt',
        pl: 'Wróciłeś do pojazdu służbowego',
        zh: '你已返回工作车辆',
    },
    youHaveMinuteToReturnToVehicle: {
        ru: 'У вас есть 1 минута чтобы вернуться в рабочий транспорт, иначе вы будете уволены',
        ua: 'У вас є 1 хвилина, щоб повернутися у робочий транспорт, інакше вас звільнять',
        en: 'You have 1 minute to return to the work vehicle, otherwise you will be fired',
        de: 'Sie haben 1 Minute, um zum Arbeitsfahrzeug zurückzukehren, andernfalls werden Sie entlassen',
        pl: 'Masz 1 minutę na powrót do pojazdu służbowego, w przeciwnym razie zostaniesz zwolniony',
        zh: '你有1分钟时间返回工作车辆，否则你将被解雇',
    },
    notifyOverworked: {
        ru: 'Извините, но на данный момент на этой работе работает слишком много людей ({{count}}), пожалуйста подождите пока кто-то из них закончит работу.',
        ua: 'Вибачте, але на даний момент на цій роботі працює занадто багато людей ({{count}}), будь ласка, зачекайте, поки хтось із них закінчить роботу.',
        en: 'Sorry, but at the moment there are too many people working on this job ({{count}}), please wait until someone finishes their work.',
        de: 'Entschuldigung, aber im Moment arbeiten zu viele Personen an dieser Arbeit ({{count}}), bitte warten Sie, bis jemand seine Arbeit beendet hat.',
        pl: 'Przepraszamy, ale w tej chwili zbyt wiele osób pracuje przy tej pracy ({{count}}), proszę poczekać, aż ktoś ją zakończy.',
        zh: '抱歉，目前这个工作岗位上的人数过多({{count}})，请等待直到有人完成他们的工作。',
    },
    youBeenFired: {
        ru: 'Вы уволены, так как покинули свой рабочий транспорт на продолжительное время',
        ua: 'Ви звільнені, оскільки покинули свій робочий транспорт на тривалий час',
        en: 'You have been fired for leaving your work vehicle unattended for an extended period',
        de: 'Sie wurden entlassen, weil Sie Ihr Arbeitsfahrzeug längere Zeit unbeaufsichtigt gelassen haben',
        pl: 'Zostałeś zwolniony za zostawienie pojazdu służbowego bez opieki przez dłuższy czas',
        zh: '你因长时间离开工作车辆而被解雇',
    },
    yourJobVehicle: {
        ru: 'Ваша рабочая машина',
        ua: 'Ваша робоча машина',
        en: 'Your job vehicle',
        de: 'Ihr Arbeitsfahrzeug',
        pl: 'Twój pojazd służbowy',
        zh: '你的工作车辆',
    },
};
