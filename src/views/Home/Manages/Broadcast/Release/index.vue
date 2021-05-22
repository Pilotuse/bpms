<template>
  <div>
    <el-row>
      <el-col :span="24" class="notice-setting">
        <h3>发布预览</h3>
      </el-col>
    </el-row>
    <el-card class="box-card" shadow="never">
      <Notice :text="notice" :title="title" :icon="icon" />
    </el-card>

    <el-row>
      <el-col :span="24" class="notice-setting">
        <h3>信息填报</h3>
      </el-col>
    </el-row>
    <div>
      <el-card class="box-card" shadow="never">
        <el-steps :active="3" finish-status="success" simple>
          <el-step title="信息填写"></el-step>
          <el-step title="广播选项"></el-step>
          <el-step title="校验(自动)"></el-step>
          <el-step title="发布审批"></el-step>
          <el-step title="确认发布"></el-step>
          <el-step title="信息上报"></el-step>
        </el-steps>
      </el-card>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title" class="collapse">
            信息填写<i class="header-icon el-icon-check"></i>
          </template>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title" class="collapse">
            广播选项<i class="header-icon el-icon-loading"></i>
          </template>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title" class="collapse">
            发布审批<i class="header-icon el-icon-loading"></i>
          </template>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title" class="collapse">
            确认发布<i class="header-icon el-icon-loading"></i>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Notice from "@/components/Notice";
export default {
  data() {
    return {
      notice: "群体广播数据设置中...",
      title: "设置中",
      icon: "el-icon-loading",
    };
  },
  components: {
    Notice,
  },
};
</script>

<style scoped>
h3 {
  font-size: 22px;
}

.box-card {
  margin-bottom: 20px;
}
.header-icon {
  margin-left: 20px;
  color: #67c23a;
  font-size: 16px;
}
</style>