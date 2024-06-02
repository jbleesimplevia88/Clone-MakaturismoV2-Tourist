<template>
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300"
             :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(image, index) in slicedImages" :key="index" class="w-full flex-shrink-0">
            <img :src="getImageUrl(image)" alt="carousel image" class="w-full h-[15rem] lg:h-[30rem] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  items: String  // Accepts a pipe-separated string of image filenames
});

const currentIndex = ref(0);
let intervalId = null;

// Compute sliced images directly from the passed `items` prop
const slicedImages = computed(() => {
  if (props.items) {
    return props.items.split('|').slice(0, 3);  // Adjust the slice as needed
  }
  return [];
});

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const startCarousel = () => {
  intervalId = setInterval(() => {
    next();
  }, 3000); // Change image every 3 seconds
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slicedImages.value.length) % slicedImages.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slicedImages.value.length;
};

onMounted(() => {
  startCarousel();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

  
  <style scoped>
  /* Styles can be adjusted based on your preference */
  </style>
  