<template>
    <div>
        <!-- Navigation Filter -->
        <div class="bg-[#102E61] w-full h-[770px] z-10 lg:block hidden   ">
            <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar ">
                <div class="text-[#102E61] w-full z-10 p-4 flex justify-center">
                    <nav class="flex">
                        <button @click="filterByStatus('Shipped')"
                            :class="{ 'bg-blue-200': selectedStatus === 'Shipped', 'hover:bg-blue-200': selectedStatus !== 'Shipped' }"
                            class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Ship</button>
                        <button @click="filterByStatus('Delivered')"
                            :class="{ 'bg-blue-200': selectedStatus === 'Delivered', 'hover:bg-blue-200': selectedStatus !== 'Delivered' }"
                            class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Receive</button>
                        <button @click="filterByStatus('Completed')"
                            :class="{ 'bg-blue-200': selectedStatus === 'Completed', 'hover:bg-blue-200': selectedStatus !== 'Completed' }"
                            class="px-4 py-2 text-[#2969D6] rounded-md">Completed</button>
                    </nav>
                </div>
                <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
                    <div v-for="(item, index) in filteredItems" :key="index"
                        class="flex justify-between mt-5 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] space-y-2">
                        <div class="flex flex-row gap-[5rem]">
                            <img :src="getImageUrl(getFirstImageUrl(item?.preproduct?.[0]?.uploadedphotos))"
                                :alt="item.productname" class="w-8 h-auto lg:w-[154px] lg:h-[154px]">
                            <div class="w-[15rem]">
                                <p class="mt-6 h-[2rem]  text-md">{{ item.productname }}</p>
                                <p class="mt-6 text-sm text-gray-500">Ordered at {{ formatDate(item.created_at) }}</p>
                                <p class="mt-2 [5rem] text-xs text-gray-500">{{ item.paymentstatus }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center mr-5">
                            <p>{{ item.quantity }}x</p>
                            <p>₱ {{ item.productprice }}</p>
                            <button v-if="item.paymentstatus === 'Shipped'" @click="cancelOrder(item)"
                                class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Cancel</button>
                            <button v-else-if="item.paymentstatus === 'Delivered'" @click="orderReceived(item)"
                                class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Order
                                Received</button>
                            <button v-else-if="item.paymentstatus === 'Completed'" @click="openParcelDetails(item)"
                                class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">See
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile View -->
        <div class="bg-[#102E61] w-full h-[700px] z-10 block lg:hidden">
            <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar">
                <div class="text-[#102E61] w-full z-10 p-4 flex justify-center">
                    <nav class="flex">
                        <button @click="filterByStatus('Shipped')"
                            :class="{ 'bg-blue-500': selectedStatus === 'Shipped', 'hover:bg-blue-400': selectedStatus !== 'Shipped' }"
                            class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Ship</button>
                        <button @click="filterByStatus('Delivered')"
                            :class="{ 'bg-blue-500': selectedStatus === 'Delivered', 'hover:bg-blue-400': selectedStatus !== 'Delivered' }"
                            class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Receive</button>
                        <button @click="filterByStatus('Completed')"
                            :class="{ 'bg-blue-500': selectedStatus === 'Completed', 'hover:bg-blue-400': selectedStatus !== 'Completed' }"
                            class="px-4 py-2 text-[#2969D6] rounded-md">Completed</button>
                    </nav>
                </div>
                <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
                    <div v-for="(item, index) in filteredItems" :key="index"
                        class="flex justify-between mt-5 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] space-y-2 relative">
                        <div class="flex flex-row lg:gap-[5rem]">
                            <img :src="getImageUrl(getFirstImageUrl(item?.preproduct?.[0]?.uploadedphotos))"
                                alt="Product Image" class="w-8 h-auto lg:w-[100%] lg:h-[100%] hidden lg:block">
                            <div class="lg:hidden block">
                                <img :src="getImageUrl(getFirstImageUrl(item?.preproduct?.[0]?.uploadedphotos))"
                                    alt="Product Image" class="w-[90px] h-[90px]">
                                <p class="lg:mt-10 text-sm w-[90px] text-gray-500">{{ formatDate(item.created_at) }}</p>

                                <p class="mt-2 [5rem] text-xs text-gray-500">{{ item.paymentstatus }}</p>
                            </div>
                            <div class="w-[15rem]">
                                <p class="lg:hidden mt-6 text-md font-medium ml-4">{{ item.productname }}</p>
                                <div class="float-end absolute bottom-0 right-2 mb-4 mr-4">
                                    <p class="mt-4">{{ item.quantity }}x ₱ {{ item.productprice }}</p>
                                    <button v-if="item.paymentstatus === 'Shipped'" @click="cancelOrder(item)"
                                        class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Cancel</button>
                                    <button v-else-if="item.paymentstatus === 'Delivered'" @click="orderReceived(item)"
                                        class="mt-[2.7rem] py-3 px-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Order
                                        Received</button>
                                    <button v-else-if="item.paymentstatus === 'Completed'" @click="openParcelDetails(item)"
                                        class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">See
                                        Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Buy Again Modal -->
        <div v-if="showParcelDetails"
            class="fixed inset-0 mt-[4.5rem] flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white w-[90%] lg:w-[855px] lg:h-[590px] rounded-lg">
                <!-- Modal Content -->
                <div class="flex justify-between">
                    <div>
                        <p class="font-bold text-3xl">Order Completed</p>
                        <p class="text-xs">Thank you for shopping with us!</p>
                    </div>
                    <div class="relative flex justify-end">
                        <button class="absolute ">
                            <svg @click="closeParcelDetails" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="5" stroke="black" class="w-auto h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mt-5 flex justify-between">
                    <p class="text-md">Shipping Information</p>
                    <p class="text-xs text-[#008EE4] mt-1">Parcel has been delivered</p>
                </div>

                <div class="flex justify-between mt-[1.5rem] w-auto lg:h-[154px] h-[120px] bg-[#E7EAEF] space-y-2 relative">
                    <!-- Add relative positioning -->
                    <div class="flex flex-row ">
                        <img :src="getImageUrl(getFirstImageUrl(selectedItem?.preproduct?.[0]?.uploadedphotos))"
                            class="h-auto w-[154px] lg:h-[154px]">
                        <div class="w-full">
                            <div class="grid grid-cols-2">
                                <p class="h-[2rem] mt-3 text-md lg:text-lg">{{
                                    selectedItem?.productname }}</p>

                                <p class="mt-4 text-md absolute right-0 mr-10"> {{ selectedItem?.quantity }}x</p>
                            </div>
                            <div class="absolute bottom-0 right-0 mb-4 mr-10">
                                <!-- Positioning to bottom right corner -->
                                <p class="text-md ">₱ {{ selectedItem?.productprice }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-3 w-auto lg:h-[150px] bg-[#E7EAEF] space-y-2">
                    <div class="flex flex-row gap-[5rem]">
                        <div class="ml-4 flex flex-col ">
                            <p class="mt-1 text-md text-[#747474]">Merchandise Subtotal</p>
                            <p class=" mt-3 text-md text-[#747474]">Shipping Fee</p>
                            <p class=" mt-3 pb-3 text-lg ">Order Total</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mr-10">
                        <p class="mt-1 text-md text-[#747474] text-right">₱ {{ selectedItem?.details[0]?.subtotal }}</p>
                        <p class="mt-3 text-md text-[#747474] text-right">₱ {{ selectedItem?.details[0]?.deliveryfee }}</p>
                        <p class="mt-3 text-md">₱ {{ selectedItem?.details[0]?.finaltotal }}</p>
                    </div>

                </div>
                <div class=" justify-end flex mt-6">
                    <button @click="closeParcelDetails"
                        class=" px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center  ">Buy
                        Again</button>
                </div>
            </div>
        </div>

        <div v-if="showCancelOrder" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white w-[90%] lg:w-[50%] rounded-lg">
                <div class="flex justify-between mb-4">
                    <p class="font-bold text-xl">Cancel Order</p>
                    <button @click="closeCancelOrder()" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <p>Are you sure you want to cancel this order?</p>
                <div class="flex justify-end mt-4">
                    <button @click="closeCancelOrder()" class="px-4 py-2 bg-gray-200 rounded-md">No</button>
                    <button @click="confirmCancelOrder()"
                        class="ml-2 px-4 py-2 bg-[#2969D6] text-white rounded-md">Yes</button>
                </div>
            </div>
        </div>

        <!-- Order Received Modal -->
        <div v-if="showOrderReceived" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white w-[90%] lg:w-[50%] rounded-lg">
                <div class="flex justify-between mb-4">
                    <p class="font-bold text-xl">Order Received</p>
                    <button @click="closeOrderReceived()" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <p>Confirm that you have received your order?</p>
                <div class="flex justify-end mt-4">
                    <button @click="closeOrderReceived()" class="px-4 py-2 bg-gray-200 rounded-md">No</button>
                    <button @click="confirmOrderReceived()"
                        class="ml-2 px-4 py-2 bg-[#2969D6] text-white rounded-md">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const selectedStatus = ref('Shipped');
const showParcelDetails = ref(false);
const showCancelOrder = ref(false);
const showOrderReceived = ref(false);
const showReviewsModal = ref(false);
const showConfirmationReview = ref(false);
const reviewText = ref('');
const starRating = ref(0);
const selectedItem = ref({});

const transactions = ref([]);

const fetchTransactions = async () => {
    try {
        const response = await axios.post('/displayTrans');
        console.log('API Response:', response.data);
        transactions.value = response.data.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
};
onMounted(fetchTransactions);

const getFirstImageUrl = (pictureimage) => {
    if (!pictureimage) return '';
    const images = pictureimage.split('|').filter(img => img.trim() !== '');
    return images.length > 0 ? images[0] : '';
};

const getImageUrl = (fileName) => {
    return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const filteredItems = computed(() => {
    if (transactions.value) {
        return transactions.value.filter(item => item.paymentstatus === selectedStatus.value);
    }
    return [];
});
const formatDate = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', options);
};


const filterByStatus = (status) => {
    selectedStatus.value = status;
};

const cancelOrder = (item) => {
    selectedItem.value = item;
    showCancelOrder.value = true;
};

const orderReceived = (item) => {
    selectedItem.value = item;
    showOrderReceived.value = true;
};



// const closeReviewsModal = () => {
//     showReviewsModal.value = false;
//     openParcelDetails(selectedItem.value); // Open the buy again modal
// };

const openConfirmationModal = () => {
    closeParcelDetails(); // Close the buy again modal first
    showConfirmationReview.value = true;
};

const closeConfirmationModal = () => {
    showConfirmationReview.value = false;
    reviewText.value = '';
    starRating.value = 0;
};

// const rate = (star) => {
//     starRating.value = star;
// };

// const submitReview = () => {
//     console.log("Review Comment:", reviewText.value);
//     console.log("Star Rating:", starRating.value);

//     // Close the review modal first
//     closeReviewsModal();

//     // Open the confirmation modal after the review modal is closed
//     openConfirmationModal();
// };

const openParcelDetails = (item) => {
    selectedItem.value = item;
    showParcelDetails.value = true;
};

const closeParcelDetails = () => {
    showParcelDetails.value = false;
};

const closeCancelOrder = () => {
    showCancelOrder.value = false;
};

const confirmCancelOrder = () => {
    // logic to cancel order
    showCancelOrder.value = false;
};

const closeOrderReceived = () => {
    showOrderReceived.value = false;
};

const confirmOrderReceived = () => {
    // logic to confirm order received
    showOrderReceived.value = false;
};

const buyAgain = (item) => {
    selectedItem.value = item;
    showParcelDetails.value = true;
};
</script>
