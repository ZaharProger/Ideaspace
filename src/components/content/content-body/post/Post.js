import React, { useContext } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import FooterButtons from '../FooterButtons';
import '../../../../styles/post.css';
import { contentContext, postContext } from '../../../../contexts';
import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates } from '../../../../globalConstants';

const Post = (props) => {
    //console.log('post');
    const enableSettings = useContext(contentContext).enable_settings;
    const footerButtons = useButtonsPane(enableSettings? paneTemplates.post_footer : paneTemplates.post_icons);

    return(
        <div id={ enableSettings? '' : props.item_data.postId } className="Post d-flex flex-column w-100">
            <postContext.Provider value={ props.item_data }>
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