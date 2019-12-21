import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "@/utils/session";
import store from "../store";

// import router from "@/router/index.js"

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_URL;

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    // do something before request is sent
    config.headers.common["Authorization"] = getToken();
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
    // console.log(response)
    if (response.data.errorCode == 1) {
      Message({
        message: response.data.msg || "Error",
        type: "error",
        duration: 5 * 1000
      }).then(() => {
        setTimeout(() => {
          store.dispatch("user/logout").then(() => {
            location.href = "/admin/login";
          });
        }, 5000);
      });
    }
    return response;
  },
  error => {
    console.log("err" + error); // for debug
    if (error.response.status == 401) {
      Message({
        message: error.response.data || "Error",
        type: "error",
        duration: 5 * 1000
      });
      setTimeout(() => {
        store.dispatch("user/logout").then(() => {
          location.href = "/admin/login";
        });
      }, 5000);
    }
    return Promise.reject(error);
  }
);

export default axios;
