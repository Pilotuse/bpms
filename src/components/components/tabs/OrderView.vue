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

      <div class="container-down" ref="orderDom" id="pdfCentent">
        <el-row class="download-order">
          <i class="iconfont icon-gongdan png"></i>
          工单明细表单
        </el-row>
        <el-row
          class="order-infos"
          v-for="(item, index) in showInsertValue"
          :key="index"
          v-show="item.value"
          :class="index % 2 == 0 ? 'add-backgroud' : 'base-background'"
        >
          <el-col :span="6">{{ item.title }}</el-col>
          <el-col :span="18">{{ item.value }}</el-col>
        </el-row>
      </div>
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
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import { downloadTicket, showInsertValue } from "@/config/downloadTicket"; // 工单下载数据配置
import html2canvas from "html2canvas"
export default {
  props: ["orderdatas"],
  data() {
    return {
      dialogVisible: false,
      downType: "pngEn",
      timeWatermark: "1",
      jobWatermark: "1",
      downloadTicket,
      showInsertValue,
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    openMsgBox() {
      this.dialogVisible = true;
    },
    fileDownload(downloadUrl) {
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = downloadUrl.toDataURL("image/png");
      aLink.download = "工单下载.png";
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    handleSubmit() {
      const orderInfos = Object.values(this.showInsertValue)
        .filter((el) => el.partten)
        .map((el) => el.value)
        .every((el) => el);

      if (!orderInfos) {
        this.$notify.error({
          title: "订单信息无法生成",
          message: "订单信息未完善，请在左侧新建工单完善后，再次生成！",
        });
        this.dialogVisible = false;
        return;
      }
      // 分析需要下载什么格式的文件
      const fileType = this.downloadTicket.filter(
        (el) => el.target == "fileType"
      )[0].value;

      switch (fileType) {
        case "pngEn":
          // 暂时不提供下载
          break;
        case "pdfEn":
          // 暂时不提供下载
          break;
        case "mailPdf":
          // 暂时不提供下载
          break;
        case "png":
          // 调用方法下载
          html2canvas(this.$refs.orderDom, {
            backgroundColor: "#fff",
          }).then((canvas) => this.fileDownload(canvas));
          break;
        case "pdf":
          // 调用方法下载
          this.ExportSavePdf(this.$refs.orderDom,new Date())
          break;
      }
      this.dialogVisible = false;
    },
  },
  watch: {
    orderdatas: {
      deep: true,
      handler(value) {
        this.showInsertValue = this.showInsertValue.map((el) => {
          el.value = value[el.label];
          return el;
        });
      },
    },
  },
};
</script>

<style>
.order-infos {
  padding: 10px 20px;
  font-size: 13px;
}

.add-backgroud {
  background: #f8f8f8;
}

.base-background {
  background: #fff;
}

.font-color {
  color: #fff;
}

.container-down {
  box-shadow: 0 0 12px -2px #ccc;
}

.download-order {
  padding: 10px 20px;
  background: #409eff;
  color: #fff;
}

.dialog .el-select {
  width: 81%;
}

.png {
  font-size: 18px;
}
</style>