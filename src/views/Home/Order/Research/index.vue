<template>
  <div class="research-container">
    <h2 class="research-header">
      <span class="iconfont icon-iframetianjia"></span>
      我的调研
    </h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="调研列表" name="first">
        <ResearchList />
      </el-tab-pane>
      <el-tab-pane label="调研设置" name="second">
        <ResearchSettings />
      </el-tab-pane>
    </el-tabs>
    <div class="research-add" @click="drawer = true">
      <span class="iconfont icon-zidingyi"></span>
      <span class="research-font">调研发布</span>
    </div>

    <el-drawer
      title="创建调研任务"
      size="700px"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :show-close="false"
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
  },
  components: {
    ResearchList,
    ResearchSettings,
    ResearchCreate,
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
  top: 46px;
  right: 0;
  cursor: pointer;
  color: #1890ff;
}

.research-font {
  padding-left: 4px;
}

</style>