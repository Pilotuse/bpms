<template>
  <div>
    <!-- 搜索工具 -->
    <el-row>
      <el-col :span="6">搜索</el-col>
      <el-col :span="6">新增</el-col>
      <el-col :span="6">新增</el-col>
      <el-col :span="6">新增</el-col>
    </el-row>

    <!-- 数据展示表格 -->
    <el-table
      :data="{}"
      stripe
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column
        prop="bpmsid"
        label="工单流ID"
        width="180"
        sortable
      ></el-table-column>
      <el-table-column prop="title" label="标题" width="180" sortable>
      </el-table-column>
      <el-table-column prop="customeID" label="ECID" sortable>
      </el-table-column>
      <el-table-column prop="orderNum" label="订单号" sortable>
      </el-table-column>
      <el-table-column prop="busiLine" label="业务线" sortable>
      </el-table-column>
      <el-table-column prop="address" label="处理人" sortable>
      </el-table-column>
      <el-table-column prop="priority" label="优先级" sortable>
      </el-table-column>
      <el-table-column prop="more" label="更多"> </el-table-column>
    </el-table>
  </div>
</template>
