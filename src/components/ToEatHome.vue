
<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <div>
                <img v-if="toeatData && toeatData.backgroundphotophoto" :src="getImageUrl(toeatData.backgroundphotophoto)"
                    class="w-full h-[300px] md:h-[700px]" alt="To Do Image" />
                <img v-else :src="defaultImage" class="w-full h-[300px] md:h-[700px]" alt="Default To Do Image" />
            </div>
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHERE TO EAT
                </p>
            </div>
            <div class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    {{ toeatData ? toeatData.description : '' }}
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5" style="background-color: #102E61;">
        <div>
            <!-- Filter dropdown WEB-->
            <div class="pb-10 hidden lg:block">
                <div class="relative text-left" @click.stop ref="webDropdown">
                    <button class="flex bg-white rounded-md font-bold p-1 pl-3 pr-3 justify-center items-center focus:outline-none" @click="toggleDropdown">
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
                    <div v-if="showDropdown" class="z-[1] origin-top-left relative md:absolute left-0 mt-2 w-[400x] md:w-[868px] lg:w-[1150px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu" @click.stop>
                            <div class="grid grid-cols-3 border-b-2 p-3 font-bold ml-10">
                                <div class="">
                                    <h2>Category</h2>
                                </div>
                                <div>
                                    <h1>Explore by Area</h1>
                                </div>
                                <div class="flex justify-end">
                                    <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 grid-row-3 mt-5">
                                <div class="relative px-2  -mt-2 -mr-10" style="border-right: 1px solid #0000004D;top:5%; bottom: 15%; right: 0;">
                                    <div class="absolute" style=" bottom: 15%; right: 0;">
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
                                <div class="relative px-2 ml-10 -mt-2">
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
                                <button @click="handleApplyFilter" class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Filter dropdown -->
            </div>
            <div class="pb-10 lg:hidden" ref="mobileDropdown">
                <!-- Filter dropdown MOBILE-->
                <div class="relative text-left ">
                    <button class="flex bg-white rounded-md font-bold p-1 pl-3 pr-3 justify-center items-center focus:outline-none" @click="toggleDropdown">
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
                            <div class="relative z-50 overflow-hidden rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                                    <div class="grid grid-cols-2 border-b-2 p-3 font-bold ml-5 mr-5">
                                        <div>
                                            <h2 class="ml-5">Category</h2>
                                        </div>
                                        <div class="flex justify-end">
                                            <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
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
                    <input type="radio" :id="'locationRadio-' + index" :value="location" v-model="selectedLocation" name="location">
                    <span class="ml-2 m-0 p-0 uppercase font-bold">{{ location }}</span>
                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                        <button @click="handleApplyFilter" class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- End of Filter dropdown -->
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="(item, index) in filteredItems" :key="index" class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative" v-if="item.pictureimage">
                        <img :src="getImageUrl(item.pictureimage.split('|')[0])" class="w-full h-[250px] object-cover rounded-t">
                        <div class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent"></div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.storename }}</p>
                        <p class="absolute bottom-2 left-2 text-white text-xs">{{ item.address }}</p>
                    </div>
                    <div class="p-2 w-full">
                        <p class="text-white text-xs line-clamp-3">{{ item.description }}</p>
                    </div>
                    <div class="p-1 flex justify-end items-center">
                        <button @click="seeMore(item)" class="flex items-center px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300 text-nowrap text-sm">
                  <span>Read More</span>
                  <span class="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                  </span>
                </button>
                    </div>
                </div>
            </div>
            <div v-if="filteredItems.length === 0" class="text-white text-center font p-14">
                <p>We're sorry, but we couldn't find any activity that matches your selected filter. Try adjusting your filter or explore other options.</p>
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
                    <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber - 1)" :class="{ 'px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300 bg-white text-[#132540]': currentPage === pageNumber - 1, 'text-white': currentPage !== pageNumber - 1 }">
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
    import defaultImage from '@/assets/images/CategoryView/ToEat/banner.jpeg'; // Default image

    import {
        useCartStoreEat
    } from '@/stores/toEatCart';
    const router = useRouter();
    const useToEat = useCartStoreEat();
    const model = reactive({
        items: [],
        imageList: '',
    });
    const categories = ['American', 'Argentine', 'Asian', 'Australian', 'Chinese', 'European', 'Filipino', 'French', 'German', 'Halal', 'Indian', 'Irish', 'Italian', 'Japanese', 'Korean', 'Mediterranean', 'Mexican', 'Singapore', 'Spanish', 'Swiss', 'Thai', 'Vietnamese'];
    const locations = ref([]);
    const currentPage = ref(0);
    const pageSize = ref(8);
    const showDropdown = ref(false);
    const selectedCategory = ref(null);
    const selectedLocation = ref(null);
    const applyButtonClicked = ref(false);
    const toeatinfo = ref([]);
    const toeatData = ref(null);
    const fetchToeatData = async() => {
        try {
            const response = await axios.get('/pillar-details');
            toeatData.value = response.data.toeat[0]; // Assuming 'todo' returns an array with at least one item
        } catch (error) {
            console.error('Failed to fetch todo data:', error);
        }
    };
    const fetchManualFilters = async() => {
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
    onBeforeMount(() => {
        fetchToeatData();
        fetchManualFilters(); // Fetch area filters on mount
    });
    const paginationEndIndex = computed(() => {
        const end = Math.min((currentPage.value + 1) * pageSize.value, filteredItems.value.length);
        return end;
    });
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
        useToEat.getShopData(item);
        const {
            latitude,
            longitude
        } = extractLatLong(item.maplink);
        if (latitude !== null && longitude !== null) {
            // Pass the name parameter in the query object
            router.push({
                name: 'Little Tokyo',
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
    const getGetEat = async() => {
        try {
            const response = await axios.post("/getAlltoeat");
            model.items = JSON.parse(response.data.message);
            model.imageList = response.data.getimages;
            toeatinfo.value = model.items; // Assign items to toeatinfo
        } catch (error) {
            console.error(error);
        }
    };
    // Call getGetEat function when component is mounted
    const fileNames = computed(() => model.imageList.split('|').filter(name => name !== ''));
    const getImageUrl = (pictureimage) => {
        if (!pictureimage) return ''; // Return empty string if pictureimage is not defined
        // Extract the filename of the first image
        const images = pictureimage.split('|').filter(img => img.trim() !== ''); // Split by "|" and remove empty strings
        const firstImage = images[0]; // Get the first image filename
        // Construct the full URL
        return `${import.meta.env.VITE_STORAGE_BASE_URL}/${firstImage}`;
    };
    onBeforeMount(async() => {
        await getGetEat();
        document.removeEventListener('click', handleGlobalClick);
    });
    watch(filteredItems, (newVal) => {
        console.log(newVal);
    });
</script>


<!-- I NEED THS SEPARATE SCRIPT AS WE CANNOT USE ES MODULE UNDER SCRIPT SETUP -->
<script>
    const items = ref([{
            name: 'Little Tokyo',
            description: "Savor the authentic flavors of Japan in the heart of Makati at Little Tokyo. This culinary enclave offers a delightful array of Japanese restaurants and eateries, serving up delicious sushi, ramen, tempura, and more. Whether you're a sushi aficionado or a ramen lover, Little Tokyo promises a delectable dining experience in a charming Japanese setting.",
            category: 'Restaurant/Food District',
            cuisine: 'Japanese',
            location: 'Pio del Pilar',
            image: item1,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'La Nuova Pastelaria',
            description: "Transport your taste buds to Italy at La Nouva Pastelaria. This charming Italian cafe and bakery offers a delectable selection of pastries, pasta, and pizza, all made with authentic Italian flair. Sip on freshly brewed coffee while savoring the delightful flavors of Italy at La Nouva Pastelaria.",
            category: 'Restaurant/Bakery',
            cuisine: 'Italian',
            location: 'Forbes Park South',
            image: item2,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Tapenade',
            description: 'Embark on a culinary journey through Mediterranean flavors at Tapenade. This vibrant restaurant showcases a buffet of Mediterranean-inspired dishes, from fresh salads and seafood to succulent meats and delectable desserts. With a lively ambiance and an array of flavorful options, Tapenade is a favorite among food enthusiasts.',
            category: 'Restaurant',
            cuisine: 'Mediterranean',
            location: 'Ayala-Paseo de Roxas',
            image: item3,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Salon De Ning',
            description: "Transport yourself to a bygone era of opulence and luxury at Salon De Ning. This glamorous restaurant pays homage to the elegance of the 1930s Shanghai, with a menu inspired by Asian and Western cuisines. Experience the nostalgia of a bygone era while enjoying a sumptuous meal at Salon De Ning.",
            category: 'Restaurant',
            cuisine: 'Asian',
            location: 'Ayala-Paseo de Roxas',
            image: item4,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Maple',
            description: "Indulge in a delightful fusion of flavors at Maple. This contemporary restaurant boasts a menu inspired by global cuisines, featuring creative dishes made with locally sourced ingredients. From scrumptious breakfast options to savory mains and delectable desserts, Maple is the perfect spot for a memorable dining experience.",
            category: 'Restaurant',
            cuisine: 'American',
            location: 'Dasmarinas Village North',
            image: item5,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'The Bar at The Peninsula Manila',
            description: "Experience sophistication and elegance at The Bar. This upscale dining venue offers a refined menu of international and Filipino cuisines, complemented by an extensive selection of fine wines and spirits. Whether it's a romantic dinner or a celebratory meal, The Bar ensures a delightful culinary experience in a luxurious setting.",
            category: 'Restaurant',
            cuisine: ['Asian', 'Filipino', 'Chinese', 'Japanese', 'Italian'],
            location: 'Ayala-Paseo de Roxas',
            image: item6,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Old Manila at The Peninsula Manila',
            description: "Elevate your dining experience at Old Manila, a culinary gem that celebrates modern European cuisine. With a focus on premium ingredients and artful presentation, each dish is a masterpiece that delights both the palate and the eye. Indulge in a gastronomic adventure at Old Manila and experience the art of fine dining.",
            category: 'Restaurant',
            cuisine: ['European', 'French'],
            location: 'Ayala-Paseo de Roxas',
            image: item7,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Brera Delicatessen',
            description: "Satisfy your cravings for authentic Italian delicacies at Brera Delicatessen. This cozy trattoria serves up an array of traditional Italian dishes, from wood-fired pizzas to handcrafted pasta. With warm Italian hospitality and an inviting ambiance, Brera Delicatessen promises an unforgettable dining experience in Makati.",
            category: 'Restaurant',
            cuisine: 'Italian',
            location: 'San Antonio Village',
            image: item8,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Brera Delicatessen',
            description: "Satisfy your cravings for authentic Italian delicacies at Brera Delicatessen. This cozy trattoria serves up an array of traditional Italian dishes, from wood-fired pizzas to handcrafted pasta. With warm Italian hospitality and an inviting ambiance, Brera Delicatessen promises an unforgettable dining experience in Makati.",
            category: 'Restaurant',
            cuisine: 'Italian',
            location: 'San Antonio Village',
            image: item8,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
        {
            name: 'Brera Delicatessen',
            description: "Satisfy your cravings for authentic Italian delicacies at Brera Delicatessen. This cozy trattoria serves up an array of traditional Italian dishes, from wood-fired pizzas to handcrafted pasta. With warm Italian hospitality and an inviting ambiance, Brera Delicatessen promises an unforgettable dining experience in Makati.",
            category: 'Restaurant',
            cuisine: 'Italian',
            location: 'San Antonio Village',
            image: item8,
            link: "/category/eat/LittleTokyo",
            mapLocation: "https://www.google.com/maps/dir//2277+Chino+Roces+Ave,+Pasong+Tamo+Corner+Amorsolo+Street,+Makati,+Legazpi+Village,+Makati,+Metro+Manila/@14.5533656,121.014666,20.18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9127a40d8f3:0x167c252a58dad21c!2m2!1d121.0146986!2d14.5535301?entry=ttu"
        },
    ]);
    export function toEatItem() {
        return items;
    }
</script>
