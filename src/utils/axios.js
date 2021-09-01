import axios from "axios";
import { Message } from 'element-ui'
import router from '../router'
// 全局拦截器，这个文件不要动！！！！

// 创建axios实例
const service = axios.create({
    baseURL: 'http://49.234.235.135:6060', // 本地-前端解决跨域
    // baseURL: 'http://localhost:6060', // 本地-前端解决跨域
    timeout: 10000 // 请求超时时间
});

// 配置全局的拦截器
service.interceptors.request.use(config => {
    // 如果配置了isLoading: false，则不显示loading
    if (localStorage.getItem('users')) {
        let token = JSON.parse(localStorage.getItem("users")).token
        config.headers.common["authorization"] = token
    }
    return config;
}, error => {
    Message.error({ message: 'Oops 跟地球断网了！' })
    return Promise.reject(error)
});



//响应头拦截
service.interceptors.response.use(response => {
    return response.data;
}, error => {
    //当返回信息为未登录或者登录失效的时候重定向为登录页面
    const { status = '400' } = error?.response
    switch (status) {
        case 400:
            Message.error({ message: "参数信息有误", center: true });
            router.push("/login");
            break;
        case 401:
            Message.error({ message: "用户登录令牌过期，请重新登录", center: true });
            router.push("/login");
            break;
        case 302:
            Message.error({ message: "用户未登录", center: true });
            router.push("/login");
            break;
        case 404:
            Message.error({ message: "连接失败", center: true });
            break;
        case 500:
            Message.error({ message: "服务器内部错误", center: true });
            break;
        case 560:
            Message.error({ message: "数据库异常", center: true });
            break;
        default:
            Message.error({ message: error.message, center: true, duration: 5 * 1000 });
            break;
    }
    return Promise.reject(error)
});

export default service;
