import axios from 'axios';
import store from '../store';
import {toggleLoading, showMessage} from '../store/slices/general';

const api = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((req) => {
  store.dispatch(toggleLoading(true));
  return req;
});

api.interceptors.response.use(
  (res) => {
    store.dispatch(toggleLoading(false));
    return res;
  },
  (err) => {
    // const expectedError = err.response && err.response.status >= 400 && err.response.status < 500;

    // if (!expectedError) {
    //   store.dispatch(showMessage(true));
    // }

    store.dispatch(toggleLoading(false));
    store.dispatch(showMessage({show: true, text: 'An unexpected error occured!', type: 'error'}));

    setTimeout(() => {
      store.dispatch(showMessage({show: false, text: '', type: 'error'}));
    }, 6000);

    return Promise.reject(err);
  }
);

export default api;
