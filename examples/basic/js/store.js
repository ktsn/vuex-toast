import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from '../../../src'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast: createModule()
  }
})
