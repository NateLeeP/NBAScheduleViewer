const express = require('express');
const path = require('path');
const PORT = 3000
const app = express();
const axios = require('axios');
const { cleanSummaryData } = require('../util/cleanSummaryData.js');
const { createTimeRange, months } = require('../util/adjustTimeRange.js');
// API tokens
const { sportRadarConfigObj } = require('../sportRadarConfig.js');
const { youtubeConfigObj } = require('../YouTubeConfig.js');
const { twitterConfigObj } = require('../TwitterConfig.js');



app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/schedule/:year/:month/:day', (req, res) => {
  const {year, month, day} = req.params;
  axios.get(`http://api.sportradar.us/nba/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=${sportRadarConfigObj['token']}`)
  .then(({data}) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("error in schedule route! Error: ", err);
    res.sendStatus(500);
  })
})

app.get('/summary/:gameId', (req, res) => {
  const {gameId} = req.params
  axios.get(`http://api.sportradar.us/nba/trial/v7/en/games/${gameId}/summary.json?api_key=${sportRadarConfigObj['token']}`)
  .then(({data}) => {
    res.status(200).send(cleanSummaryData(data));
  })
  .catch((err) => {
    console.log("Error in summary route! Error: ", err);
  })
})

app.get('/highlights/:away/:home/:date', (req, res) => {
  const {away, home, date} = req.params
  axios.get('https://youtube.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      channelId: 'UCWJ2lWNubArHWmf3FIHbfcQ',
      maxResults: 1,
      q: `${away} at ${home} | FULL GAME HIGHLIGHTS | ${months[date.split('-')[1]]} ${date.split('-')[2]} , ${date.split('-')[0]}`,
      type: 'video',
      videoEmbeddable: true,
      key: youtubeConfigObj['token']
    }
  })
  .then(({data}) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("Error with highlights route! Error: ", err);
    res.sendStatus(500);
  })

})

app.get('/tweets/:q/:date', (req, res) => {
  const {q, date} = req.params;
  var [start_time, end_time] = createTimeRange(date);
  axios.get(`https://api.twitter.com/2/tweets/search/recent?start_time=${start_time}&end_time=${end_time}&query=${q}&max_results=100&tweet.fields=public_metrics`, {
    headers: {
      'Authorization': `Bearer ${twitterConfigObj['api_key']}`
    }
  })
  .then(({data}) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    console.log("error with tweets route! Error: ", err);
    res.sendStatus(500);
  })
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})