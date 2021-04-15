<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="工单流" name="first">
        <el-col :span="12">
          <OrderTabs />
        </el-col>
        <el-col :span="11" :offset="1">
          <OrderView />
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="工单处理" name="second">工单处理</el-tab-pane>
      <el-tab-pane label="加急待办" name="third">加急待办</el-tab-pane>

      <el-tab-pane label="工单列表" name="fourth">工单查看</el-tab-pane>
      <el-tab-pane label="历史回溯" name="fifty" icon="el-icon-edit"
        >工单历史</el-tab-pane
      >
      <el-tab-pane label="暂存工单" name="sixth">攒出工单</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderTabs from "../components/tabs/OrderTabs";
import OrderView from '../components/tabs/OrderView'
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {},
  components: {
    OrderTabs,
    OrderView
  },
};
</script>