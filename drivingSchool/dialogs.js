import { driverLicenses } from './categories';

export default {
    ...driverLicenses,

    // Start
    start: {
        ru: 'Приветствуем вас в автошколе нашего штата!\n\nЗдесь вы сможете пройти теоретическую и практическую подготовку по вождению всех видов транспорта, а затем получить официальное водительское удостоверение соответствующей категории.\n\nВедь без прав управлять транспортом запрещено... Вы не знали?',
        ua: 'Вітаємо вас в автошколі нашого штату!\n\nТут ви зможете пройти теоретичну та практичну підготовку з водіння всіх видів транспорту, а потім отримати офіційне водійське посвідчення відповідної категорії.\n\nАдже без прав керувати транспортом заборонено... Ви не знали?',
        en: "Welcome to our state's driving school!\n\nHere you can complete theoretical and practical training for driving all types of vehicles, and then obtain an official driver's license of the corresponding category.\n\nAfter all, driving without a license is prohibited... Didn't you know?",
        de: 'Willkommen in der Fahrschule unseres Staates!\n\nHier kö\n\nen Sie eine theoretische und praktische Ausbildung für das Fahren aller Arten von Fahrzeugen absolvieren und anschließend einen offiziellen Führerschein der entsprechenden Kategorie erhalten.\n\nSchließlich ist das Fahren ohne Führerschein verboten... Wussten Sie das nicht?',
        pl: 'Witamy w szkole nauki jazdy naszego stanu!\n\nTutaj możesz ukończyć szkolenie teoretyczne i praktyczne z prowadzenia wszystkich typów pojazdów, a następnie uzyskać oficjalne prawo jazdy odpowiedniej kategorii.\n\nPrzecież jazda bez prawa jazdy jest zabroniona... Nie wiedziałeś?',
    },

    // Select category
    selectCategory: {
        ru: 'Пожалуйста выберите желаемую категорию, чтобы я узнала о вашем статусе владения этой категорией!',
        ua: 'Будь ласка, оберіть бажану категорію, щоб я дізналася про ваш статус володіння цією категорією!',
        en: 'Please select the desired category so I can learn about your ownership status of this category!',
        de: 'Bitte wählen Sie die gewünschte Kategorie aus, damit ich Ihren Besitzstatus dieser Kategorie erfahren ka\n\n!',
        pl: 'Proszę wybrać żądaną kategorię, abym mogła dowiedzieć się o Twoim statusie posiadania tej kategorii!',
    },

    // Selected category
    // No license
    selectedCategoryNoLicense: {
        ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас нет прав этой категории, вы хотите начать обучение?',
        ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас немає ліцензії на цю категорію, ви хочете розпочати навчання?',
        en: "I checked your category status {{category}}\n\nYou don't have a license for this category, do you want to start training?",
        de: 'Ich habe Ihren Kategorienstatus {{category}} überprüft.\n\nSie haben keine Lizenz für diese Kategorie, möchten Sie eine Schulung begi\n\nen?',
        pl: 'Sprawdziłam Twój status kategorii {{category}}\n\nNie masz licencji na tę kategorię, czy chcesz rozpocząć szkolenie?',
    },
    // Have license
    selectedCategoryHaveLicense: {
        ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас есть права этой категории и они действительны до {{expire}}, после чего вам вам нужно будет обновить их, вы сможете сделать это у нас абсолютно бесплатно пройдя тест и практику снова, либо пропустить это заплатив {{price}}',
        ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас є права цієї категорії, і вони дійсні до {{expire}}, після чого вам потрібно буде оновити їх. Ви зможете зробити це у нас абсолютно безкоштовно, пройшовши тест і практику знову, або пропустити це, заплативши {{price}}',
        en: 'I have checked your {{category}} category status.\n\nYou have rights for this category, and they are valid until {{expire}}, after which you will need to renew them. You can do this with us absolutely free by passing the test and practice again, or skip it by paying {{price}}',
        de: 'Ich habe Ihren Status für die Kategorie {{category}} überprüft.\n\nSie haben Rechte für diese Kategorie, und diese sind bis zum {{expire}} gültig. Danach müssen Sie diese erneuern. Sie kö\n\nen dies bei uns absolut kostenlos tun, indem Sie den Test und die Praxis erneut absolvieren, oder es überspringen, indem Sie {{price}} bezahlen.',
        pl: 'Sprawdziłam Twój status kategorii {{category}}.\n\nMasz uprawnienia do tej kategorii i są one ważne do {{expire}}, po czym będziesz musiał je odnowić. Możesz to zrobić u nas całkowicie za darmo, ponownie zdając test i praktykę, lub pominąć to, płacąc {{price}}',
    },
    // Expired license
    selectedCategoryExpiredLicense: {
        ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас есть права этой категории, но они истекли 14.88.2077, вы можете обновить их абсолютно бесплатно пройдя тест и практику снова, либо пропустить это заплатив {{price}}$',
        ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас є права цієї категорії, але вони закінчилися 14.88.2077, ви можете оновити їх абсолютно безкоштовно, пройшовши тест і практику знову, або пропустити це, заплативши {{price}}$',
        en: 'I have checked your {{category}} category status.\n\nYou have rights for this category, but they expired on 14.88.2077. You can renew them completely free by taking the test and practice again, or skip this by paying {{price}}$.',
        de: 'Ich habe Ihren Status für die Kategorie {{category}} überprüft.\n\nSie haben Rechte für diese Kategorie, aber diese sind am 14.88.2077 abgelaufen. Sie kö\n\nen diese absolut kostenlos erneuern, indem Sie den Test und die Praxis erneut absolvieren, oder dies überspringen, indem Sie {{price}}$ bezahlen.',
        pl: 'Sprawdziłam Twój status w kategorii {{category}}.\n\nPosiadasz uprawnienia do tej kategorii, ale wygasły one 14.88.2077. Możesz je odnowić całkowicie za darmo, ponownie zdając test i praktykę, lub pominąć to, płacąc {{price}}$.',
    },

    // Buttons
    goodbye: {
        ru: 'Мне это пока не интересно',
        ua: 'Мені це поки не цікаво',
        en: "I'm not interested in this for now",
        de: 'Das interessiert mich im Moment nicht',
        pl: 'Na razie mnie to nie interesuje',
    },

    continue: {
        ru: 'Подробнее',
        ua: 'Детальніше',
        en: 'Read more',
        de: 'Mehr erfahren',
        pl: 'Więcej',
    },

    startStudy: {
        ru: 'Начать обучение',
        ua: 'Розпочати навчання',
        en: 'Start learning',
        de: 'Lernen begi\n\nen',
        pl: 'Rozpocznij naukę',
    },

    renewForTest: {
        ru: 'Продлить пройдя тест',
        ua: 'Продовжити, пройшовши тест',
        en: 'Renew by taking a test',
        de: 'Verlängern durch einen Test',
        pl: 'Przedłużyć, zdając test',
    },

    renewForPrice: {
        ru: 'Продлить за {{price}}',
        ua: 'Продовжити за {{price}}',
        en: 'Renew for {{price}}',
        de: 'Verlängern für {{price}}',
        pl: 'Przedłużyć za {{price}}',
    },
};
