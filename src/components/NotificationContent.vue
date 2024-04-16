<template>
    <div class="w-full  h-[full]  overflow-y-hidden ">
        <!-- Profile router -->
        <RouterLink to="/">
            <div class="flex absolute mt-12 top-5 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl  lg:mt-20 lg:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
                    stroke="currentColor" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p class="text-lg font-semibold p-3 pr-4 lg:text-3xl">
                    Notifications </p>
            </div>
        </RouterLink>

        <!-- Notification Tray -->
        <div class="flex justify-center w-full pt-40 bg-[#F2F2F2]">
            <div v-for="(item, index) in bookingItems" :key="index"
                class="rounded-2xl p-4 bg-white flex  hover:bg-blue-200 cursor-pointer">
                <svg width="22" height="25" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
                    <path
                        d="M17.22 14.62C17.22 15.47 16.53 16.16 15.68 16.16H2.32004C1.47004 16.16 0.780029 15.47 0.780029 14.62C0.780029 13.77 1.47004 13.08 2.32004 13.08H2.83002V7.94002C2.83002 4.54002 5.59003 1.77002 9.00003 1.77002C10.7 1.77002 12.24 2.46002 13.36 3.58002C14.48 4.69002 15.17 6.23002 15.17 7.94002V13.08H15.68C16.53 13.08 17.22 13.77 17.22 14.62Z"
                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 1.78V0.75" stroke="black" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M12.08 16.1699C12.08 17.8799 10.7 19.2499 9.00003 19.2499C7.30003 19.2499 5.92004 17.8699 5.92004 16.1699H12.08Z"
                        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-lg">{{ notification }}</span>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookingNotifications: [
                "Booking Confirmation",
                "Order Complete",
                "Order Complete",
                "Booking Complete",
                "Order Complete",
                "Booking Complete",
                "Booking Complete",
                "Booking Complete",
                "Booking Complete"
            ]
        };
    },
    methods: {
        openModal(notification) {
            if (notification === "Booking Confirmation") {
                // Code to open modal
                // You can use a modal library or create your own modal component
                // For example:
                alert("Modal will pop up for Booking Confirmation");
            }
        }
    }
};


</script>