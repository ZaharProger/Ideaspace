import { FOUND_USER_PROFILE_DATA } from "../stateConstants";

const changeFoundUserProfileData = (foundUserProfileData) => {
    return {
        type: FOUND_USER_PROFILE_DATA,
        found_user_profile_data: foundUserProfileData
    }
}

export default changeFoundUserProfileData;