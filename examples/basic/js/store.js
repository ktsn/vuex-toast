import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from 'vuex-toast'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast: createModule()
  }
})
