<template>
  <div id="createArticle">
    <el-form
      :model="articleForm"
      status-icon
      :rules="rules"
      ref="articleForm"
      label-width="100px"
      class="demo-articleForm"
    >
      <el-form-item label="标题" prop="title" style="display:inline-block;">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="分类" prop="region" style="display:inline-block;">
        <el-select
          v-model="articleForm.category_id"
          placeholder="请选择文章分类"
        >
          <el-option
            v-for="(item, index) in this.categoryList"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="submitForm('articleForm')"
        >更新</el-button
      >
      <el-form-item label="内容">
        <mavonEditor v-model="articleForm.content" :ishljs="true">
        </mavonEditor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: { mavonEditor },
  data() {
    var validateTitle = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入标题"));
      }
      callback();
    };
    return {
      id: this.$route.params.id,
      categoryList: [],
      articleForm: {
        id: "",
        title: "",
        content: "",
        category_id: ""
      },
      rules: {
        title: [{ validator: validateTitle, trigger: "blur" }]
      }
    };
  },
  created() {
    this._getCategoryList();
    this._getArticle();
  },
  methods: {
    ...mapActions({
      getArticle: "article/detail",
      updateArticle: "article/update",
      getCategoryList: "category/list"
    }),

    //获取分类列表
    async _getCategoryList() {
      const res = await this.getCategoryList();
      this.categoryList = res.data.data;
    },

    // 获取文章列表
    async _getArticle() {
      try {
        const res = await this.getArticle(this.id);
        const article = res.data.data;

        this.articleForm.title = article.title;
        this.articleForm.category_id = parseInt(article.category_id);
        this.articleForm.content = article.content;
      } catch (e) {
        console.log(e);
      }
    },

    // 更新文章
    async _updateArticle() {
      this.articleForm.id = this.id;
      try {
        await this.updateArticle(this.articleForm);
        this.$message({
          showClose: true,
          message: "更新成功",
          type: "success"
        });
        this.$router.push("/admin/article/list");
      } catch (err) {
        console.log(err);
      }
    },

    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this._updateArticle();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#createArticle {
  width: 100%;
  margin-top: 40px;
  margin-left: -30px;
  .el-button {
    display: inline-block;
    float: right;
  }
}
</style>
