<template>
  <swiper
    :modules="[Navigation, Pagination, Scrollbar, A11y]"
    :slides-per-view="isMobile ? 1 : 4"
    :slides-per-group="isMobile ? 1 : 2"
    :space-between="20"
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    :scrollbar="{ draggable: false }"
    class="mx-5"
  >
    <template v-for="(slide, index) in slides" :key="index">
      <swiper-slide @click="() => navigateToPlace(slide, router)">
        <div class="relative my-10 mb-[3rem] w-330 h-330">
          <img :src="getImageUrl(slide.image)" alt="Image" class="object-cover w-full h-[380px]" @error="handleImageError" @load="handleImageLoad" />
          <div class="absolute bottom-0 left-0 right-0 p-2 text-white" style="background: linear-gradient(to bottom, transparent, #102E61 100%, #102E61 90%); height: 110px;">
            <div class="items-center lg:ml-2 ml-3">
              <div class="lg:flex items-center space-x-2">
                <h1 class="font-bold text-xl ">{{ slide.name }}</h1>
              </div>
              <div class="flex">
                <img class=" lg:ml-0" style="filter: invert(1); width:auto; height:20px;" src="@/assets/images/Carousel/pin.png" alt="pin" />
                <h1 class=" mb-2">{{ slide.address }}</h1>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </template>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTopPlacesStore } from '@/stores/topPlaces';
import { useRouter } from 'vue-router';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const topPlacesStore = useTopPlacesStore();
const router = useRouter();

const isMobile = ref(window.innerWidth <= 768);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
  topPlacesStore.fetchTopPlaces().then(() => {
    console.log('Top Businesses after fetch:', topPlacesStore.topBusinesses);
    console.log('Top Activities after fetch:', topPlacesStore.topActivities);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const handleImageError = (event) => {
  console.error('Image Load Error:', event.target.src);
};

const handleImageLoad = (event) => {
  console.log('Image Loaded:', event.target.src);
};

const slides = computed(() => {
  const businesses = topPlacesStore.topBusinesses.map(business => ({
    ...business,
    name: business.storename,
    image: business.pictureimage ? business.pictureimage.split('|').filter(img => img)[0] : '',
    type: 'business',
  }));
  const activities = topPlacesStore.topActivities.map(activity => ({
    ...activity,
    name: activity.activitytitle,
    image: activity.activitycoverphoto,
    type: 'activity',
  }));
  return [...businesses, ...activities];
});

const navigateToPlace = (place, router) => {
  topPlacesStore.navigateToPlace(place, router);
};
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
