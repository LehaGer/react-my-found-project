import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        /*для неуправляемого компонента*/
        //*console.log(bodyInputRef.current.value);
        setPost({title: '', body: ''});
        create(post);
    };

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                type="text"
                placeholder={"name of post"}
                value={post.title}
                onChange={e =>setPost({...post, title: e.target.value})}
            />
            {/*Управляемый компонент, был неуправляемым*/}
            <MyInput
                type="text"
                placeholder={"description of post"}
                /*для неуправляемого компонента*/
                //ref={bodyInputRef}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;