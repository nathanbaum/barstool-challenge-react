import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BoxScore } from './components/BoxScore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxScore/>
      </div>
    );
  }
}

export default App;
