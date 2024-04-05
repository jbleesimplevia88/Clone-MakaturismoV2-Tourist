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
      if (credentials.username === 'luislayola' && credentials.password === 'password') {
        this.isAuthenticated = true;
        this.user = { username: credentials.username };
        return true; // Authentication successful
      } else {
        return false; // Authentication failed
      }
    },
    logout() {
      // Implement your logout logic here
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
