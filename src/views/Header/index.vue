<template>
  <div>
    <div class="brand">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <span>Husk Analysis</span>
    </div>
    <div class="search" v-show="false">
      <el-input placeholder="请输入内容" v-model="searchValue">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="user-info">
      <!-- 只用一般用户才有发布功能，省属直 没有此按钮 事件如果是地市则直接进入事件列表，省属直则直接进入处理列表 -->
      <ul>
        <!-- <li v-for="item in headerMenu" :key="item.id">
          <span :class="'iconfont ' + item.icon"></span>
          {{ item.describer }}
        </li> -->
        <li>
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              {{ cnname }}
              <el-tag size="small" :type="tagType">{{ author }}</el-tag>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>
                <span class="iconfont icon-icon_zhanghao"></span>
                个人中心
              </el-dropdown-item> -->
              <!-- <el-dropdown-item>
                <span class="iconfont icon-shoucang"></span>
                我的收藏
              </el-dropdown-item> -->
              <!-- <el-dropdown-item>
                <span class="iconfont icon-kefu"></span>
                智慧客服
              </el-dropdown-item> -->
              <el-dropdown-item command="logout">
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
import { headerMenu } from "../../config/headerMenu";
export default {
  data() {
    return {
      searchValue: "",
      headerMenu,
      cnname: "",
      author: "",
      tagType: "",
      authorList: [
        { en: "tester", name: "测试", type: "" },
        { en: "manager", name: "管理员", type: "warning" },
        { en: "admin", name: "超级管理员", type: "danger" },
        { en: "tripartite", name: "三方用户", type: "success" },
        { en: "developer", name: "开发", type: "info" },
      ],
    };
  },
  methods: {
    notify({
      type = "error",
      title = "交易失败",
      message = "订单交易失败",
      showClose = false,
    }) {
      this.$notify[type]({
        title,
        message,
        showClose,
      });
    },
    handleCommand(command) {
      switch (command) {
        case "logout":
          localStorage.removeItem("users");
          sessionStorage.removeItem('menu')
          this.$router.push({ path: "/" });
          this.$message.success({ message: "用户已成功退出登录" });
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    try {
      const { cnname, author } = JSON.parse(localStorage.getItem("users"));
      this.cnname = cnname;
      const { name, type } = this.authorList.filter(
        (el) => el.en === author
      )[0];
      this.author = name;
      this.tagType = type;
    } catch (message) {
      this.notify({
        type: "error",
        message,
      });
    }
  },
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

