<template>
  <div>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>工单预览</span>
        <el-tooltip
          class="item"
          effect="dark"
          content="下载PDF工单文件"
          placement="top"
        >
          <el-button
            style="float: right; padding: 3px 0; font-size: 14px"
            type="text"
            class="iconfont icon-yunduanxiazai"
          >
            下载工单
          </el-button>
        </el-tooltip>
      </div>

      <el-row class="order-infos">
        <el-col :span="6"><div>工单标题</div></el-col>
        <el-col :span="18"><div >企业食品材料</div></el-col>
      </el-row>
      <el-row class="order-infos">
        <el-col :span="6"><div>ECID</div></el-col>
        <el-col :span="18"><div >2701231241231231</div></el-col>
      </el-row>
      <el-row class="order-infos">
        <el-col :span="6"><div>订单号</div></el-col>
        <el-col :span="18"><div >2701231241231231</div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style>
    .order-infos {
        padding: 4px 6px;
        font-size: 13px;
        background: #718093;
        color: #fff;
    }

    .order-infos:nth-child(2n) {
        background: #e6f7ff;
        color: #718093;
    }
</style>