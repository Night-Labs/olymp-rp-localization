export default {
    wrongReason: {
        ru: 'Укажите корректную причину предупреждения',
        ua: 'Вкажіть коректну причину попередження',
        en: 'Specify a valid reason for the warning',
        de: 'Gib einen gültigen Grund für die Verwarnung an',
    },
    cantWarnAdmin: {
        ru: 'Вы не можете выдать предупреждение администратору более высокого уровня, чем вы',
        ua: 'Ви не можете видати попередження адміністратору вищого рівня, ніж ви',
        en: 'You cannot warn an admin of a higher level than you',
        de: 'Du kannst keinen Admin mit einem höheren Rang als deinem verwarnen',
    },
    warned: {
        ru: 'Вы выдали предупреждение игроку {{name}} ({{count}}/{{max}})',
        ua: 'Ви видали попередження гравцю {{name}} ({{count}}/{{max}})',
        en: 'You warned {{name}} ({{count}}/{{max}})',
        de: 'Du hast {{name}} verwarnt ({{count}}/{{max}})',
    },
    youGotWarn: {
        ru: 'Вы получили предупреждение от администрации ({{count}}/{{max}}). Причина: {{reason}}. Пока оно на аккаунте, вступить во фракцию нельзя, а на {{max}}-м предупреждении аккаунт блокируется на {{days}} дней. Снять предупреждение можно в донат-магазине.',
        ua: 'Ви отримали попередження від адміністрації ({{count}}/{{max}}). Причина: {{reason}}. Поки воно на акаунті, вступити до фракції не можна, а на {{max}}-му попередженні акаунт блокується на {{days}} днів. Зняти попередження можна в донат-магазині.',
        en: 'You received a warning from the administration ({{count}}/{{max}}). Reason: {{reason}}. While it is on your account you cannot join a faction, and at {{max}} warnings the account is banned for {{days}} days. You can remove a warning in the donate shop.',
        de: 'Du hast eine Verwarnung der Administration erhalten ({{count}}/{{max}}). Grund: {{reason}}. Solange sie auf deinem Konto ist, kannst du keiner Fraktion beitreten, und bei {{max}} Verwarnungen wird das Konto für {{days}} Tage gesperrt. Eine Verwarnung kannst du im Donate-Shop entfernen.',
    },
    broadcast: {
        ru: '~r~Администратор {{admin}} выдал предупреждение игроку {{target}} ({{count}}/{{max}}) по причине {{reason}}',
        ua: '~r~Адміністратор {{admin}} видав попередження гравцю {{target}} ({{count}}/{{max}}) з причини {{reason}}',
        en: '~r~Administrator {{admin}} warned player {{target}} ({{count}}/{{max}}) due to {{reason}}',
        de: '~r~Administrator {{admin}} hat Spieler {{target}} verwarnt ({{count}}/{{max}}), Grund: {{reason}}',
    },
    broadcastBan: {
        ru: '~r~Администратор {{admin}} выдал предупреждение игроку {{target}} ({{max}}/{{max}}) и заблокировал его на {{days}} дней по причине {{reason}}',
        ua: '~r~Адміністратор {{admin}} видав попередження гравцю {{target}} ({{max}}/{{max}}) і заблокував його на {{days}} днів з причини {{reason}}',
        en: '~r~Administrator {{admin}} warned player {{target}} ({{max}}/{{max}}) and banned them for {{days}} days due to {{reason}}',
        de: '~r~Administrator {{admin}} hat Spieler {{target}} verwarnt ({{max}}/{{max}}) und für {{days}} Tage gesperrt, Grund: {{reason}}',
    },
    cantJoinFaction: {
        ru: 'С предупреждением от администрации нельзя вступить во фракцию. Снять его можно в донат-магазине.',
        ua: 'З попередженням від адміністрації не можна вступити до фракції. Зняти його можна в донат-магазині.',
        en: 'You cannot join a faction while you have an admin warning. You can remove it in the donate shop.',
        de: 'Mit einer Verwarnung der Administration kannst du keiner Fraktion beitreten. Du kannst sie im Donate-Shop entfernen.',
    },
    targetCantJoinFaction: {
        ru: '{{name}} не может вступить во фракцию: у него предупреждение от администрации',
        ua: '{{name}} не може вступити до фракції: у нього попередження від адміністрації',
        en: '{{name}} cannot join a faction: they have an admin warning',
        de: '{{name}} kann keiner Fraktion beitreten: Verwarnung der Administration',
    },
    noWarns: {
        ru: 'У этого игрока нет предупреждений',
        ua: 'У цього гравця немає попереджень',
        en: 'This player has no warnings',
        de: 'Dieser Spieler hat keine Verwarnungen',
    },
    unwarned: {
        ru: 'Вы сняли предупреждение с игрока {{name}} ({{count}}/{{max}})',
        ua: 'Ви зняли попередження з гравця {{name}} ({{count}}/{{max}})',
        en: 'You removed a warning from {{name}} ({{count}}/{{max}})',
        de: 'Du hast eine Verwarnung von {{name}} entfernt ({{count}}/{{max}})',
    },
    youUnwarned: {
        ru: 'С вас сняли предупреждение ({{count}}/{{max}})',
        ua: 'З вас зняли попередження ({{count}}/{{max}})',
        en: 'A warning has been removed from you ({{count}}/{{max}})',
        de: 'Eine Verwarnung wurde von dir entfernt ({{count}}/{{max}})',
    },
};
