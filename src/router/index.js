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
          component: () => import('../components/ToDo.vue'),
          children: [
            {
              path: 'omniverse',
              name: 'omniverse',
              component: () => import('../components/CategoryDo/DoOmniverseMuseum.vue')
            },
          ]
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../components/ToShop.vue')
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
              component: () => import('../components/CategorySee/SeeGlorietta.vue')
            },
            {
              path: 'leongallery',
              name: 'leongallery',
              component: () => import('../components/CategorySee/SeeLeonGallery.vue')
            },
            {
              path: 'gallerianicolas',
              name: 'gallerianicolas',
              component: () => import('../components/CategorySee/SeeGalleriaNicolas.vue')
            },
            {
              path: 'victorymakati',
              name: 'victorymakati',
              component: () => import('../components/CategorySee/SeeVictoryMakati.vue')
            },
            {
              path: 'happygallery',
              name: 'happygallery',
              component: () => import('../components/CategorySee/SeeHappyGallery.vue')
            },
            {
              path: 'artcenter',
              name: 'artcenter',
              component: () => import('../components/CategorySee/SeeArtCenter.vue')
            },
            {
              path: 'eskinitagallery',
              name: 'eskinitagallery',
              component: () => import('../components/CategorySee/SeeEskinitaGallery.vue')
            },
            {
              path: 'altomondo',
              name: 'altomondo',
              component: () => import('../components/CategorySee/SeeAltoMondo.vue')
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
          component: () => import('../components/ToTour.vue'),
          children:[
            {
              path: 'central',
              name: 'central',
              component: () => import('../components/CategoryTour/TourCentralBusiness.vue')
            },
          ]
        }
      ]
    }
  ]
})

export default router
