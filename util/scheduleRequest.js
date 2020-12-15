import axios from 'axios';
import configObj from '../sportRadarConfig.js';

const api_base_url = configObj['api_base_url'];
const token = configObj['token'];
const scheduleRequest = (year, month, day) => {

  return axios.get(api_base_url + `/${year}/${month}/${day}/schedule.json?api_key=${token}`, {
    headers: {'Access-Control-Allow-Origin' : '*'}
  })
}

export default scheduleRequest;