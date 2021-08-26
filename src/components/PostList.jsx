import React from 'react';
import Postitem from "./Postitem";

const PostList = ({posts, title, deleting}) => {
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