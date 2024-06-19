import { defineStore } from 'pinia';
import axios from 'axios';
import landingPageImage1 from '@/assets/images/Banner/banner-1.webp';
import landingPageImage2 from '@/assets/images/Banner/banner-2.webp';
import landingPageImage3 from '@/assets/images/Banner/banner-3.webp';
import landingPageImage4 from '@/assets/images/Banner/banner-4.webp';
import landingPageImage5 from '@/assets/images/Banner/banner-5.webp';
import landingPageImage6 from '@/assets/images/Banner/banner-6.webp';
import landingPageImage7 from '@/assets/images/Banner/banner-7.webp';

const defaultImages = [
  { src: landingPageImage1 },
  { src: landingPageImage2 },
  { src: landingPageImage3 },
  { src: landingPageImage4 },
  { src: landingPageImage5 },
  { src: landingPageImage6 },
  { src: landingPageImage7 },
];

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

          // If no images are fetched from the database, use default images
          if (this.images.length === 0) {
            this.images = defaultImages;
          }
        }
      } catch (error) {
        console.error('Failed to fetch content:', error);
        // Use default images if fetching fails
        this.images = defaultImages;
      }
    },
  },
});
