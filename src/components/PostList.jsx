import React from 'react';
import Postitem from "./Postitem";
import {TransitionGroup} from "react-transition-group";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const PostList = ({posts, title, deleting}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>Posts about JS not found</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>{title}</h1>
            <TransitionGroup>

                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <Postitem number={index + 1} post={post} key={post.id} deleting={deleting}/>
                        </CSSTransition>
                    )}


            </TransitionGroup>

        </div>
    );
};

export default PostList;