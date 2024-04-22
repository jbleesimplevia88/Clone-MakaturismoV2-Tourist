<template>
    <div class="relative pt-[57px] md:pt-[80px]">
        <div class="relative  ">
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to left, transparent, #102E61 96%, #102E61 70%);">
            </div>
            <div
                style="position: absolute; top: 0; left: 0; height: 101%; width: 100%; background: linear-gradient(to bottom, transparent 75%, #102E61 87%, #102E61 40%);">
            </div>
            <img class="w-full h-[200px] md:h-[700px]" src="@/assets/images/CategoryView/ToStay/banner.jpeg" alt="" />
            <div class="flex items-center justify-center absolute top-5 md:top-20 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl">
                <p class="text-[#102E61] text-sm sm:text-4xl font-bold p-3 pr-4 md:p-5 md:pr-7 ">
                    WHERE TO STAY
                </p>
            </div>
            <div
                class="relative sm:absolute inset-0 sm:top-56 md:top-[23rem] flex text-center lg:text-left justify-center items-center z-[1]">
                <p
                    class="pt-[6rem] text-[17px] sm:text-sm md:text-xl lg:text-[1.7rem] px-0 lg:px-[8rem] text-wrap leading lg:leading-10 text-white">
                    Are you planning to travel but don’t know where to stay? Fret no more, Makati has a wide range of
                    accommodation establishments that caters to all kinds of travelers. From budget friendly hostels to
                    luxury hotels, you’ll definitely find a place to stay in the city.
                </p>
            </div>
        </div>
    </div>

    <div class="mx-auto px-3 lg:px-32 pb-5 pt-5" style="background-color: #102E61;">
        <!-- New Filter -->
        <div class="lg:mx-[120px] mx-[60px] pb-3 flex flex-col px-5 bg-[#f5f5f5] rounded-lg">
            <!-- search bar -->
            <div class="relative my-5">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" class="w-full p-4 ps-10 text-sm text-gray-900"
                    placeholder="Search Accomodations" />
            </div>

            <div class="lg:flex items-center justify-between lg:grid-cols-3 lg:space-x-4">
                <!-- Barangay -->
                <div class="lg:flex items-center w-full mb-3">
                    <div class="w-full flex flex-col items-start justify-center">
                        <div class="relative w-full">
                            <select id="barangay" v-model="barangay"
                                class="w-full py-3 px-3 pr-8 appearance-none cursor-pointer border border-gray-200 rounded-sm">
                                <option value="" disabled selected hidden>Select barangay</option>
                                <option v-for="(barangay, index) in locations " :key="index" :value="barangay">{{ barangay
                                }}</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Start Date Datepicker with Placeholder -->
                <div class="lg:flex items-center w-full">
                    <vue-date-picker v-model="selecStartDate" class="w-full h-[3.8rem]" :format="dateFormat"
                        :placeholder="startPlaceholder"></vue-date-picker>
                </div>

                <!-- End Date Datepicker with Placeholder -->
                <div class="lg:flex items-center w-full">
                    <vue-date-picker v-model="selecEndDate" class="w-full h-[3.8rem]" :format="dateFormat"
                        :placeholder="endPlaceholder" :min-date="minEndDate" :disabled="!selecStartDate"></vue-date-picker>
                </div>

                <!-- guests -->
                <div class="lg:flex  w-full mb-3 py-3 px-3 bg-white dropdown-container border border-gray-200 rounded-sm">
                    <div class="dropdown-toggle" @click="toggleModal">Select Options </div>
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div v-if="showModal" class="modal w-full rounded-xl z-10">
                        <div class="pt-7 pb-5 px-6 space-y-4">
                            <div class="flex flex-col" v-for="(category, index) in guests" :key="index">
                                <div class=" flex items-center  justify-between">
                                    <div>{{ category.name }}</div>
                                    <div class="flex w-[100px]">
                                        <button class="bg-white w-full" @click="decreaseQuantity(category)">-</button>
                                        <span>{{ category.quantity }}</span>
                                        <button class="bg-white w-full" @click="increaseQuantity(category)">+</button>
                                    </div>
                                </div>
                                <div class="category-description">{{ category.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <button type="submit" @click="search"
                    class="lg:w-[8rem] w-full lg:px-4 py-2 text-white disabled:bg-blue-400  bg-blue-600 rounded-md">SEARCH</button>
            </div>


        </div>





        <div>
            <div class="mt-8 pb-10">
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
                                    <h2>Where to stay</h2>
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
            <!-- Pagination controls -->
            <div class="grid grid-cols-2">
                <div class="flex justify-start items-center">
                    <p class="text-center text-white">
                        Showing
                        <span class="text-[#29BFD6]">{{ paginationStartIndex }} - {{ paginationEndIndex }}</span>
                        results from
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

/*  */
.dropdown-container {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    cursor: pointer;

}

.modal {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f5f5f5;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.quantity-button {
    cursor: pointer;
}

.selected {
    border-color: black;
    border-width: 1.8px;
}

.category-description {
    color: #999;
    /* Add color or other styles for description */
    font-size: 12px;
    /* Adjust font size as needed */
}
</style>


<script>
import item1 from '@/assets/images/CategoryView/ToStay/casino.jpeg';
import item2 from '@/assets/images/CategoryView/ToStay/xyz.png';
import item3 from '@/assets/images/CategoryView/ToStay/durban.jpeg';
import item4 from '@/assets/images/CategoryView/ToStay/astoria.jpeg';
import item5 from '@/assets/images/CategoryView/ToStay/carlmig.jpeg';
import item6 from '@/assets/images/CategoryView/ToStay/gomez.jpeg';
import item7 from '@/assets/images/CategoryView/ToStay/prince.jpeg';
import item8 from '@/assets/images/CategoryView/ToStay/howzat.jpeg';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    components: { VueDatePicker },

    data() {
        return {
            barangay: '',
            selecStartDate: null,
            selecEndDate: null,
            startPlaceholder: 'Select Start Date',
            endPlaceholder: 'Select End Date',
            dateFormat: 'yyyy-MM-dd',
            barangaysInMakati: [
                "Bangkal",
                "Bel-Air",
                "Carmona",
                "Cembo",
                "Comembo",
                "Dasmarinas",
                "East Rembo",
                "Forbes Park",
                "Guadalupe Nuevo",
                "Guadalupe Viejo",
                "Kasilawan",
                "La Paz",
                "Magallanes",
                "Olympia",
                "Palanan",
                "Pembo",
                "Pinagkaisahan",
                "Pio del Pilar",
                "Pitogo",
                "Poblacion",
                "Post Proper Northside",
                "Post Proper Southside",
                "Rizal",
                "San Antonio",
                "San Isidro",
                "San Lorenzo",
                "Santa Cruz",
                "Singkamas",
                "South Cembo",
                "Tejeros",
                "Urdaneta",
                "Valenzuela",
                "West Rembo"
            ],
            showModal: false,
            guests: [
                { name: 'Room', quantity: 0 },
                { name: 'Adult', quantity: 0, description: 'Ages 18 and above' }, // Add description for Adult
                { name: 'Children', quantity: 0, description: 'Ages 0-17' } // Add description for Children
            ],

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
            categories: ['All', 'Apartelle', 'Condotelle', 'Home Stay Site', 'Hostel', 'Hotel', 'Serviced Residences', 'Tourist Inn',],
            locations: ['Bangkal', 'Bel-Air', 'Carmona', 'Dasmariñas', 'Forbes Park', 'Guadalupe Nuevo', 'Guadalupe Viejo', 'Kasilawan', 'La Paz', 'Magallanes', 'olympia', 'Palanan', 'Pinagkaisahan', 'Pio Del Pilar', 'Poblacion', 'San Antonio', 'San Isidro', 'San Lorenzo', 'Santa Cruz', 'Singkamas', 'Tejeros', 'Urdaneta', 'Valenzuela'],
        };
    },
    computed: {
        minEndDate() {
            // Return the selected start date plus one day
            return this.selecStartDate ? new Date(this.selecStartDate.getTime() + 24 * 60 * 60 * 1000) : null;
        },
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

            return filteredItems;
        },
        pageCount() {
            return Math.ceil(this.filteredItems.length / this.pageSize);
        },
        paginationStartIndex() {
            return this.currentPage * this.pageSize + 1;
        },
        paginationEndIndex() {
            const end = (this.currentPage + 1) * this.pageSize;
            return Math.min(end, this.totalRecords);
        },
        totalRecords() {
            return this.filteredItems.length;
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
        toggleModal() {
            this.showModal = !this.showModal;
        },
        increaseQuantity(category) {
            category.quantity++;
        },
        decreaseQuantity(category) {
            if (category.quantity > 0) {
                category.quantity--;
            }
        }
    },
};
</script>