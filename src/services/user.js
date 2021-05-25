import { post } from './methods'

export default {
    //  用户登录接口
    login: () => ({ username, password }) => {
        return post('/api/login', { username, password })
    },


}