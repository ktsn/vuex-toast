import Vue from 'vue'
import Vuex from 'vuex'
import { createToastModule } from '../../../src'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast: createToastModule()
  }
})
