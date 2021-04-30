import axios from 'axios';

const api = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((req) => {
  return req;
});

api.interceptors.response.use((res) => {
  return res;
});

export default api;
