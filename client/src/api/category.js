import axios from "../utils/axios";

export default {
  list(params) {
    return axios({
      url: "/category/list",
      method: "get",
      params
    });
  },

  getArticle(id) {
    return axios({
      url: "/category/" + id + "/article",
      method: "get"
    });
  },

  create(data) {
    return axios({
      url: "/category/create",
      method: "post",
      data
    });
  },

  destroy(id) {
    return axios({
      url: "/category/destroy/" + id,
      method: "delete"
    });
  },

  update(data) {
    return axios({
      url: "/category/update/" + data.id,
      method: "put",
      data
    });
  },

  detail(id) {
    console.log(id);
    return axios({
      url: "/category/detail/" + id,
      method: "get"
    });
  }
};
