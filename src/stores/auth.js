// auth.js
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router'; // Import useRouter from Vue Router
import axios from 'axios';
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
    intendedRoute: '/',
  }),
  actions: {
    async login(credentials, intendedRoute) {
      const router = useRouter();

      try {
        const response = await axios.post('/loginTourist', credentials);
        if (response.data.message === 'correct') {
          this.isAuthenticated = true;
          this.user = response.data.user;
          localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: this.user, token: response.data.token }));

          if (intendedRoute && router) {
            router.push(intendedRoute);
          }
          return true;
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Unauthorized, handle accordingly
          console.error('Authentication failed: Unauthorized');
        }
        return { status: false, message: error.response.data.message };
      }
    },


    logout() {
      // Remove authentication information from local storage
      localStorage.removeItem('auth');
      // Reset authentication state
      this.isAuthenticated = false;
      this.user = null;
    },
    setIntendedRoute(route) {
      this.intendedRoute = route;
    },
    initialize() {
      // Check if there's any stored authentication information
      const authInfo = localStorage.getItem('auth');
      if (authInfo) {
        const { isAuthenticated, user, token } = JSON.parse(authInfo);
        this.isAuthenticated = isAuthenticated;
        this.user = user;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set token for all future Axios requests
      }
    },

  },
});
