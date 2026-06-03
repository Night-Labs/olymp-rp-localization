export const cef = {
    name: {
        ru: 'Грузоперевозчик',
        ua: 'Вантажоперевізник',
        en: 'Trucker',
        de: 'Frachtführer',
        pl: 'Przewoźnik towarowy',
        zh: '卡车司机',
    },
    desc: {
        ru: 'Вам нужно будет загружать и разгружать грузовую машину, а также перевозить груз. Вы можете работать вместе с друзьями.',
        ua: 'Вам доведеться завантажувати і розгружати вантажівку, а також перевозити вантаж. Ви можете працювати разом з друзями.',
        en: 'You will need to load and unload the cargo truck, as well as transport the goods. You can work together with friends.',
        de: 'Du musst den Fracht-LKW beladen und entladen sowie die Güter transportieren. Deine Freunde können mit dir zusammenarbeiten.',
        pl: 'Będziesz musiał załadować i rozładować ciężarówkę oraz transportować ładunki. Możesz współpracować z przyjaciółmi.',
        zh: '你需要装载和卸载货车，以及运输货物。你可以和朋友一起工作。',
    },
    yourCurrentProgress: {
        ru: 'Ваш текущий прогресс',
        ua: 'Ваш поточний прогрес',
        en: 'Your current progress',
        de: 'Dein aktueller Fortschritt',
        pl: 'Twój aktualny postęp',
        zh: '你目前的进度',
    },
    level: {
        ru: 'Уровень',
        ua: 'Рівень',
        en: 'Level',
        de: 'Level',
        pl: 'Poziom',
        zh: '等级',
    },
    buttons: {
        deploy: {
            ru: 'Устроиться',
            ua: 'Працювати',
            en: 'Deploy',
            de: 'Anstellen',
            pl: 'Zatrudnić się',
            zh: '就业',
        },
        unavailable: {
            ru: 'Недоступно',
            ua: 'Недоступно',
            en: 'Unavailable',
            de: 'Nicht verfügbar',
            pl: 'Niedostępne',
            zh: '不可用',
        },
        leave: {
            ru: 'Уволиться',
            ua: 'Звільнитись',
            en: 'Leave',
            de: 'Verlassen',
            pl: 'Zwolnić się',
            zh: '离职',
        },
    },

    levelDesc: {
        ru: `
        Ящиков загрузить / разгрузить: <span style="color:var(--white)">{{capacity}}</span> <br>
        Дистанции: <span style="color:var(--white)">{{distText}}</span> <br>
        ЗП за 1000 метров: <span style="color:var(--white)">$ {{salary}}</span> <br> 
        ЗП грузчиков  за коробку: <span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,

        ua: `
        Ящиків завантажити / розвантажити: <span style="color:var(--white)">{{capacity}}</span> <br>
        Дистанції: <span style="color:var(--white)">{{distText}}</span> <br>
        ЗП за 1000 метрів: <span style="color:var(--white)">$ {{salary}}</span> <br> 
        ЗП вантажників за коробку: <span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,

        en: `
        Boxes to load / unload: <span style="color:var(--white)">{{capacity}}</span> <br>
        Distances: <span style="color:var(--white)">{{distText}}</span> <br>
        Salary per 1000 meters: <span style="color:var(--white)">$ {{salary}}</span> <br> 
        Loaders' pay per box: <span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,

        de: `
        Kisten zu laden / entladen: <span style="color:var(--white)">{{capacity}}</span> <br>
        Entfernungen: <span style="color:var(--white)">{{distText}}</span> <br>
        Gehalt pro 1000 Meter: <span style="color:var(--white)">$ {{salary}}</span> <br> 
        Laderlohn pro Kiste: <span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,

        pl: `
        Skrzynki do załadunku / rozładunku: <span style="color:var(--white)">{{capacity}}</span> <br>
        Dystanse: <span style="color:var(--white)">{{distText}}</span> <br>
        Wynagrodzenie za 1000 metrów: <span style="color:var(--white)">$ {{salary}}</span> <br> 
        Wynagrodzenie załadunkowców za skrzynkę: <span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,

        zh: `
        装载/卸载箱数：<span style="color:var(--white)">{{capacity}}</span> <br>
        距离：<span style="color:var(--white)">{{distText}}</span> <br>
        每1000米薪水：<span style="color:var(--white)">$ {{salary}}</span> <br> 
        装卸工每箱薪水：<span style="color:var(--white)">$ {{payForLoaders}}</span> <br>`,
    },

    autoTitle: {
        ru: 'Автоматическая загрузка и разгрузка',
        ua: 'Автоматичне завантаження та розвантаження',
        en: 'Automatic loading and unloading',
        de: 'Automatisches Be- und Entladen',
        pl: 'Automatyczny załadunek i rozładunek',
        zh: '自动装卸',
    },

    autoDesc: {
        ru: 'При активной опции вам нужно будет лишь подъехать на маркер и ждать разгрузку и загрузку, в то время как при выключенной вам придётся загружать и разгружать грузовик самостоятельно либо с вашими друзьями в пати, за что каждый из грузчиков будет получать дополнительную прибыль',
        ua: "При активній опції вам потрібно буде лише під'їхати на маркер і чекати розвантаження та завантаження, тоді як при вимкненій вам доведеться завантажувати і розвантажувати вантажівку самостійно або з вашими друзями в паті, за що кожен із вантажників отримуватиме додатковий прибуток",
        en: 'When the option is on, you only need to drive up to the marker and wait for unloading and loading, while when it is off you will have to load and unload the truck yourself or with your friends in a party, for which each loader will earn extra profit',
        de: 'Wenn die Option aktiv ist, musst du nur zum Marker fahren und auf das Be- und Entladen warten; ist sie deaktiviert, musst du den LKW selbst oder mit deinen Freunden in einer Party be- und entladen, wofür jeder Lader zusätzlichen Gewinn erhält',
        pl: 'Gdy opcja jest włączona, wystarczy podjechać do znacznika i poczekać na rozładunek i załadunek, natomiast gdy jest wyłączona, będziesz musiał załadować i rozładować ciężarówkę samodzielnie lub z przyjaciółmi w party, za co każdy z załadunkowców otrzyma dodatkowy zysk',
        zh: '启用该选项后，你只需驶到标记处等待卸载和装载；关闭后，你需要自己或与队伍中的朋友一起装卸卡车，每位装卸工都会因此获得额外收入',
    },

    levels: {
        courier: {
            name: {
                ru: 'Курьер',
                ua: "Кур'єр",
                en: 'Courier',
                de: 'Kurier',
                pl: 'Kurier',
                zh: '快递员',
            },

            distText: {
                ru: 'Близкие',
                ua: 'Близькі',
                en: 'Close',
                de: 'Nah',
                pl: 'Bliskie',
                zh: '近距离',
            },
        },

        carrier: {
            name: {
                ru: 'Перевозчик',
                ua: 'Перевізник',
                en: 'Carrier',
                de: 'Frachtführer',
                pl: 'Przewoźnik',
                zh: '承运人',
            },

            distText: {
                ru: 'Средние',
                ua: 'Середні',
                en: 'Medium',
                de: 'Mittel',
                pl: 'Średnie',
                zh: '中距离',
            },
        },

        trucker: {
            name: {
                ru: 'Дальнобойщик',
                ua: 'Далекобійник',
                en: 'Trucker',
                de: 'Fernfahrer',
                pl: 'Kierowca ciężarowy',
                zh: '长途卡车司机',
            },

            distText: {
                ru: 'Дальние',
                ua: 'Далекі',
                en: 'Far',
                de: 'Weit',
                pl: 'Dalekie',
                zh: '远距离',
            },
        },
    },
};
