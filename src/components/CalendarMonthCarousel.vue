<script setup>
import { ref, onMounted, reactive, onBeforeMount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { useCalendarEventsStore } from '@/stores/calendarEvents';
import { useRouter } from 'vue-router';

const store = useCalendarEventsStore();
const router = useRouter();

const model = reactive({
  events: [],
});

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
};

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const extractLatLong = (mapLocation) => {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = mapLocation.match(regex);
  if (match && match.length >= 3) {
    const latitude = parseFloat(match[1]);
    const longitude = parseFloat(match[2]);
    return { latitude, longitude };
  }
  // Try another regex pattern for different URL formats
  const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
  const altMatch = mapLocation.match(altRegex);
  if (altMatch && altMatch.length >= 3) {
    const latitude = parseFloat(altMatch[1]);
    const longitude = parseFloat(altMatch[2]);
    return { latitude, longitude };
  }
  // If no match is found, return null values
  return { latitude: null, longitude: null };
};

const navigateToEvent = (event) => {
  console.log('Navigating to Event:', event);
  store.selectEvent(event);
  const { latitude, longitude } = extractLatLong(event.maplink);
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
};

const getCalendar = async () => {
  try {
    const response = await axios.post('/viewallCalendar');
    console.log('API Response:', response);
    if (response.data && response.data.calendarevent) {
      const parsedEvents = JSON.parse(response.data.calendarevent);
      console.log('Parsed Events:', parsedEvents);
      store.setEvents(parsedEvents);
      model.events = parsedEvents;
      console.log('Model Events after API call:', model.events);
    } else {
      model.events = [];
      console.log('No events found in response');
    }
  } catch (error) {
    console.error('API request error:', error);
    model.events = [];
  }
};

const getTruncatedDescription = (description) => {
  if (!description) return '';
  const words = description.split(' ');
  if (words.length <= 30) return description;
  return words.slice(0, 30).join(' ') + '...';
};

onBeforeMount(async () => {
  await getCalendar();
  console.log('Model Events after onBeforeMount:', model.events);
});

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const isMobile = ref(window.innerWidth <= 768);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});
</script>

<template>
  <div v-if="model.events.length">
    <swiper :modules="[Navigation, Pagination, Scrollbar, A11y]" :slides-per-view="isMobile ? 1 : 4" :slides-per-group="isMobile ? 1 : 2" :space-between="20" navigation :pagination="{ clickable: true, dynamicBullets: true }" :scrollbar="{ draggable: false }" class="mx-5">
      <template v-for="event in model.events" :key="event.id">
        <swiper-slide @click="() => navigateToEvent(event)">
          <div class="relative my-8 mb-[3rem] w-[480px] h-[350px]">
            <img :src="getImageUrl(event.coverphoto)" alt="Cover Photo" class="object-cover w-full h-full">
            <div class="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-b from-transparent to-[#102E61] h-[120px]">
              <div class="flex justify-between">
                <h1 class="font-bold text-xl">{{ event.title }}</h1>
                <h1 class="font-bold text-xl">{{ formatDate(event.startat) }}</h1>
              </div>
              <span class="text-sm block mt-3">{{ getTruncatedDescription(event.description) }}</span>
            </div>
          </div>
        </swiper-slide>
      </template>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
  <div v-else>
    <p>No events found</p>
  </div>
</template>

<style scoped>
.fixed-width-300 {
  width: 300px;
}
@media (max-width: 640px) {
  .md\:text-base {
    @apply text-sm;
  }
  .lg\:text-lg {
    @apply text-base;
  }
}
</style>
