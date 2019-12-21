<template>
  <section class="container">
    <article class="article" id="article">
      <ul class="article-box" v-if="list.length > 0">
        <label>最新博客</label>
        <li class="article-item" v-for="(item, index) in list" :key="index">
          <div class="article-content">
            <h1 class="article-title">
              <router-link v-bind:to="'/article/' + item.id" target="_blank">{{
                item.title
              }}</router-link>
            </h1>

            <div class="article-info">
              <p class="article-category" v-if="item.category_detail">
                {{ item.category_detail.name }}
              </p>
              <p class="article-browse">
                <i class="icon el-icon-view"></i> {{ item.browse }}
              </p>
              <p class="article-browse">
                <i class="icon el-icon-chat-dot-round"></i>
                {{ item.comments_nums }}
              </p>
              <p class="article-create-at">
                <i class="icon el-icon-time"></i> {{ item.created_at }}
              </p>
            </div>
          </div>
        </li>

        <section class="page" v-if="pagination">
          <!-- <section class="page"> -->
          <el-pagination
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
  display: flex;
  width: 50%;
  margin: 80px auto;
}
.article {
  flex: 9;
  border-radius: 50px;
  background: #fff;
  // box-shadow: 1px 2px 4px #29ee0277;
  padding: 10px;
  a {
    text-decoration: none;
    color: black;
  }
  label {
    font-size: 32px;
    margin: 0 300px;
    font-weight: 800;
    color: black;
    white-space: nowrap;
  }
  & .article-item {
    cursor: pointer;
    padding: 24px;
    // display: flex;
    border-bottom: 1px solid #f4f4f4;
  }

  .article-content {
    flex: 1;
    margin-right: 24px;
  }

  & .article-title {
    color: #464c5b;
    font-size: 24px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .article-info {
    & p {
      display: inline-block;
      margin-right: 24px;
      margin-top: 24px;
      font-size: 16px;
      color: #9ea7b4;
    }

    & p.article-category {
      height: 32px;
      line-height: 32px;
      padding: 0 32px;
      font-size: 16px;
      // color: #29ee02;
      color: black;
      border-radius: 32px;
      background: #f8f8f8;
    }
  }
}

.page {
  padding: 32px 0;
  text-align: center;
}
.article-empty {
  text-align: center;
  padding: 24px 0;
  font-size: 16px;
  color: #989898;
}
</style>
