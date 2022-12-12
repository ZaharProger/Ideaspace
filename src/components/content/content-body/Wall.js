import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { contentContext } from '../../../contexts';
import { reduxKeys, routes, buttons, queryStringParams } from '../../../globalConstants';
import Post from './post/Post';
import PageEnd from './search-results/PageEnd';
import usePagination from '../../../hooks/usePagination';
import useRedirection from '../../../hooks/useRedirection';

const Wall = (props) => {
    //console.log('wall');
    const location = useLocation();
    const redirect = useRedirection();

    const foundProfileData = useSelector(state => state.found_user_profile_data);
    const profileData = useSelector(state => state.profile_data);
    const foundData = useSelector(state => state.post_data);
    const foundPostData = useSelector(state => state.found_post);

    const { apply_pagination: applyPagination } = usePagination(30, '/api/Posts', reduxKeys.post_data, foundData.end_index);

    const enableSettings = useContext(contentContext).enable_settings;
    const wallMargins = enableSettings? 'me-auto ms-auto mt-4' : 'ms-auto';
    
    const getComponent = () => {
        let component = null;

        if (enableSettings){
            component = <Post item_data={ {
                profile_data: profileData,
                post_data: location.pathname == routes.create? null : foundPostData
            } } />;
        }
        else{
            component = foundData.data.length != 0? 
            <>
            {
                foundData.data.map(post => <Post key={ post.postId } item_data={ {
                    profile_data: profileData,
                    post_data: post
                } } />)
            }
            {
                foundData.search_limit? null : <PageEnd />
            }
            </> : <span className="d-flex me-auto ms-auto mb-2">Записей не найдено...</span>
        }

        return component;
    }

    useEffect(() => {
        if (enableSettings){
            const postForm = document.querySelector('.Post');
            postForm.querySelector('textarea').value = location.pathname == routes.create? '' : foundPostData !== null? foundPostData.content : '';
        }
        else{
            Array.from(document.getElementsByClassName('Post')).forEach(postElement => {
                const foundPost = foundData.data.find(post => post.postId == postElement.id);

                let headerCaption = '';
                if (location.pathname.includes(routes.users_base) && foundProfileData !== null){
                    headerCaption = foundProfileData.userLogin == foundPost.userLogin?
                    foundPost.userLogin : `Репост записи ${foundPost.userLogin}`;                   
                }
                else if (profileData !== null){
                    headerCaption = profileData.userLogin == foundPost.userLogin || !foundPost.isReposted?
                    foundPost.userLogin : `Репост записи ${foundPost.userLogin}`;
                }
                postElement.querySelector('.Post-header').querySelector('span').innerText = headerCaption;

                Array.from(postElement.getElementsByClassName('footer-button')).forEach(button => {                
                    const buttonIcon = button.querySelector('i');
                    const buttonCaption = button.querySelector('span');

                    if (button.classList.contains(buttons.like)){
                        buttonCaption.innerText = foundPost.likesAmount;
                    }
                    else if (button.classList.contains(buttons.repost)){
                        buttonCaption.innerText = foundPost.repostsAmount;
                    }

                    const isButtonLiked = button.classList.contains(buttons.like) && foundPost.isLiked;
                    const isButtonReposted = button.classList.contains(buttons.repost) && foundPost.isReposted;

                    isButtonLiked || isButtonReposted? button.classList.add('pressed') : button.classList.remove('pressed');
                    buttonIcon.classList.replace(isButtonLiked || isButtonReposted? 'fa-regular' : 'fa-solid', 
                    isButtonLiked || isButtonReposted? 'fa-solid' : 'fa-regular');

                    button.onclick =  !button.classList.contains(buttons.edit_post) && !button.classList.contains(buttons.delete_post)? 
                    async () => {
                        let apiEndpoint = button.classList.contains(buttons.like)? '/api/Likes?' : '/api/Reposts?';
                        apiEndpoint += `${queryStringParams.postId}=${foundPost.postId}&${queryStringParams.date}=${Math.floor(new Date().getTime() / 1000)}`;                       

                        if (!buttonIcon.classList.contains('post-footer-animation')){
                            buttonIcon.classList.add('post-footer-animation');
                            setTimeout(() => buttonIcon.classList.remove('post-footer-animation'), 1100);
                        }

                        const isButtonPressed = button.classList.contains('pressed');
                        isButtonPressed? button.classList.remove('pressed') : button.classList.add('pressed');
                        buttonIcon.classList.replace(isButtonPressed? 'fa-solid' : 'fa-regular', 
                        isButtonPressed? 'fa-regular' : 'fa-solid');
                        buttonCaption.innerText = isButtonPressed?
                        parseInt(buttonCaption.innerText) - 1 : parseInt(buttonCaption.innerText) + 1;
                        
                        const response = await fetch(apiEndpoint, {
                            method: isButtonPressed? 'DELETE' : 'POST'
                        });
                        
                        if (response.ok){
                            const responseData = await response.json();
                            if (!responseData.result){
                                isButtonPressed? button.classList.add('pressed') : button.classList.remove('pressed');
                                buttonIcon.classList.replace(isButtonPressed? 'fa-regular' : 'fa-solid', 
                                isButtonPressed? 'fa-solid' : 'fa-regular');
                                buttonCaption.innerText = isButtonPressed?
                                parseInt(buttonCaption.innerText) + 1 : parseInt(buttonCaption.innerText) - 1;
                            }
                        }
                    }
                    :
                    async () => {
                        if (button.classList.contains(buttons.delete_post)){
                            const postDeleteCaption = postElement.querySelector('.delete-caption');

                            if (button.classList.contains('pressed')){
                                const response = await fetch(`/api/Posts?${queryStringParams.postId}=${foundPost.postId}`, {
                                    method: 'DELETE'
                                });

                                if (response.ok){
                                    const responseData = await response.json();
                                    if (responseData.result){
                                        document.getElementById(foundPost.postId).remove();
                                    }
                                }  
                            }
                            else{
                                buttonIcon.classList.replace('fa-regular', 'fa-solid');
                                button.classList.add('pressed');   
                                postDeleteCaption.innerText = 'Нажмите на иконку еще раз для удаления';   
                                
                                setTimeout(() => {
                                    buttonIcon.classList.replace('fa-solid', 'fa-regular');
                                    button.classList.remove('pressed');
                                    postDeleteCaption.innerText = '';
                                }, 5000);
                            }
                        }
                        else{
                            postElement.classList.add('chosen');
                            redirect(routes.post);
                        }
                    }
                });
            });
            
            let searchKey = '';
            if (location.pathname.includes(routes.users_base) && foundProfileData !== null){
                searchKey = foundProfileData.userLogin;
            }
            else if (profileData !== null){
                searchKey = profileData.userLogin;
            }   
            
            applyPagination(searchKey); 
        }
    }, [foundData, applyPagination]);

    return(
        <div id="Wall" className={ `d-flex flex-column pt-4 ${props.wall_width} ${wallMargins}` }>
            {
                getComponent()
            }
        </div>
    )
}

export default Wall;