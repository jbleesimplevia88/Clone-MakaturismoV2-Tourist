<template>
    <nav class="lg:px-[180px] lg:h-20 lg:mt-[80px] bg-[#132540] p-4 text-white text-4xl flex items-center cursor-pointer"
        @click="handleClick()">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
            class="lg:mr-7 w-7 lg:w-8 h-7 lg:h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
        </svg>
        Request to Book
    </nav>

    <div class="lg:px-[180px] lg:p-10 lg:relative">

        <div class="flex justify-between">
            <div class="lg:w-[60%]">

                <p class="lg:mb-4 lg:font-bold lg:text-3xl">Your Trip</p>


                <div class="">

                    <div class="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div>
                            <p class="lg:mr-9 lg:mb-1 lg:font-bold">Date of Tour</p>
                            <p class="font-normal mb-2 text-gray-400">07/24/2023</p>


                        </div>
                        <div>
                            <p class="lg:mr-9 lg:mb-1 lg:font-bold">Time of Tour</p>
                            <p class="font-normal mb-2 text-gray-400">1:00 PM - 3:00 PM</p>
                        </div>
                        <div>
                            <p class="lg:mr-9 lg:mb-1 lg:font-bold">Number of Person</p>
                            <p class="font-normal mb-2 text-gray-400">3</p>
                        </div>





                        <div>
                            <p class="lg:mr-9 lg:mb-1 lg:font-bold">Services Included</p>
                            <p class="font-normal mb-2 text-gray-400 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal"
                                style="text-overflow: ellipsis;">Service 1</p>



                        </div>





                    </div>



                </div>




                <div class="mt-5 bg-gray-200 h-0.5"></div>


                <div class="flex flex-col pt-6">

                    <div>

                        <p class="lg:mb-4 lg:font-bold lg:text-3m">Your Information</p>


                        <div class="">

                            <div class="lg:grid lg:grid-cols-2 lg:gap-4">
                                <div>
                                    <p class="lg:mr-9 lg:mb-1 lg:font-bold">Full Name</p>
                                    <p class="font-normal mb-2 text-gray-400">John Doe</p>
                                </div>
                                <div>
                                    <p class="lg:mr-9 lg:mb-1 lg:font-bold">E-mail Address</p>
                                    <p class="font-normal mb-2 text-gray-400">juandelecruz@gmail.com</p>
                                </div>
                                <div>
                                    <p class="lg:mr-9 lg:mb-1 lg:font-bold">Phone Number</p>
                                    <p class="font-normal mb-2 text-gray-400">09569103856</p>
                                </div>
                                <div>
                                    <p class="lg:mr-9 lg:mb-1 lg:font-bold">Gender</p>
                                    <p class="font-normal mb-2 text-gray-400">Male</p>
                                </div>
                                <div>
                                    <p class="lg:mr-9 lg:mb-1 lg:font-bold">Citizen of Makati</p>
                                    <p class="font-normal mb-2 text-gray-400">Yes</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="">
                        <p class="lg:font-bold lg:text-3xl lg:mb-4">Payment</p>


                        <div class="border border-gray-200 py-5 pl-6">

                            <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad" class="mr-2"
                                checked>
                            <label for="payment_ibayad">Ibayad</label>



                        </div>
                    </div>

                </div>
            </div>

            <div class="relative flex lg:h-[20%] lg:w-[30%]">

                <div class="border border-gray-200 mr-5 rounded-xl p-5">
                    <div class="flex items-center mb-5">
                        <img src="@/assets/images/CategoryView/ToStay/book.png" class="w-[50%] rounded-lg">
                        <div class="ml-1 flex flex-col">
                            <div>
                                <p class="font-bold">XYZ Hotel</p>
                            </div>
                            <div>
                                <p class="mb-8 text-gray-400">Hotel</p>
                            </div>
                            <div class="flex">
                                <p class="font-semibold text-sm mr-1">5.0 Ratings</p>
                                <p class="text-sm text-gray-400">(500 Review)</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-200 h-0.5"></div>


                    <p class="lg:mr-9 lg:mt-2 lg:font-bold lg:font-sans  lg:text-3xl">Your Total</p>

                    <div class="items-center mb-5">
                        <div class="flex justify-between mb-2 lg:w-[100%]">
                            <p class="w-[70%]">Deluxe Room
                            </p>
                            <p class="text-gray-400">₱ 7000.00</p>
                        </div>



                    </div>

                    <div class="bg-gray-200 h-0.5 w-[100%]"></div>



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

                    <div v-if="showInformation"
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                        @click.self="closeModal">
                        <div class="bg-white rounded-lg shadow-md lg:max-w-2xl p-[20px]" @click.stop>
                            <div class="lg:w-[100%] p-4 rounded-lg">
                                <p class="font-bold text-2xl mb-18">Confirm Purchase Information</p>

                                <div class="mb-5">
                                    <p class="font-bold text-2xl my-5">Details</p>
                                    <p class="w-[100%]">
                                        <span class="font-bold">Address:</span>
                                        <span class="text-base">Meralco Avenue UnionBank Plaza Bldg, corner, Onyx
                                            St, Pasig, 1605</span>
                                    </p>


                                    <div>

                                        <span class="font-bold">Address Details:</span>
                                        <span class="text-base "> N/A</span>
                                    </div>
                                    <div>
                                        <span class="font-bold">Note to Driver:</span>
                                        <span class="text-base "> N/A</span>

                                    </div>
                                    <div>
                                        <span class="font-bold">Name:</span>
                                        <span class="text-base ">Rolen Valenzuela</span>

                                    </div>
                                    <div>
                                        <span class="font-bold">Email:</span>
                                        <span class="text-base "> Rolenvalenzuela@gmail.com</span>
                                    </div>
                                    <div>
                                        <span class="font-bold">Contact:</span>
                                        <span class="text-base "> +63923684015</span>
                                    </div>

                                    <div>
                                        <span class="font-bold">Payment Method:</span>
                                        <span class="text-base "> Ibayad</span>
                                    </div>



                                    <div class="flex items-center my-[30px]">
                                        <img src="@/assets/images/CategoryView/ToShop/shop1.png"
                                            class="w-[50%] rounded-lg">
                                        <div class="ml-1 flex flex-col">

                                            <div>
                                                <p class="font-bold">Makati Shop</p>
                                            </div>
                                            <div>
                                                <p class="mb-8 text-gray-400">Shop</p>
                                            </div>
                                            <div class="flex">
                                                <p class="font-semibold text-sm mr-1">5.0 Ratings</p>
                                                <p class="text-sm text-gray-400">(500 Review)</p>
                                            </div>


                                        </div>







                                    </div>

                                </div>

                                <button
                                    class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]"
                                    @click="toggleConfirmation">Confirm</button>
                            </div>




                        </div>
                    </div>

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
<style scoped></style>

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
