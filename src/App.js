import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

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



    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const createPosts = (newPost) => {
        setPostsJS([...postsJS, newPost])
    };

    return (
        <div className="App">
            <PostForm create={createPosts}/>
            <PostList posts={postsJS} title={"Posts list about JS"}/>
            <PostList posts={postsPHP} title={"Posts list about PHP"}/>
            <PostList posts={postsC} title={"Posts list about C++"}/>
            <PostList posts={postsPython} title={"Posts list about Python"}/>

        </div>
    );
}

export default App;