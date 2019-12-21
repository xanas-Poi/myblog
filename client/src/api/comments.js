import axios from "../utils/axios";

export default {
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
  }
};
