<template>
  <div class="research-container">
    <h2 class="research-header">
      <span class="iconfont icon-iframetianjia"></span>
      <div class="research-header-title">我的调研</div>
    </h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="调研列表" name="first">
        <ResearchList />
      </el-tab-pane>
      <el-tab-pane label="调研设置" name="second" v-if="roletype">
        <ResearchSettings />
      </el-tab-pane>
    </el-tabs>
    <div class="research-add" @click="drawer = true"  v-if="roletype">
      <span class="iconfont icon-bianjisekuai"></span>
      <span class="research-font">调研发布</span>
    </div>

    <el-drawer
     
      title="创建调研任务"
      size="700px"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :wrapperClosable="false"
    >
      <ResearchCreate />
    </el-drawer>
  </div>
</template>


  <script>
import ResearchList from "./ResearchList";
import ResearchSettings from "./ResearchSettings";
import ResearchCreate from "./ResearchCreate";
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      activeName: "first",
      roletype: "",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleClick() {},
  },
  components: {
    ResearchList,
    ResearchSettings,
    ResearchCreate,
  },
  created() {
    this.roletype = ["manager", "admin"].some(
      (el) => el == JSON.parse(localStorage.getItem("users")).author
    );
  },
};
</script>

  
<style>
.research-container {
  position: relative;
}

.research-tooltip {
  padding-left: 4px;
}

.research-tooltip > span {
  font-size: 12px;
}

.research-header {
  position: relative;
  font-size: 16px;
  color: #555;
}

.research-header span {
  padding-right: 4px;
  font-size: 19px;
  color: #1890ff;
}

.research-add {
  position: absolute;
  top: 60px;
  right: 0;
  cursor: pointer;
  color: #1890ff;
}

.research-header-title {
  margin: 6px 6px;
  display: inline-block;
  font-size: 22px;
}

.research-font {
  padding-left: 4px;
}
</style>