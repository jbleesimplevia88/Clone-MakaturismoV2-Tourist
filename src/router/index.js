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
        },
        {
          path: 'see',
          name: 'see',
          component: () => import('../views/ToSee.vue'),
          children: [
            {
              path: 'see',
              name: 'SeeHome',
              component: () => import('../components/ToSeeHome.vue')
            },
            {
              path: 'glorietta',
              name: 'glorietta',
              component: () => import('../components/SeeGlorietta.vue')
            },
          ]
        },
        {
          path: 'eat',
          name: 'eat',
          component: () => import('../components/ToEat.vue')
        },
        {
          path: 'stay',
          name: 'stay',
          component: () => import('../components/ToStay.vue')
        },
        {
          path: 'tour',
          name: 'tour',
          component: () => import('../components/ToTour.vue')
        }
      ]
    }
  ]
})

export default router
