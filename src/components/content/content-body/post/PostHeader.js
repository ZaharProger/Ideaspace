import React from 'react';

const PostHeader = () => {
    return(
        <div className="Post-header d-flex flex-row w-100 p-2">
            <span className="d-flex flex-grow-1">Пользователь</span>
            <span>26.09.2022</span>
            <span>19:27</span>
        </div>
    )
}

export default PostHeader;