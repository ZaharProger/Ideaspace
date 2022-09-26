import React from 'react';

import Post from './post/Post';
import '../../../styles/wall.css';

const Wall = () => {
    const posts = [
        <Post key="0" />,
        <Post key="1" />,
        <Post key="2" />,
        <Post key="3" />,
        <Post key="4" />
    ]
    return(
        <div id="Wall" className="d-flex flex-column">
            {
                posts
            }
        </div>
    )
}

export default Wall;