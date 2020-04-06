/* eslint-disable */
import comments from "../../api/comments";

const state = {}
const mutations = {}

const actions = {
  
  // 获取评论列表
  async getCommentsList({ commit }, params) {
    return await comments.list(params)
  },

  //增加评论
  async createComments({ commit }, params){
    return await comments.create(params)
  },

  async allList({ commit },data) {
    return comments.allList(data)
  },

  async destroy({ commit }, id) {
    return comments.destory(id)
  },

  async detail( { commit }, id) {
    return comments.detail(id)
  },

  async comments({ commit }, id){
    return comments.comments(id)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
