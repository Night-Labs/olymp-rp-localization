export default {
    depBroadcast: {
        ru: '~c~[Департамент] {{factionName}} {{playerName}}: {{message}}',
        ua: '~c~[Департамент] {{factionName}} {{playerName}}: {{message}}',
        en: '~c~[Department] {{factionName}} {{playerName}}: {{message}}',
        de: '~c~[Abteilung] {{factionName}} {{playerName}}: {{message}}',
        pl: '~c~[Departament] {{factionName}} {{playerName}}: {{message}}',
        zh: '~c~[部门] {{factionName}} {{playerName}}: {{message}}'
    },
    govBroadcast: {
        ru: '~b~{{factionName}} {{playerName}}: {{message}}',
        ua: '~b~{{factionName}} {{playerName}}: {{message}}',
        en: '~b~{{factionName}} {{playerName}}: {{message}}',
        de: '~b~{{factionName}} {{playerName}}: {{message}}',
        pl: '~b~{{factionName}} {{playerName}}: {{message}}',
    },
    fUsage: {
        ru: '[сообщение] - фракционный чат',
        ua: '[повідомлення] - фракційний чат',
        en: '[message] - faction chat',
        de: '[nachricht] - fraktionschat',
        pl: '[wiadomosc] - czat frakcji',
    },
    fMessage: {
        ru: '~b~[Рация {{factionName}}] {{playerName}}: {{message}}',
        ua: '~b~[Рація {{factionName}}] {{playerName}}: {{message}}',
        en: '~b~[Radio {{factionName}}] {{playerName}}: {{message}}',
        de: '~b~[Funkgerät {{factionName}}] {{playerName}}: {{message}}',
        pl: '~b~[Radio {{factionName}}] {{playerName}}: {{message}}',
       zh: '~b~[无线电 {{factionName}}] {{playerName}}: {{message}}'
    },
    fbMessage: {
        ru: '~b~[Рация {{factionName}}] {{playerName}}: (( {{message}} ))',
        ua: '~b~[Рація {{factionName}}] {{playerName}}: (( {{message}} ))',
        en: '~b~[Radio {{factionName}}] {{playerName}}: (( {{message}} ))',
        de: '~b~[Funk {{factionName}}] {{playerName}}: (( {{message}} ))',
        pl: '~b~[Radio {{factionName}}] {{playerName}}: (( {{message}} ))',
        zh: '~b~[无线电 {{factionName}}] {{playerName}}：（（{{message}}））'
    },
    fbUsage: {
        ru: '[сообщение] - OOC фракционный чат',
        ua: '[повідомлення] - OOC фракційний чат',
        en: '[message] - ooc faction chat',
        de: '[nachricht] - ooc fraktionschat',
        pl: '[wiadomosc] - ooc czat frakcji',
    },
    respawnUsage: {
        ru: '[фракция] - зареспавнить игрока на спавне фракции',
        ua: '[фракція] - зареспавнити гравця на спавні фракції',
        en: '[faction] - respawn player at faction spawn',
        de: '[fraktion] - spieler am fraktionsspawn respawnen',
        pl: '[frakcja] - zrespawnuj gracza na spawnie frakcji',
    },

    // modal
    adModal: {
        title: {
            ru: 'Отправка рекламы банды',
            ua: 'Надсилання реклами банди',
            en: 'Send Gang Advertisement',
            de: 'Sende Bandenwerbung',
            pl: 'Wyślij reklamę gangu',
           zh:'发送帮派广告',
        },
        message: {
            ru: `Вы собираетесь отправить рекламу банды <br/>Текст: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Удостоверьтесь в правильности текста.</span>`,
            ua: `Ви збираєтеся надіслати рекламу банди <br/>Текст: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Переконайтеся, що текст правильний.</span>`,
            en: `You are about to send a gang advertisement. <br/>Message: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Please make sure the message is correct.</span>`,
            de: `Du schickst gerade eine Bandenwerbung. <br/>Nachricht: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Bitte stelle sicher, dass die Nachricht korrekt ist.</span>`,
            pl: `Zamierzasz wysłać reklamę gangu. <br/>Wiadomość: "<span style="color: white">{{message}}</span>". <br/><br/><span style="color: #87302a">Upewnij się, że wiadomość jest poprawna.</span>`,
            zh:',你即将发布一则帮派广告。”<br/>消息：“<span style=”color:white“>{{Message}}</span>”<请确保信息正确无误</跨度；跨越；持续时间；（桥或拱的）墩距；跨距； 包括（广大地区）',
        },
        confirmButton: {
            ru: 'Отправить',
            ua: 'Надіслати',
            en: 'Send',
            de: 'Senden',
            pl: 'Wyślij',
            zh:'发送',
        },
        cancelButton: {
            ru: 'Отмена',
            ua: 'Відміна',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
            zh:'取消按钮',
        },
    },
    adMessage: {
        ru: '~g~[Реклама] {{message}}. Отправитель: {{playerName}}',
        ua: '~g~[Реклама] {{message}}. Відправник: {{playerName}}',
        en: '~g~[Advertisement] {{message}}. Sender: {{playerName}}',
        de: '~g~[Werbung] {{message}}. Absender: {{playerName}}',
        pl: '~g~[Reklama] {{message}}. Nadawca: {{playerName}}',
        zh: '~g~[广告] {{message}}。发件人: {{playerName}}'
    },
    youHaveAdTimeout: {
        ru: 'Вы уже отправляли рекламу банды',
        ua: 'Ви вже надіслали рекламу банди',
        en: 'You have already sent a gang advertisement',
        de: 'Du hast bereits eine Bandenwerbung gesendet',
        pl: 'Jestes juz nadal wysyłają reklame gangu',
       zh:',你已经发布了一则帮派广告',
    },
};
