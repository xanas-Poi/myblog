const articleRouter = {
  path: "/admin",
  meta: { title: "首页", requireAuth: true },
  component: () => import("../../views/layout/index.vue"),
  children: [

    {
      path: "/admin/article/create",
      name: "articleCreate",
      meta: { group: "文章管理", title: "文章 -创建" },
      component: () => import("@/views/article/create")
    },
    {
      path: "/admin/article/update/:id",
      name: "articleEdit",
      meta: { group: "文章管理", title: "文章 - 编辑" },

      component: () => import("@/views/article/update")
    },
    {
      path: "/admin/article/list",
      name: "articleList",
      meta: { group: "文章管理", title: "文章 - 列表" },
      component: () => import("@/views/article/list")
    },
  ]
};

export default articleRouter;
