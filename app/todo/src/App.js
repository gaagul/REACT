import React, { useState } from "react";
import './App.css';
//importin components
import Form from "./components/form";
import todolist from "./components/todolist";

function App() {
  return (
    <div className="App">
      <header>
        <h1>REACT TODO</h1>
      </header>
      <Form/>
      <todolist/>
    </div>
  );
}


export default App;
