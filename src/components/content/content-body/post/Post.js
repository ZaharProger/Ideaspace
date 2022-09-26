import React from 'react';

import PostContent from './PostContent';
import PostFooter from './PostFooter';
import '../../../../styles/post.css';

const Post = () => {
    return(
        <div id="Post" className="d-flex flex-column flex-grow-1 p-2">
            <PostContent />
            <PostFooter />
        </div>
    )
}

export default Post;