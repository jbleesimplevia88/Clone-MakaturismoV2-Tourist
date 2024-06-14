// src/stores/homepage.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useHomepageStore = defineStore('homepage', {
  state: () => ({
    content: {
      subtitle: '',
      title: '',
      description: '',
      socialmedia: [],
      location: '',
      email: '',
      contactno: '',
      touristlocation: '',
    },
    images: [],
  }),
  actions: {
    async fetchContent() {
      try {
        const response = await axios.post('/viewcontent');
        if (response.data.getallcontent) {
          const contents = JSON.parse(response.data.getallcontent);
          const content = contents[0] || {}; // Ensure content is an object
          content.socialmedia = content.socialmedia ? content.socialmedia.split(',') : [];
          this.content = content;
          this.images = contents.map(content => ({
            src: `${import.meta.env.VITE_STORAGE_BASE_URL}/${content.backgroundphoto}`
          }));
        }
      } catch (error) {
        console.error('Failed to fetch content:', error);
      }
    },
  },
});
