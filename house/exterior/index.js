import seating from './list/seating';
import tables from './list/tables';
import shade from './list/shade';
import bbq from './list/bbq';
import plants from './list/plants';
import landscape from './list/landscape';
import garden from './list/garden';
import lighting from './list/lighting';
import fences from './list/fences';
import pool from './list/pool';
import sport from './list/sport';
import pets from './list/pets';
import garage from './list/garage';
import utility from './list/utility';
import decor from './list/decor';
import holiday from './list/holiday';

// The house yard editor (systems/houses/exterior): prop names by catalogue section, the editor's own texts.
export default {
    list: {
        ...seating,
        ...tables,
        ...shade,
        ...bbq,
        ...plants,
        ...landscape,
        ...garden,
        ...lighting,
        ...fences,
        ...pool,
        ...sport,
        ...pets,
        ...garage,
        ...utility,
        ...decor,
        ...holiday,
    },
    menu: {
        title: {
            ru: 'Двор',
            ua: 'Подвір\'я',
            en: 'Yard',
            de: 'Garten',
        },
    },
    notAvailable: {
        ru: 'Обустраивать двор можно только у домов премиум и элит класса',
        ua: 'Облаштовувати подвір\'я можна лише в будинків преміум та еліт класу',
        en: 'Only premium and elite houses have a yard to furnish',
        de: 'Nur Premium- und Elite-Häuser haben einen Garten zum Einrichten',
    },
    leaveVehicle: {
        ru: 'Выйди из транспорта, чтобы обустроить двор',
        ua: 'Вийди з транспорту, щоб облаштувати подвір\'я',
        en: 'Get out of the vehicle to furnish the yard',
        de: 'Steig aus dem Fahrzeug, um den Garten einzurichten',
    },
    tooFar: {
        ru: 'Подойди ко входу в дом, чтобы обустроить двор',
        ua: 'Підійди до входу в будинок, щоб облаштувати подвір\'я',
        en: 'Walk up to the front door to furnish the yard',
        de: 'Geh zur Haustür, um den Garten einzurichten',
    },
    editorBusy: {
        ru: 'Предметы сейчас переставляются, попробуй через пару секунд',
        ua: 'Предмети зараз переставляються, спробуй за кілька секунд',
        en: 'The items are being rearranged right now, try again in a few seconds',
        de: 'Die Gegenstände werden gerade umgestellt, versuch es in ein paar Sekunden erneut',
    },
    alreadyEditing: {
        ru: 'Сначала закончи с другим редактором',
        ua: 'Спершу заверши роботу в іншому редакторі',
        en: 'Finish in the other editor first',
        de: 'Schließ zuerst den anderen Editor ab',
    },
    finished: {
        ru: 'Двор обустроен',
        ua: 'Подвір\'я облаштовано',
        en: 'Your yard is done',
        de: 'Dein Garten ist fertig',
    },
    payment: {
        description: {
            ru: 'Обустройство двора дома №{{houseId}}',
            ua: 'Облаштування подвір\'я будинку №{{houseId}}',
            en: 'Yard of house #{{houseId}}',
            de: 'Garten von Haus Nr. {{houseId}}',
        },
    },
    unlock: {
        title: {
            ru: 'Редактор двора',
            ua: 'Редактор подвір\'я',
            en: 'Yard editor',
            de: 'Garteneditor',
        },
        message: {
            ru: 'Чтобы расставлять предметы во дворе, нужно один раз внести взнос: <b>{{price}} Olymp Coins</b>.<br/><br/>Взнос действует для этого дома. При продаже дома он сбрасывается, и новому владельцу нужно будет внести его заново.<br/><br/>По запросу к администрации зону расстановки предметов могут бесплатно увеличить.',
            ua: 'Щоб розставляти предмети на подвір\'ї, потрібно один раз внести внесок: <b>{{price}} Olymp Coins</b>.<br/><br/>Внесок діє для цього будинку. При продажу будинку він скидається, і новому власнику потрібно буде внести його заново.<br/><br/>На запит до адміністрації зону розстановки предметів можуть безкоштовно збільшити.',
            en: 'To place items in the yard, pay a one-time fee of <b>{{price}} Olymp Coins</b>.<br/><br/>The fee applies to this house. When the house is sold, it resets and the new owner has to pay it again.<br/><br/>On request, the administration can enlarge the area for placing items free of charge.',
            de: 'Um Gegenstände im Garten aufzustellen, zahlst du einmalig <b>{{price}} Olymp Coins</b>.<br/><br/>Die Gebühr gilt für dieses Haus. Wird das Haus verkauft, verfällt sie, und der neue Besitzer muss sie erneut zahlen.<br/><br/>Auf Anfrage kann die Administration den Bereich zum Aufstellen kostenlos vergrößern.',
        },
        confirm: {
            ru: 'Оплатить',
            ua: 'Сплатити',
            en: 'Pay',
            de: 'Bezahlen',
        },
        cancel: {
            ru: 'Отмена',
            ua: 'Скасувати',
            en: 'Cancel',
            de: 'Abbrechen',
        },
        payment: {
            ru: 'Редактор двора дома №{{houseId}}',
            ua: 'Редактор подвір\'я будинку №{{houseId}}',
            en: 'Yard editor of house #{{houseId}}',
            de: 'Garteneditor von Haus Nr. {{houseId}}',
        },
        already: {
            ru: 'Редактор двора этого дома уже оплачен',
            ua: 'Редактор подвір\'я цього будинку вже оплачено',
            en: 'The yard editor of this house is already paid for',
            de: 'Der Garteneditor dieses Hauses ist bereits bezahlt',
        },
        success: {
            ru: 'Редактор двора открыт. Нажми "Редактор", чтобы обустроить двор',
            ua: 'Редактор подвір\'я відкрито. Натисни "Редактор", щоб облаштувати подвір\'я',
            en: 'The yard editor is unlocked. Press "Editor" to furnish the yard',
            de: 'Der Garteneditor ist freigeschaltet. Drück auf "Editor", um den Garten einzurichten',
        },
    },
    placement: {
        outside: {
            ru: 'Предмет должен целиком стоять на участке',
            ua: 'Предмет має повністю стояти на ділянці',
            en: 'The item has to stand fully inside the lot',
            de: 'Der Gegenstand muss ganz auf dem Grundstück stehen',
        },
        height: {
            ru: 'Слишком высоко или слишком низко для этого участка',
            ua: 'Занадто високо або занадто низько для цієї ділянки',
            en: 'Too high or too low for this lot',
            de: 'Zu hoch oder zu tief für dieses Grundstück',
        },
        blocked: {
            ru: 'Здесь нельзя: не загораживай вход, гараж и проезд к нему',
            ua: 'Тут не можна: не загороджуй вхід, гараж і проїзд до нього',
            en: 'Not here: keep the door, the garage and its driveway clear',
            de: 'Nicht hier: Tür, Garage und Zufahrt müssen frei bleiben',
        },
        refused: {
            ru: 'Этот предмет нельзя поставить здесь',
            ua: 'Цей предмет не можна поставити тут',
            en: 'This item cannot be placed here',
            de: 'Dieser Gegenstand kann hier nicht stehen',
        },
    },
    reset: {
        title: {
            ru: 'Сброс двора',
            ua: 'Скидання подвір\'я',
            en: 'Yard reset',
            de: 'Garten zurücksetzen',
        },
        question: {
            ru: 'Ты действительно хочешь убрать все предметы со двора?',
            ua: 'Ти дійсно хочеш прибрати всі предмети з подвір\'я?',
            en: 'Do you really want to remove everything from the yard?',
            de: 'Willst du wirklich alles aus dem Garten entfernen?',
        },
        confirm: {
            ru: 'Очистить двор',
            ua: 'Очистити подвір\'я',
            en: 'Clear the yard',
            de: 'Garten leeren',
        },
        nothing: {
            ru: 'Во дворе нет предметов для сброса.',
            ua: 'На подвір\'ї немає предметів для скидання.',
            en: 'There is nothing in the yard to reset.',
            de: 'Im Garten gibt es nichts zurückzusetzen.',
        },
        success: {
            ru: 'Двор очищен',
            ua: 'Подвір\'я очищено',
            en: 'The yard is cleared',
            de: 'Der Garten ist geleert',
        },
        successToOrganization: {
            ru: 'Двор очищен, ${{amount}} ушло на баланс организации',
            ua: 'Подвір\'я очищено, ${{amount}} пішло на баланс організації',
            en: 'The yard is cleared, ${{amount}} went to the organization',
            de: 'Der Garten ist geleert, ${{amount}} gingen an die Organisation',
        },
    },
    admin: {
        command: {
            ru: 'Редактор участка дома (двора): по номеру дома или ближайший. Повторно - закрыть',
            ua: 'Редактор ділянки будинку (подвір\'я): за номером будинку або найближчий. Повторно - закрити',
            en: 'House yard lot editor: by house id or the nearest one. Again to close',
            de: 'Grundstückseditor eines Hauses: per Hausnummer oder das nächste. Erneut zum Schließen',
        },
        noHouse: {
            ru: 'Рядом нет дома с двором (премиум или элит)',
            ua: 'Поруч немає будинку з подвір\'ям (преміум або еліт)',
            en: 'No house with a yard (premium or elite) nearby',
            de: 'Kein Haus mit Garten (Premium oder Elite) in der Nähe',
        },
        title: {
            ru: 'Участок дома',
            ua: 'Ділянка будинку',
            en: 'House lot',
            de: 'Grundstück',
        },
        lotDefault: {
            ru: 'Стандартный участок',
            ua: 'Типова ділянка',
            en: 'Default lot',
            de: 'Standardgrundstück',
        },
        lotDrawn: {
            ru: 'Нарисованный участок',
            ua: 'Намальована ділянка',
            en: 'Drawn lot',
            de: 'Gezeichnetes Grundstück',
        },
        unsaved: {
            ru: 'Не сохранено',
            ua: 'Не збережено',
            en: 'Not saved',
            de: 'Nicht gespeichert',
        },
        lot: {
            ru: 'Участок',
            ua: 'Ділянка',
            en: 'Lot',
            de: 'Grundstück',
        },
        corners: {
            ru: 'Углы',
            ua: 'Кути',
            en: 'Corners',
            de: 'Ecken',
        },
        area: {
            ru: 'Площадь',
            ua: 'Площа',
            en: 'Area',
            de: 'Fläche',
        },
        squareMeters: {
            ru: '{{value}} м²',
            ua: '{{value}} м²',
            en: '{{value}} m²',
            de: '{{value}} m²',
        },
        height: {
            ru: 'Высота от входа',
            ua: 'Висота від входу',
            en: 'Height from the door',
            de: 'Höhe ab Haustür',
        },
        top: {
            ru: 'Верх',
            ua: 'Верх',
            en: 'Top',
            de: 'Oben',
        },
        bottom: {
            ru: 'Низ',
            ua: 'Низ',
            en: 'Bottom',
            de: 'Unten',
        },
        meters: {
            ru: '{{value}} м',
            ua: '{{value}} м',
            en: '{{value}} m',
            de: '{{value}} m',
        },
        topView: {
            ru: 'Вид сверху',
            ua: 'Вигляд згори',
            en: 'Top view',
            de: 'Draufsicht',
        },
        useDefault: {
            ru: 'Стандартный',
            ua: 'Типова',
            en: 'Default',
            de: 'Standard',
        },
        deleteCorner: {
            ru: 'Удалить угол',
            ua: 'Видалити кут',
            en: 'Delete corner',
            de: 'Ecke löschen',
        },
        undo: {
            ru: 'Отменить',
            ua: 'Скасувати',
            en: 'Undo',
            de: 'Rückgängig',
        },
        save: {
            ru: 'Сохранить',
            ua: 'Зберегти',
            en: 'Save',
            de: 'Speichern',
        },
        exit: {
            ru: 'Выйти',
            ua: 'Вийти',
            en: 'Exit',
            de: 'Beenden',
        },
        exitConfirm: {
            title: {
                ru: 'Выйти без сохранения?',
                ua: 'Вийти без збереження?',
                en: 'Exit without saving?',
                de: 'Ohne Speichern beenden?',
            },
            message: {
                ru: 'Изменения участка не сохранятся.',
                ua: 'Зміни ділянки не збережуться.',
                en: 'The changes to the lot will be lost.',
                de: 'Die Änderungen am Grundstück gehen verloren.',
            },
            confirm: {
                ru: 'Выйти',
                ua: 'Вийти',
                en: 'Exit',
                de: 'Beenden',
            },
            cancel: {
                ru: 'Остаться',
                ua: 'Залишитися',
                en: 'Stay',
                de: 'Bleiben',
            },
        },
        cannotSave: {
            ru: 'Сохранить нельзя',
            ua: 'Зберегти не можна',
            en: 'Cannot be saved',
            de: 'Speichern nicht möglich',
        },
        hints: {
            ru: 'Управление',
            ua: 'Керування',
            en: 'Controls',
            de: 'Steuerung',
        },
        hint: {
            fly: {
                ru: 'Полёт камеры',
                ua: 'Політ камери',
                en: 'Fly the camera',
                de: 'Kamera fliegen',
            },
            drag: {
                ru: 'Тянуть угол или середину стороны',
                ua: 'Тягнути кут або середину сторони',
                en: 'Drag a corner or the middle of a side',
                de: 'Ecke oder Seitenmitte ziehen',
            },
            deleteCorner: {
                ru: 'Удалить выбранный угол',
                ua: 'Видалити вибраний кут',
                en: 'Delete the selected corner',
                de: 'Gewählte Ecke löschen',
            },
        },
        clear: {
            command: {
                ru: 'Очистить двор дома: вся мебель во дворе убирается без возврата денег, оплата редактора двора сбрасывается',
                ua: 'Очистити подвір\'я будинку: усі меблі на подвір\'ї прибираються без повернення грошей, оплата редактора подвір\'я скидається',
                en: 'Clear the yard of a house: every yard prop is removed with no refund, and the yard editor fee is reset',
                de: 'Garten eines Hauses leeren: alle Gartenmöbel werden ohne Erstattung entfernt, die Gebühr für den Garteneditor wird zurückgesetzt',
            },
            noYard: {
                ru: 'У дома №{{houseId}} нет двора',
                ua: 'У будинку №{{houseId}} немає подвір\'я',
                en: 'House #{{houseId}} has no yard',
                de: 'Haus Nr. {{houseId}} hat keinen Garten',
            },
            nothing: {
                ru: 'Во дворе дома №{{houseId}} ничего нет, и редактор двора не оплачен',
                ua: 'На подвір\'ї будинку №{{houseId}} нічого немає, і редактор подвір\'я не оплачено',
                en: 'The yard of house #{{houseId}} is empty, and its yard editor is not paid for',
                de: 'Der Garten von Haus Nr. {{houseId}} ist leer, und der Garteneditor ist nicht bezahlt',
            },
            title: {
                ru: 'Очистить двор дома №{{houseId}}?',
                ua: 'Очистити подвір\'я будинку №{{houseId}}?',
                en: 'Clear the yard of house #{{houseId}}?',
                de: 'Garten von Haus Nr. {{houseId}} leeren?',
            },
            question: {
                ru: 'Вся мебель во дворе (предметов: {{count}}) уберётся без возврата денег. Оплата редактора двора сбросится: чтобы снова обустраивать двор, владельцу придётся оплатить его заново.',
                ua: 'Усі меблі на подвір\'ї (предметів: {{count}}) приберуться без повернення грошей. Оплата редактора подвір\'я скинеться: щоб знову облаштовувати подвір\'я, власнику доведеться оплатити його заново.',
                en: 'Every yard prop ({{count}}) is removed with no refund. The yard editor fee is reset: to furnish the yard again, the owner has to pay for it once more.',
                de: 'Alle Gartenmöbel ({{count}}) werden ohne Erstattung entfernt. Die Gebühr für den Garteneditor wird zurückgesetzt: um den Garten wieder einzurichten, muss der Besitzer sie erneut zahlen.',
            },
            confirm: {
                ru: 'Очистить',
                ua: 'Очистити',
                en: 'Clear',
                de: 'Leeren',
            },
            cancel: {
                ru: 'Отмена',
                ua: 'Скасувати',
                en: 'Cancel',
                de: 'Abbrechen',
            },
            done: {
                ru: 'Двор дома №{{houseId}} очищен: убрано предметов: {{count}}, оплата редактора двора сброшена',
                ua: 'Подвір\'я будинку №{{houseId}} очищено: прибрано предметів: {{count}}, оплату редактора подвір\'я скинуто',
                en: 'The yard of house #{{houseId}} is cleared: {{count}} props removed, the yard editor fee is reset',
                de: 'Der Garten von Haus Nr. {{houseId}} ist geleert: {{count}} Möbel entfernt, die Gebühr für den Garteneditor ist zurückgesetzt',
            },
        },
        saved: {
            ru: 'Участок дома №{{houseId}} сохранён',
            ua: 'Ділянку будинку №{{houseId}} збережено',
            en: 'The lot of house #{{houseId}} is saved',
            de: 'Das Grundstück von Haus Nr. {{houseId}} ist gespeichert',
        },
        resetDone: {
            ru: 'Участок дома №{{houseId}} сброшен по умолчанию',
            ua: 'Ділянку будинку №{{houseId}} скинуто до типової',
            en: 'The lot of house #{{houseId}} is back to the default',
            de: 'Das Grundstück von Haus Nr. {{houseId}} ist wieder Standard',
        },
        error: {
            closed: {
                ru: 'Редактор участка закрыт: открой его снова через /lot_edit',
                ua: 'Редактор ділянки закрито: відкрий його знову через /lot_edit',
                en: 'The lot editor is closed: open it again with /lot_edit',
                de: 'Der Grundstückseditor ist geschlossen: öffne ihn erneut mit /lot_edit',
            },
            points: {
                ru: 'У участка должно быть от 3 до 64 углов',
                ua: 'У ділянки має бути від 3 до 64 кутів',
                en: 'A lot needs 3 to 64 corners',
                de: 'Ein Grundstück braucht 3 bis 64 Ecken',
            },
            reach: {
                ru: 'Угол слишком далеко от входа (больше 60 м)',
                ua: 'Кут занадто далеко від входу (понад 60 м)',
                en: 'A corner is too far from the front door (over 60 m)',
                de: 'Eine Ecke ist zu weit von der Haustür entfernt (über 60 m)',
            },
            selfIntersect: {
                ru: 'Стороны участка пересекаются',
                ua: 'Сторони ділянки перетинаються',
                en: 'The sides of the lot cross each other',
                de: 'Die Seiten des Grundstücks kreuzen sich',
            },
            area: {
                ru: 'Площадь участка вне допустимых пределов',
                ua: 'Площа ділянки поза допустимими межами',
                en: 'The lot area is out of range',
                de: 'Die Grundstücksfläche ist außerhalb des zulässigen Bereichs',
            },
            height: {
                ru: 'Неверный диапазон высоты участка',
                ua: 'Неправильний діапазон висоти ділянки',
                en: 'The height band of the lot is wrong',
                de: 'Der Höhenbereich des Grundstücks ist falsch',
            },
            overlap: {
                ru: 'Участок заходит на участок дома №{{houseId}}',
                ua: 'Ділянка заходить на ділянку будинку №{{houseId}}',
                en: 'The lot overlaps the lot of house #{{houseId}}',
                de: 'Das Grundstück überschneidet sich mit dem von Haus Nr. {{houseId}}',
            },
        },
    },
};
