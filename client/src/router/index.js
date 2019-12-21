import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "article",
      component: () => import("@/views/articlepage/index.vue")
    },
    {
      path: "/article/:id",
      name: "detailspage",
      component: () => import("@/views/detailspage/index.vue")
    }
  ]
});
