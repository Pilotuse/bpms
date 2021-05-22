<template>
  <van-notice-bar
    :color="color"
    background="#ecf9ff"
    :mode="mode"
    scrollable
    :text="text"
    delay="3"
  >
    <template slot="left-icon">
      <span class="notice-title notice-error">{{ title }}</span>
      <i :class="[`${icon}`,'notice-error']"></i>
    </template>
  </van-notice-bar>
</template>


<script>
export default {
  props: {
    text: {
      type: String,
      default: "通知消息数据获取中，请等待...",
    },
    color: {
      type: String,
      default: "#1890ff",
    },
    title: {
      type: String,
      default: "通知",
    },
    icon:{
      type:String,
      default:"iconfont icon-shengyin_shiti"
    },
    mode:{
      type:String,
      default:"closeable"
    }
  },
};
</script>

<style scoped>
.notice-title {
  margin-right: 2px;
}

.notice-error {
  margin: 0 6px 0 0px;
}
</style>