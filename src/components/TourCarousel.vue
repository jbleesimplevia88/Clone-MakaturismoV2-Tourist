<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300 lg:w-[1650px] w-[400px] m-3" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <!-- Iterate over images array for carousel display -->
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image" alt="Carousel image" class="w-full h-[15rem] lg:h-[30rem] rounded-xl " />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

// Access route parameters directly using useRoute from Vue Router
const route = useRoute();
const id = ref(route.params.id); // Reactive reference to the ID from the route parameters
const images = ref([]); // Start with an empty array for images
const currentIndex = ref(0); // Initial index for the carousel
const intervalId = ref(null); // Store the interval ID for clearing on unmount

// Fetch the cover photo from the API using the dynamically obtained ID
const fetchCoverPhoto = async () => {
  try {
    const response = await axios.get(`/viewactivityperid/${id.value}`); // Construct the API URL dynamically
    const activityDetails = JSON.parse(response.data.peractivity); // Parse the JSON string from the API response
    const coverPhotoUrl = `${import.meta.env.VITE_STORAGE_BASE_URL}/${activityDetails.activitycoverphoto}`; // Construct the full URL for the image
    images.value.push(coverPhotoUrl); // Append the new image URL to the images array
  } catch (error) {
    console.error('Failed to fetch cover photo:', error); // Log any errors that occur during the fetch operation
  }
};

// Function to start the image carousel
const startCarousel = () => {
  intervalId.value = setInterval(() => {
    next(); // Move to the next image every 3 seconds
  }, 3000);
};

// Navigate to the previous image in the carousel
const prev = () => {
  if (images.value.length > 1) { // Only navigate if there are multiple images
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  }
};

// Navigate to the next image in the carousel
const next = () => {
  if (images.value.length > 1) { // Only navigate if there are multiple images
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }
};

// Set up the component to fetch the cover photo and start the carousel when mounted
onMounted(() => {
  fetchCoverPhoto();
  startCarousel();
});
</script>

<style scoped>
/* Styles can be adjusted based on your preference */
</style>
