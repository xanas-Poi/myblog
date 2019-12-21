import axios from "../utils/axios";

export default {
  /**
   * 获取文章列表
   * @function list
   * @param params  page, desc, category_id, keyword
   * 接口参数 --- 页码, 排序方法, 分类ID, 搜索关键字
   */
  list(params) {
    return axios({
      url: "/article/list",
      method: "get",
      params
    });
  },

  /**
   * 获取文章详情
   * @function detail
   * @param id  id
   * 接口参数 -- 文章id
   */
  detail(id) {
    return axios({
      url: "/article/detail/" + id,
      method: "get"
    });
  }
};
