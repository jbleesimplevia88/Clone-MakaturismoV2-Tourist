<template>
  <div class="relative min-h-screen">
    <div>
      <swiper :modules="modules" :effect="'fade'" :slides-per-view="1" :autoplay="{ delay: 3000, disableOnInteraction: false }" loop>
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="" class="object-cover w-screen h-screen">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useHomepageStore } from '@/stores/homepage';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import Swiper Fade Effect module styles

const homepageStore = useHomepageStore();

const images = computed(() => homepageStore.images);
const modules = [Autoplay, Pagination, EffectFade];

onMounted(() => {
  homepageStore.fetchContent();
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
