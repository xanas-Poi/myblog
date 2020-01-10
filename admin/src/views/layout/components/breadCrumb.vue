<template>
  <div class="breadCrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in metaTitle" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
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
      console.log(this.$route.meta.title)
      this.metaTitle = this.$route.meta;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadCrumb {
  z-index: 999;
  top: 51px;
  width: 1317px;
  padding: 12px 0 12px 20px;
  border: 1px solid whitesmoke;
  position: fixed;
  margin: 0px 0 0 200px;
  background-color: white;
  // z-index: 888;
}
</style>
