<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <NavBar />
    <div class="bg-[#102E61] w-[100%] h-50">

        <div class="pt-[7rem] pb-[1.8rem]">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="absolute w-6 h-6 mt-4 ml-4 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </router-link>

            <button class="flex pl-[3rem] pr-[1.5rem] py-1.5 text-3xl font-bold text-blue-900 bg-white shadow"
                style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">ALL EVENTS IN MAKATI</button>
        </div>
    </div>
    <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min"
        style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">
        <!-- Apply 'text-5xl' for small screens and 'text-3xl' for medium screens and above -->
        <h1 :class="{ 'p-2 mx-5 ml-10 text-base font-bold': isMobile, 'p-2 mx-6 ml-5 text-lg font-bold': !isMobile }">
            Events
        </h1>
    </div>
    <div class="px-3 lg:px-[5rem] pb-5 pt-5">
        <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
                <div v-for="(item, index) in items" :key="index"
                    class="relative bg-[#102E61] from [#102E61] rounded-[0.5rem]">
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
                            <span>Read More</span>
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


        </div>
    </div>

</template>

<style scoped></style>

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