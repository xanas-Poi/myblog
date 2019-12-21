import article from "../../api/article";

const state = {
  // 文章
  articleList: [],
  // 分页
  pagination: null,
  // 文章详情
  articleDetail: null
};

const mutations = {
  // 设置文章列表
  SET_ARTICLE_LIST(state, list) {
    state.articleList = list;
  },
  // 设置文章分页
  SET_PAGINATION(state, page) {
    state.pagination = page;
  },
  // 设置文章详情
  SET_ARTICLE_DETAIL(state, data) {
    state.articleDetail = data;
  }
};

const actions = {
  /**
   * 获取文章列表
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getArticleList({ commit }, params) {
    let re = await article.list(params);
    commit("SET_ARTICLE_LIST", re.data.data.data);
    commit("SET_PAGINATION", re.data.data.meta);

    return re;
  },

  /**
   * 获取文章详情信息
   * @param commit
   * @returns {Promise<void>}
   */
  async getArticleDetail({ commit }, id) {
    let re = await article.detail(id);
    commit("SET_ARTICLE_DETAIL", re);

    return re;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
