<template>
  <el-tooltip effect="dark" :content="content" :placement="placement">
    <i :class="'iconfont ' + [icon ? icon : 'icon-icon_yiwenkongxin']"></i>
  </el-tooltip>
</template>

<script>
export default {
  props: ["content", "placement", "url", "icon"],
  methods: {
    handleClick() {
      this.$router.history.push(this.url);
    },
  },
};
</script>
