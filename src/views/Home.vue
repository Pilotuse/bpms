<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>

    <van-notice-bar
      color="#1890ff"
      background="#ecf9ff"
      mode="closeable"
      left-icon="volume-o"
      scrollable
      :text="notice"
    />

    <el-container class="content">
      <el-aside width="300px" class="aside">
        <Aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
export default {
  data() {
    return {
      notice:
        "全省通报：因数据库宕机，导致业务无法订购成功，正在紧急恢复中，再次期间请勿提单，若系统正常，将会发送消息提醒！",
    };
  },
  components: {
    Header,
    Aside,
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
</style>