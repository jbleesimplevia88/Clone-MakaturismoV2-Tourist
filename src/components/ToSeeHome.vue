<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div class="absolute top-100 left-0 h-[101%] w-[100%]"
                style="background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div class="absolute top-0 left-0 h-[101%] w-[100%] md:"
                style="background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <img v-if="toseeData" :src="getImageUrl(toseeData.backgroundphotophoto)" class="w-full h-[200px] md:h-[700px]" alt="To Do Image" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHAT TO DO
                   
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p
                    class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    {{ toseeData ? toseeData.description : 'Loading...' }}

                </p>
            </div>
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
                        class="z-[1] origin-top-left relative md:absolute left-0 mt-2 w-[400px] md:w-[868px] lg:w-[1150px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu" @click.stop>
                            <div class="grid grid-cols-3 border-b-2 p-3 font-bold ml-5 mr-16">
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
        <img :src="getImageUrl(item.pictureimage.split('|')[0])" class="w-full h-[250px] object-cover rounded-t">
    
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.storename }}</p>
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
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber - 1)"
                        :class="{ 'px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300 bg-white text-[#132540]': currentPage === pageNumber - 1, 'text-white': currentPage !== pageNumber - 1 }">
                        {{ pageNumber }}
                    </button>
                    <button @click="nextPage" :disabled="currentPage === pageCount - 1" class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount, watch, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import item1 from '@/assets/images/CategoryView/ToSee/glorietta.jpeg';
import item2 from '@/assets/images/CategoryView/ToSee/leon.jpeg';
import item3 from '@/assets/images/CategoryView/ToSee/nicolas.jpeg';
import item4 from '@/assets/images/CategoryView/ToSee/victory.jpeg';
import item5 from '@/assets/images/CategoryView/ToSee/happy.jpeg';
import item6 from '@/assets/images/CategoryView/ToSee/heritage.jpeg';
import item7 from '@/assets/images/CategoryView/ToSee/eskinita.png';
import item8 from '@/assets/images/CategoryView/ToSee/alto.png';

const router = useRouter();

const model = reactive({
    items: [],
    imageList: '',
});

const categories = ['Mall', 'Monument', 'Church', 'Park', 'Walkway', 'Heritage House', 'Art Gallery', 'Market'];
const locations = [
    'Bangkal', 'Bel-air', 'Carmona', 'Cembo', 'Dasmarinas', 'Forbes Park', 'Guadalupe Nuevo', 'Kasilawan',
    'La Paz', 'Magallanes', 'Olympia', 'Palanan', 'Pinagkaisahan', 'Pio del Pilar', 'Poblacion', 'San Antonio',
    'San Isidro', 'San Lorenzo ', 'Sta. Cruz', 'Singkamas', 'Tejeros', 'Urdaneta', 'Valenzuela'
];

const currentPage = ref(0);
const pageSize = ref(8);
const showDropdown = ref(false);
const selectedCategory = ref(null);
const selectedLocation = ref(null);
const applyButtonClicked = ref(false);
const toseeData = ref(null);

const fetchToseeData = async () => {
  try {
    const response = await axios.get('/pillar-details');
    toseeData.value = response.data.tosee[0]; // Assuming 'todo' returns an array with at least one item
  } catch (error) {
    console.error('Failed to fetch todo data:', error);
  }
};



onBeforeMount(() => {
    fetchToseeData();
});
const filteredItems = computed(() => {
    let filteredItems = model.items.slice(); // Create a shallow copy of items
    // Apply filters only if the Apply button is clicked


  
    if (applyButtonClicked.value) {
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
            filteredItems = filteredItems.filter(item => item.location === selectedLocation.value);
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

onMounted(() => {
    document.addEventListener('click', handleGlobalClick);
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

const fileNames = computed(() => model.imageList.split('|').filter(name => name !== ''));

const getImageUrl = (fileName) => `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;

const displayToSee = async () => {
    try {
        const response = await axios.post("/getAlltosee");
        model.items = JSON.parse(response.data.message);
        model.imageList = response.data.getimages;
        todosee.value = model.items; // Assign items to toseeinfo
    } catch (error) {
        console.error(error);
    
    }
};

const seeMore = (item) => {
    console.log(item.pictureimage);
    console.log(item.busid);
    const { latitude, longitude } = extractLatLong(item.maplink);
    if (latitude !== null && longitude !== null) {
        // Pass the name parameter in the query object
        router.push({
            name: 'glorietta',
            params: { id: item.busid },
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
        return { latitude, longitude };
    }
    // Try another regex pattern for different URL formats
    const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
    const altMatch = mapLocation.match(altRegex);
    if (altMatch && altMatch.length >= 3) {
        const latitude = parseFloat(altMatch[1]);
        const longitude = parseFloat(altMatch[2]);
        return { latitude, longitude };
    }
    // If no match is found, return null values
    return { latitude: null, longitude: null };
};

onBeforeMount(async () => {
    await displayToSee();
    document.removeEventListener('click', handleGlobalClick);
});
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
</style>
<script>
const items = ref([
    {
        name: 'Glorietta',
                    description: "Experience the ultimate shopping and entertainment extravaganza at Glorietta. This expansive retail complex boasts a diverse mix of shops, dining options, and entertainment facilities. Whether you're in search of fashion, gadgets, or indulgent treats, Glorietta is the go-to destination for an exciting day out.",
                    category: 'Mall',
                    location: 'Ayala-Paseo de Roxas',
                    image: item1,
                    link: "/category/see/glorietta",
                    mapLocation: "https://www.google.com/maps/dir//Glorietta,+Palm+Drive,+Makati,+Metro+Manila/@14.5529213,121.0184921,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9f912a3727f:0xc4541051d1e0072!2m2!1d121.0246671!2d14.5508815?entry=ttu"
                },
                {
                    name: 'Leon Gallery Fine Art',
                    description: "Delve into the rich heritage of Philippine art at Leon Gallery Fine Art. With an impressive collection of historical and contemporary masterpieces, this gallery provides a glimpse into the cultural tapestry of the Philippines. Admire the artistic expression of generations of Filipino artists and immerse yourself in the country's artistic journey.",
                    category: 'Art Gallery',
                    location: 'Legaspi Village',
                    image: item2,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Galleria Nicolas',
                    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
                    category: 'Art Gallery',
                    location: 'Makati CPO + Buendia Ave',
                    image: item3,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Victory Makati',
                    description: "Explore the realm of visual storytelling at Victory Makati. Immerse yourself in powerful images that tell stories of the city and its people at Victory Makati.",
                    category: 'Church',
                    location: 'Ayala-Paseo de Roxas',
                    image: item4,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'The Happy Gallery, Inc.',
                    description: "Experience joy and creativity through a diverse collection of art at The Happy Gallery, Inc. Showcasing a blend of paintings, sculptures, and multimedia artworks, this gallery celebrates the beauty of life and the power of imagination. Step into a realm of happiness and inspiration as you explore the artistry of renowned and up-and-coming artists.",
                    category: 'Art Gallery',
                    // cant find happy gallery, inc under google
                    location: 'Makati Commercial Center',
                    image: item5,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Heritage Art Center',
                    description: "Celebrate the beauty of Philippine heritage at Heritage Art Center. This cultural haven features an array of traditional artworks, crafts, and artifacts that showcase the country's diverse cultural roots. From intricate tribal crafts to Filipino folk art, this center is a treasure trove of historical and cultural significance.",
                    category: 'Art Gallery',
                    location: 'Makati Commercial Center',
                    image: item6,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Eskinita Art Gallery',
                    description: "Experience the vibrant and eclectic spirit of Filipino urban art at Eskinita Art Gallery. Celebrating street art and graffiti culture, this gallery showcases works that reflect the dynamic urban landscape of the Philippines. Get inspired by the bold and colorful expressions of Filipino street artists at Eskinita Art Gallery.",
                    category: 'Art Gallery',
                    location: 'Bangkal',
                    image: item7,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Altro Mondo Corp.',
                    description: "Journey into the world of contemporary art at Altro Mondo Corp. This gallery showcases a diverse range of contemporary works, from paintings and sculptures to mixed-media art. Immerse yourself in the artistry of talented contemporary artists from the Philippines and around the globe at Altro Mondo Corp.",
                    category: 'Art Gallery',
                    location: 'Salcedo Village',
                    image: item8,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Altro Mondo Corp.',
                    description: "Journey into the world of contemporary art at Altro Mondo Corp. This gallery showcases a diverse range of contemporary works, from paintings and sculptures to mixed-media art. Immerse yourself in the artistry of talented contemporary artists from the Philippines and around the globe at Altro Mondo Corp.",
                    category: 'Art Gallery',
                    location: 'Salcedo Village',
                    image: item8,
                    link: "",
                    mapLocation: ""
                },

]);
export function toSeeItem() {
    return items;
}
</script>