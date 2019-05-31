import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
})
// mutation 方法名一律采取,大写字母形式,避免和组件中,api中的方法名,重复action
