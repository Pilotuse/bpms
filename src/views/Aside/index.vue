<template>
  <div class="aside-container">
    <ul>
      <li v-for="item in defaultMenu" :key="item.id">
        <span class="select-title">{{ item.describer }}</span>
        <!-- <span class="select-counter">{{ item.counter }}个</span> -->
        <ul>
          <li v-for="el in item.children" :key="el.id" class="select-item-sons">
            <router-link :to="el.path">
              <span :class="'icon iconfont ' + el.icon"></span>
              {{ el.describer }}
              <i class="aside-new" v-if="el.newtag == 1">NEW!</i>
              <i class="aside-offline" v-if="el.offline == 1">
                <span class="span-offline">OFFLINE</span>
              </i>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["changeRoleType"],
  data() {
    return {
      defaultMenu: [],
    };
  },
  methods: {
    ...mapActions(["queryUserMenu"]),
  },
  created() {
    // 如果没有menu的数据则调用接口查询
    try {
      const defaultMenu = JSON.parse(sessionStorage.getItem("menu"));
      if (defaultMenu.length) {
        this.defaultMenu = defaultMenu;
      } else {
        throw Error("数据获取失败");
      }
    } catch (error) {
      let that = this;
      this.queryUserMenu({
        callback: (data) => {
          const { msg, code } = data.content.result;
          if (code == "00000") {
            that.defaultMenu = msg;
            sessionStorage.setItem("menu", JSON.stringify(msg));
          } else {
            that.$notify.error({
              title: `错误 [${code}]`,
              message: msg,
              showClose: false,
            });
          }
        },
      });
    }
  },
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
  position: relative;
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

::-webkit-scrollbar {
  width: 0 !important;
}

.aside-new {
  position: absolute;
  align-items: center;
  font-size: 12px;
  color: #f9ca24;
  font-weight: 600;
  right: 10px;
}

.aside-offline {
  position: absolute;
  align-items: center;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  right: 10px;
}

.span-offline {
  padding: 0 4px;
  border-radius: 4px;
  background: #95a5a6;
}

.select-counter {
  font-size: 12px;
  color: #ccc;
}
</style>