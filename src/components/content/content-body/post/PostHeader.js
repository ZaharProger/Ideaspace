import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { contentContext } from '../../../../contexts';
import userIconPost from '../../../../pics/user-icon-post.svg';

const PostHeader = () => {
    //console.log('post-header');
    const enableSettings = useContext(contentContext);
    const userData = useSelector(state => state.user_data);
    
    let userLogin;
    if (enableSettings){
        userLogin = userData !== null? userData.user_login : '';
    }
    else{
        userLogin = 'Пользователь';
    }

    return(
        <div className="Post-header d-flex flex-row w-100 p-2 flex-wrap">
            <img src={ userIconPost } alt="user-icon" />
            <span className="d-flex flex-grow-1">{ userLogin }</span>
            {
                enableSettings?
                null
                :
                <>
                    <span>{ '26.09.2022' }</span>
                    <span>{ '19:27' }</span>
                </>
            }
        </div>
    )
}

export default PostHeader;