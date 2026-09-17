// Organization side jobs - work the upgrade tree opens that is NOT a contract.
// See `shared/systems/organizations/sideJobs.ts`.
export const sideJobs = {
    list: {
        courierStank: {
            name: { ru: 'Курьер STANK', ua: 'Кур\'єр STANK', en: 'STANK courier', de: 'STANK-Kurier', pl: 'Kurier STANK' },
            description: {
                ru: 'Трава сама себя не разложит. Берёшь партию, обходишь точки, оставляешь товар там, где его найдут свои. Работа простая - с неё все начинали.',
                ua: 'Трава сама себе не розкладе. Береш партію, обходиш точки, залишаєш товар там, де його знайдуть свої. Робота проста - з неї всі починали.',
                en: "The weed won't hand itself out. Take a batch, walk the points, leave the product where our people will find it. Simple work - everyone started here.",
                de: 'Das Gras legt sich nicht selbst aus. Nimm eine Charge, geh die Punkte ab, lass die Ware dort, wo unsere Leute sie finden. Einfache Arbeit - so hat jeder angefangen.',
                pl: 'Trawa sama się nie rozłoży. Bierzesz partię, obchodzisz punkty, zostawiasz towar tam, gdzie znajdą go swoi. Prosta robota - każdy tak zaczynał.',
            },
        },
        courierZap: {
            name: { ru: 'Курьер ZAP!', ua: 'Кур\'єр ZAP!', en: 'ZAP! courier', de: 'ZAP!-Kurier', pl: 'Kurier ZAP!' },
            description: {
                ru: 'ZAP! - это уже не трава, за него и статья другая. Контейнеры мельче, цена выше, патрули злее. Разложишь без потерь - будет разговор посерьёзнее.',
                ua: 'ZAP! - це вже не трава, за нього й стаття інша. Контейнери менші, ціна вища, патрулі зліші. Розкладеш без втрат - буде розмова серйозніша.',
                en: "ZAP! isn't weed - the charge for it reads very differently. Smaller containers, higher price, meaner patrols. Place it without losses and we'll talk about bigger things.",
                de: 'ZAP! ist kein Gras - dafür steht ein ganz anderer Paragraf. Kleinere Behälter, höherer Preis, schärfere Streifen. Leg es ohne Verluste aus, dann reden wir über Größeres.',
                pl: 'ZAP! to już nie trawa - paragraf za niego czyta się inaczej. Mniejsze pojemniki, wyższa cena, gorsze patrole. Rozłożysz bez strat - pogadamy o poważniejszych sprawach.',
            },
        },
        courierPoof: {
            name: { ru: 'Курьер POOF', ua: 'Кур\'єр POOF', en: 'POOF courier', de: 'POOF-Kurier', pl: 'Kurier POOF' },
            description: {
                ru: 'POOF возят те, кому уже нечего терять. Каждый контейнер - это срок, если возьмут. Плачу соответственно, но ошибок не прощаю.',
                ua: 'POOF возять ті, кому вже нічого втрачати. Кожен контейнер - це строк, якщо візьмуть. Плачу відповідно, але помилок не прощаю.',
                en: 'POOF is carried by people with nothing left to lose. Every container is prison time if they catch you. I pay accordingly, and I forgive nothing.',
                de: 'POOF transportieren die, die nichts mehr zu verlieren haben. Jeder Behälter ist Knast, wenn sie dich schnappen. Ich zahle entsprechend und verzeihe nichts.',
                pl: 'POOF wożą ci, którzy nie mają już nic do stracenia. Każdy pojemnik to wyrok, jeśli cię złapią. Płacę odpowiednio, ale błędów nie wybaczam.',
            },
        },
        carjacker: {
            name: { ru: 'Угон на заказ', ua: 'Викрадення на замовлення', en: 'Cars to order', de: 'Autos auf Bestellung', pl: 'Auta na zamówienie' },
            description: {
                ru: 'Джо берёт только своих. Семья ставит подпись за тебя - идёшь к нему, берёшь адрес и работаешь как все. Доля семьи капает сверху того, что он платит.',
                ua: "Джо бере тільки своїх. Сім'я ставить підпис за тебе - ідеш до нього, береш адресу і працюєш як усі. Частка сім'ї капає понад те, що він платить.",
                en: "Joe only works with his own. The family vouches for you - walk up, take the address, work like everyone else. The family's cut lands on top of what he pays.",
                de: 'Joe arbeitet nur mit seinen Leuten. Die Familie bürgt für dich - geh hin, nimm die Adresse und arbeite wie alle anderen. Der Anteil der Familie kommt oben drauf.',
                pl: 'Joe pracuje tylko ze swoimi. Rodzina ręczy za ciebie - idziesz, bierzesz adres i pracujesz jak każdy. Działka rodziny dochodzi ponad to, co on płaci.',
            },
        },
        burglary: {
            name: { ru: 'Наводки по домам', ua: 'Наводки по будинках', en: 'House tip-offs', de: 'Haus-Tipps', pl: 'Cynki na domy' },
            description: {
                ru: 'Адреса выдают тем, за кого есть кому поручиться. Верхняя ступень - это про работу вдвоём и втроём: соседи звонят не так быстро, когда в доме работают свои, а не толпа.',
                ua: 'Адреси видають тим, за кого є кому поручитися. Верхній щабель - це про роботу вдвох і втрьох: сусіди дзвонять не так швидко, коли в домі працюють свої, а не натовп.',
                en: 'Addresses go to people somebody vouches for. The top rung is about working in twos and threes: the neighbours call slower when the house holds a crew, not a crowd.',
                de: 'Adressen bekommt, für den jemand bürgt. Die oberste Stufe dreht sich um Arbeit zu zweit und zu dritt: Die Nachbarn rufen später an, wenn im Haus eine Crew steht und kein Haufen.',
                pl: 'Adresy dostaje ten, za kogo ktoś ręczy. Najwyższy szczebel to praca we dwóch i we trzech: sąsiedzi dzwonią wolniej, gdy w domu pracuje ekipa, a nie tłum.',
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
