import axios from "../utils/axios";

export default {
  /**
   * /获取文章下的all评论
   * @function list
   * @param
   * 接口参数 -- 文章id
   */
  allList(params) {
    return axios({
      url: "/comments/list",
      method: "get",
      params
    });
  },

  /**
   * /获取文章下的评论列表
   * @function list
   * @param article_id
   * 接口参数 -- 文章id
   */

  list(params) {
    const { article_id } = params;
    // delete params.article_id;
    return axios({
      url: "/article/" + article_id + "/comments",
      method: "get",
      params
    });
  },

  /**
   * 新增评论
   * @function create
   * @param params
   * 接口参数 -- 评论数据
   */
  create(data) {
    return axios({
      url: "/comments/create",
      method: "post",
      data
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
