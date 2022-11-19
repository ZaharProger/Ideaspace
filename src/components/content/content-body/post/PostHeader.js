import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { contentContext, postContext } from '../../../../contexts';
import { routes } from '../../../../globalConstants';
import userIconPost from '../../../../pics/user-icon-post.svg';

const PostHeader = () => {
    //console.log('post-header');
    const location = useLocation();

    const profileData = useSelector(state => state.profile_data);
    const postContextData = useContext(postContext);
    const contentContextData = useContext(contentContext);

    const prepareUserLogin = () => profileData.userLogin != postContextData.userLogin && location.pathname == routes.main?
    `Репост записи ${postContextData.userLogin}` : postContextData.userLogin;

    const prepareCreationTime = () => {
        let creationTimeHours = Math.trunc(postContextData.creationTime / 3600);
        let creationTimeMinutes = Math.trunc((postContextData.creationTime - creationTimeHours * 3600) / 60);

        creationTimeHours = creationTimeHours < 10? `0${creationTimeHours}` : creationTimeHours;
        creationTimeMinutes = creationTimeMinutes < 10? `0${creationTimeMinutes}` : creationTimeMinutes;

        return `${creationTimeHours}:${creationTimeMinutes}`;
    }

    return(
        <div className="Post-header d-flex flex-row w-100 p-2 flex-wrap">
            {
                contentContextData.enable_settings?
                <span className="d-flex me-auto ms-auto">Создание новой записи</span>
                :
                <>
                    <img src={ userIconPost } alt="user-icon" />
                    <span className="d-flex flex-grow-1">{ prepareUserLogin() }</span>
                    <span>{ new Date(postContextData.creationDate * 1000).toLocaleDateString('fr-CH') }</span>
                    <span>{ prepareCreationTime() }</span>
                </>
            }
        </div>
    )
}

export default PostHeader;