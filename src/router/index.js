import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './HomeRouter'
import LoginRouter from './LoginRouter'
import dayjs from 'dayjs'


Vue.use(VueRouter)

const title = '- Husk 坚果'

const routes = [
  {
    path: '/',
    redirect: { path: '/login' }
  },
  ...LoginRouter,  // 登录页面路由
  ...HomeRouter, // 主页路由
  {
    path: '/404',
    name: 'notfound',
    component: () => import('../views/NotFound/index.vue'),
    meta: {
      title: `未找到该页面 ${title}`
    }
  }, {
    path: '*',
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
      let { token, date, author } = JSON.parse(localStorage.getItem('users')) || '';
      let dateCheck = dayjs(date).isBefore(dayjs(new Date()))
      token && dateCheck && to?.meta?.author.includes(author) ? next() : next({ path: "/login" })
    } else {
      next();
    }
  } else {
    next();
  }
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


export default router
