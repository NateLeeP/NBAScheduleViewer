import React from 'react';

const PlayerStatLine = ({player}) => {
  const {minutes, field_goals_made, field_goals_att, three_points_att, three_points_made, free_throws_att, free_throws_made, rebounds, assists, steals, blocks, points, pls_min} = player['statistics']
  return (
    <div className="playerStatLine">
      <div className="playerName">
        {player['full_name']}
      </div>
      <div className="stat">
        {minutes}
      </div>
      <div className="stat">
        {points}
      </div>
      <div className="stat">
        {field_goals_made} / {field_goals_att}
      </div>
      <div className="stat">
        {three_points_made} / {three_points_att}
      </div>
      <div className="stat">
        {free_throws_made} / {free_throws_att}
      </div>
      <div className="stat">
        {rebounds}
      </div>
      <div className="stat">
        {assists}
      </div>
      <div className="stat">
        {steals}
      </div>
      <div className="stat">
        {blocks}
      </div>
      <div className="stat">
        {pls_min}
      </div>
      <div className="boxScoreSpace">

      </div>
    </div>
  )
}

export default PlayerStatLine;