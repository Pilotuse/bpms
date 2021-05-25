<template>
   <router-view />
</template>

<script>
import microApps from './micro-app'

export default {
  name: 'App',
  data () {
    return {
      microApps,
      current: ''
    }
  },
  methods: {
    goto (item) {
      console.log(item)
      this.current = item.activeRule
      history.pushState(null, item.activeRule, item.activeRule) // 没引入路由，所以不能用路由切换
    },
  },
  created() {
    const path = window.location.pathname
    if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
      this.current = path
    }
  },
}
</script>