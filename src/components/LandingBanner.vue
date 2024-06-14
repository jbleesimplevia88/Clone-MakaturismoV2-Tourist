<template>
  <div class="relative min-h-screen">
    <LandingBannerCarousel v-if="images.length" class="h-screen z-neg-1" :images="images" />

    <!-- Slogan -->
    <div
      style="position: absolute; top: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to top, transparent, #102E61 90%, #102E61 70%);">
    </div>

    <!-- Bottom gradient div -->
    <div
      style="position: absolute; bottom: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 70%, #102E61 100%);">
    </div>

    <div class="absolute inset-0 flex flex-col justify-center px-10 pb-40 text-white top-40 lg:top-0 lg:ml-[120px]">
      <p v-if="content" class="text-2xl text-yellow-500 poppins">{{ content.subtitle }}</p>
      <h1 v-if="content" class="mb-4 text-6xl font-bold">{{ content.title }}</h1>
      <p v-if="content" class="mb-4 text-md" v-html="content.description"></p>
      <p v-if="content && content.socialmedia.length" class="mb-4 text-md">
        Come and experience my Makati, our 
        <a :href="`https://${content.socialmedia[0]}`" target="_blank" class="text-blue-400 text-decoration-none">{{ content.title }}</a>
      </p>
    </div>

    <!-- Explore the City -->
    <div class="absolute inset-x-0 flex justify-center bottom-20 lg:bottom-1/4">
      <h1 class="text-2xl lg:text-5xl font-bold text-white">
        Explore the City!
      </h1>
    </div>

    <!-- Main nav -->
    <CategoryContent />
    <!-- Main nav -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useHomepageStore } from '@/stores/homepage';
import LandingBannerCarousel from './LandingBannerCarousel.vue';
import CategoryContent from './CategoryContent.vue';

const homepageStore = useHomepageStore();

const content = computed(() => homepageStore.content);
const images = computed(() => homepageStore.images);

onMounted(() => {
  homepageStore.fetchContent();
});

const isMobile = ref(window.innerWidth <= 768);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

window.addEventListener('resize', updateIsMobile);

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style scoped>
.swiper-container {
  height: 100%;
}

.location-card {
  padding: 2px;
  margin: 0;
  text-align: center;
}

.location-card img {
  width: 30%;
  height: auto;
}

.location-card:hover {
  background-color: #008EE4;
  transition: filter 0.3s ease;
}

.location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.location-card h6 {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: black;
}

.location-card:hover h6 {
  color: white;
  transition: filter 0.3s ease;
}

.m-location-card {
  width: auto;
  padding: 4px;
  margin: 0;
  text-align: center;
}

.m-location-card img {
  width: 40%;
  height: auto;
}

.m-location-card:hover {
  background-color: #008EE4;
  transition: filter 0.3s ease;
}

.m-location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.m-location-card h6 {
  font-size: 12px;
  color: black;
}

.m-location-card:hover h6 {
  color: white;
  transition: filter 0.3s ease;
}

.z-neg-1 {
  z-index: -1;
}
</style>
