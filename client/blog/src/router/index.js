import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

var Detail = () => import('@/pages/Detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ],

  scrollBehavior(to, from, position) {
    return {x:0, y: 1}
  }

})
