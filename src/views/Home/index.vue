<template>
  <el-container class="container">
    <div
      class="data-safty"
      v-if="roleTypeTips"
      title="点击关闭提示信息"
      @click="closeDataSafty"
    >
      超级管理员用户请注意，任何数据查询和变更提交，都会留下日志信息！
    </div>
    <el-header class="header">
      <Header />
    </el-header>

    <Notice :text="notice" :color="color" :icon="icon" />

    <el-container class="content">
      <el-aside width="300px" class="aside">
        <Aside />
      </el-aside>
      <el-main>
        <router-view />
        <div id="subapp-viewport"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 进入的一瞬间开始请求导航栏
import Header from "../Header";
import Aside from "../Aside";
import Notice from "../../components/Notice";
export default {
  data() {
    return {
      notice: "因数据库宕机，导致业务无法订购成功，正在紧急恢复中！",
      color: "#1890ff",
      roleTypeTips: "",
      icon: "",
      menu:[]
    };
  },
  methods: {
    changeRoleType() {
      const type = JSON.parse(localStorage.getItem("users")).author;
      if (type === "admin") this.roleTypeTips = true;
    },
    closeDataSafty() {
      this.roleTypeTips = false;
    },
  },
  components: {
    Header,
    Aside,
    Notice,
  },
  mounted() {
    this.changeRoleType();
  },
};
</script>


<style>
.el-main {
  padding: 0 26px 10px 26px !important;
}
.container {
  width: 100%;
  height: 100%;
  min-width: 1200px;
}

.header {
  box-shadow: 0 2px 8px #f0f1f2;
}

.content {
  padding-top: 10px;
  height: calc(100% - 88px);
}

.aside {
  border-right: 1px solid #f0f0f0;
}

.van-notice-bar__wrap,
.van-notice-bar {
  height: 28px !important;
}

.data-safty {
  cursor: pointer;
  display: inline-block;
  padding: 4px 0;
  color: #fff;
  background: #1890ff;
  text-align: center;
}
</style>