// The words every group journal shares (organizations, factions). Entry sentences, categories,
// field labels and the treasury label stay with each journal.
export default {
    units: {
        days: { ru: '{{n}} д', ua: '{{n}} д', en: '{{n}}d', de: '{{n}} T', pl: '{{n}} d' },
        hours: { ru: '{{n}} ч', ua: '{{n}} год', en: '{{n}}h', de: '{{n}} Std', pl: '{{n}} godz' },
        minutes: { ru: '{{n}} мин', ua: '{{n}} хв', en: '{{n}}m', de: '{{n}} Min', pl: '{{n}} min' },
        seconds: { ru: '{{n}} с', ua: '{{n}} с', en: '{{n}}s', de: '{{n}} s', pl: '{{n}} s' },
    },
    modal: {
        actor: { ru: 'Инициатор', ua: 'Ініціатор', en: 'Initiated by', de: 'Ausgelöst von', pl: 'Inicjator' },
        actorEntries: { ru: 'Все записи', ua: 'Усі записи', en: 'All entries', de: 'Alle Einträge', pl: 'Wszystkie wpisy' },
        comment: { ru: 'Комментарий', ua: 'Коментар', en: 'Comment', de: 'Kommentar', pl: 'Komentarz' },
        noDetails: {
            ru: 'Для этой записи подробностей нет',
            ua: 'Для цього запису подробиць немає',
            en: 'This entry has no further details',
            de: 'Zu diesem Eintrag gibt es keine weiteren Details',
            pl: 'Ten wpis nie ma dodatkowych szczegółów',
        },
    },
    feed: {
        searchPlaceholder: {
            ru: 'Поиск по записям',
            ua: 'Пошук за записами',
            en: 'Search entries',
            de: 'Einträge suchen',
            pl: 'Szukaj w dzienniku',
        },
        empty: {
            ru: 'Пока нет записей',
            ua: 'Поки немає записів',
            en: 'No entries yet',
            de: 'Noch keine Einträge',
            pl: 'Brak wpisów',
        },
        emptyFiltered: {
            ru: 'Ничего не найдено по фильтру',
            ua: 'Нічого не знайдено за фільтром',
            en: 'No matches for current filter',
            de: 'Keine Treffer für diesen Filter',
            pl: 'Brak wyników dla filtra',
        },
        today: { ru: 'Сегодня', ua: 'Сьогодні', en: 'Today', de: 'Heute', pl: 'Dzisiaj' },
        yesterday: { ru: 'Вчера', ua: 'Вчора', en: 'Yesterday', de: 'Gestern', pl: 'Wczoraj' },
        loadError: { ru: 'Не удалось загрузить записи', ua: 'Не вдалося завантажити записи', en: 'Could not load entries', de: 'Einträge konnten nicht geladen werden', pl: 'Nie udało się wczytać wpisów' },
        retry: { ru: 'Повторить', ua: 'Повторити', en: 'Try again', de: 'Erneut versuchen', pl: 'Spróbuj ponownie' },
        // The journal's date filter while no days are picked.
        allTime: { ru: 'За всё время', ua: 'За весь час', en: 'All time', de: 'Gesamter Zeitraum' },
    },
    view: {
        feed: { ru: 'Журнал', ua: 'Журнал', en: 'Journal', de: 'Journal' },
        stats: { ru: 'Статистика', ua: 'Статистика', en: 'Statistics', de: 'Statistik' },
    },
    // The per-member statistics; each journal names its own columns under `<journal>.stats.metrics`.
    stats: {
        member: { ru: 'Участник', ua: 'Учасник', en: 'Member', de: 'Mitglied' },
        total: { ru: 'Всего', ua: 'Усього', en: 'Total', de: 'Gesamt' },
        empty: {
            ru: 'За этот период ничего не записано',
            ua: 'За цей період нічого не записано',
            en: 'Nothing was recorded in this period',
            de: 'In diesem Zeitraum wurde nichts erfasst',
        },
        loadError: {
            ru: 'Не удалось загрузить статистику',
            ua: 'Не вдалося завантажити статистику',
            en: 'Could not load the statistics',
            de: 'Statistik konnte nicht geladen werden',
        },
    },
};
