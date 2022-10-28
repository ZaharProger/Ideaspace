import { USER_DATA } from "../stateConstants";

const changeUserData = (userData) => {
    return {
        type: USER_DATA,
        user_data: userData
    }
}

export default changeUserData;