import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let Apns = () => import('../Pages/Apns')

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Apns',
      component: Apns
    },
  ]
})