import React from 'react';

import userIconPost from '../../../../pics/user-icon-white.svg';

const PostHeader = () => {
    return(
        <div className="Post-header d-flex flex-row w-100 p-2">
            <img src={ userIconPost } alt="user-icon" />
            <span className="d-flex flex-grow-1">Пользователь</span>
            <span>26.09.2022</span>
            <span>19:27</span>
        </div>
    )
}

export default PostHeader;