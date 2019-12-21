<template>
  <div class="adminHeader">
    <el-row class="tac">
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        text-color="#fff"
        background-color="#545c64"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>主页</span>
          </template>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/article/list">文章列表</el-menu-item>
            <el-menu-item index="/admin/article/create">
              创建文章
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/category/list">分类列表</el-menu-item>
            <el-menu-item index="/admin/category/create">
              创建分类
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>评论管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/comments/list">评论列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
.adminHeader {
  position: fixed;
  top:51px;
  left: 0;
  width: 200px;
  height: 100%;
  // border: 1px solid red;
  background-color: #545c64;
}
</style>
