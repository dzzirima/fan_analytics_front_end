import axios from 'axios'
let baseurl = 'https://fananalytics.herokuapp.com'
let baseurl_digital_ocean = 'https://fanset-analytics-diygc.ondigitalocean.app/'

const instance = axios.create({
     //baseURL: 'http://localhost:4000',
    baseURL:baseurl_digital_ocean,
    headers: {"app-client":"megamarket"}
    
  });

export default instance
