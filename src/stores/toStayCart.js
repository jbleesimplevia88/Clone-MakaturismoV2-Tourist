// import { defineStore } from 'pinia';

// export const useStayStore = defineStore({
//   id: 'cartStay',
//   state: () => ({
//     selectedHotel: {
//       name: '',
//       category: '',
//       image: '',
//       mapLocation: '',
//       barangay: '',
//       roomsQuantity: 0,
//       adultsQuantity: 0,
//       childrenQuantity: 0,
//     },
//     stayXyzData: {
//       dateFrom: '',
//       dateTo: '',
//       roomType: '',
//       roomTypeName: '', // New property to store the room type name
//       roomTypePrice: 0,
//     },
//   }),
//   actions: {
    
//     selectHotel(hotelDetails) {
//       this.selectedHotel = {
//         ...this.selectedHotel,
//         ...hotelDetails,
//       };
//     },
//     // New action to update quantities
//     setSelectedHotelQuantities(roomsQuantity, adultsQuantity, childrenQuantity) {
//       this.selectedHotel.roomsQuantity = roomsQuantity;
//       this.selectedHotel.adultsQuantity = adultsQuantity;
//       this.selectedHotel.childrenQuantity = childrenQuantity;
//     },
//     selectStayXyzData(data) {
//       this.stayXyzData = {
//         ...this.stayXyzData,
//         dateFrom: data.dateFrom || '',
//         dateTo: data.dateTo || '',
//         roomType: data.roomType || '',
//         roomTypeName: data.roomTypeName || '', // Assign room type name
//         roomTypePrice: data.roomTypePrice || 0,
//       };
//     },
//     clearSelectedHotel() {
//       this.selectedHotel = {
//         name: '',
//         category: '',
//         image: '',
//         mapLocation: '',
//         barangay: '',
//         roomsQuantity: 0,
//       adultsQuantity: 0,
//       childrenQuantity: 0,
//       };
//       this.stayXyzData = {
//         dateFrom: '',
//         dateTo: '',
//         roomType: '',
//         roomTypeName: '', // Clear room type name
//         roomTypePrice: 0, // Clear room type price
//       };
//     },
//   },
//   getters: {
//     selectedHotelDetails: (state) => state.selectedHotel,
//     isHotelSelected: (state) => state.selectedHotel.name !== '',
//     getStayXyzData: (state) => state.stayXyzData,
//   },
// });
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
      roomsQuantity: 0,
      adultsQuantity: 0,
      childrenQuantity: 0,
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
    // New action to update quantities
    setSelectedHotelQuantities(roomsQuantity, adultsQuantity, childrenQuantity) {
      this.selectedHotel.roomsQuantity = roomsQuantity;
      this.selectedHotel.adultsQuantity = adultsQuantity;
      this.selectedHotel.childrenQuantity = childrenQuantity;
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
        roomsQuantity: this.selectedHotel.roomsQuantity, // Retain the user input for room quantity
        adultsQuantity: this.selectedHotel.adultsQuantity, // Retain the user input for adults
        childrenQuantity: this.selectedHotel.childrenQuantity, // Retain the user input for children
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
