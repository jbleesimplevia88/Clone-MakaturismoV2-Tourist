<template>
    <div class="flex relative pt-[57px] md:pt-[80px] justify-center">
        <div class="relative">
            <div class="bg-[#102E61] h-[101%] lg:h-[105%]" style="position: absolute; top: 0; left: 0; width: 100%; ">
            </div>
            <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-10 flex items-center z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-10">
                    <div class="absolute top-4 left-3">
                        <router-link to="/category/do">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                stroke="white" class="w-7 lg:w-10 h-7 lg:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="lg:pl-9 grid grid-cols-1 lg:grid-cols-5 lg:pr-[7rem]">
                            <img src="@/assets/images/CategoryView/ToStay/stay1.png" alt=""
                                class="col-span-3 w-[100%] h-full lg:w-[97%] lg:h-[95%] rounded-l-3xl">
                            <div class="hidden col-span-2 md:grid md:grid-cols-2 gap-4 ">
                                <img src="@/assets/images/CategoryView/ToStay/stay2.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToStay/stay3.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-tr-3xl">
                                <img src="@/assets/images/CategoryView/ToStay/stay4.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToStay/stay5.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-br-3xl">
                            </div>
                        </div>
                        <!-- <div class="absolute bottom-2 right-[8rem] z-20 w-100">

                            <button class="hidden lg:block p-2 bg-white rounded-lg shadow outline outline-2 text-md">
                                <img src="@/assets/images/Content/9dots.png" alt="" class="w-10 h-10">
                                Show
                                All
                                Photos</button>
                        </div> -->
                    </div>


                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">XYZ Hotel</h1>
                        <p class="text-md text-white text-left pb-5">Hotel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-wrap justify-between items-center mb-2 relative">
        <div class="my-4 lg:p-0 lg:w-[75%]">
            <div class="relative mx-6 px-3 lg:px-32 pt-5">


                <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
                <p class="text-lg text-justify text-black pb-5">Stay and relax in the amazing rooms of U Hotels Makati.
                    Find your peace and enjoy the services this place can offer.</p>

                <div class="hidden border border-gray-400 lg:w-[]">
                    <p class="text-center font-bold">Number of items</p>
                </div>



                <div class="flex flex-row">
                    <div class="pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">5091 P. Burgos, Makati, Metro Manila
                    </p>
                </div>

                <div class="flex flex-row">
                    <div class="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                    <div class="flex flex-col pl-2.5">
                        <p class="text-lg md:text-black text-left pb-5">N/A</p>

                    </div>
                </div>

                <div class="flex flex-row">
                    <div class="pt-0.25">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                    </div>
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">(02) 8820 1000</p>
                </div>

                <div class="my-4 lg:w-[100%] relative">
                    <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">Rooms to offer</h1>
                    <div class="flex flex-wrap justify-between items-center mb-2 lg:w-[70%] ">
                        <div class="lg:block hidden">
                            <h1 class="font-bold mb-1">Rooms</h1>
                            <div class="flex flex-col">
                                <div>
                                    <p class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2">Regular room</p>
                                </div>
                                <div>
                                    <p class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2">Double room</p>
                                </div>
                                <div>
                                    <p class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2">Suite room</p>
                                </div>
                                <div>
                                    <p class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2">Deluxe room</p>
                                </div>
                                <div>
                                    <p class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2">Double Deluxe room</p>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:absolute lg:top-[4.8rem] lg:right-40">
                            <h1 class="font-bold">Rooms</h1>
                            <div>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Regular room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Double room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Suite room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Deluxe room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Double Deluxe room
                                </p>
                            </div>
                        </div>

                        <div class="lg:absolute lg:top-[4.8rem] lg:right-40">
                            <h1 class="font-bold">Amenities</h1>
                            <div>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Gym
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Free Parking
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Pet Space
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Free WIFI
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                    Air conditioned
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
        <div class="hidden lg:block">
            <div class="my-4 lg:w-[30%] lg:h-[30%] right-10 absolute top-[8rem]">
                <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow"> <!-- center this div -->

                    <div class="mb-5">
                        <div class="flex flex-col m-2">
                            <label for="Date" class=" mb-2 font-bold">Date</label>
                            <input type="date" class="border border-gray-300 rounded-md p-1">
                        </div>

                        <div class="flex flex-col m-2">
                            <label for="" class=" mb-2 font-bold">Check In</label>
                            <input type="time" class="border border-gray-300 rounded-md p-1">
                        </div>

                        <div class="flex flex-col m-2">
                            <label for="" class=" mb-2 font-bold">Type of Room</label>
                            <input type="text" class="border border-gray-300 rounded-md p-1">
                        </div>

                        <div class="flex flex-col m-2">
                            <label for="" class=" mb-2 font-bold">Other Services</label>
                            <input type="text" class="border border-gray-300 rounded-md p-1">
                        </div>
                        <router-link to="/checkoutbook">
                            <div class="w-[100%]">
                                <button
                                    class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Book
                                    Now</button>


                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>


    </div>


    <div class="flex flex-col lg:flex-col-reverse">
        <div class="grid lg:grid-cols-2 lg:gap-[10rem] relative mx-6 px-3 lg:px-32 pb-5 pt-5 ">
            <!-- Feedback Content -->
            <div class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A]" v-for="(item, index) in paginatedItems" :key="index">

                <div class="flex flex-row">
                    <div class="pt-[0.125rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="relative left-2 text-black text-lg xl:text-xl font-medium pb-3">
                            {{ item.name }}
                        </p>
                        <p class="relative bottom-4 left-2 text-gray-600 text-lg">{{ item.date }}
                        </p>
                    </div>
                </div>

                <div class="p-2 w-full">
                    <p class="text-black text-md line-clamp-3">{{ item.description }}</p>
                </div>
                <div class="p-1 flex justify-end items-center mr-10">

                    <button @click="seeMore(item)"
                        class="flex items-center px-1 py-1.5 border-2 border-black text-black m-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
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

        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
            <div>
                <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />

                <!-- <img src="@/assets/images/CategoryView/ToSee/Glorietta Map.jpg" alt="" class="pb-12 block lg:hidden">
                <div class="hidden lg:block lg:pb-10">
                    <img src="@/assets/images/CategoryView/ToDo/Omniverse Web Map.png" alt="" class="w-[100%] h-[100%]">
                </div> -->
            </div>
            <hr style="border-top: 1px solid black">
            <div>

                <h1 class="font-bold text-lg text-black text-left pt-10 pb-4">5.0 Ratings (500 Reviews)</h1>
                <div class="grid lg:grid-cols-2">



                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>

                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>


                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>

                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>

                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>

                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>


<script>
import MapRenderer from "@/components/MapRenderer.vue";



export default {
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    components: {
        MapRenderer

    },
    data() {
        return {
            items: [
                {
                    name: 'Juan Dela Cruz',
                    description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                    date: 'December 2023',

                },
                {
                    name: 'Luis Paolo',
                    description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                    date: 'December 2023',

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
    },
    methods: {
    },
};
</script>