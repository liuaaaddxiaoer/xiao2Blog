import Vue from 'vue'
import Router from 'vue-router'

var Home = () => import('@/pages/Home')

var Detail = () => import('@/pages/Detail')

var Category = () => import('@/pages/Categories')

var Archives = () => import('@/pages/Archives')

Vue.use(Router)

export default new Router({
  mode: 'history',
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

    {
      path: '/categories',
      name: 'Categories',
      component: Category
    },

    {
      path: '/archives/:category',
      name: 'Archives',
      component: Archives
    },

    {
      path: '/archives/',
      name: 'Archives',
      component: Archives
    },


  ],

  scrollBehavior(to, from, position) {
    return {x:0, y: position}
  }

})
