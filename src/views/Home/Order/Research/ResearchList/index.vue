  <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="调研ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="调研标题" width="180">
    </el-table-column>
    <el-table-column prop="address" label="调研备注"> </el-table-column>
    <el-table-column prop="address" label="操作"> </el-table-column>
  </el-table>
</template>

    <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: Date.now(),
          name: "数据服务调研",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: Date.now() + 1,
          name: "业务性质调研",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: Date.now() + 2,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: Date.now() + 3,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>