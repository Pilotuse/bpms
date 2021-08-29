<template>
  <div v-if="changeStatus" class="screenfull">
    <div class="screenfull-header">
      <el-page-header @back="goback">
        <template slot="content">
          {{content}}&emsp;<el-tag type="success" size="small">案例号：{{caseid}}</el-tag>
        </template>
      </el-page-header>
    </div>
    <Notice />
    <div class="screenfull-body">
      <slot></slot>
    </div>
    <div class="screenfull-footer"></div>
  </div>
</template>

<script>
import Notice from "../../components/Notice";
import { mapMutations, mapState } from "vuex";
export default {
  props: ["content"],
  methods: {
    ...mapMutations(["changeScreenfull"]),
    goback() {
      this.changeScreenfull({ changeStatus: false, caseid: "" });
    },
  },
  components: {
    Notice,
  },
  computed: {
    ...mapState(["changeStatus", "caseid"]),
  },
};
</script>

<style scoped>
.screenfull {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 6;
}

.screenfull-header {
  height: 60px;
  width: 100%;
  box-shadow: 0 0 12px -8px #aaa;
}

.screenfull .el-page-header {
  line-height: 60px;
  padding: 0 39px;
}

.screenfull-body {
  overflow: scroll;
  padding: 16px;
  height: calc(100% - 120px);
}

.screenfull-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
  background: #f9f9f9;
}
</style>

