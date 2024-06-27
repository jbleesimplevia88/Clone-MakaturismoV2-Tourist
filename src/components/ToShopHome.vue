<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div
                style="position: absolute; top:0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <div>
                <img v-if="toshopData && toshopData.backgroundphotophoto"
                    :src="getImageUrl(toshopData.backgroundphotophoto)" class="w-full h-[300px] md:h-[700px]"
                    alt="To Do Image" />
                <img v-else :src="defaultImage" class="w-full h-[300px] md:h-[700px]" alt="Default To Do Image" />
            </div>
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">

                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHERE TO SHOP
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-4 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p
                    class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    {{ toshopData ? toshopData.description : '' }}
                </p>
            </div>.
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5" style="background-color: #102E61;">
        <div>
            <!-- Filter dropdown WEB-->
            <div class="pb-10 hidden lg:block">
                <div class="relative text-left" @click.stop ref="webDropdown">
                    <button
                        class="flex bg-white rounded-md font-bold p-1 pl-3 pr-3 justify-center items-center focus:outline-none"
                        @click="toggleDropdown">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                        </span>
                        <span class="text-sm pl-2">Filters</span>
                    </button>
                    <!-- Dropdown menu -->
                    <div v-if="showDropdown"
                        class="z-[1] origin-top-left relative md:absolute left-0 mt-2 w-[400x] md:w-[868px] lg:w-[1150px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu" @click.stop>
                            <div class="grid grid-cols-3 border-b-2 p-3 font-bold ml-5 mr-5">
                                <div>
                                    <h2>Category</h2>
                                </div>
                                <div>
                                    <h1>Explore by Area</h1>
                                </div>
                                <div class="flex justify-end">
                                    <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 grid-row-3 mt-5">
                                <div class="relative px-2 w-[85%] -mt-2">
                                    <div class="absolute"
                                        style="border-right: 1px solid #0000004D; top: 15%; bottom: 15%; right: 0;">
                                    </div>
                                    <div class="grid grid-rows-8 grid-flow-col gap-4 ml-4 p-2">
                                        <div v-for="(category, index) in categories" :key="'category-' + index">
                                            <label :for="'categoryRadio-' + index" class="flex items-center">
                                                <input type="radio" :id="'categoryRadio-' + index" :value="category"
                                                    v-model="selectedCategory" name="category">
                                                <span class="ml-2 m-0 p-0 uppercase text-[12px] font-bold">{{ category
                                                }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2 px-2 w-full -ml-10">
                                    <!-- Location filter -->
                                    <div class="grid grid-rows-7 grid-flow-col ">
                                        <div v-for="(location, index) in locations" :key="'location-' + index">
                                            <label :for="'locationRadio-' + index" class="flex items-left">
                                                <input type="radio" :id="'locationRadio-' + index" :value="location"
                                                    v-model="selectedLocation" name="location" class="-mt-12">
                                                <span class="ml-2  -mt-2 uppercase text-[12px] font-bold h-16 w-24">{{
                                                    location }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                <button @click="handleApplyFilter"
                                    class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Filter dropdown -->
            </div>
            <div class="pb-10 lg:hidden" ref="mobileDropdown">
                <!-- Filter dropdown MOBILE-->
                <div class="relative text-left ">

                    <!-- Dropdown menu MOBILE -->
                    <transition name="dropdown">
                        <div v-if="showDropdown" class="fixed inset-0 z-50 flex items-center justify-center">
                            <div
                                class="relative z-50 overflow-hidden rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                                    <div class="grid grid-cols-2 border-b-2 p-3 font-bold ml-5 mr-5">
                                        <div>
                                            <h2 class="ml-5">Category</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="overflow-y-auto max-h-[350px] ml-5 mr-5 mt-5 custom-scrollbar">
                                        <div class="relative px-2">
                                            <div class="grid gap-4 ml-4 p-2">
                                                <div v-for="(category, index) in categories" :key="'category-' + index">
                                                    <label :for="'categoryRadio-' + index" class="flex items-center">
                                                        <input type="radio" :id="'categoryRadio-' + index" :value="category"
                                                            v-model="selectedCategory" name="category">
                                                        <span class="ml-2 m-0 p-0 uppercase font-bold">{{ category
                                                        }}</span>
                                                    </label>
                                                </div>
                                                <hr data-v-add5c92e="" class="mt-6 mb-6 border-gray-300">
                                                <h2 class="ml-5 font-bold mb-2">Explore by Area</h2>
                                                <div v-for="(location, index) in locations" :key="'location-' + index">
                                                    <label :for="'locationRadio-' + index" class="flex items-center">
                                                        <input type="radio" :id="'locationRadio-' + index" :value="location"
                                                            v-model="selectedLocation" name="location">
                                                        <span class="ml-2 m-0 p-0 uppercase font-bold">{{ location }}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                        <button @click="handleApplyFilter"
                                            class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- End of Filter dropdown -->
            </div>
            <div class="pb-10 lg:hidden" ref="mobileDropdown">
                <!-- Filter dropdown MOBILE-->
                <div class="relative text-left ">
                    <button
                        class="flex bg-white rounded-md font-bold p-1 pl-3 pr-3 justify-center items-center focus:outline-none"
                        @click="toggleDropdown">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                        </span>
                        <span class="text-sm pl-2">Filters</span>
                    </button>
                    <!-- Dropdown menu MOBILE -->
                    <transition name="dropdown">
                        <div v-if="showDropdown" class="fixed inset-0 z-50 flex items-center justify-center">
                            <div
                                class="relative z-50 overflow-hidden rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                                    <div class="grid grid-cols-2 border-b-2 p-3 font-bold ml-5 mr-5">
                                        <div>
                                            <h2 class="ml-5">Category</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="overflow-y-auto max-h-[350px] ml-5 mr-5 mt-5 custom-scrollbar">
                                        <div class="relative px-2">
                                            <div class="grid gap-4 ml-4 p-2">
                                                <div v-for="(category, index) in categories" :key="'category-' + index">
                                                    <label :for="'categoryRadio-' + index" class="flex items-center">
                                                        <input type="radio" :id="'categoryRadio-' + index" :value="category"
                                                            v-model="selectedCategory" name="category">
                                                        <span class="ml-2 m-0 p-0 uppercase font-bold">{{ category }}</span>
                                                    </label>
                                                </div>
                                                <hr data-v-add5c92e="" class="mt-6 mb-6 border-gray-300">
                                                <h2 class="ml-5 font-bold mb-2">Explore by Area</h2>
                                                <div v-for="(location, index) in locations" :key="'location-' + index">
                                                    <label :for="'locationRadio-' + index" class="flex items-center">
                                                        <input type="radio" :id="'locationRadio-' + index" :value="location"
                                                            v-model="selectedLocation" name="location">
                                                        <span class="ml-2 m-0 p-0 uppercase font-bold">{{ location }}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                        <button @click="handleApplyFilter"
                                            class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- End of Filter dropdown -->
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="(item, index) in filteredItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative" v-if="item.pictureimage">
                        <img :src="getImageUrl(item.pictureimage.split('|')[0])"
                            class="w-full h-[250px] object-cover rounded-t">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.storename }}
                        </p>
                        <p class="absolute bottom-2 left-2 text-white text-xs">{{ Array.isArray(item.category) ?
                            item.category.join(', ') : item.category }}</p>
                    </div>
                    <div class="p-2 w-full">
                        <p class="text-white text-xs line-clamp-3">{{ item.description }}</p>
                    </div>
                    <div class="p-1 flex justify-end items-center">
                        <button @click="seeMore(item)"
                            class="flex items-center px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300 text-nowrap text-sm">
                            <span>Read More</span>
                            <span class="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="filteredItems.length === 0" class="text-white text-center font p-14">
                <p>We're sorry, but we couldn't find any activity that matches your selected filter. Try adjusting your
                    filter or explore other options.</p>
            </div>

            <!-- Pagination controls -->
            <div class="grid grid-cols-2">
                <div class="flex justify-start items-center">
                    <p class="text-center text-white">
                        Showing
                        <span class="text-[#29BFD6]">{{ paginationStartIndex }} - {{ paginationEndIndex }}</span> results
                        from
                        <span class="text-[#29BFD6]">{{ totalRecords }}</span> records
                    </p>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <button @click="prevPage" :disabled="currentPage === 0" class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                    </button>
                    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber - 1)"
                        :class="{ 'px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300 bg-white text-[#132540]': currentPage === pageNumber - 1, 'text-white': currentPage !== pageNumber - 1 }">
                        {{ pageNumber }}
                    </button>
                    <button @click="nextPage" :disabled="currentPage === pageCount - 1" class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

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
</style>

<script setup>
import {
    ref,
    computed,
    onMounted,
    onBeforeUnmount,
    watch,
    onBeforeMount,
    reactive
} from 'vue';
import {
    useRouter
} from 'vue-router';
import axios from 'axios';
import item1 from '@/assets/images/CategoryView/ToEat/little.png';
import item2 from '@/assets/images/CategoryView/ToEat/lanuova.jpeg';
import item3 from '@/assets/images/CategoryView/ToEat/tapenade.jpeg';
import item4 from '@/assets/images/CategoryView/ToEat/salon.jpeg';
import item5 from '@/assets/images/CategoryView/ToEat/maple.jpeg';
import item6 from '@/assets/images/CategoryView/ToEat/thebar.jpeg';
import item7 from '@/assets/images/CategoryView/ToEat/oldmanila.jpeg';
import item8 from '@/assets/images/CategoryView/ToEat/brera.jpeg';
import defaultImage from '@/assets/images/CategoryView/ToShop/banner.jpeg'; // Default image

import {
    useCartStoreShop
} from '@/stores/toShopCart';
const router = useRouter();
const useToShop = useCartStoreShop();
const model = reactive({
    items: [],
    imageList: '',
});
const categories = ['American', 'Argentine', 'Asian', 'Australian', 'Chinese', 'European', 'Filipino', 'French', 'Singapore', 'Spanish', 'Swiss', 'Thai', 'Vietnamese'];
const currentPage = ref(0);
const pageSize = ref(8);
const showDropdown = ref(false);
const selectedCategory = ref(null);
const selectedLocation = ref(null);
const applyButtonClicked = ref(false);
const imageArray = ref();
const toeatinfo = ref([]);
const toshopData = ref(null);
const locations = ref([]);
const fetchToshopData = async () => {
    try {
        const response = await axios.get('/pillar-details');
        toshopData.value = response.data.toshop[0]; // Assuming 'todo' returns an array with at least one item
    } catch (error) {
        console.error('Failed to fetch todo data:', error);
    }
};
const fetchManualFilters = async () => {
    try {
        const response = await axios.get('/manualfilter');
        locations.value = response.data; // Assuming backend returns an array of locations
    } catch (error) {
        console.error('Failed to fetch manual filters:', error);
    }
};
const filteredItems = computed(() => {
    let filteredItems = model.items.slice(); // Create a shallow copy of items
    // Apply filters only if the Apply button is clicked
    if (applyButtonClicked.value) {
        console.log("Filtering items with:", {
            selectedCategory: selectedCategory.value,
            selectedLocation: selectedLocation.value
        });
        // Filter by category
        if (selectedCategory.value) {
            filteredItems = filteredItems.filter(item => {
                if (Array.isArray(item.category)) {
                    return item.category.includes(selectedCategory.value);
                } else {
                    return item.category === selectedCategory.value;
                }
            });
        }
        // Filter by location
        if (selectedLocation.value) {
            filteredItems = filteredItems.filter(item => {
                console.log("Comparing item barangay:", item.barangay, "with selected location:", selectedLocation.value);
                return item.barangay === selectedLocation.value;
            });
        }
    }
    // Paginate the filtered items
    const startIndex = currentPage.value * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    return filteredItems.slice(startIndex, endIndex);
});
const pageCount = computed(() => Math.ceil(totalRecords.value / pageSize.value));
const paginationStartIndex = computed(() => {
    if (filteredItems.value.length === 0) {
        return 0; // or any other appropriate value if you want to indicate that no items are displayed
    } else {
        return 1;
    }
});

const paginationEndIndex = computed(() => Math.min((currentPage.value + 1) * pageSize.value, filteredItems.value.length));
const totalRecords = computed(() => model.items.length);
watch(selectedCategory, (newValue, oldValue) => {
    // Update applyButtonClicked when category changes
    if (newValue !== oldValue) {
        applyButtonClicked.value = false;
    }
});
watch(selectedLocation, (newValue, oldValue) => {
    // Update applyButtonClicked when location changes
    if (newValue !== oldValue) {
        applyButtonClicked.value = false;
    }
});
watch(filteredItems, (newVal) => {
    console.log(newVal);
});
onMounted(() => {
    document.addEventListener('click', handleGlobalClick);
});
onBeforeMount(() => {
    fetchToshopData();
    fetchManualFilters(); // Fetch area filters on mount
});
watch(selectedCategory, (newValue, oldValue) => {
    // Update applyButtonClicked when category changes
    if (newValue !== oldValue) {
        applyButtonClicked.value = false;
    }
});
watch(selectedLocation, (newValue, oldValue) => {
    // Update applyButtonClicked when location changes
    if (newValue !== oldValue) {
        applyButtonClicked.value = false;
    }
});
onMounted(() => {
    document.addEventListener('click', handleGlobalClick);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleGlobalClick);
});
const handleApplyFilter = () => {
    applyButtonClicked.value = true;
    currentPage.value = 0; // Reset currentPage when filter is applied
    showDropdown.value = false;
};
const nextPage = () => {
    if (currentPage.value < pageCount.value - 1) {
        currentPage.value++;
    }
};
const prevPage = () => {
    currentPage.value--;
};
const goToPage = (pageNumber) => {
    currentPage.value = pageNumber;
};
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};
const handleGlobalClick = (event) => {
    const webDropdown = ref(null);
    const mobileDropdown = ref(null);
    if (!webDropdown.value.contains(event.target) && !mobileDropdown.value.contains(event.target)) {
        showDropdown.value = false;
    }
};
const seeMore = (item) => {
    useToShop.getShopData(item);
    const {
        latitude,
        longitude
    } = extractLatLong(item.maplink);
    if (latitude !== null && longitude !== null) {
        // Pass the name parameter in the query object
        router.push({
            name: 'makati',
            params: {
                id: item.busid
            },
            query: {
                latitude,
                longitude,
                item: item,
                name: item.storename,
                id: item.busid,
                imageList: item.pictureimage,
            }
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
        return {
            latitude,
            longitude
        };
    }
    // Try another regex pattern for different URL formats
    const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
    const altMatch = mapLocation.match(altRegex);
    if (altMatch && altMatch.length >= 3) {
        const latitude = parseFloat(altMatch[1]);
        const longitude = parseFloat(altMatch[2]);
        return {
            latitude,
            longitude
        };
    }
    // If no match is found, return null values
    return {
        latitude: null,
        longitude: null
    };
};
const getGetEat = async () => {
    try {
        const response = await axios.post("/getAlltoshop");
        model.items = JSON.parse(response.data.message);
        model.imageList = response.data.getimages;
        toeatinfo.value = model.items; // Assign items to toeatinfo
    } catch (error) {
        console.error(error);
    }
};
// Call getGetEat function when component is mounted
const getImageUrl = (pictureimage) => {
    if (!pictureimage) return ''; // Return empty string if pictureimage is not defined
    // Extract the filename of the first image
    const images = pictureimage.split('|').filter(img => img.trim() !== ''); // Split by "|" and remove empty strings
    const firstImage = images[0]; // Get the first image filename
    // Construct the full URL
    return `${import.meta.env.VITE_STORAGE_BASE_URL}/${firstImage}`;
};
onBeforeMount(async () => {
    await getGetEat();
    document.removeEventListener('click', handleGlobalClick);
});

</script>
<!-- I NEED THS SEPARATE SCRIPT AS WE CANNOT USE ES MODULE UNDER SCRIPT SETUP -->
<script>
const items = ref([{
    name: 'Makati Shop',
    description: "Immerse yourself in the rich tapestry of Filipino culture at Makati Shop. This boutique showcases an array of locally made products, including intricately woven textiles, handcrafted souvenirs, and Filipino-inspired fashion. Discover unique treasures that embody the spirit of the Philippines at Kultura.",
    category: ['Souvenir', 'Gift Shop'],
    location: 'Ayala-Paseo de Roxas',
    image: item1,
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//Palm+Dr,+Makati,+Metro+Manila/@14.5502921,121.0197843,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3397c91ba50a79d3:0x1cc92403f541e5d4!2m2!1d121.0249449!2d14.5502922!3e0?entry=ttu"
},
{
    name: 'Powerplant Mall',
    description: "Experience luxury shopping and fine dining at Powerplant Mall. This upscale shopping center houses a curated selection of renowned international and local brands, as well as a variety of dining options. Enjoy a premium shopping experience in the heart of Makati at Powerplant Mall.",
    category: 'Mall',
    location: 'Poblacion',
    image: item2,
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//Power+Plant+Mall,+Rockwell+Drive,+Makati,+Metro+Manila/@14.5579643,121.042702,14.73z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397c8545885d363:0x43576a7aaa642e33!2m2!1d121.0364352!2d14.5646479!3e0?entry=ttu",
},
{
    name: 'Greenbelt Mall',
    description: "Explore a world of high-end shopping and dining at Greenbelt Mall. This iconic lifestyle hub offers an elegant mix of luxury boutiques, designer brands, and award-winning restaurants. With its lush gardens and serene ambiance, Greenbelt Mall is a haven for shoppers and diners alike.",
    category: 'Mall',
    location: 'Greenbelt',
    image: item3,
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//Palm+Dr,+Makati,+Metro+Manila/@14.5502921,121.0197843,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3397c91ba50a79d3:0x1cc92403f541e5d4!2m2!1d121.0249449!2d14.5502922!3e0?entry=ttu"
    // link: "/category/shop/makati", // Change the link to the route path
    // mapLocation: "https://www.google.com/maps/dir//Greenbelt+Mall,+Legazpi+Street,+Legazpi+Village,+Makati,+Metro+Manila/@14.5536848,121.0230732,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397c90e326fed61:0xfe05b1b630f67427!2m2!1d121.0218714!2d14.5527664!3e0?entry=ttu"
},
{
    name: 'Balikbayan Handicrafts',
    description: "Get ready for an immersive and thrilling experience at Zeria, Makati's premier escape room destination. Gather your friends, family, or colleagues and put your problem-solving skills to the test in a series of mind-bending puzzles and challenges. Each escape room presents a unique storyline, making Zeria an ideal place for team building, bonding, or simply having a blast with your loved ones.",
    category: ['Souvenir', 'Gift Shop'],
    location: 'San Lorenzo Village',
    image: item4,
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//Balikbayan+Handicrafts+-+The+Landmark,+Makati+Avenue,+Makati,+Metro+Manila/@14.5522354,120.9824642,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397c91ac862a26f:0xa8e3cab621dfe8a6!2m2!1d121.0237498!2d14.552239!3e0?entry=ttu"
},
{
    name: 'Circuit Makati',
    description: "Discover a vibrant lifestyle destination at Circuit Makati. This dynamic entertainment and retail complex offer a mix of shops, restaurants, and recreational facilities. From retail therapy to dining and entertainment, Circuit Makati promises a one-stop destination for leisure and enjoyment.",
    category: 'Shopping Mall',
    location: 'Makati Commercial Center	',
    image: item5,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//Circuit+Makati,+Makati,+Metro+Manila/@14.5738471,121.0168903,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397c9a4e5de57a7:0xfd37ce391a8ebad7!2m2!1d121.0178421!2d14.572427!3e0?entry=ttu"
},
{
    name: 'Century Mall',
    description: "Uncover a delightful shopping experience at Century Mall. This modern retail destination features an array of boutiques and specialty stores, catering to a diverse range of tastes and preferences. Whether you're hunting for fashion pieces or unique finds, Century Mall has something to suit every shopper.",
    category: 'Shopping Mall',
    location: 'Poblacion',
    image: item6,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir/Aguida+Street,+Malate,+Manila,+1004+Metro+Manila/Century+City+Mall,+Century+City,+Kalayaan+Avenue,+Makati,+Metro+Manila/@14.56558606619895,121.02766250830976,17.73z/data=!4m14!4m13!1m5!1m1!1s0x3397cbd5991e4011:0xd7a64ff5ae86f019!2m2!1d120.9863637!2d14.5655168!1m5!1m1!1s0x3397c9073750cc15:0xc3a53c8ba2ae6cc0!2m2!1d121.0276651!2d14.565466!3e0?entry=ttu"
},
{
    name: 'Glorietta',
    description: "Experience the ultimate shopping and entertainment extravaganza at Glorietta. This expansive retail complex boasts a diverse mix of shops, dining options, and entertainment facilities. Whether you're in search of fashion, gadgets, or indulgent treats, Glorietta is the go-to destination for an exciting day out.",
    category: 'Shopping Mall',
    location: 'Ayala-Paseo de Roxas',
    image: item7,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir/14.5510815,121.0255359/Glorietta+by+Ayala+Malls,+Ayala+Center,+Makati,+1226+Metro+Manila/@14.5510458,121.0253129,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3397c91b3ef40b79:0x23de027bdc503800!2m2!1d121.0255029!2d14.5510812!3e0?entry=ttu"
},
{
    name: 'Bangkal Thrift Market',
    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
    category: 'Souvenir',
    location: 'Bangkal',
    image: item8,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//532-C+Gen.+M.+Hizon,+Makati,+1233+Metro+Manila/@14.5429672,121.0127257,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9007d90d0c5:0x9fe2a1087ad72ff4!2m2!1d121.0127104!2d14.5428967?entry=ttuWWI"
},
{
    name: 'Bangkal Thrift Market',
    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
    category: 'Souvenir',
    location: 'Bangkal',
    image: item8,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//532-C+Gen.+M.+Hizon,+Makati,+1233+Metro+Manila/@14.5429672,121.0127257,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9007d90d0c5:0x9fe2a1087ad72ff4!2m2!1d121.0127104!2d14.5428967?entry=ttuWWI"
},
{
    name: 'Bangkal Thrift Market',
    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
    category: 'Souvenir',
    location: 'Bangkal',
    image: item8,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//532-C+Gen.+M.+Hizon,+Makati,+1233+Metro+Manila/@14.5429672,121.0127257,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9007d90d0c5:0x9fe2a1087ad72ff4!2m2!1d121.0127104!2d14.5428967?entry=ttuWWI"
},
{
    name: 'Bangkal Thrift Market',
    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
    category: 'Souvenir',
    location: 'Bangkal',
    image: item8,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//532-C+Gen.+M.+Hizon,+Makati,+1233+Metro+Manila/@14.5429672,121.0127257,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9007d90d0c5:0x9fe2a1087ad72ff4!2m2!1d121.0127104!2d14.5428967?entry=ttuWWI"
},
{
    name: 'Bangkal Thrift Market',
    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
    category: 'Souvenir',
    location: 'Bangkal',
    image: item8,
    link: "",
    mapLocation: "",
    link: "/category/shop/makati", // Change the link to the route path
    mapLocation: "https://www.google.com/maps/dir//532-C+Gen.+M.+Hizon,+Makati,+1233+Metro+Manila/@14.5429672,121.0127257,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9007d90d0c5:0x9fe2a1087ad72ff4!2m2!1d121.0127104!2d14.5428967?entry=ttuWWI"
},
]);
export function toShopItem() {
    return items;
}
</script>
