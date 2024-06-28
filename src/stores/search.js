// src/stores/searchStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: {
      businesses: [],
      products: [],
      activities: [],
      events: [],
      productBusinesses: []
    }
  }),
  actions: {
    async fetchResults() {
      if (this.query) {
        try {
          const response = await axios.get(`/search?query=${this.query}`);
          console.log('API Response:', response.data); // Add this line
          this.results = response.data;
        } catch (error) {
          console.error('Error fetching search results:', error);
          this.results = {
            businesses: [],
            products: [],
            activities: [],
            events: [],
            productBusinesses: []

          };
        }
      } else {
        this.results = {
          businesses: [],
          products: [],
          activities: [],
          events: [],
          productBusinesses: []

        };
      }
    },
    setQuery(query) {
      this.query = query;
      this.fetchResults();
    }
  },
 getters: {
  filteredItems: (state) => {
    const extractLatLong = (maplink) => {
      const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = maplink.match(regex);
      if (match && match.length >= 3) {
        return { latitude: parseFloat(match[1]), longitude: parseFloat(match[2]) };
      }
      const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
      const altMatch = maplink.match(altRegex);
      if (altMatch && altMatch.length >= 3) {
        return { latitude: parseFloat(altMatch[1]), longitude: parseFloat(altMatch[2]) };
      }
      return { latitude: null, longitude: null };
    };

    const generateLink = (category, id, latitude, longitude, name, imageList) => {
      const encodedName = encodeURIComponent(name);
      const encodedImageList = encodeURIComponent(imageList);
      switch (category) {
        case 'Game':
          return `/category/do/omniverse/${id}?latitude=${latitude}&longitude=${longitude}&item=${encodedName}&name=${encodedName}&id=${id}&imageList=${encodedImageList}`;
        case 'Shop':
          return `/category/shop/makati/${id}?latitude=${latitude}&longitude=${longitude}&item=${encodedName}&name=${encodedName}&id=${id}&imageList=${encodedImageList}`;
        case 'Gallery':
          return `/category/see/glorietta/${id}?latitude=${latitude}&longitude=${longitude}&item=${encodedName}&name=${encodedName}&id=${id}&imageList=${encodedImageList}`;
        case 'Restaurant':
          return `/category/eat/LittleTokyo/${id}?latitude=${latitude}&longitude=${longitude}&item=${encodedName}&name=${encodedName}&id=${id}&imageList=${encodedImageList}`;
        case 'Hotel':
          return `/category/stay/xyz/${id}?latitude=${latitude}&longitude=${longitude}&name=${encodedName}&id=${id}&imageList=${encodedImageList}`;
        default:
          return '#';
      }
    };

    const results = [
      ...state.results.businesses.map((business) => {
        const { latitude, longitude } = extractLatLong(business.maplink);
        return {
          id: business.busid,
          name: business.storename,
          location: business.barangay,
          link: latitude !== null && longitude !== null ? generateLink(business.category, business.busid, latitude, longitude, business.storename, business.pictureimage) : '#'
        };
      }),
      ...state.results.products.map((product) => {
        const business = state.results.productBusinesses.find((b) => b.busid === product.busid);
        if (!business) return null;
        const { latitude, longitude } = extractLatLong(business.maplink);
        return {
          id: product.id,
          name: product.productname,
          location: business.storename,
          link: latitude !== null && longitude !== null ? generateLink(product.category, product.busid, latitude, longitude, business.storename, product.uploadedphotos) : '#'
        };
      }).filter(Boolean),
      ...state.results.activities.map((activity) => {
        const { latitude, longitude } = extractLatLong(activity.maplink);
        return {
          id: activity.id,
          name: activity.activitytitle,
          location: activity.address,
          link: latitude !== null && longitude !== null ? `/category/tour/central/${activity.id}?latitude=${latitude}&longitude=${longitude}&item=${encodeURIComponent(activity.activitytitle)}&name=${encodeURIComponent(activity.activitytitle)}&id=${activity.id}&imageList=${encodeURIComponent(activity.activityphoto)}` : '#'
        };
      }),
      ...state.results.events.map((event) => {
        const { latitude, longitude } = extractLatLong(event.maplink);
        return {
          id: event.id,
          name: event.title,
          location: '',
          link: latitude !== null && longitude !== null ? `/calendar` : '#'
        };
      })
    ];

    return results.filter((item) => {
      if (!item) return false;
      const query = state.query.toLowerCase();
      return (
        (item.name && item.name.toLowerCase().includes(query)) ||
        (item.location && item.location.toLowerCase().includes(query))
      );
    });
  }
}

  
});
