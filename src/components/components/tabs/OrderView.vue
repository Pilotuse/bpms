<template>
  <div>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>工单预览</span>
        <el-tooltip
          class="item"
          effect="dark"
          content="点击下载工单"
          placement="top"
        >
          <el-button
            style="float: right; padding: 3px 0; font-size: 14px"
            type="text"
            class="iconfont icon-yunduanxiazai"
            @click="openMsgBox"
          >
            下载工单
          </el-button>
        </el-tooltip>
      </div>

      <el-row class="order-infos">
        <el-col :span="6">工单标题</el-col>
        <el-col :span="18">企业食品材料</el-col>
      </el-row>
      <el-row class="order-infos">
        <el-col :span="6">ECID</el-col>
        <el-col :span="18">2701231241231231</el-col>
      </el-row>
      <el-row class="order-infos">
        <el-col :span="6"><div>订单号</div></el-col>
        <el-col :span="18"><div>2701231241231231</div></el-col>
      </el-row>
    </el-card>

    <el-dialog
      class="dialog"
      title="请选择下载文件类型"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form>
        <el-form-item
          v-for="(item, index) in downloadTicket"
          :label="item.label"
          :key="index"
        >
          <el-select v-model="item.value">
            <el-option
              v-for="(el, index) in item.defaults"
              :label="el.label"
              :value="el.value"
              :key="index"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>
import { downloadTicket ,showInsertValue} from "@/config/downloadTicket"; // 工单下载数据配置

export default {
  props:["orderdatas"],
  data() {
    return {
      dialogVisible: false,
      downType: "pngEn",
      timeWatermark: "1",
      jobWatermark: "1",
      downloadTicket,
      showInsertValue
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    openMsgBox() {
      this.dialogVisible = true;
    },
  },
  watch:{
    // orderdatas
  }
};
</script>

<style>
.order-infos {
  padding: 10px 6px;
  font-size: 13px;
}

.order-infos:nth-child(2n) {
  background: #f8f8f8;
}

.dialog .el-select {
  width: 81%;
}
</style>