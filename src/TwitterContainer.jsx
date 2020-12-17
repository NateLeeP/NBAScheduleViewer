import React, { useState, useEffect } from 'react';
import nbaTeamTwitter from './nbaTeamTwitter.js';
import { Tweet } from 'react-twitter-widgets';
import getTweets from '../util/twitterRequest.js';
import sampleTweets from '../sampleData/sampleTweets.js'
const TwitterContainer = ({game, team}) => {

  const [tweets, updateTweets] = useState([]);
    /*
      comment out to avoid excessive api calls
        */
  useEffect(() => {
    // call Twitter API function here
    const teamQuery = `from:${nbaTeamTwitter[game[team]['name']]}`
    const date = game['scheduled']
    getTweets(teamQuery, date)
    .then(({data}) => {
      updateTweets(data['data']);
    })
    .catch((err) => {
      console.log("Error in useEffects function! Error: ", err);
    })
  }, [])


  return (
    <div className='tweetContainer'>
      {tweets.map((tweet) => (
        <Tweet tweetId={tweet['id']} />
      ))}
    </div>
  )
}

export default TwitterContainer;