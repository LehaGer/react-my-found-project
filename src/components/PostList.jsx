import React from 'react';
import Postitem from "./Postitem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>{title}</h1>
            {posts.map(post =>
                <Postitem  post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;