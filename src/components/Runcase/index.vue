<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="orderStatus.describer"
    placement="top"
  >
    <span :class="[`${orderStatus.style}`, 'run-case']"> </span>
  </el-tooltip>
</template>

<script>
import { researchCaseOrderStatus } from "@/interface";
export default {
  props: ["status"],
  data() {
    return {
      orderStatus: "",
    };
  },
  created() {
    this.orderStatus = researchCaseOrderStatus.filter(
      (el) => el.status == this.status
    )[0];
  }
};
</script>


<style scoped>
.status-not-start {
  background: #34495e;
  border-radius: 100%;
}

.status-start {
  margin-top: 12px;
  border-radius: 100%;
  animation: xpf 1.5s infinite linear;
}

.status-stop {
  background: #f39c12;
  border-radius: 100%;
}

.status-change {
  background: #9b59b6;
  border-radius: 100%;
}

.status-delete {
  border-radius: 100%;
  background: #e74c3c;
}

.status-finsh {
  background: #67c23a;
  border-radius: 100%;
}

@keyframes xpf {
  0% {
    background: #fff;
  }
  25% {
    background: #67c23a;
  }
  75% {
    background: #fff;
  }
  75% {
    background: #67c23a;
  }
  100% {
    background: #fff;
  }
}
.run-case {
  position: relative;
  height: 10px;
  width: 10px;
  display: inline-block;
}
</style>