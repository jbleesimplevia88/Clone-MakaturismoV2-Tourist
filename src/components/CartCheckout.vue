<template>
  <div>
    <div v-if="showPayment">
      <!-- Order Section -->
      <nav
        class="h-28 pt-16 pl-5 bg-[#132540] text-white text-xl font-semibold flex items-center cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0">
        <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
          stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0 7.5-7.5M3 12h18"></path>
        </svg>
        {{ navButtonText }}
      </nav>
      <div class="justify-center my-5 mr-5 relative lg:mb-[20rem]">
        <div class="lg:block relative lg:w-[60%] lg:top-[3rem] top-5">
          <!-- Orders of User -->
          <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
            <p class="mb-4 text-2xl font-bold">Your Order</p>
            <p class="mb-4 font-bold text-3m">Number Of Items</p>
            <p class="mb-4 font-bold text-3m">{{ selectedItemsCount }}</p>
            <div class="w-[100%]">
              <div class="flex justify-between">
                <p class="font-bold w-[50%] mb-5 lg:text-base text-sm">List of items per Shop</p>
                <p class="w-[19%] flex justify-center mb-4 font-bold lg:text-base text-sm">Quantity</p>
                <p class="w-[12%] flex justify-center mb-4 font-bold lg:text-base text-sm">Cost</p>
                <p class="w-[12%] flex justify-center mb-4 font-bold lg:text-base text-sm">Total</p>
              </div>
              <div class="bg-gray-400 h-0.5"></div>
              <div class="mb-5 overflow-y-scroll h-28 lg:h-full lg:overflow-hidden">
                <div v-if="!groupedSelectedItems || groupedSelectedItems.length === 0" class="text-center text-gray-500">
                  Cart is empty
                </div>
                <div v-else>
                  <div v-for="(group, groupIndex) in groupedSelectedItems" :key="groupIndex">
                    <div class="font-bold mb-2 text-[#132540]">{{ group.shopName }}</div>
                    <div v-for="(cartItem, index) in group.items" :key="index" class="flex justify-between mb-3">
                      <div class="w-[50%]">{{ cartItem.product_details.productname }}</div>
                      <div class="w-[19%] flex lg:justify-center">{{ cartItem.quantity }}</div>
                      <div class="w-[12%] flex lg:justify-center">{{ cartItem.product_details.productprice }}</div>
                      <div class="w-[10%] flex lg:justify-center">₱ {{ calculateTotalPrice(cartItem) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Information of user -->
          <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px] lg:mb-44">
            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
            <div v-for="(user, index) in userInfo" :key="index" class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                <p class="font-normal mb-3 text-gray-600">{{ user.firstname }} {{ user.lastname }}</p>
              </div>
              <div class="flex lg:flex-col lg:items-start">
                <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                <p class="font-normal mb-2 text-base text-gray-600">{{ user.email }}</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                <p class="font-normal mb-3 text-gray-600">{{ user.contact }}</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Address<span class="text-red-500">*</span></p>
                <input v-model="address" placeholder="Enter your address"
                  class="font-normal mb-10 w-full text-gray-600 border p-2" />
              </div>
            </div>
            <div class="hidden lg:block">
              <p class="font-bold text-3xl mb-4">Payment</p>
              <div class="flex border rounded p-8 h-24" :class="{ 'bg-blue-100': selectedPaymentMethod === 'ibayad' }">
                <div class="flex items-center pr-3">
                  <input id="payment_ibayad" aria-describedby="helper-radio-text" type="radio" value="ibayad"
                    @click="toggleIbayad"
                    class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    v-model="selectedPaymentMethod">
                </div>
                <div class="ms-2 text-sm">
                  <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">Ibayad</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- FOR MOBILE -->
        <div class="ml-4 lg:hidden p-5">
          <p class="text-2xl font-bold pt-3">Your Information</p>
          <div v-for="(user, index) in userInfo" :key="index" className="grid grid-cols-2 grid-rows-3 pt-5"
            style="word-wrap: break-word;">
            <div>
              <p class="text-base font-bold">Full Name</p>
            </div>
            <div>
              <p class="font-normal mb-2 text-gray-600 text-base">{{ user.firstname }} {{ user.lastname }}</p>
            </div>
            <div>
              <p class="text-base font-bold">E-mail Address</p>
            </div>
            <div>
              <p class="font-normal mb-2 text-base text-gray-600 whitespace-nowrap">{{ user.email }}</p>
            </div>
            <div>
              <p class="text-base font-bold">Phone Number</p>
            </div>
            <div>
              <p class="font-normal mb-2 text-gray-600 text-base">{{ user.contact }}</p>
            </div>
            <div class="flex lg:flex-col lg:items-start justify-start">
              <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Address<spam class="text-red-500">*</spam>
              </p>
            </div>
            <input v-model="address" placeholder="Enter your address"
              class="font-normal w-full text-gray-600 border p-2" />

          </div>
        </div>
        <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem] w-screen">
          <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%] h-fit">
            <!-- Summary -->
            <div v-if="showSummary">
              <div v-for="(shop, index) in groupedSelectedItems" :key="index" class="mb-5 mt-5">
                <div class="flex items-center mb-5">
                  <div class="lg:w-36 lg:h-32 w-24 h-24 rounded-lg m-2 overflow-hidden">
                    <img :src="getImageUrl(shop.items[0].product_details.uploadedphotos)"
                      class="w-full h-full object-cover">
                  </div>
                  <div class="ml-1 flex flex-col w-full">
                    <div class="-mt-8 mb-2">
                      <p class="font-bold">{{ shop.shopName }}</p>
                    </div>
                    <p class="font-bold">Your Total</p>
                    <div class="items-center ml-3 mb-5 overflow-y-auto h-20">
                      <div v-for="(cartItem, index) in shop.items" :key="index"
                        class="flex justify-between mb-2 w-[100%]">
                        <p class="w-[70%]">{{ cartItem.product_details.productname }}</p>
                        <p class="text-gray-400">₱ {{ calculateTotalPrice(cartItem) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-400 h-0.5 w-[100%]"></div>
                <div class="flex items-center my-7">
                  <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 h-8 mr-2">
                  <button class="hidden lg:block text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                    @click="toggleVoucherVisibility(shop.shopName)">Use Voucher</button>
                  <button class="lg:hidden text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                    @click="toggleVoucherVisibility(shop.shopName)">Use Voucher</button>
                </div>
              </div>
              <div class="bg-gray-400 h-0.5 w-[100%]"></div>
              <div class="mb-5">
                <div class="flex justify-between">
                  <p class="font-poppins font-sans font-bold text-lg pt-4">Delivery Fee:</p>
                  <p class="font-poppins font-sans text-base font-bold pt-2">₱ {{ cartFinalStore.deliveryFee }}</p>
                </div>
                <div class="flex justify-between">
                  <p class="font-poppins font-sans font-bold text-lg pt-2">{{ displayTotalLabel }}</p>
                  <p class="font-poppins font-sans text-base font-bold pt-2">₱ {{ subTotal }}</p>
                </div>
                <div v-if="discountPrice !== 0" class="flex justify-between text-[#9bbf2f]">
                  <p class="font-poppins font-sans font-bold text-lg pt-2">Special Discount:</p>
                  <p class="font-poppins font-sans text-base font-bold pt-2">- ₱ {{ discountPrice }}</p>
                </div>
                <div class="bg-gray-400 h-0.5 mt-2"></div>
                <div class="flex justify-between">
                  <p class="font-poppins font-sans font-bold text-lg pt-2">Total (in PHP):</p>
                  <p class="font-poppins font-sans text-xl font-bold pt-2">₱ {{ finalPrice }}</p>
                </div>
              </div>
              <div class="justify-center pt-6">
                <button
                  class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold lg:block hidden"
                  @click="toggleComplete">Proceed to Payment</button>
                <button v-if="showPayment"
                  class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold lg:hidden"
                  @click="togglePayment">Proceed to Payment</button>
              </div>
              <div v-if="showConfirmation"
                class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                @click.self="closeModal">
                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                  <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                    <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                    <p class="font-bold text-2xl mb-6">Redirecting you...</p>
                    <p class="font-normal text-2xl mb-6">Your booking transaction is being processed. Please wait for the
                      confirmation in your notification</p>
                    <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5" @click="toggleComplete">Okay</button>
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
                    <router-link to="/">
                      <button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5" @click="closeModal">Okay</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- Voucher section -->
            <div v-if="showVoucher">
              <div class="lg:w-[100%] rounded-lg">
                <svg @click="toggleVoucherVisibility(currentShopName)" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="3" stroke="black" class="lg:mr-5 lg:w-5 lg:h-10 w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0 7.5-7.5M3 12h18"></path>
                </svg>
                <div class="flex flex-col items-center">
                  <input type="text" class="mb-2 h-[50px] w-[100%] border border-gray-200 pl-5 pr-3 rounded-md"
                    placeholder="Enter Voucher Code">
                  <button
                    class="mb-2 text-white bg-blue-500 rounded-xl w-full lg:w-full py-2 lg:py-3 px-4 lg:px-6 text-base lg:text-lg font-semibold"
                    @click="applyVoucherCode">Apply</button>
                  <div>
                    <div data-v-392f50c8="" class="mt-0 bg-gray-400 h-0.5"></div>
                  </div>
                  <p class="mt-4 font-bold text-left">Select a Voucher</p>
                  <div class="overflow-y-auto h-[270px] custom-scrollbar">
                    <div v-for="(voucher, index) in vouchersForShop" :key="index" class="relative mb-6">
                      <div class="items-center bg-no-repeat bg-cover bg-center rounded-lg lg:block hidden"
                        :style="{ backgroundImage: `url(${voucherBg})`, width: '350px', height: '113px' }">
                        <img :src="getImageUrl(voucher.voucherImage)"
                          class="w-20 h-20 object-cover absolute left-7 top-1/2 transform -translate-y-1/2 rounded-lg">
                        <div class="flex flex-col p-4 ml-28">
                          <span class="font-semibold ml-4">₱{{ voucher.amount }} OFF</span>
                          <span class="font-bold ml-4">{{ voucher.shopname }}</span>
                          <span class="text-sm text-gray-500 ml-4 font-medium">Valid until {{ voucher.validity }}</span>
                          <button type="submit" class="text-sm font-bold text-blue-500 cursor-pointer"
                            @click="toggleVoucherWeb(voucher)">
                            {{ voucher.applied ? 'Remove' : 'Apply' }}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div v-for="(voucher, index) in vouchersForShop" :key="index" class="relative mb-6">
                      <div class="items-center bg-no-repeat bg-contain bg-center rounded-lg lg:hidden"
                        :style="{ backgroundImage: `url(${voucherBg})`, width: '300px', height: '94px' }">
                        <img :src="getImageUrl(voucher.voucherImage)"
                          class="w-20 h-20 object-cover absolute left-7 top-1/2 transform -translate-y-1/2 rounded-lg">
                        <div class="flex flex-col p-3 ml-[85px]">
                          <span class="font-semibold text-sm ml-4">₱{{ voucher.amount }} OFF</span>
                          <span class="font-bold text-xs ml-4">{{ voucher.shopname }}</span>
                          <span class="text-xs text-gray-500 ml-4 font-medium">Valid until {{ voucher.validity }}</span>
                          <button type="submit" class="text-sm font-bold text-blue-500 cursor-pointer"
                            @click="toggleVoucherWeb(voucher)">
                            {{ voucher.applied ? 'Remove' : 'Apply' }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div data-v-392f50c8="" class="mt-5 mb-3 bg-gray-400 h-0.5"></div>
                  </div>
                  <p class="font-bold text-left">Not valid for this order</p>
                  <div class="overflow-y-auto h-[270px] custom-scrollbar">
                    <div v-for="voucher in invalidVouchersForShop" :key="voucher.code"
                      class="relative lg:block hidden mb-6">
                      <div class="flex items-center bg-no-repeat bg-cover bg-center rounded-lg"
                        :style="{ backgroundImage: `url(${voucherBg})`, width: '350px', height: '113px' }">
                        <img :src="getImageUrl(voucher.voucherImage)"
                          class="w-20 h-20 object-cover absolute left-7 top-1/2 transform -translate-y-1/2 rounded-lg">
                        <div class="flex flex-col p-4 ml-28">
                          <span class="font-semibold ml-4">₱{{ voucher.amount }} OFF</span>
                          <span class="font-bold ml-4">{{ voucher.shopname }}</span>
                          <span class="text-sm text-gray-300 font-medium ml-4">Valid until {{ voucher.validity }}</span>
                          <button type="submit" class="text-sm font-bold text-gray-400 cursor-not-allowed mt-2"
                            disabled>Apply</button>
                        </div>
                      </div>
                    </div>
                    <div v-for="voucher in invalidVouchersForShop" :key="voucher.code" class="relative mb-6">
                      <div class="items-center bg-no-repeat bg-contain bg-center rounded-lg lg:hidden"
                        :style="{ backgroundImage: `url(${voucherBg})`, width: '300px', height: '94px' }">
                        <img :src="getImageUrl(voucher.voucherImage)"
                          class="w-20 h-20 object-cover absolute left-7 top-1/2 transform -translate-y-1/2 rounded-lg">
                        <div class="flex flex-col p-3 ml-[85px]">
                          <span class="font-semibold text-sm ml-4">₱{{ voucher.amount }} OFF</span>
                          <span class="font-bold text-xs ml-4">{{ voucher.shopname }}</span>
                          <span class="text-xs text-gray-500 ml-4 font-medium">Valid until {{ voucher.validity }}</span>
                          <button type="submit" class="text-sm font-bold text-gray-400 cursor-not-allowed"
                            disabled>Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Payment Section for Mobile -->
    <div v-else>
      <div class="lg:hidden">
        <nav
          class="h-28 pt-16 pl-5 bg-[#132540] text-white text-xl font-semibold flex items-center cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0">
          <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
            stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0 7.5-7.5M3 12h18"></path>
          </svg>
          {{ navButtonText }}
        </nav>
        <div class="mt-[0rem] w-full h-full p-8">
          <div className="grid grid-cols-1 grid-rows-4 gap-0">
            <p class="font-bold text-3xl mb-4">Payment</p>
            <div class="flex border rounded p-8 h-24" :class="{ 'bg-blue-100': selectedPaymentMethod === 'ibayad' }">
              <div class="flex items-center pr-3">
                <input id="payment_ibayad" aria-describedby="helper-radio-text" type="radio" value="ibayad"
                  @click="toggleIbayad"
                  class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="selectedPaymentMethod">
              </div>
              <div class="ms-2 text-sm">
                <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">Ibayad</label>
              </div>
            </div>
          </div>
          <div class="justify-center pt-3">
            <button class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
              @click="toggleComplete">Confirm Booking</button>
            <div v-if="showComplete" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
              @click.self="closeModal">
              <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                  <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                  <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                  <router-link to="/">
                    <button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5" @click="closeModal">Okay</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>


<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useCartFinalStore } from '@/stores/finalCart';
import { useRouter } from 'vue-router';
import axios from 'axios';
import voucherBg from '@/assets/images/CategoryView/ToEat/voucher.png';

const selectedItemsCount = computed(() => {
  return selectedItems.value.reduce((count, item) => count + parseInt(item.quantity, 10), 0);
});

const cartFinalStore = useCartFinalStore();
const router = useRouter();
const userInfo = ref([]);
const selectedPaymentMethod = ref(null);
const showComplete = ref(false);
const showSummary = ref(true);
const address = ref('');
const showConfirmation = ref(false);
const showPayment = ref(true);
const showVoucher = ref(false);
const currentShopName = ref('');
const navButtonText = ref('Request to Order');
const discountPrice = ref(0);
const selectedItems = computed(() => cartFinalStore.selectedItems);

const displayTotalLabel = computed(() => discountPrice.value > 0 ? 'Subtotal' : 'Your Total (Php)');

const groupedSelectedItems = computed(() => {
  const grouped = selectedItems.value.reduce((acc, item) => {
    const shopName = item.product_details.business_details.busname;
    if (!acc[shopName]) {
      acc[shopName] = { shopName, items: [] };
    }
    acc[shopName].items.push(item);
    return acc;
  }, {});
  return Object.values(grouped);
});

const calculateTotalPrice = (cartItem) => {
  const quantity = parseInt(cartItem.quantity, 10); // Ensure quantity is a valid number
  const price = parseFloat(cartItem.product_details.productprice); // Ensure price is a valid number
  return (quantity * price).toFixed(2); // Return the total price with 2 decimal places
};

const subTotal = computed(() => {
  if (!selectedItems.value) return 0;
  const itemsTotal = selectedItems.value.reduce((total, item) => {
    const totalPrice = calculateTotalPrice(item);
    return total + parseFloat(totalPrice);
  }, 0);
  return itemsTotal.toFixed(2);
});

const deliveryFee = ref(50); // Assuming the delivery fee is 50

const finalPrice = computed(() => {
  const appliedVouchers = cartFinalStore.vouchers.filter(voucher => voucher.applied);
  const discount = appliedVouchers.reduce((total, voucher) => total + voucher.amount, 0);
  return (parseFloat(subTotal.value) + parseFloat(deliveryFee.value) - discount).toFixed(2);
});

const vouchersForShop = computed(() => cartFinalStore.vouchers.filter(voucher => voucher.shopname === currentShopName.value && voucher.validity >= new Date().toISOString().split('T')[0]));
const invalidVouchersForShop = computed(() => cartFinalStore.vouchers.filter(voucher => voucher.shopname === currentShopName.value && voucher.validity < new Date().toISOString().split('T')[0]));

const fetchUserInfo = async () => {
  const response = await cartFinalStore.fetchUser();
  if (response.status && response.data) {
    userInfo.value = [response.data];
    address.value = response.data.address || ''; // Initialize address
  }
};

const toggleVoucherWeb = (voucher) => {
  toggleVoucherApplied(voucher);
  updateDiscountPrice();
  // Update the discount price based on the applied vouchers
  if (voucher.applied) {
    discountPrice.value += voucher.amount;
  } else {
    discountPrice.value -= voucher.amount;
  }
}

const toggleVoucherApplied = (voucher) => {
  voucher.applied = !voucher.applied;
};

const updateDiscountPrice = () => {
  cartFinalStore.updatePrices(subTotal.value, finalPrice.value);
};

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const toggleVoucherVisibility = (shopName) => {
  showSummary.value = !showSummary.value;
  showVoucher.value = !showVoucher.value;
  currentShopName.value = shopName;
};

const toggleConfirmation = () => {
  showConfirmation.value = true;
};

const closeModal = () => {
  showConfirmation.value = false;
  showComplete.value = false;
};

const togglePayment = () => {
  showPayment.value = !showPayment.value;
  navButtonText.value = showPayment.value ? 'Request to Order' : 'Payment';
};

const navigateBack = () => {
  if (!showPayment.value) {
    showPayment.value = true;
    navButtonText.value = 'Request to Order';
  } else {
    router.go(-1);
  }
};

const activateRadioButton = (id) => {
  const radioBtn = document.getElementById(id);
  if (radioBtn) {
    radioBtn.checked = !radioBtn.checked;
    updatePaymentMethod();
  }
};

const updatePaymentMethod = () => {
  const selectedRadio = document.querySelector('input[name="payment_method"]:checked');
  selectedPaymentMethod.value = selectedRadio ? selectedRadio.value : null;
};

const toggleComplete = () => {
  if (!selectedPaymentMethod.value) {
    alert("Please select a payment method before confirming booking.");
    return;
  }
  sendOrderData().then(() => {
    showConfirmation.value = false;
    showComplete.value = !showComplete.value;
  }).catch(error => {
    console.error('Error sending order:', error);
    alert('There was an error sending your order. Please try again.');
  });
};

const sendOrderData = async () => {
  if (!userInfo.value.length) {
    alert("User information is not loaded.");
    return;
  }

  const orderData = selectedItems.value.map((item) => ({
    busid: item.product_details.busid,
    productid: item.product_details.id,
    productname: item.product_details.productname,
    productprice: item.product_details.productprice,
    quantity: item.quantity,
    totalperproduct: calculateTotalPrice(item),
    subtotal: subTotal.value,
    finaltotal: finalPrice.value,
    deliveryFee: deliveryFee.value,
    touristid: userInfo.value[0]?.id || 'N/A',
    address: address.value || 'N/A',
    deliveryaddress: address.value || 'N/A',
    addaddress: address.value || 'N/A',
    paymentmethod: selectedPaymentMethod.value,
  }));

  const postData = {
    ...orderData.reduce((acc, cur) => {
      for (const key in cur) {
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(cur[key]);
      }
      return acc;
    }, {}),
    newbusid: selectedItems.value[0]?.product_details.busid,
    newtouristId: userInfo.value[0]?.id || 'N/A',
    newaddress: address.value,
    newpaymentMethod: selectedPaymentMethod.value,
    newvoucher: 'sample',
    newdeliveryFee: deliveryFee.value,
    newsubtotal: subTotal.value,
    newfinalTotal: finalPrice.value,
  };

  console.log('Order Data:', orderData);
  console.log('Post Data:', postData);

  await axios.post('/transactShop', postData).then(res => {
    console.log('Order sent successfully');
  }).catch(error => {
    console.log(error);
  });
};

watch([subTotal, finalPrice], () => {
  cartFinalStore.updatePrices(subTotal.value, finalPrice.value);
});

watch(showPayment, newValue => {
  if (!newValue) {
    window.scrollTo(0, 0);
  }
});

onMounted(() => {
  fetchUserInfo();
});
</script>

