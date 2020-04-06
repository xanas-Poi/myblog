<template>
  <div id="layout">
    <el-container>
      <el-header>
        <p class="left">
          <i class="iconfont icon-xanasshuiguo7">博客后台管理</i>
        </p>
        <div class="right">
          <span style="margin-right:20px;">
            管理员：
            <i class="iconfont icon-xanasshuiguo3"><u>xanas</u></i>
          </span>
          <button><a v-on:click="userLogout()">退出登录</a></button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- Nav start -->
          <el-row class="tac">
            <el-menu
              router
              :default-active="this.$route.path"
              class="el-menu-vertical-demo"
              text-color="#fff"
              background-color="#000"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/admin/home">
                <i class="iconfont icon-xanasshuiguopingguo"></i>
                <span slot="title">主页</span>
              </el-menu-item>

              <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont icon-xanasshuiguo7"></i>
                  <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/article/list">
                    <i class="iconfont icon-xanasshuiguo6">
                      文章列表
                    </i>
                  </el-menu-item>
                  <el-menu-item index="/admin/article/create">
                    <i class="iconfont icon-xanasicon-test">
                      创建文章
                    </i>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="iconfont icon-xanasfruits"></i>
                  <span>分类管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/category/list">
                    <i class="iconfont icon-xanasshengxian-shuiguo2"
                      >分类列表</i
                    >
                  </el-menu-item>
                  <el-menu-item index="/admin/category/create">
                    <i class="iconfont icon-xanasshuiguo4">创建分类</i>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="iconfont icon-xanasshuiguoqu"></i>
                  <span>评论管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/comments/list">
                    <i class="iconfont icon-xanasshuiguojuan">评论列表</i>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="5" disabled>
                <i slot="title" class="iconfont icon-xanasshuiguojuan"></i>
                <span slot="title">设置</span>
              </el-menu-item>
            </el-menu>
          </el-row>
          <!-- Nav end -->
        </el-aside>
        <el-main>
          <!-- breadCumb start -->
          <div class="breadCrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                ><i class="iconfont icon-xanasshuiguo2"
                  >主页</i
                ></el-breadcrumb-item
              >
              <el-breadcrumb-item
                v-for="(item, index) in metaTitle"
                :key="index"
                ><i class="iconfont icon-xanasshuiguoqu">{{
                  item
                }}</i></el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
          <!-- breadCumb end -->
          <!-- 路由 -->
          <router-view />
          <!-- 路由 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      metaTitle: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route.path);
      this.metaTitle = this.$route.meta;
    },
    userLogout() {
      if (confirm("退出登录？")) {
        this.$store.dispatch("user/logout").then(() => {
          this.$message({
            showClose: true,
            message: "退出登录",
            type: "success"
          });
        });
        this.$router.push("/admin/login").catch(err => {
          console.log(err);
        });
      } else {
        console.log("取消");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#layout {
  .el-header {
    background-color: black;
    & .left {
      float: left;
      padding: 20px;
      color: #ffd04e;
      font-weight: bold;
    }
    & .right {
      color: white;
      position: relative;
      top: 30%;
      float: right;
      padding-right: 30px;
      font-size: 16px;
      font-weight: bold;
      button {
        background-color: white;
        border: 1px solid white;
        padding: 4px;
        font-weight: bold;
      }
    }
  }

  .el-aside {
    z-index: 999;
    // background-color: gray;
    // height: 100%;
    // position: relative;
    // float: left;
  }

  .el-main {
    .breadCrumb {
      color: black;
      width: 100%;
      // position: relative;
      // margin-top: -1.5%;
      // margin-left: -1.5%;
      // padding: 3px;
      // background-color: whitesmoke;
    }
    // background-color: #e9eef3;
    // color: #333;
  }
}
</style>
