import axios from 'axios'
let baseurl = 'https://fananalytics.herokuapp.com'
let baseurl_digital_ocean = 'https://fanset-analytics-diygc.ondigitalocean.app/'

const instance = axios.create({
    // baseURL: 'http://localhost:8001',
    baseURL:baseurl_digital_ocean
    
  });

export default instance
