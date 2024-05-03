<template>
    <div class="bg-[#102E61] w-full h-[700px] z-10 lg:block hidden">
        <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar">
            <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
                <div v-for="(item, index) in items" :key="index"
                    class="flex justify-between mt-5 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] space-y-2">
                    <div class="flex flex-row gap-[5rem]">
                        <img :src="item.imageSrc" :alt="item.alt" class="w-8 h-auto lg:w-[154px] lg:h-[154px]">
                        <div class="w-[15rem]">
                            <p class="mt-6 h-[2rem] mt-3 text-md">{{ item.title }}</p>
                            <p class="mt-10 text-sm text-gray-500">{{ item.date }}</p>
                            <!-- Display date here -->
                            <p class="mt-2 [5rem] text-xs text-gray-500">{{ item.status }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mr-5">
                        <p>{{ item.quantity }}x</p>
                        <p>₱ {{ item.price }}</p>
                        <button @click="openParcelDetails(item)"
                            class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Buy
                            Again</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#102E61] w-full h-[700px] z-10 block lg:hidden ">
        <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar">
            <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
                <div v-for="(item, index) in items" :key="index"
                    class="flex justify-between mt-5 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] space-y-2 relative">
                    <!-- Add relative positioning -->
                    <div class="flex flex-row lg:gap-[5rem]">
                        <img :src="item.imageSrc" :alt="item.alt"
                            class="w-8 h-auto lg:w-[100%] lg:h-[100%] hidden lg:block">
                        <div class="lg:hidden block">
                            <img :src="item.imageSrc" :alt="item.alt" class="w-[76px] h-[76px]">
                            <p class="lg:mt-10 text-sm text-gray-500">{{ item.date }}</p>
                            <!-- Display date here -->
                            <p class="mt-2 [5rem] text-xs text-gray-500">{{ item.status }}</p>
                        </div>
                        <div class="w-[15rem]">
                            <p class="lg:hidden mt-2 text-md">{{ item.title }}</p>
                            <div class="float-end absolute bottom-0 right-0 mb-4 mr-4">
                                <!-- Positioning to bottom right corner -->
                                <p class="mt-4">{{ item.quantity }}x ₱ {{ item.price }}</p>
                                <button @click="openParcelDetails(item)"
                                    class="px-4 bg-[#2969D6] font-bold text-white rounded-md text-center">Buy Again</button>
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
        <div class="relative p-7 bg-white w-[90%] lg:w-[855px] lg:h-[610px] rounded-lg">
            <!-- Modal Content -->
            <div class="flex justify-between">
                <div>
                    <p class="font-bold text-3xl">Order Completed</p>
                    <p class="text-xs">Thank you for shopping with us!</p>
                </div>
                <div class="relative flex justify-end">
                    <button class="absolute ">
                        <svg @click="closeParcelDetails" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-auto h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="mt-5 flex justify-between">
                <p class="text-md">Shipping Information</p>
                <p class="text-xs text-[#008EE4]">Parcel has been delivered</p>
            </div>
            <div class="mt-2 flex justify-between">
                <p class="text-xs text-[#606060]">STANDARD DELIVERY COURIER</p>
                <p class="text-xs text-[#606060]">11-08-2023 03:50 PM</p>
            </div>
            <div class="flex justify-between mt-[1.5rem] w-auto h-[154px] bg-[#E7EAEF] space-y-2 relative">
                <!-- Add relative positioning -->
                <div class="flex flex-row ">
                    <img :src="selectedItem.imageSrc" :alt="selectedItem.alt" class="h-auto w-[154px] lg:h-[154px]">
                    <div class="w-full">
                        <div class="grid grid-cols-2">
                            <p class="h-[2rem] mt-3 text-md lg:text-lg">{{ selectedItem.title }}</p>
                            <p class="mt-4 text-md text-right pr-[30%]">{{ selectedItem.quantity }}x</p>
                        </div>
                        <div class="absolute bottom-0 right-0 mb-4 mr-10">
                            <!-- Positioning to bottom right corner -->
                            <p class="text-md">₱ {{ selectedItem.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between mt-3 w-auto h-[150px] bg-[#E7EAEF] space-y-2">
                <div class="flex flex-row gap-[5rem]">
                    <div class="ml-4 flex flex-col ">
                        <p class="mt-1 text-md text-[#747474]">Merchandise Subtotal</p>
                        <p class=" mt-3 text-md text-[#747474]">Handling Fee</p>
                        <p class=" mt-3 text-md text-[#747474]">Shipping Fee</p>
                        <p class=" mt-3 pb-3 text-lg ">Order Total</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mr-10">
                    <p class="mt-1 text-md text-[#747474] text-right">₱ {{ selectedItem.price }}</p>
                    <p class="mt-3 text-md text-[#747474] text-right">₱ {{ selectedItem.handlingFee }}</p>
                    <p class="mt-3 text-md text-[#747474] text-right">₱ {{ selectedItem.shippingFee }}</p>
                    <p class="mt-3 text-md">₱ {{ calculateTotalPrice() }}</p>
                </div>
            </div>
            <div class="flex justify-end mt-3">
                <button @click="openReviewsModal"
                    class="px-6 py-2 mt-4 border-[#2969D6] border font-bold text-[#2969D6] bg-white rounded-md text-center">Review</button>
            </div>
        </div>
    </div>
    <!-- Reviews Modal -->
    <div v-if="showReviewsModal" class="fixed inset-0 mt-[4.5rem] flex items-center justify-center  bg-opacity-75">
        <div class="relative p-7 bg-white w-[90%] lg:w-[855px] lg:h-[610px] rounded-lg">
            <!-- Modal Content -->
            <div class="flex">
                <div class="flex items-center">
                    <button @click="closeReviewsModal" class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
                <div class="ml-11">
                    <p class="font-bold text-3xl">Review</p>
                </div>
            </div>

            <!-- Item Details -->
            <div class="flex justify-between mt-[1rem] w-auto h-[154px] bg-[#E7EAEF] space-y-2 relative">
                <!-- Add relative positioning -->
                <div class="flex flex-row ">
                    <img :src="selectedItem.imageSrc" :alt="selectedItem.alt" class="h-auto w-[154px] lg:h-[154px]">
                    <div class="w-full">
                        <div class="grid grid-cols-2">
                            <p class="h-[2rem] mt-3 text-md lg:text-lg">{{ selectedItem.title }}</p>
                            <p class="mt-4 text-md text-right pr-[30%]">{{ selectedItem.quantity }}x</p>
                        </div>
                        <div class="absolute bottom-0 right-0 mb-4 mr-10">
                            <!-- Positioning to bottom right corner -->
                            <p class="text-md">₱ {{ selectedItem.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Review Form -->
            <div class="mt-5 ">

                <div class="relative">
                    <textarea v-model="reviewText" class="w-full h-[150px] p-2 border rounded-md bg-[#E7EAEF]"
                        placeholder="What did you like or dislike about this product?"></textarea>
                    <p class="absolute bottom-0 left-0 text-gray-400 p-3">{{ reviewText.length }}/300</p>
                </div>

                <!-- Star Ratings -->
                <div class="grid grid-rows-2 bg-[#E7EAEF] mt-4">
                    <div class="flex justify-center my-2 ">
                        <button v-for="star in 5" :key="star" @click="rate(star)" class="mx-1">
                            <img src="@/assets/images/Modal/star.png" class="w-6 h-6">
                        </button>

                    </div>
                    <p class="text-center text-gray-400">Rate this product</p>

                </div>

            </div>
            <!-- Submit Button -->
            <div class="flex justify-end mt-4">
                <button @click="submitReview"
                    class=" px-4 py-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Submit</button>
            </div>
        </div>
    </div>


    <!-- Confirmation Modal -->
    <div v-if="showConfirmationReview"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
            <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                <p class="font-bold text-2xl mb-6">Review Submitted</p>
                <p class="font-normal text-xl mb-6 m-3">Thanks for the review!<br> It will help other shoppers.</p>
                <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5"
                    @click="closeConfirmationModal">Okay</button>
            </div>
        </div>
    </div>
</template>

<script scoped>
import shirt from "@/assets/images/shirt.png"
import bag from "@/assets/images/White Canvas Bag.png"
import kalesa from "@/assets/images/Wooden Calesa.png"
export default {
    data() {
        return {
            items: [{
                imageSrc: shirt,
                alt: "shirt",
                title: "Never Stop Exploring Graphic Tee in Gray",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '299.00'
            },
            {
                imageSrc: bag,
                alt: "bag",
                title: "Multi Handle Tote Bag with Embroidered Philippines Kalesa Scenery",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '299.00'
            },
            {
                imageSrc: kalesa,
                alt: "kalesa",
                title: "Never Stop Exploring Graphic Tee in Gray",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '100.00'
            },
            {
                imageSrc: shirt,
                alt: "shirt",
                title: "Never Stop Exploring Graphic Tee in Gray",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '299.00'
            },
            {
                imageSrc: bag,
                alt: "bag",
                title: "Never Stop Exploring Graphic Tee in Gray",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '299.00'
            },
            {
                imageSrc: kalesa,
                alt: "kalesa",
                title: "Never Stop Exploring Graphic Tee in Gray",
                date: "11-08-2023 03:50 PM",
                status: "Parcel has been delivered",
                quantity: 1,
                handlingFee: '2.00',
                shippingFee: '15.00',
                price: '100.00'
            },
            ],
            isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
            showParcelDetails: false,
            selectedItem: null, // To store the selected item
            showReviewsModal: false,
            reviewText: '',
            starRating: 0,
            showConfirmationReview: false,
        };
    },
    mounted() {
        // Update isMobile on window resize
        window.addEventListener('resize', this.updateIsMobile);
    },
    beforeUnmount() {
        // Remove event listener on component destroy
        window.removeEventListener('resize', this.updateIsMobile);
    },
    computed: {
        firstItem() {
            return this.items[0];
        }
    },
    methods: {
        updateIsMobile() {
            this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
        },
        openParcelDetails(item) {
            this.selectedItem = item; // Set the selected item
            this.showParcelDetails = true; // Show the modal
        },
        closeParcelDetails() {
            this.showParcelDetails = false; // Close the modal
            // Refresh the page
        },
        calculateTotalPrice() {
            // Assuming you have the item price, handling fee, and shipping fee in your data
            const itemPrice = parseFloat(this.selectedItem.price);
            const handlingFee = parseFloat(this.selectedItem.handlingFee);
            const shippingFee = parseFloat(this.selectedItem.shippingFee);
            // Calculate total price
            const totalPrice = itemPrice + handlingFee + shippingFee;
            return totalPrice.toFixed(2); // Return total price with 2 decimal places
        },
        openReviewsModal() {
            this.closeParcelDetails(); // Close the buy again modal first
            this.showReviewsModal = true;

        },
        closeReviewsModal() {
            this.showReviewsModal = false;
            this.openParcelDetails(this.selectedItem); // Open the buy again modal
        },
        openConfirmationModal() {
            this.closeParcelDetails(); // Close the buy again modal first

            this.showConfirmationReview = true;

        },

        closeConfirmationModal() {
            this.showConfirmationReview = false;
            this.reviewText = '';
            this.starRating = 0;
        },
        rate(star) {
            this.starRating = star;
        },
        submitReview() {
            console.log("Review Comment:", this.reviewText);
            console.log("Star Rating:", this.starRating);

            // Close the review modal first
            this.closeReviewsModal();

            // Open the confirmation modal after the review modal is closed
            this.openConfirmationModal();
        },


    },
};
</script>

<style scoped>
.hidden-scrollbar::-webkit-scrollbar {
    width: 2px;
    height: 25px;
    background-color: transparent;
}

.hidden-scrollbar::-webkit-scrollbar-thumb {
    background-color: transparent;
}
</style>
