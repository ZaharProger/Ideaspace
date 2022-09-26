import React from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import '../../../../styles/post.css';

const Post = () => {
    return(
        <div className="Post d-flex flex-column col-8 w-100">
            <PostHeader />
            <PostContent />
            <PostFooter />
        </div>
    )
}

export default Post;