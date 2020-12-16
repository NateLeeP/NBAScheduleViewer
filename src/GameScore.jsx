import React from 'react'
import HighlightPlayer from './HighlightPlayer.jsx';
import BoxScore from './BoxScore.jsx';
const GameScore = ({currentGame}) => (
  <div className='gameScore'>
    <div>
      Navigated to Game Score!
    </div>
    <HighlightPlayer game={currentGame} />
    <div>

    </div>
    <BoxScore game={currentGame} />
  </div>
)

export default GameScore;