import dialogs from './dialogs';

export default {
    dialogs,

    distance: {
        ru: 'Расстояние',
        ua: 'Відстань',
        en: 'Distance',
        de: 'Entfernung',
        pl: 'Odległość',
    },

    // Locations
    locations: {
        startPoint: {
            ru: 'Начальная точка',
            ua: 'Початкова точка',
            en: 'Starting point',
            de: 'Startpunkt',
            pl: 'Punkt początkowy',
        },
        currentLocation: {
            ru: 'Вы сейчас',
            ua: 'Ви зараз',
            en: 'You are here',
            de: 'Sie sind hier',
            pl: 'Jesteś tutaj',
        },
        clientPoint: {
            ru: 'Местонахождение клиента',
            ua: 'Місцезнаходження клієнта',
            en: 'Client location',
            de: 'Standort des Kunden',
            pl: 'Lokalizacja klienta',
        },
        intermediatePoint: {
            ru: 'Промежуточная точка',
            ua: 'Проміжна точка',
            en: 'Intermediate point',
            de: 'Zwischenstopp',
            pl: 'Punkt pośredni',
        },
        destinationPoint: {
            ru: 'Точка назначения',
            ua: 'Пункт призначення',
            en: 'Destination point',
            de: 'Zielort',
            pl: 'Punkt docelowy',
        },
        notSelected: {
            ru: 'Не выбрано',
            ua: 'Не вибрано',
            en: 'Not selected',
            de: 'Nicht ausgewählt',
            pl: 'Nie wybrano',
        },
    },

    taxi: {
        ru: 'Такси',
        ua: 'Таксі',
        en: 'Taxi',
        de: 'Taxi',
        pl: 'Taksówka',
    },

    taxiDriver: {
        ru: 'Водитель такси',
        ua: 'Водій таксі',
        en: 'Taxi driver',
        de: 'Taxifahrer',
        pl: 'Kierowca taksówki',
    },

    taxiJob: {
        ru: 'Работа в такси',
        ua: 'Робота в таксі',
        en: 'Taxi job',
        de: 'Arbeit im Taxi',
        pl: 'Praca w taksówce',
    },

    shiftStarted: {
        ru: 'Вы начали смену',
        ua: 'Ви розпочали зміну',
        en: 'You started the shift',
        de: 'Sie haben die Schicht begonnen',
        pl: 'Rozpocząłeś zmianę',
    },

    shiftEnded: {
        ru: 'Вы закончили смену',
        ua: 'Ви завершили зміну',
        en: 'You ended the shift',
        de: 'Sie haben die Schicht beendet',
        pl: 'Zakończyłeś zmianę',
    },

    newClientOrder: {
        ru: 'Новый заказ на {{money}} класса {{class}} от {{name}}',
        ua: 'Нове замовлення на {{money}} класу {{class}} від {{name}}',
        en: 'New order for {{money}} of class {{class}} from {{name}}',
        de: 'Neue Bestellung über {{money}} der Klasse {{class}} von {{name}}',
        pl: 'Nowe zamówienie na {{money}} klasy {{class}} od {{name}}',
    },

    toPickupTask: {
        ru: 'Отправьтесь к местоположению клиента',
        ua: 'Вирушайте до місцезнаходження клієнта',
        en: "Head to the client's location",
        de: 'Begeben Sie sich zum Standort des Kunden',
        pl: 'Udaj się do lokalizacji klienta',
    },

    waitForClientTask: {
        ru: 'Дождитесь, пока клиент сядет в машину',
        ua: 'Дочекайтеся, поки клієнт сяде в машину',
        en: 'Wait until the client gets into the car',
        de: 'Warten Sie, bis der Kunde ins Auto einsteigt',
        pl: 'Poczekaj, aż klient wsiądzie do samochodu',
    },

    toDestinationTask: {
        ru: 'Отправьтесь на точку назначения',
        ua: 'Вирушайте до точки призначення',
        en: 'Head to the destination point',
        de: 'Begeben Sie sich zum Zielort',
        pl: 'Udaj się do punktu docelowego',
    },

    clientLeftCallZone: {
        ru: 'Вы покинули зону ожидания такси. Заказ был отменен.',
        ua: 'Ви покинули зону очікування таксі. Замовлення було скасовано.',
        en: 'You left the taxi waiting area. The order was canceled.',
        de: 'Sie haben den Wartebereich für das Taxi verlassen. Die Bestellung wurde storniert.',
        pl: 'Opuściłeś strefę oczekiwania na taksówkę. Zamówienie zostało anulowane.',
    },

    clientLeftCallZoneDriver: {
        ru: 'Клиент покинул зону ожидания такси. Заказ был отменен.',
        ua: 'Клієнт покинув зону очікування таксі. Замовлення було скасовано.',
        en: 'The client left the taxi waiting area. The order was canceled.',
        de: 'Der Kunde hat den Wartebereich für das Taxi verlassen. Die Bestellung wurde storniert.',
        pl: 'Klient opuścił strefę oczekiwania na taksówkę. Zamówienie zostało anulowane.',
    },

    yourOrderAccepted: {
        ru: 'Ваш заказ принял {{driverName}}, ожидайте его прибытия.',
        ua: 'Ваше замовлення прийняв {{driverName}}, очікуйте на його прибуття.',
        en: 'Your order has been accepted by {{driverName}}, please wait for their arrival.',
        de: 'Ihre Bestellung wurde von {{driverName}} angenommen, bitte warten Sie auf seine Ankunft.',
        pl: 'Twoje zamówienie zostało przyjęte przez {{driverName}}, prosimy czekać na jego przybycie.',
    },

    yourOrderCompleted: {
        ru: 'Ваш заказ успешно выполнен водителем {{driverName}}',
        ua: 'Ваше замовлення успішно виконане водієм {{driverName}}',
        en: 'Your order has been successfully completed by driver {{driverName}}',
        de: 'Ihre Bestellung wurde erfolgreich von Fahrer {{driverName}} ausgeführt',
        pl: 'Twoje zamówienie zostało pomyślnie zrealizowane przez kierowcę {{driverName}}',
    },

    orderCanceledByU: {
        ru: 'Вы отменили заказ',
        ua: 'Ви скасували замовлення',
        en: 'You canceled the order',
        de: 'Sie haben die Bestellung storniert',
        pl: 'Anulowałeś zamówienie',
    },

    orderCanceledByDriver: {
        ru: 'Заказ был отменен водителем {{driverName}}',
        ua: 'Замовлення було скасоване водієм {{driverName}}',
        en: 'The order was canceled by driver {{driverName}}',
        de: 'Die Bestellung wurde vom Fahrer {{driverName}} storniert',
        pl: 'Zamówienie zostało anulowane przez kierowcę {{driverName}}',
    },

    orderCanceledByClient: {
        ru: 'Заказ был отменен клиентом {{clientName}}',
        ua: 'Замовлення було скасоване клієнтом {{clientName}}',
        en: 'The order was canceled by client {{clientName}}',
        de: 'Die Bestellung wurde vom Kunden {{clientName}} storniert',
        pl: 'Zamówienie zostało anulowane przez klienta {{clientName}}',
    },

    driverArrived: {
        ru: 'Ваш водитель прибыл, автомобиль {{vehicleName}} номер {{vehicleNumber}}',
        ua: 'Ваш водій прибув, автомобіль {{vehicleName}} номер {{vehicleNumber}}',
        en: 'Your driver has arrived, vehicle {{vehicleName}} number {{vehicleNumber}}',
        de: 'Ihr Fahrer ist angekommen, Fahrzeug {{vehicleName}} mit dem Kennzeichen {{vehicleNumber}}',
        pl: 'Twój kierowca przyjechał, pojazd {{vehicleName}} numer {{vehicleNumber}}',
    },

    vehicleIsNotSuitable: {
        ru: 'Ваш транспорт не подходит для работы в такси',
        ua: 'Ваш транспорт не підходить для роботи в таксі',
        en: 'Your vehicle is not suitable for taxi work',
        de: 'Ihr Fahrzeug ist nicht für die Arbeit als Taxi geeignet',
        pl: 'Twój pojazd nie nadaje się do pracy w taksówce',
    },

    canNotCreateOrderInVehicle: {
        ru: 'Вы не можете заказать такси, находясь в транспорте, сначала выйдите из транспорта.',
        ua: 'Ви не можете замовити таксі, перебуваючи в транспорті, спочатку вийдіть з транспорту.',
        en: 'You cannot order a taxi while being in a vehicle. Please exit the vehicle first.',
        de: 'Sie können kein Taxi bestellen, während Sie sich in einem Fahrzeug befinden. Bitte verlassen Sie zuerst das Fahrzeug.',
        pl: 'Nie możesz zamówić taksówki, będąc w pojeździe. Najpierw opuść pojazd.',
    },

    canNotCreateOrderFromHere: {
        ru: 'Вы не можете заказать такси отсюда.',
        ua: 'Ви не можете замовити таксі звідси.',
        en: 'You cannot order a taxi from here.',
        de: 'Sie können von hier aus kein Taxi bestellen.',
        pl: 'Nie możesz zamówić taksówki stąd.',
    },

    canNotCreateOderForThisClass: {
        ru: 'В штате нет водителей данного класса, попробуйте выбрать класс ниже.',
        ua: 'У штаті немає водіїв цього класу, спробуйте обрати клас нижче.',
        en: 'There are no drivers of this class available. Please try selecting a lower class.',
        de: 'Es gibt keine Fahrer dieser Klasse. Bitte wählen Sie eine niedrigere Klasse.',
        pl: 'Brak kierowców tej klasy. Spróbuj wybrać niższą klasę.',
    },
};
