import React, {useRef, useState, useMemo, useEffect} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    },[]);

    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    async function fetchPosts() {
        setPostsLoading(true);
        setTimeout(async () => {
            const posts = await PostService.getAll();
            setPosts(posts);
            setPostsLoading(false);
        }, 1000);
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

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
            {true
                ? <div style={{display: 'flex', justifyContent: "center", marginTop: '150px'}}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} title={"Posts list about JS"} deleting={deletePost}/>
            }
        </div>
    );
}

export default App;