<template>
    <div class="w-full h-full overflow-y-hidden lg:hidden">
        <!-- Notifications -->
        <RouterLink to="/">
            <div class="flex absolute mt-12 top-5 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl w-50  lg:mt-20 lg:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
                    stroke="currentColor" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p class="text-[#102E61] text-lg font-black p-3 pr-4 lg:text-3xl">
                    NOTIFICATION </p>
            </div>
        </RouterLink>


        <!-- Notification Tray -->
        <div class="w-full pt-40 bg-[#F2F2F2]">
            <div v-for="(notification, index) in bookingItems" :key="index"
                class="rectangle-2xl p-4 flex bg-white hover:bg-blue-600 cursor-pointer w-100 mb-4"
                @click="openModal(notification)">
                <!-- SVG Icon -->
                <svg data-v-c3ceb15a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 mr-2">
                    <path data-v-c3ceb15a="" fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                        clip-rule="evenodd"></path>
                </svg>
                <!-- Notification Content -->
                <span class="text-lg">{{ notification }}</span>
            </div>
        </div>

        <!-- Booking Confirmation Modal -->
        <div v-if="showBookingConfirmationModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-4 rounded-lg">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-semibold">Booking Confirmed</h2>
                    <button @click="closeBookingConfirmationModal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p>Thank you for booking with iBayad. .</p>
            </div>
        </div>


        <!-- Order Complete Modal -->
        <div v-if="showOrderCompleteModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-4 rounded-lg">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-semibold">Order Completed</h2>
                    <button @click="closeOrderCompleteModal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p>Thank you for booking with iBayad. .</p>
            </div>
        </div>




        <!-- Booking Complete Modal -->
        <div v-if="showBookingCompleteModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-4 rounded-lg">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-semibold">Booking Complete Modal</h2>
                    <button @click="closeBookingCompleteModal">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p>Thank you for booking with iBayad. .</p>
            </div>
        </div>







    </div>
</template>

<script>
export default {
    data() {
        return {
            bookingItems: [
                "Booking Confirmation",
                "Order Complete",
                "Order Complete",
                "Booking Complete",
                "Order Complete",
                "Booking Complete"
            ],
            showBookingConfirmationModal: false,
            showOrderCompleteModal: false,
            showBookingCompleteModal: false
            // Add more modal flags if needed for other types of notifications
        };
    },
    methods: {
        openModal(notification) {
            switch (notification) {
                case "Booking Confirmation":
                    this.showBookingConfirmationModal = true;
                    break;
                case "Order Complete":
                    this.showOrderCompleteModal = true;
                    break;
                case "Booking Complete":
                    this.showBookingCompleteModal = true;
                    break;
                // Add cases for other types of notifications if needed
            }
        },
        closeBookingConfirmationModal() {
            this.showBookingConfirmationModal = false;
        },
        closeOrderCompleteModal() {
            this.showOrderCompleteModal = false;
        },
        closeBookingCompleteModal() {
            this.showBookingCompleteModal = false;
        }
        // Add more methods for closing other modals if needed
    }
};
</script>
