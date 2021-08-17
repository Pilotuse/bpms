<template>
  <div class="login-container">
    <div class="header">
      <div class="header-context">
        <div class="brand">
          <img src="@/assets/bpms_logo.png" alt="" />
          花生金库
        </div>
        <!-- <ul class="navbar">
          <li>账号金库</li>
          <li>权限金库</li>
          <li>审计中心</li>
          <li>申请记录</li>
          <li>日志流水</li>
          <li>管理入口</li>
        </ul> -->
      </div>
    </div>
    <div class="user-login">
      <div class="contents">
        <h1>
          安全登录门户
          <i class="el-icon-loading el-icon" ></i>
        </h1>
        <div class="login-context">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <div class="form-title">用户名：</div>
            <el-form-item prop="username">
              <el-input
                type="text"
                v-model="ruleForm.username"
                autocomplete="off"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <div class="form-title">密码：</div>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
              >
            </el-form-item>
          </el-form>
          <div class="describer">
            <span class="el-icon-chat-line-round el-icon"></span>
            <span class="describer-font">暂未开启自助注册渠道，一期灰度测试测试用户请联系管理员，进行账户注册。感谢支持！</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
            pattern:
              /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
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
    ...mapActions(["login"]),
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let that = this;
          this.login({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            callback(data) {
              let { status, message, token, author, username, cnname } =
                data.content.result;
              if (status == "00000") {
                localStorage.setItem(
                  "users",
                  JSON.stringify({
                    date: new Date(),
                    token,
                    author,
                    username,
                    cnname,
                  })
                );
                // 将数据存在vuex中,然后取拉取该用户的菜单权限，可以单独配置菜单
                that.$router.push({ path: "/overview/research" });
              } else {
                that.$notify.error({
                  title: `错误 [${status}]`,
                   message,
                  showClose: false,
                });
              }
            },
          });
        } else {
          this.$notify.error({
            title: "错误 [20324]",
            message: "用户信息校验未通过，请重新输入信息",
            showClose: false,
          });
        }
      });
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
  background: #fff;
  z-index: 999;
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

.user-login {
  position: relative;
  height: 100%;
  background: #fdfdfd;
}

.contents {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-context {
  padding: 30px 30px;
  height: 420px;
  width: 380px;
  background: #fff;
  box-shadow: 0 0 12px -7px #bdc3c7;
  border-radius: 4px;
  margin-bottom: 10%;
}

.login-brand {
  margin-bottom: 50px;
  color: #34495e;
}

/deep/.el-form-item {
  margin-bottom: 30px;
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

.el-icon {
  font-size: 20px;
  margin-right: 6px;
  color: #409EFF;
}

.describer-font {
  font-size: 14px;
  color: #aaa;
}
.form-title {
  display: inline-block;
  padding: 4px 0;
  font-size: 16px;
  color: #777;
}
</style>