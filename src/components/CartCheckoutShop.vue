<template>
    <nav class="lg:px-[180px] lg:pt-[30px] pt-[70px] lg:h-20 lg:mt-[80px] bg-[#132540] p-4 text-white text-4xl flex items-center cursor-pointer"
        @click="handleClick()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
            class="lg:mr-7 w-7 lg:w-8 h-7 lg:h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
        </svg> Request to Book
    </nav>
    <div class="lg:px-[180px] p-10 relative">
        <div class="flex justify-between ">
            <div class="lg:w-[60%]">
                <p class="mb-4 font-bold text-3xl">Your Order</p>
                <p class="mb-4 font-bold text-3m">Number Of Items</p>
                <p class="mb-4 font-bold text-3m">9</p>
                <div class="w-[100%]">
                    <div class="flex justify-between">
                        <p class="text-sm w-[50%]">List of items</p>
                        <p class="">Quantity</p>
                        <p class="">Cost</p>
                        <p class="">Total</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-xs w-[50%]">Multi Handle Tote Bag with Embroidered Philippines Kalesa Scenery</p>
                        <p class="w-[10%] flex justify-center">1</p>
                        <p class="">399</p>
                        <p class="">399</p>
                    </div>
                    <div class="flex justify-between ">
                        <p class="text-xs w-[50%]">Multi Handle Tote Bag with Embroidered Philippine Jeepney Kalesa Scenery
                        </p>
                        <p class="w-[10%] flex justify-center">3</p>
                        <p class="">399</p>
                        <p class="">1197</p>
                    </div>
                    <div class="flex justify-between ">
                        <p class="text-xs w-[50%]">Beat the Heat Graphic Tee in Blush Kalesa Scenery</p>
                        <p class="w-[10%] flex justify-center">1</p>
                        <p class="">249</p>
                        <p class="">249</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-xs w-[50%]">Never Stop Exploring Graphic Tee in Gray
                        </p>
                        <p class="w-[10%] flex justify-center">2</p>
                        <p class="">299</p>
                        <p class="">598</p>
                    </div>
                    <div class="flex justify-between ">
                        <p class="text-xs w-[50%]">Ethnic Stripes Book Tote Bag Kalesa Scenery</p>
                        <p class="w-[10%] flex justify-center">2</p>
                        <p class="">700</p>
                        <p class="">1400</p>
                    </div>
                </div>
                <div class="mt-5 bg-gray-200 h-0.5"></div>
                <div class="flex flex-col mt-3 pt-6">
                    <div>
                        <p class="mb-4 font-bold text-3xl">Your Information</p>
                        <div class="">
                            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                <div>
                                    <span class="lg:mr-9 mb-1 font-bold">Full Name <strong
                                            class="font-normal ml-16 mb-2 text-gray-400 lg:hidden">John Doe</strong></span>
                                    <p class="font-normal mb-2 text-gray-400 hidden lg:block">John Doe</p>
                                </div>
                                <div>
                                    <span class="lg:mr-9 mb-1 font-bold">Email Address <strong
                                            class="font-normal ml-8 mb-2 text-gray-400 lg:hidden">juandelecruz@gmail.com</strong></span>
                                    <p class="font-normal mb-2 text-gray-400 hidden lg:block">juandelecruz@gmail.com</p>
                                </div>
                                <div>
                                    <span class="lg:mr-9 mb-1 font-bold">Phone number <strong
                                            class="font-normal ml-7 mb-2 text-gray-400 lg:hidden">09569103856</strong></span>
                                    <p class="font-normal mb-2 text-gray-400 hidden lg:block">09569103856</p>
                                </div>
                                <div>
                                    <span class="lg:mr-9 mb-1 font-bold">Gender <strong
                                            class="font-normal ml-20 mb-2 text-gray-400 lg:hidden">Male</strong></span>
                                    <p class="font-normal mb-2 text-gray-400 hidden lg:block">Male</p>
                                </div>
                                <div>
                                    <span class="lg:mr-9 mb-1 font-bold">Citizen of Makati <strong
                                            class="font-normal ml-2 mb-2 text-gray-400 lg:hidden">Yes</strong></span>
                                    <p class="font-normal mb-2 text-gray-400 hidden lg:block">Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <p class="font-bold text-3xl mb-4">Payment</p>
                        <div class="border border-gray-200 py-5 pl-6">
                            <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad" class="mr-2"
                                checked>
                            <label for="payment_ibayad">Ibayad</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-3 lg:hidden">
                    <div class="border border-gray-200 rounded-xl p-5">
                        <div class="flex items-center mt-2 mb-5">
                            <img src="@/assets/images/CategoryView/ToShop/kultura.png" class="w-[400%]  rounded-lg">
                        </div>
                        <div class="p-1 lg:flex flex-col">
                            <div>
                                <p class="font-bold">Kultura</p>
                            </div>
                            <div>
                                <p class="mb-2 lg:mb-8 text-gray-400">Shop</p>
                            </div>
                            <div class="flex">
                                <p class="font-semibold text-sm mr-1">5.0 Ratings</p>
                                <p class="text-sm text-gray-400">(500 Review)</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 h-0.5"></div>
                        <p class="mr-9 mt-2 font-bold font-sans  text-3xl">Your Total</p>
                        <div class="items-center mb-5">
                            <div class="flex justify-between mb-2 w-[100%]">
                                <p class="w-[70%]">Multi handed Tote Bag with embroidered Philippines Kalesa Scenery
                                </p>
                                <p class="text-gray-400">₱ 399.00</p>
                            </div>
                            <div class="flex justify-between mb-2 w-[100%]">
                                <p class="w-[70%]">Multi Handle Tote Bag With Embroidered Jeepney
                                </p>
                                <p class="text-gray-400">₱1197.00</p>
                            </div>
                            <div class="flex justify-between mb-2 w-[100%]">
                                <p class="w-[70%]">Beat the Heat Graphic Tee in Blush
                                </p>
                                <p class="text-gray-400">₱249.00</p>
                            </div>
                            <div class="flex justify-between mb-2 w-[100%]">
                                <p class="w-[70%]">Never Stop Exploring Graphic Tee in Gray
                                </p>
                                <p class="text-gray-400">₱598.00</p>
                            </div>
                            <div class="flex justify-between mb-2 w-[100%]">
                                <p class="w-[70%]">Ethnic Stripes Book Tote Bag
                                </p>
                                <p class="text-gray-400">₱1400.00</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 h-0.5 w-[100%]"></div>
                        <div class="flex items-center my-7 mr-6 mt-2">
                            <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 w-[40%] h-8 mr-2">
                            <p class="font-poppins font-sans text-base text-blue-500 mr-4">Use Voucher</p>
                            <input type="text" id="" name="" value="" class="h-[50px] border border-gray-200 pl-5"
                                placeholder="Voucher Code">
                        </div>
                        <div class="flex justify-between mt-6 mb-2">
                            <p class="font-poppins font-sans font-bold text-1xl">Your Total (Php)</p>
                            <p class="font-poppins font-sans text-base font-bold">₱ 3,843.00</p>
                        </div>
                        <div class="flex justify-center mt-0 ">
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
                                    <p class="font-normal text-2xl mb-6">Your booking transaction is being processed. Please
                                        wait for the confirmation in your notification</p>
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
            <div class=" flex-col hidden lg:h-[20%] lg:w-[30%] lg:block">
                <div class="border border-gray-200 mr-5 rounded-xl p-5">
                    <div class="flex items-center mb-5">
                        <img src="@/assets/images/CategoryView/ToShop/shop1.png" class="w-[50%] rounded-lg">
                        <div class="ml-1 flex flex-col">
                            <div>
                                <p class="font-bold">Little Toyo</p>
                            </div>
                            <div>
                                <p class="mb-5 mt-2 text-gray-400">Restaurant</p>
                            </div>
                            <div class="flex">
                                <p class="font-semibold text-sm  mt-0">5.0 Ratings</p>
                                <p class="text-sm text-gray-400">(500 Review)</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-200 h-0.5"></div>
                    <p class="mr-9 mt-2 font-bold font-sans  text-3xl">Your Total</p>
                    <div class="items-center mb-5">
                        <div class="flex justify-between mb-2 w-[100%]">
                            <p class="w-[70%]">Multi handed Tote Bag with embroidered Philippines Kalesa Scenery
                            </p>
                            <p class="text-gray-400">₱ 399.00</p>
                        </div>
                        <div class="flex justify-between mb-2 w-[100%]">
                            <p class="w-[70%]">Multi Handle Tote Bag With Embroidered Jeepney
                            </p>
                            <p class="text-gray-400">₱1197.00</p>
                        </div>
                        <div class="flex justify-between mb-2 w-[100%]">
                            <p class="w-[70%]">Beat the Heat Graphic Tee in Blush
                            </p>
                            <p class="text-gray-400">₱249.00</p>
                        </div>
                        <div class="flex justify-between mb-2 w-[100%]">
                            <p class="w-[70%]">Never Stop Exploring Graphic Tee in Gray
                            </p>
                            <p class="text-gray-400">₱598.00</p>
                        </div>
                        <div class="flex justify-between mb-2 w-[100%]">
                            <p class="w-[70%]">Ethnic Stripes Book Tote Bag
                            </p>
                            <p class="text-gray-400">₱1400.00</p>
                        </div>
                    </div>
                    <div class="bg-gray-200 h-0.5 w-[100%]"></div>
                    <div class="flex items-center my-7">
                        <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 lg:h-8 lg:mr-2 ">
                        <p class="font-poppins font-sans text-base text-blue-500 mr-4">Use Voucher</p>
                        <input type="text" id="" name="" value="" class="h-[50px] border border-gray-200 pl-5"
                            placeholder="Voucher Code">
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-sans font-bold text-1xl">Your Total (Php)</p>
                        <p class="font-poppins font-sans text-base font-bold">₱ 3,843.00</p>
                    </div>
                    <div class=" block  justify-center mt-4">
                        <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5" @click="toggleConfirmation">Proceed
                            to Payment</button>
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
                                        <img src="@/assets/images/CategoryView/ToShop/shop1.png" class="w-[50%] rounded-lg">
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
                                <button class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]"
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
                                <p class="font-normal text-2xl mb-6">Your booking transaction is being processed. Please
                                    wait for the confirmation in your notification</p>
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
    </div></template>
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
