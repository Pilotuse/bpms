import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/iconfont.css'
import './styles/common.css'
import { NoticeBar, Tag } from 'vant';
import { Table } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'vant/lib/index.css';
import echarts from 'echarts'
import html2pdf from "./utils/htmlTools"
Vue.use(html2pdf)



Vue.prototype.$echarts = echarts
Vue.use(NoticeBar, Tag);
Vue.use(Table)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
