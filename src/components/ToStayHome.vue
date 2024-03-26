<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 85%, #102E61 50%);">
            </div>
            <img class="w-full h-[200px] md:h-[700px]" src="@/assets/images/CategoryView/ToStay/banner.jpeg" alt="" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p
                    class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHERE TO STAY
                </p>
                 
                
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-80 flex text-center lg:text-left justify-center items-center z-[1]">
                <p class="text-[12px] sm:text-sm md:text-xl lg:text-xl text-wrap md:w-[80%] text-white">
                    Are you planning to travel but don’t know where to stay? Fret no more, Makati has a wide range of
                    accommodation establishments that caters to all kinds of travelers. From budget friendly hostels to
                    luxury hotels, you’ll definitely find a place to stay in the city.
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto px-3 lg:px-32 pb-5 pt-5" style="background-color: #102E61;">
        <div>
            <div class="pb-10">
                <!-- Filter dropdown -->
                <div class="relative inline-block text-left">
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
                                <div class="col-span-2">
                                    <h1>Locations</h1>
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
                                                <span class="ml-3 uppercase font-bold">{{ category }}</span>
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
                                                <span class="ml-2 uppercase font-bold">{{ location }}</span>
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
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="(item, index) in paginatedItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
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


<style scoped></style>


<script>
import item1 from '@/assets/images/CategoryView/ToStay/casino.jpeg';
import item2 from '@/assets/images/CategoryView/ToStay/xyz.png';
import item3 from '@/assets/images/CategoryView/ToStay/durban.jpeg';
import item4 from '@/assets/images/CategoryView/ToStay/astoria.jpeg';
import item5 from '@/assets/images/CategoryView/ToStay/carlmig.jpeg';
import item6 from '@/assets/images/CategoryView/ToStay/gomez.jpeg';
import item7 from '@/assets/images/CategoryView/ToStay/prince.jpeg';
import item8 from '@/assets/images/CategoryView/ToStay/howzat.jpeg';

export default {
    data() {
        return {
            items: [
                {
                    name: 'XYZ Hotel',
                    description: "Immerse yourself in the modern elegance of U Hotels Makati. With contemporary designs and thoughtful amenities, this hotel offers a delightful stay in the heart of the city. Enjoy personalized service and easy access to Makati's attractions at U Hotels Makati.                    ",
                    category: 'Accommodation/Hotel',
                    image: item2,
                    link: "/category/stay/xyz",
                    mapLocation: "https://www.google.com/maps/dir//5091+P+Burgos,+Makati,+Metro+Manila/@14.5670312,121.0309181,19.36z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397c9ab7c183931:0xaee4b3ae67f7f4d7!2m2!1d121.0310417!2d14.5668763?entry=ttu"
                },
                {
                    name: 'Casino Suites',
                    description: "Experience comfort and convenience at Casino Suites, where modern amenities and personalized service await you. Located in the heart of Makati, this hotel provides easy access to the city's vibrant attractions and business district. Unwind in well-appointed rooms and enjoy a memorable stay at Casino Suites.",
                    category: 'Accommodation/Hotel',
                    image: item1,
                    link: "",
                    mapLocation: ""
                },

                {
                    name: 'Hotel Durban',
                    description: "Experience urban comfort and chic accommodations at Hotel Durban. With its stylish interiors and top-notch amenities, this hotel is a favorite among modern travelers. Whether you're in town for business or leisure, Hotel Durban ensures a pleasant and memorable stay in Makati.",
                    category: 'Accommodation/Hotel',
                    image: item3,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Astoria Greenbelt',
                    description: "Experience luxury and sophistication at Astoria Greenbelt. This upscale hotel boasts well-appointed rooms, first-class amenities, and top-notch service. Located near Greenbelt Mall, Astoria Greenbelt offers a convenient base for exploring the city while enjoying the finest accommodations.",
                    category: 'Accommodation/Hotel',
                    image: item4,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Carlmig Homes',
                    description: "Discover a home away from home at Carlmig Homes. This cozy boutique hotel offers warm hospitality and comfortable accommodations for travelers seeking a peaceful retreat. Whether you're visiting for business or leisure, Carlmig Homes ensures a relaxed and pleasant stay in Makati.",
                    category: 'Accommodation/Guest House',
                    image: item5,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Gomez House',
                    description: "Step into a world of heritage and nostalgia at Gomez House. This charming guesthouse, with its restored vintage interiors, offers a unique experience that transports you back in time. Enjoy a blend of old-world charm and modern comforts at Gomez House.",
                    category: 'Accommodation/Guest House',
                    image: item6,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Prince Plaza Hotel',
                    description: "Indulge in spacious suites and exceptional service at Prince Plaza Hotel. Located in the heart of Makati's business district, this hotel offers a homey ambiance with all the amenities you need for a comfortable stay. Enjoy the convenience of its prime location and a warm welcome at Prince Plaza Hotel.",
                    category: 'Accommodation/Hotel',
                    image: item7,
                    link: "",
                    mapLocation: ""
                },
                {
                    name: 'Howzat Inn',
                    description: "Discover a budget-friendly and cozy stay at Howzat Inn. This charming inn provides comfortable accommodations without breaking the bank. With its strategic location and warm hospitality, Howzat Inn ensures a memorable and enjoyable stay in Makati.",
                    category: 'Accommodation/Inn',
                    image: item8,
                    link: "",
                    mapLocation: ""
                },

            ],
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            categories: ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'],
            locations: ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'],
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
            console.log('Selected category:', category);
        },
        seeMore(item) {
            const { latitude, longitude } = this.extractLatLong(item.mapLocation);
            if (latitude !== null && longitude !== null) {
                this.$router.push({ name: 'xyz', query: { latitude, longitude, name: item.name } });
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

            const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
            const altMatch = mapLocation.match(altRegex);
            if (altMatch && altMatch.length >= 3) {
                const latitude = parseFloat(altMatch[1]);
                const longitude = parseFloat(altMatch[2]);
                return { latitude, longitude };
            }

            return { latitude: null, longitude: null };
        },
    },
};
</script>