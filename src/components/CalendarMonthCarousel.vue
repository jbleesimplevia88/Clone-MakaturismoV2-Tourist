<script>
import { ref, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import card1 from '@/assets/images/Top 10/Card 1.png';
import card2 from '@/assets/images/Top 10/Card 2.png';
import card3 from '@/assets/images/Top 10/Card 3.png';
import card4 from '@/assets/images/Top 10/Card 4.png';
import card5 from '@/assets/images/Top 10/Card 5.png';
import card6 from '@/assets/images/Top 10/Card 6.png';
import card7 from '@/assets/images/Top 10/Card 7.png';
import card8 from '@/assets/images/Top 10/Card 8.png';
import card9 from '@/assets/images/Top 10/Card 9.png';
import card10 from '@/assets/images/Top 10/Card 10.png';

// Setup Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const slides = [
  { imgSrc: card1, name: "Glorietta", date: "01 April, '24", location: "Glorietta, Ayala Center, Makati City", link: "/category/see/glorietta" },
  { imgSrc: card2, name: "Ayala Museum", date: "01 April, '24", location: "3rd flr,Circuit Lane, AP Reyes St., Makati, Metro Manila", link: "" },
  { imgSrc: card3, name: "Greenbelt", date: "01 April, '24", location: "Esperanza St. corner Makati Ave., Ayala Center, Makati, Metro Manila", link: "" },
  { imgSrc: card4, name: "Poblacion", date: "01 April, '24", location: "Poblacion 1210, Makati, Metro Manila", link: "" },
  { imgSrc: card5, name: "Ayala Triangle", date: "01 April, '24", location: "Paseo De Roxas St Cor Makati Ave, Cor Ayala Ave, Makati, 1209 Metro Manila", link: "" },
  { imgSrc: card6, name: "Guadalupe Church", date: "01 April, '24", location: "Guadalupe Commerical Complex, Makati, Metro Manila", link: "" },
  { imgSrc: card7, name: "Salcedo Saturday Market", date: "01 April, '24", location: "Salcedo Village, Jaime C. Velasquez Park, Makati, Metro Manila", link: "" },
  { imgSrc: card8, name: "Washington Sycip Park", date: "01 April, '24", location: "Legazpi Street, Legazpi Village, Makati, 1229 Metro Maynila", link: "" },
  { imgSrc: card9, name: "New World Makati ", date: "01 April, '24", location: "Esperanza STreet corner Makati Avenue, Ayala Center, Makati, Metro Manila", link: "" },
  { imgSrc: card10, name: "Makati Diamond Residences", date: "01 April, '24", location: "118 Legazpi Street, Legazpi Village, Makati, Metro Manila", link: "" },
];

const isMobile = ref(window.innerWidth <= 768);
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

window.addEventListener('resize', updateIsMobile);

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

const modules = [Navigation, Pagination, Scrollbar, A11y];

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      slides,
      isMobile,
      modules
    };
  }
};
</script>

<template>
  <swiper :modules="modules" :slides-per-view="isMobile ? 1 : 4" :slides-per-group="isMobile ? 1 : 2" :space-between="20"
    navigation :pagination="{ clickable: true, dynamicBullets: true }" :scrollbar="{ draggable: false }" class="mx-5">
    <template v-for="(slide, index) in slides" :key="index">
      <swiper-slide>
        <RouterLink :to="slide.link">
          <div class="relative my-8 mb-[3rem] w-350 h-350">
            <img :src="slide.imgSrc" alt="" class="object-cover w-full h-full">
            <div class="absolute bottom-0 left-0 right-0 p-2 text-white"
              style="background: linear-gradient(to bottom, transparent, #102E61 100%, #102E61 90%); height: 120px;">
              <h1 class="absolute right-0 font-bold text-xl bottom-14 left-5 mb-5">{{ slide.name }}</h1>
              <h1 class="flex-end absolute right-0 font-bold text-xl mb-5 pr-5 pt-3">{{ slide.date }}</h1>
              <div class="flex items-center location-info">
                <img class="absolute right-0 text-xl bottom-9 left-5" style="filter: invert(1); width:auto; height:20px;"
                  src="@/assets/images/Carousel/pin.png" alt="">
                <span class="absolute right-0 text-sm bottom-8 left-11">{{ slide.location }}</span>
              </div>
            </div>
          </div>
        </RouterLink>
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
  .text-sm {
    @apply text-xs;
  }

  .md\:text-base {
    @apply text-sm;
  }

  .lg\:text-lg {
    @apply text-base;
  }
}
</style>