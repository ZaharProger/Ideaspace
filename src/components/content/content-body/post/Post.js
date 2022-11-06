import React, { useContext } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import '../../../../styles/post.css';
import { contentContext } from '../../../../contexts';
import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates } from '../../../../globalConstants';

const Post = () => {
    //console.log('post');
    const footerButtons = useButtonsPane(paneTemplates.post_footer);
    const enableSettings = useContext(contentContext);

    return(
        <div className="Post d-flex flex-column w-100">
            <PostHeader />
            <PostContent />
            {
                enableSettings? 
                <>
                <span id="error-message" className="mt-2 me-auto ms-auto"></span>
                <div id="Footer-buttons" className="d-flex mt-4 mb-2">
                {
                    footerButtons
                }
                </div>
                </> : <PostFooter />
            }
        </div>
    )
}

export default Post;