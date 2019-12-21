<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <label id="title" for="male">Administrator login</label>
      <div id="box">
        <el-form-item prop="email">
          <el-input
            v-model="ruleForm.email"
            id="male"
            placeholder="请输入用户账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入用户密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        // email:[
        //   { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        //   { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
        // ],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$store.dispatch("user/login", this.ruleForm).then(() => {
            this.$message({
              showClose: true,
              message: "成功登录",
              type: "success"
            });
          });
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
.login {
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 10% auto;
  width: 500px;
  height: 300px;
  border-radius: 20%;
  #title {
    display: block;
    width: 100%;
    // border: 1px solid greenyellow;
    font-size: 24px;
    text-align: center;
    padding: 20px 0 10px 0;
    color: rgb(0, 0, 0);
    font-weight: 800;
  }
  #box {
    // border: 1px solid gold;
    width: 80%;
    position: relative;
    left: 0%;
    .el-form-item {
      // border: 1px solid green;
      margin-top: 30px;
      text-align: center;
      .el-button {
        padding: 8px 135px 8px 135px;
      }
    }
  }
}
</style>
