import React from 'react'
import ScheduleGame from './ScheduleGame.jsx'

const Schedule = ({games}) => (
  <div className='schedule'>
    {games.map((game) => (
      <ScheduleGame game={game} />
    ))}
  </div>
)

export default Schedule;