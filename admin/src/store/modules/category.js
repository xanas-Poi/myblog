/* eslint-disable */
import category from "../../api/category";

const state = {}
const mutations = {}
const actions = {

  async list({ commit },data) {
    return category.list(data)
  },

  async getArticle({ commit },id) {
    return category.getArticle(id)
  },
  
  async create({ commit }, data) {
    return category.create(data)
  },

  async destroy({ commit }, id) {
    return category.destroy(id)
  },

  async detail( { commit }, id) {
    return category.detail(id)
  },

  async update({ commit }, data) {
    return category.update(data)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
