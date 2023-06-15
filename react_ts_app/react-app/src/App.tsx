import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo/Todo";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const profile = {
    name: 'John Doe',
    walletaddress: '0x7d632a8d43B1cF0bdd4a66839CeC187eD45C146D',
    bio: 'Hello, I am John Doe.',
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo List</h2>
        <Todo />
        <Sidebar profile={profile} />
      </header>
    </div>
  );
}

export default App;
