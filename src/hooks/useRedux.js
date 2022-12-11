import { useDispatch } from "react-redux";
import { useCallback } from "react";

import changeProfileData from "../state-manager/actions/changeUserData";
import changeSearchData from '../state-manager/actions/changeSearchData';
import changePostData from '../state-manager/actions/changePostData';
import changeFoundUserProfileData from '../state-manager/actions/changeFoundUserProfileData';
import changeMenuStatus from '../state-manager/actions/changeMenuStatus';
import changeFoundPost from '../state-manager/actions/changeFoundPost';
import { reduxKeys } from "../globalConstants";

const useRedux = (reduxAction) => {
    const dispatch = useDispatch();

    let callback = null;
    switch(reduxAction){
        case reduxKeys.sign_out:
            callback = () => dispatch(changeProfileData(null));
            break;
        case reduxKeys.profile_data:
            callback = (profileData) => dispatch(changeProfileData(profileData));
            break;
        case reduxKeys.found_user_data:
            callback = (foundUserData) => dispatch(changeFoundUserProfileData(foundUserData));
            break;
        case reduxKeys.search_data:
            callback = (searchData) => dispatch(changeSearchData(searchData));
            break;
        case reduxKeys.post_data:
            callback = (postData) => dispatch(changePostData(postData));
            break;
        case reduxKeys.menu_status:
            callback = (menuStatus) => dispatch(changeMenuStatus(menuStatus));
            break;
        case reduxKeys.found_post:
            callback = (foundPost) => dispatch(changeFoundPost(foundPost));
            break;
    }

    return useCallback(callback, []);
}

export default useRedux;