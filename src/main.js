import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/iconfont.css'
import './styles/common.css'
import { NoticeBar, Tag } from 'vant';
import 'vant/lib/index.css';
// import echarts from 'echarts'
import html2pdf from "./utils/htmlTools"
import { Descriptions } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

Vue.use(html2pdf)
// Vue.prototype.$echarts = echarts
Vue.use(NoticeBar, Tag);
Vue.use(ElementUI)
Vue.use(Descriptions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const config = {
  beforeLoad: [
      app => {
          console.log("%c before load",
          'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ], // 挂载前回调
  beforeMount: [
      app => {
          console.log("%c before mount",
          'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ], // 挂载后回调
  afterUnmount: [
      app => {
          console.log("%c after unload",
          'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ] // 卸载后回调
}

registerMicroApps(microApps, config)
setDefaultMountApp('/') // 默认打开第一个子项目
start()
