import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { contentContext } from '../../../contexts';
import { reduxKeys, routes, buttons, queryStringParams } from '../../../globalConstants';
import Post from './post/Post';
import PageEnd from './search-results/PageEnd';
import usePagination from '../../../hooks/usePagination';

const Wall = (props) => {
    //console.log('wall');
    const location = useLocation();
    const params = useParams();

    const profileData = useSelector(state => state.profile_data);
    const foundData = useSelector(state => state.post_data);
    const posts = foundData.data.filter(post => {
        let predicate = true;

        if (location.pathname == routes.liked){
            predicate = post.isLiked;
        }
        else if (location.pathname == routes.main){
            predicate = post.isReposted || profileData.userLogin == post.userLogin;
        }

        return predicate;
    });

    const { apply_pagination: applyPagination } = usePagination(30, '/api/Posts', reduxKeys.post_data, foundData.end_index);

    const enableSettings = useContext(contentContext).enable_settings;
    const wallMargins = enableSettings? 'me-auto ms-auto mt-4' : 'ms-auto';
    
    useEffect(() => {
        if (!enableSettings){
            Array.from(document.getElementsByClassName('Post')).forEach(postElement => {
                Array.from(postElement.getElementsByClassName('footer-button')).forEach(button => {
                    const foundPost = posts.find(post => post.postId == postElement.id);
                    const buttonIcon = button.querySelector('i');
                    const buttonCaption = button.querySelector('span');

                    if (button.classList.contains(buttons.like)){
                        buttonCaption.innerText = foundPost.likesAmount != 0? foundPost.likesAmount : '';
                    }
                    else if (button.classList.contains(buttons.repost)){
                        buttonCaption.innerText = foundPost.repostsAmount != 0? foundPost.repostsAmount : '';
                    }

                    const isButtonLiked = button.classList.contains(buttons.like) && foundPost.isLiked;
                    const isButtonReposted = button.classList.contains(buttons.repost) && foundPost.isReposted;

                    isButtonLiked || isButtonReposted? button.classList.add('pressed') : button.classList.remove('pressed');
                    buttonIcon.classList.replace(isButtonLiked || isButtonReposted? 'fa-regular' : 'fa-solid', 
                    isButtonLiked || isButtonReposted? 'fa-solid' : 'fa-regular');

                    button.onclick = async () => {
                        let apiEndpoint = button.classList.contains(buttons.like)? '/api/Likes?' : '/api/Reposts?';

                        apiEndpoint += `${queryStringParams.postId}=${foundPost.postId}`;
                        if (button.classList.contains(buttons.repost)){
                            apiEndpoint += `&${queryStringParams.date}=${Math.floor(new Date().getTime() / 1000)}`;
                        }

                        if (!buttonIcon.classList.contains('post-footer-animation')){
                            buttonIcon.classList.add('post-footer-animation');
                            setTimeout(() => buttonIcon.classList.remove('post-footer-animation'), 1100);
                        }

                        const isButtonPressed = button.classList.contains('pressed');
                        isButtonPressed? button.classList.remove('pressed') : button.classList.add('pressed');
                        buttonIcon.classList.replace(isButtonPressed? 'fa-solid' : 'fa-regular', 
                        isButtonPressed? 'fa-regular' : 'fa-solid');
                        if (isButtonPressed){
                            buttonCaption.innerText = button.classList.contains(buttons.like)? --foundPost.likesAmount :
                            --foundPost.repostsAmount;
                        }
                        else{
                            buttonCaption.innerText = button.classList.contains(buttons.like)? ++foundPost.likesAmount :
                            ++foundPost.repostsAmount;
                        }
                        
                        const response = await fetch(apiEndpoint, {
                            method: isButtonPressed? 'DELETE' : 'POST'
                        });
                        
                        if (response.ok){
                            const responseData = await response.json();
                            if (!responseData.result){
                                isButtonPressed? button.classList.add('pressed') : button.classList.remove('pressed');
                                button.classList.replace(isButtonPressed? 'fa-regular' : 'fa-solid', 
                                isButtonPressed? 'fa-solid' : 'fa-regular');
                                if (isButtonPressed){
                                    buttonCaption.innerText = button.classList.contains(buttons.like)? ++foundPost.likesAmount :
                                    ++foundPost.repostsAmount;
                                }
                                else{
                                    buttonCaption.innerText = button.classList.contains(buttons.like)? --foundPost.likesAmount :
                                    --foundPost.repostsAmount;
                                }
                            }
                        }
                    }
                });
            });
            const searchKey = profileData !== null? profileData.userLogin : params.login;
            applyPagination(searchKey);
        }
    }, [foundData]);

    return(
        <div id="Wall" className={ `d-flex flex-column pt-4 ${props.wall_width} ${wallMargins}` }>
            {
                enableSettings? <Post item_data={ {
                    profile_data: profileData,
                    post_data: null
                } } /> : posts.length != 0? 
                <>
                {
                    posts.map(post => <Post key={ post.postId } item_data={ {
                        profile_data: profileData,
                        post_data: post
                    } } />)
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