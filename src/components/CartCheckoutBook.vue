<template>
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
                <p class="mr-[90px] lg:mb-1 font-bold ">Date of Tour</p>
                <p class="font-normal mb-3 ">07/24/2023</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class=" lg:mb-1 font-bold " style="margin-right: min(max(88px), 119px);">Time of
                  Tour
                </p>
                <p class="font-normal mb-3">1:00 PM - 3:00 PM</p>
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



            </div>



          </div>
          <div class="relative hidden lg:block mx-6 px-3 lg:pl-32 mb-[30px]">
            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                <p class="font-normal mb-3 text-gray-600">Juan Dela Cruz</p>
              </div>
              <div class="flex lg:flex-col lg:items-start">
                <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                <p class="lg:ml-0 font-normal mb-3 text-gray-600">Juandelecruz@gmail.com</p>
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

                <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad" class="mr-2" checked>
                <label for="payment_ibayad">Ibayad</label>



              </div>
            </div>

          </div>
        </div>
        <!-- FOR MOBILE -->
        <div class=" lg:hidden p-5 ">

          <div class="mt-5 bg-gray-400 h-0.5"></div>
          <p class=" text-2xl font-bold pt-6">Your Information</p>
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
              <p class="font-normal mb-2 text-base text-gray-600 text-sm">Juandelecruz@gmail.com</p>


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
          <div class="border border-gray-400 rounded-xl p-5 ml-5 w-[90%]  h-fit">
            <div class="lg:flex items-center mb-5">
              <img src="@/assets/images/CategoryView/ToStay/xyz.png" class="w-[100%] lg:w-[40%] h-[6rem] rounded-lg">
              <div class="ml-1 flex flex-col">
                <div>
                  <p class="font-bold">XYZ Hotel</p>
                </div>
                <div>
                  <p class="mb-5 mt-2 text-gray-400">Guided Tour</p>
                </div>
                <div class="flex">
                  <p class="font-semibold text-sm  mt-0">5.0 Ratings</p>
                  <p class="text-sm text-gray-400">(500 Review)</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-400 h-0.5"></div>
            <p class="lg:mr-9 lg:mt-2  lg:font-sans  lg:text-3xl font-bold  text-lg pt-4">Your Total</p>
            <div class="items-center mb-5">
              <div class="flex justify-between mb-2 w-[100%]">
                <p class="text-gray-400 w-[70%]">1 hour Session
                </p>
                <p class="text-gray-400">₱30.00</p>
              </div>
              <p class="lg:font-poppins font-sans text-base font-bold text-right underline hidden">Price
                Breakdown
              </p>




            </div>

            <div class="bg-gray-400 h-0.5 w-[100%]"></div>
            <div class="flex items-center my-7  ">
              <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="lg:w-8 h-8 mr-2">
              <p class="font-poppins font-sans text-base text-blue-500 mr-1">Use Voucher</p>
              <input type="text" id="" name="" value="" class="h-[50px] w-[70%] border border-gray-200 pl-5 mr-6"
                placeholder="Voucher Code">
            </div>
            <div class="flex justify-between">
              <p class="font-poppins font-sans font-bold text-lg pt-4">Your Total (Php)</p>
              <p class="font-poppins font-sans text-base font-bold pt-4 ">₱ 30.00</p>

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
      <div class="lg:hidden">
        <nav
          class=" h-28 pt-16 pl-5  bg-[#132540] text-white text-xl font-semibold flex items-center  cursor-pointer lg:px-[100px] lg:h-20 lg:mt-[80px] lg:text-4xl lg:pt-0 ">
          <svg @click="navigateBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
            stroke="white" class="h-5 pr-2 lg:mr-7 lg:w-10 lg:h-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
            </path>
          </svg> {{ navButtonText }}
        </nav>
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
              <button class="text-xs font-semibold cursor-pointer dark:text-gray-300 text-blue-500 -mt-12 pl-2">
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
export default {
  data() {
    return {
      showConfirmation: false,
      showComplete: false,
      showPayment: true,
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
  methods: {
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
      this.navButtonText = this.showPayment ? 'Request to Book' : 'Payment';
    },
    navigateBack() {
      if (!this.showPayment) {
        // If currently in the payment section, switch to the booking section
        this.showPayment = true;
        this.navButtonText = 'Request to Order';
      } else {
        // Redirect to '/category/do' when in the booking section
        this.$router.push('/category/shop');

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
};
</script>