<template>
  <div>
    <div class="brand">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <span>Husk Analysis</span>
    </div>
    <div class="search">
      <el-input placeholder="请输入内容" v-model="searchValue">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="user-info">
      <!-- 只用一般用户才有发布功能，省属直 没有此按钮 事件如果是地市则直接进入事件列表，省属直则直接进入处理列表 -->
      <ul>
        <li v-for="item in headerMenu" :key="item.id">
          <span :class="'iconfont ' + item.icon"></span>
          {{ item.describer }}
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              范鸿宇<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span class="iconfont icon-icon_zhanghao"></span>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="iconfont icon-shoucang"></span>
                我的收藏
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="iconfont icon-kefu"></span>
                智慧客服
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="iconfont icon-chatou"></span>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { headerMenu } from "../config/headerMenu";
export default {
  data() {
    return {
      searchValue: "",
      headerMenu,
    };
  },
  methods: {},
  created() {},
};
</script>

<style>
.brand {
  float: left;
  font-size: 20px;
  line-height: 60px;
}

.brand .logo {
  float: left;
  margin-right: 10px;
  width: 40px;
}

.brand .logo img {
  margin-top: 10px;
  width: 100%;
}

.brand > span {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}

.search {
  float: left;
  width: 240px;
  margin: 10px 110px;
  border: none;
}

.search .el-input__inner {
  border: none !important;
}

.user-info {
  float: right;
}

.user-info li {
  margin: 0 10px;
  padding: 0 4px;
  float: left;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: #777;
}

.user-info li span {
  margin-right: 4px;
  color: #777;
}
</style>

