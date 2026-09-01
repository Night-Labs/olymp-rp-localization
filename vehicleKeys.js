// Vehicle keys (server modules/vehicles/keys): notifications about keys that stopped fitting.
export default {
    name: {
        ru: 'Ключи от транспорта',
        ua: 'Ключі від транспорту',
        en: 'Vehicle keys',
        de: 'Fahrzeugschlüssel',
        pl: 'Klucze do pojazdów',
    },
    revoked: {
        ru: 'Замки {{name}} сменены: ваши ключи больше не подходят',
        ua: 'Замки {{name}} замінено: ваші ключі більше не підходять',
        en: 'The locks of {{name}} were changed: your keys no longer fit',
        de: 'Die Schlösser von {{name}} wurden gewechselt: deine Schlüssel passen nicht mehr',
        pl: 'Zamki {{name}} zostały wymienione: twoje klucze już nie pasują',
    },
    revokedGone: {
        ru: 'Ключи от {{name}} аннулированы: транспорта больше нет',
        ua: 'Ключі від {{name}} анульовано: транспорту більше немає',
        en: 'The keys to {{name}} are void: the vehicle is gone',
        de: 'Die Schlüssel zu {{name}} sind ungültig: das Fahrzeug gibt es nicht mehr',
        pl: 'Klucze do {{name}} unieważnione: pojazdu już nie ma',
    },
};
