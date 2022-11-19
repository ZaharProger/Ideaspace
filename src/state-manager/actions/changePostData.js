import { POST_DATA } from "../stateConstants";

const changePostData = (postData) => {
    return {
        type: POST_DATA,
        post_data: postData
    }
}

export default changePostData;