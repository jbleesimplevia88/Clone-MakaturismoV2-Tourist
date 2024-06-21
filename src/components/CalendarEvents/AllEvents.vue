<template>
    <NavBar />
    <div class="bg-[#102E61] w-[100%] h-50">
      <div class="pt-[7rem] pb-[1.8rem]">
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 mt-4 ml-4 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </router-link>
        <button class="flex pl-[3rem] pr-[1.5rem] py-1.5 text-3xl font-bold text-blue-900 bg-white shadow" style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">ALL EVENTS IN MAKATI</button>
      </div>
    </div>
    <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min" style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">
      <h1 :class="{ 'p-2 mx-5 ml-10 text-base font-bold': isMobile, 'p-2 mx-6 ml-5 text-lg font-bold': !isMobile }">Events</h1>
    </div>
    <div class="px-3 lg:px-[5rem] pb-5 pt-5">
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
          <div v-for="(item, index) in store.allEvents" :key="index" class="relative bg-[#102E61] from [#102E61] rounded-[0.5rem]">
            <div class="relative">
              <img class="w-full h-[250px] object-cover rounded-t" :src="store.getImageUrl(item.coverphoto)" alt="">
              <div class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent"></div>
              <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.title }}</p>
              <p class="absolute bottom-2 left-2 text-white text-xs">{{ item.date }}</p>
            </div>
            <div class="p-2 w-full">
              <p class="text-white text-xs line-clamp-3">{{ item.description }}</p>
            </div>
            <div class="p-1 flex justify-end items-center">
              <button @click="navigateToEvent(item)" class="flex items-center px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300 text-nowrap text-sm">
                <span>Read More</span>
                <span class="ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue';
  import { ref, onMounted } from 'vue';
  import { useCalendarEventsStore } from '@/stores/calendarEvents';
  import { useRouter } from 'vue-router';
  
  const store = useCalendarEventsStore();
  const router = useRouter();
  
  const isMobile = ref(window.innerWidth <= 768);
  const updateIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  
  const navigateToEvent = (event) => {
    store.navigateToEvent(event, router);
  };
  
  onMounted(() => {
    window.addEventListener('resize', updateIsMobile);
    store.fetchAllEvents();
  });
  </script>
  
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
  