import React from 'react';
import Postitem from "./Postitem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>{title}</h1>
            {posts.map((post, index) =>
                <Postitem number={index + 1} post={post} key={index + 1}/>
            )}
        </div>
    );
};

export default PostList;