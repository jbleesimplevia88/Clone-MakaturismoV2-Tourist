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
                style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">TOP 10 PLACES IN MAKATI</button>
        </div>
    </div>
    <div class="inline-block mt-10 ml-0 text-white bg-[#2969D6] min-w-min"
        style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">
        <!-- Apply 'text-5xl' for small screens and 'text-3xl' for medium screens and above -->
        <h1 :class="{ 'p-2 mx-5 ml-10 text-base font-bold': isMobile, 'p-2 mx-6 ml-5 text-lg font-bold': !isMobile }">
            Top 10 Places
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
                    <!-- <div class="p-1 flex justify-end items-center">
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
                    </div> -->
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