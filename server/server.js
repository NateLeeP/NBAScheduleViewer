const express = require('express');
const path = require('path');
const PORT = 3000
const app = express();
const axios = require('axios');

app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/schedule', (req, res) => {
  axios.get('http://api.sportradar.us/nba/trial/v7/en/games/2019/12/25/schedule.json?api_key=cggng4r89hw2bh6q2u6mx9mw')
  .then(({data}) => {
    for (var game of data['games']) {
      console.log("Home team! : ", game['home']['name']);
      console.log("Away team! : ", game['away']['name']);
    }
    //console.log(data);
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log("error in schedule route! Error: ", err);
    res.sendStatus(500);
  })
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})