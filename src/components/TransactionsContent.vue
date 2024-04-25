<template>
  <div class="bg-[#102E61] w-full h-[700px] z-10">
    <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar">

        <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
            <div v-for="(item, index) in items" :key="index" class="flex justify-between mt-5 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] space-y-2">
                <div class="flex flex-row gap-[5rem]">
                    <img :src="item.imageSrc" :alt="item.alt" class="w-8 h-auto lg:w-[154px] lg:h-[154px]">
                    <div class="w-[25rem]">
                        <p class="mt-6 h-[2rem] mt-3 text-lg">{{ item.title }}</p>
                        <p class="mt-10 text-sm text-gray-500">{{ item.date }}</p> <!-- Display date here -->
                        <p class="mt-2 [5rem] text-xs text-gray-500">{{ item.status }}</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mr-5">
                    <p>{{ item.quantity }}x</p>
                    <p>₱ {{ item.price }}</p>
                    <button @click="openParcelDetails(item)" class="mt-[2.7rem] px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Buy Again</button>
                </div>
            </div>
        </div>

    </div>
</div>


    <!-- Buy Again Modal -->
    <div v-if="showParcelDetails"
        class="fixed inset-0 mt-[4.5rem] flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-7 bg-white w-[90%] lg:w-[855px] lg:h-[568px] rounded-lg">
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
                <p class="text-xs text-[#008EE4]">Parcel has been delivered</p>
            </div>

            <div class="mt-2 flex justify-between">
                <p class="text-xs text-[#606060]">STANDARD DELIVERY COURIER</p>
                <p class="text-xs text-[#606060]">11-08-2023 03:50 PM</p>
            </div>

            <div class="flex justify-between mt-[4.5rem] w-auto h-[154px] bg-[#E7EAEF] space-y-2">
                <div class="flex flex-row gap-[3rem]">
                    <img :src="selectedItem.imageSrc" :alt="selectedItem.alt"
                        class="w-8 h-auto lg:w-[154px] lg:h-[154px]">
                    <div class="w-[20rem]">
                        <p class=" h-[2rem] mt-3 text-lg ">{{ selectedItem.title }}</p>
                    </div>
                </div>
                <div class="flex flex-col  gap-[4.5rem] items-center mr-10">
                    <p class="mt-4 text-md">{{ selectedItem.quantity }}x</p>
                    <p class="text-md">₱ {{ selectedItem.price }}</p>
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
                    <p class="mt-1 text-md text-[#747474]">₱ {{ selectedItem.price }}</p>
                    <p class="mt-3 text-md text-[#747474]">₱ 2.00</p>
                    <p class="mt-3 text-md text-[#747474]">₱ 15.00</p>
                    <p class="mt-3 text-md">₱ {{ calculateTotalPrice() }}</p>

                </div>
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
            items: [
                {
                    imageSrc: shirt,
                    alt: "shirt",
                    title: "Never Stop Exploring Graphic Tee in Gray",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '299.00'
                },
                {
                    imageSrc: bag,
                    alt: "bag",
                    title: "Multi Handle Tote Bag with Embroidered Philippines Kalesa Scenery",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '299.00'
                },
                {
                    imageSrc: kalesa,
                    alt: "kalesa",
                    title: "Never Stop Exploring Graphic Tee in Gray",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '100.00'
                },
                {
                    imageSrc: shirt,
                    alt: "shirt",
                    title: "Never Stop Exploring Graphic Tee in Gray",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '299.00'
                },
                {
                    imageSrc: bag,
                    alt: "bag",
                    title: "Never Stop Exploring Graphic Tee in Gray",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '299.00'
                },
                {
                    imageSrc: kalesa,
                    alt: "kalesa",
                    title: "Never Stop Exploring Graphic Tee in Gray",
                    date: "11-08-2023 03:50 PM",
                    status: "Parcel has been delivered",
                    quantity: 1,
                    price: '100.00'
                },
            ],
            isMobile: window.innerWidth <= 768,// Adjust the breakpoint as needed
            showParcelDetails: false,
            selectedItem: null,// To store the selected item
            handlingFee: 2,
            shippingFee: 15
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
            window.location.reload();
        },
        calculateTotalPrice() {
            // Assuming you have the item price, handling fee, and shipping fee in your data
            const itemPrice = parseFloat(this.selectedItem.price);
            const handlingFee = 2.00; // Example handling fee
            const shippingFee = 15.00; // Example shipping fee

            // Calculate total price
            const totalPrice = itemPrice + handlingFee + shippingFee;

            return totalPrice.toFixed(2); // Return total price with 2 decimal places
        }
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
