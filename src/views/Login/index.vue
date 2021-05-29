<template>
  <div class="login-container">
    <div class="header">
      <div class="header-context">
        <div class="brand">
          <img src="@/assets/bpms_logo.png" alt="" />
          花生金库
        </div>
        <ul class="navbar">
          <li>账号金库</li>
          <li>权限金库</li>
          <li>审计中心</li>
          <li>申请记录</li>
          <li>日志流水</li>
          <li>管理入口</li>
        </ul>
      </div>
    </div>
    <div class="contents">
      <div class="login-context">
        <div class="describer">
          <div class="target">
            <img src="@/assets/bpms_logo.png" alt="" />
            花生金库
            <i class="iconfont icon-guanbi1"></i>
            <img src="../../assets/logo.png" alt="" />
            坚果分析
          </div>
          <div class="options"></div>
        </div>

        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
      </div>
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
        this.$router.history.push("/overview/city");
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
@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.woff2")
      format("woff2"),
    url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.woff") format("woff"),
    /* chrome、firefox */ url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/webfont_5iu6m6fb7v8.svg#站酷小薇体") format("svg"); /* iOS 4.1- */
}

.header {
  position: relative;
  padding: 0 60px;
  line-height: 80px;
  height: 80px;
  box-shadow: 0 0 12px -7px #bdc3c7;
}

.header .brand {
  line-height: 80px;
  height: 80px;
  font-size: 30px;
  font-family: "webfont";
}

.brand img {
  width: 40px;
  vertical-align: sub;
}

.navbar {
  display: flex;
  padding: 0 40px;
}

.navbar li {
  padding: 0 20px;
}

.login-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.contents {
  display: flex;
  justify-content: center;
  padding-top: 240px;
  height: 100%;
  background: #fcfcfc;
}

.login-context {
  padding: 20px;
  width: 360px;
  height: 500px;
  background: #fff;
  box-shadow: 0 0 12px -7px #bdc3c7;
}

.login-brand {
  margin-bottom: 50px;
  color: #34495e;
}

/deep/.el-form-item {
  margin-bottom: 40px;
}

/deep/.el-form-item__label {
  font-size: 16px;
}

/deep/.el-button--primary {
  margin-top: 10px;
  border: none;
  width: 100%;
}

.describer img {
  width: 36px;
}

.describer img:first-child {
  width: 30px;
}

.options {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>