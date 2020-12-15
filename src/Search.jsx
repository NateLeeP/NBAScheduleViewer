import React from 'react';
import scheduleRequest from '../util/scheduleRequest.js';
import sampleScheduleData from '../sampleScheduleData.js';
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

  render() {
    return (
      <div>
      <input id='year' placeholder='YYYY' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <input id='month' placeholder='MM' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <input id='day' placeholder='DD' onChange={(e) => {this.handleSearchChange(e)}}></input>
      <button onClick={(e) => {this.handleInputSubmit(e)}}>Click Me!</button>
      <Schedule games={this.state.games} />
      </div>
    )
  }
}

export default Search;