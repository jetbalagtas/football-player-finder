import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://football-players-b31f2.firebaseio.com'
});

export default instance;
