import React, { useContext } from 'react';

import { contentContext, postContext } from '../../../../contexts';
import { placeholders } from '../../../../globalConstants';

const PostContent = () => {
    //console.log('post-content');
    const postContextData = useContext(postContext);
    const enableSettings = useContext(contentContext).enable_settings;

    return(
        <div className="Post-content d-flex">
            {
                enableSettings?
                <textarea name="Content" type="text" autoComplete="off" placeholder={ placeholders.post_content }
                className="input-placeholder w-100"></textarea>
                :
                <p>{ postContextData.content.split('\r\n').map(splittedItem => [splittedItem, <br />]) }</p>
            }
        </div>
    )
}

export default PostContent;