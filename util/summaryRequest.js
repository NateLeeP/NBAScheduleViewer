import axios from 'axios';

const summaryRequest = (gameId) => {
  return axios.get(`/summary/${gameId}`)
}

export default summaryRequest;