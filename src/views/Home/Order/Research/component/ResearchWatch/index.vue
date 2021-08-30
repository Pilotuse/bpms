<template>
  <div class="research-case-container">
    <div class="join-citys">
      <span>地市选择</span>
      <span v-for="(item, index) in cityParty" :key="index">{{
        item.name
      }}</span>
    </div>
    <div class="research-description">
        <span>调研详情</span>
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
      ],
    };
  },
  methods: {
    tag(e) {
      console.log(e.target);
    },
  },
};
</script>


<style scoped>
.research-case-container {
  padding-left: 10px;
}
.join-citys > span {
  margin-right: 10px;
}

h3 {
  position: relative;
  padding-left: 20px;
  font-size: 22px;
}

h3::after {
  content: "☇";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  color: #1890ff;
  font-size: 20px;
}
</style>


