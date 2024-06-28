<template>
    <div class="flex relative pt-[57px] md:pt-[80px] justify-center w-full">
        <div class="relative  lg:w-full">
            <div class="bg-[#102E61] h-[100%] lg:h-[100%]" style="position: absolute; top: 0px; left: 0; width: 100%; ">
            </div>
            <div class="relative flex flex-col pl-0 lg:pl-16">
                <div class="relative flex flex-col pl-0 lg:pl-14">
                    <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
                        <router-link to="/category/tour">
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
                    <div class=" lg:pr-[7rem]  justify-center flex w-full">
                            <ContentCarousel :items="items" class="mb-10 lg:ml-9  w-full " />
                        </div>
                    <div class="lg:hidden fixed bottom-0 w-full bg-gray-100 lg:p-5 px-5 py-3 shadow-lg z-[10]">
                        <div class="flex justify-between">
                            <div>
                                <p class="text-md">Plan your adventure</p>
                                <p class="text-lg font-bold">Get ready to tour</p>
                            </div>
                            <router-link to="/checkouttour">
                                <div class="w-[100%] px-2 mt-5">
                                    <button
                                        class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg p-4 w-[100%]">Reserve</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-col p-3 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ cartTour.shopData.activitytitle }}
                        </h1>
                        <p class="text-md text-white text-left pb-5">Guided Tour: {{ cartTour.shopData.guidetour }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:flex lg:flex-wrap lg:justify-between lg:items-center lg:mb-2 lg:relative">
        <div class="my-4 lg:p-0 lg:w-[75%]">
            <div class="relative mx-6 px-3 lg:px-32 pt-5">
                <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
                <p class="text-lg text-justify text-black pb-5">{{ cartTour.shopData.description }}</p>
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
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">{{ cartTour.shopData.address }}
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
                        <p class="text-lg md:text-black text-left">{{ cartTour.shopData.startsat }} to {{ cartTour.shopData.endsat }}
                        </p>
                        <p class="text-lg md:text-black text-left">{{ cartTour.shopData.actsched }}</p>
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
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{ cartTour.shopData.contactno }}</p>
                </div>
                <div class="my-4 lg:w-[100%] relative">
                    <div>
                        <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                        <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />
                    </div>
                    <!-- 
                            Form in Mobile -->
                    <div class="lg:hidden">
                        <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow mt-4">
                            <div class="mb-5">
                                <div class="flex flex-col m-2">
                                    <label for="Date" class="mb-2 font-bold">Date of Tour</label>
                                    <div class="w-34">   
                                        <CustomCalendar :availableDays="availableDays" v-model:selectedDate="reservationDetails.date" />
                                    </div>

                                </div>
                                <div class="flex flex-col m-2">
                                    <label for="" class=" mb-2 font-bold">Number of Person</label>
                                    <input
              type="number"
              v-model="reservationDetails.numberOfPersons"
              class="border-2 border-black rounded-md p-2.5"
              min="1"
              max="15"
              @input="updateNumberOfPersons"
            />
                                </div>
                                <div class="flex flex-col m-2">
                                    <label for="tourTimeInput" class="mb-2 font-bold">Time of Tour</label>
                                    <!-- Set id attribute for easy access in JavaScript -->
                                    <span>10:00 AM - 11:00 AM</span>
                                </div>
                                <div class="flex flex-col m-2">
                                    <label for="" class=" mb-2 font-bold">Services</label>
                                    <span>Tour</span>
                                </div>
                                <div class="w-[100%]">
                                    <button @click="reserve"
                                        class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Reserve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:block">
    <div class="my-4 lg:w-[30%] lg:h-[30%] right-2 absolute top-[8rem]">
      <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow">
        <div class="mb-5">
            <label for="date" class="mb-2 font-bold">Select Day of Tour</label>

          <CustomCalendar :availableDays="availableDays" v-model:selectedDate="reservationDetails.date" />
          <div class="flex flex-col m-2">
            <label for="" class="mb-2 font-bold">Number of Person</label>
            <input
              type="number"
              v-model="reservationDetails.numberOfPersons"
              class="border-2 border-black rounded-md p-2.5"
              min="1"
              max="15"
              @input="updateNumberOfPersons"
            />
          </div>
          <div class="flex flex-col m-2">
            <label for="tourTimeInput" class="mb-2 font-bold">Time of Tour</label>
            <span>10:00 AM - 11:00 AM</span>
          </div>
          <div class="flex flex-col m-2">
            <label for="" class="mb-2 font-bold">Services</label>
            <span>Tour</span>
          </div>
        </div>
        <div class="w-[100%]">
          <button @click="reserve" class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Reserve</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="relative flex flex-col">
        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
            <hr style="border-top: 1px solid black">
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
        <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
            <!-- Feedback Content -->
            <div class="relative border-2 border-gray-200 rounded-md px-3 py-3" v-for="(item, index) in paginatedItems"
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
                            {{ item.name }}
                        </p>
                        <p class="relative bottom-4 left-2 text-gray-600 text-lg">{{ item.date }}
                        </p>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <p class="text-justify text-black text-md leading-7">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <div v-if="showSeeMoreButton || showSeeLessButton" class="flex items-center justify-center pr-[5rem] mt-5 mb-10">
            <div v-if="showSeeMoreButton">
                <div>
                    <div
                        style="position: absolute; bottom: 0; left: 0; height: 50%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);">
                    </div>
                </div>
                <div class="absolute bottom-3">
                    <button @click="seeMore"
                        class="left-0 right-0 px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See More</span>
                    </button>
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
    <login-modal v-if="showLoginModal" @close="handleCloseLoginModal" :showModal="showLoginModal" />
</template>


<style scoped></style>

<script setup>
import { ref, computed, watch, defineProps, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTourStore } from '@/stores/toTourCart';
import { useAuthStore } from '@/stores/auth';
import ContentCarousel from '@/components/TourCarousel.vue';
import MapRenderer from "@/components/MapRenderer.vue";
import LoginModal from '@/components/LoginModal.vue';
import CustomCalendar from '@/components/CustomCalendar.vue';

// Define component props
const props = defineProps({
  latitude: Number,
  longitude: Number,
  name: String,
  id: Number,
  item: String,
  imageList: String,
});

// Router and store hooks
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const cartTour = useTourStore();

// Reactive states
const showLoginModal = ref(false);
const storedetails = ref({});
const reservationDetails = computed(() => cartTour.reservationDetails);
const availableDays = computed(() => cartTour.availableDays);

const minDate = ref(new Date().toISOString().split('T')[0]);

const fetchActivityDetails = async (id) => {
  await cartTour.fetchCoverPhoto(id);
  storedetails.value = cartTour.shopData;
};

const isDateSelectable = computed(() => {
  return (date) => {
    if (!date) return false;
    const day = new Date(date).getDay();
    return cartTour.availableDays.includes(day);
  };
});

const reserve = () => {
  if (!authStore.isAuthenticated) {
    authStore.setIntendedRoute(router.currentRoute.value.path);
    showLoginModal.value = true;
    return;
  }

  if (!reservationDetails.value.date || !isDateSelectable.value(reservationDetails.value.date)) {
    alert("Please select a valid date.");
    return;
  }

  const numberOfPersonsValue = parseInt(reservationDetails.value.numberOfPersons);
  if (isNaN(numberOfPersonsValue) || numberOfPersonsValue <= 0) {
    alert("Please enter a valid number of persons.");
    return;
  }

  cartTour.reserveTour({
    date: reservationDetails.value.date,
    numberOfPersons: numberOfPersonsValue,
  });

  router.push('/checkouttour');
};

const updateNumberOfPersons = (event) => {
  cartTour.updateReservationDetails({ numberOfPersons: event.target.value });
  console.log('Updated Number of Persons:', event.target.value);
};

const handleCloseLoginModal = () => {
  showLoginModal.value = false;
};

watch(() => route.params.id, (newId) => {
  fetchActivityDetails(newId);
}, { immediate: true });

const checkDate = () => {
  if (!isDateSelectable.value(reservationDetails.value.date)) {
    cartTour.updateReservationDetails({ date: '' });
    alert("Selected date is not available for tour.");
  }
};

onMounted(() => {
  fetchActivityDetails(route.params.id);
  watch(reservationDetails, (newVal) => {
    console.log('Reservation details updated:', newVal);
  });
});
</script>

