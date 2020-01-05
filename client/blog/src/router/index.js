import Vue from 'vue'
import Router from 'vue-router'

let Home = () => import('@/pages/Home')

let Detail = () => import('@/pages/Detail')

let Category = () => import('@/pages/Categories')

let Archives = () => import('@/pages/Archives')

let Player = () => import('@/pages/Player')

Vue.use(Router)

// 防止点击中间报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/detail/:id',
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

    {
      path: '/player/',
      name: 'Player',
      component: Player
    },

  ],

  scrollBehavior(to, from, position) {
    return { x: 0, y: position }
  }

})
