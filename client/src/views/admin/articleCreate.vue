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

      <el-form-item label="分类" prop="region" style="display:inline-block">
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
        >创建</el-button
      >

      <el-form-item label="内容">
        <mavonEditor
          v-model="articleForm.content"
          :ishljs="true"
          boxShadowStyle="0 2px 12px 0 rgba(1, 1, 0, 0.3)"
          defaultOpen="edit"
          ref="md"
          @imgAdd="handleEditorImgAdd"
          @imgDel="handleEditorImgDel"
        >
        </mavonEditor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//editor
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
      imgLimit: 1,
      articleForm: {
        title: "",
        content: "",
        category_id: "",
        cover: ""
      },
      rules: {
        title: [{ validator: validateTitle, trigger: "blur" }]
      }
    };
  },
  created() {
    this._getCategoryList();
  },
  methods: {
    ...mapActions({
      createArticle: "article/create",
      getCategoryList: "category/list"
    }),

    //获取分类列表
    async _getCategoryList() {
      const res = await this.getCategoryList();
      this.categoryList = res.data.data;
    },

    // 创建文章
    async _createArticle() {
      try {
        await this.createArticle(this.articleForm);
        this.$message({
          showClose: true,
          message: "新增成功",
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
          this._createArticle();
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
  margin-top: 40px;
  margin-left: -30px;
  .el-button {
    display: inline-block;
    float: right;
  }

  & .el-button--primary {
    background-color: #ffd04e;
    color: black;
  }
}
</style>
