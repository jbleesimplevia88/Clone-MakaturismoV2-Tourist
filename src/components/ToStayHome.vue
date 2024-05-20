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
                    luxury hotels, you’ll definitely find a place to stay
                    in the city.
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
                <input v-model="searchQuery" @click="focusSearch" type="search" id="default-search"
                    class="w-full p-4 ps-10 text-sm text-gray-900" placeholder="Search Accommodations" />
            </div>
            <div class="lg:flex items-center justify-between lg:grid-cols-3 lg:space-x-4" id="FilterBar">
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
                    <p class="text-lg font-bold">Date (From):</p>
                    <input type="date" id="dateFrom" v-model="dateFrom" @input="handleDateInput" :min="todayDate"
                        :disabled="disableDays" class="w-full px-4 py-2 my-2 border border-gray-400 rounded-xl">
                </div>
                <!-- End Date Datepicker with Placeholder -->
                <div class="lg:flex items-center w-full">
                    <p class="text-lg font-bold">Date (To):</p>
                    <input type="date" id="dateTo" v-model="dateTo" @input="handleDateInput" :min="todayDate"
                        class="w-full px-4 py-2 my-2 border border-gray-400 rounded-xl">
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
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-if="filteredItems.length === 0 && !isInvalidDateRange" class="text-center text-red-500">No data
                    found.
                </div>
                <div v-else-if="isInvalidDateRange" class="text-center text-red-500">Please select a valid date range.</div>
                <div v-for="(item, index) in filteredItems" :key="index"
                    class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A] rounded">
                    <div class="relative">
                        <img class="w-full h-[250px] object-cover rounded-t" :src="item.image" alt="">
                        <div
                            class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#102E61] to-transparent">
                        </div>
                        <p class="absolute bottom-5 left-2 text-white text-lg xl:text-xl font-semibold">{{
                            item.name }}
                        </p>
                        <p class="absolute bottom-2 left-2 text-white text-xs">{{ Array.isArray(item.category) ?
                            item.category.join(', ') : item.category }}</p>
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
import {
    useStayStore
} from '@/stores/toStayCart';
import {
    defineComponent,
    ref
} from 'vue';
import {
    useAuthStore
} from '@/stores/auth';
import {
    useRouter
} from 'vue-router';
export default defineComponent({
    setup() {
        const cartStay = useStayStore();
        const router = useRouter();
        const authStore = useAuthStore();
        const guests = ref([
            { name: 'Room', quantity: 0 },
            { name: 'Adult', quantity: 0, description: 'Ages 18 and above' },
            { name: 'Children', quantity: 0, description: 'Ages 0-17' },
        ]);
        const addToCart = (selectedHotel) => {
            cartStay.selectHotel(selectedHotel);
        };
        const seeMore = (item) => {
            // Pass the quantities to the setSelectedHotelQuantities action
            const roomsQuantity = guests.value.find(guest => guest.name === 'Room').quantity;
            const adultsQuantity = guests.value.find(guest => guest.name === 'Adult').quantity;
            const childrenQuantity = guests.value.find(guest => guest.name === 'Children').quantity;

            // Pass the quantities to the setSelectedHotelQuantities action
            cartStay.setSelectedHotelQuantities(roomsQuantity, adultsQuantity, childrenQuantity);

            // Select the hotel and navigate to the details page
            cartStay.selectHotel(item);
            const { latitude, longitude } = extractLatLong(item.mapLocation);
            if (latitude !== null && longitude !== null) {
                router.push({
                    name: 'xyz',
                    query: {
                        latitude,
                        longitude,
                        name: item.name,
                    },
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
                    longitude,
                };
            }
            const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
            const altMatch = mapLocation.match(altRegex);
            if (altMatch && altMatch.length >= 3) {
                const latitude = parseFloat(altMatch[1]);
                const longitude = parseFloat(altMatch[2]);
                return {
                    latitude,
                    longitude,
                };
            }
            return {
                latitude: null,
                longitude: null,
            };
        };
        return {
            cartStay,
            router,
            authStore,
            addToCart,
            guests,
            seeMore,
        };
    },
    components: {
        VueDatePicker,
    },
    data() {
        return {
            todayDate: new Date().toISOString().split('T')[0],
            barangay: '',
            selectedBarangay: 'All',
            dateFrom: '',
            dateTo: '',
            startPlaceholder: 'Select Start Date',
            endPlaceholder: 'Select End Date',
            dateFormat: 'yyyy-MM-dd',
            searchQuery: '',
            barangaysInMakati: [
                'Bangkal',
                'Bel-Air',
                'Carmona',
                'Cembo',
                'Comembo',
                'Dasmarinas',
                'East Rembo',
                'Forbes Park',
                'Guadalupe Nuevo',
                'Guadalupe Viejo',
                'Kasilawan',
                'La Paz',
                'Magallanes',
                'Olympia',
                'Palanan',
                'Pembo',
                'Pinagkaisahan',
                'Pio del Pilar',
                'Pitogo',
                'Poblacion',
                'Post Proper Northside',
                'Post Proper Southside',
                'Rizal',
                'San Antonio',
                'San Isidro',
                'San Lorenzo',
                'Santa Cruz',
                'Singkamas',
                'South Cembo',
                'Tejeros',
                'Urdaneta',
                'Valenzuela',
                'West Rembo',
            ],
            showModal: false,

            items: [{
                name: 'XYZ Hotel',
                description: "Immerse yourself in the modern elegance of U Hotels Makati. With contemporary designs and thoughtful amenities, this hotel offers a delightful stay in the heart of the city. Enjoy personalized service and easy access to Makati's attractions at U Hotels Makati.",
                category: 'Accommodation/Hotel',
                image: item2,
                link: '/category/stay/xyz',
                mapLocation: 'https://www.google.com/maps/place/Robinsons+Magnolia/@14.6335521,121.0264341,13.96z/data=!4m9!1m2!2m1!1smaps!3m5!1s0x3397b79b49092343:0x50d5834dbfbd5426!8m2!3d14.6148379!4d121.038122!16s%2Fg%2F11hdqp4d_p?entry=ttu',
                barangay: 'Bangkal',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Casino Suites',
                description: 'Experience comfort and convenience at Casino Suites, where modern amenities and personalized service await you. Located in the heart of Makati, this hotel provides easy access to the citys vibrant attractions and business district. Unwind in well-appointed rooms and enjoy a memorable stay at Casino Suites.',
                category: 'Accommodation/Hotel',
                image: item1,
                link: '',
                mapLocation: '',
                barangay: 'Carmona',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Casino Suites',
                description: 'Experience comfort and convenience at Casino Suites, where modern amenities and personalized service await you. Located in the heart of Makati, this hotel provides easy access to the citys vibrant attractions and business district. Unwind in well-appointed rooms and enjoy a memorable stay at Casino Suites.',
                category: 'Accommodation/Hotel',
                image: item1,
                link: '',
                mapLocation: '',
                barangay: 'Carmona',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Casino Suites',
                description: 'Experience comfort and convenience at Casino Suites, where modern amenities and personalized service await you. Located in the heart of Makati, this hotel provides easy access to the citys vibrant attractions and business district. Unwind in well-appointed rooms and enjoy a memorable stay at Casino Suites.',
                category: 'Accommodation/Hotel',
                image: item1,
                link: '',
                mapLocation: '',
                barangay: 'Carmona',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Hotel Durban',
                description: 'Experience urban comfort and chic accommodations at Hotel Durban. With its stylish interiors and top-notch amenities, this hotel is a favorite among modern travelers. Whether youre in town for business or leisure, Hotel Durban ensures a pleasant and memorable stay in Makati.',
                category: 'Accommodation/Hotel',
                barangay:'Bangkal',
                image: item3,
                link: '',
                mapLocation: '',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Astoria Greenbelt',
                description: 'Experience luxury and sophistication at Astoria Greenbelt. This upscale hotel boasts well-appointed rooms, first-class amenities, and top-notch service. Located near Greenbelt Mall, Astoria Greenbelt offers a convenient base for exploring the city while enjoying the finest accommodations.',
                category: 'Accommodation/Hotel',
                image: item4,
                link: '',
                mapLocation: '',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Carlmig Homes',
                description: 'Discover a home away from home at Carlmig Homes. This cozy boutique hotel offers warm hospitality and comfortable accommodations for travelers seeking a peaceful retreat. Whether youre visiting for business or leisure, Carlmig Homes ensures a relaxed and pleasant stay in Makati.',
                category: 'Accommodation/Guest House',
                image: item5,
                link: '',
                mapLocation: '',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Gomez House',
                description: 'Step into a world of heritage and nostalgia at Gomez House. This charming guesthouse, with its restored vintage interiors, offers a unique experience that transports you back in time. Enjoy a blend of old-world charm and modern comforts at Gomez House.',
                category: 'Accommodation/Guest House',
                image: item6,
                link: '',
                mapLocation: '',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Prince Plaza Hotel',
                description: 'Indulge in spacious suites and exceptional service at Prince Plaza Hotel. Located in the heart of Makatis business district, this hotel offers a homey ambiance with all the amenities you need for a comfortable stay. Enjoy the convenience of its prime location and a warm welcome at Prince Plaza Hotel.',
                category: 'Accommodation/Hotel',
                image: item7,
                link: '',
                mapLocation: '',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 1, // Specify the quantity of available rooms
                    capacity: {
                        adults: 1,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 5, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            {
                name: 'Howzat Inn',
                description: 'Discover a budget-friendly and cozy stay at Howzat Inn. This charming inn provides comfortable accommodations without breaking the bank. With its strategic location and warm hospitality, Howzat Inn ensures a memorable and enjoyable stay in Makati.',
                category: 'Accommodation/Inn',
                image: item8,
                link: '',
                mapLocation: '',
                barangay: 'Kasilawan',
                dates: [{
                    date: '2024-04-01'
                },
                {
                    date: '2024-04-02'
                },
                {
                    date: '2024-04-03'
                },
                {
                    date: '2024-04-04'
                },
                ],
                rooms: [{
                    type: 'Standard Room',
                    quantity: 3, // Specify the quantity of available rooms
                    capacity: {
                        adults: 2,
                        children: 1
                    }
                },
                {
                    type: 'Deluxe Room',
                    quantity: 10, // Specify the quantity of available rooms
                    capacity: {
                        adults: 3,
                        children: 2
                    }
                },
                ]
            },
            ],
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            categories: [
                'All',
                'Apartelle',
                'Condotelle',
                'Home Stay Site',
                'Hostel',
                'Hotel',
                'Serviced Residences',
                'Tourist Inn',
            ],
            locations: [
                'All',
                'Bangkal',
                'Bel-Air',
                'Carmona',
                'Dasmariñas',
                'Forbes Park',
                'Guadalupe Nuevo',
                'Guadalupe Viejo',
                'Kasilawan',
                'La Paz',
                'Magallanes',
                'olympia',
                'Palanan',
                'Pinagkaisahan',
                'Pio Del Pilar',
                'Poblacion',
                'San Antonio',
                'San Isidro',
                'San Lorenzo',
                'Santa Cruz',
                'Singkamas',
                'Tejeros',
                'Urdaneta',
                'Valenzuela',
            ],
        };
    },
    computed: {

        filteredItems() {
            // Filter the items based on the search criteria
            let filtered = this.items.filter(item => {
                if (!item || !item.dates || !Array.isArray(item.dates) || !item.rooms || !Array.isArray(item.rooms)) {
                    // Handle case where item, item.dates, or item.rooms is undefined or not an array
                    return false;
                }
                const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesBarangay = !this.barangay || this.barangay === 'All' || item.barangay === this.barangay;
                const fromDate = this.dateFrom ? new Date(this.dateFrom) : null;
                const toDate = this.dateTo ? new Date(this.dateTo) : null;
                const meetsRoomCriteria = item.rooms.some(room => {
                    const totalRoomsNeeded = this.guests.find(guest => guest.name === 'Room').quantity;
                    const totalAdultsNeeded = this.guests.find(guest => guest.name === 'Adult').quantity;
                    const totalChildrenNeeded = this.guests.find(guest => guest.name === 'Children').quantity;
                    const totalAdultsCapacity = room.quantity * room.capacity.adults;
                    const totalChildrenCapacity = room.quantity * room.capacity.children;
                    return room.quantity >= totalRoomsNeeded &&
                        totalAdultsCapacity >= totalAdultsNeeded &&
                        totalChildrenCapacity >= totalChildrenNeeded;
                });
                const isDateRangeWithinAvailableRange = item.dates.some(dateObj => {
                    const itemDate = new Date(dateObj.date);
                    return (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);
                });
                return matchesSearch && matchesBarangay && meetsRoomCriteria && isDateRangeWithinAvailableRange;
            });

            // Paginate the filtered items
            const startIndex = this.currentPage * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            filtered = filtered.slice(startIndex, endIndex);

            return filtered;
        },

        minEndDate() {
            // Return the selected start date plus one day
            return this.dateFrom ? new Date(this.dateFrom.getTime() + 24 * 60 * 60 * 1000) : null;
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

        disableDateTo() {
            // Disable "Date (To)" if "Date (From)" is selected after "Date (To)"
            return this.dateFrom && this.dateTo && new Date(this.dateFrom) > new Date(this.dateTo);
        },
        isInvalidDateRange() {
            return this.dateFrom && this.dateTo && new Date(this.dateFrom) > new Date(this.dateTo);
        },
    },
    methods: {
        getAvailableDates(item) {
            const from = new Date(this.dateFrom);
            const to = new Date(this.dateTo);
            const available = [];
            if (from && to && from <= to) {
                const currentDate = new Date(from);
                while (currentDate <= to) {
                    const formattedDate = currentDate.toISOString().split('T')[0];
                    if (!item.dates.find(d => d.date === formattedDate)) {
                        available.push(formattedDate);
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
            return available;
        },
        convertDateFormat(dateString) {
            // Convert date format from yyyy-MM-dd to yyyy-MM-dd
            const [year, month, day] = dateString.split('-');
            return `${year}-${month}-${day}`;
        },
        handleApplyFilter() {
            this.applyButtonClicked = true;

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
        applyFilter(category) {
            console.log('Selected category:', category);
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
        },
        focusSearch() {
            this.$refs.searchInput.focus();
        },
        handleDateInput() {
            // Log the selected date
            console.log('Selected date (From):', this.dateFrom);
            console.log('Selected date (To):', this.dateTo);
            // Clear error message when the user makes a new selection
            this.$forceUpdate();
        },
        handleDateFromInput() {
            // If Date (From) is set after Date (To), reset Date (To)
            if (this.dateFrom && this.dateTo && new Date(this.dateFrom) > new Date(this.dateTo)) {
                this.dateTo = '';
            }
        },
        handleDateToInput() {
            // If Date (To) is set before Date (From), reset Date (From)
            if (this.dateFrom && this.dateTo && new Date(this.dateTo) < new Date(this.dateFrom)) {
                this.dateFrom = '';
            }
        },
        search() {
            // Placeholder for search method
        }
    },
});
</script>


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