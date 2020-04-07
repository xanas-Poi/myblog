<template>
  <div class="categorylist">
    <el-table
      stripe
      :data="categoryList"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '10px' }"
      style="font-size: 12px"
    >
      <el-table-column label="索引" type="index" width="70"> </el-table-column>
      <el-table-column label="分类ID" prop="id" width="70"> </el-table-column>
      <el-table-column label="分类名称" prop="name" width="100">
      </el-table-column>
      <el-table-column label="分类关键字" prop="key" width="100">
      </el-table-column>
      <el-table-column label="parent_id" prop="parent_id" width="100">
      </el-table-column>
      <el-table-column label="其文章数" prop="article_nums" width="60">
      </el-table-column>
      <el-table-column label="创建日期" prop="createdAt" width="180">
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
  margin: 50px 12%;
  border-top: 1px solid whitesmoke;
  & .el-button--primary {
    background-color: #ffd04e;
    color: black;
    border: 1px solid #ffd04e;
  }
  & .el-button--danger {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  & .el-button--danger {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}
</style>
