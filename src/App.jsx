import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'

const App = () => {

  const todo = {
    text: "do not forget to commit after a change",
    done: false
  };
  const getName =()=>{return "Remya";
}

  return (
    <>
      <h1>Hello, world!</h1>
      <p>Hello again</p>
      <p>{todo.text}</p>
      <p>{getName()}</p>
    </>
  );
}

export default App
