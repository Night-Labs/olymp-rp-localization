// What the Inside Job server and client say: notifications, prompts, errors (server/client `gameEvents/modes/insideJob`).
export const server = {
    // Notifications of the server (`insideJob.server.notify.*`).
    notify: {},

    // Prompts and hints the client draws in the world (`insideJob.server.client.*`).
    client: {
        // A staff-only door's card reader refused a press (10).
        accessDenied: { ru: 'Доступ запрещён', ua: 'Доступ заборонено', en: 'Access denied', de: 'Zugriff verweigert' },
    },
};
