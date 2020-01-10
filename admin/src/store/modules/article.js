/* eslint-disable */
import article from "../../api/article";

const state = {}
const mutations = {}

const actions = {
  async list({ commit }, data) {
    return article.list(data)
  },

  async create({ commit }, data) {
    return article.create(data)
  },

  async destroy({ commit }, id) {
    return article.destroy(id)
  },

  async detail({ commit }, id) {
    return article.detail(id)
  },

  async update({ commit }, data) {
    return article.update(data)
  },
  
  async echarts({ commit }) {
    return article.echarts()
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
