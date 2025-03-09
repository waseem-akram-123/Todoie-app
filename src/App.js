import React from "react";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

import CounterComponent from "./components/MyComp";
import "./style.css";

const App = ()=> {
  return ( 
       <div className = "todo-container">
      <CounterComponent/>
      <Header title = "Todoie APP "/>
      <TodoItems text = "Get up early "/>
      <TodoItems completed = {true} text = "Go to college"/>
      <TodoItems text = "little amt of study in clg"/>
      <TodoItems text = "come home and self study"/>
      <Button/>
    </div>
  );
}
export default App;