<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <img v-if="tostayData" :src="getImageUrl(tostayData.backgroundphotophoto)" class="w-full h-[200px] md:h-[700px]" alt="To Stay Image" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7">
                    WHERE TO STAY
                </p>
            </div>
            <div class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    {{ tostayData ? tostayData.description : 'Loading...' }}
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5 pt-5" style="background-color: #102E61;">
        <!-- New Filter -->
        <div class="lg:mx-[120px] mx-[60px] pb-3 flex flex-col px-5 bg-[#f5f5f5] rounded-lg">
            <!-- search bar -->
            <div class="relative my-5">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                </div>
                <input v-model="searchQuery" @click="focusSearch" type="search" id="default-search" class="w-full p-4 ps-10 text-sm text-gray-900" placeholder="Search Accommodations" />
            </div>
            <div class="lg:flex items-center justify-between lg:grid-cols-3 lg:space-x-4" id="FilterBar">
                <!-- Barangay -->
                <div class="lg:flex items-center w-full mb-3">
                    <div class="w-full flex flex-col items-start justify-center">
                        <div class="relative w-full">
                            <select id="barangay" v-model="barangay" class="w-full py-3 px-3 pr-8 appearance-none cursor-pointer border border-gray-200 rounded-sm">
                        <option value="" disabled selected hidden>Select barangay</option>
                        <option v-for="(barangay, index) in locations" :key="index" :value="barangay">{{ barangay }}</option>
                    </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                            clip-rule="evenodd" />
                                    </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Start Date Datepicker with Placeholder -->
                <div class="lg:flex items-center w-full">
                    <p class="text-lg font-bold">Date (From):</p>
                    <input type="date" id="dateFrom" v-model="dateFrom" @input="handleDateInput" :min="todayDate" :disabled="disableDays" class="w-full px-4 py-2 my-2 border border-gray-400 rounded-xl">
                </div>
                <!-- End Date Datepicker with Placeholder -->
                <div class="lg:flex items-center w-full">
                    <p class="text-lg font-bold">Date (To):</p>
                    <input type="date" id="dateTo" v-model="dateTo" @input="handleDateInput" :min="todayDate" class="w-full px-4 py-2 my-2 border border-gray-400 rounded-xl">
                </div>
                <!-- guests -->
                <div class="lg:flex  w-full mb-3 py-3 px-3 bg-white dropdown-container border border-gray-200 rounded-sm">
                    <div class="dropdown-toggle" @click="toggleModal">Select Options </div>
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                    clip-rule="evenodd" />
                            </svg>
                    </div>
                    <div v-if="showModal" class="modal w-full rounded-xl z-10">
                        <div class="pt-7 pb-5 px-6 space-y-4">
                            <div class="flex flex-col" v-for="(category, index) in guests" :key="index">
                                <div class=" flex items-center  justify-between">
                                    <div>{{ category.name }}</div>
                                    <div class="flex w-[100px]">
                                        <button class="bg-white w-full" @click="decreaseQuantity(category)">-</button>
                                        <span>{{ category.quantity }}</span>
                                        <button class="bg-white w-full" @click="increaseQuantity(category)">+</button>
                                    </div>
                                </div>
                                <div class="category-description">{{ category.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <button type="submit" @click="search" class="lg:w-[8rem] w-full lg:px-4 py-2 text-white disabled:bg-blue-400  bg-blue-600 rounded-md">SEARCH</button>
            </div>
        </div>
        <div>
            <div class="mt-8 pb-10">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-if="filteredItems.length === 0" class="text-center text-red-500">No data found.</div>
                <div v-for="(item, index) in filteredItems" :key="index" class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="getImageUrl(item.pictureimage)" alt="">
                        <div class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent"></div>
                    </div>
                    <div class="p-2 w-full">
                        <p class="text-white text-xs line-clamp-3">{{ item.description }}</p>
                    </div>
                    <div class="p-1 flex justify-end items-center">
                        <button @click="seeMore(item)" class="flex items-center px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300 text-nowrap text-sm">
                        <span>See More</span>
                        <span class="ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
      
            <!-- Pagination controls -->
            <div class="grid grid-cols-2">
                <div class="flex justify-start items-center">
                    <p class="text-center text-white">
                        Showing
                        <span class="text-[#29BFD6]">{{ paginationStartIndex }} - {{ paginationEndIndex }}</span> results from
                        <span class="text-[#29BFD6]">{{ totalRecords }}</span> records
                    </p>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <button @click="prevPage" :disabled="currentPage === 0" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
          </button>
                    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber - 1)" :class="[
              'px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300',
              { 'bg-white text-[#132540]': currentPage === pageNumber - 1, 'text-white': currentPage !== pageNumber - 1 }
            ]">
            {{ pageNumber }}
          </button>
                    <button @click="nextPage" :disabled="currentPage === pageCount - 1" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </button>
                </div>
            </div>
            </div>
            </div>
</template>

<script setup>
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, onBeforeMount, computed, onMounted } from 'vue';
import { useStayStore } from '@/stores/toStayCart';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const cartStay = useStayStore();
const router = useRouter();
const authStore = useAuthStore();
const guests = ref([
  { name: 'Room', quantity: 0 },
  { name: 'Adult', quantity: 0, description: 'Ages 18 and above' },
  { name: 'Children', quantity: 0, description: 'Ages 0-17' },
]);
const addToCart = (selectedHotel) => {
  cartStay.selectHotel(selectedHotel);
};
const tostayData = ref(null);
const loading = ref(true);
const error = ref(null);
const fetchTostayData = async () => {
  try {
    loading.value = true;
    const response = await axios.get('/pillar-details');
    tostayData.value = response.data.tostay[0];
    loading.value = false;
  } catch (err) {
    loading.value = false;
    error.value = 'Failed to fetch tostay data. Please try again later.';
    console.error('Failed to fetch tostay data:', err);
  }
};
onBeforeMount(() => {
  fetchTostayData();
});
const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};
const seeMore = (item) => {
  console.log(item.storename);
  const roomsQuantity = guests.value.find(guest => guest.name === 'Room').quantity;
  const adultsQuantity = guests.value.find(guest => guest.name === 'Adult').quantity;
  const childrenQuantity = guests.value.find(guest => guest.name === 'Children').quantity;
  cartStay.setSelectedHotelQuantities(roomsQuantity, adultsQuantity, childrenQuantity);
  cartStay.selectHotel(item);
  const { latitude, longitude } = extractLatLong(item.maplink);
  if (latitude !== null && longitude !== null) {
    router.push({
      name: 'xyz',
      params: { id: item.busid },
      query: { latitude, longitude, name: item.storename, id: item.busid },
    });
  } else {
    console.error('Latitude or longitude not available');
  }
};
const extractLatLong = (mapLocation) => {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = mapLocation.match(regex);
  if (match && match.length >= 3) {
    const latitude = parseFloat(match[1]);
    const longitude = parseFloat(match[2]);
    return { latitude, longitude };
  }
  const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
  const altMatch = mapLocation.match(altRegex);
  if (altMatch && altMatch.length >= 3) {
    const latitude = parseFloat(altMatch[1]);
    const longitude = parseFloat(altMatch[2]);
    return { latitude, longitude };
  }
  return { latitude: null, longitude: null };
};
const fetchManualFilters = async () => {
  try {
    const response = await axios.get('/manualfilter');
    locations.value = response.data; // Assuming backend returns an array of locations
  } catch (error) {
    console.error('Failed to fetch manual filters:', error);
  }
};
const todayDate = ref(new Date().toISOString().split('T')[0]);
const barangay = ref('');
const dateFrom = ref('');
const dateTo = ref('');
const searchQuery = ref('');
const todostay = ref('');
const locations = ref([]);
const showModal = ref(false);
const currentPage = ref(0);
const pageSize = ref(8);
const showDropdown = ref(false);
const categories = ref([
  'All',
  'Apartelle',
  'Condotelle',
  'Home Stay Site',
  'Hostel',
  'Hotel',
  'Serviced Residences',
  'Tourist Inn',
]);
const model = ref({
  items: []
});
const pageCount = computed(() => Math.ceil(model.value.items.length / pageSize.value));
const paginationStartIndex = computed(() => {
  return currentPage.value * pageSize.value + 1;
});
const paginationEndIndex = computed(() => {
  return Math.min((currentPage.value + 1) * pageSize.value, model.value.items.length);
});
const totalRecords = computed(() => model.value.items.length);
const nextPage = () => {
  if (currentPage.value < pageCount.value - 1) {
    currentPage.value++;
  }
};
const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
const goToPage = (pageNumber) => {
  currentPage.value = pageNumber;
};
// Filtered items based on barangay and search query
const filteredItems = computed(() => {
  let filtered = todostay.value
    ? todostay.value.filter(item => {
        const matchesSearch = item.storename.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesBarangay = !barangay.value || barangay.value === 'All' || item.barangay === barangay.value;
        return matchesSearch && matchesBarangay;
      })
    : [];
  const startIndex = currentPage.value * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  filtered = filtered.slice(startIndex, endIndex);
  return filtered;
});
onMounted(() => {
  displaytoStay();
  fetchManualFilters();
});
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
const toggleModal = () => {
  showModal.value = !showModal.value;
};
const increaseQuantity = (category) => {
  category.quantity++;
};
const decreaseQuantity = (category) => {
  if (category.quantity > 0) {
    category.quantity--;
  }
};
const focusSearch = () => {
  searchInputRef.value.focus();
};
const handleDateInput = () => {
  console.log('Selected date (From):', dateFrom.value);
  console.log('Selected date (To):', dateTo.value);
};
const displaytoStay = () => {
  axios
    .post('/getAlltostay')
    .then(response => {
      const todoparse = JSON.parse(response.data.message);
      todostay.value = todoparse;
      model.value.items = todoparse;
    })
    .catch(error => {
      console.error(error);
    });
};
</script>





<style scoped>
    /* Custom scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
        width: 15px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: #b3afaf89;
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #102E61;
        border-radius: 10px;
    }
    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: transform .5s ease;
    }
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: transform 0.5s;
    }
    .dropdown-enter {
        transform: translateY(-100%);
    }
    .dropdown-leave-to {
        transform: translateY(100%);
    }
    /*  */
    .dropdown-container {
        position: relative;
        display: inline-block;
    }
    .dropdown-toggle {
        cursor: pointer;
    }
    .modal {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #f5f5f5;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
    .quantity-button {
        cursor: pointer;
    }
    .selected {
        border-color: black;
        border-width: 1.8px;
    }
    .category-description {
        color: #999;
        /* Add color or other styles for description */
        font-size: 12px;
        /* Adjust font size as needed */
    }
</style>