const categoryRouter = {
  path: "/admin",
  meta: { title: "首页", requireAuth: true },
  component: () => import("../../views/layout/index.vue"),
  children: [
    {
      path: "/admin/category/create",
      name: "categoryCreate",
      meta: { group: "分类管理", title: "分类 -创建" },
      component: () => import("@/views/category/create")
    },
    {
      path: "/admin/category/update/:id",
      name: "categoryEdit",
      meta: { group: "分类管理", title: "分类 - 编辑" },

      component: () => import("@/views/category/update")
    },
    {
      path: "/admin/category/list",
      name: "categoryList",
      meta: { group: "分类管理", title: "分类 - 列表" },
      component: () => import("@/views/category/list")
    }
  ]
};

export default categoryRouter;
