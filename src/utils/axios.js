import axios from 'axios';

const instance = axios.create({ baseURL: 'https://marcelo-starbucks-api.herokuapp.com' });

export default instance;
