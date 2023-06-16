import React from 'react';
import './App.css';
import Todo from "./components/Todo/Todo";
import Wallet from "./components/Wallet/Wallet";

function App() {
  const profile = {
    name: 'none',
    walletaddress: '0x7d632a8d43B1cF0bdd4a66839CeC187eD45C146D'
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <Todo />
        <Wallet profile={profile} />
      </header>
    </div>
  );
}

export default App;
