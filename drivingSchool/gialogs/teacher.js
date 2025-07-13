import { driverLicenses } from '../drivingLicenses/categories';

export default {
    categories: driverLicenses,

    messages: {
        // I dont know u
        idkU: {
            ru: 'У меня нет никакой информации о тебе.\n\nОбратись к нашему менеджеру, она находится возле входа, обсуди с ней какую категорию ты хочешь получить а потом возвращайся ко мне!',
            ua: 'У мене немає жодної інформації про тебе.\n\nЗвернися до нашого менеджера, вона знаходиться біля входу, обговори з нею, яку категорію ти хочеш отримати, а потім повертайся до мене!',
            en: 'I have no information about you.\n\nContact our manager, she is near the entrance, discuss with her what category you want to get, and then come back to me!',
            de: 'Ich habe keine Informationen über dich.\n\nWende dich an unsere Managerin, sie befindet sich in der Nähe des Eingangs, besprich mit ihr, welche Kategorie du erhalten möchtest, und komme dann zu mir zurück!',
            pl: 'Nie mam żadnych informacji o tobie.\n\nSkontaktuj się z naszą menedżerką, znajduje się ona przy wejściu, omów z nią, jaką kategorię chcesz otrzymać, a potem wróć do mnie!',
        },

        // Study first time
        studyFirstTime: {
            ru: 'Здравствуй {{name}}!\n\nДа мне уже сообщили что ты хочешь получить права категории {{category}}\n\nРекомендую для начала изучить теорию а только потом переходить к тесту.',
            ua: 'Вітаю {{name}}!\n\nМені вже повідомили, що ти хочеш отримати права категорії {{category}}\n\nРекомендую спочатку вивчити теорію, а вже потім переходити до тесту.',
            en: 'Hello {{name}}!\n\nI’ve already been informed that you want to get a license for category {{category}}\n\nI recommend studying the theory first before taking the test.',
            de: 'Hallo {{name}}!\n\nMir wurde bereits mitgeteilt, dass du den Führerschein der Kategorie {{category}} machen möchtest.\n\nIch empfehle dir, zuerst die Theorie zu lernen und erst danach mit dem Test zu beginnen.',
            pl: 'Cześć {{name}}!\n\nJuż mnie poinformowano, że chcesz zdobyć prawo jazdy kategorii {{category}}\n\nPolecam najpierw zapoznać się z teorią, a dopiero potem przejść do testu.',
        },
        // Study renew
        studyRenew: {
            ru: 'И снова здравствуй {{name}}!\n\nХочешь продлить категории {{category}}? правильно, нет ничего лучше чем снова вспомнить правила ПДД и покататься с этими великолепными инструкторшами в нашей автошколе!',
            ua: 'І знову привіт {{name}}!\n\nХочеш продовжити категорії {{category}}? Правильно, немає нічого кращого, ніж згадати правила ПДР і покататися з нашими чудовими інструкторками в автошколі!',
            en: "Hello again {{name}}!\n\nWant to renew category {{category}}? That's right, there's nothing better than refreshing the traffic rules and driving with our amazing instructors at the driving school!",
            de: 'Hallo erneut {{name}}!\n\nMöchtest du die Kategorie {{category}} verlängern? Richtig so, es gibt nichts Besseres, als die Verkehrsregeln aufzufrischen und mit unseren großartigen Fahrlehrerinnen in der Fahrschule zu fahren!',
            pl: 'Witaj ponownie {{name}}!\n\nChcesz przedłużyć kategorię {{category}}? Słusznie, nie ma nic lepszego niż odświeżyć przepisy drogowe i pojeździć z naszymi wspaniałymi instruktorkami w szkole jazdy!',
        },
        // Test passed
        testPassed: {
            ru: 'Поздравляю! Ты прошёл тест. Правильных ответов: {{correctAnswers}}/{{questions}}\n\nТеперь тебе предстоит пройти практический тест, будь внимателен и осторожен, если инструкторша увидит что ты нарушаешь правила окажешься у меня снова!',
            ua: 'Вітаю! Ти пройшов тест. Правильних відповідей: {{correctAnswers}}/{{questions}}\n\nТепер тобі належить пройти практичний тест. Будь уважним і обережним: якщо інструкторка побачить, що ти порушуєш правила, ти знову повернешся до мене!',
            en: "Congratulations! You passed the test. Correct answers: {{correctAnswers}}/{{questions}}\n\nNow you have to take the practical test. Be careful and attentive—if the instructor sees you breaking the rules, you'll be back here again!",
            de: 'Glückwunsch! Du hast den Test bestanden. Richtige Antworten: {{correctAnswers}}/{{questions}}\n\nJetzt steht dir die praktische Prüfung bevor. Sei aufmerksam und vorsichtig – wenn die Fahrlehrerin sieht, dass du die Regeln verletzt, landest du wieder bei mir!',
            pl: 'Gratulacje! Zdałeś test. Poprawne odpowiedzi: {{correctAnswers}}/{{questions}}\n\nTeraz czeka Cię test praktyczny. Bądź uważny i ostrożny – jeśli instruktorka zobaczy, że łamiesz przepisy, znów trafisz do mnie!',
        },
        // Test failed
        testFailed: {
            ru: 'К сожалению ты не прошёл тест. Правильных ответов: {{correctAnswers}}/{{questions}}\n\nРекомендую тебе хорошенько повторить теорию ещё раз а затем попробовать снова.',
            ua: 'На жаль, ти не пройшов тест. Правильних відповідей: {{correctAnswers}}/{{questions}}\n\nРекомендую добре повторити теорію ще раз, а потім спробувати знову.',
            en: "Unfortunately, you didn't pass the test. Correct answers: {{correctAnswers}}/{{questions}}\n\nI recommend reviewing the theory thoroughly and trying again.",
            de: 'Leider hast du den Test nicht bestanden. Richtige Antworten: {{correctAnswers}}/{{questions}}\n\nIch empfehle dir, die Theorie noch einmal gründlich zu wiederholen und es erneut zu versuchen.',
            pl: 'Niestety, nie zdałeś testu. Poprawne odpowiedzi: {{correctAnswers}}/{{questions}}\n\nPolecam dokładnie powtórzyć teorię i spróbować ponownie.',
        },
    },

    buttons: {
        // Theory
        theory: {
            ru: 'Изучить теорию',
            ua: 'Вивчити теорію',
            en: 'Study theory',
            de: 'Theorie lernen',
            pl: 'Ucz się teorii',
        },

        // Test
        startTest: {
            ru: 'Перейти к практике',
            ua: 'Перейти до практики',
            en: 'Go to practice',
            de: 'Zur Praxis übergehen',
            pl: 'Przejdź do praktyki',
        },

        // Practice
        starPractice: {
            ru: 'Перейти к практике',
            ua: 'Перейти до практики',
            en: 'Go to practice',
            de: 'Zur Praxis übergehen',
            pl: 'Przejdź do praktyki',
        },

        // Next theory
        nextTheory: {
            ru: 'Следующая тема',
            ua: 'Наступна тема',
            en: 'Next topic',
            de: 'Nächstes Thema',
            pl: 'Następny temat',
        },
        // Prev theory
        prevTheory: {
            ru: 'Предыдущая тема',
            ua: 'Попередня тема',
            en: 'Previous topic',
            de: 'Vorheriges Thema',
            pl: 'Poprzedni temat',
        },

        // Buttons
        goodbye: {
            ru: 'Давай позже',
            ua: 'Давай пізніше',
            en: 'Maybe later',
            de: 'Vielleicht später',
            pl: 'Może później',
        },
    },
};
