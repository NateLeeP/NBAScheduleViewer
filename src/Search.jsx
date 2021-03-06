import React from 'react';
import scheduleRequest from '../util/scheduleRequest.js';
import sampleScheduleData from '../sampleData/sampleScheduleData.js';
import Schedule from './Schedule.jsx';
class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {year: '', month: '', day: '', games: sampleScheduleData.games}
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleSearchChange(e) {
    e.preventDefault();
    var newStateObj = this.state;
    newStateObj[e.target.id] = e.target.value
    this.setState({
      newStateObj
    })
  }

  handleInputSubmit(e) {
    e.preventDefault();
    scheduleRequest(this.state.year, this.state.month, this.state.day)
    .then(({data}) => {
      var newStateObj = this.state;
      newStateObj['games'] = data.games
      this.setState({
        newStateObj
      })
    })
    .catch((err) => {
      console.log("Error in schedule request function", err);
    })
  }
/*
comment out to avoid API calls
*/
  componentDidMount () {
    var today = new Date();
    scheduleRequest(today.getFullYear(), (today.getMonth() + 1), today.getDate() - 1)
    .then(({data}) => {
      var newStateObj = this.state;
      newStateObj['games'] = data.games
      this.setState({
        newStateObj
      })
    })
    .catch((err) => {
      console.log("Error in schedule request function", err);
    })
  }
  render() {
    return (
      <div>
      <input id='year' placeholder='YYYY' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <input id='month' placeholder='MM' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <input id='day' placeholder='DD' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <button onClick={(e) => {this.handleInputSubmit(e)}}>Search Date</button>
      <div className='title'>
        Games for {new Date(this.state.games[0]['scheduled'].split('T')[0]).toDateString()}
      </div>
      <Schedule games={this.state.games} updateRender={this.props.updateRender} updateCurrentGame={this.props.updateCurrentGame} />
      </div>
    )
  }
}

export default Search;