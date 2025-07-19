import topicsMain from '../topics/main';
import topicsA from '../topics/A';
import topicsB from '../topics/B';
import topicsC from '../topics/C';
import topicsD from '../topics/D';
import topicsW from '../topics/W';
import topicsP from '../topics/P';
import topicsH from '../topics/H';

export default {
    // Topics
    topics: {
        main: topicsMain,
        A: topicsA,
        B: topicsB,
        C: topicsC,
        D: topicsD,
        W: topicsW,
        P: topicsP,
        H: topicsH,
    },

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
            ru: 'Поздравляю! Ты прошёл тест.\nПравильных ответов: {{correctAnswers}}/{{questions}}\n\nТеперь тебе предстоит пройти практический тест, будь внимателен и осторожен, если инструкторша увидит что ты нарушаешь правила окажешься у меня снова!',
            ua: 'Вітаю! Ти пройшов тест.\nПравильних відповідей: {{correctAnswers}}/{{questions}}\n\nТепер тобі належить пройти практичний тест, будь уважним та обережним, якщо інструкторка побачить, що ти порушуєш правила, опинишся у мене знову!',
            en: 'Congratulations! You passed the test.\nCorrect answers: {{correctAnswers}}/{{questions}}\n\nNow you have to pass a practical test, be attentive and careful, if the instructor sees that you are breaking the rules, you will end up with me again!',
            de: 'Herzlichen Glückwunsch! Du hast den Test bestanden.\nRichtige Antworten: {{correctAnswers}}/{{questions}}\n\nJetzt musst du einen praktischen Test bestehen. Sei aufmerksam und vorsichtig, wenn die Ausbilderin sieht, dass du die Regeln brichst, landest du wieder bei mir!',
            pl: 'Gratulacje! Zdałeś test.\nPrawidłowych odpowiedzi: {{correctAnswers}}/{{questions}}\n\nTeraz musisz przejść test praktyczny, bądź uważny i ostrożny, jeśli instruktorka zobaczy, że łamiesz zasady, znowu do mnie wrócisz!',
        },
        // Test failed
        testFailed: {
            ru: 'К сожалению ты не прошёл тест.\nПравильных ответов: {{correctAnswers}}/{{questions}}\n\nРекомендую тебе хорошенько повторить теорию ещё раз а затем попробовать снова.',
            ua: 'На жаль, ти не пройшов тест.\nПравильних відповідей: {{correctAnswers}}/{{questions}}\n\nРекомендую тобі добре повторити теорію ще раз, а потім спробувати знову.',
            en: 'Unfortunately, you did not pass the test.\nCorrect answers: {{correctAnswers}}/{{questions}}\n\nI recommend you thoroughly review the theory again and then try once more.',
            de: 'Leider hast du den Test nicht bestanden.\nRichtige Antworten: {{correctAnswers}}/{{questions}}\n\nIch empfehle dir, die Theorie noch einmal gründlich zu wiederholen und es dann erneut zu versuchen.',
            pl: 'Niestety, nie zdałeś testu.\nPrawidłowych odpowiedzi: {{correctAnswers}}/{{questions}}\n\nZalecam ci dobrze powtórzyć teorię jeszcze раз, a następnie spróbować ponownie.',
        },

        // Confirm start test first time
        confirmStartTestFirstTime: {
            ru: 'Ты уверен что хочешь начать тест?\n\nУ тебя будет в сумме {{summQuestions}} вопросов, {{mainQuestions}} из которых по общей теории и {{categoryQuestions}} по теории категории {{category}}.\nЕсли ответишь не правильно на {{maxFails}} либо больше вопросов - провалишь тест.\n\nЦена теста: {{price}}',
            ua: 'Ти впевнений, що хочеш почати тест?\n\nУ тебе буде загалом {{summQuestions}} питань, {{mainQuestions}} з яких за загальною теорією та {{categoryQuestions}} за теорією категорії {{category}}.\nЯкщо відповіси неправильно на {{maxFails}} або більше питань - провалиш тест.\n\nЦіна тесту: {{price}}',
            en: 'Are you sure you want to start the test?\n\nYou will have a total of {{summQuestions}} questions, {{mainQuestions}} of which are on general theory and {{categoryQuestions}} on the theory of category {{category}}.\nIf you answer {{maxFails}} or more questions incorrectly, you will fail the test.\n\nTest price: {{price}}',
            de: 'Bist du sicher, dass du den Test starten möchtest?\n\nDu wirst insgesamt {{summQuestions}} Fragen haben, davon {{mainQuestions}} zur allgemeinen Theorie und {{categoryQuestions}} zur Theorie der Kategorie {{category}}.\nWenn du {{maxFails}} oder mehr Fragen falsch beantwortest, fällst du durch den Test.\n\nTestpreis: {{price}}',
            pl: 'Czy na pewno chcesz rozpocząć test?\n\nBędziesz mieć łącznie {{summQuestions}} pytań, z czego {{mainQuestions}} dotyczy ogólnej teorii, a {{categoryQuestions}} teorii kategorii {{category}}.\nJeśli odpowiesz niepoprawnie na {{maxFails}} lub więcej pytań, oblejesz test.\n\nCena testu: {{price}}',
        },

        // Confirm start test renew
        confirmStartTestRenew: {
            ru: 'Ты уверен что хочешь начать тест?\n\nТы уже наверное знаешь, но я на всякий случай повторю, у тебя будет в сумме {{summQuestions}} вопросов, {{mainQuestions}} из которых по основной теории и {{categoryQuestions}} по теории категории {{category}}.\nЕсли ответишь не правильно на {{maxFails}} либо больше вопросов - провалишь тест.',
            ua: 'Ти впевнений, що хочеш почати тест?\n\nТи вже, напевно, знаєш, але я про всяк випадок повторю, у тебе буде загалом {{summQuestions}} питань, {{mainQuestions}} з яких за основною теорією та {{categoryQuestions}} за теорією категорії {{category}}.\nЯкщо відповіси неправильно на {{maxFails}} або більше питань - провалиш тест.',
            en: "Are you sure you want to start the test?\n\nYou probably already know, but just in case, I'll repeat: you will have a total of {{summQuestions}} questions, {{mainQuestions}} of which are on main theory and {{categoryQuestions}} on the theory of category {{category}}.\nIf you answer {{maxFails}} or more questions incorrectly, you will fail the test.",
            de: 'Bist du sicher, dass du den Test starten möchtest?\n\nDu weißt es wahrscheinlich schon, aber nur für den Fall, ich wiederhole es: Du wirst insgesamt {{summQuestions}} Fragen haben, davon {{mainQuestions}} zur Haupttheorie und {{categoryQuestions}} zur Theorie der Kategorie {{category}}.\nWenn du {{maxFails}} oder mehr Fragen falsch beantwortest, fällst du durch den Test.',
            pl: 'Czy na pewno chcesz rozpocząć test?\n\nPrawdopodobnie już wiesz, ale na wszelki wypadek powtórzę: będziesz mieć łącznie {{summQuestions}} pytań, z czego {{mainQuestions}} dotyczy głównej teorii, a {{categoryQuestions}} teorii kategorii {{category}}.\nJeśli odpowiesz niepoprawnie na {{maxFails}} lub więcej pytań, oblejesz test.',
        },

        // Theory
        theory: {
            ru: 'Тема: {{theme}}\n\n{{desc}}',
            ua: 'Тема: {{theme}}\n\n{{desc}}',
            en: 'Topic: {{theme}}\n\n{{desc}}',
            de: 'Thema: {{theme}}\n\n{{desc}}',
            pl: 'Temat: {{theme}}\n\n{{desc}}',
        },

        // Test
        test: {
            ru: 'Тема: {{theme}}\n\nВопрос: {{question}}\n\nВарианты ответа:\n{{answers}}\n\nВыбери правильный вариант ответа.',
            ua: 'Тема: {{theme}}\n\nПитання: {{question}}\n\nВаріанти відповіді:\n{{answers}}\n\nОберіть правильний варіант відповіді.',
            en: 'Topic: {{theme}}\n\nQuestion: {{question}}\n\nAnswer options:\n{{answers}}\n\nSelect the correct answer.',
            de: 'Thema: {{theme}}\n\nFrage: {{question}}\n\nAntwortmöglichkeiten:\n{{answers}}\n\nWählen Sie die richtige Antwort.',
            pl: 'Temat: {{theme}}\n\nPytanie: {{question}}\n\nOpcje odpowiedzi:\n{{answers}}\n\nWybierz prawidłową odpowiedź.',
        },
    },

    buttons: {
        // I back soon
        iBackSoon: {
            ru: 'Понятно, скоро вернусь.',
            ua: 'Зрозуміло, скоро повернуся.',
            en: "Understood, I'll be back soon.",
            de: 'Verstanden, ich bin bald zurück.',
            pl: 'Rozumiem, zaraz wrócę.',
        },

        // Theory
        mainTheory: {
            ru: 'Общая теория',
            ua: 'Загальна теорія',
            en: 'General theory',
            de: 'Allgemeine Theorie',
            pl: 'Ogólna teoria',
        },

        // Category theory
        categoryTheory: {
            ru: 'Теория категории {{category}}',
            ua: 'Теорія категорії {{category}}',
            en: 'Theory of category {{category}}',
            de: 'Theorie der Kategorie {{category}}',
            pl: 'Teoria kategorii {{category}}',
        },

        // End study theory
        endStudyTheory: {
            ru: 'Завершить изучение теории',
            ua: 'Завершити вивчення теорії',
            en: 'End theory study',
            de: 'Theoriestudium beenden',
            pl: 'Zakończyć naukę teorii',
        },

        // Go to test
        goToTest: {
            ru: 'Перейти к тесту',
            ua: 'Перейти до тесту',
            en: 'Go to test',
            de: 'Zum Test gehen',
            pl: 'Przejdź do testu',
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

        // Confirm test
        confirmTest: {
            ru: 'Начать тест',
            ua: 'Розпочати тест',
            en: 'Start test',
            de: 'Test starten',
            pl: 'Rozpocznij test',
        },

        // Back to theory
        backToTheory: {
            ru: 'Вернуться к изучению теории',
            ua: 'Повернутися до вивчення теорії',
            en: 'Back to theory',
            de: 'Zurück zur Theorie',
            pl: 'Powrót do nauki teorii',
        },

        // variant: {
        //     ru: 'Вариант {{variant}}.',
        //     ua: 'Варіант {{variant}}.',
        //     en: 'Variant {{variant}}.',
        //     de: 'Variante {{variant}}.',
        //     pl: 'Wariant {{variant}}.',
        // },
    },
};
