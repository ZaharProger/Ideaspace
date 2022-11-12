import { END_INDEX } from "../stateConstants"

const changeEndIndex = (endIndex) => {
    return {
        type: END_INDEX,
        end_index: endIndex
    }
}

export default changeEndIndex;