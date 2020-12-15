import React from 'react'
import HighlightPlayer from './HighlightPlayer.jsx';

const GameScore = ({currentGame}) => (
  <div className='gameScore'>
    <div>
      Navigated to Game Score!
    </div>
    <HighlightPlayer game={currentGame} />
    <div>
      Current game: {currentGame['away']['name']} at {currentGame['home']['name']}
    </div>
  </div>
)

export default GameScore;