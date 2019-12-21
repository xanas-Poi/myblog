import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//echarts
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;

//ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//editor
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

Vue.config.productionTip = false;

// console.log(process.env.VUE_APP_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
