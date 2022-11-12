import { PROFILE_DATA } from "../stateConstants";

const changeUserData = (profileData) => {
    return {
        type: PROFILE_DATA,
        profile_data: profileData
    }
}

export default changeUserData;