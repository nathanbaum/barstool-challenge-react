import React, { Component } from 'react';
import './App.css';

import { BoxScore } from './components/BoxScore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxScore
          labels={{
            units: [1,2,3,4,5,6,7,8,9],
            results: ['R', 'H', 'E'],
          }}
          away={{
            name: "Cubs",
            shortName: "CHC",
            units: [1,0,2,0,0,0,0,1,1],
            results: [5,12,0],
          }}
          home={{
            name: "Cardinals",
            shortName: "STL",
            units: [0,0,0,3,0,0,0,0,1],
            results: [4,8,1],
          }}
          gameState={"BTM\n9th"}
          />
      </div>
    );
  }
}

export default App;
