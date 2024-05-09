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
    },
    stayXyzData: {
      dateFrom: '',
      dateTo: '',
      roomType: '',
      roomTypeName: '', // New property to store the room type name
      roomTypePrice: 0,
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
        roomTypeName: data.roomTypeName || '', // Assign room type name
        roomTypePrice: data.roomTypePrice || 0,
      };
    },
    clearSelectedHotel() {
      this.selectedHotel = {
        name: '',
        category: '',
        image: '',
        mapLocation: '',
        barangay: '',
      };
      this.stayXyzData = {
        dateFrom: '',
        dateTo: '',
        roomType: '',
        roomTypeName: '', // Clear room type name
        roomTypePrice: 0, // Clear room type price
      };
    },
  },
  getters: {
    selectedHotelDetails: (state) => state.selectedHotel,
    isHotelSelected: (state) => state.selectedHotel.name !== '',
    getStayXyzData: (state) => state.stayXyzData,
  },
});
