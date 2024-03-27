<template>
  <swiper :slides-per-view="4" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" ref="mySwiper">
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 1</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 2</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 3</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 1</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 2</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 3</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 1</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 2</swiper-slide>
    <swiper-slide><img src="@/assets/images/run.png" alt="">Slide 3</swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'; // Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper Vue components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper Navigation module styles

SwiperCore.use([Navigation]); // Install Swiper modules

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper); // Access Swiper instance
    },
    onSlideChange() {
      console.log('Slide changed');
    }
  }
};
</script>
