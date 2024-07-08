<template>
  <div class="flex relative md:pt-[80px] justify-center w-full">
    <div class="relative w-full">
      <div class="bg-[#102E61] h-[100%] lg:h-[100%]" style="position: absolute; top: 0px; left: 0; width: 100%;"></div>
      <div class="relative flex flex-col pl-0 lg:pl-16">
        <div class="relative flex flex-col pl-0 lg:pl-14">
          <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
            <router-link to="/">
              <a class=" flex items-center">
                <a class=" flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor" class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1 cursor-pointer text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                </a>
              </a>
            </router-link>
          </div>
          <div class="lg:pr-[7rem] justify-center flex w-full">
            <Carousel :imageUrls="imageUrls" class="mb-10 w-full lg:ml-9" />
          </div>
          <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
            <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ storedetails.storename }}</h1>
            <p class="text-md text-white text-left pb-5">Gallery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative mx-6 px-3 lg:px-32 pt-5">
    <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
    <p class="text-lg text-justify text-black pb-5">{{ storedetails.description }}</p>
    <div class="flex flex-row">
      <div class="pt-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <p class="text-lg md:text-black text-left pl-2.5 pb-5 pt-3">{{ storedetails.address }}</p>
    </div>
    <div class="flex flex-row">
      <div class="pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div class="flex flex-col pl-2.5">
        <p class="text-lg md:text-black text-left pb-5">{{ storedetails.storehours }}|{{ storedetails.storesched }}</p>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="pt-0.25">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </div>
      <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{ storedetails.storecontact }}</p>
    </div>
  </div>
  <div class="relative flex flex-col">
    <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
      <div>
        <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
        <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />
      </div>
      <hr style="border-top: 1px solid black">
    </div>
    <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
      <div class="relative border-2 border-gray-200 rounded-md px-3 py-3" v-for="(item, index) in storeratings" :key="index">
        <div class="flex flex-row">
          <div class="pt-[0.125rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div class="flex flex-col">
            <p class="relative left-2 text-black text-lg xl:text-xl font-medium pb-3">{{ item.Comments }}</p>
            <p class="relative bottom-4 left-2 text-gray-600 text-lg"></p>
          </div>
        </div>
        <div class="p-2 w-full">
          <p class="text-justify text-black text-md leading-7"></p>
        </div>
      </div>
    </div>
    <div v-if="showSeeMoreButton || showSeeLessButton" class="flex items-center justify-center pr-[5rem] mt-5 mb-10">
      <div v-if="showSeeMoreButton">
        <div>
          <div style="position: absolute; bottom: 0; left: 0; height: 24%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);"></div>
        </div>
        <div class="absolute bottom-3">
          <button @click="seeMore" class="left-0 right-0 px-3 py-3 border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
            <span>See More</span>
          </button>
        </div>
      </div>
      <div v-if="showSeeLessButton" class="mb-10">
        <div class="absolute bottom-8">
          <button @click="seeLess" class="px-3 py-3 border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
            <span>See Less</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTopPlacesStore } from '@/stores/topPlaces';
import MapRenderer from "@/components/MapRenderer.vue";
import Carousel from "@/components/ToDoCarousel.vue";
import { useRouter, useRoute } from 'vue-router';

const topPlacesStore = useTopPlacesStore();
const route = useRoute();

const storedetails = ref({});
const storeratings = ref([]);
const imageUrls = ref([]);
const showSeeMoreButton = ref(false);
const showSeeLessButton = ref(false);

const latitude = ref(route.query.latitude);
const longitude = ref(route.query.longitude);
const name = ref(route.query.name);

const fetchDetails = async () => {
  if (route.query.type === 'business') {
    const response = await topPlacesStore.fetchBusinessDetails(route.params.id);
    if (response) {
      storedetails.value = response;
      storeratings.value = response.ratings;
      imageUrls.value = response.imageList;
    }
  } else if (route.query.type === 'activity') {
    const response = await topPlacesStore.fetchActivityDetails(route.params.id);
    if (response) {
      storedetails.value = response;
      storeratings.value = response.ratings || [];
      imageUrls.value = response.imageList;
    }
  }
};

onMounted(() => {
  fetchDetails();
});
</script>

<style scoped>
/* Your styles here */
</style>
