import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopPlace from '@/components/TopPlace.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // If a saved position is available, return it to scroll to that position
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top of the page
      return { top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue')
    },
    {
      path: '/searchfilter',
      name: 'searchfilter',
      component: () => import('../views/SearchFilter.vue')
    },
    {
      path: '/topPlace',
      name: 'topPlace',
      component: TopPlace
    },
    {
      path: '/viewAll',
      name: 'viewAll',
      component: () => import('../views/ViewAllView.vue')
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionsView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
          children: [
            {
              path: '/cart',
              name: 'carthome',
              component: () => import('../components/CartHome.vue')
            },
            {
              path: '/checkoutshop',
              name: 'cartcheckoutshop',
              component: () => import('../components/CartCheckoutShop.vue')
            },
            {
              path: '/checkouteat',
              name: 'cartcheckouteat',
              component: () => import('../components/CartCheckoutEat.vue')
            },
            {
              path: '/checkoutbook',
              name: 'cartcheckoutbook',
              component: () => import('../components/CartCheckoutBook.vue')
            },
            {
              path: '/checkouttour',
              name: 'cartcheckouttour',
              component: () => import('../components/CartCheckoutTour.vue')
            },
            
          ]


    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      children: [
        {
          path: 'do',
          name: 'do',
          component: () => import('../components/ToDo.vue'),
          children: [
            {
              path: 'omniverse',
              name: 'omniverse',
              component: () => import('../components/CategoryDo/DoOmniverseMuseum.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 

              })
            },
          ]
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../components/ToShop.vue'),
          children: [
            {
              path: 'makati',
              name: 'makati',
              component: () => import('../components/CategoryShop/ShopMakati.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 

              })
            },
          ]
        },
        
        {
          path: 'see',
          name: 'see',
          component: () => import('../components/ToSee.vue'),
          children: [
            {
              path: 'see',
              name: 'SeeHome',
              component: () => import('../components/ToSeeHome.vue')
            },
            {
              path: 'glorietta',
              name: 'glorietta',
              component: () => import('../components/CategorySee/SeeGlorietta.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 
              })
            },
          ]
        },
        {
          path: 'eat',
          name: 'eat',
          component: () => import('../components/ToEat.vue'),
          children: [
            {
              path: 'LittleTokyo',
              name: 'Little Tokyo',
              component: () => import('../components/CategoryEat/EatLittleTokyo.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 
              })
            },
          ]
        },
        {
          path: 'stay',
          name: 'stay',
          component: () => import('../components/ToStay.vue'),
          children: [
            {
              path: 'xyz',
              name: 'xyz',
              component: () => import('../components/CategoryStay/StayXyz.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 
              })
            },
          ]
        },
        {
          path: 'tour',
          name: 'tour',
          component: () => import('../components/ToTour.vue'),
          children:[
            {
              path: 'central',
              name: 'central',
              component: () => import('../components/CategoryTour/TourCentralBusiness.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name, 
              })
            },
          ]
        }
      ]
    }
  ]
})

export default router