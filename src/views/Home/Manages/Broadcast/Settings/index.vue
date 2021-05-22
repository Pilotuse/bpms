<template>
  <div>
    获取设置
    <el-row>
      <el-col :span="4"> 取消后不在展示 </el-col>
      <el-col :span="20">
        <el-switch v-model="value1" disabled> </el-switch>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    发布内容
    <el-row>
      <el-col :span="4"> 屏蔽关键词 </el-col>
      <el-col :span="20">
        <el-switch v-model="value1" disabled> </el-switch>
      </el-col>
    </el-row>
  </div>
</template>