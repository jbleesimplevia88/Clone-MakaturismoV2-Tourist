import { defineStore } from 'pinia';
import axios from 'axios';

export const useTourStore = defineStore({
  id: 'cartTour',
  state: () => ({
    shopData: {},
    reservationDetails: {
      date: '',
      numberOfPersons: 0,
    },
    availableDays: [],
  }),
  actions: {
    selectTour(tourDetails) {
      this.selectedTour = tourDetails;
      console.log('Selected tour:', this.selectedTour);
    },
    reserveTour(reservationDetails) {
      this.reservationDetails = reservationDetails;
      console.log('Reserved tour:', this.reservationDetails);
    },
    updateReservationDetails(details) {
      this.reservationDetails = { ...this.reservationDetails, ...details };
      console.log('Updated reservation details:', this.reservationDetails);
    },
    getShopData(item) {
      this.shopData = item;
      console.log('Shop data:', this.shopData);
    },
    clearReservation() {
      this.reservationDetails = {
        date: '',
        numberOfPersons: 0,
      };
      console.log('Reservation cleared');
    },
    parseAvailableDays(actsched) {
      const daysOfWeekMap = {
        Sun: 0,
        Mon: 1,
        Tues: 2,
        Wed: 3,
        Thurs: 4,
        Fri: 5,
        Sat: 6,
      };
      this.availableDays = actsched.split(',').map((day) => daysOfWeekMap[day]);
      console.log('Parsed available days:', this.availableDays);
    },
    async fetchCoverPhoto(id) {
      try {
        const response = await axios.get(`/viewactivityperid/${id}`);
        const activityDetails = JSON.parse(response.data.peractivity);
        const coverPhotoUrl = `${import.meta.env.VITE_STORAGE_BASE_URL}/${activityDetails.activitycoverphoto}`;
        this.shopData = {
          ...activityDetails,
          coverPhotoUrl,
        };
        console.log('Cover photo URL fetched:', coverPhotoUrl);
        this.parseAvailableDays(activityDetails.actsched);
      } catch (error) {
        console.error('Failed to fetch cover photo:', error);
      }
    },
    async checkAvailability(date) {
      try {
        const response = await axios.post('/book-tour-list', { date });
        const tours = response.data.data;
        const totalPersons = tours.reduce((sum, tour) => sum + tour.number_of_person, 0);
        console.log(`Total persons for ${date}: ${totalPersons}`);
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
          lguact_id: this.shopData.id,
          tourist_id: userInfo.id,
          date: this.reservationDetails.date,
          number_of_person: this.reservationDetails.numberOfPersons,
        };

        console.log('Sending booking payload:', payload);

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
