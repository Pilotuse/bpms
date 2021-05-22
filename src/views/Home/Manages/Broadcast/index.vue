<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in pannel" :key="item.id" :name="item.id">
            <span slot="label"
              ><i :class="item.icon"></i> {{ item.label }}</span
            >
            <component :is="item.component"></component>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Release from "./Release";
import List from "./List";
import Settings from "./Settings";
import Author from './Author'
export default {
  data() {
    return {
      activeName: "1",
      pannel: [
        { id: "1", label: "广播发布", component: Release, icon: "el-icon-edit" },
        { id: "2", label: "广播列表", component: List, icon: "el-icon-s-grid" },
        {
          id: "3",
          label: "高级选项",
          component: Settings,
          icon: "el-icon-s-operation",
        },
        {
          id: "4",
          label: "权限管理",
          component: Author,
          icon: "el-icon-s-check",
        },
         {
          id: "5",
          label: "发布审批",
          component: Author,
          icon: "iconfont icon-zidingyi",
        },
      ],
    };
  },
  components: {
    Release,
    Settings,
    List,
    Author
  },
  methods: {
    handleClick() {},
  },
};
</script>




<style scoped>
.broadcast-header {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}

.box-card {
  width: 220px;
  height: 100px;
  text-align: center;
  border-radius: 4px;
}
</style>