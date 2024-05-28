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
  import { useCartStore } from '@/stores/toShopCart';
  
  const cartStore = useCartStore();
  const currentIndex = ref(0);
  let intervalId = null;
  
  const images = computed(() => cartStore.shopData);
  const slicedImages = computed(() => {
    if (images.value && images.value.pictureimage) {
      return images.value.pictureimage.split('|').slice(0, 3); 
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
  