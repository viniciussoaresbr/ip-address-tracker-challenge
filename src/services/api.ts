import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const apiKey = process.env.REACT_APP_API_KEY;

export { api, apiKey };
