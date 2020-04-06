const admin = {
  path: "/admin",
  meta: { title: "管理", requireAuth: true },
  component: () => import("@/views/admin/adminLayout.vue"),
  children: [
    {
      path: "/admin/home",
      name: "adminHome",
      meta: { title: "主页" },
      component: () => import("@/views/admin/adminHome.vue")
    },
    {
      path: "/admin/article/create",
      name: "articleCreate",
      meta: { group: "文章管理", title: "文章 - 创建" },
      component: () => import("@/views/admin/articleCreate.vue")
    },
    {
      path: "/admin/article/update/:id",
      name: "articleEdit",
      meta: { group: "文章管理", title: "文章 - 编辑" },

      component: () => import("@/views/admin/articleUpdate")
    },
    {
      path: "/admin/article/list",
      name: "articleList",
      meta: { group: "文章管理", title: "文章 - 列表" },
      component: () => import("@/views/admin/articleList.vue")
    },
    {
      path: "/admin/category/create",
      name: "categoryCreate",
      meta: { group: "分类管理", title: "分类 - 创建" },
      component: () => import("@/views/admin/categoryCreate")
    },
    {
      path: "/admin/category/update/:id",
      name: "categoryEdit",
      meta: { group: "分类管理", title: "分类 - 编辑" },

      component: () => import("@/views/admin/categoryUpdate")
    },
    {
      path: "/admin/category/list",
      name: "categoryList",
      meta: { group: "分类管理", title: "分类 - 列表" },
      component: () => import("@/views/admin/categoryList")
    },
    {
      path: "/admin/comments/list",
      name: "commentsList",
      meta: { group: "分类管理", title: "评论 - 列表" },
      component: () => import("@/views/admin/commentsList")
    }
  ]
};

export default admin;
