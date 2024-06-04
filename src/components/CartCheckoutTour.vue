<template>
    <template v-if="!showVoucher">
        <div :key="showPayment ? 'payment' : 'booking'">
            <template v-if="showPayment">
                <nav
                    class=" h-28 pt-16 pl-5  bg-[#132540] text-white text-xl font-semibold flex items-center  cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0 ">
                    <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="3" stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
                        </path>
                    </svg> {{ navButtonText }}
                </nav>
                <div class="justify-center my-5 mr-5 relative lg:mb-[20rem] ">
                    <div class="lg:block relative lg:w-[60%] lg:top-[3rem] top-5">
                        <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
                            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Trip</p>
                            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[90px] lg:mb-1 font-bold ">Date of Tour</p>
                                    <p class="font-normal mb-3 ">{{ reservationDetails.date }}</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class=" lg:mb-1 font-bold " style="margin-right: min(max(88px), 119px);">Time of
                                        Tour
                                    </p>
                                    <p class="font-normal mb-3">10:00 AM - 11:00 AM</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Number of Person</p>
                                    <p class="font-normal mb-3">{{ reservationDetails.numberOfPersons }}</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Services Included</p>
                                    <p class="font-normal mb-3 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal"
                                        style="text-overflow: ellipsis;">Tour</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px]">
                            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
                            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                                    <p class="font-normal mb-3 text-gray-600">{{ model.userInfo.firstname }} {{ model.userInfo.lastname }}</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start">
                                    <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                                    <p class="font-normal mb-2 text-base text-gray-600 text-sm">{{ model.userInfo.email }} 
                                    </p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                                    <p class="font-normal mb-3 text-gray-600">{{ model.userInfo.contact }}</p>
                                </div>
                              
                            </div>
                           
                        </div>
                    </div>
                    <!-- FOR MOBILE -->
                    <div class=" lg:hidden p-5 ">
                        <div class="mt-5 bg-gray-400 h-0.5"></div>
                        <p class=" text-2xl font-bold pt-6">Your Information</p>
                        <div className="grid grid-cols-2 grid-rows-3 pt-5 " style="word-wrap: break-word;">
                            <div>
                                <p class="text-base font-bold">Full Name</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2  text-gray-600 text-base">Juan Dela Cruz</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">E-mail Address</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2 text-base text-gray-600 text-sm">Juandelacruz@gmail.com</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">Phone Number</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2 text-gray-600 text-base">09123456789</p>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Start of Central Business District Tour -->
                    <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem] w-screen">
                        <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%]  h-fit">
                            <div class="lg:flex items-center mb-5">
                                <img :src="getImageUrl(firstImageUrl)" class="w-[100%] lg:w-[40%] h-[6rem] rounded-lg">

                                <div class="ml-1 flex flex-col">
                                    <div>
                                        <p class="font-bold">{{ cartTour.shopData.activitytitle }}</p>
                                    </div>
                                    <div>
                                        <p class="mb-5 mt-2 text-gray-400"></p>
                                    </div>
                                    <div class="flex">
                                        <p class="font-semibold text-sm mt-0">5.0 Ratings</p>
                                        <p class="text-sm text-gray-400">(500 Reviews)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-400 h-0.5"></div>
                            <p class="lg:mr-9 lg:mt-2  lg:font-sans  lg:text-3xl font-bold  text-lg pt-4">Your Total</p>
                            <div class="items-center my-5">
                                <div 
                                    class="flex justify-between mb-2 w-[100%]">
                                    <p class="w-[70%]">1 Tour Session</p>
                                    <p class="text-gray-400">Free</p>
                                </div>
                                <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">
                                    Price
                                    Breakdown
                                </p>
                            </div>
                            <div class="bg-gray-400 h-0.5 w-[100%]"></div>
                         
                          
                            <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">Price
                                Breakdown
                            </p>
                            <!-- For Mobile -->
                            <div class="flex justify-center lg:hidden pt-6">
                                <button v-if="showPayment"
                                    class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                    @click="toggleComplete">Place Payment</button>
                            </div>
                            <!-- For Web -->
                            <div class="justify-center lg:block hidden pt-6">
                                <button
                                    class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                    @click="toggleComplete">Confirm Booking</button>
                            </div>
                            <div v-if="showConfirmation"
                                class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                                @click.self="closeModal">
                                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                                    <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                                      
                                        <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5"
                                            @click="toggleComplete">Okay</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="showComplete"
                                class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                                @click.self="closeModal">
                                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                                    <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                                        <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                                        <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                                        <router-link to="/category/eat"><button
                                                class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
                                                @click="closeModal">Okay</button></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="lg:hidden">
                    <nav
                        class=" h-28 pt-16 pl-5  bg-[#132540] text-white text-xl font-semibold flex items-center  cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0 ">
                        <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="3" stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
                            </path>
                        </svg> {{ navButtonText }}
                    </nav>
                    <div>
                    </div>
                    <div class="mt-[0rem] w-full h-full p-8">
                        <div className="grid grid-cols-1 grid-rows-4 gap-0">
                            <div class="flex border rounded p-8 h-24" @click="selectedPaymentMethod = 'gcash'"
                                :class="{ 'bg-blue-100': selectedPaymentMethod === 'gcash' }">
                                <div class="flex items-center pr-3">
                                    <input id="gcash" aria-describedby="helper-radio-text" type="radio" value="ibayad"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        v-model="selectedPaymentMethod">
                                </div>
                                <div class="ms-2 text-sm">
                                    <label for="helper-radio" class="font-semibold text-xl text-gray-700">
                                        Ibayad</label>
                                </div>
                            </div>
                            <div class="mt-2 flex border rounded p-4 h-24" @click="selectedPaymentMethod = 'ibayad'"
                                :class="{ 'bg-blue-100': selectedPaymentMethod === 'ibayad' }">
                                <div class="flex items-center pr-3">
                                    <input id="payment_ibayad" name="payment_method" value="cod"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        type="radio" v-model="selectedPaymentMethod">
                                </div>
                                <div class="ms-2 text-sm">
                                    <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">
                                        Cash On Delivery</label>
                                    <p class="mt-2 font-bold text">Pay By Cash</p>
                                    <p class="text-m">Pay Cash Upon Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div class="justify-center pt-3">
                            <button class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                @click="toggleComplete">Confirm Booking</button>
                            <div v-if="showComplete"
                                class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                                @click.self="closeModal">
                                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                                    <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                                        <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                                        <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                                        <router-link to="/category/eat"><button
                                                class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
                                                @click="closeModal">Okay</button></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </template>

</template>


<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.60s;
}

.slide-up-enter,
.slide-up-leave-to {
    transform: translateY(-190%);
    height: 1500px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.50s;
    height: 1500px;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>


<script setup>
import { ref, computed, watch,reactive, onBeforeMount } from 'vue';
import { useTourStore } from '@/stores/toTourCart';
import {
     useRouter
} from 'vue-router';
import axios from 'axios';

const router = useRouter(); // Initialize router
// Use store
const cartTour = useTourStore();

// Access reactive state from the store
const shopData = computed(() => cartTour.shopData);
const reservationDetails = cartTour.reservationDetails;

// Component-specific reactive state
const selectedPaymentMethod = ref(null);
const showConfirmation = ref(false);
const showComplete = ref(false);
const showPayment = ref(true);
const showVoucher = ref(false);
const navButtonText = ref('Request to Book');

const model = reactive({
    userInfo: []
});


const user = (async() => {
    const response = await axios.post('/userDetails');
    model.userInfo = JSON.parse(response.data.userdetails);

});


const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleComplete = () => {
  showConfirmation.value = false;
  showComplete.value = !showComplete.value;
};

const closeModal = () => {
  showInformation.value = false;
  showConfirmation.value = false;
  showComplete.value = false;
};

const navigateBack = () => {
  if (!showPayment.value) {
    // If currently in the payment section, switch to the booking section
    showPayment.value = true;
    navButtonText.value = 'Request to Order';
  } else {
    router.go(-1);
  }
};

const activateRadioButton = (id) => {
  const radioBtn = document.getElementById(id);
  if (radioBtn) {
    if (radioBtn.checked) {
      radioBtn.checked = false; // If already checked, uncheck it
    } else {
      // Uncheck all radio buttons
      document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
      });
      radioBtn.checked = true; // Check the clicked radio button
    }
  }
};

const getFirstImageUrl = (activityphoto) => {
  if (!activityphoto) return '';
  const images = activityphoto.split('|').filter(img => img.trim() !== '');
  return images.length > 0 ? images[0] : '';
};

const firstImageUrl = computed(() => {
  if (!shopData.value || !shopData.value.activityphoto) return '';
  return getFirstImageUrl(shopData.value.activityphoto);
});

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

watch(showPayment, (newValue) => {
  if (!newValue) {
    // If the condition is false (else block is rendered), scroll to the top of the page
    scrollToTop();
  }
});
onBeforeMount(async() => {
    await user();
});
</script>