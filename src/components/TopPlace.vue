<template>
  <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min"
    style="border-top-right-radius: 15px; border-bottom-right-radius: 15px;">
    <!-- Apply 'text-5xl' for small screens and 'text-3xl' for medium screens and above -->
    <h1 :class="{ 'p-2 mx-5 ml-10 text-1xl font-bold': isMobile, 'p-2 mx-10 ml-10 text-2xl font-bold': !isMobile }">
      Top 10 Places in Makati!
    </h1>
  </div>

  <TopPlaceCarousel />

  <div class="flex items-center justify-center m-5 mb-10">
    <router-link to="/viewAll">
      <button
        class="flex items-center justify-center px-5 py-2 font-bold text-white bg-[#2969D6] rounded-lg shadow-lg shadow-gray-500/50">View
        All</button>
    </router-link>
  </div>
</template>

<script scoped>
import TopPlaceCarousel from '@/components/TopPlaceCarousel.vue';

export default {
  components: {
    TopPlaceCarousel,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
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
  },
};
</script>

<style scoped>
.fixed-width-300 {
  width: 300px;
}

/* Responsive text size for small screens using Tailwind CSS */
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
