<template>
  <div>
    <!-- 抽组件 -->

    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="keys">数据桑基图</div>
        </div>
      </el-col>
    </el-row>

    <!-- 抽组件 -->
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="keys">地市搜索关键词排行</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="keys">地市工号数量占比</div>
        </div>
      </el-col>
    </el-row>

    <!-- 抽组件 -->
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="keys">工单业务图谱</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="keys">日工单排行</div>
        </div>
      </el-col>
    </el-row>

    <!-- 抽组件 -->
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="keys">智能客服服务次数和评分</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="keys">智能客服建议点画像</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.keys {
  position: relative;
  padding-left: 8px;
  color: #888;
  font-size: 12px;
}

.keys::after {
    content: '';
    position: absolute;
    left: 0;
    top: 44%;
    width: 2px;
    height: 70%;
    transform: translateY(-40%);
    background: #1890ff;
}
</style>