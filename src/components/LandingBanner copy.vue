<template>
  <div class="relative min-h-screen">

    <LandingBannerCarousel class="h-screen z-neg-1" />

    <!-- Slogan -->
    <div v-if="isMobile">
      <!-- top gradient div -->
      <div
        style="position: absolute; top: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to top, transparent, #102E61 90%, #102E61 70%);">
      </div>

      <!-- Bottom gradient div -->
      <div
        style="position: absolute; bottom: 0; left: 0; height: 60%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 70%, #102E61 100%);">
      </div>
      <div class="absolute inset-0 flex flex-col justify-center px-10 pb-40 text-white top-40">
        <p class="text-2xl text-yellow-500 poppins">Come visit</p>
        <h1 class="mt-10 mb-2 text-5xl font-bold">My City,</h1>
        <h1 class="mb-4 text-5xl font-bold">My Makati</h1>
        <p class="mb-4 text-sm">Whoever you are, wherever you are from,<br>there is a little bit of Makati in you!</p>
        <p class="mb-4 text-sm">Come and experience my Makati, our <a href="https://www.makati.gov.ph" target="_blank"
            class="text-blue-400 text-decoration-none">Makati</a></p>
      </div>

      <!-- Explore the City -->
      <div class="absolute inset-x-0 flex justify-center bottom-20">
        <h1 class="text-2xl font-bold text-white">
          Explore the City!
        </h1>
      </div>

      <!-- Main nav -->
      <div class="fixed inset-x-0 bottom-0 flex items-end justify-center space-x-6 text-black bg-white"
        style="z-index: 2;">
        <div v-for="(item, index) in locations" :key="index" class="m-location-card"
          style="margin: 0; width: 100%; height: auto;"> <!-- Adjust height as needed -->
          <img :src="item.imgSrc" :alt="item.alt" class="h-auto p-1 mx-auto" style="width: 50%; height: auto;">
          <!-- Adjust height as needed -->
          <h6 class="text-center" style="margin: 0;">{{ item.mobile }}</h6>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- Left gradient div -->
      <div
        style="position: absolute; bottom: 0; left: 0; height: 100%; width: 40%; background: linear-gradient(to left, transparent, #102E61 100%">
      </div>

      <!-- Bottom gradient div -->
      <div
        style="position: absolute; bottom: 0; left: 0; height: 100%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 65%, #102E61 100%);">
      </div>
      <div class="absolute inset-0 flex flex-col justify-center px-10 pb-40 text-white" style="margin-left: 150px;">
        <p class="text-2xl text-yellow-500 poppins">Come visit</p>
        <h1 class="mb-2 text-5xl font-bold">My City,</h1>
        <h1 class="mb-4 text-5xl font-bold">My Makati</h1>
        <p class="mb-4 text-sm">Whoever you are, wherever you are from,<br>there is a little bit of Makati in you!</p>
        <p class="mb-4 text-sm">Come and experience my Makati, our <a href="https://www.makati.gov.ph" target="_blank"
            class="text-blue-400 text-decoration-none">Makati</a></p>
      </div>

      <!-- Explore the City -->
      <div class="absolute inset-x-0 flex justify-center bottom-1/4">
        <h1 class="text-5xl font-bold text-white">
          Explore the City!
        </h1>
      </div>

      <!-- Main nav -->
      <div
        class="absolute inset-x-0 bottom-0 flex items-end justify-center m-20 mb-10 space-x-6 text-black bg-white rounded-lg">
        <div v-for="(item, index) in locations" :key="index" :class="`location-card ${item.attrib}`" style="margin: 0;">
          <img :src="item.imgSrc" :alt="item.alt" class="w-5 pt-5 mx-auto"
            style="padding-left: 1rem; padding-right: 1rem;">
          <h6 class="my-3 font-bold text-1xl">{{ item.title }}</h6>
        </div>
      </div>

    </div>
  </div>
</template>



<script>
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';
import LandingBannerCarousel from './LandingBannerCarousel.vue';
// Import Swiper core and required modules

export default {
  data() {
    return {
      locations: [
        { imgSrc: run, alt: 'location1', attrib: 'hover:rounded-l-lg', title: 'What to DO', mobile: 'Do' },
        { imgSrc: grocery, alt: 'location2', attrib: '', title: 'Where to SHOP', mobile: 'Shop' },
        { imgSrc: binoculars, alt: 'location3', attrib: '', title: 'What to SEE', mobile: 'See' },
        { imgSrc: food, alt: 'location4', attrib: '', title: 'Where to EAT', mobile: 'Eat' },
        { imgSrc: house, alt: 'location5', attrib: '', title: 'Where to STAY', mobile: 'Stay' },
        { imgSrc: locationImg, alt: 'location6', attrib: 'hover:rounded-r-lg', title: 'Make TOUR', mobile: 'Tour' }
        // Add more locations as needed
      ],
      isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
    };
  },
  components: {
    LandingBannerCarousel,
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
