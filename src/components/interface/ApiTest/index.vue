<template>
  <div>
    <component :is="comp" @changepage="changePage"></component>
  </div>
</template>

<script>
import apilist from "./components/ApiList";
import apidetail from "./components/ApiDetail";
export default {
  components: {
    apilist,
    apidetail,
  },
  data() {
    return {
      comp: "",
    };
  },
  methods: {
    changeComp(comp) {
      console.log(111);
      this.comp = comp;
    },
  },
  mounted() {
    this.changeComp(this.$route.params.id);
  },
};
</script>