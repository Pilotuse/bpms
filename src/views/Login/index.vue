<template>
  <div class="login-container">
    <div class="login-content">
      <h1 class="login-brand">Husk Analysis</h1>

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
      <div>登录将授权柠檬数服获取用户信息</div>
    </div>
  </div>
</template>

// <script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名！", trigger: "blur" },
          {
            required: true,
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "用户名不正确，请输入邮箱！",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(() => {
        this.$router.history.push('/overview/city')
        // if (valid) {
        //   alert("submit!");
        // } else {
        //   console.log("error submit!!");
        //   return false;
        // }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('../../assets/backimg.jpg');
  background-size: cover;
  overflow: hidden;
}

.login-content {
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  height: 500px;
  background: #fff;
  border-radius: 6px;
}

.login-brand {
  margin-bottom: 50px;
  color: #34495e;
}

/deep/.el-form-item {
  margin-bottom: 40px;
}

/deep/.el-input {
  width: 90%;
}

/deep/.el-form-item__label {
  font-size: 16px;
}

/deep/.el-button--primary {
  margin-top: 10px;
  background: #34495e;
  border: none;
  width: 50%;
  height: 44px;
}
</style>