<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-300"
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="getImageUrl(image)" alt="carousel image" class="w-full h-[15rem] lg:h-[30rem] rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentIndex = ref(0);
const images = ref([]);
let intervalId = null;
const id = ref(route.params.id);

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const fetchImages = async () => {
  try {
    const response = await axios.get(`/getStore/${id.value}`);
    const storeData = JSON.parse(response.data.message);
    const pictureimage = storeData.pictureimage || '';
    images.value = pictureimage.split('|').filter(image => image); 
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

const startCarousel = () => {
  intervalId = setInterval(() => {
    next();
  }, 3000); 
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

onMounted(() => {
  fetchImages();
  startCarousel();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

watch(
  () => route.params.id,  // watch for updtae
  (newId) => {  //new func
    if (newId) {  // Check if the id is valid
      id.value = newId;  //init a new id
      fetchImages();  // Fetch new images based on the updated ID
    }
  },
  { immediate: true }  // Run the func immediately for update
);

</script>
