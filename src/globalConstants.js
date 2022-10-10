export const routes = {
    main: '/',
    auth: '/auth',
    settings: '/settings',
    create: '/create',
    not_found: '/*'
};

export const paneTemplates = {
    navigation: [
        {
            key: 'settings',
            icon: 'fa-gear',
            caption: 'Настройки',
            route: routes.settings
        },
        {
            key: 'create',
            icon: 'fa-circle-plus',
            caption: 'Создать',
            route: routes.create
        },
        {
            key: 'liked',
            icon: 'fa-heart',
            caption: 'Понравилось',
            route: routes.main
        },
        {
            key: 'sign out',
            icon: 'fa-right-from-bracket',
            caption: 'Выход',
            route: routes.auth
        }
    ],
    profile_footer: [
        {
            key: 'save',
            caption: 'Сохранить'
        },
        {
            key: 'cancel',
            caption: 'Отмена'
        }
    ]
}