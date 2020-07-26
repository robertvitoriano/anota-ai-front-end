import axios from 'axios';
const api = axios.create({
    baseURL: "http://anota-ai-backend.herokuapp.com/"
});

export default api;

//