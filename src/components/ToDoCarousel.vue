<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(imageUrl, index) in imageUrls" :key="index" class="w-full flex-shrink-0">
          <img :src="`${localimageUrl}${imageUrl}`" alt="carousel image" class="w-full h-[15rem] lg:h-[30rem] rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrls: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      localimageUrl: `${import.meta.env.VITE_STORAGE_BASE_URL}/`,
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
      this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
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
