import React from 'react';
import './App.css';
import Wallet from "./components/Wallet/Wallet";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";


function App() {
  const profile = {
    name: 'none',
    walletaddress: '0x7d632a8d43B1cF0bdd4a66839CeC187eD45C146D'
  };
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Wallet profile={profile} />
        <Post title="First Post" content="This is my first post" />
      </header>
    </div>
  );
}

export default App;
