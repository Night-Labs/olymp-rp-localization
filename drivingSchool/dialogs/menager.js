import { drivingLicensesCategories } from '../../drivingLicenses/categories';

export default {
    categories: drivingLicensesCategories,

    messages: {
        // Start
        start: {
            ru: 'Приветствуем вас в автошколе нашего штата!\n\nЗдесь вы сможете пройти теоретическую и практическую подготовку по вождению всех видов транспорта, а затем получить официальное водительское удостоверение соответствующей категории.\n\nВедь без прав управлять транспортом запрещено... Вы не знали?',
            ua: 'Вітаємо вас в автошколі нашого штату!\n\nТут ви зможете пройти теоретичну та практичну підготовку з водіння всіх видів транспорту, а потім отримати офіційне водійське посвідчення відповідної категорії.\n\nАдже без прав керувати транспортом заборонено... Ви не знали?',
            en: "Welcome to our state's driving school!\n\nHere you can complete theoretical and practical training for driving all types of vehicles, and then obtain an official driver's license of the corresponding category.\n\nAfter all, driving without a license is prohibited... Didn't you know?",
            de: 'Willkommen in der Fahrschule unseres Staates!\n\nHier kannst\n\n du eine theoretische und praktische Ausbildung für das Fahren aller Arten von Fahrzeugen absolvieren und anschließend einen offiziellen Führerschein der entsprechenden Kategorie erhalten.\n\nSchließlich ist das Fahren ohne Führerschein verboten... Wusstest du das nicht?',
            pl: 'Witamy w szkole nauki jazdy naszego stanu!\n\nTutaj możesz ukończyć szkolenie teoretyczne i praktyczne z prowadzenia wszystkich typów pojazdów, a następnie uzyskać oficjalne prawo jazdy odpowiedniej kategorii.\n\nPrzecież jazda bez prawa jazdy jest zabroniona... Nie wiedziałeś?',
        },

        // Select category
        selectCategory: {
            ru: 'Пожалуйста выберите желаемую категорию, чтобы я узнала о вашем статусе владения этой категорией!',
            ua: 'Будь ласка, оберіть бажану категорію, щоб я дізналася про ваш статус володіння цією категорією!',
            en: 'Please select the desired category so I can learn about your ownership status of this category!',
            de: 'Bitte wähle die gewünschte Kategorie aus, damit ich deinen Besitzstatus dieser Kategorie erfahren kann!',
            pl: 'Proszę wybrać żądaną kategorię, abym mogła dowiedzieć się o Twoim statusie posiadania tej kategorii!',
        },

        // Selected category
        // No license
        selectedCategoryNoLicense: {
            ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас нет прав этой категории, Стоимость этой категории {{price}}, Вы хотите начать обучение?',
            ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас немає прав цієї категорії, Вартість цієї категорії {{price}}, Бажаєте розпочати навчання?',
            en: 'I checked your status for category {{category}}\n\nYou do not have a license for this category, The cost of this category is {{price}}, Would you like to start training?',
            de: 'Ich habe Ihren Status für die Kategorie {{category}} überprüft\n\nSie haben keine Berechtigung für diese Kategorie, Die Kosten für diese Kategorie betragen {{price}}, Möchten Sie mit der Schulung beginnen?',
            pl: 'Sprawdziłam Twój status dla kategorii {{category}}\n\nNie masz uprawnień do tej kategorii, Koszt tej kategorii to {{price}}, Czy chcesz rozpocząć szkolenie?',
        },
        // Has license
        selectedCategoryHasLicense: {
            ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас есть права этой категории и они действительны до {{expire}}, после чего вам вам нужно будет обновить их, вы сможете сделать это у нас абсолютно бесплатно пройдя тест и практику снова, либо пропустить это заплатив {{price}}',
            ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас є права цієї категорії, і вони дійсні до {{expire}}, після чого вам потрібно буде оновити їх. Ви зможете зробити це у нас абсолютно безкоштовно, пройшовши тест і практику знову, або пропустити це, заплативши {{price}}',
            en: 'I have checked your {{category}} category status.\n\nYou have rights for this category, and they are valid until {{expire}}, after which you will need to renew them. You can do this with us absolutely free by passing the test and practice again, or skip it by paying {{price}}',
            de: 'Ich habe deinen Status für die Kategorie {{category}} überprüft.\n\nDu hast Rechte für diese Kategorie, und diese sind bis zum {{expire}} gültig. Danach musst du diese erneuern. du kannst\n\n dies bei uns absolut kostenlos tun, indem du den Test und die Praxis erneut absolvieren, oder es überspringen, indem du {{price}} bezahlst.',
            pl: 'Sprawdziłam Twój status kategorii {{category}}.\n\nMasz uprawnienia do tej kategorii i są one ważne do {{expire}}, po czym będziesz musiał je odnowić. Możesz to zrobić u nas całkowicie za darmo, ponownie zdając test i praktykę, lub pominąć to, płacąc {{price}}',
        },
        // Expired license
        selectedCategoryExpiredLicense: {
            ru: 'Я проверила ваш статус категории {{category}}\n\nУ вас есть права этой категории, но они истекли 14.88.2077, вы можете обновить их абсолютно бесплатно пройдя тест и практику снова, либо пропустить это заплатив {{price}}$',
            ua: 'Я перевірила ваш статус категорії {{category}}\n\nУ вас є права цієї категорії, але вони закінчилися 14.88.2077, ви можете оновити їх абсолютно безкоштовно, пройшовши тест і практику знову, або пропустити це, заплативши {{price}}$',
            en: 'I have checked your {{category}} category status.\n\nYou have rights for this category, but they expired on 14.88.2077. You can renew them completely free by taking the test and practice again, or skip this by paying {{price}}$.',
            de: 'Ich habe deinen Status für die Kategorie {{category}} überprüft.\n\nDu hast Rechte für diese Kategorie, aber diese sind am 14.88.2077 abgelaufen. Du kannst\n\n diese absolut kostenlos erneuern, indem du den Test und die Praxis erneut absolvieren, oder dies überspringen, indem du {{price}}$ bezahlst.',
            pl: 'Sprawdziłam Twój status w kategorii {{category}}.\n\nPosiadasz uprawnienia do tej kategorii, ale wygasły one 14.88.2077. Możesz je odnowić całkowicie za darmo, ponownie zdając test i praktykę, lub pominąć to, płacąc {{price}}$.',
        },

        // Start study first time
        startStudyFirstTime: {
            ru: 'Отлично! Я передала преподавателю информацию о вас, Категория {{category}}.\n\nДля начала обучения проследуйте в класс находящийся справа от меня, там вас уже ожидает преподаватель, желаю вам удачи!',
            ua: 'Чудово! Я передала викладачу інформацію про вас, Категорія {{category}}.\n\nДля початку навчання пройдіть до класу, що знаходиться праворуч від мене — там вас уже чекає викладач. Бажаю вам успіхів!',
            en: 'Great! I’ve passed your information to the teacher, Category {{category}}.\n\nTo begin your studies, please proceed to the classroom to my right. The teacher is already waiting for you there. Good luck!',
            de: 'Super! Ich habe dem Lehrer die Informationen über Sie weitergegeben, Kategorie {{category}}.\n\nGehen Sie für den Unterrichtsbeginn bitte in das Klassenzimmer rechts von mir. Der Lehrer erwartet Sie dort bereits. Viel Erfolg!',
            pl: 'Świetnie! Przekazałam nauczycielowi informacje o Tobie, Kategoria {{category}}.\n\nAby rozpocząć naukę, przejdź do sali po mojej prawej stronie — nauczyciel już tam na Ciebie czeka. Powodzenia!',
        },

        // Start study renew
        startStudyRenew: {
            ru: 'Отлично! Я передала преподавателю информацию о вас, Категории {{category}}.\n\nУверенна вы уже знаете что делать, однако желаю вам удачи!',
            ua: 'Чудово! Я передала викладачеві інформацію про вас, Категорія {{category}}.\n\nВпевнена, ви вже знаєте, що робити, але бажаю вам успіху!',
            en: "Great! I've passed your information to the instructor for Category {{category}}.\n\nI'm sure you already know what to do, but I still wish you good luck!",
            de: 'Super! Ich habe dem Ausbilder die Informationen über dich und die Kategorie {{category}} weitergeleitet.\n\nIch bin sicher, du weißt bereits, was zu tun ist – trotzdem wünsche ich dir viel Glück!',
            pl: 'Świetnie! Przekazałam instruktorowi informacje o Tobie i kategorii {{category}}.\n\nJestem pewna, że już wiesz, co robić, ale mimo to życzę powodzenia!',
        },

        // Already study
        alreadyStudying: {
            ru: 'У вас уже есть активный курс обучению категории {{category}}.\n\nВы можете продолжить его, либо отменить и начать другой если хотите.',
            ua: 'У вас вже є активний курс навчання категорії {{category}}.\n\nВи можете продовжити його, або скасувати та розпочати інший, якщо бажаєте.',
            en: 'You already have an active course in the {{category}} category.\n\nYou can continue it, or cancel and start another if you wish.',
            de: 'Sie haben bereits einen aktiven Kurs in der Kategorie {{category}}.\n\nSie können ihn fortsetzen oder abbrechen und einen anderen beginnen, wenn Sie möchten.',
            pl: 'Masz już aktywny kurs w kategorii {{category}}.\n\nMożesz go kontynuować lub anulować i rozpocząć inny, jeśli chcesz.',
        },
    },

    buttons: {
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

        backToCategories: {
            ru: 'Вернуться к категориям',
            ua: 'Повернутися до категорій',
            en: 'Back to categories',
            de: 'Zurück zu den Kategorien',
            pl: 'Wróć do kategorii',
        },

        startStudy: {
            ru: 'Начать обучение',
            ua: 'Розпочати навчання',
            en: 'Start learning',
            de: 'Lernen begien',
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

        run: {
            ru: 'Уже бегу!',
            ua: 'Вже біжу!',
            en: 'On my way!',
            de: 'Bin schon unterwegs!',
            pl: 'Już biegnę!',
        },

        cancelCurrentStudy: {
            ru: 'Отменить текущий курс',
            ua: 'Відмінити поточний курс',
            en: 'Cancel current study',
            de: 'Aktuellen Kurs abbrechen',
            pl: 'Anuluj bieżący kurs',
        },

        continueCurrentStudy: {
            ru: 'Продолжить текущий курс',
            ua: 'Продовжити поточний курс',
            en: 'Continue current course',
            de: 'Aktuellen Kurs fortsetzen',
            pl: 'Kontynuuj bieżący kurs',
        },
    },
};
