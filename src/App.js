import React from 'react';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  return (
    <div className="App">
      <MyButton disabled>Create new post</MyButton>
      <MyInput/>
    </div>
  );
}

export default App;
