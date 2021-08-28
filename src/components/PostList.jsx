import React from 'react';
import Postitem from "./Postitem";

const PostList = ({posts, title, deleting}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>Posts about JS not found</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>{title}</h1>
            {posts.map((post, index) =>
                <Postitem number={index + 1} post={post} key={post.id} deleting={deleting}/>
            )}
        </div>
    );
};

export default PostList;