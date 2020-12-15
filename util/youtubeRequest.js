import axios from 'axios';
import youtubeConfigObj from '../YouTubeConfig.js';

const api_base_url = youtubeConfigObj['api_base_url'];
const token = youtubeConfigObj['token'];
const getHighlights = (away, home, date) => {

  return axios.get(`/highlights/${away}/${home}/${date}`, {

  })
}

export default scheduleRequest;