<template>
    <div class="flex relative pt-[57px] md:pt-[80px] justify-center ">
        <div class="relative">
            <div class="bg-[#102E61] h-[101%] lg:h-[105%]" style="position: absolute; top: 0; left: 0; width: 100%; ">
            </div>
            <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-16 flex items-center -z-12 ">
                <div class="relative flex flex-col pl-0 lg:pl-10">
                    <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
                        <router-link to="/category/stay">
                            <a class=" flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                    style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor"
                                    class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1 cursor-pointer text-white">
                                    style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor"
                                    class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1
                                    cursor-pointer text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </a>
                        </router-link>
                    </div>
                    <div class="relative flex flex-col items-center">
                        
      
                        <div class=" lg:pr-[7rem]">                            <Carousel  :imageUrls="imageUrls" />
                        </div>
                        </div>

                        
                



                    <div class="lg:hidden fixed bottom-0 w-full bg-gray-100 lg:p-5 px-5 py-3 shadow-lg z-50">
                        <div class="flex justify-between">
                            <div class="w-[80%]">
                                <p class="text-md">Secure your stay</p>
                                <p class="text-lg font-bold">Start here</p>
                            </div>

                            <div v-if="weblink == 'none'">
                        No site yet

                    </div>
                      <a  v-else :href="
                      weblink" class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Book now </a>
                            <!-- <div class="w-[70%] px-2 mt-5 cursor-pointer">
                                <button @click="bookNow"
                                    class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg p-4 w-[80%]">Book
                                    Now</button>
                            </div> -->
                        </div>
                    </div>
                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ storedetails.storename }}</h1>
                        <p class="text-md text-white text-left pb-5">Hotel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left"></h1>
                        <p class="text-md text-white text-left pb-5"></p>
                    </div>



    <div class="flex flex-wrap justify-between items-center mb-2 relative">
        <div class="my-4 lg:p-0 lg:w-[75%]">
            <div class="relative mx-6 px-3 lg:px-32 pt-5">


<p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
<p class="text-lg text-justify text-black pb-5">{{ storedetails.description }}</p>


<div class="flex flex-row">
    <div class="pt-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
    </div>
    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">{{storedetails.address}}</p>
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
        <p class="text-lg md:text-black text-left pb-5">{{storedetails.storehours}}|{{storedetails.storesched }}</p>

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
    <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{storedetails.storecontact}}</p>
</div>



                
                <div class="my-4 lg:w-[100%] relative">
                    <!-- <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">Rooms to offer</h1> -->
                    <div class="flex flex-wrap justify-between items-center mb-2 lg:w-[70%] ">
                        <div>

                            <h1 class="font-bold mb-1">Rooms</h1>
                            <div class="flex flex-col">
                                <div v-for="(room, index) in roomTypes" :key="index">
                                    <button
                                        class="bg-gray-300 px-3 py-1 rounded-md inline-block mb-2 hover:bg-blue-700 hover:text-white"
                                        @click="showRoomPreview(room.name)">
                                        {{ room.name }}
                                    </button>
                                </div>

                                <div @click="closeImagePreview" v-if="selectedRoom"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div class="p-10 overflow-x-scroll hide-scrollbar rounded-lg" draggable="true"
                                        @dragstart="dragStart($event)" @mousedown="startDrag($event)"
                                        @mousemove="dragging && drag($event)" @mouseup="endDrag()" @mouseleave="endDrag()"
                                        ref="container">
                                        <div class="flex gap-6 " style="cursor: grab">

                                            <img v-for="(image, index) in selectedRoomImages" :key="index" :src="image"
                                                class="w-full  shadow-[#0504048c] shadow-md" alt="Room Image" />
                                        </div>
                                        <button @click="selectedRoom = null" class="absolute top-48 right-0 p-2 m-3"
                                            style="filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.404));">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff"
                                                viewBox="0 0 30 30">
                                                <path
                                                    d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:absolute lg:top-[4.8rem] lg:right-40">
                            <h1 class="font-bold">Rooms</h1>
                            <div>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Regular room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Double room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Suite room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Deluxe room
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Double Deluxe room
                                </p>
                            </div>
                        </div>
                        <div class="lg:absolute lg:top-[4.8rem] lg:right-40">
                            <h1 class="font-bold">Amenities</h1>
                            <div>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Gym
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Free Parking
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Pet Space
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Free WIFI
                                </p>
                                <p class="flex items-center">
                                    <svg class="w-4 h-auto mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="3" />
                                    </svg> Air conditioned
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:block">
            <div class="my-4 lg:w-[30%] lg:h-[30%] right-10 absolute top-[8rem]">
                <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow">
                    <!-- Start Date Datepicker with Placeholder -->
                    <div class="flex flex-col m-2">
                        <label for="" class="mb-2 font-bold">From</label>
                        <input type="date" id="dateFrom" v-model="dateFrom" @input="handleDateInput('from')" :min="minDate"
                            class="border-2 border-black rounded-md p-2.5">
                        <p v-if="startDateError" class="text-red-500">{{ startDateError }}</p>
                    </div>
                    <!-- End Date Datepicker with Placeholder -->
                    <div class="flex flex-col m-2">
                        <label for="" class="mb-2 font-bold">To</label>
                        <input type="date" id="dateTo" v-model="dateTo" @input="handleDateInput('to')" :min="minDate"
                            class="border-2 border-black rounded-md p-2.5">
                        <p v-if="endDateError" class="text-red-500">{{ endDateError }}</p>
                    </div>
                    <div class="flex flex-col m-2">
                        <label for="roomType" class="mb-2 font-bold">Type of Room</label>
                        <select id="roomType" v-model="selectedRoomType"
                            class="border-2 border-black mt-1 rounded-md p-2.5">
                            <option v-for="(roomType, index) in roomTypes" :key="index" :value="roomType.name">
                                {{ roomType.name }}
                            </option>
                        </select>
                    </div>

                    <div v-if="weblink == 'none'">
                        No site yet

                    </div>
                      <a  v-else :href="
                      weblink" class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Book now </a>

                    <!-- <div class="w-[100%] px-2 mt-5">
                        <button @click="bookNow"
                            class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Book
                            Now</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div class="relative flex flex-col">
        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
            <div>
                <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />

            </div>

            <div class="lg:hidden mt-2 mb-4">

                <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow mt-4">

                    <div class="flex flex-col m-2">
                        <label for="" class="mb-2 font-bold">From</label>
                        <input type="date" id="dateFrom" v-model="dateFrom" @input="handleDateInput('from')"
                            class="border-2 border-black rounded-md p-2.5">
                        <p v-if="startDateError" class="text-red-500">{{ startDateError }}</p>
                    </div>
                    <!-- End Date Datepicker with Placeholder -->
                    <div class="flex flex-col m-2">
                        <label for="" class="mb-2 font-bold">To</label>
                        <input type="date" id="dateTo" v-model="dateTo" @input="handleDateInput('to')"
                            class="border-2 border-black rounded-md p-2.5">
                        <p v-if="endDateError" class="text-red-500">{{ endDateError }}</p>
                    </div>
                    <div class="flex flex-col m-2">
                        <label for="roomType" class="mb-2 font-bold">Type of Room</label>
                        <select id="roomType" v-model="selectedRoomType"
                            class="border-2 border-black mt-1 rounded-md p-2.5">
                            <option v-for="(roomType, index) in roomTypes" :key="index" :value="roomType.name">
                                {{ roomType.name }}
                            </option>
                        </select>
                    </div>
                    <!-- <div class="w-[100%] px-2 mt-5">
                        <button @click="bookNow"
                            class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Book
                            Now</button>
                    </div> -->


                </div>

            </div>
            <hr style="border-top: 1px solid black">


            <h1 class="font-bold text-lg text-black text-left pt-10 pb-4" v-for="(item, index) in storereviews"
                :key="index">{{item.overall}} Ratings ({{item.countreview}} reviews)
                <div v-if="item.countreview === 0">
                    No reviews yet
                </div>

            </h1>

                
                
                <div class="grid lg:grid-cols-2" v-for="(item, index) in storeratings"
                :key="index">



                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">{{item.productid}}</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">{{item.averagerate}}</p>
                    </div>
                    </div>
            <!-- <div>
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
            </div> -->
        </div>
        <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5 pb-5">
            <!-- Feedback Content -->
            <div class="relative border-2 border-gray-200 rounded-md px-3 py-3"  v-for="(item, index) in storeratings"
                :key="index">

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
                            {{ item.Comments }}
                        </p>
                        <p class="relative bottom-4 left-2 text-gray-600 text-lg">
                        </p>
                    </div>
                </div>

                <div class="p-2 w-full">
                    <p class="text-justify text-black text-md leading-7"></p>
                </div>
            </div>
        </div>
        <div v-if="showSeeMoreButton || showSeeLessButton" class="flex items-center justify-center pr-[5rem] mt-5 mb-10">
            <div v-if="showSeeMoreButton">
                <div>
                    <div
                        style="position: absolute; bottom: 0; left: 0; height: 24%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);">
                    </div>
                </div>
                <div class="absolute bottom-3">
                    <!-- <button @click="seeMore"
                        class="left-0 right-0 px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See More</span>
                    </button> -->
                </div>
            </div>
            <div v-if="showSeeLessButton" class="mb-10">
                <div class="absolute bottom-8">
                    <button @click="seeLess"
                        class=" px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See Less</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <login-modal v-if="!authStore.isAuthenticated && showLoginModal" @close="showLoginModal = false"></login-modal>
</template>


<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>

<script>
import ContentCarousel from '@/components/ToStayCarousel.vue';
import MapRenderer from "@/components/MapRenderer.vue";
import LoginModal from '@/components/LoginModal.vue';
import axios from 'axios';
import Carousel from "@/components/ToStayCarousel.vue";

import {
    useStayStore
} from '@/stores/toStayCart';
import {
    defineComponent,
    ref,
    computed
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
        const dateFrom = ref('');
        const dateTo = ref('');
        const selectedRoomType = ref('');
        const startDateError = ref(null);
        const endDateError = ref(null);
        const selectedRoom = ref(null); // Define selectedRoom here
        const dragging = ref(false);
        const startX = ref(0);
        const scrollLeft = ref(0);
        const currentPage = ref(0);
        const pageSize = ref(8);
        const showDropdown = ref(false);
        const numFeedbackShown = ref(0);
        const showSeeLessButton = ref(false);
        const showLoginModal = ref(false);
        const isDropdownOpen = ref(false);
        const services = ['Gym', 'Free Parking', 'Pet Space', 'Free WIFI', 'Air conditioned'];
        const items = [{
            name: 'Juan Dela Cruz',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
            date: 'December 2023',
        },
        {
            name: 'Luis Paolo',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
            date: 'December 2023',
        },
        {
            name: 'Luis Paolo',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
            date: 'December 2023',
        },
        {
            name: 'Juan Dela Cruz',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
            date: 'December 2023',
        },
        {
            name: 'Juan Dela Cruz',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
            date: 'December 2023',
        },
        {
            name: 'Luis Paolo',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
            date: 'December 2023',
        },
        {
            name: 'Luis Paolo',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
            date: 'December 2023',
        },
        {
            name: 'Juan Dela Cruz',
            description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
            date: 'December 2023',
        },
        ];
        const roomTypes = [
            { name: 'Regular room', price: 5000 },
            { name: 'Double room', price: 6000 },
            { name: 'Suite room', price: 8000 },
            { name: 'Deluxe room', price: 7000 },
            { name: 'Double Deluxe room', price: 9000 }
        ];


        const roomImages = {
            'Regular room': [
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom1.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom2.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom3.jpg'
            ],
            'Double room': [
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom1.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom2.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom3.jpg'
            ],
            'Suite room': [
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom1.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom2.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom3.jpg'
            ],
            'Deluxe room': [
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom1.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom2.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom3.jpg'
            ],
            'Double Deluxe room': [
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom1.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom2.jpg',
                '/src/assets/images/CategoryView/ToShop/ToShopregularroom3.jpg'
            ]
        };
        const categories = ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'];
        const locations = ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'];


        const selectHotel = (hotel) => {
            const stayXyzData = {
                dateFrom: hotel.dateFrom || '',
                dateTo: hotel.dateTo || '',
                roomType: hotel.roomType || '',
                roomTypeName: selectedRoomType.value, // Store selected room type name
                roomTypePrice: roomTypes.find(type => type.name === selectedRoomType.value)?.price || 0 // Store selected room type price
            };
            cartStay.selectStayXyzData(stayXyzData); // Call selectStayXyzData from the store and pass stayXyzData
            const hotelDetails = {
                ...hotel,
                ...stayXyzData,
            };
            cartStay.selectHotel(hotelDetails);
        };

        const bookNow = () => {
            if (!authStore.isAuthenticated) {
                authStore.setIntendedRoute(router.currentRoute.value.path);
                showLoginModal.value = true;
                return;
            }

            if (!dateFrom.value || !dateTo.value || !selectedRoomType.value) {
                alert("Please select Date and Room Type.");
                return;
            }
            const hotel = {
                dateFrom: dateFrom.value,
                dateTo: dateTo.value,
                roomType: selectedRoomType.value,
            };
            selectHotel(hotel);
            router.push('/checkoutbook');
        };
        const closeLoginModal = () => {
            showLoginModal.value = false;
        };

        const paginatedItems = computed(() => {
            return items.slice(0, 2 + numFeedbackShown.value);
        });

        const showSeeMoreButton = computed(() => {
            return numFeedbackShown.value < items.length - 2;
        });


        const closeImagePreview = (event) => {
            if (!event.target.closest('.p-10')) {
                console.log('Clicked outside preview, closing...');
                selectedRoom.value = null;
            } else {
                console.log('Clicked inside preview, not closing...');
            }
        };
        const selectedRoomImages = computed(() => {
            return roomImages[selectedRoom.value] || [];
        });

        const showRoomPreview = (roomName) => {
            selectedRoom.value = roomName;
        };

        const startDrag = (e) => {
            dragging.value = true;
            startX.value = e.pageX - $refs.container.offsetLeft;
            scrollLeft.value = $refs.container.scrollLeft;
        };

        const drag = (e) => {
            if (!dragging.value) return;
            const x = e.pageX - $refs.container.offsetLeft;
            const walk = (x - startX.value) * 2;
            $refs.container.scrollLeft = scrollLeft.value - walk;
        };

        const endDrag = () => {
            dragging.value = false;
        };

        const dragStart = (event) => {
            event.preventDefault();
        };

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };
        const seeMore = () => {
            numFeedbackShown.value += 2; // Change this value as per your requirement
            if (!showSeeMoreButton.value) {
                showSeeLessButton.value = true;
            }
        };

        const seeLess = () => {
            numFeedbackShown.value = 0;
            showSeeLessButton.value = false;
        };
        const minDate = computed(() => {
            const today = new Date().toISOString().split('T')[0];
            return today;
        });

        const handleDateInput = (type) => {
            if (type === 'from' && dateTo.value && dateFrom.value > dateTo.value) {
                startDateError.value = 'Start date cannot be greater than end date';
                endDateError.value = '';
                dateFrom.value = '';
            } else if (type === 'to' && dateFrom.value && dateTo.value < dateFrom.value) {
                endDateError.value = 'End date cannot be earlier than start date';
                startDateError.value = '';
                dateTo.value = '';
            } else {
                startDateError.value = null;
                endDateError.value = null;
            }
        };
        return {
            minDate,
            showLoginModal,
            cartStay, // Return the cartStay object
            router,
            authStore,
            dateFrom,
            dateTo,
            selectedRoomType,
            startDateError,
            endDateError,
            selectedRoom, // Add selectedRoom to the returned object
            handleDateInput,
            bookNow,
            dragging,
            startX,
            scrollLeft,
            currentPage,
            pageSize,
            showDropdown,
            numFeedbackShown,
            showSeeLessButton,
            isDropdownOpen,
            services,
            items,
            roomTypes,
            roomImages,
            categories,
            locations,
            selectedRoomImages,
            paginatedItems,
            showSeeMoreButton,
            closeImagePreview,
            showRoomPreview,
            startDrag,
            drag,
            endDrag,
            dragStart,
            toggleDropdown,
            seeMore,
            seeLess,
            showRoomPreview,
            selectedRoom,


        };
    },

    props: {
        latitude: Number,
        longitude: Number,
        name: String,
        id: Number,
    },
    components: {
        Carousel,
        MapRenderer,
        LoginModal,
    },
    mounted(){
       
      this.id=this.$route.params.id;
      console.log(this.id);
      this.getId();
      this.imageUrls = this.imageArray.split('|');
      console.log(this.imageUrls);
    },
    
    data(){
       return{
        imageUrls:'',
        id:'',
        storedetails: '',
            storeratings: '',
            storereviews: '',
            imageArray: '',
            book:{},
            weblink: '',
            localimageUrl: 'http://127.0.0.1:8000/storage/uploadedfiles',
            apiurlimage: 'http://makatiapi.simplevia.com/storage/uploadedfiles',
       } 
    },
methods:{

    getId() {
        console.log(this.id);  
    axios.get(`/getStore/${this.id}`).then((response) => {
                console.log(response.data.overall);
                console.log(response.data.ratestatus);
                console.log(response.data.websitelink);
                
                const storeparse = JSON.parse(response.data.message);
                const rateparse = JSON.parse(response.data.ratings);
                const reviewparse = JSON.parse(response.data.overall);
                const website = JSON.parse(response.data.websitelink);
                this.weblink = website.redirectweb;
                console.log(this.weblink);
                this.storedetails = storeparse;
                this.storeratings = rateparse;
                this.storereviews = reviewparse;
                console.log(this.storereviews);
                console.log(this.storeratings);
                console.log(this.storedetails.pictureimage);
                const removeChar = String(this.storedetails.pictureimage).replace(/[|]/g,',');
                console.log(removeChar);
                const separator = ",";
                const arrImage = removeChar.split(separator);
                this.imageArray = arrImage.filter(elm => elm);
                console.log(this.imageArray);

            }).catch((error) => {
                console.log(error);
            });
        }
},


  
});
</script>
