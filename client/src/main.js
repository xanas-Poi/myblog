import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; //vuex
import "./assets/icons/iconfont.css"; //icons
import "./assets/css/base.css"; //基础样式

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//按需
// import element from "./utils/elementUi"
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(element);

//mavon-editor 全局
// import mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
