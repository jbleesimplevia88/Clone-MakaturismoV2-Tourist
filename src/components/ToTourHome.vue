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
    <div class="mx-auto px-3 lg:px-32 pb-5 pt-5" style="background-color: #102E61;">
        <div>
            <div class="pb-10">
                <!-- Filter dropdown -->
                <div class="relative hidden lg:block text-left" @click.stop ref="webDropdown">
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
                        class="z-[1] origin-top-left relative md:absolute left-0 mt-2 w-[400x] md:w-[768px] xl:w-[1000px] 2xl:w-[1093px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                            <div class="grid grid-cols-3 border-b-2 p-3 font-bold ml-5 mr-5">
                                <div>
                                    <h2>What to do</h2>
                                </div>
                                <div>
                                    <h1>Barangays</h1>
                                </div>
                                <div class="flex justify-end">
                                    <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 grid-row-3 mt-5">
                                <div class="relative px-2">
                                    <div class="absolute"
                                        style="border-right: 1px solid #0000004D; top: 15%; bottom: 15%; right: 0;">
                                    </div>
                                    <div class="grid grid-rows-8 grid-flow-col gap-4 ml-4 p-2">
                                        <div v-for="(category, index) in categories" :key="'category-' + index">
                                            <label :for="'categoryCheckbox-' + index" class="flex items-center">
                                                <input type="checkbox" :id="'categoryCheckbox-' + index" :value="category"
                                                    v-model="selectedCategory">
                                                <span class="ml-2 m-0 p-0 uppercase text-[12px] font-bold">{{ category
                                                }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2 px-2">
                                    <div
                                        class="grid grid-rows-12 grid-flow-row-dense lg:grid-rows-8 md:grid-flow-col gap-4 mr-4 p-2">
                                        <div v-for="(location, index) in locations" :key="'location-' + index">
                                            <label :for="'locationCheckbox-' + index" class="flex items-left">
                                                <input type="checkbox" :id="'locationCheckbox-' + index" :value="location"
                                                    v-model="selectedLocation" class="-mt-12">
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
                <!-- Filter dropdown MOBILE-->
                <div class="relative text-left lg:hidden" ref="mobileDropdown">
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
                                            <h2 class="ml-5">Filters</h2>
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
                                                    <label :for="'categoryCheckbox-' + index" class="flex items-center">
                                                        <input type="checkbox" :id="'categoryCheckbox-' + index"
                                                            :value="category" v-model="selectedCategory">
                                                        <span class="ml-2 m-0 p-0 uppercase font-bold">{{
                                                            category
                                                        }}</span>
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
                <!-- End  Filter dropdown MOBILE  -->
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="(item, index) in filteredItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="item.image" alt="">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 pl-2 pr-2 text-white text-lg xl:text-xl font-semibold">{{ item.name }}
                        </p>
                        <p class="absolute bottom-2 pl-2 pr-2 text-white text-xs">{{ item.category }}</p>
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
                        :class="{ 'px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300 bg-white text-[#132540]': currentPage + 1 === pageNumber, 'text-white': currentPage + 1 !== pageNumber }">
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

<script>
import item1 from '@/assets/images/CategoryView/ToTour/legazpi.png';
import item2 from '@/assets/images/CategoryView/ToTour/salcedo.jpeg';
import item3 from '@/assets/images/CategoryView/ToTour/poblacion.jpeg';
import item4 from '@/assets/images/CategoryView/ToTour/heritage.jpeg';
import item5 from '@/assets/images/CategoryView/ToTour/central.jpeg';
import item6 from '@/assets/images/CategoryView/ToTour/garden.jpeg';
export default {
    data() {
        return {
            items: [{
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
            ],
            locations: [
                'Ayala-Paseo de Roxas',
                'Bangkal',
                'Bel-air',
                'Cembo',
                'Comembo',
                'Dasmarinas Village North',
                'Dasmarinas Village South',
                'Forbes Park North',
                'Forbes Park South',
                'Fort Bonifacio Naval Station',
                'Fort Bonifacio (Camp)',
                'Greenbelt',
                'Guadalupe Nuevo',
                'Guadalupe Viejo',
                'Kasilawan',
                'La Paz -Singkamas -Tejeros',
                'Legaspi Village',
                'Magallanes Village',
                'Makati Commercial Center',
                'Makati CPO + Buendia Ave',
                'Olympia & Carmona',
                'Palanan',
                'Pasong Tamo & Ecology Village',
                'Pembo',
                'Pinagkaisahan-Pitogo',
                'Pio del Pilar',
                'Poblacion',
                'Rembo (East)',
                'Rembo (West)',
                'Salcedo Village',
                'San Antonio Village',
                'San Isidro',
                'San Lorenzo Village',
                'Sta. Cruz',
                'Urdaneta Village',
                'Valenzuela, Santiago, Rizal'
            ],
            categories: ['District Tour', 'Church Tour', 'Museum Tour', 'City Tour', 'Market Tour'],
            currentPage: 0,
            pageSize: 6,
            showDropdown: false,
            selectedCategory: [],
            selectedLocation: [],
            applyButtonClicked: false,
        };
    },
    watch: {
        selectedCategory(newValue, oldValue) {
            // Update applyButtonClicked when category changes
            if (newValue !== oldValue) {
                this.applyButtonClicked = false;
            }
        },
        selectedLocation(newValue, oldValue) {
            // Update applyButtonClicked when location changes
            if (newValue !== oldValue) {
                console.log('Location radio button clicked');
                this.applyButtonClicked = false;
            }
        },
    },
    computed: {
        // Replace the paginatedItems computed property
        paginatedItems() {
            const startIndex = this.currentPage * this.pageSize;
            return this.items.slice(startIndex, startIndex + this.pageSize);
        },
        // Update the filteredItems computed property to only filter items
        filteredItems() {
            let filteredItems = this.items.slice(); // Create a shallow copy of items
            // Apply filters only if the Apply button is clicked
            if (this.applyButtonClicked) {
                // Filter by category
                if (this.selectedCategory && this.selectedCategory.length > 0 && this.selectedCategory[0] !== 'All') {
                    filteredItems = filteredItems.filter(item => {
                        if (Array.isArray(item.category)) {
                            return this.selectedCategory.some(cat => item.category.includes(cat));
                        } else {
                            return this.selectedCategory.includes(item.category);
                        }
                    });
                }
                // Filter by location
                if (this.selectedLocation && this.selectedLocation.length > 0 && this.selectedLocation[0] !== 'All') {
                    filteredItems = filteredItems.filter(item => {
                        if (Array.isArray(item.location)) {
                            return this.selectedLocation.some(loc => item.location.includes(loc));
                        } else {
                            return this.selectedLocation.includes(item.location);
                        }
                    });
                }
            }
            const startIndex = this.currentPage * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return filteredItems.slice(startIndex, endIndex);

        },
        pageCount() {
            return Math.ceil(this.totalRecords / this.pageSize);
        },
        paginationStartIndex() {
            if (this.filteredItems.length === 0) {
                return 0; // or any other appropriate value if you want to indicate that no items are displayed
            } else {
                return 1;
            }
        },

        paginationEndIndex() {
            const end = Math.min((this.currentPage + 1) * this.pageSize, this.filteredItems.length);
            return end;
        },

        totalRecords() {
            return this.items.length;
        },
    },
    mounted() {
        document.addEventListener('click', this.handleGlobalClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleGlobalClick);
    },
    methods: {
        handleApplyFilter() {
            this.applyButtonClicked = true;
            console.log('Apply button clicked');
            console.log('Selected category:', this.selectedCategory);
            console.log('Selected location:', this.selectedLocation);
            this.currentPage = 0; // Reset currentPage when filter is applied
            this.showDropdown = false;
            // Call the computed property to update filteredItems
            console.log('Filtered Items: ', this.filteredItems);
        },
        nextPage() {
            if (this.currentPage < this.pageCount - 1) {
                this.currentPage++;
            }
        },
        prevPage() {
            this.currentPage--;
        },
        goToPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        handleGlobalClick(event) {
            if (!this.$refs.webDropdown.contains(event.target) && !this.$refs.mobileDropdown.contains(event.target)) {
                this.showDropdown = false;
            }
        },
        applyFilter(category) {
            // Implement filtering logic based on selected category
            console.log('Selected category:', category);
        },
        seeMore(item) {
            const {
                latitude,
                longitude
            } = this.extractLatLong(item.mapLocation);
            if (latitude !== null && longitude !== null) {
                this.$router.push({
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
        },
        extractLatLong(mapLocation) {
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
            return {
                latitude: null,
                longitude: null
            };
        },
    },
};
</script>