import React, {useEffect, useState} from 'react';
import getHiglights from '../util/youtubeRequest.js'

const HighlightPlayer = ({game}) => {
  const [videoID, setVideoId] = useState('');
  /*
  Prevent unneccessary API calls
    */
  useEffect(() => {
    // call YouTube API function here
    const awayTeam = game['away']['name'].split(' ')[game['away']['name'].split(' ').length - 1]
    const homeTeam =game['home']['name'].split(' ')[game['home']['name'].split(' ').length - 1]
    getHiglights(awayTeam, homeTeam, game['scheduled'].split('T')[0])
    .then(({data}) => {
      setVideoId(data['items'][0]['id']['videoId'])
    })
    .catch((err) => {
      console.log("Error in useEffects function! Error: ", err);
    })
  }, [])

  return (
    <div>
      <iframe width="420" height="350" src={`https://www.youtube.com/embed/${videoID}`}></iframe>
    </div>

  )
}

export default HighlightPlayer;