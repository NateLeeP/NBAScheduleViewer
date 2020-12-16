import React, { useState, useEffect } from 'react';
import sampleSummaryData from '../sampleSummaryData.js';
import PlayerStatLine from './PlayerStatLine.jsx';
import headersPlayer from '../headersPlayer';
import axios from 'axios'
const BoxScore = ({game}) => {

  const [summary, setSummary] = useState(sampleSummaryData)
  const [homeTeam, setHomeTeam] = useState(true)

  useEffect(() => {
    // call summary request function here
    axios.get(`/summary/${game['id']}`)
    .then(({data}) => {
      setSummary(data);
    })
    .catch((err) => {
      console.log("Error in useEffects boxscore function! Error: ", err);
    })
  }, [])

  return (
    <div className="boxScore">
      Current game: <span className='gameLink' onClick={() => {setHomeTeam(false)}}> {game['away']['name']} </span>
      at
      <span className='gameLink' onClick={() => {setHomeTeam(true)}}> {game['home']['name']} </span>
    <PlayerStatLine player={headersPlayer} />
      {summary[(homeTeam ? 'home' : 'away')]['players'].map((player) => (
        <PlayerStatLine player={player} />
      ))}
    <PlayerStatLine player={summary[(homeTeam ? 'home' : 'away')]['team']} />
    </div>
  )
}

export default BoxScore;