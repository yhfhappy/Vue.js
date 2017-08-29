import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 使用Vuex
Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
    modules:{
        mutations
    },
    actions 
})