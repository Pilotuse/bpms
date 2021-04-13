<template>
  <div class="aside-container">
    <ul>
      <li v-for="item in defaultMenu" :key="item.id">
        <span class="select-title">{{ item.describer }}</span>
        <ul>
          <li v-for="el in item.children" :key="el.id" class="select-item-sons">
            <router-link :to="el.path">
              <span :class="'icon iconfont ' + el.icon"></span>
              {{ el.describer }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { defaultMenu } from "../config/defaultMenu";
export default {
  data() {
    return {
      defaultMenu,
    };
  },
  created() {},
};
</script>


<style>
.aside-container {
  width: 100%;
}

.select-title {
  display: inline-block;
  margin: 14px 0;
  padding: 0 26px;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  width: 90%;
  border-bottom: 1px solid #f1f1f1;
  color: rgba(0, 0, 0, 0.45);
}

.select-item-sons {
  margin: 2px 0;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
  user-select: none;
}

.select-item-sons a {
  display: inline-block;
  padding: 0 26px;
  width: 100%;
  height: 100%;
  color: #000;
}

.icon {
  margin-right: 10px;
  color: #1890ff;
}

.router-link-exact-active.router-link-active {
  position: relative;
  background: #e6f7ff;
  color: #1890ff;
}

.router-link-exact-active.router-link-active::after {
  content: "";
  position: absolute;
  right: 0;
  width: 3px;
  height: 100%;
  background: #1890ff;
}
</style>