import axios from "axios";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://localhost:6720/api";

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // console.log(response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
