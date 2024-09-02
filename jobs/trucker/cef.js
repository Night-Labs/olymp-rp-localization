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
        de: 'Sie müssen den Fracht-LKW beladen und entladen sowie die Güter transportieren. Sie können mit Freunden zusammenarbeiten.',
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
