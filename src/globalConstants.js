export const routes = {
    main: '/',
    users: '/users/:login',
    users_base: '/users/',
    search: '/search',
    auth: '/auth',
    settings: '/settings',
    create: '/create',
    not_found: '/*'
};

export const queryStringParams = {
    user_login: 'UserLogin',
    search_string: 'SearchString',
    limit: 'Limit'
}

export const errorMessages = {
    empty_fields: 'Заполните все поля!',
    invalid_login: 'В логине нельзя использовать пробел!',
    invalid_password: 'Длина пароля не менее 8 символов!',
    password_mismatch: 'Пароли не совпадают!'
}

export const requestTypes = {
    auth: 'auth',
    reg: 'reg',
    create: 'create',
    edit: 'edit',
    search: 'search'
}

export const buttons = {
    settings: 'settings',
    create: 'create',
    liked: 'liked',
    sign_out: 'sign out',
    save_profile: 'save_profile',
    create_post: 'create_post',
    cancel: 'cancel'
}

export const paneTemplates = {
    navigation: [
        {
            key: buttons.settings,
            icon: 'fa-gear',
            caption: 'Настройки',
            route: routes.settings
        },
        {
            key: buttons.create,
            icon: 'fa-circle-plus',
            caption: 'Создать',
            route: routes.create
        },
        {
            key: buttons.liked,
            icon: 'fa-heart',
            caption: 'Понравилось',
            route: routes.main
        },
        {
            key: buttons.sign_out,
            icon: 'fa-right-from-bracket',
            caption: 'Выход',
            route: routes.auth
        }
    ],
    profile_footer: [
        {
            key: buttons.save_profile,
            caption: 'Сохранить'
        },
        {
            key: buttons.cancel,
            caption: 'Отмена'
        }
    ],
    post_footer: [
        {
            key: buttons.create_post,
            caption: 'Создать'
        },
        {
            key: buttons.cancel,
            caption: 'Отмена'
        }
    ]
}

export const placeholders = {
    profile_content: 'Статус',
    profile_footer: 'дд.мм.гггг',
    post_content: 'Напишите ваши мысли'
}

export const reduxKeys = {
    sign_out: 'sign_out',
    profile_data: 'profile_data',
    found_user_data: 'found_user_data',
    search_data: 'search_data',
    search_limit: 'search_limit',
    end_index: 'end_index',
    menu_status: 'menu_status'

}

export const localStorageKeys = {
    is_logged: 'is_logged'
}

export const layoutTypes = {
    both: 'both',
    profile: 'profile',
    post: 'post',
    search: 'search'
}