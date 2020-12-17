import axios from 'axios'


const getTweets = (q, date) => {
  return axios.get(`/tweets/${q}/${date}`)
}

export default getTweets;