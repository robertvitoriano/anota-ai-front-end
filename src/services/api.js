import axios from 'axios';
import variables from './../config/variables'
const api = axios.create({
     baseURL: variables.REACT_APP_API_URL,

});

export default api;

//




