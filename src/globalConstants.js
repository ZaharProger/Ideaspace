export const routes = {
    main: '/',
    auth: '/auth',
    settings: '/settings',
    create: '/create',
    not_found: '/*'
};

export const localStorageKeys = {
    session_id: "session_id"
}

export const queryStringParams = {
    session_id: 'SessionId',
    user_id: 'UserId',
    search_string: 'SearchString'
}

export const errorMessages = {
    empty_fields: 'Заполните все поля!',
    invalid_login: 'В логине нельзя использовать пробел!',
    invalid_password: 'Длина пароля не менее 8 символов!',
    password_mismatch: 'Пароли не совпадают!'
}

export const RequestTypes = {
    auth: 'auth',
    reg: 'reg'
}

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