import { createStore } from '@mpxjs/core'

import * as actions from './actions/index'
import * as getters from './getters/index'
import state from './state/index'
import mutations from './mutations/index'

const store = createStore({
  actions,
  getters,
  state,
  mutations
})
export default store
