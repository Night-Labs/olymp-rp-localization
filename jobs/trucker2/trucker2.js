import { cef } from './cef';

export const trucker2 = {
    ...cef,

    trucker: {
        ru: 'Дальнобойщик',
        ua: 'Далекобійник',
        en: 'Trucker',
        de: 'Trucker',
        pl: 'Kierowca ciężarówki',
    },

    trailer: {
        ru: 'Трейлер с грузом',
        ua: 'Трейлер з вантажем',
        en: 'Trailer with cargo',
        de: 'Anhänger mit Ladung',
        pl: 'Przyczepa z ładunkiem',
    },

    gotJob: {
        ru: 'Вы устроились на работу, отправляйтесь за трейлером.',
        ua: 'Ви влаштувалися на роботу, відправляйтеся за трейлером.',
        en: 'You got the job, go get the trailer.',
        de: 'Sie haben den Job bekommen, holen Sie den Anhänger ab.',
        pl: 'Dostałeś pracę, idź po przyczepę.',
    },

    leaveJob: {
        ru: 'Вы успешно уволились с работы',
        ua: 'Ви успішно звільнилися з роботи',
        en: 'You have successfully left the job',
        de: 'Sie haben erfolgreich den Job verlassen',
        pl: 'Pomyślnie zrezygnowałeś z pracy',
    },

    notifyAttachTrailer: {
        ru: 'Вы забрали трейлер с грузом, отправляйтесь на конечную точку.',
        ua: 'Ви забрали трейлер з вантажем, відправляйтеся до кінцевої точки.',
        en: 'You have picked up the trailer with cargo, proceed to the destination.',
        de: 'Sie haben den Anhänger mit Ladung abgeholt, fahren Sie zum Zielort.',
        pl: 'Zabrałeś przyczepę z ładunkiem, udaj się do punktu docelowego.',
    },

    notifyDetachTrailer: {
        ru: 'Вы оставили трейлер с грузом, заберите его перед тем как продолжить маршрут.',
        ua: 'Ви залишили причіп з вантажем, заберіть його, перш ніж продовжувати маршрут.',
        en: 'You have left a trailer with cargo, please take it before continuing your route.',
        de: 'Sie haben einen Anhänger mit Ladung zurückgelassen. Bitte nehmen Sie ihn mit, bevor Sie Ihre Route fortsetzen.',
        pl: 'Zostawiłeś przyczepę z ładunkiem, zabierz go przed kontynuowaniem trasy.',
    },

    endPoint: {
        ru: 'Точка доставки',
        ua: 'Точка доставки',
        en: 'Delivery point',
        de: 'Lieferpunkt',
        pl: 'Punkt dostawy',
    },

    notifyDeliveredTrailer: {
        ru: 'Вы доставили трейлер с грузом и заработали {{salary}} отправляйтесь на следующий заказ.',
        ua: 'Ви доставили трейлер з вантажем і заробили {{salary}} відправляйтеся на наступне замовлення.',
        en: 'You have delivered the trailer with cargo and earned {{salary}}, proceed to the next order.',
        de: 'Sie haben den Anhänger mit Ladung geliefert und {{salary}} verdient, machen Sie weiter mit dem nächsten Auftrag.',
        pl: 'Dostarczyłeś przyczepę z ładunkiem i zarobiłeś {{salary}}, przejdź do następnego zamówienia.',
    },

    notifyDeliveredTrailer2: {
        ru: 'Вы доставили трейлер с грузом и заработали {{salary}} + {{addSalary}} за дополнительные задания. Отправляйтесь на следующий заказ.',
        ua: 'Ви доставили трейлер з вантажем і заробили {{salary}} + {{addSalary}} за додаткові завдання. Вирушайте на наступне замовлення.',
        en: 'You delivered the trailer with cargo and earned {{salary}} + {{addSalary}} for additional tasks. Proceed to the next order.',
        de: 'Sie haben den Anhänger mit Fracht geliefert und {{salary}} + {{addSalary}} für zusätzliche Aufgaben verdient. Gehen Sie zum nächsten Auftrag über.',
        pl: 'Dostarczyłeś przyczepę z ładunkiem i zarobiłeś {{salary}} + {{addSalary}} za dodatkowe zadania. Przejdź do następnego zamówienia.',
    },

    interactionDeliverTrailer: {
        ru: 'Доставить трейлер',
        ua: 'Доставити трейлер',
        en: 'Deliver trailer',
        de: 'Anhänger liefern',
        pl: 'Dostarczyć przyczepę',
    },

    notifyOverworked: {
        ru: 'Извините, но на данный момент на этой работе работает слишком много людей ({{count}}), пожалуйста подождите пока кто-то из них закончит работу.',
        ua: 'Вибачте, але на даний момент на цій роботі працює занадто багато людей ({{count}}), будь ласка, зачекайте, поки хтось із них закінчить роботу.',
        en: 'Sorry, but at the moment there are too many people working on this job ({{count}}), please wait until someone finishes their work.',
        de: 'Entschuldigung, aber im Moment arbeiten zu viele Personen an dieser Arbeit ({{count}}), bitte warten Sie, bis jemand seine Arbeit beendet hat.',
        pl: 'Przepraszamy, ale w tej chwili zbyt wiele osób pracuje przy tej pracy ({{count}}), proszę poczekać, aż ktoś ją zakończy.',
    },

    youCantEnterVehicle: {
        ru: 'Это не ваш рабочий транспорт',
        ua: 'Це не ваш робочий транспорт',
        en: 'This is not your work vehicle',
        de: 'Dies ist nicht Ihr Arbeitsfahrzeug',
        pl: 'To nie jest twój pojazd służbowy',
    },

    youLeaveVehicle: {
        ru: 'Вы покинули рабочий транспорт, у вас есть 5 минут чтобы вернуться в него, иначе вы будите уволены.',
        ua: 'Ви залишили робочий транспорт, у вас є 5 хвилин, щоб повернутися в нього, інакше вас буде звільнено.',
        en: 'You have left the work vehicle, you have 5 minutes to return to it, or you will be fired.',
        de: 'Sie haben das Arbeitsfahrzeug verlassen, Sie haben 5 Minuten Zeit, um zurückzukehren, sonst werden Sie entlassen.',
        pl: 'Opuściłeś pojazd roboczy, masz 5 minut na powrót do niego, w przeciwnym razie zostaniesz zwolniony.',
    },

    yourJobVehicle: {
        ru: 'Ваша рабочая машина',
        ua: 'Ваша робоча машина',
        en: 'Your job vehicle',
        de: 'Ihr Arbeitsfahrzeug',
        pl: 'Twój pojazd służbowy',
    },

    youHaveReturnedToVehicle: {
        ru: 'Вы вернулись в рабочий транспорт',
        ua: 'Ви повернулися у робочий транспорт',
        en: 'You have returned to the work vehicle',
        de: 'Sie sind zum Arbeitsfahrzeug zurückgekehrt',
        pl: 'Wróciłeś do pojazdu służbowego',
    },

    youBeenFired: {
        ru: 'Вы уволены, так как покинули свой рабочий транспорт на продолжительное время',
        ua: 'Ви звільнені, оскільки покинули свій робочий транспорт на тривалий час',
        en: 'You have been fired for leaving your work vehicle unattended for an extended period',
        de: 'Sie wurden entlassen, weil Sie Ihr Arbeitsfahrzeug längere Zeit unbeaufsichtigt gelassen haben',
        pl: 'Zostałeś zwolniony za zostawienie pojazdu służbowego bez opieki przez dłuższy czas',
    },

    ordersTypes: {
        product: {
            ru: 'товар',
            ua: 'товар',
            en: 'product',
            de: 'Produkt',
            pl: 'produkt',
        },
        petrol: {
            ru: 'бензин',
            ua: 'бензин',
            en: 'petrol',
            de: 'Benzin',
            pl: 'benzyna',
        },
        vehicles: {
            ru: 'транспорт',
            ua: 'транспорт',
            en: 'vehicles',
            de: 'Fahrzeuge',
            pl: 'pojazdy',
        },
    },

    tasks: {
        goToTrailer: {
            ru: 'Отправляйтесь за трейлером и подцепите его.',
            ua: 'Відправляйтеся за трейлером і підчепіть його.',
            en: 'Go to the trailer and hitch it up.',
            de: 'Fahren Sie zum Anhänger und hängen Sie ihn an.',
            pl: 'Udaj się do przyczepy i przyczep ją.',
        },

        goToEndPoint: {
            ru: 'Отправляйтесь на конечную точку и припаркуйте трейлер.',
            ua: 'Відправляйтеся до кінцевої точки і припаркуйте трейлер.',
            en: 'Go to the final destination and park the trailer.',
            de: 'Fahren Sie zum Endpunkt und parken Sie den Anhänger.',
            pl: 'Udaj się do punktu docelowego i zaparkuj przyczepę.',
        },

        safeDriving: {
            ru: 'Доставьте груз целым',
            ua: 'Доставте вантаж цілим',
            en: 'Deliver the cargo intact',
            de: 'Liefern Sie die Fracht unbeschädigt',
            pl: 'Dostarcz ładunek w nienaruszonym stanie',
        },

        detachLimit: {
            ru: 'Не отцепляйте трейлер',
            ua: 'Не відчіплюйте трейлер',
            en: 'Do not detach the trailer',
            de: 'Trennen Sie den Anhänger nicht ab',
            pl: 'Nie odłączaj przyczepy',
        },

        speedLimit: {
            ru: 'Не превышайте скорость {{km}} км/ч',
            ua: 'Не перевищуйте швидкість {{km}} км/год',
            en: 'Do not exceed the speed limit of {{km}} km/h',
            de: 'Überschreiten Sie nicht die Geschwindigkeitsbegrenzung von {{km}} km/h',
            pl: 'Nie przekraczaj ograniczenia prędkości {{km}} km/h',
        },

        fastDelivery: {
            ru: 'Быстрая доставка',
            ua: 'Швидка доставка',
            en: 'Fast Delivery',
            de: 'Schnelle Lieferung',
            pl: 'Szybka dostawa',
        },

        timeRemaining: {
            ru: 'осталось: {{time}}',
            ua: 'залишилося: {{time}}',
            en: 'time remaining: {{time}}',
            de: 'verbleibende Zeit: {{time}}',
            pl: 'czas pozostały: {{time}}',
        },

        fastParking: {
            ru: 'Быстрая парковка',
            ua: 'Швидке паркування',
            en: 'Fast parking',
            de: 'Schnelles Parken',
            pl: 'Szybkie parkowanie',
        },

        waitForParking: {
            ru: 'Таймер будет запущен при подъезде к парковке',
            ua: 'Таймер буде запущений при підїзді до парковки',
            en: 'The timer will start when approaching the parking lot',
            de: 'Der Timer startet beim Anfahren des Parkplatzes',
            pl: 'Licznik rozpocznie się podczas zbliżania się do parkingu',
        },

        trafficRules: {
            ru: 'Не нарушайте правила дорожного движения',
            ua: 'Не порушуйте правила дорожнього руху',
            en: 'Do not violate traffic rules',
            de: 'Verstoßen Sie nicht gegen die Verkehrsregeln',
            pl: 'Nie łam zasad ruchu drogowego',
        },
    },
};
