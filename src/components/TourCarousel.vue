<template>
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
            <img :src="image" alt="carousel image" class="w-full h-[15rem] lg:h-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  
  import landingPageImage1 from '@/assets/images/CategoryView/ToTour/tourr.png';
  import landingPageImage2 from '@/assets/images/CategoryView/ToTour/tourr1.png';
  import landingPageImage3 from '@/assets/images/CategoryView/ToTour/tourr2.png';
  
  
export default {
  data() {
    return {
      images: [
        landingPageImage1,
        landingPageImage2,
        landingPageImage3,
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    // Start the automatic carousel change on component mount
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      // Set an interval to change the carousel image every 3 seconds (adjust as needed)
      this.intervalId = setInterval(() => {
        this.next();
      }, 3000); // Change image every 3 seconds
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  },
  beforeUnmount() {
    // Stop the carousel interval when the component is destroyed
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
/* Styles can be adjusted based on your preference */
</style>

  
  
  