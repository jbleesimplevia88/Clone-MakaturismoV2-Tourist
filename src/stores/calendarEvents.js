import { defineStore } from 'pinia';
import axios from 'axios';

export const useCalendarEventsStore = defineStore('calendarEvents', {
  state: () => ({
    events: [],
    selectedEvent: null,
    nearestEvents: [],
  }),
  actions: {
    selectEvent(event) {
      this.selectedEvent = event;
    },
    setEvents(events) {
      this.events = events;
    },
    async fetchNearestEvents() {
      try {
        const response = await axios.get('/calendar-events');
        if (response.data && response.data.nearestEvent) {
          this.nearestEvents = response.data.nearestEvent;
        } else {
          this.nearestEvents = [];
        }
      } catch (error) {
        console.error('API request error:', error);
        this.nearestEvents = [];
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
    navigateToEvent(event, router) {
      this.selectEvent(event);
      const { latitude, longitude } = this.extractLatLong(event.maplink);
      if (latitude !== null && longitude !== null) {
        router.push({
          name: 'currentevents',
          params: { id: event.id },
          query: {
            latitude,
            longitude,
            event: event,
            name: event.title,
            id: event.id,
          },
        });
      } else {
        console.error('Latitude or longitude not available');
      }
    }
  },
});
