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
import {useFetching} from "./hooks/useFetching";
import {getPagecount} from "./utils/page";
import {usePagination} from "./hooks/usePagination";
import Pagination from "./components/UI/pagination/Pagination";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagecount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page);
    },[]);

    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
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
            {postError &&
                <h1>Error ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: "center", marginTop: '150px'}}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} title={"Posts list about JS"} deleting={deletePost}/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default App;