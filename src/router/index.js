import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import HomeView from '../views/HomeView.vue';
import TopPlace from '@/components/TopPlace.vue';


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
      path: '/notification',
      name: 'notification',
      component: () => import('../views/NotificationView.vue')
    },
    {
      path: '/loginmodal',
      name: 'loginmodal',
      component: () => import('../components/LoginModal.vue')

    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true }

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
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue'),
      children: [
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('../components/CalendarHome.vue'),
        
        },
        {
          path: 'currentevents/:id',
          name: 'currentevents',
          component: () => import('../components/CalendarEvents/CurrentEvents.vue'),
          props: route => ({
            latitude: parseFloat(route.query.latitude),
            longitude: parseFloat(route.query.longitude),
            name: route.query.name,
            imageList: route.query.imageList,
          })
        },
        {
          path: '/viewAllEvents',
          name: 'viewAllEvents',
          component: () => import('../components/CalendarEvents/AllEvents.vue'),
          props: route => ({
            latitude: parseFloat(route.query.latitude),
            longitude: parseFloat(route.query.longitude),
            name: route.query.name,
          })
        },
        {
          path: '/viewAllPastEvents',
          name: 'viewAllPastEvents',
          component: () => import('../components/CalendarEvents/AllPastEvents.vue'),
          props: route => ({
            latitude: parseFloat(route.query.latitude),
            longitude: parseFloat(route.query.longitude),
            name: route.query.name,
          })
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      children: [
        {
          path: '/cartallproducts',
          name: 'cartallproducts',
          component: () => import('../components/CartAllProducts.vue')
        },
    

        {
          path: '/checkout',
          name: 'cartcheckout',
          component: () => import('../components/CartCheckout.vue'),
          meta: { requiresAuth: true }

        },
        {
          path: '/checkoutbook',
          name: 'cartcheckoutbook',
          component: () => import('../components/CartCheckoutBook.vue'),
          meta: { requiresAuth: true }

        },
        {
          path: '/checkouttour',
          name: 'cartcheckouttour',
          component: () => import('../components/CartCheckoutTour.vue'),
          // meta: { requiresAuth: true }
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
              path: 'omniverse/:id',
              name: 'omniverse',
              component: () => import('../components/CategoryDo/DoOmniverseMuseum.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,

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

              path: 'LittleTokyo/:id',
              name: 'Little Tokyo',
              component: () => import('../components/CategoryEat/EatLittleTokyo.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,


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
              path: 'makati/:id',
              name: 'makati',
              component: () => import('../components/CategoryShop/ShopMakati.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,

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
              path: 'glorietta/:id',
              name: 'glorietta',
              component: () => import('../components/CategorySee/SeeGlorietta.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,
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
              path: 'xyz/:id',
              name: 'xyz',
              component: () => import('../components/CategoryStay/StayXyz.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,
              })
            },
          ]
        },
        {
          path: 'tour',
          name: 'tour',
          component: () => import('../components/ToTour.vue'),
          children: [
            {
              path: 'central/:id',
              name: 'central',
              component: () => import('../components/CategoryTour/TourCentralBusiness.vue'),
              props: route => ({
                latitude: parseFloat(route.query.latitude),
                longitude: parseFloat(route.query.longitude),
                name: route.query.name,
                imageList: route.query.imageList,
              })
            },
          ]
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.initialize();
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if the user is authenticated
    if (!authStore.isAuthenticated) {
      // If not authenticated, redirect to login page
      next({ name: 'home' }); // Change 'loginmodal' to your actual login route name
    } else {
      // If authenticated, proceed to the requested route
      next();
    }
  } else {
    // If the route does not require authentication, proceed
    next();
  }
});
export default router