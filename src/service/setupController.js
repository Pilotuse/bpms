import { post } from '../utils/methods'

export default {
    // 菜单查询接口
    queryUserMenu: () => {
        return  post('/api/user/transaction', {  apiName: 'queryUserMenu', bipcode: 'BIP10001', activitycode: 'ACT10001' })    
    },
}
