<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px">
    <el-tab-pane label="调研大盘"> </el-tab-pane>
    <el-tab-pane label="调研查看">
      <ResearchWatch />
    </el-tab-pane>
    <el-tab-pane label="案例修改">案例修改</el-tab-pane>
    <el-tab-pane label="设置">设置</el-tab-pane>
  </el-tabs>
</template>

<script>
import ResearchWatch from "../component/ResearchWatch";
export default {
  data() {
    return {
      tabPosition: "left",
    };
  },
  components: {
    ResearchWatch,
  },
};
</script>