/* eslint-disable */
import { login, getInfo } from "../../api/user";
import { getToken, setToken, removeToken } from "../../utils/session"
import router from '../../router/index'

const state = {
    token: getToken() || "",
    email:"",
    nickname:"",
    introduction: '',
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_EMAIL: (state, email) => {
    state.email = email;
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.role = introduction;
  }
};

const actions = {



    login({ commit }, data) {
        const { email, password } = data;
        return new Promise((resolve, reject) => {
          login({ email, password })
            .then(({ data }) => {
              console.log(data)
              commit("SET_TOKEN", data.token);
              setToken(data.token);
              if(data.errorCode === 0){
                router.push({ path: '/admin/home' })
              }
              resolve();
            })
            .catch(error => {
              reject(error);
            });
        });
      },

      // remove token to logout
    logout({ commit }) {
        return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
        })
    },


};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
