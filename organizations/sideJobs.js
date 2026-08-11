// Organization side jobs - work the upgrade tree opens that is NOT a contract.
// See `shared/systems/organizations/sideJobs.ts`.
export const sideJobs = {
    list: {
        courierStank: {
            name: { ru: 'Курьер STANK', ua: 'Кур\'єр STANK', en: 'STANK courier', de: 'STANK-Kurier', pl: 'Kurier STANK' },
            description: {
                ru: 'Трава сама себя не разложит. Берёшь партию, обходишь точки, оставляешь товар там, где его найдут свои. Работа простая - с неё все начинали.',
                ua: 'Трава сама себе не розкладе. Береш партію, обходиш точки, залишаєш товар там, де його знайдуть свої. Робота проста - з неї всі починали.',
                en: "The weed won't plant itself. Take a batch, walk the points, leave the product where our people will find it. Simple work - everyone started here.",
                de: 'Das Gras legt sich nicht selbst aus. Nimm eine Charge, geh die Punkte ab, lass die Ware dort, wo unsere Leute sie finden. Einfache Arbeit - so hat jeder angefangen.',
                pl: 'Trawa sama sie nie rozlozy. Bierzesz partie, obchodzisz punkty, zostawiasz towar tam, gdzie znajda go swoi. Prosta robota - kazdy tak zaczynal.',
            },
        },
        courierZap: {
            name: { ru: 'Курьер ZAP!', ua: 'Кур\'єр ZAP!', en: 'ZAP! courier', de: 'ZAP!-Kurier', pl: 'Kurier ZAP!' },
            description: {
                ru: 'ZAP! - это уже не трава, за него и статья другая. Контейнеры мельче, цена выше, патрули злее. Разложишь без потерь - будет разговор посерьёзнее.',
                ua: 'ZAP! - це вже не трава, за нього й стаття інша. Контейнери менші, ціна вища, патрулі зліші. Розкладеш без втрат - буде розмова серйозніша.',
                en: "ZAP! isn't weed - the charge for it reads very differently. Smaller containers, higher price, meaner patrols. Place it without losses and we'll talk about bigger things.",
                de: 'ZAP! ist kein Gras - dafuer steht ein ganz anderer Paragraf. Kleinere Behaelter, hoeherer Preis, boesere Streifen. Leg es ohne Verluste aus, dann reden wir ueber Groesseres.',
                pl: 'ZAP! to juz nie trawa - paragraf za niego czyta sie inaczej. Mniejsze pojemniki, wyzsza cena, gorsze patrole. Rozlozysz bez strat - pogadamy o powazniejszych sprawach.',
            },
        },
        courierPoof: {
            name: { ru: 'Курьер POOF', ua: 'Кур\'єр POOF', en: 'POOF courier', de: 'POOF-Kurier', pl: 'Kurier POOF' },
            description: {
                ru: 'POOF возят те, кому уже нечего терять. Каждый контейнер - это срок, если возьмут. Плачу соответственно, но ошибок не прощаю.',
                ua: 'POOF возять ті, кому вже нічого втрачати. Кожен контейнер - це строк, якщо візьмуть. Плачу відповідно, але помилок не прощаю.',
                en: 'POOF is carried by people with nothing left to lose. Every container is prison time if they catch you. I pay accordingly, and I forgive nothing.',
                de: 'POOF transportieren die, die nichts mehr zu verlieren haben. Jeder Behaelter ist Knast, wenn sie dich schnappen. Ich zahle entsprechend und verzeihe nichts.',
                pl: 'POOF wozza ci, ktorzy nie maja juz nic do stracenia. Kazdy pojemnik to wyrok, jesli cie zlapia. Place odpowiednio, ale bledow nie wybaczam.',
            },
        },
    },
    errors: {
        notEnoughStock: {
            ru: 'Нужно {{need}} шт. «{{item}}» на руках.',
            ua: 'Потрібно {{need}} шт. «{{item}}» на руках.',
            en: 'You need {{need}} x "{{item}}" on you.',
            de: 'Du brauchst {{need}} x "{{item}}" bei dir.',
            pl: 'Potrzebujesz {{need}} x "{{item}}" przy sobie.',
        },
    },
};
