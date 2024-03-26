<template>
  <swiper :modules="modules" :slides-per-view="isMobile ? 1 : 4" :slides-per-group="isMobile ? 1 : 2" :space-between="20"
    navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: false }" class="mx-5">
    <template v-for="(slide, index) in slides" :key="index">
      <swiper-slide class="">
        <!-- Image container -->
        <RouterLink :to="getLinkWithCoordinates(slide)">
          <div class="relative my-20 w-350 h-350">
            <img :src="slide.imgSrc" alt="" class="object-cover w-full h-full">
            <!-- Name and Location text -->
            <div class="absolute bottom-0 left-0 right-0 p-2 text-white"
              style="background: linear-gradient(to bottom, transparent, #102E61 100%, #102E61 90%); height: 120px;">
              <!-- Name -->
              <h1 class="absolute right-0 font-bold text-xl bottom-14 left-5 mb-5">{{ slide.name }}</h1>
              <!-- Location -->
              <div class="flex items-center  location-info">
                <img class="absolute right-0 text-xl bottom-9 left-5" style="filter: invert(1); width:auto; height:20px;"
                  src="@/assets/images/Carousel/pin.png" alt="">
                <span class="absolute right-0 text-sm bottom-8 left-11">{{ slide.location }}</span>
              </div>
            </div>
          </div>
        </RouterLink>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {

  data() {
    return {

      slides: [
        {
          imgSrc: card1, name: "Glorietta", location: "Glorietta, Ayala Center, Makati City", link: "/category/see/glorietta",
          mapLocation: "https://www.google.com/maps/dir//Glorietta,+Palm+Drive,+Makati,+Metro+Manila/@14.5529213,121.0184921,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9f912a3727f:0xc4541051d1e0072!2m2!1d121.0246671!2d14.5508815?entry=ttu"
        },
        { imgSrc: card2, name: "Ayala Museum", location: "3rd flr,Circuit Lane, AP Reyes St., Makati, Metro Manila", link: "" },
        { imgSrc: card3, name: "Greenbelt", location: "Esperanza St. corner Makati Ave., Ayala Center, Makati, Metro Manila", link: "" },
        { imgSrc: card4, name: "Poblacion", location: "Poblacion 1210, Makati, Metro Manila", link: "" },
        { imgSrc: card5, name: "Ayala Triangle", location: "Paseo De Roxas St Cor Makati Ave, Cor Ayala Ave, Makati, 1209 Metro Manila", link: "" },
        { imgSrc: card6, name: "Guadalupe Church", location: "Guadalupe Commerical Complex, Makati, Metro Manila", link: "" },
        { imgSrc: card7, name: "Salcedo Saturday Market", location: "Salcedo Village, Jaime C. Velasquez Park, Makati, Metro Manila", link: "" },
        { imgSrc: card8, name: "Washington Sycip Park", location: "Legazpi Street, Legazpi Village, Makati, 1229 Metro Maynila", link: "" },
        { imgSrc: card9, name: "New World Makati ", location: "Esperanza STreet corner Makati Avenue, Ayala Center, Makati, Metro Manila", link: "" },
        { imgSrc: card10, name: "Makati Diamond Residences", location: "118 Legazpi Street, Legazpi Village, Makati, Metro Manila", link: "" },
      ],
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    getLinkWithCoordinates(slide) {
      const { mapLocation } = slide;
      if (mapLocation) {
        const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const match = mapLocation.match(regex);
        if (match) {
          const latitude = match[1];
          const longitude = match[2];
          return `${slide.link}?latitude=${latitude}&longitude=${longitude}&name=${encodeURIComponent(slide.name)}`;
        }
      }
      return slide.link;
    },

  },
};
</script>

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
