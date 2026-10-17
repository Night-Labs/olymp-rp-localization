// The date range calendar (`components/dateRange`), shared by every page that lets a player pick days.
export default {
    pickStart: { ru: 'Выберите первый день', ua: 'Оберіть перший день', en: 'Pick the first day', de: 'Ersten Tag wählen' },
    pickEnd: { ru: 'Выберите последний день', ua: 'Оберіть останній день', en: 'Pick the last day', de: 'Letzten Tag wählen' },
    placeholder: { ru: 'Период', ua: 'Період', en: 'Date range', de: 'Zeitraum' },
    maxDays: { ru: 'Не больше {{n}} дней', ua: 'Не більше {{n}} днів', en: 'Up to {{n}} days', de: 'Höchstens {{n}} Tage' },
    // Ready spans, by `DATE_RANGE_PRESETS` id.
    presets: {
        today: { ru: 'Сегодня', ua: 'Сьогодні', en: 'Today', de: 'Heute' },
        week: { ru: 'Эта неделя', ua: 'Цей тиждень', en: 'This week', de: 'Diese Woche' },
        lastWeek: { ru: 'Прошлая неделя', ua: 'Минулий тиждень', en: 'Last week', de: 'Letzte Woche' },
        month: { ru: '30 дней', ua: '30 днів', en: '30 days', de: '30 Tage' },
    },
};
