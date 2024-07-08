<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { useCalendarEventsStore } from '@/stores/calendarEvents';
import { useRouter } from 'vue-router';

const store = useCalendarEventsStore();
const router = useRouter();

const getTruncatedDescription = (description, wordLimit = 25) => {
  if (!description) return '';
  const words = description.split(' ');
  if (words.length <= wordLimit) return description;
  return words.slice(0, wordLimit).join(' ') + '...';
};

onBeforeMount(async () => {
  await store.fetchPastEvents();
  console.log('Nearest Events after onBeforeMount:', store.pastEvents);
});

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const isMobile = ref(window.innerWidth <= 768);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});
</script>

<template>
  <swiper :modules="[Navigation, Pagination, Scrollbar, A11y]" :slides-per-view="isMobile ? 1 : 4"
    :slides-per-group="isMobile ? 1 : 2" :space-between="20" navigation
    :pagination="{ clickable: true, dynamicBullets: true }" :scrollbar="{ draggable: false }" class="mx-5">
    <template v-for="event in store.pastEvents" :key="event.id">
      <swiper-slide @click="() => store.navigateToEvent(event, router)">
        <!-- Image container -->
        <div class="relative my-7 mb-[3rem] w-350 h-350">
          <img :src="store.getImageUrl(event.coverphoto)" alt="Cover Photo" class="object-cover w-full h-[400px]">
        <!-- Name and Location text -->
        <div class="absolute bottom-0 left-0 right-0 p-2 text-white"
            style="background: linear-gradient(to bottom, transparent, #102E61 100%, #102E61 90%); height: 150px;">
            <!-- Name -->
            <div class="lg:flex lg:justify-between items-center">
              <div class="lg:flex items-center space-x-2">
                <h1 class="font-bold text-xl ">{{ event.title }}</h1>
               
                <div class="flex  ">
                  <img class="text-xl -ml-3 lg:ml-0" style="filter: invert(1); width:auto; height:20px;"
                    src="@/assets/images/Carousel/pin.png" alt="">
                  <h1 class="font-bold text-xl mb-2">{{ event.date }}</h1>

                </div>

              </div>

            </div>

            <!-- Description -->
            <div class="flex items-center location-info  ">
              <span class="absolute right-0 text-sm bottom-8 left-6 mr-4 ">{{ getTruncatedDescription(event.description)
              }}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </template>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

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
