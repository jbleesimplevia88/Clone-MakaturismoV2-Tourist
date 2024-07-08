import { defineStore } from 'pinia';
import axios from 'axios';

export const useTopPlacesStore = defineStore('topPlaces', {
  state: () => ({
    topBusinesses: [],
    topActivities: [],
    selectedPlace: null,
  }),
  actions: {
    selectPlace(place) {
      this.selectedPlace = place;
    },
    async fetchTopPlaces() {
      try {
        const response = await axios.get('/top-places');
        if (response.data) {
          this.topBusinesses = response.data.top_businesses;
          this.topActivities = response.data.top_activities;
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    },
    async fetchBusinessDetails(id) {
      try {
        const response = await axios.get(`/getStore/${id}`);
        console.log('Business response:', response.data);
        const storeparse = JSON.parse(response.data.message);
        return {
          storename: storeparse.storename,
          description: storeparse.description,
          address: storeparse.address,
          storehours: storeparse.storehours,
          storesched: storeparse.storesched,
          storecontact: storeparse.storecontact,
          ratings: JSON.parse(response.data.ratings),
          imageList: storeparse.pictureimage ? storeparse.pictureimage.split('|') : [],
        };
      } catch (error) {
        console.error('Failed to fetch business details:', error);
        return null;
      }
    },
    async fetchActivityDetails(id) {
      try {
        const response = await axios.get(`/viewactivityperid/${id}`);
        console.log('Activity response:', response.data);
        const activityDetails = JSON.parse(response.data.peractivity);
        const coverPhotoUrl = `${import.meta.env.VITE_STORAGE_BASE_URL}/${activityDetails.activitycoverphoto}`;
        return {
          storename: activityDetails.activitytitle,
          description: activityDetails.description,
          address: activityDetails.address,
          storehours: activityDetails.actsched,
          storesched: activityDetails.actsched,
          storecontact: activityDetails.contactno,
          ratings: [], // Assuming no ratings for activities
          imageList: [coverPhotoUrl],
        };
      } catch (error) {
        console.error('Failed to fetch activity details:', error);
        return null;
      }
    },
    getImageUrl(fileName) {
      return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
    },
    extractLatLong(mapLocation) {
      const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = mapLocation.match(regex);
      if (match && match.length >= 3) {
        const latitude = parseFloat(match[1]);
        const longitude = parseFloat(match[2]);
        return { latitude, longitude };
      }
      const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
      const altMatch = mapLocation.match(altRegex);
      if (altMatch && altMatch.length >= 3) {
        const latitude = parseFloat(altMatch[1]);
        const longitude = parseFloat(altMatch[2]);
        return { latitude, longitude };
      }
      return { latitude: null, longitude: null };
    },
    navigateToPlace(place, router) {
      this.selectPlace(place);
      const { latitude, longitude } = this.extractLatLong(place.maplink);
      if (latitude !== null && longitude !== null) {
        router.push({
          name: 'topPlaceDetail',
          params: { id: place.busid || place.id },
          query: {
            latitude,
            longitude,
            name: place.name,
            imageList: place.pictureimage || place.activitycoverphoto,
            type: place.busid ? 'business' : 'activity',
          },
        });
      } else {
        console.error('Latitude or longitude not available');
      }
    },
  },
});
