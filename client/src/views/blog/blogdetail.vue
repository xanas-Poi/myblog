<template>
  <section class="container" v-if="detail">
    <section class="article-content">
      <h1 class="article-title">{{ detail.title }}</h1>

      <div class="article-info" v-if="detail.category_detail">
        <p class="article-category">
          <i class="iconfont icon-xanasshuiguojuan"></i
          >{{ detail.category_detail.name }}
        </p>
        <p class="article-createdAt">
          <i class="icon el-icon-time"></i> {{ detail.createdAt }}
        </p>
      </div>

      <div class="article-detail" id="article-detail">
        <mavonEditor
          style="height: 100%;padding:5%"
          :ishljs="true"
          v-html="detail.content"
          :defaultOpen="'preview'"
          :editable="false"
          :subfield="false"
          :toolbarsFlag="false"
          :boxShadow="false"
        >
        </mavonEditor>
      </div>

      <div class="article-comments">
        <v-comments
          :commentsList="detail.comments_list"
          @changeCommentsPage="changeCommentsPage"
          @updateComments="updateComments"
          :id="id"
        >
        </v-comments>
      </div>
    </section>
  </section>
</template>
<script>
import { mapActions } from "vuex";
import VComments from "./blogcomment";
import utils from "../../utils/utils";
//editor
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "detailpage",
  components: {
    VComments,
    mavonEditor
  },
  data() {
    return {
      // 文章ID
      id: this.$route.params.id,
      // 文章详情
      detail: null,
      content: null
    };
  },
  created() {
    if (!this.id) {
      this.$router.push("/");
    } else {
      this.getArticle();
    }
  },

  methods: {
    ...mapActions({
      getArticleDetail: "article/getArticleDetail",
      getCommentsList: "comments/getCommentsList",
      createComments: "comments/createComments"
    }),

    // 更新评论
    updateComments(newComments) {
      this.detail.comments_list.data.unshift(newComments);
    },
    // 切换评论页面
    async changeCommentsPage(page) {
      const res = await this.getCommentsList({
        article_id: this.id,
        page
      });
      this.detail.comments_list = res.data.data;
    },
    /**
     * 获取文章详情
     * @returns 文章详情
     */
    async getArticle() {
      let res = await this.getArticleDetail(this.id);
      this.detail = res.data.data;
      this.content = utils.compiledMarkdown(this.detail.content);
      document.title = this.detail.title;
      this.detail.createdAt = this.detail.createdAt.slice(0, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  float: left;
  margin-left: 12%;
  & .article-content {
    background-color: white;
    padding: 2rem;
    margin: 2rem 0;
    & .article-title {
      font-weight: normal;
      font-size: 3.2rem;
      line-height: 1.6em;
      margin-top: 2rem;
      line-height: normal;
      word-wrap: break-word;
    }
    & .article-info {
      & p {
        display: inline;
        line-height: 2rem;
        font-size: 1.2rem;
        color: #1f7a65;
      }
    }

    & .article-detail {
      margin-top: 1rem;
      color: #ffffff;
    }
  }

  .article-comments {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 960px) {
  .container {
    width: 100%;
    min-width: 400px;
    margin-left: 0;
  }
  .container .content .article-info p.article-createdAt {
    display: none;
  }
}
</style>
