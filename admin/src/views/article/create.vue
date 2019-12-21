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
    <div>
      <el-form-item label="标题" prop="title" style="display:inline-block;width:980px">
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
    </div>
      

      <el-upload
        class="upload-demo"
        style="margin:5px 0 5px 100px"
        accept="image/jpeg,image/png"
        :limit="imgLimit"
        drag
        action="https://jsonplaceholder.typicode.com/posts/">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text" >将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <el-form-item label="内容">
        <mavon-editor v-model="articleForm.content" :ishljs="true">
        </mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('articleForm')"
          >创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
      imgLimit:1,
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
  width: 85%;
  position: fixed;
  left: 180px;
  top: 120px;
  // .el-form-item{
  //   display:inline-block;
  // }
  .el-button {
    float: right;
  }
}
</style>
