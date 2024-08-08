
import drift from "./drift"

export const gameEvents = {
    dm: {
        name: {
            ru: 'DM Зона',
            ua: 'DM Зона',
            en: 'DM Zone',
            de: 'DM Zone',
            pl: 'Strefa DM'
        },

        discord: {
            ru: 'Играет на DM зоне',
            ua: 'Грає на DM зоні',
            en: 'Playing in DM zone',
            de: 'Spielt im DM-Bereich',
            pl: 'Gra w strefie DM',
        },

        players: {
            ru: 'Участников',
            ua: 'Учасникiв',
            en: 'Participants',
            de: 'Teilnehmer',
            pl: 'Uczestników'
        },

        enter: {
            ru: 'Войти в DM Зону',
            ua: 'Увійти в DM Зону',
            en: 'Enter the DM Zone',
            de: 'Betritt die DM Zone',
            pl: 'Wejdź do strefy DM'
        },

        enterChatText: {
            ru: 'Вы вошли в ~r~DM Зону!~w~ <br> Участников: ~o~{{players}} <br> ~w~Вам выданно: ~o~ временное оружие и бесконечные патроны. <br> ~w~Для того чтобы выйти введите ~o~/exit',
            ua: 'Ви увійшли в ~r~DM Зону!~w~ <br> Учасників: ~o~{{players}} <br> ~w~Вам видали: ~o~ тимчасову зброю і нескінченні патрони. <br> ~w~Щоб вийти, введіть ~o~/exit',
            en: 'You have entered the ~r~DM Zone!~w~ <br> Participants: ~o~{{players}} <br> ~w~You have been given: ~o~ temporary weapons and infinite ammo. <br> ~w~To exit, type ~o~/exit',
            de: 'Du bist in die ~r~DM Zone!~w~ eingetreten. <br> Teilnehmer: ~o~{{players}} <br> ~w~Du hast bekommen: ~o~ temporäre Waffen und unendliche Munition. <br> ~w~Um zu verlassen, gib ein ~o~/exit',
            pl: 'Wszedłeś do ~r~DM Zone!~w~ <br> Uczestników: ~o~{{players}} <br> ~w~Otrzymałeś: ~o~ tymczasową broń i nieskończoność amunicji. <br> ~w~Aby wyjść, wpisz ~o~/exit'
        },

        exitChatText: {
            ru: 'Вы вышли из ~r~DM Зоны!',
            ua: 'Ви вийшли з ~r~DM Зони!',
            en: 'You have exited the ~r~DM Zone!',
            de: 'Du hast die ~r~DM Zone! verlassen.',
            pl: 'Wyszedłeś z ~r~DM Zone!'
        },

        playerEntered: {
            ru: 'Игрок {{playerName}} присоединился',
            ua: 'Гравець {{playerName}} приєднався',
            en: 'Player {{playerName}} has joined',
            de: 'Spieler {{playerName}} hat sich angeschlossen',
            pl: 'Gracz {{playerName}} dołączył'
        },
        playerExited: {
            ru: 'Игрок {{playerName}} вышел',
            ua: 'Гравець {{playerName}} вийшов',
            en: 'Player {{playerName}} has left',
            de: 'Spieler {{playerName}} hat verlassen',
            pl: 'Gracz {{playerName}} wyszedł'
        },
        playerExitFromGameZone: {
            ru: 'Вы вышли из игровой зоны DM и были исключены.',
            ua: 'Ви вийшли з ігрової зони DM і були виключені.',
            en: 'You have exited the DM game zone and were kicked out.',
            de: 'Sie haben die DM-Spielzone verlassen und wurden herausgeworfen.',
            pl: 'Wyszedłeś z strefy gry DM i zostałeś wyłączony.'
        },
        playerKill: {
            ru: '{{killer}} убил {{victim}}',
            ua: '{{killer}} вбив {{victim}}',
            en: '{{killer}} killed {{victim}}',
            de: '{{killer}} hat {{victim}} getötet',
            pl: '{{killer}} zabił {{victim}}'
        }
    },
    drift
}