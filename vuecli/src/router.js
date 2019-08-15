import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound')

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})