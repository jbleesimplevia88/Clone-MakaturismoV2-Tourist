<template>
  <div>
    <swiper
      ref="swiper"
      :modules="modules"
      :slides-per-view="isMobile ? 1 : 4"
      :space-between="0"
      :allow-touch-move="false"
      class="m-10"
    >
      <template v-for="(slide, index) in slides" :key="index">
        <swiper-slide class="">
          <!-- Image container -->
          <div class="relative">
            <img :src="slide.imgSrc" alt="" style="width: 350px; height: 350px;" class="object-cover">
            <!-- Name and Location text -->
            <div class="absolute bottom-0 left-0 right-0 p-2 text-white" style="background: linear-gradient(to bottom, transparent, #102E61 100%, #102E61 90%); width: 350px; height: 300px;">
              <!-- Name -->
              <h1 class="absolute right-0 text-xl bottom-14 left-5">{{ slide.name }}</h1>
              <!-- Location -->
              <div class="flex items-center mt-1 location-info">
                <img class="absolute right-0 text-xl bottom-8 left-5" style="filter: invert(1); width:auto; height:20px;" src="@/assets/images/Carousel/pin.png" alt="">
                <span class="absolute right-0 text-sm bottom-8 left-11">{{ slide.location }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>

    <!-- Custom navigation buttons -->
    <div class="navigation-container">
      <div class="swiper-button-next" @click="next">
        Next
      </div>
      <div class="swiper-button-prev" @click="prev">
        Prev
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper Vue components

// Import images
import card4 from '@/assets/images/Top 10/Card 4.png';
import card5 from '@/assets/images/Top 10/Card 5.png';
import card6 from '@/assets/images/Top 10/Card 6.png';
import card7 from '@/assets/images/Top 10/Card 7.png';
import card8 from '@/assets/images/Top 10/Card 8.png';
import card9 from '@/assets/images/Top 10/Card 9.png';
import card10 from '@/assets/images/Top 10/Card 10.png';
import card11 from '@/assets/images/Top 10/Card 11.png';
import card12 from '@/assets/images/Top 10/Card 12.png';

SwiperCore.use([Navigation]);

export default {
  data() {
    return {
      slides: [
        { imgSrc: card4, name: "Slide 1", location: "Test" },
        { imgSrc: card5, name: "Slide 2", location: "Test" },
        { imgSrc: card6, name: "Slide 3", location: "Test" },
        { imgSrc: card7, name: "Slide 4", location: "Test" },
        { imgSrc: card8, name: "Slide 5", location: "Test" },
        { imgSrc: card9, name: "Slide 6", location: "Test" },
        { imgSrc: card10, name: "Slide 7", location: "Test" },
        { imgSrc: card11, name: "Slide 8", location: "Test" },
        { imgSrc: card12, name: "Slide 9", location: "Test" }
      ],
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
  mounted() {
    // Update isMobile on window resize
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    // Remove event listener on component destroy
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
    next() {
      if (this.$refs.swiper && this.$refs.swiper.swiper) {
        this.$refs.swiper.swiper.slideNext();
      } else {
        console.error("Swiper instance not available.");
      }
    },
    prev() {
      if (this.$refs.swiper && this.$refs.swiper.swiper) {
        this.$refs.swiper.swiper.slidePrev();
      } else {
        console.error("Swiper instance not available.");
      }
    },
  },
};
</script>

<style scoped>
/* Centering the navigation container */
.navigation-container {
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Adjust as needed */
}

/* Set a high z-index for the navigation buttons */
.swiper-button-next,
.swiper-button-prev {
  z-index: 9999;
}

/* Add any additional styles if needed */
</style>
