export default {
    difficulty: {
        easy: { ru: 'Простое', ua: 'Просте', en: 'Easy', de: 'Leicht' },
        medium: { ru: 'Среднее', ua: 'Середнє', en: 'Medium', de: 'Mittel' },
        hard: { ru: 'Сложное', ua: 'Складне', en: 'Hard', de: 'Schwer' },
    },
    orphan: { ru: 'шаблон удалён', ua: 'шаблон видалено', en: 'template removed', de: 'Vorlage entfernt' },
    taskDone: { ru: 'выполнено', ua: 'виконано', en: 'done', de: 'erledigt' },
    tasksHeader: {
        ru: 'Задания БП {{name}}: {{count}}. Замена: /bp_replace_task {{name}} номер',
        ua: 'Завдання БП {{name}}: {{count}}. Заміна: /bp_replace_task {{name}} номер',
        en: 'BP tasks of {{name}}: {{count}}. Replace: /bp_replace_task {{name}} number',
        de: 'BP-Aufgaben von {{name}}: {{count}}. Ersetzen: /bp_replace_task {{name}} Nummer',
    },
    tasksEmpty: {
        ru: 'У игрока {{name}} нет заданий БП',
        ua: 'У гравця {{name}} немає завдань БП',
        en: '{{name}} has no BP tasks',
        de: '{{name}} hat keine BP-Aufgaben',
    },
    badIndex: {
        ru: 'У игрока нет задания #{{index}} (всего {{count}})',
        ua: 'У гравця немає завдання #{{index}} (усього {{count}})',
        en: 'The player has no task #{{index}} (total {{count}})',
        de: 'Der Spieler hat keine Aufgabe #{{index}} (insgesamt {{count}})',
    },
    orphanTask: {
        ru: 'Шаблон задания #{{index}} удалён из конфига, используйте /bp_refresh_tasks',
        ua: 'Шаблон завдання #{{index}} видалено з конфігу, використайте /bp_refresh_tasks',
        en: 'The template of task #{{index}} is gone from the config, use /bp_refresh_tasks',
        de: 'Die Vorlage der Aufgabe #{{index}} fehlt in der Konfiguration, nutze /bp_refresh_tasks',
    },
    noCandidates: {
        ru: 'Нет доступных игроку заданий этой сложности для замены',
        ua: 'Немає доступних гравцеві завдань цієї складності для заміни',
        en: 'No tasks of this difficulty are available to the player',
        de: 'Für den Spieler sind keine Aufgaben dieser Schwierigkeit verfügbar',
    },
    replaceTitle: {
        ru: 'Замена задания #{{index}} ({{difficulty}})',
        ua: 'Заміна завдання #{{index}} ({{difficulty}})',
        en: 'Replace task #{{index}} ({{difficulty}})',
        de: 'Aufgabe #{{index}} ersetzen ({{difficulty}})',
    },
    replaceMessage: {
        ru: 'Игрок {{name}}. Сейчас: {{title}} ({{id}}), {{progress}}/{{target}}. Выберите новое задание:',
        ua: 'Гравець {{name}}. Зараз: {{title}} ({{id}}), {{progress}}/{{target}}. Оберіть нове завдання:',
        en: 'Player {{name}}. Now: {{title}} ({{id}}), {{progress}}/{{target}}. Pick the new task:',
        de: 'Spieler {{name}}. Aktuell: {{title}} ({{id}}), {{progress}}/{{target}}. Wähle die neue Aufgabe:',
    },
    cancel: { ru: 'Отмена', ua: 'Скасувати', en: 'Cancel', de: 'Abbrechen' },
    taskChanged: {
        ru: 'Задания игрока изменились, откройте замену заново',
        ua: 'Завдання гравця змінилися, відкрийте заміну знову',
        en: "The player's tasks changed, open the replacement again",
        de: 'Die Aufgaben des Spielers haben sich geändert, öffne das Ersetzen erneut',
    },
    replaced: {
        ru: 'Задание #{{index}} заменено: {{from}} -> {{to}} (цель {{target}})',
        ua: 'Завдання #{{index}} замінено: {{from}} -> {{to}} (ціль {{target}})',
        en: 'Task #{{index}} replaced: {{from}} -> {{to}} (target {{target}})',
        de: 'Aufgabe #{{index}} ersetzt: {{from}} -> {{to}} (Ziel {{target}})',
    },
};
