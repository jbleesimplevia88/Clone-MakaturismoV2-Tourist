
<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <img class="w-full h-[300px] md:h-[700px]" src="@/assets/images/CategoryView/ToTour/banner.jpeg" alt="" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    MAKATURISMO
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1] ">
                <p
                    class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem]  px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    Join the Makati Free Walking Tours and marvel around the art pieces splattered across the city. It’s one
                    of the best ways to explore the city as it beats the infamous traffic while giving your body a little
                    exercise.
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5" style="background-color: #102E61;">
        <div>
           
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="(item, index) in filteredItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="item.image" alt="">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.name }}</p>
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

<script  setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import item1 from '@/assets/images/CategoryView/ToTour/legazpi.png';
import item2 from '@/assets/images/CategoryView/ToTour/salcedo.jpeg';
import item3 from '@/assets/images/CategoryView/ToTour/poblacion.jpeg';
import item4 from '@/assets/images/CategoryView/ToTour/heritage.jpeg';
import item5 from '@/assets/images/CategoryView/ToTour/central.jpeg';
import item6 from '@/assets/images/CategoryView/ToTour/garden.jpeg';

const router = useRouter();

const items = ref([
    {
        name: "Central Business District Tour",
        description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
        category: 'District Tour',
        location: 'Makati Commercial Center',
        image: item5,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: 'Walkway Tour with Legazpi Market',
        description: "Embark on a gastronomic journey and cultural immersion with the Walkway Tour featuring Legazpi Market. Explore the vibrant Legazpi Market, a popular weekend market offering a diverse selection of local products and mouthwatering treats. This guided tour will take you through a culinary adventure, introducing you to the rich flavors and aromas of Philippine cuisine.",
        category: 'Market Tour',
        location: 'Legaspi Village',
        image: item1,
        link: "",
        mapLocation: ""
    },
    {
        name: 'Walkway Tour with Salcedo Market',
        description: "Experience the best of Salcedo Market through a captivating Walkway Tour. Wander through the bustling market stalls filled with fresh produce, artisanal goods, and delectable street food. Discover the local flavors and culinary delights that make Salcedo Market a must-visit destination for foodies and culture enthusiasts.",
        category: 'Market Tour',
        location: 'Salcedo Village',
        image: item2,
        link: "",
        mapLocation: ""
    },
    {
        name: "Poblacion Walk Tour",
        description: "Embark on an unforgettable adventure through the vibrant streets of Poblacion with our Poblacion Walk Tour. Immerse yourself in the bohemian atmosphere of Makati's hip and artistic neighborhood as you explore trendy cafes, bars, and galleries. Engage with the friendly locals, discover the local art scene, and indulge in diverse culinary delights. As the sun sets, experience the lively nightlife and dance the night away. Let the energy of Poblacion ignite your senses and leave you with cherished memories.",
        category: 'City Tour',
        location: 'Poblacion',
        image: item3,
        link: "",
        mapLocation: ""
    },
    {
        name: "Poblacion Heritage Tour",
        description: "Travel back in time with our Poblacion Heritage Tour and unravel the historical treasures of Makati's oldest district. Explore well-preserved ancestral houses, iconic churches, and colonial landmarks that narrate the city's storied past. Walk along cobbled streets and immerse yourself in the nostalgic charm of bygone eras. Connect with the local community and gain insights into the traditions that have endured through generations. Discover the roots of Makati's cultural identity and witness the enduring legacy of Poblacion's history and heritage.",
        category: ['District Tour', 'Church Tour'],
        location: 'Poblacion',
        image: item4,
        link: "",
        mapLocation: ""
    },
    {
        name: "The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour",
        description: "Discover the spiritual side of Makati with The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour. This unique tour takes you through the serene and contemplative garden, featuring life-sized sculptures depicting the Passion of Christ.",
        category: 'Church Tour',
        location: 'Magallanes Village',
        image: item6,
        link: "",
        mapLocation: ""
    },
    {
        name: "The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour",
        description: "Discover the spiritual side of Makati with The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour. This unique tour takes you through the serene and contemplative garden, featuring life-sized sculptures depicting the Passion of Christ.",
        category: 'Church Tour',
        location: 'Magallanes Village',
        image: item6,
        link: "",
        mapLocation: ""
    }
    ,
]);

const categories = ['District Tour', 'Church Tour', 'Museum Tour', 'City Tour', 'Market Tour'];
const locations = [
    'Bangkal',
    'Bel-air',
    'Carmona',
    'Cembo',
    'Dasmarinas',
    'Forbes Park',
    'Guadalupe Nuevo',
    'Kasilawan',
    'La Paz',
    'Magallanes',
    'Olympia',
    'Palanan',
    'Pinagkaisahan',
    'Pio del Pilar',
    'Poblacion',
    'San Antonio',
    'San Isidro',
    'San Lorenzo ',
    'Sta. Cruz',
    'Singkamas',
    'Tejeros',
    'Urdaneta',
    'Valenzuela'
];

const currentPage = ref(0);
const pageSize = ref(8);
const showDropdown = ref(false);
const selectedCategory = ref(null);
const selectedLocation = ref(null);
const applyButtonClicked = ref(false);

const filteredItems = computed(() => {
    let filteredItems = items.value.slice(); // Create a shallow copy of items
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
            filteredItems = filteredItems.filter(item => {
                return item.location === selectedLocation.value;
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
const paginationEndIndex = computed(() => {
    const end = Math.min((currentPage.value + 1) * pageSize.value, filteredItems.value.length);
    return end;
});
const totalRecords = computed(() => items.value.length);

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
    const { latitude, longitude } = extractLatLong(item.mapLocation);
    if (latitude !== null && longitude !== null) {
        // Pass the name parameter in the query object
        router.push({
            name: 'central',
            query: {
                latitude,
                longitude,
                name: item.name
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
</script>

<!-- I NEED THS SEPARATE SCRIPT AS WE CANNOT USE ES MODULE UNDER SCRIPT SETUP -->
<script>

const items = ref([
    {
        name: "Central Business District Tour",
        description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
        category: 'District Tour',
        location: 'Makati Commercial Center',
        image: item5,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: 'Walkway Tour with Legazpi Market',
        description: "Embark on a gastronomic journey and cultural immersion with the Walkway Tour featuring Legazpi Market. Explore the vibrant Legazpi Market, a popular weekend market offering a diverse selection of local products and mouthwatering treats. This guided tour will take you through a culinary adventure, introducing you to the rich flavors and aromas of Philippine cuisine.",
        category: 'Market Tour',
        location: 'Legaspi Village',
        image: item1,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: 'Walkway Tour with Salcedo Market',
        description: "Experience the best of Salcedo Market through a captivating Walkway Tour. Wander through the bustling market stalls filled with fresh produce, artisanal goods, and delectable street food. Discover the local flavors and culinary delights that make Salcedo Market a must-visit destination for foodies and culture enthusiasts.",
        category: 'Market Tour',
        location: 'Salcedo Village',
        image: item2,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: "Poblacion Walk Tour",
        description: "Embark on an unforgettable adventure through the vibrant streets of Poblacion with our Poblacion Walk Tour. Immerse yourself in the bohemian atmosphere of Makati's hip and artistic neighborhood as you explore trendy cafes, bars, and galleries. Engage with the friendly locals, discover the local art scene, and indulge in diverse culinary delights. As the sun sets, experience the lively nightlife and dance the night away. Let the energy of Poblacion ignite your senses and leave you with cherished memories.",
        category: 'City Tour',
        location: 'Poblacion',
        image: item3,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: "Poblacion Heritage Tour",
        description: "Travel back in time with our Poblacion Heritage Tour and unravel the historical treasures of Makati's oldest district. Explore well-preserved ancestral houses, iconic churches, and colonial landmarks that narrate the city's storied past. Walk along cobbled streets and immerse yourself in the nostalgic charm of bygone eras. Connect with the local community and gain insights into the traditions that have endured through generations. Discover the roots of Makati's cultural identity and witness the enduring legacy of Poblacion's history and heritage.",
        category: ['District Tour', 'Church Tour'],
        location: 'Poblacion',
        image: item4,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: "The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour",
        description: "Discover the spiritual side of Makati with The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour. This unique tour takes you through the serene and contemplative garden, featuring life-sized sculptures depicting the Passion of Christ.",
        category: 'Church Tour',
        location: 'Magallanes Village',
        image: item6,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    },
    {
        name: "The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour",
        description: "Discover the spiritual side of Makati with The Garden Way of the Cross of St. Alphonsus Mary de Liguori Church Tour. This unique tour takes you through the serene and contemplative garden, featuring life-sized sculptures depicting the Passion of Christ.",
        category: 'Church Tour',
        location: 'Magallanes Village',
        image: item6,
        link: "/category/tour/central",
        mapLocation: "https://www.google.com/maps/dir//Makati+Business+Central+Foods+Corp.,+Makati+Ave,+Makati,+Metro+Manila/@14.5524615,121.023803,18.45z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c91ac93d6d43:0x4810cea98136073a!2m2!1d121.0237498!2d14.552239?entry=ttu"
    }
    ,
]);



export function toTourItem() {
    return items;
}

</script>
