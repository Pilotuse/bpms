<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container class="content">
      <el-aside width="300px" class="aside">
        <Aside />
      </el-aside>
      <el-main>
        <van-notice-bar mode="closeable" left-icon="volume-o" scrollable :text="notice" />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
export default {
  data(){
    return {
      notice:'管理员将于2021年4月14日中午12点升级系统，请注意在此时请勿提单！ 😊'
    }
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
  padding-top: 20px;
  height: calc(100% - 60px);
}

.aside {
  border-right: 1px solid #f0f0f0;
}


.van-notice-bar__wrap,.van-notice-bar  {
  color: #1890ff !important;
  background: #e6f7ff !important;
  height: 28px !important;
}
</style>