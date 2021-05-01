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
      <el-tab-pane name="second">
        <span slot="label">
          待办工单
          <el-badge :value="12" class="item-bage" type="primary"></el-badge>
        </span>
        <OrderSubmit :pagenation="true"/>
      </el-tab-pane>

      <el-tab-pane name="third">
        <span slot="label">
          加急待办
          <el-badge :value="2" class="item-bage"></el-badge>
        </span>
        <OrderSubmit :pagenation="true"/>
      </el-tab-pane>

      <el-tab-pane name="fourth">
        <span slot="label">
          工单列表
          <el-badge :value="2" class="item-bage" type="primary"></el-badge>
        </span>
        <OrderSubmit :pagenation="true"/>
      </el-tab-pane>

      <el-tab-pane name="sixth">
        <span slot="label">
          暂存工单
          <el-badge value="1" class="item-bage" type="primary"></el-badge>
        </span>
        <OrderSubmit :pagenation="false" />
      </el-tab-pane>
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
        bpmsid: "270" + new Date().getTime(),
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
    OrderSubmit: () => import("../components/tabs/OrderSubmit"),
  },
};
</script>

<style>

</style>