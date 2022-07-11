import axios from 'axios';

const api = axios.create({
  baseURL: 'https://geo.ipify.org/api/v2/',
});

const apiKey = 'at_CewxrEEw9T8mNjSdkXo22AEYdFnZd';

export { api, apiKey };
