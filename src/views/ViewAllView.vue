<template>
  <NavBar />
  <div class="bg-[#102E61] w-[100%] h-50">
    <div class="pt-[7rem] pb-[1.8rem]">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 mt-4 ml-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
      </router-link>
      <button class="flex pl-[3rem] pr-[1.5rem] py-1.5 text-3xl font-bold text-blue-900 bg-white shadow" style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">
          TOP PLACES IN MAKATI
        </button>
    </div>
  </div>
  <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min">
  </div>
  <div class="px-3 lg:px-[2rem] lg:w-[80%]  pb-5">
    <swiper :modules="[Navigation, Pagination, Scrollbar, A11y]" :slides-per-view="isMobile ? 1 : 4" :slides-per-group="isMobile ? 1 : 2" :space-between="20" navigation :pagination="{ clickable: true, dynamicBullets: true }" :scrollbar="{ draggable: false }"
      class="mx-5">
      <template v-for="(slide, index) in slides" :key="index">
          <swiper-slide @click="() => navigateToPlace(slide, router)">
            <div class="relative my-4 mb-[3rem] w-300 h-300">
              <img :src="getImageUrl(slide.image)" alt="Image" class="object-cover w-full h-[350px]" @error="handleImageError" @load="handleImageLoad" />
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
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    onBeforeUnmount,
    computed
  } from 'vue';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y
  } from 'swiper/core';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import {
    useTopPlacesStore
  } from '@/stores/topPlaces';
  import {
    useRouter
  } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
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
    width: 280px;
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
