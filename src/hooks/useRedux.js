import { useDispatch } from "react-redux";
import { useCallback } from "react";

import changeUserData from "../state-manager/actions/changeUserData";
import changeSearchData from '../state-manager/actions/changeSearchData';
import changeSearchLimit from '../state-manager/actions/changeSearchLimit';
import { reduxKeys } from "../globalConstants";

const useRedux = (reduxAction) => {
    const dispatch = useDispatch();

    let callback = null;
    switch(reduxAction){
        case reduxKeys.sign_out:
            callback = () => dispatch(changeUserData(null));
            break;
        case reduxKeys.get_user:
            callback = (userData) => dispatch(changeUserData(userData));
            break;
        case reduxKeys.search_data:
            callback = (searchData) => dispatch(changeSearchData(searchData));
            break;
        case reduxKeys.search_limit:
            callback = (searchLimit) => dispatch(changeSearchLimit(searchLimit));
            break;
    }

    return useCallback(callback, []);
}

export default useRedux;