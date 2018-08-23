import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BoxScore.css';

class BoxScore extends Component {

  render() {
    let uniqueKey = 0;
    return (
      <div className="boxscore">
        <div className="boxscore__team boxscore__team--header">
          <label></label>
          <div className="boxscore__team__units">
            { this.props.labels.units.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
          <div className="boxscore__team__results">
            { this.props.labels.results.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
        </div>
        <div className="boxscore__team boxscore__team--away">
          <label>{this.props.away.shortName}</label>
          <div className="boxscore__team__units">
            { this.props.away.units.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
          <div className="boxscore__team__results">
            { this.props.away.results.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
        </div>
        <div className="boxscore__team boxscore__team--home">
          <label>{this.props.home.shortName}</label>
          <div className="boxscore__team__units">
            { this.props.home.units.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
          <div className="boxscore__team__results">
            { this.props.home.results.map( (e) => { return (<span key={uniqueKey++}>{e}</span>); } ) }
          </div>
        </div>
        <div className="boxscore__details">
          <div className="boxscore__details__team boxscore__details__team--away">
            <p>
              <strong>{this.props.away.name}</strong><small>{this.props.away.shortName}</small>
            </p>
          </div>
          <div className="boxscore__details__info">
            <strong>{this.props.gameState}</strong>
          </div>
          <div className="boxscore__details__team boxscore__details__team--home">
            <p>
              <strong>{this.props.home.name}</strong><small>{this.props.home.shortName}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

BoxScore.propTypes = {

  labels: PropTypes.shape({
    units: PropTypes.array,
    results: PropTypes.array,
  }),

  home: PropTypes.shape({
    name: PropTypes.string,
    shortName: PropTypes.string,
    units: PropTypes.array,
    results: PropTypes.array,
  }),

  away: PropTypes.shape({
    name: PropTypes.string,
    shortName: PropTypes.string,
    units: PropTypes.array,
    results: PropTypes.array,
  }),

  gameState: PropTypes.string,

};

export { BoxScore };
