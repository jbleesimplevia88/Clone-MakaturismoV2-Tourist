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
      path: '/todo',
      name: 'todo',
      component: () => import('../views/GuestView.vue')
    }
    
  ]
})

export default router
