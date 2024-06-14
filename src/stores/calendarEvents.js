import { defineStore } from 'pinia';

export const useCalendarEventsStore = defineStore('calendarEvents', {
  state: () => ({
    events: [],
    selectedEvent: null,
  }),
  actions: {
    selectEvent(event) {
      this.selectedEvent = event;
    },
    setEvents(events) {
      this.events = events;
    }
  },
});
