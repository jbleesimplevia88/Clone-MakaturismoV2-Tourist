<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <img class="w-full h-[200px] md:h-[700px]" src="@/assets/images/CategoryView/ToEat/banner.jpeg" alt="" />
            <div
                class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHERE TO EAT
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p
                    class="pt-[1.5rem] lg:pt-[6rem] pb-6 lg:pb-0 text-[14px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    Street food, coffee shops, fast food, fine dining restaurants - what ever you are craving for you
                    will
                    find it here in Makati. Gear up, go on a food crawl, and savor the flavorful treats that Makati has
                    in
                    store for you.
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
                                    <h2>Where to eat</h2>
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
                            <div class="grid grid-cols-6 mt-5">
                                <div class="relative col-span-2 px-2">
                                    <div class="absolute"
                                        style="border-right: 1px solid #0000004D; top: 15%; bottom: 15%; left:95%;">
                                    </div>
                                    <div class="grid grid-rows-8 grid-cols-2 gap-3 ml-4 p-2 w-[290px]">
                                        <div v-for="(cuisine, index) in cuisines" :key="'cuisine-' + index">
                                            <label :for="'cuisineCheckbox-' + index" class="flex items-center">
                                                <input type="checkbox" :id="'cuisineCheckbox-' + index" :value="cuisine"
                                                    v-model="selectedCuisine">
                                                <span class="ml-2 m-0 p-0 uppercase text-[12px] font-bold">{{ cuisine
                                                    }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class=" col-span-3 px-2">
                                    <div class="grid grid-rows-8 grid-flow-col gap-3 ml-4 p-2">
                                        <div v-for="(location, index) in locations" :key="'location-' + index">
                                            <label :for="'locationCheckbox-' + index" class="flex items-left">
                                                <input type="checkbox" :id="'locationCheckbox-' + index"
                                                    :value="location" v-model="selectedLocation" class="-mt-12">
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
                                            <svg @click="toggleDropdown()" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="overflow-y-auto max-h-[350px] ml-5 mr-5 mt-5 custom-scrollbar">
                                        <div class="relative px-2">
                                            <div class="grid gap-4 ml-4 p-2">
                                                <div v-for="(cuisine, index) in cuisines" :key="'cuisine-' + index">
                                                    <label :for="'cuisineCheckbox-' + index" class="flex items-center">
                                                        <input type="checkbox" :id="'cuisineCheckbox-' + index"
                                                            :value="cuisine" v-model="selectedCuisine">
                                                        <span class="ml-2 m-0 p-0 uppercase  font-bold">{{
                                                            cuisine
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
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="(item, index) in filteredItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="item.image" alt="">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{ item.name }}
                        </p>
                        <p class="absolute bottom-2 left-2 text-white text-xs">{{ item.category }}</p>
                    </div>
                    <div class="p-2 w-full">
                        <p class="text-white text-xs line-clamp-3">{{ item.description }}</p>
                    </div>
                    <div class="p-1 flex justify-end items-center">
                        <button @click="seeMore(item)"
                            class="flex items-center px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300 text-nowrap text-sm">
                            <span>See More</span>
                            <span class="ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="filteredItems.length === 0" class="text-white text-center font p-14">
                <p>We're sorry, but we couldn't find a place that matches your selected filter. Try adjusting your
                    filter
                    or explore other options.</p>
            </div>
            <!-- Pagination controls -->
            <div class="grid grid-cols-2">
                <div class="flex justify-start items-center">
                    <p class="text-center text-white">Showing <span class="text-[#29BFD6]">{{ paginationStartIndex }} -
                            {{
                                paginationEndIndex }}</span> results from <span class="text-[#29BFD6]">{{ totalRecords
                            }}</span> records
                    </p>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <button @click="prevPage" :disabled="currentPage === 0" class="text-white"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button v-if="currentPage != pageCount - pageCount" @click="goToPage(currentPage - 1)"
                        class="px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300">{{
                            currentPage }}</button>
                    <button
                        class="px-3 py-1 border border-white m-1 rounded-md transition-colors duration-300 bg-white text-[#132540]">{{
                            currentPage + 1 }}</button>
                    <button v-if="currentPage != pageCount - 1" @click="goToPage(currentPage + 1)"
                        class="px-3 py-1 border border-white text-white m-1 rounded-md hover:bg-white hover:text-[#132540] transition-colors duration-300">{{
                            currentPage + 2 }}</button>
                    <button @click="nextPage" :disabled="currentPage === pageCount - 1" class="text-white"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
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
import item1 from '@/assets/images/CategoryView/ToEat/little.png';
import item2 from '@/assets/images/CategoryView/ToEat/lanuova.jpeg';
import item3 from '@/assets/images/CategoryView/ToEat/tapenade.jpeg';
import item4 from '@/assets/images/CategoryView/ToEat/salon.jpeg';
import item5 from '@/assets/images/CategoryView/ToEat/maple.jpeg';
import item6 from '@/assets/images/CategoryView/ToEat/thebar.jpeg';
import item7 from '@/assets/images/CategoryView/ToEat/oldmanila.jpeg';
import item8 from '@/assets/images/CategoryView/ToEat/brera.jpeg';
export default {
    data() {
        return {
            items: [{
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
                link: "",
                mapLocation: ""
            },
            {
                name: 'Tapenade',
                description: 'Embark on a culinary journey through Mediterranean flavors at Tapenade. This vibrant restaurant showcases a buffet of Mediterranean-inspired dishes, from fresh salads and seafood to succulent meats and delectable desserts. With a lively ambiance and an array of flavorful options, Tapenade is a favorite among food enthusiasts.',
                category: 'Restaurant',
                cuisine: 'Mediterranean',
                location: 'Ayala-Paseo de Roxas',
                image: item3,
                link: "",
                mapLocation: ""
            },
            {
                name: 'Salon De Ning',
                description: "Transport yourself to a bygone era of opulence and luxury at Salon De Ning. This glamorous restaurant pays homage to the elegance of the 1930s Shanghai, with a menu inspired by Asian and Western cuisines. Experience the nostalgia of a bygone era while enjoying a sumptuous meal at Salon De Ning.",
                category: 'Restaurant',
                cuisine: 'Asian',
                location: 'Ayala-Paseo de Roxas',
                image: item4,
                link: "",
                mapLocation: ""
            },
            {
                name: 'Maple',
                description: "Indulge in a delightful fusion of flavors at Maple. This contemporary restaurant boasts a menu inspired by global cuisines, featuring creative dishes made with locally sourced ingredients. From scrumptious breakfast options to savory mains and delectable desserts, Maple is the perfect spot for a memorable dining experience.",
                category: 'Restaurant',
                cuisine: 'American',
                location: 'Dasmarinas Village North',
                image: item5,
                link: "",
                mapLocation: ""
            },
            {
                name: 'The Bar at The Peninsula Manila',
                description: "Experience sophistication and elegance at The Bar. This upscale dining venue offers a refined menu of international and Filipino cuisines, complemented by an extensive selection of fine wines and spirits. Whether it's a romantic dinner or a celebratory meal, The Bar ensures a delightful culinary experience in a luxurious setting.",
                category: 'Restaurant',
                cuisine: ['Asian', 'Filipino', 'Chinese', 'Japanese', 'Italian'],
                location: 'Ayala-Paseo de Roxas',
                image: item6,
                link: "",
                mapLocation: ""
            },
            {
                name: 'Old Manila at The Peninsula Manila',
                description: "Elevate your dining experience at Old Manila, a culinary gem that celebrates modern European cuisine. With a focus on premium ingredients and artful presentation, each dish is a masterpiece that delights both the palate and the eye. Indulge in a gastronomic adventure at Old Manila and experience the art of fine dining.",
                category: 'Restaurant',
                cuisine: ['European', 'French'],
                location: 'Ayala-Paseo de Roxas',
                image: item7,
                link: "",
                mapLocation: ""
            },
            {
                name: 'Brera Delicatessen',
                description: "Satisfy your cravings for authentic Italian delicacies at Brera Delicatessen. This cozy trattoria serves up an array of traditional Italian dishes, from wood-fired pizzas to handcrafted pasta. With warm Italian hospitality and an inviting ambiance, Brera Delicatessen promises an unforgettable dining experience in Makati.",
                category: 'Restaurant',
                cuisine: 'Italian',
                location: 'San Antonio Village',
                image: item8,
                link: "",
                mapLocation: ""
            },
            ],
            cuisines: ['All', 'American', 'Argentine', 'Asian', 'Australian', 'Chinese', 'European', 'Filipino', 'French', 'German', 'Halal', 'Indian', 'Irish', 'Italian', 'Argentine', 'Japanese', 'Korean', 'Mediterranean', 'Mexican', 'Singapore', 'Spanish', 'Swiss', 'Thai', 'Vietnamese'],
            locations: [
                'All',
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
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            selectedCuisine: [],
            selectedLocation: [],
            applyButtonClicked: false,
        };
    },
    watch: {
        selectedCuisine(newValue, oldValue) {
            // Update applyButtonClicked when cuisine changes
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
    mounted() {
        document.addEventListener('click', this.handleGlobalClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleGlobalClick);
    },
    computed: {
        filteredItems() {
            let filteredItems = this.items.slice(); // Create a shallow copy of items

            // Apply filters only if the Apply button is clicked
            if (this.applyButtonClicked) {
                // Filter by cuisine
                if (this.selectedCuisine && this.selectedCuisine.length > 0 && this.selectedCuisine[0] !== 'All') {
                    filteredItems = filteredItems.filter(item => {
                        if (Array.isArray(item.cuisine)) {
                            return this.selectedCuisine.some(cat => item.cuisine.includes(cat));
                        } else {
                            return this.selectedCuisine.includes(item.cuisine);
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

            return filteredItems;
        },
        paginatedItems() {
            const startIndex = this.currentPage * this.pageSize;
            return this.items.slice(startIndex, startIndex + this.pageSize);
        },
        pageCount() {
            return Math.ceil(this.items.length / this.pageSize);
        },
        paginationStartIndex() {
            return this.currentPage * this.pageSize + 1;
        },
        paginationEndIndex() {
            const end = (this.currentPage + 1) * this.pageSize;
            return end > this.totalRecords ? this.totalRecords : end;
        },
        totalRecords() {
            return this.items.length;
        },
    },
    methods: {
        handleApplyFilter() {
            this.applyButtonClicked = true;
            console.log('Apply button clicked');
            console.log('Selected cuisine:', this.selectedCuisine);
            console.log('Selected location:', this.selectedLocation);
            this.currentPage = 0; // Reset currentPage when filter is applied
            this.showDropdown = false;

        },
        nextPage() {
            this.currentPage++;
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
        applyFilter(cuisine) {
            // Implement filtering logic based on selected cuisine
            console.log('Selected cuisine:', cuisine);
        },
        seeMore(item) {
            const {
                latitude,
                longitude
            } = this.extractLatLong(item.mapLocation);
            if (latitude !== null && longitude !== null) {
                this.$router.push({
                    name: 'Little Tokyo',
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
        }
    },
};
</script>