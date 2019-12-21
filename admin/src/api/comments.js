import axios from "../utils/axios";

export default {
  list(params) {
    return axios({
      url: "/comments/list",
      method: "get",
      params
    });
  },

  destory(id) {
    return axios({
      url: "/comments/destroy/" + id,
      method: "delete"
    });
  },

  detail(id) {
    return axios({
      url: "/comments/detail/" + id,
      method: "get"
    });
  },

  omments(id) {
    return axios({
      url: "/comments/" + id,
      method: "get"
    });
  }
};
