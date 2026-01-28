export const server = {
    justRenovation: {
        ru: 'В доме начался ремонт',
        ua: 'У домі почався ремонт',
        en: 'Renovation has started at home',
        de: 'Im Haus hat die Renovierung begonnen',
        pl: 'W domu rozpoczął się remont',
    },
    currentlyRenovation: {
        ru: 'Сейчас в доме ремонт',
        ua: 'Зараз у домі ремонт',
        en: 'There’s renovation going on at home right now',
        de: 'Das Haus wird gerade renoviert',
        pl: 'W domu trwa remont',
    },
    finishEditor: {
        ru: 'Вы закончили редактирование успешно',
        ua: 'Ти успішно завершив редагування',
        en: 'You’ve successfully finished editing',
        de: 'Du hast die Bearbeitung erfolgreich abgeschlossen',
        pl: 'Pomyślnie zakończyłeś edycję',
    },
    interactions: {
        enter: {
            ua: 'Щоб відкрити меню будинку, натисніть',
            en: 'To open the house menu, press',
            ru: 'Чтобы открыть меню дома, нажмите',
            de: 'Um das Hausmenü zu öffnen, drücke',
            pl: 'Aby otworzyć menu domu, naciśnij',
        },
        closed: {
            ru: 'Дверь заперта',
            ua: 'Двері замкнені',
            en: 'The door is locked',
            de: 'Die Tür ist abgeschlossen',
            pl: 'Drzwi są zamknięte',
        },
    },
    sell: {
        text: {
            ua: 'Продаж будинку',
            en: 'House sale',
            ru: 'Продажа дома',
            de: 'Hausverkauf',
            pl: 'Sprzedaż domu',
        },
        success: {
            ua: 'Ви успішно продали будинок №{{id}} за ${{price}}',
            en: 'You have successfully sold house #{{id}} for ${{price}}',
            ru: 'Вы успешно продали дом №{{id}} за ${{price}}',
            de: 'Du hast das Haus Nr.{{id}} erfolgreich für ${{price}} verkauft',
            pl: 'Pomyślnie sprzedano dom o numerze {{id}} za ${{price}}',
        },
        modal: {
            title: {
                ua: 'Продаж будинку №{{id}}',
                en: 'House sale #{{id}}',
                ru: 'Продажа дома №{{id}}',
                de: 'Hausverkauf Nr.{{id}}',
                pl: 'Sprzedaż domu nr {{id}}',
            },
            message: {
                ua: 'Ви дійсно бажаєте продати будинок №{{id}} за {{price}}?',
                en: 'Do you really want to sell house #{{id}} for {{price}}?',
                ru: 'Вы действительно хотите продать дом №{{id}} за {{price}}?',
                de: 'Möchtest du das Haus Nr.{{id}} wirklich für {{price}} verkaufen?',
                pl: 'Czy na pewno chcesz sprzedać dom nr {{id}} za {{price}}?',
            },
            confirmButton: {
                ua: 'Продати',
                en: 'Sell',
                ru: 'Продать',
                de: 'Verkaufen',
                pl: 'Sprzedaj',
            },
            cancelButton: {
                ua: 'Скасувати',
                en: 'Cancel',
                ru: 'Отмена',
                de: 'Abbrechen',
                pl: 'Anuluj',
            },
        },
    },
    buy: {
        maxHouse: {
            ua: 'Ви можете придбати не більше ніж три будинки',
            en: 'You can buy a maximum of three houses',
            ru: 'Вы можете купить не больше трех домов',
            de: 'Du kannst maximal drei Häuser kaufen',
            pl: 'Możesz kupić maksymalnie trzy domy',
        },
        successHeader: {
            ua: 'Покупка будинку',
            en: 'House purchase',
            ru: 'Покупка дома',
            de: 'Hauskauf',
            pl: 'Zakup domu',
        },
        hint: {
            ru: 'Подсказка: Я вижу ты купил дом, не забудь оплатить его в банке иначе он слетит!',
            ua: 'Підказка: Я бачу, ти купив будинок, не забудь оплатити його в банку, інакше він злетить!',
            en: "Hint: I see you bought a house, don't forget to pay for it at the bank, otherwise you'll lose it!",
            de: 'Hinweis: Ich sehe, dass du ein Haus gekauft hast, vergiss nicht, es bei der Bank zu bezahlen, sonst verlierst du es!',
            pl: 'Wskazówka: Widzę, że kupiłeś dom, nie zapomnij zapłacić za niego w banku, inaczej go stracisz!',
        },
        success: {
            ua: 'Ви успішно придбали будинок',
            en: 'You have successfully purchased the house',
            ru: 'Вы успешно купили дом',
            de: 'Du hast das Haus erfolgreich gekauft',
            pl: 'Pomyślnie zakupiono dom',
        },
        hasOwner: {
            ru: 'У дома уже есть владелец',
            ua: 'У будинку вже є власник',
            en: 'The house already has an owner',
            de: 'Das Haus hat schon einen Besitzer',
            pl: 'Dom ma już właściciela',
        },
    },
    garage: {
        garage: {
            ua: 'Гараж',
            en: 'Garage',
            ru: 'Гараж',
            de: 'Garage',
            pl: 'Garaż',
        },
        interactions: {
            exitToHome: {
                ua: 'Щоб вийти з гаража до будинку, натисніть',
                en: 'To exit the garage and go to the house, press',
                ru: 'Чтобы выйти из гаража в дом нажмите',
                de: 'Um die Garage zu verlassen und zum Haus zu gehen, drücke',
                pl: 'Aby wyjść z garażu i przejść do domu, naciśnij',
            },
            exitToStreet: {
                ua: 'Щоб вийти з гаража на вулицю, натисніть',
                en: 'To exit the garage and go to the street, press',
                ru: 'Чтобы выйти из гаража на улицу нажмите',
                de: 'Um die Garage zu verlassen und auf die Straße zu gehen, drücke',
                pl: 'Aby wyjść z garażu i przejść na ulicę, naciśnij',
            },
            enterGarage: {
                ua: 'Щоб заїхати в гараж, натисніть',
                en: 'To enter the garage, press',
                ru: 'Чтобы заехать в гараж нажмите',
                de: 'Um die Garage zu betreten, drücke',
                pl: 'Aby wejść do garażu, naciśnij',
            },
            enterGarageFoot: {
                ru: 'Зайти в гараж',
                ua: 'Увійти в гараж',
                en: 'Enter the garage',
                de: 'Garage betreten',
                pl: 'Wejść do garażu',
            },
        },
        notEnoughPlaces: {
            ua: 'В гаражі недостатньо місця',
            en: 'Not enough space in the garage',
            ru: 'В гараже недостаточно места',
            de: 'Nicht genügend Platz in der Garage',
            pl: 'Za mało miejsca w garażu',
        },
        rentVehicle: {
            ru: 'В гараж нельзя заезжать на арендованных авто',
            ua: 'У гараж не можна заїжджати на орендованих авто',
            en: 'You cannot enter the garage with rented vehicles',
            de: 'Mit gemieteten Fahrzeugen darf man nicht in die Garage fahren',
            pl: 'Nie można wjeżdżać do garażu wypożyczonymi pojazdami',
        },
        modal: {
            title: {
                ua: 'Виїзд з будинку',
                en: 'House exit',
                ru: 'Выезд из дома',
                de: 'Haus verlassen',
                pl: 'Wyjazd z domu',
            },
            message: {
                ua: 'Ви дійсно бажаєте виїхати на {{name}}?',
                en: 'Do you really want to drive out to {{name}}?',
                ru: 'Вы действительно хотите выехать на {{name}}?',
                de: 'Möchtest du wirklich nach {{name}} fahren?',
                pl: 'Czy na pewno chcesz wyjechać do {{name}}?',
            },
            confirmButton: {
                ua: 'Виїхати',
                en: 'Drive out',
                ru: 'Выехать',
                de: 'Ausfahren',
                pl: 'Wyjedź',
            },
            cancelButton: {
                ua: 'Скасувати',
                en: 'Cancel',
                ru: 'Отмена',
                de: 'Abbrechen',
                pl: 'Anuluj',
            },
        },
        modalNotYourVehicle: {
            title: {
                ua: 'Чужий автомобіль',
                en: 'Foreign vehicle',
                ru: 'Чужой автомобиль',
                de: 'Fremdes Fahrzeug',
                pl: 'Cudzy pojazd',
            },
            message: {
                ru: 'Автомобиль {{name}} принадлежит жителю дома {{ownerName}}. <br /> <br/>Вы не можете на нём выехать.',
                ua: 'Автомобіль {{name}} належить мешканцю будинку {{ownerName}}. <br /> <br/>Ви не можете на ньому виїхати.',
                en: 'The vehicle {{name}} belongs to the resident {{ownerName}}. <br /> <br/>You cannot drive it.',
                de: 'Das Fahrzeug {{name}} gehört dem Hausbewohner {{ownerName}}. <br /> <br/>Sie können damit nicht fahren.',
                pl: 'Pojazd {{name}} należy do mieszkańca {{ownerName}}. <br /> <br/>Nie możesz nim wyjechać.',
            },
            closeButton: {
                ua: 'Закрити',
                en: 'Close',
                ru: 'Закрыть',
                de: 'Schließen',
                pl: 'Zamknij',
            },
        },
        upgradeMovedYou: {
            ru: 'Гараж только что был улучшен, поэтому ты переместился в дом',
            ua: 'Гараж щойно був покращений, тому ти перемістився в дім',
            en: 'The garage was just upgraded, so you were moved to the house',
            de: 'Die Garage wurde gerade verbessert, deshalb bist du ins Haus umgezogen',
            pl: 'Garaż został właśnie ulepszony, więc zostałeś przeniesiony do domu',
        },
    },
    blips: {
        house: {
            ru: 'Дом',
            ua: 'Будинок',
            en: 'House',
            de: 'Haus',
            pl: 'Dom',
        },
        yourHouse: {
            ru: 'Ваш дом',
            ua: 'Ваш будинок',
            en: 'Your house',
            de: 'Dein Haus',
            pl: 'Twój dom',
        },
        resident: {
            ru: 'Подселённый в дом',
            ua: 'Підселений у будинок',
            en: 'Lodger in the house',
            de: 'Untermieter im Haus',
            pl: 'Lokator w domu',
        },
    },
    exitInspect: {
        ru: 'Выйти из осмотра дома',
        ua: 'Вийти з огляду будинку',
        en: 'Exit home inspection',
        de: 'Die Hausbesichtigung verlassen',
        pl: 'Wyjść z oględzin domu',
    },
    renovationModal: {
        confirm: {
            ru: 'Подтвердить',
            ua: 'Підтвердити',
            en: 'Confirm',
            de: 'Bestätigen',
            pl: 'Potwierdź',
        },
        cancel: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
        },
        variation: {
            title: {
                ru: 'Обновление интерьера',
                ua: 'Оновлення інтерʼєру',
                en: 'Interior update',
                de: 'Innenraum-Update',
                pl: 'Odświeżenie wnętrza',
            },
            text: {
                ru: `
<div style="line-height:1.5">
    <b>Изменение вариации интерьера</b><br/><br/>

    Вы собираетесь изменить <b>вариацию текущего интерьера</b>.<br/>
    Планировка, мебель и тип жилья останутся прежними.<br/><br/>

    <b>Стоимость:</b> {{price}} $<br/><br/>

    <span style="color:#cfcfcf">
        Это визуальное обновление без смены планировки.
    </span>
</div>
        `,
                ua: `
<div style="line-height:1.5">
    <b>Зміна варіації інтерʼєру</b><br/><br/>

    Ти збираєшся змінити <b>варіацію поточного інтерʼєру</b>.<br/>
    Планування, меблі та тип житла залишаться без змін.<br/><br/>

    <b>Вартість:</b> {{price}} $<br/><br/>

    <span style="color:#cfcfcf">
        Це візуальне оновлення без зміни планування.
    </span>
</div>
        `,
                en: `
<div style="line-height:1.5">
    <b>Interior variation change</b><br/><br/>

    You’re about to change the <b>current interior variation</b>.<br/>
    The layout, furniture, and housing type will stay the same.<br/><br/>

    <b>Cost:</b> {{price}} $<br/><br/>

    <span style="color:#cfcfcf">
        This is a visual update without changing the layout.
    </span>
</div>
        `,
                de: `
<div style="line-height:1.5">
    <b>Änderung der Innenraumvariation</b><br/><br/>

    Du bist dabei, die <b>aktuelle Innenraumvariation</b> zu ändern.<br/>
    Grundriss, Möbel und Wohnungstyp bleiben unverändert.<br/><br/>

    <b>Kosten:</b> {{price}} $<br/><br/>

    <span style="color:#cfcfcf">
        Dies ist ein visuelles Update ohne Änderung des Grundrisses.
    </span>
</div>
        `,
                pl: `
<div style="line-height:1.5">
    <b>Zmiana wariantu wnętrza</b><br/><br/>

    Zamierzasz zmienić <b>aktualny wariant wnętrza</b>.<br/>
    Układ, meble i typ mieszkania pozostaną bez zmian.<br/><br/>

    <b>Koszt:</b> {{price}} $<br/><br/>

    <span style="color:#cfcfcf">
        To jest wizualne odświeżenie bez zmiany układu.
    </span>
</div>
        `,
            },
        },
        interior: {
            title: {
                ru: 'Перепланировка дома',
                ua: 'Перепланування будинку',
                en: 'House remodeling',
                de: 'Hausumbau',
                pl: 'Przebudowa domu',
            },
            text: {
                ru: `
<div style="line-height:1.5">
    <b>Перепланировка дома</b><br/><br/>

    Вы собираетесь <b>сменить интерьер дома</b>.<br/>
    Это приведёт к полной замене планировки помещения.<br/><br/>

    <ul>
        <li>Все игроки будут <b>выселены</b> из дома</li>
        <li>Интерьер будет <b>полностью обновлён</b></li>
        <li>
            <b>Квартплата:</b>
            <span style="color:{{rentColor}}">
                {{oldRent}} $ → {{newRent}} $
            </span>
        </li>
    </ul>

    <b>Стоимость:</b> {{price}} $<br/><br/>

    <span style="color:#ffb3b3">
        Действие необратимо. Убедитесь, что вы уверены.
    </span>
</div>
        `,
                ua: `
<div style="line-height:1.5">
    <b>Перепланування будинку</b><br/><br/>

    Ти збираєшся <b>змінити інтерʼєр будинку</b>.<br/>
    Це призведе до повної заміни планування приміщення.<br/><br/>

    <ul>
        <li>Усі гравці будуть <b>виселені</b> з будинку</li>
        <li>Інтерʼєр буде <b>повністю оновлено</b></li>
        <li>
            <b>Орендна плата:</b>
            <span style="color:{{rentColor}}">
                {{oldRent}} $ → {{newRent}} $
            </span>
        </li>
    </ul>

    <b>Вартість:</b> {{price}} $<br/><br/>

    <span style="color:#ffb3b3">
        Дія незворотна. Переконайся, що ти впевнений.
    </span>
</div>
        `,
                en: `
<div style="line-height:1.5">
    <b>House remodeling</b><br/><br/>

    You’re about to <b>change the house interior</b>.<br/>
    This will completely replace the room layout.<br/><br/>

    <ul>
        <li>All players will be <b>evicted</b> from the house</li>
        <li>The interior will be <b>fully updated</b></li>
        <li>
            <b>Rent:</b>
            <span style="color:{{rentColor}}">
                {{oldRent}} $ → {{newRent}} $
            </span>
        </li>
    </ul>

    <b>Cost:</b> {{price}} $<br/><br/>

    <span style="color:#ffb3b3">
        This action is irreversible. Make sure you’re confident.
    </span>
</div>
        `,
                de: `
<div style="line-height:1.5">
    <b>Hausumbau</b><br/><br/>

    Du bist dabei, den <b>Innenraum des Hauses zu ändern</b>.<br/>
    Dies führt zu einer vollständigen Erneuerung des Grundrisses.<br/><br/>

    <ul>
        <li>Alle Spieler werden aus dem Haus <b>ausgezogen</b></li>
        <li>Der Innenraum wird <b>komplett erneuert</b></li>
        <li>
            <b>Miete:</b>
            <span style="color:{{rentColor}}">
                {{oldRent}} $ → {{newRent}} $
            </span>
        </li>
    </ul>

    <b>Kosten:</b> {{price}} $<br/><br/>

    <span style="color:#ffb3b3">
        Diese Aktion ist nicht rückgängig zu machen. Sei dir sicher.
    </span>
</div>
        `,
                pl: `
<div style="line-height:1.5">
    <b>Przebudowa domu</b><br/><br/>

    Zamierzasz <b>zmienić wnętrze domu</b>.<br/>
    Spowoduje to całkowitą zmianę układu pomieszczeń.<br/><br/>

    <ul>
        <li>Wszyscy gracze zostaną <b>wykwaterowani</b> z domu</li>
        <li>Wnętrze zostanie <b>całkowicie odnowione</b></li>
        <li>
            <b>Czynsz:</b>
            <span style="color:{{rentColor}}">
                {{oldRent}} $ → {{newRent}} $
            </span>
        </li>
    </ul>

    <b>Koszt:</b> {{price}} $<br/><br/>

    <span style="color:#ffb3b3">
        To działanie jest nieodwracalne. Upewnij się, że jesteś pewien.
    </span>
</div>
        `,
            },
        },
    },
    furnitureEditorModal: {
        title: {
            ru: 'Редактор мебели',
            ua: 'Редактор меблів',
            en: 'Furniture Editor',
            de: 'Möbel-Editor',
            pl: 'Edytor mebli',
        },
        question: {
            ru: 'Завершить редактирование и применить изменения?',
            ua: 'Завершити редагування та застосувати зміни?',
            en: 'Finish editing and apply the changes?',
            de: 'Bearbeitung beenden und Änderungen anwenden?',
            pl: 'Zakończyć edycję i zastosować zmiany?',
        },
        changesTitle: {
            ru: 'Изменения',
            ua: 'Зміни',
            en: 'Changes',
            de: 'Änderungen',
            pl: 'Zmiany',
        },
        buy: {
            ru: 'Новая мебель',
            ua: 'Нові меблі',
            en: 'New furniture',
            de: 'Neue Möbel',
            pl: 'Nowe meble',
        },
        sell: {
            ru: 'Продажа мебели',
            ua: 'Продаж меблів',
            en: 'Furniture sale',
            de: 'Möbelverkauf',
            pl: 'Sprzedaż mebli',
        },
        moved: {
            ru: 'Перемещено предметов',
            ua: 'Переміщено предметів',
            en: 'Items moved',
            de: 'Gegenstände verschoben',
            pl: 'Przeniesione przedmioty',
        },
        noChanges: {
            ru: 'Изменений не обнаружено.',
            ua: 'Змін не виявлено.',
            en: 'No changes detected.',
            de: 'Keine Änderungen festgestellt.',
            pl: 'Nie wykryto zmian.',
        },
        totalTitle: {
            ru: 'Итого к оплате',
            ua: 'Разом до оплати',
            en: 'Total to pay',
            de: 'Gesamtbetrag',
            pl: 'Suma do zapłaty',
        },
        confirm: {
            ru: 'Подтвердить',
            ua: 'Підтвердити',
            en: 'Confirm',
            de: 'Bestätigen',
            pl: 'Potwierdź',
        },
        confirmAndPay: {
            ru: 'Подтвердить и оплатить',
            ua: 'Підтвердити та оплатити',
            en: 'Confirm and pay',
            de: 'Bestätigen und bezahlen',
            pl: 'Potwierdź i zapłać',
        },
        cancel: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
        },
    },

    resetFurniture: {
        title: {
            ru: 'Сброс мебели',
            ua: 'Скидання меблів',
            en: 'Furniture Reset',
            de: 'Möbel zurücksetzen',
            pl: 'Reset mebli',
        },
        question: {
            ru: 'Ты действительно хочешь полностью убрать всю мебель в доме?',
            ua: 'Ти справді хочеш повністю прибрати всі меблі в домі?',
            en: 'Do you really want to completely remove all the furniture in the house?',
            de: 'Willst du wirklich alle Möbel im Haus vollständig entfernen?',
            pl: 'Czy na pewno chcesz całkowicie usunąć wszystkie meble z domu?',
        },
        items: {
            ru: 'Количество предметов',
            ua: 'Кількість предметів',
            en: 'Number of items',
            de: 'Anzahl der Gegenstände',
            pl: 'Liczba przedmiotów',
        },
        sellSum: {
            ru: 'Выручка от продажи',
            ua: 'Виручка від продажу',
            en: 'Sale proceeds',
            de: 'Erlös aus dem Verkauf',
            pl: 'Przychód ze sprzedaży',
        },
        serviceFee: {
            ru: 'Сервисный сбор',
            ua: 'Сервісний збір',
            en: 'Service fee',
            de: 'Servicegebühr',
            pl: 'Opłata serwisowa',
        },
        refund: {
            ru: 'Итого к возврату',
            ua: 'Разом до повернення',
            en: 'Total refund',
            de: 'Gesamtrückerstattung',
            pl: 'Łączny zwrot',
        },
        confirm: {
            ru: 'Сбросить мебель',
            ua: 'Скинути меблі',
            en: 'Reset furniture',
            de: 'Möbel zurücksetzen',
            pl: 'Zresetuj meble',
        },
        cancel: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
            pl: 'Anuluj',
        },
        success: {
            ru: 'Вся мебель была успешно продана и удалена из дома.',
            ua: 'Усі меблі були успішно продані та видалені з дому.',
            en: 'All furniture was successfully sold and removed from the house.',
            de: 'Alle Möbel wurden erfolgreich verkauft und aus dem Haus entfernt.',
            pl: 'Wszystkie meble zostały pomyślnie sprzedane i usunięte z domu.',
        },
    },
    noFurnitureToReset: {
        ru: 'В доме нет мебели для сброса.',
        ua: 'У домі немає меблів для скидання.',
        en: 'There’s no furniture in the house to reset.',
        de: 'Im Haus gibt es keine Möbel zum Zurücksetzen.',
        pl: 'W domu nie ma mebli do zresetowania.',
    },
};
