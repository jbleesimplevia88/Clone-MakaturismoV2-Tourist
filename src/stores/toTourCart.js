import { defineStore } from 'pinia';

export const useTourStore = defineStore({
  id: 'cartTour',
  state: () => ({
    selectedTour: {
      name: '',
      category: '',
      image: '',
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
    },
    reserveTour(reservationDetails) {
      this.reservationDetails = reservationDetails;
    },
    clearReservation() {
      this.reservationDetails = {
        date: '',
        numberOfPersons: 0,
      };
    },
  },
});