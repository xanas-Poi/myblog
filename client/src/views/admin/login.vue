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
      <label id="title" for="male">后台管理登录</label>
      <div id="box">
        <el-form-item prop="email">
          <el-input
            v-model="ruleForm.email"
            id="male"
            placeholder="请输入管理员邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入管理员邮箱"
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
  margin: 0 auto;
  width: 450px;
  transform: translateY(50%); /*css3新属性*/
  border-radius: 5%;
  #title {
    display: block;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: 800;
  }
  #box {
    width: 350px;
    .el-form-item {
      margin-top: 20px;
      text-align: center;
      & .el-button--primary {
        padding: 10px 110px;
        background-color: #ffd04e;
        color: black;
        border: 1px solid #ffd04e;
      }
    }
  }
}
</style>
