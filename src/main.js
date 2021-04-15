import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/iconfont.css'
import './styles/common.css'
import { NoticeBar ,Tag} from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'


Vue.prototype.$echarts = echarts
Vue.use(NoticeBar,Tag);
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
