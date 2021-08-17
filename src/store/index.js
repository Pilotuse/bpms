import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import usersController from '../service/usersController'
import setupController from '../service/setupController'

const service = { ...usersController, ...setupController }

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
    }
  },
  modules: {
  }
})
