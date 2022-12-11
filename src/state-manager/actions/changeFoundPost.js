import { FOUND_POST } from "../stateConstants";

const changeFoundPost = (foundPost) => {
    return {
        type: FOUND_POST,
        found_post: foundPost
    }
}

export default changeFoundPost;