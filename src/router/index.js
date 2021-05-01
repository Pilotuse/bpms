import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const title = '| Husk 坚果'

const routes = [
  {
    path: '/overview',
    name: 'overview',
    component: Home,
    children: [
      {
        path: 'city',
        name: 'city',
        component: () => import('../components/overview/City.vue'),
        meta: {
          title: `地市分析 ${title}`,
          isLogin: true
        }
      },{
        path: 'business',
        name: 'business',
        component: () => import('../components/overview/Business.vue'),
        meta: {
          title: `业务分析 ${title}`,
          isLogin: true
        }
      },{
        path: 'mybusiness',
        name: 'mybusiness',
        component: () => import('../components/overview/MyBusiness.vue'),
        meta: {
          title: `我的业务 ${title}`,
          isLogin: true
        }
      },{
        path: 'orderCenter',
        name: 'orderCenter',
        component: () => import('../components/order/OrderCenter.vue'),
        meta: {
          title:  `工单中心 ${title}`,
          isLogin: true
        }
      },{
        path: 'issueTracking',
        name: 'issueTracking',
        component: () => import('../components/order/IssueTracking.vue'),
        meta: {
          title:  `问题跟踪 ${title}`,
          isLogin: true
        }
      },{
        path: 'assessment',
        name: 'assessment',
        component: () => import('../components/order/Assessment.vue'),
        meta: {
          title:  `考核与时效 ${title}`,
          isLogin: true
        }
      },{
        path: 'online',
        name: 'online',
        component: () => import('../components/service/Online.vue'),
        meta: {
          title:  `智慧客服 ${title}`,
          isLogin: true
        }
      },{
        path: 'directory',
        name: 'directory',
        component: () => import('../components/service/Directory.vue'),
        meta: {
          title:  `号码簿 ${title}`,
          isLogin: true
        }
      },{
        path: 'living',
        name: 'living',
        component: () => import('../components/service/Living.vue'),
        meta: {
          title:  `直播 ${title}`,
          isLogin: true
        }
      },{
        path: 'complaint',
        name: 'complaint',
        component: () => import('../components/service/Complaint.vue'),
        meta: {
          title:  `投诉中心 ${title}`,
          isLogin: true
        }
      },{
        path: 'document',
        name: 'document',
        component: () => import('../components/service/Document.vue'),
        meta: {
          title:  `文档中心 ${title}`,
          isLogin: true
        }
      },{
        path: 'manual',
        name: 'manual',
        component: () => import('../components/service/Manual.vue'),
        meta: {
          title:  `使用手册 ${title}`,
          isLogin: true
        }
      },{
        path: 'feedback',
        name: 'feedback',
        component: () => import('../components/service/Feedback.vue'),
        meta: {
          title:  `使用反馈 ${title}`,
          isLogin: true
        }
      },{
        path: 'micchart',
        name: 'micchart',
        component: () => import('../components/overview/Micchart.vue'),
        meta: {
          title:  `微聊 ${title}`,
          isLogin: true
        }
      },{
        path: 'member',
        name: 'member',
        component: () => import('../components/manage/Member.vue'),
        meta: {
          title:  `成员变更 ${title}`,
          isLogin: true
        }
      },{
        path: 'docConfig',
        name: 'docConfig',
        component: () => import('../components/manage/DocConfig.vue'),
        meta: {
          title:  `文档配置 ${title}`,
          isLogin: true
        }
      },{
        path: 'broadcast',
        name: 'broadcast',
        component: () => import('../components/manage/Broadcast.vue'),
        meta: {
          title:  `群体广播 ${title}`,
          isLogin: true
        }
      },{
        path: 'admin',
        name: 'admin',
        component: () => import('../components/interface/Admin'),
        meta: {
          title:  `管理员变更 ${title}`,
          isLogin: true
        }
      },{
        path: 'apiTest',
        name: 'apiTest',
        component: () => import('../components/interface/ApiTest'),
        meta: {
          title:  `接口测试 ${title}`,
          isLogin: true
        }
      },{
        path: 'cityConf',
        name: 'cityConf',
        component: () => import('../components/interface/CityConf'),
        meta: {
          title:  `地市配置 ${title}`,
          isLogin: true
        }
      },{
        path: 'businessLine',
        name: 'businessLine',
        component: () => import('../components/interface/BusinessLine'),
        meta: {
          title:  `业务线配置 ${title}`,
          isLogin: true
        }
      },{
        path: 'orderParams',
        name: 'orderParams',
        component: () => import('../components/interface/OrderParams'),
        meta: {
          title:  `工单参数配置 ${title}`,
          isLogin: true
        }
      },{
        path: 'automation',
        name: 'automation',
        component: () => import('../components/interface/Automation'),
        meta: {
          title:  `高级自动化 ${title}`,
          isLogin: true
        }
      },{
        path: 'webConf',
        name: 'webConf',
        component: () => import('../components/interface/WebConf'),
        meta: {
          title:  `界面功能管理 ${title}`,
          isLogin: true
        }
      },{
        path: 'encryption',
        name: 'encryption',
        component: () => import('../components/safety/Encryption'),
        meta: {
          title:  `信息加密 ${title}`,
          isLogin: true
        }
      },{
        path: 'safyTest',
        name: 'safyTest',
        component: () => import('../components/safety/SafyTest'),
        meta: {
          title:  `安全测试 ${title}`,
          isLogin: true
        }
      },{
        path: 'safetyKnows',
        name: 'safetyKnows',
        component: () => import('../components/safety/SafetyKnows'),
        meta: {
          title:  `安全知识 ${title}`,
          isLogin: true
        }
      },{
        path: 'system',
        name: 'system',
        component: () => import('../components/system/System'),
        meta: {
          title:  `系统概况 ${title}`,
          isLogin: true
        }
      },{
        path: 'orderVolume',
        name: 'orderVolume',
        component: () => import('../components/system/OrderVolume'),
        meta: {
          title:  `工单交易量 ${title}`,
          isLogin: true
        }
      },{
        path: 'onlineUsers',
        name: 'onlineUsers',
        component: () => import('../components/system/OnlineUsers'),
        meta: {
          title:  `工单交易量 ${title}`,
          isLogin: true
        }
      },{
        path: 'server',
        name: 'server',
        component: () => import('../components/system/Server'),
        meta: {
          title:  `服务器信息 ${title}`,
          isLogin: true
        }
      },
    ]
  },{
    path: '/404',
    name: 'notfound',
    component: () => import('../views/NotFound'),
    meta: {
      title: `未找到该页面 ${title}`
    }
  },{
    path: '*',
    name: '404',
    redirect: {
      path: '/404'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to?.meta?.isLogin) {
    if (to?.meta?.author) {
      next();
      // let { token, date, author } = JSON.parse(localStorage.getItem('users')) || '';
      // let dateCheck = dayjs(date).isBefore(dayjs(new Date()))
      // token && dateCheck && to?.meta?.author.includes(author) ? next() : next({ path: "/login" })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
