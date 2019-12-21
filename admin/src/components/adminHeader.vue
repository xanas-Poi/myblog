<template>
  <div class="adminHeader">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="36" :src="circleUrl"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item
          ><a v-on:click="userLogout()">退出登录</a></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "adminHeader",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
.adminHeader {
  // border: 5px solid red;
  width: 100%;
  border-bottom: 1px ridge whitesmoke;
  padding: 5px 0;
  position: fixed;
  overflow: hidden;
  background-color: #545c64;
  & .el-dropdown {
    float: right;
    right: 2em;
  }
}
</style>
