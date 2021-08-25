import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import Postitem from "./components/Postitem";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Some description about JS'},
        {id: 2, title: 'PHP', body: 'Some description about PHP'},
        {id: 3, title: 'C++', body: 'Some description about C++'},
    ]);


    return (
        <div className="App">
            {posts.map(post =>
                <Postitem  post={post} key={post.id}/>
            )}

        </div>
    );
}

export default App;