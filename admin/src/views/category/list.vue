<template>
  <div class="categorylist">
    <el-table style="width: 100%;" height="580" border :data="categoryList">
      <el-table-column type="index" width="70"> </el-table-column>
      <el-table-column label="ID" prop="id" width="70"> </el-table-column>
      <el-table-column label="日期" prop="createdAt" width="200">
      </el-table-column>
      <el-table-column label="分类名称" prop="name" width="100">
      </el-table-column>
      <el-table-column label="分类关键字" prop="key" width="100">
      </el-table-column>
      <el-table-column label="parent_id" prop="parent_id" width="100">
      </el-table-column>

      <el-table-column label="分类下文章数" prop="article_nums" width="120">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button size="mini" type="primary" @click="handleEdit(row.id)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      categoryList: []
    };
  },
  created() {
    this.handleUserList();
  },
  methods: {
    ...mapActions({
      getCategoryList: "category/list",
      destroyCategory: "category/destroy"
    }),

    async handleUserList() {
      const res = await this.getCategoryList();
      this.categoryList = res.data.data;
    },
    async handleDelete(id) {
      if (confirm("是否删除分类？")) {
        await this.destroyCategory(id);
        this.$message({
          showClose: true,
          message: "删除成功",
          type: "success"
        });
        this.handleUserList();
      } else {
        console.log("取消");
      }
    },
    handleEdit(id) {
      this.$router.push(`/admin/category/update/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.categorylist {
  margin: 120px 380px;
  position: fixed;
  box-shadow: 1px 3px 5px rgb(190, 190, 190);
  .el-table {
    border: 5px solid whitesmoke;
  }
}
</style>
