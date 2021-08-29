import React, {useRef, useState, useMemo} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS1', body: 'Some description about JSg'},
        {id: 2, title: 'JS2', body: 'Some description about JSf'},
        {id: 3, title: 'JS3', body: 'Some description about JSie'},
        {id: 4, title: 'JS4', body: 'Some description about JSd'},
        {id: 5, title: 'JS5', body: 'Some description about JSc'},
        {id: 6, title: 'JS6', body: 'Some description about JSb'},
        {id: 7, title: 'JS7', body: 'Some description about JSa'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    //const sortedPosts = geSortedPosts();

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: '20px'}}>
                create new post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={addPost}/>
            </MyModal>
            <hr style={{width: "100%", margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title={"Posts list about JS"} deleting={deletePost}/>
        </div>
    );
}

export default App;