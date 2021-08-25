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
            <Postitem/>
            <Postitem/>
            <Postitem/>
            <Postitem/>
        </div>
    );
}

export default App;