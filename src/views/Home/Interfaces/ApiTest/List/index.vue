<template>
  <div>
    <div class="list-card-list" v-if="dataLength">
      <el-card class="box-card" shadow="hover">
        <a-descriptions title="坚果分析 Husk Analysis" size="small">
          <a-descriptions-item label="所属模块">
            坚果分析平台数据接口
          </a-descriptions-item>
          <a-descriptions-item label="创建日期">
            2020-05-02
          </a-descriptions-item>
          <a-descriptions-item label="管理员">
            @易儒/@筠笛
          </a-descriptions-item>
          <a-descriptions-item label="所属内容">
            全系接口在线模拟，支持测试平台和生产平台数据调取（需经过Mango
            Monitor放行）。
          </a-descriptions-item>
        </a-descriptions>
        <span class="list-api-num iconfont icon-ditu-xing"> </span>
        <span class="list-api-detail" @click="detailClick"
          ><i class="iconfont icon-biaodanzujian-shurukuang"></i> 详情</span
        >
      </el-card>

      <el-card class="box-card" shadow="hover">
        <a-descriptions title="柠檬数说 Lemon API" size="small">
          <a-descriptions-item label="所属模块">
            柠檬数说开放平台  微服务
          </a-descriptions-item>
          <a-descriptions-item label="创建日期">
            2020-04-12
          </a-descriptions-item>
          <a-descriptions-item label="管理员">
            @易儒/@筠笛
          </a-descriptions-item>
          <a-descriptions-item label="所属内容">
            全系接口在线模拟，支持测试平台和生产平台数据调取（需经过Mango
            Monitor放行）。
          </a-descriptions-item>
        </a-descriptions>
        <!-- <span class="list-api-num iconfont icon-xingzhuang-xingxing"> </span> -->
        <span class="list-api-authority iconfont icon-suoding"> </span>
        <span class="list-api-num iconfont icon-changjingguanli"> </span>
      </el-card>

      <el-card class="box-card" shadow="hover">
        <a-descriptions title="芒果监控 Mango Monitor" size="small">
          <a-descriptions-item label="所属模块">
            芒果安全监控平台
          </a-descriptions-item>
          <a-descriptions-item label="创建日期">
            2020-04-12
          </a-descriptions-item>
          <a-descriptions-item label="管理员">
            @易儒/@筠笛
          </a-descriptions-item>
          <a-descriptions-item label="所属内容">
            全系接口在线模拟，支持测试平台和生产平台数据调取（需经过Mango
            Monitor放行）。
          </a-descriptions-item>
        </a-descriptions>
        <!-- <span class="list-api-num iconfont icon-xingzhuang-xingxing"> </span> -->
        <span class="list-api-authority iconfont icon-suoding"> </span>
        <span class="list-api-num iconfont icon-changjingguanli"> </span>
      </el-card>

      <el-card class="box-card" shadow="hover">
        <a-descriptions title="蜜桔客服 Miju Service" size="small">
          <a-descriptions-item label="所属模块">
            芒果安全监控平台
          </a-descriptions-item>
          <a-descriptions-item label="创建日期">
            2020-04-12
          </a-descriptions-item>
          <a-descriptions-item label="管理员">
            @易儒/@筠笛
          </a-descriptions-item>
          <a-descriptions-item label="所属内容">
            全系接口在线模拟，支持测试平台和生产平台数据调取（需经过Mango
            Monitor放行）。
          </a-descriptions-item>
        </a-descriptions>
        <!-- <span class="list-api-num iconfont icon-xingzhuang-xingxing"> </span> -->
        <span class="list-api-authority iconfont icon-suoding"> </span>
        <span class="list-api-num iconfont icon-changjingguanli"> </span>
      </el-card>

      <el-card class="box-card" shadow="hover">
        <a-descriptions title="花生金库 Peanut Vault" size="small">
          <a-descriptions-item label="所属模块">
            芒果安全监控平台
          </a-descriptions-item>
          <a-descriptions-item label="创建日期">
            2020-04-12
          </a-descriptions-item>
          <a-descriptions-item label="管理员">
            @易儒/@筠笛
          </a-descriptions-item>
          <a-descriptions-item label="所属内容">
            全系接口在线模拟，支持测试平台和生产平台数据调取（需经过Mango
            Monitor放行）。
          </a-descriptions-item>
        </a-descriptions>
        <!-- <span class="list-api-num iconfont icon-xingzhuang-xingxing"> </span> -->
        <span class="list-api-authority iconfont icon-suoding"> </span>
        <span class="list-api-num iconfont icon-changjingguanli"> </span>
      </el-card>
    </div>
  </div>
</template>


<script>

export default {
    data() {
    return {
      dataLength: true,
    };
  },
  methods: {
    detailClick() {
      
    },
  },
};
</script>


<style>
.box-card {
  margin-top: 16px;
  position: relative;
  user-select: none;
}

.list-api-num {
  position: absolute;
  right: 20px;
  top: 16px;
  color: #1890ff;
  font-size: 20px;
  cursor: pointer;
}

.list-api-authority {
  position: absolute;
  bottom: -32px;
  right: -4px;

  font-size: 120px;
  color: #f9f9f9;
}

.list-api-detail {
  padding: 3px 8px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: 1px solid #40a9ff;
  color: #40a9ff;
  border-radius: 4px;
  cursor: pointer;
}
</style>