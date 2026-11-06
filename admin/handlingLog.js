export default {
    header: {
        ru: 'Телеметрия',
        ua: 'Телеметрія',
        en: 'Telemetry',
        de: 'Telemetrie',
    },
    started: {
        ru: 'Запись началась: {{model}}, максимум {{max}} с. Нажми / ещё раз, чтобы остановить.',
        ua: 'Запис почався: {{model}}, максимум {{max}} с. Натисни / ще раз, щоб зупинити.',
        en: 'Recording started: {{model}}, up to {{max}} s. Press / again to stop.',
        de: 'Aufnahme gestartet: {{model}}, höchstens {{max}} s. Drücke / erneut zum Stoppen.',
    },
    startedCommand: {
        ru: 'Запись началась: {{model}}, максимум {{max}} с. Введи /hlog ещё раз, чтобы остановить.',
        ua: 'Запис почався: {{model}}, максимум {{max}} с. Введи /hlog ще раз, щоб зупинити.',
        en: 'Recording started: {{model}}, up to {{max}} s. Enter /hlog again to stop.',
        de: 'Aufnahme gestartet: {{model}}, höchstens {{max}} s. Gib /hlog erneut ein, um sie zu stoppen.',
    },
    stoppedKey: {
        ru: 'Запись остановлена: {{model}}, {{seconds}} с, {{frames}} кадров.',
        ua: 'Запис зупинено: {{model}}, {{seconds}} с, {{frames}} кадрів.',
        en: 'Recording stopped: {{model}}, {{seconds}} s, {{frames}} frames.',
        de: 'Aufnahme gestoppt: {{model}}, {{seconds}} s, {{frames}} Frames.',
    },
    stoppedTime: {
        ru: 'Запись остановлена по лимиту {{max}} с: {{model}}, {{frames}} кадров.',
        ua: 'Запис зупинено за лімітом {{max}} с: {{model}}, {{frames}} кадрів.',
        en: 'Recording stopped at the {{max}} s limit: {{model}}, {{frames}} frames.',
        de: 'Aufnahme beim Limit von {{max}} s gestoppt: {{model}}, {{frames}} Frames.',
    },
    stoppedLeft: {
        ru: 'Запись остановлена: ты вышел из машины ({{model}}, {{seconds}} с, {{frames}} кадров).',
        ua: 'Запис зупинено: ти вийшов з машини ({{model}}, {{seconds}} с, {{frames}} кадрів).',
        en: 'Recording stopped: you left the vehicle ({{model}}, {{seconds}} s, {{frames}} frames).',
        de: 'Aufnahme gestoppt: Du hast das Fahrzeug verlassen ({{model}}, {{seconds}} s, {{frames}} Frames).',
    },
    noVehicle: {
        ru: 'Сядь в машину, чтобы начать запись.',
        ua: 'Сядь у машину, щоб почати запис.',
        en: 'Get into a vehicle to start recording.',
        de: 'Steig in ein Fahrzeug, um die Aufnahme zu starten.',
    },
};
