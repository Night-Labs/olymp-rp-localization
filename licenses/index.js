import cef from './cef';

export default {
    modal: {
        title: {
            ru: 'Получение лицензии на оружие',
            ua: 'Отримання ліцензії на зброю',
            en: 'Obtaining a weapon license',
            de: 'Erwerb einer Waffenlizenz',
            pl: 'Uzyskanie licencji na broń',
            zh: '取得持枪证',
        },
        message: {
            ru: `
                Чтобы получить лицензию на оружие вам необходимо иметь следующее: <br />
                    <span style="color: var(--primary)">- $ {{money}}</span><br />
                    <span style="color: var(--primary)">- Минимум {{level}}-тый уровень</span><br />
                    <br />
                    После этого тебе нужно будет отправиться в тир, и уже после проверки стрельбы вы получите заветную лицензию`,
            ua: `
                Щоб отримати ліцензію на зброю вам необхідно мати наступне: <br />
                    <span style="color: var(--primary)">- $ {{money}}</span><br />
                    <span style="color: var(--primary)">- Мінімум {{level}}-й рівень</span><br />
                    <br />
                    Після цього вам потрібно буде відправитися в тир, і вже після перевірки стрільби ви отримаєте бажану ліцензію`,
            en: `
                To obtain a weapon license, you must have the following: <br />
                    <span style="color: var(--primary)">- $ {{money}}</span><br />
                    <span style="color: var(--primary)">- Minimum level {{level}}</span><br />
                    <br />
                    After that, you will need to go to a shooting range, and only after a shooting test, you will receive the coveted license`,
            de: `
                Um eine Waffenlizenz zu erhalten, müssen Sie folgendes besitzen: <br />
                    <span style="color: var(--primary)">- {{money}} $</span><br />
                    <span style="color: var(--primary)">- Mindestens Level {{level}}</span><br />
                    <br />
                    Danach müssen Sie zu einem Schießstand gehen und erst nach einer Schießprüfung erhalten Sie die begehrte Lizenz`,
            pl: `
                Aby uzyskać licencję na broń, musisz posiadać następujące rzeczy: <br />
                    <span style="color: var(--primary)">- {{money}} $</span><br />
                    <span style="color: var(--primary)">- Minimum {{level}} poziom</span><br />
                    <br />
                    Po tym musisz udać się na strzelnicę, a po teście strzeleckim otrzymasz upragnioną licencję`,
            zh: `
               要获得武器许可证，您必须具备以下条件:<br />
                  <span style="color: var(——primary)"</span><br />
                  <span style="color: var(——primary)"</span><br />
                  < br / >
                在那之后，你需要去射击场，只有在射击测试之后，你才能获得梦寐以求的持枪证`,
        },
        confirmButton: {
            ru: 'Купить',
            ua: 'Купити',
            en: 'Buy',
            de: 'Kaufen',
            pl: 'Kup',
            zh: '买',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
            zh: '取消',
        },
    },

    restoreModal: {
        title: {
            ru: 'Восстановление лицензии на оружие',
            ua: 'Відновлення ліцензії на зброю',
            en: 'Weapon License Renewal',
            de: 'Waffenscheinverlängerung',
            pl: 'Odnowienie licencji na broń',
            zh: '持枪证更新',
        },
        message: {
            ru: `Восстановление лицензии будет стоить вам <br /><span style="color: var(--primary)">$ {{money}}</span>`,
            ua: `Відновлення ліцензії коштуватиме вам <br /><span style="color: var(--primary)">$ {{money}}</span>`,
            en: `The license renewal will cost you <br /><span style="color: var(--primary)">$ {{money}}</span>`,
            de: `Die Verlängerung des Waffenscheins kostet Sie <br /><span style="color: var(--primary)">$ {{money}}</span>`,
            pl: `Odnowienie licencji będzie Cię kosztować <br /><span style="color: var(--primary)">$ {{money}}</span>`,
            zh: '许可证的续期需要费用<br/><span style="color:var(--primary)">${{money}}</span>',
        },
        confirmButton: {
            ru: 'Восстановить',
            ua: 'Відновити',
            en: 'Renew',
            de: 'Verlängern',
            pl: 'Odnów',
            zh: '重建',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
            zh: '取消',
        },
    },

    messageBuyWeapon: {
        ru: 'Вы успешно приобрели лицензию на оружие',
        ua: 'Ви успішно придбали ліцензію на зброю',
        en: 'You have successfully purchased a weapon license',
        de: 'Sie haben erfolgreich eine Waffenlizenz erworben',
        pl: 'Pomyślnie kupiłeś licencję na broń',
        zh: '您已成功办理持枪证',
    },

    messageRenew: {
        ru: 'Вы успешно возобновили лицензию на оружие',
        ua: 'Ви успішно відновили ліцензію на зброю',
        en: 'You have successfully renewed your weapon license',
        de: 'Sie haben Ihren Waffenschein erfolgreich verlängert',
        pl: 'Pomyślnie odnowiłeś licencję na broń',
        zh: '你已经成功更新了你的持枪证',
    },

    messageRenewMedical: {
        ru: 'Вы успешно возобновили медицинскую лицензию',
        ua: 'Ви успішно відновили медичну ліцензію',
        en: 'You have successfully renewed your medical license',
        de: 'Sie haben Ihre medizinische Lizenz erfolgreich erneuert',
        pl: 'Pomyślnie odnowiłeś swoją licencję medyczną',
        zh: '您的医疗执照已成功续期',
    },
    messageGiveMedical: {
        ru: 'Вы успешно получили медицинскую лицензию',
        ua: 'Ви успішно отримали медичну ліцензію',
        en: 'You have successfully obtained a medical license',
        de: 'Sie haben erfolgreich eine medizinische Lizenz erhalten',
        pl: 'Pomyślnie uzyskałeś licencję medyczną',
        zh: '您已成功取得医疗执照',
    },

    ...cef,

    // Названия лицензий
    car: {
        ru: 'На автомобиль',
        ua: 'На автомобіль',
        en: 'For Car',
        de: 'Für Auto',
        pl: 'Na samochód',
        zh: '车上用品',
    },
    motorcycle: {
        ru: 'На мотоцикл',
        ua: 'На мотоцикл',
        en: 'For Motorcycle',
        de: 'Für Motorrad',
        pl: 'Na motocykl',
        zh: '摩托车用品',
    },
    boat: {
        ru: 'На лодку',
        ua: 'На човен',
        en: 'For Boat',
        de: 'Für Boot',
        pl: 'Na łódź',
        zh: '船用品',
    },
    air: {
        ru: 'На воздушное судно',
        ua: 'На повітряне судно',
        en: 'For Air Vehicle',
        de: 'Für Luftfahrzeug',
        pl: 'Na statek powietrzny',
        zh: '飞机用品',
    },
    weapon: {
        ru: 'На оружие',
        ua: 'На зброю',
        en: 'For Weapon',
        de: 'Für Waffe',
        pl: 'Na broń',
        zh: '武器用品',
    },
    medical: {
        ru: 'Медицинская',
        ua: 'Медична',
        en: 'Medical',
        de: 'Medizinisch',
        pl: 'Medyczna',
        zh: '健康检查',
    },
    business: {
        ru: 'Бизнес',
        ua: 'Бізнес',
        en: 'For Business',
        de: 'Gewerbe',
        pl: 'Biznesowa',
        zh: '办理业务',
    },
    fishing: {
        ru: 'На рыбалку',
        ua: 'На риболовлю',
        en: 'For Fishing',
        de: 'Für Angeln',
        pl: 'Na rybołówstwo',
        zh: '钓鱼用品',
    },
    military: {
        ru: 'Военная',
        ua: 'Військова',
        en: 'Military',
        de: 'Militär',
        pl: 'Wojskowa',
        zh: '军事',
    },
    hunting: {
        ru: 'На охоту',
        ua: 'На полювання',
        en: 'Hunting',
        de: 'Jagen',
        pl: 'Na polowanie',
    },

    //

    takeLicense: {
        ru: 'Забрать лицензию в {{name}}',
        ua: 'Забрати ліцензію в {{name}}',
        en: 'Take a license at {{name}}',
        de: 'Holen Sie sich eine Lizenz bei {{name}}',
        pl: 'Zdobądź licencję w {{name}}',
        zh: '取得执照{{name}}',
    },

    licenseTaken: {
        ru: '{{playerName}} забрал у вас лицензию {{license}}',
        ua: '{{playerName}} забрав у вас ліцензію {{license}}',
        en: '{{playerName}} took your {{license}} license',
        de: '{{playerName}} hat Ihre Lizenz {{license}} genommen',
        pl: '{{playerName}} zabrał twoją licencję {{license}}',
        zh: '{{playerName}}拿走了你的{{license}}驾照',
    },
    licenseTaken2: {
        ru: 'Вы забрали лицензию {{license}} в {{playerName}}',
        ua: 'Ви забрали ліцензію {{license}} у {{playerName}}',
        en: 'You took the {{license}} license from {{playerName}}',
        de: 'Sie haben die Lizenz {{license}} von {{playerName}} genommen',
        pl: 'Zabrałeś licencję {{license}} od {{playerName}}',
        zh: '您从{{playerName}}获取了{{license}}许可证。',
    },
};
