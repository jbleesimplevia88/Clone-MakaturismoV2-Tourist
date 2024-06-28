<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300"
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">        <!-- Iterate over images array for carousel display -->
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image" alt="Carousel image" class="w-full h-[15rem] lg:h-[30rem] rounded-xl " />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.id); 
const images = ref([]); 
const currentIndex = ref(0); 
const intervalId = ref(null); 

const fetchCoverPhoto = async () => {
  try {
    const response = await axios.get(`/viewactivityperid/${id.value}`); 
    const activityDetails = JSON.parse(response.data.peractivity);
    const photos = activityDetails.activityphoto.split('|').map(photo => `${import.meta.env.VITE_STORAGE_BASE_URL}/${photo}`);
    images.value.push(...photos); 
  } catch (error) {
    console.error('Failed to fetch cover photo:', error); 
  }
};


const startCarousel = () => {
  intervalId.value = setInterval(() => {
    next(); 
  }, 3000);
};

const prev = () => {
  if (images.value.length > 1) { 
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  }
};

const next = () => {
  if (images.value.length > 1) { 
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }
};

onMounted(() => {
  fetchCoverPhoto();
  startCarousel();
});
</script>


