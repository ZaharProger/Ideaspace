import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { contentContext } from '../../../contexts';
import { reduxKeys, routes } from '../../../globalConstants';
import Post from './post/Post';
import PageEnd from './search-results/PageEnd';
import usePagination from '../../../hooks/usePagination';

const Wall = (props) => {
    //console.log('wall');
    const location = useLocation();
    const params = useParams();

    const profileData = useSelector(state => state.profile_data);
    const foundData = useSelector(state => state.post_data);
    const posts = foundData.data.filter(post => location.pathname == routes.liked? post.isLiked : !post.isLiked);

    const { apply_pagination: applyPagination } = usePagination(30, '/api/Posts', reduxKeys.post_data, foundData.end_index);

    const enableSettings = useContext(contentContext).enable_settings;
    const wallMargins = enableSettings? 'me-auto ms-auto mt-4' : 'ms-auto';
    
    useEffect(() => {
        if (!enableSettings){
            const searchKey = profileData !== null? profileData.userLogin : params.login;
            applyPagination(searchKey);
        }
    }, [applyPagination]);

    return(
        <div id="Wall" className={ `d-flex flex-column pt-4 ${props.wall_width} ${wallMargins}` }>
            {
                enableSettings? <Post item_data={ profileData } /> : posts.length != 0? 
                <>
                {
                    posts.map(post => <Post key={ post.postId } item_data={ post } />)
                }
                {
                    foundData.search_limit? null : <PageEnd />
                }
                </> : <span className="d-flex me-auto ms-auto mb-2">Записей не найдено...</span>
            }
        </div>
    )
}

export default Wall;