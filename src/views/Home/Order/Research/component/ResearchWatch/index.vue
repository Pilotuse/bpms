<template>
  <div class="research-case-container">
    <div class="join-citys">
      <span class="research-title">地市选择</span>
      <span
        v-for="(item, index) in cityParty"
        :key="index"
        :class="[
          `${item.name === currentCtiy[0].name ? 'research-citys-onselect' : ''}`,
          'research-citys',
        ]"
        ref="span"
        @click="handleSelect"
        >{{ item.name }}</span
      >
    </div>
    <div class="research-description join-citys">
      <span class="research-title">调研详情</span>
      <div class="research-description-item">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityParty: [
        { code: 270, name: "武汉", Abbreviation: "" },
        { code: 714, name: "黄石", Abbreviation: "" },
        { code: 711, name: "鄂州", Abbreviation: "" },
        { code: 718, name: "恩施", Abbreviation: "" },
        { code: 728, name: "江汉", Abbreviation: "" },
        { code: 715, name: "咸宁", Abbreviation: "" },
        { code: 722, name: "随州", Abbreviation: "" },
        { code: 717, name: "宜昌", Abbreviation: "" },
        { code: 719, name: "十堰", Abbreviation: "" },
        { code: 710, name: "襄阳", Abbreviation: "" },
        { code: 716, name: "荆州", Abbreviation: "" },
        { code: 724, name: "荆门", Abbreviation: "" },
        { code: 713, name: "黄冈", Abbreviation: "" },
        { code: 712, name: "孝感", Abbreviation: "" },
        { code: 999, name: "湖北", Abbreviation: "" },
      ],
      currentCtiy: [],
    };
  },
  methods: {
    handleSelect(e) {
      this.$refs.span.forEach((el) => (el.className = "research-citys"));
      e.target.className = "research-citys research-citys-onselect";
      this.currentCtiy = this.cityParty.filter(
        (el) => el.name == e.target.innerText
      );
    },
  },
  mounted() {
    this.currentCtiy = [this.cityParty[0]];
    console.dir(this.currentCtiy);
  },
};
</script>


<style scoped>
.research-case-container {
  padding-left: 10px;
}

.join-citys {
  margin-bottom: 20px;
}

.join-citys > span {
  margin-right: 12px;
}

.research-citys {
  box-sizing: border-box;
  display: inline-block;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 2px;
  background: rgb(236, 249, 255);
  color: #409eff;
  opacity: 0.8;
  cursor: pointer;
  user-select: none;
  border: 1px solid #fff;
}

.research-citys-onselect {
  border: 1px solid #409eff;
  font-weight: 700;
}

.research-title {
  font-weight: 700;
}

.research-description-item {
  margin-top: 10px;
  width: 99%;
  height: 600px;
  box-shadow: 0 0  12px -6px #ccc;
}
</style>


