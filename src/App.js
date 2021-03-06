import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NumberForm from './components/NumberForm';
import NumberList from './components/ShowNumbers';
import ColorBox from './components/ColorBox';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* using header component and using prop of className */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Practice with React & Redux</h1>
        </header>

        <p className="App-intro">
          Enter Numbers and Change the Color of the Box </p>
          <NumberForm /> 
          {/* for {...this.props} to work, need to connect it */}
          <NumberList />
          <ColorBox />
      </div>
    );
  }
}

export default App;
