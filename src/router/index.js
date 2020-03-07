import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
  {
    path: '/care',
    name: 'Care',
    component: () => import('../views/Care.vue')
  },
  {
    path: '/repair',
    name: 'Repair',
    component: () => import('../views/Repair.vue')
  },
  {
    path: '/payment-shipping',
    name: 'PaymentShipping',
    component: () => import('../views/PaymentShipping.vue')
  },
  {
    path: '/qa',
    name: 'QA',
    component: () => import('../views/QA.vue')
  },
  {
    path: '/returns-exchanges',
    name: 'ReturnsExchanges',
    component: () => import('../views/ReturnsExchanges.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
