import React, { useContext } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import FooterButtons from '../FooterButtons';
import '../../../../styles/post.css';
import { contentContext, postContext } from '../../../../contexts';
import useButtonsPane from '../../../../hooks/useButtonsPane';
import { buttons, paneTemplates } from '../../../../globalConstants';

const Post = (props) => {
    //console.log('post');
    const enableSettings = useContext(contentContext).enable_settings;
    let footerButtons = useButtonsPane(enableSettings? paneTemplates.post_footer : paneTemplates.post_icons);

    if (!enableSettings){
        footerButtons = footerButtons.filter(footerButton => {
            let predicateResult;
            if (props.item_data.post_data.userLogin == props.item_data.profile_data.userLogin){
                predicateResult = props.item_data.post_data.parentUserId !== null?
                ![buttons.repost, buttons.edit_post, buttons.delete_post].includes(footerButton.key) : footerButton.key != buttons.repost;
            }
            else{
                predicateResult = ![buttons.edit_post, buttons.delete_post].includes(footerButton.key);
            }

            return predicateResult;
        });
    }

    return(
        <div id={ enableSettings? '' : props.item_data.post_data.postId } className="Post d-flex flex-column w-100">
            <postContext.Provider value={ props.item_data.post_data }>
                <PostHeader />
                <PostContent />
                {
                    enableSettings? 
                    <span id="error-message" className="mt-2 me-auto ms-auto"></span> : null
                }
                <FooterButtons buttons={ footerButtons } />
            </postContext.Provider>
        </div>
    )
}

export default Post;