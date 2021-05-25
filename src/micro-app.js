const microApps = [{
    name: 'lemon',
    entry: process.env.VUE_APP_LEMON,
    activeRule: '/#/overview/apitest/apilist'
}]

const apps = microApps.map(item => {
    return {
        ...item,
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
        }
    }
})

export default apps