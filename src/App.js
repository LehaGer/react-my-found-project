import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import Postitem from "./components/Postitem";

function App() {

    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('TEXT IN INPUT');



    return (
        <div className="App">
            <Postitem post={{id: 1, title: 'JS', body: 'Some description about JS'}}/>
            <Postitem post={{id: 2, title: 'Python', body: 'Some description about Python'}}/>
            <Postitem post={{id: 3, title: 'PHP', body: 'Some description about PHP'}}/>
            <Postitem post={{id: 4, title: 'C++', body: 'Some description about C++'}}/>

        </div>
    );
}

export default App;