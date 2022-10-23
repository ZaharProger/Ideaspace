import React from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import '../../../../styles/post.css';

const Post = () => {
    //console.log('post');
    return(
        <div className="Post d-flex flex-column w-100">
            <PostHeader />
            <PostContent />
            <PostFooter />
        </div>
    )
}

export default Post;