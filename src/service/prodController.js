import { post } from '../utils/methods'

export default {
    // 菜单查询接口
    queryProdInfos: () => {
        return post('/user/transaction', { apiName: 'queryProdInfos', bipcode: 'BIP30001', activitycode: 'ACT30001' })
    },
}
