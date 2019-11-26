// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Message} from 'element-ui'

import http from './http/api'
import utils from './utils'

Vue.prototype.$message = Message

Vue.prototype.$http = http
Vue.prototype.$utils = utils


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
