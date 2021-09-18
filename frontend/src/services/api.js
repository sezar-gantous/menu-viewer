import axios from 'axios';

/* istanbul ignore next */
const api = axios.create({
  responseType: 'json',
});

// Add a response interceptor
api.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  error =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error)
);

export default api;
