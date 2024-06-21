<template>
  <div v-if="event" class="pt-[57px] md:pt-[80px]">
    <div class="relative">
      <div class="bg-[#102E61] h-[101%] lg:h-[110%]" style="position: absolute; top: 0; left: 0px; width: 100%;"></div>
      <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-16 flex items-center z-[1]">
        <div class="w-full flex flex-col lg:mr-20 lg:ml-0 ml-2 mt-2">
          <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
            <router-link to="/calendar">
              <a class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                  style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor"
                  class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1 cursor-pointer text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </a>
            </router-link>
          </div>
          <div class="overflow-hidden w-full">
            <div class="relative">
              <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(imageUrl, index) in imageUrls" :key="index" class="w-full flex-shrink-0">
                  <img :src="`${localimageUrl}${imageUrl}`" alt="carousel image"
                    class="w-full h-[15rem] lg:h-[30rem] rounded-xl" />
                </div>
              </div>
              <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                &lt;
              </button>
              <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                &gt;
              </button>
            </div>
          </div>
          <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
            <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ event.title }}</h1>
            <p class="text-md text-white text-left pb-5"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative mx-6 px-3 lg:px-32 pt-5">
      <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
      <p class="text-lg text-justify text-black pb-5">{{ event.description }}</p>
      <div class="flex flex-col">
        <p class="text-lg md:text-black text-left pt-3"><strong>Start:</strong> {{ event.startat }}</p>
        <p class="text-lg md:text-black text-left pb-5 pt-3"><strong>End:</strong> {{ event.endsat }}</p>
      </div>
      <div class="flex flex-row">
        <div class="pt-1">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex flex-col pl-2.5">
          <p class="text-lg md:text-black text-left pb-5">{{ event.schedule }}</p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="pt-0.25">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>
        <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{ event.contact }}</p>
      </div>
    
    </div>
    <div class="relative flex flex-col">
      <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
        <div>
          <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
          <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />
        </div>
        <hr style="border-top: 1px solid black">
        <div>
          <h1 class="font-bold text-lg text-black text-left pt-10 pb-4" v-for="(item, index) in storereviews" :key="index">
            {{item.overall}} Ratings ({{item.countreview}} reviews)
            <div v-if="item.countreview === 0">
              No reviews yet
            </div>
          </h1>
          <div class="grid lg:grid-cols-2" v-for="(item, index) in storeratings" :key="index">
            <div class="flex justify-evenly">
              <p class="text-lg text-black text-left pb-5">{{item.productid}}</p>
              <div class="my-2 mx-2 flex font-bold">
                <div class="h-2 w-[14rem] rounded-full bg-black">
                  <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                </div>
              </div>
              <p class="text-lg text-black text-left pb-5">{{item.averagerate}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
        <!-- Feedback Content -->
        <div class="relative border-2 border-gray-200 rounded-md px-3 py-3" v-for="(item, index) in storeratings"
          :key="index">
          <div class="flex flex-row">
            <div class="pt-[0.125rem]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div class="flex flex-col">
              <p class="relative left-2 text-black text-lg xl:text-xl font-medium pb-3">
                {{ item.Comments }}
              </p>
              <p class="relative bottom-4 left-2 text-gray-600 text-lg">
              </p>
            </div>
          </div>
          <div class="p-2 w-full">
            <p class="text-justify text-black text-md leading-7"></p>
          </div>
        </div>
        <div v-if="showSeeMoreButton || showSeeLessButton" class="flex items-center justify-center pr-[5rem] mt-5 mb-10">
          <div v-if="showSeeMoreButton">
            <div>
              <div
                style="position: absolute; bottom: 0; left: 0; height: 24%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);">
              </div>
            </div>
            <div class="absolute bottom-3">
              <button @click="seeMore"
                class="left-0 right-0 px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                <span>See More</span>
              </button>
            </div>
          </div>
          <div v-if="showSeeLessButton" class="mb-10">
            <div class="absolute bottom-8">
              <button @click="seeLess"
                class=" px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                <span>See Less</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>No event selected</p>
  </div>
</template>

<script setup>
import { useCalendarEventsStore } from '@/stores/calendarEvents';
import { useRoute } from 'vue-router';
import { computed, watch, ref, onMounted, onBeforeUnmount,reactive  } from 'vue';
import MapRenderer from "@/components/MapRenderer.vue";

const id = ref('');
const store = useCalendarEventsStore();
const route = useRoute();
const props = defineProps({
    latitude: Number,
    longitude: Number,
    name: String,
    id: Number,
    item: String,
    imageList: String,
});


const getId = async () => {
  try {
    await store.fetchEventById(id.value);
  } catch (error) {
    console.error("Failed to fetch event by ID:", error);
  }
};

const event = computed(() => store.selectedEvent);
const imageUrls = computed(() => event.value ? event.value.headerphotos.split('|') : []);
const localimageUrl = `${import.meta.env.VITE_STORAGE_BASE_URL}/`;

const currentIndex = ref(0);
let intervalId = null;

const startCarousel = () => {
  intervalId = setInterval(() => {
    next();
  }, 3000); // Change image every 3 seconds
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + imageUrls.value.length) % imageUrls.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % imageUrls.value.length;
};

watch(
    () => route.params.id,
    (newId) => {
        if (newId) {
            id.value = newId;
            getId();
        }
    }, {
    immediate: true
}
);

onMounted(() => {
  // Start the automatic carousel change on component mount
  startCarousel();
});

onBeforeUnmount(() => {
  // Stop the carousel interval when the component is destroyed
  clearInterval(intervalId);
});

onMounted(getId);

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
