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
                                <div class="mb-5 overflow-y-scroll h-28 lg:h-full lg:overflow-hidden pr-3">
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
                                            <div class="w-[12%] flex justify-center">{{ cartItem.quantity * cartItem.price
                                            }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Information of user -->
                        <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px] lg:mb-44">
                            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
                            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                                    <p class="font-normal mb-3 text-gray-600">Juan Dela Cruz</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start">
                                    <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                                    <p class="font-normal mb-2 text-base text-gray-600">Juandelacruz@gmail.co
                                    </p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                                    <p class="font-normal mb-3 text-gray-600">09123456789</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[128px] lg:mr-9 lg:mb-1 font-bold">Gender</p>
                                    <p class="font-normal mb-3 text-gray-600">Male</p>
                                </div>
                                <div class="flex lg:flex-col lg:items-start justify-start">
                                    <p class="mr-[55px] lg:mr-9 lg:mb-1 font-bold">Citizen of Makati</p>
                                    <p class="font-normal mb-3 text-gray-600">Yes</p>
                                </div>
                            </div>
                            <div class="hidden lg:block">
                                <p class="font-bold text-3xl mb-4">Payment</p>
                                <div class="border border-gray-200 py-5 pl-6">
                                    <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad"
                                        class="mr-2" checked>
                                    <label for="payment_ibayad">Ibayad</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FOR MOBILE -->
                    <div class=" ml-4 bg-gray-400 h-0.5"></div>
                    <div class="ml-4 lg:hidden p-5 ">
                        <p class=" text-2xl font-bold pt-2">Your Information</p>
                        <div className="grid grid-cols-2 grid-rows-5 pt-5 " style="word-wrap: break-word;">
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
                                <p class="font-normal mb-2 text-base text-gray-600">Juandelacruz@gmail.com</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">Phone Number</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2 text-gray-600 text-base">09123456789</p>
                            </div>
                            <div>
                                <p class="text-base font-bold">Gender</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2 text-gray-600 text-base">Male</p>
                            </div>
                            <div>
                                <p class=" text-base font-bold">Citizen of Makati</p>
                            </div>
                            <div>
                                <p class="font-normal mb-2 text-gray-600 text-base">Yes</p>
                            </div>
                        </div>
                    </div>


                    <!-- Start of Central Business District Tour -->
                    <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem] w-screen">
                        <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%] h-fit">
                            <!-- summary -->
                            <div v-if="showSummary">
                                <div v-for="(shop, index) in shops" :key="index">
                                    <div class="lg:flex items-center mb-5">
                                        <img :src="shop.image" class="w-[100%] lg:w-[40%] h-[6rem] rounded-lg">
                                        <div class="ml-1 flex flex-col">
                                            <div>
                                                <p class="font-bold">{{ shop.name }}</p>
                                            </div>
                                            <div>
                                                <p class="mb-5 mt-2 text-gray-400">{{ shop.type }}</p>
                                            </div>
                                            <div class="flex">
                                                <p class="font-semibold text-sm mt-0">{{ shop.rating }} Ratings</p>
                                                <p class="text-sm text-gray-400">({{ shop.reviews }} Review)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-400 h-0.5"></div>
                                    <p class="lg:mr-9 lg:mt-2 lg:font-sans lg:text-3xl font-bold text-lg pt-4">Your Total
                                    </p>
                                    <div class="items-center mb-5">
                                        <div v-for="(cartItem, index) in selectedItems" :key="index"
                                            class="flex justify-between mb-2 w-[100%]">
                                            <p class="w-[70%]">{{ cartItem.title }} </p>
                                            <p class="text-gray-400">₱ {{ cartItem.quantity * cartItem.price }}</p>
                                        </div>
                                        <p
                                            class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">
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
                                        <!-- Change "Your Total (Php)" to "Subtotal" if a voucher is applied -->
                                        <p class="font-poppins font-sans font-bold text-lg pt-4">{{ displayTotalLabel }}</p>
                                        <p class="font-poppins font-sans text-base font-bold pt-4">{{ totalAmount }}</p>
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
                                        <p class="font-poppins font-sans text-xl font-bold pt-4">{{ finalPrice }}</p>
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
                                            @click="toggleConfirmation">Proceed to Payment</button>
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
                                    <svg @click="toggleBack" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="3" stroke="black" class="lg:mr-5 lg:w-5 lg:h-10">
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
                                                <button type="submit" class="text-sm font-bold ml-52 cursor-pointer"
                                                    disabled>
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
                            <div class="flex border rounded p-8 h-24" @click="activateRadioButton('gcash')">
                                <div class="flex items-center pr-3">
                                    <input id="gcash" aria-describedby="helper-radio-text" type="radio" value="gcash"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="ms-2 text-sm">
                                    <label for="helper-radio" class="font-semibold text-xl text-gray-700">
                                        Ibayad</label>
                                </div>
                            </div>
                            <div class="flex pt-4">
                                <img src="@/assets/images/Modal/voucher.svg" class="mb-6 w-6 h-6">
                                <button
                                    class="text-xs font-semibold cursor-pointer dark:text-gray-300 text-blue-500 -mt-12 pl-2">
                                    Use
                                    voucher</button>
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

<script>
import { computed } from 'vue';
import { useCartStore } from '@/stores/toShopCart';
export default {
    setup() {
        const cartStore = useCartStore();
        const selectedItems = computed(() => {
            // If the user is editing the cart
            if (cartStore.editCartProducts.length > 0) {
                return cartStore.editCartProducts.filter(item => item.selected);
            }
            // If the user is buying now
            else if (cartStore.buyNowProducts.length > 0) {
                return cartStore.buyNowProducts.filter(item => item.selected);
            }
            return cartStore.cart.filter(item => item.selected);
        });
        const totalItemsInCart = computed(() => {
            return selectedItems.value.reduce((total, item) => total + item.quantity, 0);
        });
        const totalAmount = computed(() => {
            return selectedItems.value.reduce((total, item) => total + (item.quantity * item.price), 0);
        });
        return {
            selectedItems,
            totalItemsInCart,
            totalAmount
        };
    },
    data() {
        return {
            showSummary: true,
            shops: [{
                image: "src/assets/images/CategoryView/ToShop/kultura.png",
                name: "Shop Makati",
                type: "Shop",
                rating: "5.0",
                reviews: "500",
            }],
            vouchers: [{
                code: 'DISCOUNT999',
                amount: 999.00,
                applied: false
            },
            {
                code: 'DISCOUNT100',
                amount: 100.00,
                applied: false
            },
            {
                code: 'DISCOUNT50',
                amount: 50.00,
                applied: false
            },
            {
                code: 'DISCOUNT200',
                amount: 200.00,
                applied: false
            }
            ],
            voucher: {
                applied: false
            },
            displayTotalLabel: 'Your Total (Php)',
            discountPrice: 0,
            showConfirmation: false,
            showComplete: false,
            showPayment: true,
            showVoucher: false,
            navButtonText: 'Request to Order'
        };
    },
    computed: {
        validVouchers() {
            return this.vouchers.filter(voucher => voucher.amount < this.totalAmount);
        },
        invalidVouchers() {
            return this.vouchers.filter(voucher => voucher.amount >= this.totalAmount);
        },
        finalPrice() {
            return this.totalAmount - this.discountPrice;
        }
    },
    methods: {
        toggleVoucher(voucher) {
            // Toggle the visibility of the voucher section
            this.showVoucher = !this.showVoucher;
            // this.showSummary = !this.showSummary;
            // Toggle the 'applied' property of the voucher
            voucher.applied = !voucher.applied;
            // Log and check if true or false
            console.log(`Voucher applied state: ${voucher.applied}`);
            // Update discountPrice based on applied vouchers
            this.discountPrice = this.vouchers.reduce((total, v) => {
                console.log(`Voucher: ${v.code}, Applied: ${v.applied}, Amount: ${v.amount}`);
                return v.applied ? total + v.amount : total; // Remove : Apply
            }, 0);
            // Update displayTotalLabel
            this.displayTotalLabel = this.discountPrice ? 'Subtotal' : 'Your Total (Php)';
        },
        toggleVoucherWeb(voucher) {
            // Toggle the visibility of the voucher section
            this.showSummary = !this.showSummary;
            // Toggle the 'applied' property of the voucher
            voucher.applied = !voucher.applied;
            // Log and check if true or false
            console.log(`Voucher applied state: ${voucher.applied}`);
            // Update discountPrice based on applied vouchers
            this.discountPrice = this.vouchers.reduce((total, v) => {
                console.log(`Voucher: ${v.code}, Applied: ${v.applied}, Amount: ${v.amount}`);
                return v.applied ? total + v.amount : total; // Remove : Apply
            }, 0);
            // Update displayTotalLabel
            this.displayTotalLabel = this.discountPrice ? 'Subtotal' : 'Your Total (Php)';
        },
        toggleBack() {
            this.showSummary = true;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
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
        },
        togglePayment() {
            // Toggle the showPayment flag
            this.showPayment = !this.showPayment;
            // Update navButtonText based on showPayment flag
            this.navButtonText = this.showPayment ? 'Request to Order' : 'Payment';
        },
        navigateBack() {
            if (!this.showPayment) {
                // If currently in the payment section, switch to the booking section
                this.showPayment = true;
                this.navButtonText = 'Request to Order';
            } else {
                // this.$router.push('/category/eat');
                // Go back to the previous page
                this.$router.go(-1);
            }
        },
        activateRadioButton(id) {
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
        }
    },
    watch: {
        showPayment(newValue) {
            if (!newValue) {
                // If the condition is false (else block is rendered), scroll to the top of the page
                this.scrollToTop();
            }
        },
        totalAmount() {
            this.updateInvalidVouchers();
        }
    },
};
</script>