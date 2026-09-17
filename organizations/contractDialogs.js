// Dialogs of the contract NPCs that stand in the world as real peds.
// See `server/systems/organizations/contracts/npc.ts`.
export const contractDialogs = {
    stashDealer: {
        main: {
            whatAreYouAfter: {
                ru: 'Ну? Партия по заказу или своё разложить пришёл?',
                ua: 'Ну? Партія за замовленням чи своє розкласти прийшов?',
                en: 'Well? Batch on order, or here to move your own?',
                de: 'Und? Charge auf Bestellung, oder willst du eigenes loswerden?',
                pl: 'No? Partia na zamówienie, czy przyszedłeś rozłożyć swoje?',
            },
            contractBatch: {
                ru: 'Партия по заказу семьи',
                ua: 'Партія за замовленням сім\'ї',
                en: 'The batch my family ordered',
                de: 'Die Charge, die meine Familie bestellt hat',
                pl: 'Partia na zamówienie rodziny',
            },
            runSideJob: {
                ru: 'Развезти своё: {{drug}}',
                ua: 'Розвезти своє: {{drug}}',
                en: 'Move my own: {{drug}}',
                de: 'Eigenes verteilen: {{drug}}',
                pl: 'Rozwieźć swoje: {{drug}}',
            },
            contractBriefing: {
                ru: 'Товар мой, руки твои. {{drops}} точек на карте, приезжаешь, оставляешь, едешь дальше. Кэша с рук не будет - за партию платят твоим.',
                ua: 'Товар мій, руки твої. {{drops}} точок на мапі, приїжджаєш, залишаєш, їдеш далі. Кешу з рук не буде - за партію платять твоїм.',
                en: 'My product, your hands. {{drops}} spots on the map, you drive up, you leave it, you move on. No cash from me - the batch is paid to your people.',
                de: 'Meine Ware, deine Hände. {{drops}} Punkte auf der Karte, hinfahren, ablegen, weiter. Bargeld gibt es von mir nicht - die Charge wird deinen Leuten bezahlt.',
                pl: 'Towar mój, ręce twoje. {{drops}} punktów na mapie, podjeżdżasz, zostawiasz, jedziesz dalej. Gotówki ode mnie nie będzie - za partię płacę twoim.',
            },
            giveMeTheBatch: {
                ru: 'Давай партию',
                ua: 'Давай партію',
                en: 'Give me the batch',
                de: 'Gib mir die Charge',
                pl: 'Dawaj partię',
            },
            sideJobBriefing: {
                ru: '{{drug}} - товар твой, я только даю адреса. Нужно от {{need}} шт. «{{item}}» на руках, у тебя {{have}}. Плачу ${{pay}} за каждую оставленную.',
                ua: '{{drug}} - товар твій, я лише даю адреси. Потрібно від {{need}} шт. «{{item}}» на руках, у тебе {{have}}. Плачу ${{pay}} за кожну залишену.',
                en: '{{drug}} - the product is yours, I only hand out addresses. You need {{need}} x "{{item}}" on you, you have {{have}}. I pay ${{pay}} per drop.',
                de: '{{drug}} - die Ware ist deine, ich gebe nur die Adressen. Du brauchst {{need}} x "{{item}}" bei dir, du hast {{have}}. Ich zahle ${{pay}} pro Ablage.',
                pl: '{{drug}} - towar jest twój, ja daję tylko adresy. Potrzebujesz {{need}} x "{{item}}" przy sobie, masz {{have}}. Płacę ${{pay}} za każdą podrzuconą.',
            },
            letsRun: {
                ru: 'Давай адреса',
                ua: 'Давай адреси',
                en: 'Give me the addresses',
                de: 'Gib mir die Adressen',
                pl: 'Dawaj adresy',
            },
            willBringGoods: {
                ru: 'Вернусь с товаром',
                ua: 'Повернуся з товаром',
                en: "I'll come back with the goods",
                de: 'Ich komme mit der Ware wieder',
                pl: 'Wrócę z towarem',
            },
            notNow: {
                ru: 'Не сейчас',
                ua: 'Не зараз',
                en: 'Not now',
                de: 'Jetzt nicht',
                pl: 'Nie teraz',
            },
        },
        idle: {
            noOrderNoBatch: {
                ru: 'Я тебя не знаю. Пусть твои возьмут заказ или откроют себе линию - тогда и поговорим.',
                ua: 'Я тебе не знаю. Хай твої візьмуть замовлення або відкриють собі лінію - тоді й поговоримо.',
                en: 'I do not know you. Let your people take an order or open a line of their own, then we talk.',
                de: 'Ich kenne dich nicht. Sollen deine Leute einen Auftrag nehmen oder sich eine Linie aufmachen, dann reden wir.',
                pl: 'Nie znam cię. Niech twoi wezmą zlecenie albo otworzą sobie linię - wtedy pogadamy.',
            },
            gotIt: {
                ru: 'Понял',
                ua: 'Зрозумів',
                en: 'Got it',
                de: 'Verstanden',
                pl: 'Jasne',
            },
        },
        busy: {
            finishWhatYouHave: {
                ru: 'У тебя уже руки заняты. Закончи и возвращайся.',
                ua: 'У тебе вже руки зайняті. Закінчи і повертайся.',
                en: 'Your hands are already full. Finish up and come back.',
                de: 'Deine Hände sind schon voll. Mach fertig und komm wieder.',
                pl: 'Masz już zajęte ręce. Skończ i wracaj.',
            },
            gotIt: {
                ru: 'Понял',
                ua: 'Зрозумів',
                en: 'Got it',
                de: 'Verstanden',
                pl: 'Jasne',
            },
        },
    },
};
