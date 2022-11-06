import React, { useContext } from 'react';

import { contentContext } from '../../../../contexts';
import { profilePlaceholders } from '../../../../globalConstants';

const PostContent = () => {
    //console.log('post-content');
    const enableSettings = useContext(contentContext);

    return(
        <div className="Post-content d-flex">
            {
                enableSettings?
                <textarea name="Content" type="text" autoComplete="off" placeholder={ profilePlaceholders.post_content }
                className="input-placeholder w-100"></textarea>
                :
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</p>
            }
        </div>
    )
}

export default PostContent;