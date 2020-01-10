import '../src/css/reset.less'

import Vue from 'vue'
import App from './pages/App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI)

new Vue({
  el: '#app2',
  template: '<App />',
  router,
  components: {
    App
  }
})