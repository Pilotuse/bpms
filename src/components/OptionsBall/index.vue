<template>
  <div class="ball-container">
    <div class="ball-tools" @click="handleClick">
      <i class="iconfont icon-kefu"></i>
    </div>
    <div @click="handleSmall" class="options-small">
      <i class="iconfont icon-suoxiao1"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("123");
    },
    handleSmall(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.ball-container {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 70px;
  height: 80px;
  z-index: 888;
}

.ball-tools {
  position: absolute;
  bottom: 0;
  line-height: 60px;
  width: 60px;
  height: 60px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  background-image: linear-gradient(
    to top,
    #1e3c72 0%,
    #1e3c72 1%,
    #2a5298 100%
  );
  box-shadow: 0 0 8px 0 #777;
}

.ball-tools > i {
  font-size: 28px;
}
.ball-container:hover > .options-small {
  display: block;
}

.options-small {
  display: none;
  position: absolute;
  color: #000;
  width: 19px;
  height: 19px;
  background: #ccc;
  right: 0;
  bottom: 54px;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}

.options-small > i {
  color: #fff;
  font-size: 15px;
}
</style>