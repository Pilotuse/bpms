import Vue from 'vue'
import Vuex from 'vuex'
import service from '../service'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    apitest: {
      url: '',
      params: {

      }
    }
  },
  mutations: {

  },
  actions: {
    login(context, info) {
      service.login(info).then(res => info.callback(res))
    },
    queryUserMenu(context, info) {
      service.queryUserMenu(info).then(res => info.callback(res))
    },
    queryCitysOptions(context, info) {
      service.queryCitysOptions(info).then(res => info.callback(res))
    },
    queryAttachOptions(context, info) {
      service.queryAttachOptions(info).then(res => info.callback(res))
    },
    queryClassifyOptions(context, info) {
      service.queryClassifyOptions(info).then(res => info.callback(res))
    },
    queryProdInfos(context, info) {
      service.queryProdInfos(info).then(res => info.callback(res))
    },
    insertRearchCase(context, info) {
      service.insertRearchCase(info).then(res => info.callback(res))
    },
  },
})
