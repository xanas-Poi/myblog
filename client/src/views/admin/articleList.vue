<template>
  <div class="articleList">
    <el-table :data="list" stripe>
      <el-table-column label="ID" prop="id" width="50"></el-table-column>
      <el-table-column label="标题" prop="title" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="评论次数" prop="comments_nums" width="80">
      </el-table-column>
      <el-table-column label="浏览次数" prop="browse" width="80">
      </el-table-column>
      <el-table-column label="分类ID" prop="category_id" width="80">
      </el-table-column>
      <el-table-column label="创建时间" prop="createdAt" width="250">
      </el-table-column>
      <el-table-column label="操作" width="240">
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
    <el-pagination
      @current-change="changePage"
      :current-page="currentPage"
      layout="prev, pager, next"
      :total="page.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import merge from "webpack-merge";

export default {
  data() {
    return {
      currentPage: 1, //初始页
      list: [],
      page: {}
    };
  },
  created() {
    this._getArticleList();
  },
  methods: {
    ...mapActions({
      getArticleList: "article/list",
      destroyArticle: "article/destroy"
    }),
    /**
     * 获取文章
     *
     * @returns 文章列表
     */
    async _getArticleList() {
      // const {page, desc, category_id, keyword} = this.$route.query;

      const res = await this.getArticleList({
        page: this.currentPage
      });
      console.log(res);
      this.list = res.data.data.data;
      this.page = res.data.data.meta;
    },

    /**
     * 切换页码
     * @page 页码
     */
    async changePage(page) {
      this.$router.replace({
        query: merge(this.$route.query, {
          page
        })
      });
      this.currentPage = page;
      this._getArticleList();
    },

    async handleDelete(id) {
      const res = await this.destroyArticle(id);
      this.$message({
        showClose: true,
        message: res.data.msg,
        type: "success"
      });
      this._getArticleList();
    },
    handleEdit(id) {
      this.$router.push(`/admin/article/update/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.articleList {
  margin: 15px auto;
  border-top: 1px solid whitesmoke;
  & .el-pagination {
    text-align: center;
    margin-top: 5px;
  }
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
}
</style>
