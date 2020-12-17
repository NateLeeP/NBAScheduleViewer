import React from 'react'
import HighlightPlayer from './HighlightPlayer.jsx';
import BoxScore from './BoxScore.jsx';
import TwitterContainer from './TwitterContainer.jsx';

const GameScore = ({currentGame, updateRender}) => (
  <div className='gameScore'>
    <div className='title' >
      Game Details | <span style={{'font-weight': '100', 'curser':'pointer'}} onClick={(e) => {updateRender(e)}}> Home </span>
    </div>
    <br/>
    <div className='highlightTweetContainer'>
      <HighlightPlayer game={currentGame} />
      <TwitterContainer game={currentGame} team={'home'} />
      <TwitterContainer game={currentGame} team={'away'} />
    </div>

    <BoxScore game={currentGame} />

  </div>
)

export default GameScore;