const cleanPlayers = ({players}) => {
  var newPlayerArray = [];
  for (var player of players) {
    var newPlayerObj =  (({ full_name, starter, statistics }) => ({ full_name, starter, statistics }))(player);
    var newStatsObj = (({minutes, field_goals_made, field_goals_att, three_points_att, three_points_made, free_throws_att, free_throws_made, rebounds, assists, steals, blocks, points, pls_min}) => ({minutes, field_goals_made, field_goals_att, three_points_att, three_points_made, free_throws_att, free_throws_made, rebounds, assists, steals, blocks, points, pls_min}))(player['statistics']);
    newPlayerObj['statistics'] = newStatsObj;
    newPlayerObj['statistics']['secPlayed'] = convertMinutesToSeconds(newPlayerObj['statistics']['minutes'])
    newPlayerArray.push(newPlayerObj);
  }
  newPlayerArray.sort((a, b) => {
      if (a['starter'] && b['starter']) {
        return (a['statistics']['secPlayed'] < b['statistics']['secPlayed']) ? 1 : -1;
      }
      if (a['starter'] === undefined && b['starter'] === undefined) {
        return (a['statistics']['secPlayed'] < b['statistics']['secPlayed']) ? 1 : -1;
      }
      else {
        return (a['starter']) ? -1 : 1;
      }

  })
  return newPlayerArray;
};

const convertMinutesToSeconds = (courtTime) => {
  const minutes = Number(courtTime.split(':')[0]);
  const seconds = Number(courtTime.split(':')[1]);

  return (minutes * 60 + seconds);
}

const cleanTeamData = ({statistics}) => {
  var newTeamObj = {};
  var newTeamStats = (({minutes, field_goals_made, field_goals_att, three_points_att, three_points_made, free_throws_att, free_throws_made, rebounds, assists, steals, blocks, points, pls_min}) => ({minutes, field_goals_made, field_goals_att, three_points_att, three_points_made, free_throws_att, free_throws_made, rebounds, assists, steals, blocks, points, pls_min}))(statistics);

  newTeamObj['full_name'] = 'TEAM';
  newTeamObj['statistics'] = newTeamStats;

  return newTeamObj;

}

const cleanSummaryData = (data) => {
  const { home, away } = data;
  const cleanData = {home: {players: [], team: {}}, away: {players: [], team: {}}};
  cleanData['home']['players'] = cleanPlayers(home);
  cleanData['home']['team'] = cleanTeamData(home);
  cleanData['away']['players'] = cleanPlayers(away);
  cleanData['away']['team'] = cleanTeamData(away);
  return cleanData;
}

exports.cleanSummaryData = cleanSummaryData;





