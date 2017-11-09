import React, { Component } from 'react';
import './App.css';
import Main from "./components/main.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to with React</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
