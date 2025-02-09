import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/production-tracking',
      name: 'production-tracking',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductionTracking.vue'),
    },
    {
      path: '/quality-control',
      name: 'quality-control',
      component: () => import('../views/QualityControl.vue'),
    }
  ],
})

export default router
