import { createStore, createLogger } from 'vuex'
import modules from './modules'
import { IStore } from './types'
const debug = process.env.NODE_ENV === 'development'
const plugins = debug ? [createLogger()] : []
const store = createStore<IStore>({
  plugins,
  modules
})
export default store
