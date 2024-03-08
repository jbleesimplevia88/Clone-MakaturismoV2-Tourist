import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarModal from '@/components/CalendarModal.vue'
import TopPlace from '@/components/TopPlace.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarModal
    },
    {
      path: '/topPlace',
      name: 'topPlace',
      component: TopPlace
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      children: [
        {
          path: 'do',
          name: 'do',
          component: () => import('../components/ToDo.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../components/ToShop.vue')
        }
      ]
    }
  ]
})

export default router
