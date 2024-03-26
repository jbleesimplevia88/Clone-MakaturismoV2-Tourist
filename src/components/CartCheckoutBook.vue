<template>
  <!-- header -->
  <nav class="flex relative pt-[70px] md:pt-[100px] bg-[#102E61] pb-3 lg:pb-5 pl-8 md:pl-8 lg:pl-[9rem] items-center">
    <div @click="navigateBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="mr-6 lg:mr-7 w-7 lg:w-8 h-7 lg:h-10 cursor-pointer">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          ></path>
        </svg>
    </div>
    <!-- <h1 class="font-bold text-2xl lg:text-3xl text-white ">Request to Book</h1> -->
    <h1 class="font-bold text-2xl lg:text-3xl text-white">{{ pageTitle }}</h1>
  </nav>
  <!-- body -->
  <!-- <div class="flex flex-wrap justify-between items-center my-5 relative lg:mb-[10rem] "> -->
  <div class="justify-center my-5 relative lg:mb-[10rem]">
    <transition :name="showBookingSection ? 'fade' : 'slide-up'" @after-enter="scrollToTop">
      <div v-if="showBookingSection">
        <div class="relative lg:w-[60%] lg:top-[3rem] top-5">
          <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Trip</p>
            <!-- web -->
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div class="flex lg:flex-col lg:items-start justify-between">
                <p class="mr-[0px] lg:mb-1 font-bold">Date of Check-In</p>
                <p class="font-normal mb-3">07/24/2023</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-between">
                <p class="lg:mr-9 lg:mb-1 font-bold">Date of Check-Out</p>
                <p class="font-normal mb-3">07/27/2023</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-between">
                <p class="lg:mb-1 font-bold">Number of Person</p>
                <p class="font-normal mb-3">3</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-between">
                <p class="lg:mr-9 lg:mb-1 font-bold">Other Request</p>
                <p class="font-normal mb-3">N/A</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-between">
                <p class="mr-[46px] lg:mr-9 lg:mb-1 font-bold">Services Included</p>
                <p class="font-normal mb-3 overflow-hidden whitespace-nowrap lg:overflow-visible lg:whitespace-normal" style="text-overflow: ellipsis">
                  Pet Space
                </p>
              </div>
            </div>
            <!-- mobile -->
            <div className="lg:hidden grid grid-cols-2 grid-rows-3 gap-2 pt-5">
              <div>
                <p class="font-bold text-base font-semibold">Check -In</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-base">07/24/2023</p>
              </div>
              <div>
                <p class="font-bold text-base font-semibold">Check -Out</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-base">07/27/2023</p>
              </div>
              <div>
                <p class="font-bold text-base font-semibold">Number of Person</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-base">3</p>
              </div>
              <div>
                <p class="font-bold text-base font-semibold">Other Request</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-base">N/A</p>
              </div>
            </div>
          </div>
          <div class="relative mx-6 px-3 lg:pl-32 mb-[30px]">
            <p class="mb-4 font-bold lg:text-3xl text-2xl">Your Information</p>
            <!-- web -->
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[110px] lg:mr-9 lg:mb-1 font-bold">Full Name</p>
                <p class="font-normal mb-3 text-gray-600">John Doe</p>
              </div>
              <div class="flex lg:flex-col lg:items-start">
                <p class="mr-[30px] w-10vw lg:pr-0 lg:mr-9 lg:mb-1 font-bold">E-mail Address</p>
                <p class="lg:ml-0 font-normal mb-3 text-gray-600">juandelecruz@gmail.com</p>
              </div>
              <div class="flex lg:flex-col lg:items-start justify-start">
                <p class="mr-[70px] lg:mr-9 lg:mb-1 font-bold">Phone Number</p>
                <p class="font-normal mb-3 text-gray-600">09569103856</p>
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
            <!-- mobile -->
            <div className="lg:hidden grid grid-cols-2 grid-rows-5 pt-5 " style="word-wrap: break-word">
              <div>
                <p class="lg:mr-9 lg:mb-1 text-base font-bold">Full Name</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-400 text-base">John Doe</p>
              </div>
              <div>
                <p class="lg:mr-9 lg:mb-1 text-base font-bold">E-mail Address</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-400 text-base">juandelecruz@gmail.com</p>
              </div>
              <div>
                <p class="lg:mr-9 lg:mb-1 text-base font-bold">Phone Number</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-400 text-base">09569103856</p>
              </div>
              <div>
                <p class="lg:mr-9 lg:mb-1 text-base font-bold">Gender</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-400 text-base">Male</p>
              </div>
              <div>
                <p class="lg:mr-9 lg:mb-1 text-base font-bold">Citizen of Makati</p>
              </div>
              <div>
                <p class="font-normal mb-2 text-gray-400 text-base">Yes</p>
              </div>
            </div>
          </div>
          <div class="hidden lg:block relative mx-6 px-3 lg:pl-32 mb-[30px]">
            <!-- <p class="lg:mb-4 font-bold lg:text-3xl text-2xl">Your Information</p> -->
            <p class="font-bold lg:text-3xl text-2xl lg:pb-3">Payment</p>
            <div class="border border-gray-200 py-5 pl-6">
              <input type="radio" id="payment_ibayad" name="payment_method" value="ibayad" class="" checked />
              <label for="payment_ibayad">Ibayad</label>
            </div>
          </div>
        </div>
        <div class="lg:block mb-[3rem]">
          <div class="my-4 lg:w-[32%] lg:h-[30%] lg:right-10 lg:absolute relative lg:top-[3rem]">
            <div class="border border-gray-400 rounded-xl p-5 m-8 lg:m-0">
              <div class="lg:flex items-center mb-5">
                <img src="@/assets/images/CategoryView/ToStay/book.png" class="hidden lg:block lg:w-[50%] w-full rounded-lg" />
                <img src="@/assets/images/CategoryView/ToStay/poblacion.png" class="lg:hidden" />
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
                <p class="lg:mt-2 font-bold lg:font-sans text-2xl lg:text-3xl">Your Total</p>
                <div class="items-center mb-5">
                  <div class="flex justify-between mb-2 lg:w-[100%]">
                    <p class="">Deluxe Room</p>
                    <p class="text-gray-400">₱ 7000.00</p>
                  </div>
                </div>
              </div>
              <div class="bg-gray-200 h-0.5 my-3"></div>
              <div class="relative px-3">
                <div class="flex items-center my-7">
                  <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="w-8 h-8 mr-2" />
                  <p class="font-poppins font-sans text-base text-blue-500 mr-4">Use Voucher</p>
                  <input type="text" id="" name="" value="" class="w-full h-[50px] border border-gray-200 px-3" placeholder="Voucher Code" />
                </div>
                <div class="flex justify-between">
                  <p class="font-poppins font-sans font-bold text-1xl">Your Total (Php)</p>
                  <p class="font-poppins font-sans text-base font-bold">₱ 7000.00</p>
                </div>
                <div class="hidden lg:block flex justify-center mt-4">
                  <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5" @click="toggleConfirmation">
                      Proceed to Payment
                    </button>
                </div>
                <div class="lg:hidden flex justify-center mt-4">
                  <button v-if="showBookingSection" class="text-white bg-blue-500 rounded-xl w-[100%] py-5" @click="toggleBooking">
                      Place Payment
                    </button>
                </div>
              </div>
              <!-- SHOW MODALS -->
              <div v-if="showConfirmation" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center" @click.self="closeModal">
                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                  <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                    <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6" />
                    <p class="font-bold text-2xl mb-6">Redirecting you...</p>
                    <p class="font-normal text-2xl mb-6">
                      Your booking transaction is being processed. Please wait for the confirmation in your notification
                    </p>
                    <button class="text-white bg-blue-500 rounded-xl w-[100%] py-5" @click="toggleComplete">
                        Okay
                      </button>
                  </div>
                </div>
              </div>
              <div v-if="showComplete" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center" @click.self="closeModal">
                <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
                  <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                    <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6" />
                    <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                    <router-link to="/category/stay">
                      <button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5" @click="closeModal">
                          Okay
                        </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- Payment section -->
        <div class="justify-center p-5 relative lg:mb-[10rem]">
          <div class="relative lg:pl-32">
            <div class="border border-gray-200 py-5 pl-6 flex" @click="activateRadioButton('payment_gcash')">
              <input type="radio" id="payment_gcash" name="payment_method" value="Gcash" class="mr-5" checked />
              <div>
                <label for="Gcash" class="font-bold">GCash (Alipay+ Partner)</label>
                <img src="@/assets/images/Modal/gcash.png" alt="Image" class="rounded w-10 h-7 mt-1" />
              </div>
            </div>
            <div class="border border-gray-200 py-5 my-3 pl-6 flex" @click="activateRadioButton('payment_credit')">
              <input type="radio" id="payment_credit" name="payment_method" value="Credit" class="mr-5" checked />
              <div>
                <label for="Credit" class="font-bold">Credit /Debit Card</label>
                <div class="flex gap-1">
                  <img src="@/assets/images/Modal/amex.png" alt="Image" class="rounded w-10 h-7 mt-1" />
                  <img src="@/assets/images/Modal/jcb.png" alt="Image" class="rounded mt-1 w-[48px] h-[29px] border p-[1px]" />
                  <img src="@/assets/images/Modal/maestro.png" alt="Image" class="rounded w-11 h-7 mt-1" />
                  <img src="@/assets/images/Modal/mastercard.png" alt="Image" class="rounded w-10 h-7 mt-1" />
                  <img src="@/assets/images/Modal/visa.png" alt="Image" class="rounded w-10 h-7 mt-1" />
                </div>
              </div>
            </div>
            <div class="border border-gray-200 py-5 pl-6 flex" @click="activateRadioButton('payment_bank')">
              <input type="radio" id="payment_bank" name="payment_method" value="Bank" class="mr-5" checked />
              <div>
                <label for="Bank" class="font-bold">Link bank account</label>
                <div class="flex gap-1">
                  <img src="@/assets/images/Modal/unionbank.png" alt="Image" class="rounded mt-1 w-[45px] h-[29px] border p-[4px]" />
                  <img src="@/assets/images/Modal/rcbc.png" alt="Image" class="rounded mt-1 w-[45px] h-[29px] border p-[4px]" />
                  <img src="@/assets/images/Modal/chinabank.png" alt="Image" class="rounded w-10 h-7 mt-1" />
                  <img src="@/assets/images/Modal/bpi.png" alt="Image" class="mt-1 w-19 h-[28px] border p-[4px]" />
                </div>
              </div>
            </div>
            <div class="border border-gray-200 py-5 my-3 pl-6" @click="activateRadioButton('payment_cash')">
              <input type="radio" id="payment_cash" name="payment_method" value="cash" class="mr-5 mb-4" checked />
              <label for="cash" class="font-bold">Cash On Delivery</label>
              <p class="font-bold text-xs mb-3">Pay by cash</p>
              <p class="text-xs">Pay cash upon delivery</p>
            </div>
            <!-- Add other payment options here -->
            <div class="flex items-center my-5">
              <img src="@/assets/images/CategoryView/ToShop/voucher.png" class="w-8 h-8 mr-2" />
              <p class="font-poppins font-sans text-base text-blue-500 mr-4">Use Voucher</p>
            </div>
            <div class="flex items-center justify-center">
              <button class="text-white bg-blue-500 rounded-xl w-[80%] py-5 text-xl" @click="toggleComplete">
                  Submit Payment
                </button>
            </div>
          </div>
          <div v-if="showComplete" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center" @click.self="closeModal">
            <div class="bg-white rounded-lg shadow-md p-2 lg:max-w-2xl h-2p-[20px]" @click.stop>
              <div class="lg:w-[100%] p-4 rounded-lg text-center flex flex-col items-center">
                <img src="@/assets/images/CategoryView/ToShop/check.png" class="mb-6" />
                <p class="font-bold text-2xl mb-6">Transaction Complete</p>
                <router-link to="/category/shop"><button class="text-white h-16 w-60 bg-blue-500 rounded-xl py-5" @click="closeModal">
                      Okay
                    </button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.6s;
  }
  .slide-up-enter,
  .slide-up-leave-to {
    transform: translateY(-100%);
    height: 1600px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
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
        showInformation: false,
        showConfirmation: false,
        showComplete: false,
        // showPaymentSection: false,
        showBookingSection: true,
        pageTitle: 'Request to Book'
        // currentPage: 'showBookingSection'
      }
    },
    methods: {
      activateRadioButton(id) {
        const radioBtn = document.getElementById(id)
        if (radioBtn) {
          if (radioBtn.checked) {
            radioBtn.checked = false // If already checked, uncheck it
          } else {
            // Uncheck all radio buttons
            document.querySelectorAll('input[type="radio"]').forEach((input) => {
              input.checked = false
            })
            radioBtn.checked = true // Check the clicked radio button
          }
        }
      },
      toggleInformation() {
        this.showInformation = true
        this.showConfirmation = false
      },
      toggleConfirmation() {
        this.showConfirmation = true
        this.showInformation = false
      },
      toggleComplete() {
        this.showComplete = !this.showComplete
        this.showConfirmation = false
      },
      closeModal() {
        this.showInformation = false
        this.showConfirmation = false
        this.showComplete = false
      },
      toggleBooking() {
        this.showBookingSection = !this.showBookingSection
        this.pageTitle = this.showBookingSection ? 'Request to Book' : 'Payment'
      },
      scrollToTop() {
        window.scrollTo(0, 0)
      },
      navigateBack() {
        if (!this.showBookingSection) {
          // If currently in the payment section, switch to the booking section
          this.showBookingSection = true
          this.pageTitle = 'Request to Book'
        } else {
          // Redirect to '/category/do' when in the booking section
          this.$router.push('/category/stay')
        }
      }
    }
  }
</script>


<style scoped></style>

