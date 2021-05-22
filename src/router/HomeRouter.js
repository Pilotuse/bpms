const title = '- Husk 坚果'
import Home from '../views/Home'
export default [ {
  path: '/overview',
  name: 'overview',
  component: Home,
  children: [
    {
      path: 'city',
      name: 'city',
      component: () => import('../views/Home/Overview/City'),
      meta: {
        title: `地市分析 ${title}`,
        isLogin: true
      }
    },{
      path: 'business',
      name: 'business',
      component: () => import('../views/Home/Overview/Business'),
      meta: {
        title: `业务分析 ${title}`,
        isLogin: true
      }
    },{
      path: 'mybusiness',
      name: 'mybusiness',
      component: () => import('../views/Home/Overview/MyBusiness'),
      meta: {
        title: `我的业务 ${title}`,
        isLogin: true
      }
    },{
      path: 'orderCenter',
      name: 'orderCenter',
      component: () => import('../views/Home/Order/OrderCenter'),
      meta: {
        title:  `工单中心 ${title}`,
        isLogin: true
      }
    },{
      path: 'issueTracking',
      name: 'issueTracking',
      component: () => import('../views/Home/Order/IssueTracking'),
      meta: {
        title:  `问题跟踪 ${title}`,
        isLogin: true
      }
    },{
      path: 'assessment',
      name: 'assessment',
      component: () => import('../views/Home/Order/Assessment'),
      meta: {
        title:  `考核与时效 ${title}`,
        isLogin: true
      }
    },{
      path: 'online',
      name: 'online',
      component: () => import('../views/Home/Services/Online'),
      meta: {
        title:  `智慧客服 ${title}`,
        isLogin: true
      }
    },{
      path: 'directory',
      name: 'directory',
      component: () => import('../views/Home/Services/Directory'),
      meta: {
        title:  `号码簿 ${title}`,
        isLogin: true
      }
    },{
      path: 'living',
      name: 'living',
      component: () => import('../views/Home/Services/Living'),
      meta: {
        title:  `直播 ${title}`,
        isLogin: true
      }
    },{
      path: 'complaint',
      name: 'complaint',
      component: () => import('../views/Home/Services/Complaint'),
      meta: {
        title:  `投诉中心 ${title}`,
        isLogin: true
      }
    },{
      path: 'document',
      name: 'document',
      component: () => import('../views/Home/Services/Document'),
      meta: {
        title:  `文档中心 ${title}`,
        isLogin: true
      }
    },{
      path: 'manual',
      name: 'manual',
      component: () => import('../views/Home/Services/Manual'),
      meta: {
        title:  `使用手册 ${title}`,
        isLogin: true
      }
    },{
      path: 'micchart',
      name: 'micchart',
      component: () => import('../views/Home/Overview/Micchart'),
      meta: {
        title:  `微聊 ${title}`,
        isLogin: true
      }
    },{
      path: 'member',
      name: 'member',
      component: () => import('../views/Home/Manages/Member'),
      meta: {
        title:  `成员变更 ${title}`,
        isLogin: true
      }
    },{
      path: 'docConfig',
      name: 'docConfig',
      component: () => import('../views/Home/Manages/DocConfig'),
      meta: {
        title:  `文档配置 ${title}`,
        isLogin: true
      }
    },{
      path: 'broadcast',
      name: 'broadcast',
      component: () => import('../views/Home/Manages/Broadcast'),
      meta: {
        title:  `群体广播 ${title}`,
        isLogin: true
      }
    },{
      path: 'admin',
      name: 'admin',
      component: () => import('../views/Home/Interfaces/Admin'),
      meta: {
        title:  `管理员变更 ${title}`,
        isLogin: true
      }
    },{
      path: 'apiTest/:id',
      name: 'apiTest',
      component: () => import('../views/Home/Interfaces/ApiTest'),
      meta: {
        title:  `接口测试 ${title}`,
        isLogin: true
      }
    },{
      path: 'cityConf',
      name: 'cityConf',
      component: () => import('../views/Home/Interfaces/CityConf'),
      meta: {
        title:  `地市配置 ${title}`,
        isLogin: true
      }
    },{
      path: 'businessLine',
      name: 'businessLine',
      component: () => import('../views/Home/Interfaces/BusinessLine'),
      meta: {
        title:  `业务线配置 ${title}`,
        isLogin: true
      }
    },{
      path: 'orderParams',
      name: 'orderParams',
      component: () => import('../views/Home/Interfaces/OrderParams'),
      meta: {
        title:  `工单参数配置 ${title}`,
        isLogin: true
      }
    },{
      path: 'automation',
      name: 'automation',
      component: () => import('../views/Home/Interfaces/Automation'),
      meta: {
        title:  `高级自动化 ${title}`,
        isLogin: true
      }
    },{
      path: 'safyTest',
      name: 'safyTest',
      component: () => import('../views/Home/Safety/SafyTest'),
      meta: {
        title:  `安全测试 ${title}`,
        isLogin: true
      }
    },{
      path: 'safetyKnows',
      name: 'safetyKnows',
      component: () => import('../views/Home/Safety/SafetyKnows'),
      meta: {
        title:  `安全知识 ${title}`,
        isLogin: true
      }
    },{
      path: 'System',
      name: 'system',
      component: () => import('../views/Home/System/System'),
      meta: {
        title:  `系统概况 ${title}`,
        isLogin: true
      }
    },{
      path: 'orderVolume',
      name: 'orderVolume',
      component: () => import('../views/Home/System/OrderVolume'),
      meta: {
        title:  `工单交易量 ${title}`,
        isLogin: true
      }
    },{
      path: 'onlineUsers',
      name: 'onlineUsers',
      component: () => import('../views/Home/System/OnlineUsers'),
      meta: {
        title:  `工单交易量 ${title}`,
        isLogin: true
      }
    },{
      path: 'server',
      name: 'server',
      component: () => import('../views/Home/System/Server'),
      meta: {
        title:  `服务器信息 ${title}`,
        isLogin: true
      }
    },
  ]
}]