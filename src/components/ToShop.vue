<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent, #102E61 85%, #102E61 50%);">
            </div>
            <img class="w-full" src="@/assets/images/GuestView/ToDo/ToDo.jpeg" alt="" />
            <div class="absolute top-20 z-[1]">
                <p class="text-[#102E61] sm:text-4xl font-bold bg-white p-5 pl-7 pr-7 rounded-r-xl">
                    WHERE TO SHOP
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-80 flex text-center lg:text-left justify-center items-center z-[1]">
                <p class="text-[12px] sm:text-sm md:text-xl lg:text-xl text-wrap text-white">
                    Makati is a cosmopolitan city that offers a variety of activities that people of all ages
                    can enjoy.<br />Whether you love to stay indoors or outdoors, day or night, the city
                    surely has something to offer.
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
                                                <input type="checkbox" :id="'locationCheckbox-' + index"
                                                    :value="location" @change="toggleLocation(location)">
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
import item1 from '@/assets/images/GuestView/ToDo/omni.jpg';
import item2 from '@/assets/images/GuestView/ToDo/hop.jpg';
import item3 from '@/assets/images/GuestView/ToDo/zitro.jpg';
import item4 from '@/assets/images/GuestView/ToDo/zeria.jpg';
import item5 from '@/assets/images/GuestView/ToDo/two.jpg';
import item6 from '@/assets/images/GuestView/ToDo/white.png';
import item7 from '@/assets/images/GuestView/ToDo/urban.jpg';
import item8 from '@/assets/images/GuestView/ToDo/touch.png';

export default {
    data() {
        return {
            items: [
                {
                    name: 'Omniverse Museum',
                    description: "Discover a fusion of art and technology at the Omniverse Museum in Makati. Step into a world of interactive exhibits, mind-bending installations, and awe-inspiring virtual reality experiences. This unique museum promises a captivating journey through the realms of creativity and innovation. Whether you're an art enthusiast or a tech-savvy explorer, the Omniverse Museum is a must-visit destination for an extraordinary adventure.",
                    category: 'Museum',
                    image: item1,
                },
                {
                    name: 'Hop-On, Hop-Off Tour',
                    description: "Embark on a convenient and flexible sightseeing adventure with the Hop-On, Hop-Off Tour in Makati. Climb aboard an open-top double-decker bus and enjoy panoramic views as you explore the city's iconic landmarks and vibrant neighborhoods. Hop off at any stop that catches your interest, and hop back on when you're ready to move on to the next exciting destination. This tour offers the freedom to create your itinerary and make the most of your time in Makati.",
                    category: 'Sightseeing Tour',
                    image: item2,
                },
                {
                    name: 'Zitro Massage and Spa',
                    description: "Indulge in ultimate relaxation and rejuvenation at Zitro Massage and Spa. This serene oasis offers a variety of therapeutic treatments, from traditional massages to modern wellness therapies. Surrender to the skilled hands of expert therapists and let your stress melt away. With a tranquil ambiance and a range of pampering options, Zitro Massage and Spa provides the perfect escape from the bustling city life.",
                    category: 'Spa and Wellness',
                    image: item3,
                },
                {
                    name: 'Zeria',
                    description: "Get ready for an immersive and thrilling experience at Zeria, Makati's premier escape room destination. Gather your friends, family, or colleagues and put your problem-solving skills to the test in a series of mind-bending puzzles and challenges. Each escape room presents a unique storyline, making Zeria an ideal place for team building, bonding, or simply having a blast with your loved ones.",
                    category: 'Entertainment/Gaming',
                    image: item4,
                },
                {
                    name: 'Two Seasons Spa',
                    description: "Treat yourself to a tranquil escape at Two Seasons Spa. With a selection of massages, facials, and body treatments, this spa offers a rejuvenating experience that caters to your specific needs. Let the stress fade away as you unwind in the serene atmosphere of Two Seasons Spa, leaving you feeling invigorated and revitalized.",
                    category: 'Spa and Wellness',
                    image: item5,
                },
                {
                    name: 'White Palace Spa',
                    description: "Experience pure bliss and luxury at White Palace Spa. Indulge in their extensive menu of spa services, including invigorating massages, facials, and body treatments. Step into an ambiance of serenity and let the experienced therapists take care of your well-being. White Palace Spa offers a sanctuary of tranquility, making it the perfect escape from the hustle and bustle of city life.",
                    category: 'Spa and Wellness',
                    image: item6,
                },
                {
                    name: 'Urband Break Wellness',
                    description: 'Escape the daily grind and discover a holistic approach to wellness at Urban Break Wellness. From yoga and meditation classes to natural healing therapies, this wellness center is dedicated to promoting mind-body harmony. Reconnect with your inner self and find rejuvenation amidst the urban landscape of Makati at Urban Break Wellness.',
                    category: 'Spa and Wellness',
                    image: item7,
                },
                {
                    name: 'Touch of Hands Spa',
                    description: 'Pamper yourself with a blissful retreat at Touch of Hands Spa. With a range of massage therapies and spa treatments, this haven of relaxation will leave you feeling refreshed and renewed. Surrender to the healing touch of their skilled therapists and experience the ultimate pampering session at Touch of Hands Spa.',
                    category: 'Spa and Wellness',
                    image: item8,
                },
                {
                    name: 'Product 9',
                    description: 'Description of Product 9',
                    category: 'Museum',
                    image: 'https://via.placeholder.com/300',
                },
                {
                    name: 'Product 10',
                    description: 'Description of Product 10',
                    category: 'Museum',
                    image: 'https://via.placeholder.com/300',
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
    },
};
</script>