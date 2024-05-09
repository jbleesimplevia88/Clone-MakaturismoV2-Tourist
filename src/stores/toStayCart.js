import { defineStore } from 'pinia';

export const useStayStore = defineStore({
  id: 'cartStay',
  state: () => ({
    selectedHotel: {
      name: '',
      category: '',
      image: '',
      mapLocation: '',
      barangay: '',
      dateFrom: '',
      dateTo: '',
      roomType: '',
    },
    stayXyzData: {
      dateFrom: '',
      dateTo: '',
      roomType: '',
    },
  }),
  actions: {
    selectHotel(hotelDetails) {
      this.selectedHotel = {
        ...this.selectedHotel,
        ...hotelDetails,
      };
    },
    selectStayXyzData(data) {
      this.stayXyzData = {
        ...this.stayXyzData,
        dateFrom: data.dateFrom || '',
        dateTo: data.dateTo || '',
        roomType: data.roomType || '',
      };
    },
    clearSelectedHotel() {
      this.selectedHotel = {
        name: '',
        category: '',
        image: '',
        mapLocation: '',
        barangay: '',
        dateFrom: '',
        dateTo: '',
        roomType: '',
      };
      this.stayXyzData = {
        dateFrom: '',
        dateTo: '',
        roomType: '',
      };
    },
  },
  getters: {
    selectedHotelDetails: (state) => {
      const { dateFrom, dateTo, roomType, ...rest } = state.selectedHotel;
      return rest;
    },
    isHotelSelected: (state) => state.selectedHotel.name !== '',
    getStayXyzData: (state) => state.stayXyzData,
  },
});
