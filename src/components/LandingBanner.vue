<template>
  <div class="relative min-h-screen">

    <LandingBannerCarousel class="h-screen z-neg-1" />

    <!-- Slogan -->
    <!-- top gradient div -->
    <div
      style="position: absolute; top: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to top, transparent, #102E61 90%, #102E61 70%);">
    </div>

    <!-- Bottom gradient div -->
    <div
      style="position: absolute; bottom: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 70%, #102E61 100%);">
    </div>


    <div class="absolute inset-0 flex flex-col justify-center px-10 pb-40 text-white top-40 lg:top-0 lg:ml-[150px]">
      <p class="text-2xl text-yellow-500 poppins">Come visit</p>
      <h1 class="mt-10 lg:mt-0 mb-2 text-5xl font-bold">My City,</h1>
      <h1 class="mb-4 text-5xl font-bold">My Makati</h1>
      <p class="mb-4 text-sm">Whoever you are, wherever you are from,<br>there is a little bit of Makati in you!</p>
      <p class="mb-4 text-sm">Come and experience my Makati, our <a href="https://www.makati.gov.ph" target="_blank"
          class="text-blue-400 text-decoration-none">Makati</a></p>
    </div>

    <!-- Explore the City -->
    <div class="absolute inset-x-0 flex justify-center bottom-20 lg:bottom-1/4">
      <h1 class="text-2xl lg:text-5xl font-bold text-white">
        Explore the City!
      </h1>
    </div>

    <!-- Main nav -->
    <CategoryContent />
    <!-- Main nav -->

  </div>


</template>


<script>
import LandingBannerCarousel from './LandingBannerCarousel.vue';
import CategoryContent from './CategoryContent.vue';

// Import Swiper core and required modules

export default {
  data() {
    return {

      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
    };
  },
  components: {
    LandingBannerCarousel,
    CategoryContent
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
.swiper-container {
  height: 100%;
}

.location-card {
  padding: 2px;
  margin: 0;
  text-align: center;
}

.location-card img {
  width: 30%;
  height: auto;
}

.location-card:hover {
  background-color: #008EE4;
  /* Set your desired background color on hover */
  transition: filter 0.3s ease;
}

.location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.location-card h6 {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: black;
  /* Set your desired text color */
}

.location-card:hover h6 {
  color: white;
  /* Set your desired text color on hover */
  transition: filter 0.3s ease;
}


.m-location-card {
  width: auto;
  padding: 4px;
  margin: 0;
  text-align: center;
}

.m-location-card img {
  width: 40%;
  height: auto;
}

.m-location-card:hover {
  background-color: #008EE4;
  /* Set your desired background color on hover */
  transition: filter 0.3s ease;
}

.m-location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.m-location-card h6 {
  font-size: 12px;
  color: black;
  /* Set your desired text color */
}

.m-location-card:hover h6 {
  color: white;
  /* Set your desired text color on hover */
  transition: filter 0.3s ease;
}

.z-neg-1 {
  z-index: -1;
}

/* Add any additional styles if needed */
</style>
