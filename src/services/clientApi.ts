import axios from 'axios';

const clientAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default clientAPI;
