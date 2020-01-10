const commentsRouter = {
  path: "/admin",
  meta: { title: "首页", requireAuth: true },
  component: () => import("../../views/layout/index.vue"),
  children: [
    {
      path: "/admin/comments/list",
      name: "commentsList",
      meta: { group: "评论管理", title: "评论 - 列表" },
      component: () => import("@/views/comments/list")
    }
  ]
};

export default commentsRouter;
