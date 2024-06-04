import { defineStore } from 'pinia';
import axios from 'axios';

export const useTourStore = defineStore({
  id: 'cartTour',
  state: () => ({
    shopData: {},  // Initialize as an empty object
    selectedTour: {
      name: '',
      category: '',
      image: '@/assets/images/CategoryView/ToTour/central.jpeg',
      mapLocation: '',
      location: '',
    },
    reservationDetails: {
      date: '',
      numberOfPersons: 0,
    },
  }),
  actions: {
    selectTour(tourDetails) {
      this.selectedTour = tourDetails;
      console.log(this.selectedTour);
    },
    reserveTour(reservationDetails) {
      this.reservationDetails = reservationDetails;
    },
    getShopData(item) {
      this.shopData = item;
    },
    clearReservation() {
      this.reservationDetails = {
        date: '',
        numberOfPersons: 0,
      };
    },
    async fetchCoverPhoto(id) {
      try {
        const response = await axios.get(`/viewactivityperid/${id}`);
        const activityDetails = JSON.parse(response.data.peractivity);
        const coverPhotoUrl = `${import.meta.env.VITE_STORAGE_BASE_URL}/${activityDetails.activitycoverphoto}`;
        this.shopData = {
          ...activityDetails,
          coverPhotoUrl,
        }; // Combine activityDetails with the coverPhotoUrl
        console.log('Cover photo URL fetched:', coverPhotoUrl); // Log the fetched cover photo URL
      } catch (error) {
        console.error('Failed to fetch cover photo:', error);
      }
    },
  },
});
