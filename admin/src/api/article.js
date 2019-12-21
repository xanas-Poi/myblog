import axios from "../utils/axios";

export default {
  /**
   * 获取文章列表
   * @function list
   * @param data  page, desc, category_id, keyword
   * 接口参数 --- 页码, 排序方法, 分类ID, 搜索关键字
   */
  list(params) {
    return axios({
      url: "/article/list",
      method: "get",
      params
    });
  },

  create(data) {
    return axios({
      url: "/article/create",
      method: "post",
      data
    });
  },

  destroy(id) {
    return axios({
      url: "/article/destroy/" + id,
      method: "delete"
    });
  },

  update(data) {
    return axios({
      url: "/article/update/" + data.id,
      method: "put",
      data
    });
  },

  detail(id) {
    return axios({
      url: "/article/detail/" + id,
      method: "get"
    });
  },

  echarts(){
    return axios({
      url: "/article/echarts",
      method: "get"
    });
  }
};
