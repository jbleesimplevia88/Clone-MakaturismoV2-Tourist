import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
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
          const { token } = response.data;
          this.isAuthenticated = true;
          
          localStorage.setItem('auth', JSON.stringify({ 
            isAuthenticated: true, token 
          }));
          
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          if (intendedRoute && router) {
            router.push(intendedRoute);
          }
          return true;
        }
      } catch (error) {
        console.error('Authentication failed:', error.response?.data?.message || error.message);
        return { status: false, message: error.response?.data?.message || 'Authentication failed' };
      }
    },

    logout() {
      localStorage.removeItem('auth');
      delete axios.defaults.headers.common['Authorization'];
      this.isAuthenticated = false;
      this.user = null;
    },

    setIntendedRoute(route) {
      this.intendedRoute = route;
    },

    initialize() {
      const authInfo = localStorage.getItem('auth');
      if (authInfo) {
        const { isAuthenticated, token } = JSON.parse(authInfo);
        this.isAuthenticated = isAuthenticated;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    },
  },
});
