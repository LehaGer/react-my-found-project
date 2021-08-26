import React from 'react';
import MyButton from "./UI/button/MyButton";

const Postitem = (props) => {

    let id = props.number;
    let {title, body} = props.post;
    let deleting = props.deleting;

    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => deleting(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Postitem;