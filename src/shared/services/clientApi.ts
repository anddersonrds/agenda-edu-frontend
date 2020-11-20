import axios from 'axios';

const clientAPI = () => {
  const config = {
    baseURL: 'https://api.themoviedb.org/3/',
  };

  return axios.create(config);
};

export default clientAPI;
