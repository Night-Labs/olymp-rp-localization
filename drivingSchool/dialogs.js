import { driverLicenses } from './categories';

export default {
    categories: driverLicenses,

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
            de: 'Bitte wählen Sie die gewünschte Kategorie aus, damit ich Ihren Besitzstatus dieser Kategorie erfahren ka\n\n!',
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
            ru: 'Отлично! Я передала преподавателю информацию о вас, Категории {{category}}.\n\nТак как вы сдаёте впервые на эту категорию, перед началом вашего обучения я вам немного расскажу про то как будет проходить ваше обучения, для начала вы пройдёте теоретический курс, постарайтесь запомнить всё что там есть для того чтобы не провалить экзамен.\nНа теоретическом экзамене вам потребуется ответить на вопросы по темам которые были вашем теоретическом обучении, в случае успешного прохождения теоретического экзамена вы будите перенаправлены на практический экзамен.\nНа практическом экзамене вам выдадут транспорт для прохождения маршрута а наша инструкторша будет следить за тем чтобы вы делали всё без ошибок с соблюдением всех требований.\nВ случае успешного прохождения практического экзамена вам будут выдано официальное право управлять транспортом этой категории на {{days}} дней, после чего вы сможете обновить их абсолютно бесплатно пройдя тест повторно либо заплатив {{renewPrice}}.\n\nОбратите внимание - теоретическая часть является полностью бесплатной, но для начала теста вам нужно будет заплатить {{price}}, если вы провалите теоретическую либо практическую часть теста, деньги возвращены не будут.\nДля начала обучения проследуйте в класс находящийся справа от меня, там вас уже ожидает преподаватель, желаю вам удачи!',
            ua: "Чудово! Я передала викладачеві інформацію про вас, Категорія {{category}}.\n\nОскільки ви складаєте вперше на цю категорію, перед початком навчання я трохи розповім вам про те, як буде проходити навчання. Спочатку ви пройдете теоретичний курс, постарайтеся запам'ятати все, що там буде, щоб не провалити іспит.\nНа теоретичному іспиті вам потрібно буде відповісти на запитання з тем, які були у вашому теоретичному навчанні. У разі успішного проходження теоретичного іспиту вас буде направлено на практичний іспит.\nНа практичному іспиті вам нададуть транспорт для проходження маршруту, а наша інструкторка слідкуватиме за тим, щоб ви все виконували без помилок і з дотриманням усіх вимог.\nУ разі успішного проходження практичного іспиту вам буде видано офіційне право керувати транспортом цієї категорії на {{days}} днів. Після цього ви зможете оновити його абсолютно безкоштовно, повторно склавши тест або заплативши {{renewPrice}}.\n\nЗверніть увагу – теоретична частина є повністю безкоштовною, але для початку тесту вам потрібно буде сплатити {{price}}. Якщо ви провалите теоретичну або практичну частину тесту, гроші не повертаються.\nЩоб розпочати навчання, пройдіть у клас, що праворуч від мене, там вас уже чекає викладач. Бажаю вам успіху!",
            en: "Great! I've passed your information to the instructor for Category {{category}}.\n\nSince this is your first time applying for this category, before you begin training, I’ll briefly explain how the process works. First, you’ll go through a theoretical course—make sure to remember everything there so you don’t fail the exam.\nIn the theoretical exam, you'll need to answer questions based on topics covered in the theoretical training. If you pass, you'll proceed to the practical exam.\nIn the practical exam, you'll be given a vehicle to complete a route, and our instructor will monitor that you follow all the rules and make no mistakes.\nIf you successfully pass the practical exam, you’ll receive an official license to operate vehicles of this category for {{days}} days. After that, you can renew it for free by retaking the test or by paying {{renewPrice}}.\n\nPlease note – the theoretical part is completely free, but to start the test you need to pay {{price}}. If you fail either the theoretical or practical part, the payment is non-refundable.\nTo begin training, head to the classroom to my right. The instructor is already waiting for you. Good luck!",
            de: 'Super! Ich habe dem Ausbilder die Informationen über dich und die Kategorie {{category}} weitergeleitet.\n\nDa du diese Kategorie zum ersten Mal absolvieren, erkläre ich dir kurz, wie Ihre Ausbildung ablaufen wird. Zunächst absolvierst du einen Theoriekurs – versuche dir alles gut einzuprägen, um die Prüfung zu bestehen.\nIn der theoretischen Prüfung musst du Fragen zu den im Kurs behandelten Themen beantworten. Bei Bestehen wirst du zur praktischen Prüfung weitergeleitet.\nIn der praktischen Prüfung erhälst du ein Fahrzeug zur Absolvierung der Strecke, und unsere Ausbilderin wird darauf achten, dass du alle Anforderungen einhälst und keine Fehler machst.\nWenn du die praktische Prüfung bestehen, erhälst du die offizielle Erlaubnis, ein Fahrzeug dieser Kategorie für {{days}} Tage zu führen. Danach kannst du diese Berechtigung kostenlos durch Wiederholung des Tests oder gegen Zahlung von {{renewPrice}} verlängern.\n\nBeachte – der Theorieteil ist völlig kostenlos, aber um den Test zu beginnen, musst du {{price}} bezahlen. Wenn du den theoretischen oder praktischen Teil nicht bestehst, wird das Geld nicht zurückerstattet.\nUm mit der Ausbildung zu beginnen, gehe bitte in den Klassenraum zu meiner Rechten – der Ausbilder wartet bereits auf dich. Viel Erfolg!',
            pl: 'Świetnie! Przekazałam instruktorowi informacje o Tobie i kategorii {{category}}.\n\nPonieważ po raz pierwszy przystępujesz do tej kategorii, zanim rozpoczniesz szkolenie, krótko opowiem Ci, jak będzie ono przebiegać. Najpierw przejdziesz kurs teoretyczny – postaraj się zapamiętać wszystko, co tam będzie, aby nie oblać egzaminu.\nNa egzaminie teoretycznym będziesz musiał odpowiedzieć na pytania dotyczące tematów omawianych podczas kursu teoretycznego. Jeśli zdasz, zostaniesz skierowany na egzamin praktyczny.\nNa egzaminie praktycznym otrzymasz pojazd do pokonania trasy, a nasza instruktorka będzie czuwać, byś wykonał wszystko bezbłędnie i zgodnie z wymaganiami.\nW przypadku pomyślnego zdania egzaminu praktycznego otrzymasz oficjalne prawo do prowadzenia pojazdu tej kategorii na {{days}} dni. Następnie możesz je odnowić całkowicie za darmo, ponownie przystępując do testu lub płacąc {{renewPrice}}.\n\nUwaga – część teoretyczna jest całkowicie bezpłatna, ale aby rozpocząć test, musisz zapłacić {{price}}. Jeśli nie zdasz części teoretycznej lub praktycznej, pieniądze nie zostaną zwrócone.\nAby rozpocząć szkolenie, udaj się do sali po mojej prawej stronie – instruktor już na Ciebie czeka. Powodzenia!',
        },

        // Start study renew
        startStudyRenew: {
            ru: 'Отлично! Я передала преподавателю информацию о вас, Категории {{category}}.\n\nУверенна вы уже знаете что делать, однако желаю вам удачи!',
            ua: 'Чудово! Я передала викладачеві інформацію про вас, Категорія {{category}}.\n\nВпевнена, ви вже знаєте, що робити, але бажаю вам успіху!',
            en: "Great! I've passed your information to the instructor for Category {{category}}.\n\nI'm sure you already know what to do, but I still wish you good luck!",
            de: 'Super! Ich habe dem Ausbilder die Informationen über dich und die Kategorie {{category}} weitergeleitet.\n\nIch bin sicher, du weißt bereits, was zu tun ist – trotzdem wünsche ich dir viel Glück!',
            pl: 'Świetnie! Przekazałam instruktorowi informacje o Tobie i kategorii {{category}}.\n\nJestem pewna, że już wiesz, co robić, ale mimo to życzę powodzenia!',
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

        run: {
            ru: 'Уже бегу!',
            ua: 'Вже біжу!',
            en: 'On my way!',
            de: 'Bin schon unterwegs!',
            pl: 'Już biegnę!',
        },
    },
};
