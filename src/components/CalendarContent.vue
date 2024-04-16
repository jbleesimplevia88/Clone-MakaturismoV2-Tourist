<template>
  <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min"
    style="border-top-right-radius: 15px; border-bottom-right-radius: 15px;">
    <!-- Apply 'text-5xl' for small screens and 'text-3xl' for medium screens and above -->
    <h1 :class="{ 'p-2 mx-5 ml-3 text-1xl font-bold': isMobile, 'p-2 mx-10 ml-4 text-2xl font-bold': !isMobile }">
      Events for this Month
    </h1>
  </div>

  <CalendarMonthCarousel />

  <div class="flex items-center justify-center m-3">
    <!-- <router-link to="/calendar"> -->
    <button
      class="flex items-center justify-center px-5 py-2 text-white bg-[#2969D6] rounded-lg shadow-lg shadow-gray-500/50">View
      All</button>
    <!-- </router-link> -->
  </div>

  <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min"
    style="border-top-right-radius: 15px; border-bottom-right-radius: 15px;">
    <!-- Apply 'text-5xl' for small screens and 'text-3xl' for medium screens and above -->
    <h1 :class="{ 'p-2 mx-5 ml-3 text-1xl font-bold': isMobile, 'p-2 mx-10 ml-4  text-2xl font-bold': !isMobile }">
      Past Events
    </h1>
  </div>

  <CalendarPastCarousel />

  <div
    :class="{ 'flex items-center justify-center m-3 pb-5': isMobile, 'flex items-center justify-center m-3 mb-8': !isMobile }">
    <!-- <router-link to="/calendar"> -->
    <button
      class="flex items-center justify-center px-5 py-2  text-white bg-[#2969D6] rounded-lg shadow-lg shadow-gray-500/50">View
      All</button>
    <!-- </router-link> -->
  </div>
</template>

<script scoped>
import CalendarMonthCarousel from '@/components/CalendarMonthCarousel.vue';
import CalendarPastCarousel from '@/components/CalendarPastCarousel.vue';

export default {
  components: {
    CalendarMonthCarousel,
    CalendarPastCarousel
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
