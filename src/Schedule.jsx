import React from 'react'
import ScheduleGame from './ScheduleGame.jsx'

const Schedule = ({games, updateRender, updateCurrentGame}) => (
  <div className='schedule'>
    {games.map((game) => (
      <ScheduleGame game={game} updateRender={updateRender} updateCurrentGame={updateCurrentGame}/>
    ))}
  </div>
)

export default Schedule;