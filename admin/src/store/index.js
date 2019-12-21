import Vue from "vue";
import Vuex from "vuex";
import article from "./modules/article";
import user from "./modules/user";
import comments from "./modules/comments";
import category from "./modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    user,
    comments,
    category
  }
});
