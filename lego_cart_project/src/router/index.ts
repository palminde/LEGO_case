import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  routes
})

export default router
