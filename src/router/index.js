import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/Blog.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Staff from '../views/Staff.vue'
import Inventory from '../views/Inventory.vue'
import CarDetail from '../views/CarDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: Staff
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:slug',
    name: 'blog-details',
    component: BlogDetail
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: Inventory
  },
  {
    path: '/inventory/:id',
    name: 'inventory-details',
    component: CarDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
