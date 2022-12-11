const initialState = {
    profile_data: null,
    found_user_profile_data: null,
    search_data: {
        search_limit: false,
        end_index: 30,
        data: Array(0)
    },
    post_data: {
        search_limit: false,
        end_index: 30,
        data: Array(0)
    },
    menu_status: false,
    found_post: null
};

export default initialState;