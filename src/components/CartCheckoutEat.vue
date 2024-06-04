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
                        <!-- Orders of User -->
                        <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
                            <p class="mb-4 text-2xl font-bold">Your Order</p>
                            <p class="mb-4 font-bold text-3m">Number Of Items</p>
                            <p class="mb-4 font-bold text-3m">{{ totalItemsInCart }}</p>
                            <div class="w-[100%]">
                                <div class="flex justify-between">
                                    <p class="font-bold w-[50%] mb-5">List of items</p>
                                    <p class="w-[19%] flex justify-center mb-4 font-bold ">Quantity</p>
                                    <p class="w-[12%] flex justify-center mb-4 font-bold ">Cost</p>
                                    <p class="w-[12%] flex justify-center mb-4 font-bold ">Total</p>
                                </div>
                                <div class="mb-5  overflow-y-scroll h-28 lg:h-full lg:overflow-hidden">
                                    <div v-if="!selectedItems || selectedItems.length === 0"
                                        class="text-center text-gray-500">
                                        Cart is empty
                                    </div>
                                    <div v-else>
                                        <div v-for="(cartItem, index) in selectedItems" :key="index"
                                            class="flex justify-between mb-3">

                                            <div class="w-[50%]">{{ cartItem.title }}</div>
                                            <div class="w-[19%] flex justify-center">{{ cartItem.quantity }}</div>
                                            <div class="w-[12%] flex justify-center">{{ cartItem.price }}</div>
                                            <div class="w-[10%] flex justify-center">₱ {{ calculateTotalPrice(cartItem) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Information of user -->
                        <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px] lg:mb-44">
                            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
                            <div 
                                class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                                    <p class="font-normal mb-3 text-gray-600">{{ model.userInfo.firstname }} {{ model.userInfo.lastname }}</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start">
                                    <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold ">E-mail Address</p>
                                    <p class="font-normal mb-2 text-base text-gray-600">{{ model.userInfo.email }} 
                                    </p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                                    <p class="font-normal mb-10 text-gray-600">{{ model.userInfo.contact }}</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Address<spam class="text-red-500">*</spam></p>
                                    <input  v-model="address" class="font-normal mb-10 w-full text-gray-600 border p-2"/>
                                </div>
                                
                            </div>
                            <div class="hidden lg:block">
                                <p class="font-bold text-3xl mb-4">Payment</p>
                                <div class="flex border rounded p-8 h-24"
                                    :class="{ 'bg-blue-100': selectedPaymentMethod === 'ibayad' }">
                                    <div class="flex items-center pr-3">
                                        <input id="payment_ibayad" aria-describedby="helper-radio-text" type="radio"
                                            value="ibayad" @click="toggleIbayad"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            v-model="selectedPaymentMethod">
                                    </div>
                                    <div class="ms-2 text-sm">
                                        <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">
                                            Ibayad</label>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <!-- FOR MOBILE -->
                    <div class=" ml-4 bg-gray-400 h-0.5"></div>
                    <div class="ml-4 lg:hidden p-5 ">
                        <p class=" text-2xl font-bold pt-3">Your Information</p>
                        <div  className="grid grid-cols-2 grid-rows-3 pt-5 "
                            style="word-wrap: break-word;">
                            <div>
                                <p class="text-base font-bold">Full Name</p>
                            </div>
                            <div>
                                <p class="font-normal mb-3  text-gray-600 text-base">{{ model.userInfo.firstname }} {{ model.userInfo.lastname }}</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">E-mail Address</p>
                            </div>
                            <div>
                                <p class="font-normal mb-3 text-base text-gray-600 whitespace-nowrap">{{ model.userInfo.email }}</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">Phone Number</p>
                            </div>
                            <div>
                                <p class="font-normal mb-3 text-gray-600 text-base">{{ model.userInfo.contact }}</p>
                            </div>
                        
                            <div>
                                <p class=" text-base font-bold">Address<span class="text-red-500">*</span></p>
                            </div>
                            <div>
                                <input v-model="address" class="font-normal mb-3 text-gray-600 text-base" />
                            </div>
                          
                    </div>
                    </div>
                </div>
                <!-- Start of Central Business District Tour -->
                <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[13rem] w-screen">
                    <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%] h-fit">
                        <!-- summary -->
                        <div v-if="showSummary">
                            <div v-for="(shop, index) in shops" :key="index">
                                <div class="lg:flex items-center mb-5">
                                    <img :src="getImageUrl(firstImageUrl)" class="w-[100%] lg:w-[40%] h-[6rem] rounded-lg">
                                    <div class="ml-1 flex flex-col">
                                        <div>
                                            <p class="font-bold">{{ shopData.storename }}</p>
                                        </div>
                                        <div>
                                            <p class="mb-5 mt-2 text-gray-400">{{ shopData.category }}</p>
                                        </div>
                                        <div class="flex">
                                            <p class="font-semibold text-sm mt-0">{{ shop.rating }} Ratings</p>
                                            <p class="text-sm text-gray-400">({{ shop.reviews }} Review)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-400 h-0.5"></div>
                                <p class="lg:mr-9 lg:mt-2 lg:font-sans lg:text-3xl font-bold text-lg pt-4 mb-5">Your
                                    Total
                                </p>
                                <div class="items-center ml-3 mb-5">
                                    <div v-for="(cartItem, index) in selectedItems" :key="index"
                                        class="flex justify-between mb-2 w-[100%]">
                                        <p class="w-[70%]">{{ cartItem.title }}</p>
                                        <p class="text-gray-400">₱ {{ calculateTotalPrice(cartItem) }}</p>
                                    </div>
                                    <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">
                                        Price Breakdown
                                    </p>
                                </div>
                                <div class="bg-gray-400 h-0.5 w-[100%]"></div>
                                <div class="flex items-center my-7  ">
                                    <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 h-8 mr-2">
                                    <button
                                        class="hidden lg:block text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                                        @click="toggleVoucherWeb">Use Voucher</button>
                                    <button
                                        class="lg:hidden text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                                        @click="toggleVoucher">Use Voucher</button>
                                </div>
                                <div class="flex justify-between">
                                    <p class="font-poppins font-sans font-bold text-lg pt-4">Delivery Fee:</p>
                                    <p class="font-poppins font-sans text-base font-bold pt-4">₱ {{ cartStore.deliveryFee }}
                                    </p>
                                </div>
                                <div class="flex justify-between">
                                    <!-- Change "Your Total (Php)" to "Subtotal" if a voucher is applied -->
                                    <p class="font-poppins font-sans font-bold text-lg pt-4">{{ displayTotalLabel }}</p>
                                    <p class="font-poppins font-sans text-base font-bold pt-4">₱ {{ subTotal }}</p>
                                </div>
                                <!-- If the discountPrice has a value, show this line -->
                                <div v-if="discountPrice !== 0" class="flex justify-between text-[#9bbf2f]">
                                    <p class="font-poppins font-sans font-bold text-lg pt-4">Special Discount:</p>
                                    <p class="font-poppins font-sans text-base font-bold pt-4">- ₱ {{ discountPrice }}
                                    </p>
                                </div>
                                <div class="bg-gray-400 h-0.5 mt-2"></div>
                                <!-- Compute the final price -->
                                <div class="flex justify-between ">
                                    <p class="font-poppins font-sans font-bold text-lg pt-4">Total (in PHP):</p>
                                    <p class="font-poppins font-sans text-xl font-bold pt-4">₱ {{ finalPrice }}</p>
                                </div>
                                <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">
                                    Price
                                    Breakdown
                                </p>
                                <!-- For Mobile -->
                                <div class="flex justify-center lg:hidden pt-6">
                                    <button v-if="showPayment"
                                        class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                        @click="togglePayment">Place Payment</button>
                                </div>
                                <!-- For Web -->
                                <div class="justify-center lg:block hidden pt-6">
                                    <button
                                        class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                        @click="toggleConfirmation ">Proceed to Payment</button>
                                </div>
                                <div v-if="showConfirmation"
                                    class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                                    @click.self="closeModal">
                                    <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                                        <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                                            <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                                            <p class="font-bold text-2xl mb-6">Redirecting you...</p>
                                            <p class="font-normal text-2xl mb-6">Your booking transaction is being
                                                processed.
                                                Please wait for the confirmation in your notification</p>
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
                        <div v-else>
                            <div class="lg:w-[100%]  rounded-lg">
                                <!-- Voucher section -->
                                <!-- <button class="text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold" @click="toggleBack">Back</button> -->
                                <svg @click="toggleBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="3" stroke="black" class="lg:mr-5 lg:w-5 lg:h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
                                    </path>
                                </svg>
                                <div class="flex flex-col items-center">
                                    <input type="text" id="" name="" value=""
                                        class="mb-2 h-[50px] w-[100%] border border-gray-200 pl-5 pr-3 rounded-md"
                                        placeholder="Enter Voucher Code">
                                    <button
                                        class="mb-2 text-white bg-blue-500 rounded-xl w-full lg:w-full py-2 lg:py-3 px-4 lg:px-6 text-base lg:text-lg font-semibold"
                                        @click="toggleVoucherWeb">Apply</button>
                                    <div>
                                        <div data-v-392f50c8="" class="mt-0 bg-gray-400 h-0.5"></div>
                                    </div>
                                    <p class="mt-4 font-bold text-left">Select a Voucher</p>
                                    <div v-for="(voucher, index) in validVouchers" :key="index">
                                        <div class="absolute grid grid-rows-3 text-left ml-14 mt-1">
                                            <span class="font-semibold">{{ voucher.code }}</span>
                                            <span class="font-bold">P{{ voucher.amount }}</span>
                                            <button type="submit" class="text-sm font-bold ml-52 cursor-pointer"
                                                @click="toggleVoucherWeb(voucher)">
                                                {{ voucher.applied ? 'Remove' : 'Apply' }}
                                            </button>
                                        </div>
                                        <img src="@/assets/images/CategoryView/ToEat/voucher.png" class="mb-6">
                                    </div>
                                    <div>
                                        <div data-v-392f50c8="" class="mt-5 mb-3 bg-gray-400 h-0.5"></div>
                                    </div>
                                    <p class="font-bold text-left">Not valid for this order</p>
                                    <div v-for="voucher in invalidVouchers" :key="voucher.code">
                                        <div class="absolute grid grid-rows-3 text-left ml-14 mt-1">
                                            <span class="font-semibold">{{ voucher.code }}</span>
                                            <span class="font-bold">P{{ voucher.amount }}</span>
                                            <button type="submit" class="text-sm font-bold ml-52 cursor-pointer" disabled>
                                                Apply
                                            </button>
                                        </div>
                                        <img src="@/assets/images/CategoryView/ToEat/voucher.png" class="mb-6">
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
                            <p class="font-bold text-3xl mb-4">Payment</p>
                            <div class="flex border rounded p-8 h-24"
                                :class="{ 'bg-blue-100': selectedPaymentMethod === 'ibayad' }">
                                <div class="flex items-center pr-3">
                                    <input id="payment_ibayad" aria-describedby="helper-radio-text" type="radio"
                                        value="ibayad" @click="toggleIbayad"
                                        class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        v-model="selectedPaymentMethod">
                                </div>
                                <div class="ms-2 text-sm">
                                    <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">
                                        Ibayad</label>
                                </div>
                            </div>


                        </div>
                        <div class="justify-center pt-3">
                            <button class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
                                @click="toggleConfirmation">Confirm Booking</button>
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

    <!-- Monile | Proceed to payment -->
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
                            <input id="gcash" aria-describedby="helper-radio-text" type="radio" value="gcash"
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
                            <input id="payment_ibayad" name="payment_method" value="ibayad"
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
                <div class="justify-center pt-1">
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


    <template v-else>
        <div class="lg:w-[100%] p-4 rounded-lg text-center flexflex-col items-center pt-20">
            <!-- Voucher section -->
            <div class="flex flex-col items-center">
                <input type="text" id="" name="" value=""
                    class="mb-2 h-[50px] w-[100%] border border-gray-200 pl-5 pr-3 rounded-md"
                    placeholder="Enter Voucher Code">
                <button
                    class="mb-2 text-white bg-blue-500 rounded-xl w-full lg:w-full py-2 lg:py-3 px-4 lg:px-6 text-base lg:text-lg font-semibold"
                    @click="toggleVoucher">Apply</button>
                <div>
                    <div data-v-392f50c8="" class="mt-0 bg-gray-400 h-0.5"></div>
                </div>
                <p class="mt-4 font-bold text-left">Select a Voucher</p>
                <div v-for="(voucher, index) in validVouchers" :key="index">
                    <div class="absolute grid grid-rows-3 text-left ml-14 mt-1">
                        <span class="font-semibold">{{ voucher.code }}</span>
                        <span class="font-bold">P{{ voucher.amount }}</span>
                        <button type="submit" class="text-sm font-bold ml-52 cursor-pointer"
                            @click="toggleVoucher(voucher)">
                            {{ voucher.applied ? 'Remove' : 'Apply' }}
                        </button>
                    </div>
                    <img src="@/assets/images/CategoryView/ToEat/voucher.png" class="mb-6">
                </div>
                <div>
                    <div data-v-392f50c8="" class="mt-5 mb-3 bg-gray-400 h-0.5"></div>
                </div>
                <p class="font-bold text-left">Not valid for this order</p>
                <div v-for="voucher in invalidVouchers" :key="voucher.code">
                    <div class="absolute grid grid-rows-3 text-left ml-14 mt-1">
                        <span class="font-semibold">{{ voucher.code }}</span>
                        <span class="font-bold">P{{ voucher.amount }}</span>
                        <button type="submit" class="text-sm font-bold ml-52 cursor-pointer" disabled>
                            Apply
                        </button>
                    </div>
                    <img src="@/assets/images/CategoryView/ToEat/voucher.png" class="mb-6">
                </div>
            </div>
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
import { computed, ref, watch, reactive, onBeforeMount} from 'vue';
import { useCartStoreEat } from '@/stores/toEatCart';
import { useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import axios from 'axios';

const cartStore = useCartStoreEat();
const router = useRouter();
const profileStore = useProfileStore();
const userInfo = ref([]);
const selectedPaymentMethod = ref(null);
const showComplete = ref(false);
const showSummary = ref(true);
const shops = ref([{}]);
const address = ref('');
const voucher = ref({ applied: false });
const showConfirmation = ref(false);
const showPayment = ref(true);
const showVoucher = ref(false);
const navButtonText = ref('Request to Order');

const model = reactive({
    userInfo: []
});

const user = (async() => {
    const response = await axios.post('/userDetails');
    model.userInfo = JSON.parse(response.data.userdetails);

});

const selectedItems = computed(() => {
  if (cartStore.buyNowProducts.length > 0) {
    return cartStore.buyNowProducts;
  } else if (cartStore.editCartProducts.length > 0) {
    return cartStore.editCartProducts;
  }
  return cartStore.cart;
});

const calculateTotalPrice = (cartItem) => {
    const quantity = parseInt(cartItem.quantity, 10); // Ensure quantity is a valid number
    const price = parseFloat(cartItem.price); // Ensure price is a valid number
    return (quantity * price).toFixed(2); // Return the total price with 2 decimal places
};

const subTotal = computed(() => {
    if (!selectedItems.value) return 0;
    const itemsTotal = selectedItems.value.reduce((total, item) => {
        const totalPrice = calculateTotalPrice(item);
        return total + parseFloat(totalPrice);
    }, 0);
    return (itemsTotal + cartStore.deliveryFee).toFixed(2);
});

const finalPrice = computed(() => {
    return (parseFloat(subTotal.value) - discountPrice.value).toFixed(2);
});

const totalAmount = computed(() => {
    return selectedItems.value.reduce((total, item) => total + (item.quantity * item.price), 0);
});

const displayTotalLabel = computed(() => discountPrice.value > 0 ? 'Subtotal' : 'Your Total (Php)');

const discountPrice = computed(() => {
    return cartStore.vouchers.reduce((total, voucher) => {
        return voucher.applied ? total + voucher.amount : total;
    }, 0);
});



const shopData = computed(() => cartStore.shopData);

const fetchUserInfo = async () => {
    const response = await profileStore.users();
    if (response.status && response.data) {
        userInfo.value = [response.data];
        address.value = response.data.address || ''; // Initialize address
    }
};


fetchUserInfo();

const getFirstImageUrl = (pictureimage) => {
    if (!pictureimage) return '';
    const images = pictureimage.split('|').filter(img => img.trim() !== '');
    return images.length > 0 ? images[0] : '';
};

const firstImageUrl = computed(() => getFirstImageUrl(shopData.value.pictureimage));

const getImageUrl = (fileName) => {
    return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};


const validVouchers = computed(() => {
    return cartStore.vouchers.filter(voucher => voucher.amount < totalAmount.value);
});

const invalidVouchers = computed(() => {
    return cartStore.vouchers.filter(voucher => voucher.amount >= totalAmount.value);
});

function toggleVoucher(voucher) {
    toggleVoucherVisibility();
    toggleVoucherApplied(voucher);
    updateDiscountPrice();
}

function toggleVoucherWeb(voucher) {
    toggleSummaryVisibility();
    toggleVoucherApplied(voucher);
    updateDiscountPrice();
}

function toggleBack() {
    showSummary.value = true;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function isPaymentMethodSelected(paymentMethod) {
    return selectedPaymentMethod.value === paymentMethod;
}

const toggleComplete = () => {
    console.log("toggleComplete() method called.");
    if (!selectedPaymentMethod) {
        alert("Please select a payment method before confirming booking.");
        return;
    }
    showConfirmation = false;
    showComplete = !showComplete;
};

function closeModal() {
    showConfirmation.value = false;
    showComplete.value = false;
}

function togglePayment() {
    showPayment.value = !showPayment.value;
    navButtonText.value = showPayment.value ? 'Request to Order' : 'Payment';
}

function navigateBack() {
    if (!showPayment.value) {
        showPayment.value = true;
        navButtonText.value = 'Request to Order';
    } else {
        router.go(-1);
    }
}

function activateRadioButton(id) {
    const radioBtn = document.getElementById(id);
    if (radioBtn) {
        radioBtn.checked = !radioBtn.checked;
        updatePaymentMethod();
    }
}

function updateDiscountPrice() {
    cartStore.updatePrices(subTotal.value, finalPrice.value);
}


function toggleVoucherVisibility() {
    showVoucher.value = !showVoucher.value;
}

function toggleSummaryVisibility() {
    showSummary.value = !showSummary.value;
}

function toggleVoucherApplied(voucher) {
    voucher.applied = !voucher.applied;
}

function updatePaymentMethod() {
    const selectedRadio = document.querySelector('input[name="payment_method"]:checked');
    selectedPaymentMethod.value = selectedRadio ? selectedRadio.value : null;
}

const totalItemsInCart = computed(() => cartStore.totalItemsInCart);

const toggleConfirmation = async () => {
    const products = selectedItems.value.map(selectedItems => ({
        productId: selectedItems.productid,
        busid: selectedItems.busid,
        productName: selectedItems.title,
        price: selectedItems.price,
        quantity: selectedItems.quantity,
        total: selectedItems.price * selectedItems.quantity
    }));
    const businessId = selectedItems.value[0];

    await axios.post('/transactShop', {

        busid: businessId.busid,
        touristId: model.userInfo.id,
        address: address.value,
        paymenMethod: selectedPaymentMethod.value,
        voucher: 'sample',
        deliveryFee: 50,
        subtotal: subTotal.value,
        finalTotal: finalPrice.value,
        products: products,

    }).then(res => {
        console.log('succes');
    }).catch(error => {
        console.log(error);
    });

};

watch([subTotal, finalPrice], () => {
    cartStore.updatePrices(subTotal.value, finalPrice.value);
});


// Watchers
watch(showPayment, newValue => {
    if (!newValue) {
        scrollToTop();
    }
});
onBeforeMount(async() => {
    await user();
});

</script>

