<template>
  <div>
    <el-card class="box-card" shadow="never">
      <a-descriptions title="坚果分析 Husk Analysis" size="small">
        <a-descriptions-item label="管理员" :span="2">
          @易儒/@筠笛
        </a-descriptions-item>
        <a-descriptions-item label="分类">
          收藏夹
        </a-descriptions-item>
      </a-descriptions>
    </el-card>

    <el-card class="box-card" shadow="never">
      <a-descriptions title="自定义服务接口列表" size="small">
        <a-descriptions-item label="创建用户" :span="2">
          @桔梗
        </a-descriptions-item>
        <a-descriptions-item label="分类">
          自定义
        </a-descriptions-item>
      </a-descriptions>
      <span class="iconfont icon-fenxiang api-list-collection"></span>
    </el-card>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .box-card {
        position: relative;
    }

    .api-list-collection {
        position: absolute;
        top: 18px;
        right:  20px;
        color: #1890ff;
        cursor: pointer;
    }
</style>