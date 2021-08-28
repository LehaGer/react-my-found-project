import React, {useRef, useState, useMemo} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {

    const [postsJS, setPostsJS] = useState([
        {id: 1, title: 'JS1', body: 'Some description about JSf'},
        {id: 2, title: 'JS', body: 'Some description about JS'},
        {id: 3, title: 'JSd', body: 'Some description about JSi'},
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

    const [filter, setFilter] = useState({sort: '', query: ''})

    /*для неуправляемого компонента*/
    //const bodyInputRef = useRef();

    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...postsJS].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return postsJS;
    }, [filter.sort, postsJS]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(postsJS => postsJS.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts])

    const addPost = (newPost) => {
        setPostsJS([...postsJS, newPost])
    };

    const deletePost = (post) => {
        setPostsJS(postsJS.filter(p => p.id !== post.id))
    };

    //const sortedPosts = geSortedPosts();

    return (
        <div className="App">
            <PostForm create={addPost}/>
            <hr style={{width: "100%", margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title={"Posts list about JS"} deleting={deletePost}/>
            <PostList posts={postsPHP} title={"Posts list about PHP"}/>
            <PostList posts={postsC} title={"Posts list about C++"}/>
            <PostList posts={postsPython} title={"Posts list about Python"}/>
        </div>
    );
}

export default App;