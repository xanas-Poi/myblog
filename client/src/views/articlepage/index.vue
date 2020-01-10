<template>
  <section class="container">
    <article class="article" id="article">
      <ul class="article-box" v-if="list.length > 0">
        <li class="article-item" v-for="(item, index) in list" :key="index">
          <div class="article-content">
            <h1 class="article-title">
              <router-link v-bind:to="'/article/' + item.id" target="_blank">{{
                item.title
              }}</router-link>
            </h1>

            <div class="article-info"  v-if="item.category_detail">
              <p class="article-category">
                <i class="el-icon-d-arrow-right"></i> {{ item.category_detail.name }}
              </p>
              <p class="article-browse">
                <i class="icon el-icon-view"></i> {{ item.browse }}
              </p>
              <p class="article-browse">
                <i class="icon el-icon-chat-dot-round"></i>
                {{ item.comments_nums }}
              </p>
              <p class="article-create-at">
                <i class="icon el-icon-time"></i> {{ item.createdAt }}
              </p>
            </div>
          </div>
        </li>

        <section class="page" v-if="pagination">
          <el-pagination
            background="ture"
            layout="prev, pager, next"
            :page-count="pagination.count"
            :current-page="pagination.current_page"
            @current-change="changePage"
            :total="pagination.total"
          >
          </el-pagination>
        </section>
      </ul>
      <ul class="article-empty" v-else>
        暂无文章
      </ul>
    </article>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import merge from "webpack-merge";

export default {
  data() {
    return {};
  },

  created() {
    console.log(this.$route);
    this.getArticle();
  },
  computed: {
    ...mapState({
      list: state => state.article.articleList,
      pagination: state => state.article.pagination
    })
  },
  methods: {
    ...mapActions({
      getArticleList: "article/getArticleList"
    }),
    /**
     * 获取文章
     * @returns 文章列表
     */
    async getArticle() {
      const { page, desc, category_id, keyword } = this.$route.query;
      await this.getArticleList({
        page,
        desc,
        category_id,
        keyword
      });
    },

    /**
     * 切换页码
     * @page 页码
     */
    async changePage(page) {
      this.$router.replace({
        query: merge(this.$route.query, {
          page: page
        })
      });
      this.getArticle();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
}
.article {
  a {
    color: grey;
    font: bold;
  }
  & .article-item {
    box-shadow: 1px 30px 200px 220px rgba(0, 0, 0, 0.555);
    // border-radius: 50%;
    background: rgba(255, 153, 0, 0.075);
    cursor: pointer;
    padding: 15px 20px;
    margin-top: 20px;
  }

  .article-content{
    padding: 10px;
  }

  & .article-title {
    font-size: 22px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .article-info {
    & p {
      display: inline-block;
      margin-right: 24px;
      margin-top: 10px;
      font-size: 12px;
      color: grey;
    }
  }
  .page {
    padding: 32px 0;
    text-align: center;
    & .el-pagination{
    }
  }
}



.article-empty {
  text-align: center;
  padding: 24px 0;
  font-size: 16px;
  color: #989898;
}
</style>
