export const routes = {
    main: '/',
    users: '/users/:login',
    users_base: '/users/',
    search: '/search',
    auth: '/auth',
    settings: '/settings',
    create: '/create',
    liked: '/liked',
    post: '/post/:id',
    post_base: '/post/',
    not_found: '/*'
};

export const queryStringParams = {
    key: 'Key',
    limit: 'Limit',
    postId: 'postId',
    date: 'date',
    predicate: 'predicate'
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
    cancel: 'cancel',
    like: 'like',
    repost: 'repost',
    edit_post: 'edit_post',
    delete_post: 'delete_post'
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
            route: routes.liked
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
            key: buttons.edit_post,
            caption: 'Сохранить'
        },
        {
            key: buttons.cancel,
            caption: 'Отмена'
        }
    ],
    post_icons: [
        {
            key: buttons.like,
            icon: 'fa-heart'
        },
        {
            key: buttons.repost,
            icon: 'fa-arrow-up-right-from-square'
        },
        {
            key: buttons.edit_post,
            icon: 'fa-pen-to-square'
        },
        {
            key: buttons.delete_post,
            icon: 'fa-trash'
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
    post_data: 'post_data',
    menu_status: 'menu_status',
    found_post: 'found_post'
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