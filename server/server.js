const express = require('express');
const path = require('path');
const PORT = 3000
const app = express();
const axios = require('axios');

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}
app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/schedule/:year/:month/:day', (req, res) => {
  const {year, month, day} = req.params
  axios.get(`http://api.sportradar.us/nba/trial/v7/en/games/${year}/${month}/${day}/schedule.json?api_key=cggng4r89hw2bh6q2u6mx9mw`)
  .then(({data}) => {
    //console.log(data);
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("error in schedule route! Error: ", err);
    res.sendStatus(500);
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
      key: 'AIzaSyBmXIAKJW3MhpTVsUMEII6G4ABHW_8WZlI'
    }
  })
  .then(({data}) => {
    console.log(data['items'][0]['id'])
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("Error with highlights route! Error: ", err);
    res.sendStatus(500);
  })

})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})