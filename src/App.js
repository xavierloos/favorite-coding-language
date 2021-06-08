import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from './components/Search';
import Usercard from './components/Usercard';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Usercard />
    </div>
  );
}

export default App;
