import React from 'react'

const ScheduleGame = ({game, updateRender, updateCurrentGame}) => (
  <div className="scheduleGame">
    <div>
      {game['venue']['name']}
    </div>
    <div class="gameLink" onClick={(e) => {updateRender(e); updateCurrentGame(game)}}>
      {game['home']['name']} vs {game['away']['name']}
    </div>
  </div>
)

export default ScheduleGame;