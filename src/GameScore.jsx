import React from 'react'

const GameScore = ({currentGame}) => (
  <div className='gameScore'>
    <div>
      Navigated to Game Score!
    </div>
    <div>
      Current game: {currentGame['away']['name']} at {currentGame['home']['name']}
    </div>
  </div>
)

export default GameScore;