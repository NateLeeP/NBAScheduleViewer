import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import GameScore from './GameScore.jsx';
import sampleScheduleData from '../sampleScheduleData.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      renderHome: true,
      currentGame: sampleScheduleData['games'][0]
    }
    this.updateRender = this.updateRender.bind(this);
    this.updateCurrentGame = this.updateCurrentGame.bind(this);
  }

  updateRender(e) {
    e.preventDefault()
    var newStateObj = this.state;
    newStateObj['renderHome'] = this.state.renderHome ? false : true;
    this.setState({newStateObj})
  }

  updateCurrentGame(game) {
    var newStateObj = this.state;
    newStateObj['currentGame'] = game;
    this.setState({newStateObj})

  }

  render() {
    if (this.state.renderHome) {
      return (
        <div>
          <Search updateRender={this.updateRender} updateCurrentGame={this.updateCurrentGame}/>
        </div>
      )
    } else {
      return (
        <div>
          <GameScore currentGame={this.state.currentGame} />
        </div>
      )
    }

  }
}

ReactDOM.render(<App />, document.getElementById('app'));