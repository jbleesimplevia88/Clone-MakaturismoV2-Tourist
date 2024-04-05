// authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(credentials) {
      // In a real-world scenario, you would typically perform authentication logic here
      // For demonstration purposes, let's just check if the provided credentials are valid
      if (credentials.username === 'admin' && credentials.password === 'password') {
        this.isAuthenticated = true;
        this.user = { username: credentials.username };
        // Store authentication information in local storage
        localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: this.user }));
        return true; // Authentication successful
      } else {
        return false; // Authentication failed
      }
    },
    logout() {
      // Remove authentication information from local storage
      localStorage.removeItem('auth');
      // Reset authentication state
      this.isAuthenticated = false;
      this.user = null;
    },
    initialize() {
      // Check if there's any stored authentication information
      const authInfo = localStorage.getItem('auth');
      if (authInfo) {
        const { isAuthenticated, user } = JSON.parse(authInfo);
        this.isAuthenticated = isAuthenticated;
        this.user = user;
      }
    },
  },
});
