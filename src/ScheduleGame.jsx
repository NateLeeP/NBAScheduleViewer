import React from 'react'

const ScheduleGame = ({game}) => (
  <div className="scheduleGame">
    <div>
      {game['venue']['name']}
    </div>
    <div>
      {game['home']['name']} vs {game['away']['name']}
    </div>
  </div>
)

export default ScheduleGame;