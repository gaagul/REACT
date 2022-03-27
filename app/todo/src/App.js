import React, { useState } from "react";
import './App.css';
//importing components
import Form from "./components/form";
import Todolist from "./components/todolist";

function App() {
  const [inputText,setInputText]= useState("");
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
      <header>
        <h1>REACT TODO </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Todolist />
    </div>
  );
}


export default App;
