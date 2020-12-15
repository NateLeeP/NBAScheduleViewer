import React from 'react';
import scheduleRequest from '../util/scheduleRequest.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {year: '', month: '', day: ''}
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
    .then((results) => {
      console.log(results);
      /*
      for (var game of games) {
        //console.log('Home team: ', game["home"]["name"], ' Away Team: ', game["away"]["name"])
      }
      */
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
      </div>
    )
  }
}

export default Search;