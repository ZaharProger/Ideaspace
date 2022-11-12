import { MENU_STATUS } from "../stateConstants";

const changeMenuStatus = (menuStatus) => {
    return {
        type: MENU_STATUS,
        menu_status: menuStatus
    }
}

export default changeMenuStatus;