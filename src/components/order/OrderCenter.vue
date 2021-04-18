<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="工单流" name="first">
        <el-col :span="12">
          <OrderTabs :orderdatas="orderDatas" @updateorder="updateOrderDatas" />
        </el-col>

        <el-col :span="11" :offset="1">
          <OrderView :orderdatas="orderDatas" />
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
import OrderView from "../components/tabs/OrderView";
import dayjs from "dayjs";
export default {
  data() {
    return {
      activeName: "first",
      orderDatas: {
        title: "",
        date: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        lading: "范鸿宇",
        handler: "范鸿宇",
        busiLine: "",
        priority: "",
        expireDate: "",
        result: "",
        pretreatment: "",
        describer: "",
        customeID: "",
        orderNum: "",
      },
    };
  },
  methods: {
    updateOrderDatas(ruleForm) {
      this.orderDatas = ruleForm;
    },
  },
  components: {
    OrderTabs,
    OrderView,
  }
};
</script>