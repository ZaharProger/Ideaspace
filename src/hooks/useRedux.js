import { useDispatch } from "react-redux";
import { useCallback } from "react";

import changeProfileData from "../state-manager/actions/changeUserData";
import changeSearchData from '../state-manager/actions/changeSearchData';
import changeSearchLimit from '../state-manager/actions/changeSearchLimit';
import changeEndIndex from '../state-manager/actions/changeEndIndex';
import changeFoundUserProfileData from '../state-manager/actions/changeFoundUserProfileData';
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
        case reduxKeys.search_limit:
            callback = (searchLimit) => dispatch(changeSearchLimit(searchLimit));
            break;
        case reduxKeys.end_index:
            callback = (endIndex) => dispatch(changeEndIndex(endIndex));
            break;
    }

    return useCallback(callback, []);
}

export default useRedux;