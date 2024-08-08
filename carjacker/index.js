import dialogs from './dialogs';

export default {
    dialogs,
    waitSMS: {
        ru: 'Ожидай СМС',
        ua: 'Очікуй СМС',
        en: 'Wait for SMS',
        de: 'Warte auf SMS',
        pl: 'Czekaj na SMS',
    },
    order: {
        ru: 'Здарова! Сегодня у нас {{model}}, цвет {{color}}, номера {{plate}}. Приблизительные данные у тебя на карте, поторопись.',
        ua: 'Привіт! Сьогодні у нас {{model}}, колір {{color}}, номери {{plate}}. Приблизні дані у тебе на карті, поспішай.',
        en: 'Hello! Today we have {{model}}, color {{color}}, plates {{plate}}. Approximate data is on your map, hurry up.',
        de: 'Hallo! Heute haben wir {{model}}, Farbe {{color}}, Nummernschilder {{plate}}. Ungefähre Daten sind auf Ihrer Karte, beeilen Sie sich.',
        pl: 'Cześć! Dzisiaj mamy {{model}}, kolor {{color}}, tablice rejestracyjne {{plate}}. Przybliżone dane są na twojej mapie, pospiesz się.',
    },
    dropOff: {
        ru: 'Отлично! Ты справился с заданием, ты заработал: ${{salary}}',
        ua: 'Чудово! Ти впорався з завданням, ти заробив: ${{salary}}',
        en: 'Great! You completed the task, you earned: ${{salary}}',
        de: 'Großartig! Du hast die Aufgabe erledigt, du hast verdient: ${{salary}}',
        pl: 'Świetnie! Wykonałeś zadanie, zarobiłeś: ${{salary}}',
    },
    smsDropOff: {
        ru: 'Я вижу ты успешно доставил машину как я хотел, держи бесплатную доставку личной машины!',
        ua: 'Я бачу, ти успішно доставив машину, як я хотів, тримай безкоштовну доставку особистого автомобіля!',
        en: 'I see you successfully delivered the car as I wanted, enjoy a free personal car delivery!',
        de: 'Ich sehe, dass du das Auto erfolgreich geliefert hast, wie ich es wollte, hier ist eine kostenlose Lieferung eines persönlichen Autos!',
        pl: 'Widzę, że dostarczyłeś samochód zgodnie z moimi oczekiwaniami, oto darmowa dostawa osobistego samochodu!',
    },
    carStolen: {
        ru: 'Внимание! В вашем районе произошел угон автомобиля. Модель: {{model}}, номер: {{plate}}. Просьба усилить бдительность.',
        ua: 'Увага! У вашому районі викрадено автомобіль. Модель: {{model}}, номер: {{plate}}. Будьте пильні.',
        en: 'Attention! A car was stolen in your area. Model: {{model}}, plate: {{plate}}. Please be extra vigilant.',
        de: 'Achtung! In Ihrem Gebiet wurde ein Auto gestohlen. Modell: {{model}}, Kennzeichen: {{plate}}. Bitte seien Sie besonders wachsam.',
        pl: 'Uwaga! W twojej okolicy skradziono samochód. Model: {{model}}, numer: {{plate}}. Prosimy o zwiększenie czujności.',
    },
    messageForPoliceman: {
        ru: 'Отвезите угнаную машину в специальное место чтобы получить премию!',
        ua: 'Відвезіть викрадену машину в спеціальне місце щоб отримати премію!',
        en: 'Take the stolen car to a special place to get a reward!',
        de: 'Bringen Sie das gestohlene Auto an einen besonderen Ort, um eine Belohnung zu erhalten!',
        pl: 'Zawieź skradziony samochód do specjalnego miejsca, aby otrzymać nagrodę!',
    },
    policemanModal: {
        title: {
            ru: 'Успешная работа',
            ua: 'Успішна робота',
            en: 'Successful work',
            de: 'Erfolgreiche Arbeit',
            pl: 'Udane prace',
        },
        message: {
            ru: 'Вы смогли найти угнаный автомобиль, поздравляем! Ваша награда: ${{salary}}.',
            ua: 'Ви змогли знайти викрадений автомобіль, вітаємо! Ваша нагорода: ${{salary}}.',
            en: 'You were able to find the stolen car, congratulations! Your reward: ${{salary}}.',
            de: 'Sie haben das gestohlene Auto gefunden, herzlichen Glückwunsch! Ihre Belohnung: ${{salary}}.',
            pl: 'Udało ci się znaleźć skradziony samochód, gratulacje! Twoja nagroda: ${{salary}}.',
        },
        confirmButton: {
            ru: 'Спасибо',
            ua: 'Дякую',
            en: 'Thank you',
            de: 'Danke',
            pl: 'Dziękuję',
        },
    },
    cooldown: {
        ru: 'Подождите {{time}}',
        ua: 'Зачекайте {{time}}',
        en: 'Wait {{time}}',
        de: 'Warten Sie {{time}}',
        pl: 'Czekaj {{time}}',
    },
    noFreePosition: {
        ru: 'Попробуйте позже',
        ua: 'Спробуйте пізніше',
        en: 'Try again later',
        de: 'Versuchen Sie es später noch einmal',
        pl: 'Spróbuj ponownie później',
    },
};
