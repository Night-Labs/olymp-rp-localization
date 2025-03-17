import { cef } from './cef';

export const quarry = {
    ...cef,

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

    miner: {
        name: {
            ru: 'Горняк',
            ua: 'Гірник',
            en: 'Miner',
            de: 'Bergmann',
            pl: 'Górnik',
        },
        startJob: {
            ru: 'Вы успешно устроились на работу горняком, отправляйтесь к месту добычи руды, обозначенным на карте.',
            ua: 'Ви успішно влаштувалися на роботу гірником, вирушайте до місця видобутку руди, позначеного на карті.',
            en: 'You have successfully got a job as a miner, go to the ore mining location marked on the map.',
            de: 'Sie haben erfolgreich eine Anstellung als Bergmann erhalten. Begeben Sie sich zum auf der Karte markierten Erzabbaugebiet.',
            pl: 'Pomyślnie podjąłeś pracę jako górnik, udaj się do miejsca wydobycia rudy zaznaczonego na mapie.',
        },
        alreadyMining: {
            ru: 'Вы уже копаете руду.',
            ua: 'Ви вже копаєте руду.',
            en: 'You are already mining ore.',
            de: 'Sie bauen bereits Erz ab.',
            pl: 'Już kopiesz rudę.',
        },
        notWorking: {
            ru: 'Вы не работаете горняком.',
            ua: 'Ви не працюєте гірником.',
            en: 'You are not working as a miner.',
            de: 'Sie arbeiten nicht als Bergmann.',
            pl: 'Nie pracujesz jako górnik.',
        },
        noPickaxe: {
            ru: 'У вас нет кирки, её можно купить в магазине 24/7.',
            ua: 'У вас немає кирки, її можна купити в магазині 24/7.',
            en: "You don't have a pickaxe, you can buy it at the 24/7 store.",
            de: 'Sie haben keine Spitzhacke, Sie können sie im 24/7-Shop kaufen.',
            pl: 'Nie masz kilofa, możesz go kupić w sklepie 24/7.',
        },
        gotOres: {
            ru: 'Вы добыли {{count}} шт. руды',
            ua: 'Ви видобули {{count}} шт. руди',
            en: 'You mined {{count}} ore',
            de: 'Du hast {{count}} Erz abgebaut',
            pl: 'Wydobyłeś {{count}} szt. rudy',
        },
        point: {
            ru: 'Точка добычи руды',
            ua: 'Точка видобутку руди',
            en: 'Ore mining point',
            de: 'Erzabbaupunkt',
            pl: 'Punkt wydobycia rudy',
        },
        interaction: {
            ru: 'Начать добычу руды',
            ua: 'Почати видобуток руди',
            en: 'Start mining ore',
            de: 'Mit dem Erzabbau beginnen',
            pl: 'Rozpocznij wydobycie rudy',
        },
    },

    dumper: {
        name: {
            ru: 'Водитель самосвала',
            ua: 'Водій самоскида',
            en: 'Dump truck driver',
            de: 'Muldenkipperfahrer',
            pl: 'Kierowca wywrotki',
        },

        startJob: {
            ru: 'Вы успешно устроились на работу водителем самосвала, отправляйтесь к точке загрузки.',
            ua: 'Ви успішно влаштувалися на роботу водієм самоскида, вирушайте до точки завантаження.',
            en: 'You have successfully started working as a dump truck driver, head to the loading point.',
            de: 'Sie haben erfolgreich eine Stelle als Muldenkipperfahrer angetreten, begeben Sie sich zum Ladepunkt.',
            pl: 'Pomyślnie rozpocząłeś pracę jako kierowca wywrotki, udaj się do punktu załadunku.',
        },

        finishLoading: {
            ru: 'Загрузка завершена, отправляйтесь к точке разгрузки.',
            ua: 'Завантаження завершено, вирушайте до точки розвантаження.',
            en: 'Loading is complete, head to the unloading point.',
            de: 'Das Laden ist abgeschlossen, begeben Sie sich zum Entladepunkt.',
            pl: 'Załadunek zakończony, udaj się do punktu rozładunku.',
        },

        finishUnloading: {
            ru: 'Разгрузка завершена, вы заработали {{salary}}, отправляйтесь к новой точке загрузки.',
            ua: 'Розвантаження завершено, ви заробили {{salary}}, вирушайте до нової точки завантаження.',
            en: 'Unloading complete, you earned {{salary}}, head to the new loading point.',
            de: 'Entladen abgeschlossen, Sie haben {{salary}} verdient, begeben Sie sich zur neuen Ladestelle.',
            pl: 'Rozładunek zakończony, zarobiłeś {{salary}}, udaj się do nowego punktu załadunku.',
        },

        interaction: {
            load: {
                ru: 'Начать загрузку',
                ua: 'Почати завантаження',
                en: 'Start loading',
                de: 'Laden starten',
                pl: 'Rozpocznij ładowanie',
            },

            unload: {
                ru: 'Начать разгрузку',
                ua: 'Почати розвантаження',
                en: 'Start unloading',
                de: 'Entladen starten',
                pl: 'Rozpocznij rozładunek',
            },
        },

        loadingPoint: {
            ru: 'Точка загрузки',
            ua: 'Точка завантаження',
            en: 'Loading point',
            de: 'Ladepunkt',
            pl: 'Punkt załadunku',
        },

        unloadingPoint: {
            ru: 'Точка разгрузки',
            ua: 'Точка розвантаження',
            en: 'Unloading point',
            de: 'Entladepunkt',
            pl: 'Punkt rozładunku',
        },

        loading: {
            ru: 'Идёт загрузка',
            ua: 'Йде завантаження',
            en: 'Loading',
            de: 'Wird geladen',
            pl: 'Ładowanie',
        },

        unloading: {
            ru: 'Идёт разгрузка',
            ua: 'Йде розвантаження',
            en: 'Unloading',
            de: 'Wird entladen',
            pl: 'Rozładunek',
        },
    },
    bulldozer: {
        name: {
            ru: 'Водитель бульдозера',
            ua: 'Водій бульдозера',
            en: 'Bulldozer driver',
            de: 'Bulldozerfahrer',
            pl: 'Operator spycharki',
        },

        startJob: {
            ru: 'Вы успешно устроились на работу водителем бульдозера, отправляйтесь к точке загрузки.',
            ua: 'Ви успішно влаштувалися на роботу водієм бульдозера, вирушайте до точки завантаження.',
            en: 'You have successfully been employed as a bulldozer driver, head to the loading point.',
            de: 'Sie wurden erfolgreich als Bulldozerfahrer eingestellt, begeben Sie sich zum Verladepunkt.',
            pl: 'Zostałeś pomyślnie zatrudniony jako kierowca spychacza, udaj się do punktu załadunku.',
        },

        loadingPoint: {
            ru: 'Точка загрузки',
            ua: 'Точка завантаження',
            en: 'Loading point',
            de: 'Ladepunkt',
            pl: 'Punkt załadunku',
        },

        unloadingPoint: {
            ru: 'Точка разгрузки',
            ua: 'Точка розвантаження',
            en: 'Unloading point',
            de: 'Entladepunkt',
            pl: 'Punkt rozładunku',
        },

        interaction: {
            load: {
                ru: 'Начать загрузку',
                ua: 'Почати завантаження',
                en: 'Start loading',
                de: 'Laden starten',
                pl: 'Rozpocznij ładowanie',
            },

            unload: {
                ru: 'Начать разгрузку',
                ua: 'Почати розвантаження',
                en: 'Start unloading',
                de: 'Entladen starten',
                pl: 'Rozpocznij rozładunek',
            },
        },

        finishLoading: {
            ru: 'Загрузка завершена, отправляйтесь к точке разгрузки.',
            ua: 'Завантаження завершено, вирушайте до точки розвантаження.',
            en: 'Loading is complete, head to the unloading point.',
            de: 'Das Laden ist abgeschlossen, begeben Sie sich zum Entladepunkt.',
            pl: 'Załadunek zakończony, udaj się do punktu rozładunku.',
        },

        finishUnloading: {
            ru: 'Разгрузка завершена, вы заработали {{salary}}, отправляйтесь к новой точке загрузки.',
            ua: 'Розвантаження завершено, ви заробили {{salary}}, вирушайте до нової точки завантаження.',
            en: 'Unloading complete, you earned {{salary}}, head to the new loading point.',
            de: 'Entladen abgeschlossen, Sie haben {{salary}} verdient, begeben Sie sich zur neuen Ladestelle.',
            pl: 'Rozładunek zakończony, zarobiłeś {{salary}}, udaj się do nowego punktu załadunku.',
        },
    },
};
