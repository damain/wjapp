import Vue from 'vue'
import Vuex from 'vuex'
import Parse from 'parse'
import config from './config'
import students from './modules/students'

// configuring parse
Parse.initialize(config.api_key, config.javascript_key)
Parse.serverURL = config.server_URL
Parse.liveQueryServerURL = config.livequery_URL

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    students
  }
})
