import React, { useContext } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import '../../../../styles/post.css';
import { contentContext, postContext } from '../../../../contexts';
import useButtonsPane from '../../../../hooks/useButtonsPane';
import { paneTemplates } from '../../../../globalConstants';

const Post = (props) => {
    //console.log('post');
    const footerButtons = useButtonsPane(paneTemplates.post_footer);
    const enableSettings = useContext(contentContext).enable_settings;

    return(
        <div className="Post d-flex flex-column w-100">
            <postContext.Provider value={ props.item_data }>
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
            </postContext.Provider>
        </div>
    )
}

export default Post;