export const defaultMenu = [
  {
    id: '1',
    component: "",
    describer: "数据统计",
    icon: "icon-guize1",
    children: [
      { id: '1-1', path: '/overview/city', describer: '地市分析', icon: 'icon-liujisuan' },
      { id: '1-2', path: '/overview/business', describer: '业务分析', icon: 'icon-shujuwajue' },
      { id: '1-3', path: '/overview/mybusiness', describer: '我的业务', icon: 'icon-huowudui' },
    ]
  },
  {
    id: '2',
    component: "",
    describer: "反馈中心",
    icon: "",
    children: [
      { id: '2-1', path: '/overview/orderCenter', describer: '工单中心', icon: 'icon-gongnengdingyi' },
      { id: '2-2', path: '/overview/issueTracking', describer: '问题跟踪', icon: 'icon-guize' },
      { id: '2-3', path: '/overview/assessment', describer: '考核与时效', icon: 'icon-tuoguan' },
    ]
  },
  {
    id: '3',
    component: "",
    describer: "地市服务",
    icon: "",
    children: [
      { id: '3-1', path: '/overview/online', describer: '智慧客服', icon: 'icon-kefu' },
      { id: '3-2', path: '/overview/directory', describer: '号码簿', icon: 'icon-icon_zhanghao' },
      { id: '3-3', path: '/overview/living', describer: '直播', icon: 'icon-shexiangtou' },
      { id: '3-4', path: '/overview/document', describer: '文档中心', icon: 'icon-DOC' },
      { id: '3-5', path: '/overview/manual', describer: '使用手册与反馈', icon: 'icon-menci' },
      { id: '3-6', path: '/overview/complaint', describer: '投诉中心', icon: 'icon-yunyingzhongxin' },
    ]
  },
  {
    id: '4',
    component: "",
    describer: "地市管理",
    icon: "",
    children: [
      { id: '4-1', path: '/overview/member', describer: '成员变更', icon: 'icon-hezuohuobanmiyueguanli' },
      { id: '4-2', path: '/overview/docConfig', describer: '文档配置', icon: 'icon-zidingyi' },
      { id: '4-3', path: '/overview/broadcast', describer: '群体广播', icon: 'icon-shengyinkai' },
    ]
  },
  {
    id: '5',
    component: "",
    describer: "接口分发",
    icon: "",
    children: [
      { id: '5-1', path: '/overview/admin', describer: '管理员变更', icon: 'icon-shenjing1' },
      { id: '5-2', path: '/overview/apitest/apilist', describer: '接口测试', icon: 'icon-gongyezujian-zhishideng' },
      { id: '5-3', path: '/overview/cityconf', describer: '地市配置', icon: 'icon-biaodanzujian-shurukuang' },
      { id: '5-4', path: '/overview/businessline', describer: '业务线配置', icon: 'icon-jiedianguanli' },
      { id: '5-5', path: '/overview/orderParams', describer: '工单参数配置', icon: 'icon-bianji' },
      { id: '5-6', path: '/overview/automation', describer: '高级自动化', icon: 'icon-fengche' },
    ]
  },
  {
    id: '6',
    component: "",
    describer: "安全",
    icon: "",
    children: [
      { id: '6-1', path: '/overview/safetyKnows', describer: '学习园地', icon: 'icon--lumingpai' },
      { id: '6-2', path: '/overview/safyTest', describer: '安全考试', icon: 'icon-gaojing' },
    ]
  },
  {
    id: '7',
    component: "",
    describer: "系统",
    icon: "",
    children: [
      { id: '7-1', path: '/overview/system', describer: '系统概况', icon: 'icon-gongyezujian-yibiaopan' },
      { id: '7-2', path: '/overview/orderVolume', describer: '交易信息', icon: 'icon-tubiao-zhuzhuangtu' },
      { id: '7-3', path: '/overview/server', describer: '服务信息', icon: 'icon-xinhao' },
    ]
  }
]