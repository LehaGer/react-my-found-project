import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, deleting}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>Posts about JS not found</h1>
        )
    }

    return (
        <div style={{marginBottom: '20px'}}>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>{title}</h1>
            <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={150}
                            classNames="post"
                        >
                            <PostItem number={index + 1} post={post} deleting={deleting}/>
                        </CSSTransition>
                    )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;