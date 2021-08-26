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
        {id: 1, title: 'JS', body: 'Some description about JS'},
        {id: 2, title: 'JS', body: 'Some description about JS'},
        {id: 3, title: 'JS', body: 'Some description about JS'},
    ]);
    const [postsPHP, setPostsPHP] = useState([
        {id: 1, title: 'PHP', body: 'Some description about PHP'},
        {id: 2, title: 'PHP', body: 'Some description about PHP'},
        {id: 3, title: 'PHP', body: 'Some description about PHP'},
    ]);
    const [postsC, setPostsC] = useState([
        {id: 1, title: 'C++', body: 'Some description about C++'},
        {id: 2, title: 'C++', body: 'Some description about C++'},
        {id: 3, title: 'C++', body: 'Some description about C++'},
    ]);
    const [postsPython, setPostsPython] = useState([
        {id: 1, title: 'Python', body: 'Some description about Python'},
        {id: 2, title: 'Python', body: 'Some description about Python'},
        {id: 3, title: 'Python', body: 'Some description about Python'},
    ]);

    const [title, setTitle] = useState('Default title');

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        //setPostsJS(...postsJS, {id: 4, title: title, body: description});
        e.preventDefault();
        //setPostsJS(postsJS.push({id: 4, title: title, body: description}))
        console.log(title);
        console.log(bodyInputRef.current.value);
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    type="text"
                    placeholder={"name of post"}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                {/*Неуправляемый компонент*/}
                <MyInput
                    type="text"
                    placeholder={"description of post"}
                    ref={bodyInputRef}
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