import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blogs from '../views/Blogs.vue'
import Tools from '../views/Tools.vue'
import ToolJson from '../views/ToolJson.vue'
import TinyImage from '../views/TinyImage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/tools/json',
      name: 'ToolJson',
      component: ToolJson
    },
    {
      path: '/tools/tinyimage',
      name: 'TinyImage',
      component: TinyImage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/Components.vue')
    }
  ]
})

export default router
