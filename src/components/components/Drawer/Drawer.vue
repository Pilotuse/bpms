<template>
  <el-drawer title="我是外面的 Drawer" :visible.sync="drawer" size="50%">
    <div>
      <el-button @click="innerDrawer = true">打开里面的!</el-button>
      <el-drawer
        title="我是里面的"
        :append-to-body="true"
        :before-close="handleClose"
        :visible.sync="innerDrawer"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
    </div>
  </el-drawer>
</template>

<script>
  export default {
    props:["drawer"],
    data() {
      return {
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(() => {
            done();
          })
          .catch(() => {});
      }
    }
  };
</script>