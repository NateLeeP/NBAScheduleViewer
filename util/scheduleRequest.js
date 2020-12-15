import axios from 'axios';
import configObj from '../sportRadarConfig.js';

const api_base_url = configObj['api_base_url'];
const token = configObj['token'];
const scheduleRequest = (year, month, day) => {

  return axios.get(`/schedule/${year}/${month}/${day}`)
}

export default scheduleRequest;