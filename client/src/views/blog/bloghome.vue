<template>
  <section class="blog-container" id="blog-container">
    <ul class="blog-box" v-if="list.length > 0">
      <li class="blog-foreach" v-for="(item, index) in list" :key="index">
        <h2 class="blog-title">
          <router-link v-bind:to="'/article/' + item.id" target="_blank">{{
            item.title
          }}</router-link>
        </h2>

        <section class="blog-info" v-if="item.category_detail">
          <p style="margin:0px;">
            <img
              src="../../assets/avator.png"
              class="author-thumb"
              alt="author-thumb"
            />
          </p>
          <p class="blog-category">
            <i class="iconfont icon-xanasshuiguojuan"></i>
            {{ item.category_detail.name }}
          </p>
          <p class="blog-browse">
            <i class="icon el-icon-view"></i> {{ item.browse }}
          </p>
          <p class="blog-browse">
            <i class="icon el-icon-chat-dot-round"></i>
            {{ item.comments_nums }}
          </p>
          <p class="blog-creatdAt">
            <i class="icon el-icon-time"></i> {{ item.createdAt }}
          </p>
        </section>

        <section class="content-box">
          <p class="blog-content" v-html="item.content"></p>
        </section>

        <section class="blog-button">
          <button>
            <router-link :to="'/article/' + item.id" target="_blank"
              >查看全文</router-link
            >
          </button>
        </section>
      </li>
      <section
        class="blog-next"
        v-if="pagination.current_page < pagination.total_pages"
      >
        <p>Page {{ pagination.current_page }} of {{ pagination.total }}</p>
        <button v-on:click="changePage(++pagination.current_page)">
          Older Posts →
        </button>
      </section>
    </ul>
    <ul class="blog-empty" v-else>
      暂无文章
    </ul>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import merge from "webpack-merge";
import utils from "../../utils/utils";
export default {
  data() {
    return {};
  },
  created() {
    this.getArticle();
  },
  computed: {
    ...mapState({
      list: state => state.article.articleList,
      pagination: state => state.article.pagination
    }),
    compiledMarkdown: function() {
      return utils.compiledMarkdown(this.list.content);
    }
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
.blog-container {
  width: 62%;
  .blog-box {
    margin-left: 20%;
    float: left;
    .blog-foreach {
      background-color: white;
      padding: 2rem;
      margin: 2rem 0;
      overflow: hidden;
      .blog-title {
        font-weight: normal;
        font-size: 3.2rem;
        margin-top: 2rem;
        line-height: normal;
        // word-wrap: break-word;
        // white-space: nowrap;
        text-overflow: ellipsis;
        a {
          color: black;
        }
        a:hover {
          color: #1f7a65;
        }
      }
      .blog-title:hover {
        cursor: pointer;
      }
      .blog-info {
        p {
          margin-left: 0.8rem;
          display: inline;
          line-height: 2rem;
          font-size: 1.2rem;
          color: #1f7a65;
        }
        p > img {
          width: 24px;
          height: 24px;
        }
      }

      .content-box {
        width: 100%;
        height: 9rem;
        overflow: hidden;
        line-height: 1.9em;
        .blog-content {
          text-overflow: ellipsis;
          word-wrap: break-word;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
      }

      .blog-button {
        float: right;
        position: relative;
        margin: 1rem;
        button {
          background-color: #1f7a65;
          color: white;
          cursor: pointer;
          border: none;
          width: 6rem;
          height: 3rem;
          // padding: 1rem 1.5rem;
          a a:hover,
          a:active,
          a:visited {
            color: white;
          }
        }
      }
    }
  }

  .blog-next {
    text-align: center;
    p {
      font-size: 1.4rem;
      color: #666;
      text-align: center;
    }
    button {
      background: #1f7a65;
      color: white;
      font-size: 2rem;
      padding: 2% 4%;
    }
  }
  .blog-empty {
    text-align: center;
    color: #1f7a65;
    font-size: 2rem;
    font-weight: bold;
  }
}

@media screen and (max-width: 960px) and (min-width: 375px) {
  #blog-container {
    width: 100%;
    .blog-box {
      margin: 0;
      padding: 0;
    }
    .blog-title {
      font-size: 2rem;
    }
  }
}
@media screen and (max-width: 376px) and(min-width: 320px) {
  #blog-container {
    .blog-box {
      margin: 0;
      padding: 0;
    }
    .blog-title {
      font-size: 2rem;
    }
    .blog-foreach {
      width: 95%;
      padding: 1rem;
    }
    .content-box {
      .blog-content {
        font-size: smaller;
        // margin-right: 20px;
        line-height: 2rem;
        text-overflow: clip;
        word-wrap: normal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 10px;
        margin-inline-end: 10px;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #blog-container {
    .blog-box {
      margin: 0;
      padding: 0;
    }
    .blog-title {
      font-size: 2rem;
    }
    .blog-foreach {
      width: 80%;
      padding: 1rem;
    }
    .content-box {
      .blog-content {
        font-size: smaller;
        // margin-right: 20px;
        line-height: 2rem;
        text-overflow: clip;
        word-wrap: normal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 10px;
        margin-inline-end: 10px;
      }
    }
  }
}
</style>
