<template>
  <template v-if="!showVoucher">
    <div :key="showPayment ? 'payment' : 'booking'">
      <template v-if="showPayment">
        <nav
          class=" h-28 pt-16 pl-5  bg-[#132540] text-white text-xl font-semibold flex items-center  cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0 ">
          <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
            stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
            </path>
          </svg> {{ navButtonText }}
        </nav>
        <div class="justify-center my-5 mr-5 relative lg:mb-[20rem] ">
          <div class="lg:block relative lg:w-[60%] lg:top-[3rem] top-5">
            <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
              <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Trip</p>
              <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[90px] lg:mb-1 font-bold ">Date of Check-In</p>
                  <p class="font-normal mb-3 "> {{ stayXyzData.dateFrom }}</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[90px] lg:mb-1 font-bold ">Date of Check-Out</p>
                  <p class="font-normal mb-3 "> {{ stayXyzData.dateTo }}</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Number of Person</p>
                  <p class="font-normal mb-3">3</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Services Included</p>
                  <p class="font-normal mb-3 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal"
                    style="text-overflow: ellipsis;">&#8226; Service 1</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Other Request</p>
                  <p class="font-normal mb-3 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal"
                    style="text-overflow: ellipsis;">N/A</p>
                </div>
              </div>
            </div>
            <!-- Information of user -->
            <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px] lg:mb-44">
              <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
              <div v-for="(user, index) in userInfo" :key="index" class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                  <p class="font-normal mb-3 text-gray-600">{{ user.fullName }}</p>
                </div>
                <div class="flex lg:flex-col lg:items-start">
                  <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                  <p class="font-normal mb-2 text-base text-gray-600">{{ user.email }}
                  </p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                  <p class="font-normal mb-3 text-gray-600">{{ user.phoneNumber }}</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[128px] lg:mr-9 lg:mb-1 font-bold">Gender</p>
                  <p class="font-normal mb-3 text-gray-600">{{ user.gender }}</p>
                </div>
                <div class="flex lg:flex-col lg:items-start justify-start">
                  <p class="mr-[55px] lg:mr-9 lg:mb-1 font-bold">Citizen of Makati</p>
                  <p class="font-normal mb-3 text-gray-600">{{ user.citizenofMakati }}</p>
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
                    <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">
                      Ibayad</label>
                  </div>
                </div>
                <div class="mt-2 flex border rounded p-4 h-24"
                  :class="{ 'bg-blue-100': selectedPaymentMethod === 'cod' }">
                  <div class="flex items-center pr-3">
                    <input id="payment_cod" name="payment_method" value="cod" @click="toggleCOD"
                      class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" v-model="selectedPaymentMethod">
                  </div>
                  <div class="ms-2 text-sm">
                    <label for="payment_cod" class="font-semibold text-l text-gray-700">
                      Cash On Delivery</label>
                    <p class="mt-2 font-bold text">Pay By Cash</p>
                    <p class="text-s">Pay Cash Upon Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- FOR MOBILE -->
          <div class=" ml-4 bg-gray-400 h-0.5"></div>
          <div class="ml-4 lg:hidden p-5 ">
            <p class=" text-2xl font-bold pt-2">Your Information</p>
            <div v-for="(user, index) in userInfo" :key="index" className="grid grid-cols-2 grid-rows-5 pt-5 "
              style="word-wrap: break-word;">
              <div>
                <p class="text-base font-bold">Full Name</p>
              </div>
              <div>
                <p class="font-normal mb-2  text-gray-600 text-base">{{ user.fullName }}</p>
              </div>
              <div>
                <p class=" text-base font-bold">E-mail Address</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-base text-gray-600">{{ user.email }}</p>
              </div>
              <div>
                <p class=" text-base font-bold">Phone Number</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-600 text-base">{{ user.phoneNumber }}</p>
              </div>
              <div>
                <p class="text-base font-bold">Gender</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-600 text-base">{{ user.gender }}</p>
              </div>
              <div>
                <p class=" text-base font-bold">Citizen of Makati</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-600 text-base">{{ user.citizenofMakati }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Start of Central Business District Tour -->
        <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[13rem] w-screen">
          <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%] h-fit">
            <!-- summary -->
            <div v-if="showSummary">
              <div>
                <div class="lg:flex items-center mb-5">
                  <img :src="selectedHotel.image" class="w-[100%] lg:w-[40%] h-[6rem] rounded-lg">
                  <div class="ml-1 flex flex-col">
                    <div>
                      <p class="font-bold">{{ selectedHotel.name }}</p>
                    </div>
                    <div>
                      <p class="mb-5 mt-2 text-gray-400">{{ selectedHotel.category }}</p>
                    </div>
                    <div class="flex">
                      <p class="font-semibold text-sm mt-0">5.0 Ratings</p>
                      <p class="text-sm text-gray-400">(500 Reviews)</p>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-400 h-0.5"></div>
                <p class="lg:mr-9 lg:mt-2 lg:font-sans lg:text-3xl font-bold text-lg pt-4 mb-5">Your
                  Total
                </p>
                <div class="items-center ml-3 mb-5">
                  <div class="flex justify-between mb-2 w-[100%]">
                    <p class="w-[70%]">{{ stayXyzData.roomTypeName }}</p>
                    <p class="text-gray-400">₱ {{ stayXyzData.roomTypePrice }}</p>
                  </div>
                  <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">
                    Price Breakdown
                  </p>
                </div>
                <div class="bg-gray-400 h-0.5 w-[100%]"></div>
                <div class="flex items-center my-7  ">
                  <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 h-8 mr-2">
                  <button class="hidden lg:block text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                    @click="toggleVoucherWeb">Use Voucher</button>


                  <button class="lg:hidden text-white bg-blue-500 rounded-xl px-3 py-2 text-xs font-semibold"
                    @click="toggleVoucherWeb(index)">Use Voucher</button>
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
                  <button class="text-white bg-blue-500 rounded-xl w-full lg:w-[100%] py-5 text-lg font-semibold"
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
                      <router-link to="/category/eat"><button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
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
            <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
              stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
              </path>
            </svg> {{ navButtonText }}
          </nav>
          <div>
          </div>
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
                  <label for="payment_ibayad" class="font-semibold text-xl text-gray-700">
                    Ibayad</label>
                </div>
              </div>
              <div class="mt-2 flex border rounded p-4 h-24" :class="{ 'bg-blue-100': selectedPaymentMethod === 'cod' }">
                <div class="flex items-center pr-3">
                  <input id="payment_cod" name="payment_method" value="cod" @click="toggleCOD"
                    class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="radio" v-model="selectedPaymentMethod">
                </div>
                <div class="ms-2 text-sm">
                  <label for="payment_cod" class="font-semibold text-l text-gray-700">
                    Cash On Delivery</label>
                  <p class="mt-2 font-bold text">Pay By Cash</p>
                  <p class="text-s">Pay Cash Upon Delivery</p>
                </div>
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
                    <router-link to="/category/eat"><button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
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
        <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
          stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
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
          <div v-if="showComplete" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
            @click.self="closeModal">
            <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
              <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6">
                <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                <router-link to="/category/eat"><button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5"
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
          class="mb-2 h-[50px] w-[100%] border border-gray-200 pl-5 pr-3 rounded-md" placeholder="Enter Voucher Code">
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
            <button type="submit" class="text-sm font-bold ml-52 cursor-pointer" @click="toggleVoucher(voucher)">
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
import {
  computed
} from 'vue';
import {
  useStayStore
} from '@/stores/toStayCart';
export default {
  setup() {
    const stayStore = useStayStore();
    return {
      stayXyzData: stayStore.stayXyzData,
      selectedHotel: stayStore.selectedHotel,
      totalAmount: computed(() => parseFloat(stayStore.stayXyzData.roomTypePrice)),
      displayTotalLabel: computed(() => stayStore.discountPrice ? 'Subtotal' : 'Your Total (Php)'),
      finalPrice: computed(() => parseFloat(stayStore.stayXyzData.roomTypePrice) - stayStore.discountPrice)
    };
  },
  data() {
    return {
      selectedPaymentMethod: null,
      showComplete: false,
      showSummary: true,
      userInfo: [{
        fullName: "Juan Dela Cruz",
        email: "Juandelacruz@gmail.com",
        phoneNumber: "09123456789",
        gender: "Male",
        citizenofMakati: "Yes"
      }],
      hotels: [{
        image: "src/assets/images/CategoryView/ToStay/xyz.png",
        name: "XYZ Hotel",
        type: "Hotel",
        rating: "5.0",
        reviews: "500",
        items: [{
          name: "1 hour Session",
          price: "₱30.00"
        },
        {
          name: "3 hours Session",
          price: "₱3007.00"
        },
        ]
      }
        // Add more shop objects as needed
      ],
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
      navButtonText: 'Request to Book'
    };
  },
  watch: {
    showPayment(newValue) {
      if (!newValue) {
        // If the condition is false (else block is rendered), scroll to the top of the page
        this.scrollToTop();
      }
    }
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
  watch: {
    showPayment(newValue) {
      if (!newValue) {
        this.scrollToTop();
      }
    },
    totalAmount() {
      this.updateInvalidVouchers();
    }
  },
  methods: {
    navigateBack() {
      if (!this.showPayment) {
        // If currently in the payment section, switch to the booking section
        this.showPayment = true;
        this.navButtonText = 'Request to Order';
      } else {
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
    },
    toggleVoucher(voucher) {
      this.toggleVoucherVisibility();
      this.toggleVoucherApplied(voucher);
      this.updateDiscountPrice();
    },
    toggleVoucherWeb(voucher) {
      this.toggleSummaryVisibility();
      this.toggleVoucherApplied(voucher);
      this.updateDiscountPrice();
    },
    toggleVoucherApplied(voucher) {
      voucher.applied = !voucher.applied;
      console.log(`Voucher applied state: ${voucher.applied}`);
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
    isPaymentMethodSelected(paymentMethod) {
      return this.selectedPaymentMethod === paymentMethod;
    },
    toggleComplete() {
      console.log("toggleComplete() method called.");
      if (!this.selectedPaymentMethod) {
        alert("Please select a payment method before confirming booking.");
        return;
      }
      this.showConfirmation = false;
      this.showComplete = !this.showComplete;
    },
    closeModal() {
      this.showInformation = false;
      this.showConfirmation = false;
      this.showComplete = false;
    },
    togglePayment() {
      this.showPayment = !this.showPayment;
      this.navButtonText = this.showPayment ? 'Request to Order' : 'Payment';
    },
    updateDiscountPrice() {
      this.discountPrice = this.vouchers.reduce((total, v) => {
        return v.applied ? total + v.amount : total;
      }, 0);
      this.displayTotalLabel = this.discountPrice ? 'Subtotal' : 'Your Total (Php)';
    },

    toggleVoucherVisibility() {
      this.showVoucher = !this.showVoucher;
    },
    toggleSummaryVisibility() {
      this.showSummary = !this.showSummary;
    },

    updatePaymentMethod() {
      const selectedRadio = document.querySelector('input[name="payment_method"]:checked');
      this.selectedPaymentMethod = selectedRadio ? selectedRadio.value : null;
    }
  },
};
</script>
