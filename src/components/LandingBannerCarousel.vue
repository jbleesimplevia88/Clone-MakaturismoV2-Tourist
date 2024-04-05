<template>
  <div class="relative min-h-screen">
    <div>
      <swiper :modules="modules" :effect="'fade'" :slides-per-view="1"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" loop>
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="" class="object-cover w-screen h-screen">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import Swiper Fade Effect module styles

// Import images
import landingPageImage1 from '@/assets/images/Banner/banner-1.webp';
import landingPageImage2 from '@/assets/images/Banner/banner-2.webp';
import landingPageImage3 from '@/assets/images/Banner/banner-3.webp';
import landingPageImage4 from '@/assets/images/Banner/banner-4.webp';
import landingPageImage5 from '@/assets/images/Banner/banner-5.webp';
import landingPageImage6 from '@/assets/images/Banner/banner-6.webp';
import landingPageImage7 from '@/assets/images/Banner/banner-7.webp';

export default {
  data() {
    return {
      images: [
        { src: landingPageImage1 },
        { src: landingPageImage2 },
        { src: landingPageImage3 },
        { src: landingPageImage4 },
        { src: landingPageImage5 },
        { src: landingPageImage6 },
        { src: landingPageImage7 }
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, EffectFade],
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
