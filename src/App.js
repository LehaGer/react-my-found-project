import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [postsJS, setPostsJS] = useState([
        {title: 'JS', body: 'Some description about JS'},
        {title: 'JS', body: 'Some description about JS'},
        {title: 'JS', body: 'Some description about JS'},
    ]);
    const [postsPHP, setPostsPHP] = useState([
        {title: 'PHP', body: 'Some description about PHP'},
        {title: 'PHP', body: 'Some description about PHP'},
        {title: 'PHP', body: 'Some description about PHP'},
    ]);
    const [postsC, setPostsC] = useState([
        {title: 'C++', body: 'Some description about C++'},
        {title: 'C++', body: 'Some description about C++'},
        {title: 'C++', body: 'Some description about C++'},
    ]);
    const [postsPython, setPostsPython] = useState([
        {title: 'Python', body: 'Some description about Python'},
        {title: 'Python', body: 'Some description about Python'},
        {title: 'Python', body: 'Some description about Python'},
    ]);

    const [post, setPost] = useState({title: '', body: ''});

    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        setPostsJS([...postsJS, {title: post.title, body: post.body}]);
        /*для неуправляемого компонента*/
        //*console.log(bodyInputRef.current.value);
        setPost({title: '', body: ''});

    };

    return (
        <div className="App">
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
            <PostList posts={postsJS} title={"Posts list about JS"}/>
            <PostList posts={postsPHP} title={"Posts list about PHP"}/>
            <PostList posts={postsC} title={"Posts list about C++"}/>
            <PostList posts={postsPython} title={"Posts list about Python"}/>

        </div>
    );
}

export default App;