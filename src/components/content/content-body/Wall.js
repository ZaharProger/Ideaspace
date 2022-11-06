import React, { useContext } from 'react';

import { contentContext } from '../../../contexts';
import Post from './post/Post';

const Wall = (props) => {
    //console.log('wall');

    const enableSettings = useContext(contentContext);
    const posts = [
        <Post key="0" />,
        <Post key="1" />,
        <Post key="2" />,
        <Post key="3" />,
        <Post key="4" />
    ]

    const wallMargins = enableSettings? 'me-auto ms-auto mt-4' : 'ms-auto';
    
    return(
        <div id="Wall" className={ `d-flex flex-column pt-4 ${props.wall_width} ${wallMargins}` }>
            {
                enableSettings? <Post /> : posts
            }
        </div>
    )
}

export default Wall;