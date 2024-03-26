
<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image.src" alt="carousel image" class="w-full h-[15rem] lg:h-[30rem]" />
        </div>
      </div>
    </div>
    <div dir="ltr">
      <button @click="prev"
        class="absolute opacity-60 rounded-s-lg top-1/2 transform -translate-y-1/2 bg-white text-gray-800 text-xl font-bold px-3 py-1 rounded-full focus:outline-none w-10">&#10094;</button>
    </div>

    <div dir="rtl">
      <button @click="next"
        class="absolute opacity-60 rounded-s-lg top-1/2 transform -translate-y-1/2 bg-white text-gray-800 text-xl font-bold px-3 py-1 rounded-full focus:outline-none w-10">&#10094;</button>
    </div>
  </div>
</template>



<script>

import landingPageImage1 from '@/assets/images/Banner/banner-1.png';
import landingPageImage2 from '@/assets/images/Banner/banner-2.png';
import landingPageImage3 from '@/assets/images/Banner/banner-3.png';
import landingPageImage4 from '@/assets/images/Banner/banner-4.png';
import landingPageImage5 from '@/assets/images/Banner/banner-5.png';

export default {
  data() {
    return {
      images: [

      ],
      currentIndex: 0
    };
  },
  methods: {
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },

    loadImagesFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryName = urlParams.get('name');

      if (categoryName) {
        // Extract category name and convert it to lowercase
        const category = categoryName.replace(/\s+/g, '_').toLowerCase();
        // Construct image URLs based on category
        const categoryImages = [];
        for (let i = 1; i <= 7; i++) { // number of images
          const imageName = `${category}_banner${i}.png`; // Generating image name na kukunin based on the url
          const imageUrl = `/carousel/${imageName}`; // Constructing image URL
          categoryImages.push({ src: imageUrl }); // Adding image URL to array
        }

        console.log('Category Images:', categoryImages);

        this.images = categoryImages;
      }
    }
  },
  mounted() {
    this.loadImagesFromURL();
  }
};
</script>

<style scoped>
/* Styles can be adjusted based on your preference */
</style>
