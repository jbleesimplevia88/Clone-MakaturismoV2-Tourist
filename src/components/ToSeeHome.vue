<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 85%, #102E61 50%);">
            </div>
            <img class="w-full h-[200px] md:h-[700px]" src="@/assets/images/CategoryView/ToSee/banner.jpeg" alt="" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p
                    class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHAT TO SEE
                </p>
                 
                
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-80 flex text-center lg:text-left justify-center items-center z-[1]">
                <p class="text-[12px] sm:text-sm md:text-xl lg:text-xl text-wrap md:w-[80%] text-white">
                    Makati city is a walkable art gallery that showcases interesting sculptures, statues, architectures,
                    murals and many other art forms. It is not just something that the visitor can feast his/her eyes
                    on, but it also tells the story of the city beyond skyscrapers.
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5 pt-5" style="background-color: #102E61;">
        <div>
            <div class="pb-10">
                <!-- Filter dropdown -->
                <div class="relative hidden lg:block text-left">
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
                                    <h2>What to see</h2>
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
                                                <input class="accent-[#102E61]" type="checkbox"
                                                    :id="'categoryCheckbox-' + index" :value="category"
                                                    @change="toggleCategory(category)">
                                                <span class="ml-3 uppercase text-sm font-bold">{{ category }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-2 px-2">
                                    <div
                                        class="grid grid-rows-12 grid-flow-row-dense lg:grid-rows-8 md:grid-flow-col gap-4 mr-4 p-2">
                                        <div v-for="(location, index) in locations" :key="'location-' + index">
                                            <label :for="'locationCheckbox-' + index" class="flex items-center">
                                                <input type="checkbox" :id="'locationCheckbox-' + index" :value="location"
                                                    @change="toggleLocation(location)">
                                                <span class="ml-2 uppercase text-sm font-bold">{{ location }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                <button class="m-4 p-1 text-white bg-[#102E61] w-72 rounded-xl">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Filter dropdown -->
                <!-- Filter dropdown MOBILE-->
                <div class="relative text-left lg:hidden">
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
                                                        <input class="accent-[#102E61]" type="checkbox"
                                                            :id="'categoryCheckbox-' + index" :value="category"
                                                            @change="category(category)">
                                                        <span class="ml-3 uppercase text-sm font-bold">{{ category
                                                        }}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center justify-center border-t-2 ml-5 mr-5 mt-5">
                                        <button @click="toggleDropdown()"
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
                <div v-for="(item, index) in items" :key="index" class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="item.image" alt="">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{
                            item.name }}
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
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
import item1 from '@/assets/images/CategoryView/ToSee/glorietta.jpeg';
import item2 from '@/assets/images/CategoryView/ToSee/leon.jpeg';
import item3 from '@/assets/images/CategoryView/ToSee/nicolas.jpeg';
import item4 from '@/assets/images/CategoryView/ToSee/victory.jpeg';
import item5 from '@/assets/images/CategoryView/ToSee/happy.jpeg';
import item6 from '@/assets/images/CategoryView/ToSee/heritage.jpeg';
import item7 from '@/assets/images/CategoryView/ToSee/eskinita.png';
import item8 from '@/assets/images/CategoryView/ToSee/alto.png';

export default {
    data() {
        return {
            items: [
                {
                    name: 'Glorietta',
                    description: "Experience the ultimate shopping and entertainment extravaganza at Glorietta. This expansive retail complex boasts a diverse mix of shops, dining options, and entertainment facilities. Whether you're in search of fashion, gadgets, or indulgent treats, Glorietta is the go-to destination for an exciting day out.",
                    category: 'Mall',
                    image: item1,
                    link: "/category/see/glorietta",
                    mapLocation: "https://www.google.com/maps/dir//Glorietta,+Palm+Drive,+Makati,+Metro+Manila/@14.5529213,121.0184921,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9f912a3727f:0xc4541051d1e0072!2m2!1d121.0246671!2d14.5508815?entry=ttu"
                },
                {
                    name: 'Leon Gallery Fine Art',
                    description: "Delve into the rich heritage of Philippine art at Leon Gallery Fine Art. With an impressive collection of historical and contemporary masterpieces, this gallery provides a glimpse into the cultural tapestry of the Philippines. Admire the artistic expression of generations of Filipino artists and immerse yourself in the country's artistic journey.",
                    category: 'Art Gallery',
                    image: item2,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Galleria Nicolas',
                    description: 'Discover hidden gems and budget-friendly finds at Bangkal Thrift Market. This bustling market is a treasure trove of pre-loved items, antiques, vintage clothing, and unique collectibles. Get ready to embark on a delightful treasure hunt at Bangkal Thrift Market.',
                    category: 'Art Gallery',
                    image: item3,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Victory Makati',
                    description: "Explore the realm of visual storytelling at Victory Makati. Immerse yourself in powerful images that tell stories of the city and its people at Victory Makati.",
                    category: 'Church',
                    image: item4,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'The Happy Gallery, Inc.',
                    description: "Experience joy and creativity through a diverse collection of art at The Happy Gallery, Inc. Showcasing a blend of paintings, sculptures, and multimedia artworks, this gallery celebrates the beauty of life and the power of imagination. Step into a realm of happiness and inspiration as you explore the artistry of renowned and up-and-coming artists.",
                    category: 'Art Gallery',
                    image: item5,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Heritage Art Center',
                    description: "Celebrate the beauty of Philippine heritage at Heritage Art Center. This cultural haven features an array of traditional artworks, crafts, and artifacts that showcase the country's diverse cultural roots. From intricate tribal crafts to Filipino folk art, this center is a treasure trove of historical and cultural significance.",
                    category: 'Art Gallery',
                    image: item6,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Eskinita Art Gallery',
                    description: "Experience the vibrant and eclectic spirit of Filipino urban art at Eskinita Art Gallery. Celebrating street art and graffiti culture, this gallery showcases works that reflect the dynamic urban landscape of the Philippines. Get inspired by the bold and colorful expressions of Filipino street artists at Eskinita Art Gallery.",
                    category: 'Art Gallery',
                    image: item7,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Alto Mondo Corp.',
                    description: "Journey into the world of contemporary art at Altro Mondo Corp. This gallery showcases a diverse range of contemporary works, from paintings and sculptures to mixed-media art. Immerse yourself in the artistry of talented contemporary artists from the Philippines and around the globe at Altro Mondo Corp.",
                    category: 'Art Gallery',
                    image: item8,
                    link: "",
                    mapLocation: ""
                },

            ],
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            categories: ['All', 'Monument', 'Church', 'Park', 'Walkway', 'Heritage House', 'Gallery', 'Market'],
            locations: ['Bangkal', 'Bel-Air', 'Carmona', 'Dasmariñas', 'Forbes Park', 'Guadalupe Nuevo', 'Guadalupe Viejo', 'Kasilawan', 'La Paz', 'Magallanes', 'olympia', 'Palanan', 'Pinagkaisahan', 'Pio Del Pilar', 'Poblacion', 'San Antonio', 'San Isidro', 'San Lorenzo', 'Santa Cruz', 'Singkamas', 'Tejeros', 'Urdaneta', 'Valenzuela'],
        };
    },
    computed: {
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
        applyFilter(category) {
            // Implement filtering logic based on selected category
            console.log('Selected category:', category);
        },
        seeMore(item) {
            const { latitude, longitude } = this.extractLatLong(item.mapLocation);
            if (latitude !== null && longitude !== null) {
                // Pass the name parameter in the query object
                this.$router.push({ name: 'glorietta', query: { latitude, longitude, name: item.name } });
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
        }

    },
};
</script>