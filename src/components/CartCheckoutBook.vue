<template>
    <!-- header -->
    <nav class="flex relative pt-[70px] md:pt-[100px] bg-[#102E61] pb-3 lg:pb-5 pl-8 md:pl-8 lg:pl-[9rem] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="mr- lg:mr-7 w-7 lg:w-8 h-7 lg:h-10 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
        </svg>
        <h1 class="font-bold text-2xl lg:text-3xl text-white ">Request to Book</h1>
    </nav>

    <!-- body -->
    <!-- <div class="flex flex-wrap justify-between items-center my-5 relative lg:mb-[10rem] "> -->
    <div class="justify-between items-center my-5 relative lg:mb-[10rem] ">
        
        <div class="relative lg:w-[75%] lg:top-[3rem] top-5">
            <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
                <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Trip</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <div class="flex lg:flex-col lg:items-start justify-between"> 
                        <p class="lg:mr-9 lg:mb-1 font-bold">Date of Tour</p>
                        <p class="font-normal mb-2 ">07/24/2023</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Time of Tour</p>
                        <p class="font-normal mb-2">1:00 PM - 3:00 PM</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Number of Person</p>
                        <p class="font-normal mb-2">3</p>
                    </div>

                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Services Included</p>
                        <p class="font-normal mb-2 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal"
                            style="text-overflow: ellipsis;">Service 1</p>
                    </div>
                </div>
            </div>

            <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
                <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                        <p class="font-normal mb-2 text-gray-600">John Doe</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                        <p class="font-normal mb-2 text-gray-600">juandelecruz@gmail.com</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                        <p class="font-normal mb-2 text-gray-600">09569103856</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Gender</p>
                        <p class="font-normal mb-2 text-gray-600">Male</p>
                    </div>
                    <div class="flex lg:flex-col lg:items-start justify-between">
                        <p class="lg:mr-9 lg:mb-1 font-bold">Citizen of Makati</p>
                        <p class="font-normal mb-2 text-gray-600">Yes</p>
                    </div>
                </div>
            </div>

            <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
                <!-- <p class="lg:mb-4 font-bold lg:text-3xl text-2xl">Your Information</p> -->
                <p class="font-bold lg:text-3xl text-2xl">Payment</p>
                <div class="border border-gray-200 py-5 pl-6">
                    <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad" class="mr-2"
                        checked>
                    <label for="payment_ibayad">Ibayad</label>
                </div>
            </div>
        </div>


        <div class="lg:block mb-[3rem] ">
            <div class="my-4 lg:w-[35%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem] ">
                
                <div class="border border-gray-400 rounded-xl p-5 m-8 lg:m-0">
                    <div class="lg:flex items-center mb-5">
                        <img src="@/assets/images/CategoryView/ToStay/book.png" class="lg:w-[50%] w-full rounded-lg">
                        
                        <div class="p-4 lg:flex flex-col">
                            <div>
                                <p class="font-bold">XYZ Hotel</p>
                            </div>
                            <div>
                                <p class="mb-2 lg:mb-8 text-gray-400">Hotel</p>
                            </div>
                            <div class="flex">
                                <p class="font-semibold text-sm mr-1">5.0 Ratings</p>
                                <p class="text-sm text-gray-400">(500 Review)</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-200 h-0.5 my-3"></div>

                   <div class="px-3">
                     <p class="lg:mr-9 lg:mt-2 font-bold lg:font-sans text-2xl lg:text-3xl">Your Total</p>

                    <div class="items-center mb-5">
                        <div class="flex justify-between mb-2 lg:w-[100%]">
                            <p class="w-[70%]">Deluxe Room
                            </p>
                            <p class="text-gray-400">₱ 7000.00</p>
                        </div>
                    </div>
                   </div>

                    <div class="bg-gray-200 h-0.5 my-3"></div>

                    <div class="px-3">
                        <div class="flex items-center my-7">
                        <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="w-8 h-8 mr-2">
                        <p class="font-poppins font-sans text-base text-blue-500 mr-4">Use Voucher</p>
                        <input type="text" id="" name="" value="" class="h-[50px] border border-gray-200 pl-5"
                            placeholder="Voucher Code">
                    </div>

                    <div class="flex justify-between">
                        <p class="font-poppins font-sans font-bold text-1xl">Your Total (Php)</p>
                        <p class="font-poppins font-sans text-base font-bold">₱ 7000.00</p>
                    </div>


                    <div class="flex justify-center mt-4">
                        <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5"
                            @click="toggleConfirmation">Proceed to Payment</button>
                    </div>
                    </div>

                    <!-- SHOW MODALS -->

                    <div v-if="showConfirmation"
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                        @click.self="closeModal">

                        <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                            <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                                <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                                <p class="font-bold text-2xl mb-6">Redirecting you...</p>
                                <p class="font-normal text-2xl mb-6">Your booking transaction is being
                                    processed. Please wait for the confirmation in your notification</p>

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

                                <router-link to="/category/shop"><button
                                        class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
                                        @click="closeModal">Okay</button></router-link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            showInformation: false,
            showConfirmation: false,
            showComplete: false,
        };
    },
    methods: {
        toggleInformation() {
            this.showInformation = true;
            this.showConfirmation = false;
        },
        toggleConfirmation() {
            this.showConfirmation = true;
            this.showInformation = false;

        },
        toggleComplete() {
            this.showComplete = !this.showComplete;
            this.showConfirmation = false;
        },
        closeModal() {
            this.showInformation = false;
            this.showConfirmation = false;
            this.showComplete = false;

        }
    },
};
</script>
