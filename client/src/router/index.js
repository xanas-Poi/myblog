import Vue from "vue";
import VueRouter from "vue-router";
import adminRouter from "./modules/admin";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "blog1",
    meta: { title: "博客" },
    component: () => import("@/views/blog/bloglayout.vue"),
    children: [
      {
        path: "/",
        name: "bloghome",
        meta: { group: "博客", title: "博客 - 主页" },
        component: () => import("@/views/blog/bloghome.vue")
      },
      {
        path: "/article/:id",
        name: "blogetail",
        meta: { group: "博客", title: "博客 - 详情" },
        component: () => import("../views/blog/blogdetail.vue")
      }
    ]
  },
  // <--管理-->
  {
    path: "/admin/login",
    name: "login",
    meta: { title: "登录" },
    component: () => import("@/views/admin/login.vue")
  },
  adminRouter
  // <--管理-->
];

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

// //路由守卫
import { getToken } from "@/utils/session";
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    if (getToken()) {
      // 判断token
      next();
    } else {
      next({
        path: "/admin/login",
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

export default router;
