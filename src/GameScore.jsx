import React from 'react'

const GameScore = ({currentGame}) => (
  <div className='gameScore'>
    <div>
      Navigated to Game Score!
    </div>
    <div>
      <iframe width="420" height="350" src="https://www.youtube.com/embed/NtkJNfWuUEY"></iframe>
    </div>
    <div>
      Current game: {currentGame['away']['name']} at {currentGame['home']['name']}
    </div>
  </div>
)

export default GameScore;