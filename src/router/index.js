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
      path: '/partner',
      name: 'Partner',
      component: () => import('../views/BusinessView.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/components/Business/DashBoardContent.vue')
        },
        {
          path: 'business',
          name: 'Business',
          component: () => import('@/components/Business/BusinessContent.vue')
        },
        {
          path: 'transactions',
          name: 'Transactions',
          component: () => import('@/components/Business/TransactionsContent.vue')
        },
        {
          path: 'terms',
          name: 'T&C',
          component: () => import('@/components/Business/T&cContent.vue')
        },
        {
          path: 'information',
          name: 'Informations',
          component: () => import('@/components/Business/InformationContent.vue')
        },
        {
          path: 'product-ratings',
          name: 'Product Ratings',
          component: () => import('@/components/Business/ProductRatings.vue')
        },
        {
          path: 'sale-analytics',
          name: 'Sale Analytics',
          component: () => import('@/components/Business/SaleAnalytics.vue')
        },
        {
          path: 'messages',
          name: 'Messages',
          component: () => import('@/components/Business/MessagesContent.vue')
        },
        {
          path: 'product',
          name: 'Product',
          component: () => import('@/components/Business/ProductContent.vue')
        },
        
        
        // Other nested routes under Business if needed
      ]
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/GuestView.vue')
    }
    
  ]
})

export default router
