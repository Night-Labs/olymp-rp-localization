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
        info: {
            ru: 'Дом №{{houseId}} · углов: {{corners}} · высота: {{minZ}}..{{maxZ}}',
            ua: 'Будинок №{{houseId}} · кутів: {{corners}} · висота: {{minZ}}..{{maxZ}}',
            en: 'House #{{houseId}} · corners: {{corners}} · height: {{minZ}}..{{maxZ}}',
            de: 'Haus Nr. {{houseId}} · Ecken: {{corners}} · Höhe: {{minZ}}..{{maxZ}}',
        },
        default: {
            ru: 'по умолчанию',
            ua: 'за замовчуванням',
            en: 'default',
            de: 'Standard',
        },
        hintCorners: {
            ru: '[ ] угол · Home угол сюда · Insert добавить · Delete убрать',
            ua: '[ ] кут · Home кут сюди · Insert додати · Delete прибрати',
            en: '[ ] corner · Home corner here · Insert add · Delete remove',
            de: '[ ] Ecke · Home Ecke hierher · Insert hinzufügen · Delete entfernen',
        },
        hintLot: {
            ru: 'Num+/- размер · PgUp/PgDn верх (Shift - низ) · Enter сохранить · End сбросить · F9 выход',
            ua: 'Num+/- розмір · PgUp/PgDn верх (Shift - низ) · Enter зберегти · End скинути · F9 вихід',
            en: 'Num+/- size · PgUp/PgDn top (Shift - bottom) · Enter save · End reset · F9 exit',
            de: 'Num+/- Größe · PgUp/PgDn oben (Shift - unten) · Enter speichern · End zurücksetzen · F9 Ende',
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
