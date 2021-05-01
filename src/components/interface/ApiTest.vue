<template>
  <div>
    <div class="api-headers">
      <div class="api-brand">柠檬数据服务 | Lemon API</div>
      <div class="api-num">
        当前提供 <span>20</span> 在线接口调用， <span>12</span> 个数据Mock生成
      </div>
      <div class="api-descr">
        柠檬数服将进行最小化迁移至柠檬数服平台，此后本页面将内嵌柠檬数服平台的页面进行服务，
        如涉及权限相关、接口接入等，请前往柠檬数服进行设置。（有问题联系管理员@易儒/@筠笛）
      </div>
      <div class="api-backup">
        <span>柠檬数说 <i class="iconfont icon-guanbi1"></i> 坚果分析</span>
      </div>
    </div>
    <el-row>
      <el-col :span="6">
        <el-input
          placeholder="请输入服务名称"
          suffix-icon="el-icon-search"
          v-model="input1"
        >
        </el-input>
      </el-col>
      <el-col
        :span="2"
        offset="16"
        style="text-align: right; line-height: 40px; color: #1890ff"
      >
        Mock数据
      </el-col>
    </el-row>

    <el-row style="margin-top: 20px">
      <el-col :span="16">
        <el-col :span="24">
          服务列表
          <Toptips
            content="无权限？点击前往柠檬数说平台申请"
            placement="top-start"
          />
        </el-col>

        <el-card class="box-card" shadow="never">
          <a-descriptions title="User Info" bordered>
            <a-descriptions-item label="Product">
              Cloud Database
            </a-descriptions-item>
            <a-descriptions-item label="Billing Mode">
              Prepaid
            </a-descriptions-item>
            <a-descriptions-item label="Automatic Renewal">
              YES
            </a-descriptions-item>
            <a-descriptions-item label="Order time">
              2018-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="Usage Time" :span="2">
              2019-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="Status" :span="3">
              <a-badge status="processing" text="Running" />
            </a-descriptions-item>
            <a-descriptions-item label="Negotiated Amount">
              $80.00
            </a-descriptions-item>
            <a-descriptions-item label="Discount"> $20.00 </a-descriptions-item>
            <a-descriptions-item label="Official Receipts">
              $60.00
            </a-descriptions-item>
            <a-descriptions-item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1<br />
            </a-descriptions-item>
          </a-descriptions>
        </el-card>
      </el-col>
      <el-col :span="7" offset="1">
        <el-col :span="24"> 我的收藏 </el-col>
        <el-col :span="24">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Toptips from "../userfulComp/Toptips";
export default {
  components: {
    Toptips,
  },
};
</script>



<style>
.api-headers {
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  background: url("../../assets/api-back.png");
  background-size: cover;
  width: 100%;
  height: 240px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 12px;
  overflow: hidden;
}

.api-headers .api-brand {
  position: absolute;
  top: 16%;
  left: 80px;
  color: #fff;
  font-size: 36px;
  text-shadow: 1px 1px 0 #111;
}

.api-num {
  padding: 0 10px;
  position: absolute;
  top: 42%;
  left: 80px;
  color: #fff;
  background: #2c3e50; /* fallback for old browsers */
}

.api-num > span {
  font-size: 22px;
  font-weight: 700;
  color: #1890ff;
  text-shadow: 1px 1px 0 #000;
}

.api-descr {
  position: absolute;
  color: #f9f9f9;
  bottom: 40px;
  left: 80px;
  width: 600px;
}

.api-backup {
  position: absolute;
  bottom: 4px;
  right: 8px;
  color: #f9f9f9;
}
</style>