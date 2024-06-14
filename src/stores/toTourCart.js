import { defineStore } from 'pinia';
import axios from 'axios';

export const useTourStore = defineStore({
  id: 'cartTour',
  state: () => ({
    shopData: {},  // Initialize as an empty object
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
    async checkAvailability(date) {
      try {
        const response = await axios.post('/book-tour-list', { date });
        const tours = response.data.data;
        const totalPersons = tours.reduce((sum, tour) => sum + tour.number_of_person, 0);
        return totalPersons;
      } catch (error) {
        console.error('Failed to check availability:', error);
        throw error;
      }
    },
    async confirmBooking(userInfo) {
      try {
        const totalPersons = await this.checkAvailability(this.reservationDetails.date);
        const numberOfPersonsValue = parseInt(this.reservationDetails.numberOfPersons);

        const availableSlots = 15 - totalPersons;

        if (availableSlots <= 0) {
          alert("Sorry, the slots have been filled for this date, please try a different date.");
          return;
        } else if (numberOfPersonsValue > availableSlots) {
          alert(`Sorry, only ${availableSlots} slot(s) are available for this date.`);
          return;
        }

        const payload = {
          lguact_id: this.shopData.id, // Corrected key from activityid to id
          tourist_id: userInfo.id, // Ensure this is the correct user ID
          date: this.reservationDetails.date,
          number_of_person: this.reservationDetails.numberOfPersons,
        };

        console.log('Sending booking payload:', payload); // Log the payload for debugging

        const response = await axios.post('/book-tour', payload);

        if (response.status === 200) {
          console.log('Booking successful:', response.data);
          return response.data;
        } else {
          console.error('Booking failed with status:', response.status, response.data);
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.error('Failed to confirm booking:', error);
        throw error;
      }
    },
  },
});
