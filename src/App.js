import React, { Component } from 'react';
import './App.css';

import { BoxScore } from './components/BoxScore';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      games: null
    };

    fetch('http://localhost:8000/api/games/all')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log('got something from the server:');
        // console.log(json);
        this.setState({games: json});
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {

    const insideContent = [];

    if( this.state.games ) {
      for( const g in this.state.games ) {

        const game = this.state.games[g];
        const unitLabels = [];
        const resultLabels = [];
        const homeResults = [];
        const homeUnits = [];
        const awayResults = [];
        const awayUnits = [];
        let gameState = '';
        //in case there are any other types of sports like football etc
        switch (game.league.alias) {

          case 'MLB':
            resultLabels.push('R', 'H', 'E');
            homeResults.push(0,0,0);
            game.homeTeamDetails.forEach((e) => {
              unitLabels.push(e.number);
              homeUnits.push(e.runs);
              homeResults[0] += e.runs;
              homeResults[1] += e.hits;
              homeResults[2] += e.entryErrors;
            });
            awayResults.push(0,0,0);
            game.awayTeamDetails.forEach((e) => {
              awayUnits.push(e.runs);
              awayResults[0] += e.runs;
              awayResults[1] += e.hits;
              awayResults[2] += e.entryErrors;
            });
            gameState += game.currentPeriodHalf === 'T' ? 'TOP ' : 'BTM ';
            gameState += game.currentPeriod;
            break;

          default:
            break;
        }
        switch (JSON.stringify(parseInt(gameState.charAt(gameState.length-1), 10))) {
          case '1':
            gameState += (parseInt(gameState.charAt(gameState.length-2), 10) === 1 ? 'th' : 'st');
            break;
          case '2':
            gameState += (parseInt(gameState.charAt(gameState.length-2), 10) === 1 ? 'th' : 'nd');
            break;
          case '3':
            gameState += (parseInt(gameState.charAt(gameState.length-2), 10) === 1 ? 'th' : 'rd');
            break;
          case 'null':
            break;
          default:
            gameState += 'th';
            break;
        }
        insideContent.push(
          <BoxScore
            key={game.foreignId}
            labels={{
              units: unitLabels,
              results: resultLabels,
            }}
            away={{
              name: game.awayTeam.name,
              shortName: game.awayTeam.abbr,
              units: awayUnits,
              results: awayResults,
            }}
            home={{
              name: game.homeTeam.name,
              shortName: game.homeTeam.abbr,
              units: homeUnits,
              results: homeResults,
            }}
            gameState={gameState}
            />
        );

      }
    }
    else {
      insideContent.push(
        <div key={0}>{'loading...'}</div>
      );
    }

    return (
      <div className="App">
        {insideContent}
      </div>
    );
  }
}

export default App;
