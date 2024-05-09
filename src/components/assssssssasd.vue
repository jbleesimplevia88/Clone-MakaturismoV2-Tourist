<div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem] w-screen">
    <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%]  h-fit">
      <div v-if="showSummary">
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
      <p class="lg:mr-9 lg:mt-2  lg:font-sans  lg:text-3xl font-bold  text-lg pt-4">Your Total</p>
      <div class="items-center mb-5">
        <div class="flex justify-between mb-2 w-[100%]">
          <p class="w-[70%]">{{ stayXyzData.roomTypeName }}</p>
          <p class="text-gray-400">₱ {{ stayXyzData.roomTypePrice }}</p>
        </div>
        <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">Price
          Breakdown
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
        <!-- Change "Your Total (Php)" to "Subtotal" if discount is applied -->
        <p class="font-poppins font-sans font-bold text-lg pt-4">{{ displayTotalLabel }}</p>
        <p class="font-poppins font-sans text-base font-bold pt-4">{{ totalPrice }}</p>
      </div>
      <div v-if="discountPrice" class="flex justify-between text-[#9bbf2f]">
        <p class="font-poppins font-sans font-bold text-lg pt-4">Special Discount:</p>
        <p class="font-poppins font-sans text-base font-bold pt-4">- ₱ {{ discountPrice }}</p>
      </div>
      <div class="bg-gray-400 h-0.5 mt-2"></div>
      <div v-if="anyVoucherApplied" class="flex justify-between ">
        <p class="font-poppins font-sans font-bold text-lg pt-4">Total (in PHP):</p>
        <p class="font-poppins font-sans text-xl font-bold pt-4">{{ finalPrice }}</p>
      </div>
      <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">Price
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