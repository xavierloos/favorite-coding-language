import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from './components/Search';
import Github from './hooks/Github';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Github />
      </div>
    );
  }
}

export default App;
