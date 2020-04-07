/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; //vuex
import "./assets/icons/iconfont.css"; //icons
import "./assets/css/base.css"; //基础样式

import "element-ui/lib/theme-chalk/index.css";
import {Pagination,Menu,Submenu,MenuItem,MenuItemGroup,Input,InputNumber,Button,Table,
TableColumn,Breadcrumb,BreadcrumbItem,Form,FormItem,Icon,Container,Header,
Aside,Main,Message } from "element-ui"
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(MenuItemGroup);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
