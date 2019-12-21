/* eslint-disable */
import comments from "../../api/comments";

const state = {}
const mutations = {}

const actions = {

  async list({ commit },data) {
    return comments.list(data)
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
