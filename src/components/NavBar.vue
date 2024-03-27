<template>
  <nav class="fixed top-0 z-10 w-full">
    <div class="flex items-center justify-between w-full px-4 py-2 bg-white shadow md:px-20">
      <!-- Left side - Logo -->
      <div class="flex items-center">
        <RouterLink to="/" class="flex items-center">
          <img src="@/assets/images/Header/makati_logo.png" alt="banner"
            class="w-8 h-auto mr-3 md:block md:w-16 md:h-auto">
          <img src="@/assets/images/Header/makaturismo.png" alt="logo" class="w-auto h-10 md:w-24 md:h-auto">
        </RouterLink>
      </div>
      <!-- Right side - Calendar and Login -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/" class="hidden text-white md:inline-block"><img src="@/assets/images/Header/search.png"
            alt="logo" class="w-auto h-5 ml-2"></RouterLink>
        <RouterLink to="/calendar" class="hidden text-white md:inline-block"><img
            src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-6 mx-2"></RouterLink>
        <button @click="openLoginModal" class="text-blue-600">Login</button>
        <RouterLink to="/calendar" class="hidden text-white md:inline-block"></RouterLink>
        <a class="hidden lg:block lg:bg-blue-500 lg:hover:bg-blue-700 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:border lg:border-blue-700 lg:rounded-lg"
          href="#">Become a partner</a>
      </div>
    </div>

    <div class="hidden lg:block">
      <!-- Login Modal -->
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center bottom' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full m-10">
            <div class="mb-5">
              <h2 class="text-2xl font-bold">Web</h2>
              <p>Please log in to your account.</p>
            </div>
            <form @submit.prevent="login" style="width: 40%;">

              <div class="relative mb-4 w-full md:w-365">
                <label for="username" class="block text-gray-700">Enter Username</label>
                <div class="relative">
                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-2"
                    style="width: 15px;" alt="Username Icon" />
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 pl-10 border border-black rounded md:rounded-lg" placeholder="Username">
                </div>
              </div>
              <div class="relative mb-4 w-full md:w-365">
                <label for="username" class="block text-gray-700">Enter Password</label>
                <div class="relative">

                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-2"
                    style="width: 15px;" alt="Username Icon" />
                  <img src="@/assets/images/Modal/view.png" class="absolute inset-y-0 right-0 mx-3 my-2"
                    style="width: 15px;" alt="Eye Icon" />
                  <!-- <img src="@/assets/images/Modal/hidden.png" class="absolute inset-y-0 right-0 mx-3 my-2" style="width: 15px;" alt="Eye Icon" /> -->
                  <input type="password" id="password" v-model="password"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="Password">
                </div>
              </div>
              <div class="flex justify-between mb-4">
                <!-- <p>Don't have an account? <button @click="openSignUpModal" class="text-blue-600">Sign Up</button></p> -->
                <p>Don't have an account? <button @click="openPrivacyModal" class="text-blue-600">Sign Up</button></p>
                <button @click="openForgotModal" class="text-blue-600">Forgot Password?</button>
              </div>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-if="showPrivacyModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex justify-center items-center">
            <img src="@/assets/images/Header/makati_logo.png" alt="banner"
              class="w-8 h-auto mr-3 md:block md:w-16 md:h-auto">
            <img src="@/assets/images/Header/makaturismo.png" alt="logo" class="w-auto h-10 md:w-24 md:h-auto">
          </div>
          <div class="flex items-center">
            <button @click="openLoginModal" class="text-blue-600">
              <img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt="" class="my-2 mr-2">
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start h-full">
            <form @submit.prevent="signup" class="w-[100%] px-10">
              <div class="mb-5">

              </div>
              <!-- make it scrollable -->
              <div class="flex justify-start overflow-y-auto h-[200px] w-[100%] hidden-scrollbar mb-2">
                <div class="flex flex-col ">
                  <p class="font-bold text-center font text-3xl mb-5">Privacy Policy</p>
                  <p class="font-bold mb-5">Collection of Personal Information:</p>
                  <p class="mb-5">We may collect personal information from you when you interact with our website,
                    products,
                    or services. This information may include but is not limited to your name, email address, mailing
                    address, phone number, and payment details. We collect this information to provide you with our
                    services and to improve and customize your experience with us.</p>
                  <p class="font-bold mb-5">Use of Personal Information:</p>
                  <p class="mb-5">We use the personal information we collect for various purposes, including:</p>
                  <p class="mb-5">1. Providing and personalizing our services <br>
                    2. Processing transactions <br>
                    3. Communicating with you <br>
                    4. Improving our products and services <br>
                    5. Marketing and promotional purposes <br>
                    6. Complying with legal obligations</p>

                  <p class="mb-5">Protection of Personal Information:</p>


                  <p class="mb-5">We take the security of your personal information seriously and have implemented
                    appropriate measures
                    to protect it from unauthorized access, disclosure, alteration, or destruction. However, please note
                    that no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.</p>

                  <p class="font-bold mb-5">Sharing of Personal Information:</p>

                  <p class="mb-5">We may share your personal information with third-party service providers who assist
                    us in providing
                    our services, conducting our business, or servicing you. We may also share your information when
                    required by law or to protect our rights, property, or safety.</p>

                  <p class="font-bold mb-5">Your Rights:</p>

                  <p class="mb-5">You have the right to access, update, or delete your personal information. You may
                    also have the right
                    to object to or restrict certain types of processing. If you would like to exercise any of these
                    rights, please contact us using the information provided below.</p>

                  <p class="font-bold mb-5">Changes to this Privacy Policy:</p>

                  <p class="mb-5">We reserve the right to update or modify this Privacy Policy at any time. Any changes
                    will be
                    effective immediately upon posting the updated Privacy Policy on our website.</p>
                  <!-- contents -->
                </div>
              </div>
              <div class="flex items-center mt-10">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-5 w-5 text-blue-600 mr-2"
                  @change="toggleContinueButton">
                <label for="myCheckbox" class="mar">I have read and agreed to the above Privacy Policy Agreement</label>
              </div>

              <div class="text-center mt-5">
                <button type="submit" class="disabled:bg-gray-600 px-4 py-2 text-white bg-blue-600 rounded-md"
                  @click="openSignUpModal" :disabled="!checkboxChecked">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Sign Up Modal -->
      <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="signup" style="width: 60%;">
              <div class="mb-5">
                <div class="flex items-center mb-4">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Sign Up(Tourist)</h2>
                </div>
              </div>
              <!-- Firstname -->
              <div class="relative flex items-center mb-4">
                <label for="username" class="block text-gray-700" style="margin-right: 35px;">Firstname</label>
                <div class="relative flex-grow">
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <!-- Lastname -->
              <div class="relative flex items-center mb-4">
                <label for="lastname" class="block text-gray-700" style="margin-right: 36px;">Lastname</label>
                <div class="relative flex-grow">
                  <input type="text" id="lastname" v-model="lastname"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="relative flex items-center mb-4">
                <!-- E-mail Address -->
                <label for="email" class="block text-gray-700" style="margin-right: 36px;">E-mail Address</label>
                <div class="relative flex flex-grow mr-2">
                  <input type="text" id="email" v-model="email"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    style="padding-right:30px;">
                </div>
                <!-- Phone Number -->
                <label for="pnum" class="block mr-3 text-gray-700">Phone Number</label>
                <div class="relative flex flex-grow">
                  <input type="text" id="pnum" v-model="pnum"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="relative flex items-center mb-4">
                <!-- Citizenship -->
                <label for="citizenship" class="block text-gray-700" style="margin-right: 27px;">Citizenship</label>
                <div class="relative flex flex-grow mr-2">
                  <input type="text" id="citizenship" v-model="citizenship"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    tyle="padding-right:40px;">
                </div>
                <!-- Gender -->
                <label for="gender" class="block mr-3 text-gray-700">Gender</label>
                <div class="relative flex flex-grow">
                  <input type="text" id="gender" v-model="gender"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    style="padding-left:0px;">
                </div>
              </div>
              <!-- Password -->
              <div class="relative flex items-center mb-4">
                <label for="password" class="block text-gray-700" style="margin-right: 36px;">Password</label>
                <div class="relative flex-grow">
                  <input type="text" id="password" v-model="password"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <!-- Confirm your passsword -->
              <div class="relative flex items-center mb-4">
                <label for="rePassword" class="block mr-3 text-gray-700">Confirm your <br> passsword</label>
                <div class="relative flex-grow">
                  <input type="text" id="rePassword" v-model="rePassword"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Forgot Modal -->
      <div v-if="showForgotModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 30%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Change Password</h2>
                </div>
                <p class="mb-5">Enter your email to receive an OTP for access to changing passoword</p>
                <div class="relative mb-2">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                      style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email"
                      class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button @click="toggleshowOTP" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-if="showOTP" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30"
        @click="closeOTP">
        <!-- Modal Content -->
        <div class="relative flex justify-end">
          <button class=" pr-4 pt-21 ">
            <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
              stroke="black" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto w-full max-w-3xl rounded-2xl">
          <div class="mx-auto flex w-full max-w-3xl flex-col">
            <button class="relative flex pr-4 pt-10 justify-end">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="flex flex-col items-center justify-center text-center pt-5">
              <div class="font-semibold text-3xl">
                <p>Enter One-Time Password to verify your account</p>
              </div>
              <div class="flex flex-row text-lg font-medium text-black pb-12">
                <p>An OTP has been sent to your email for changing your password</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div class="flex flex-col space-y-10">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                  </div>

                  <div class="flex flex-col space-y-4 items-center justify-center">
                    <div>
                      <button
                        class="flex items-center justify-center font-semibold text-xl text-center w-[28rem] border rounded-xl outline-none py-3 bg-blue-700 border-none text-white"
                        @click="closeOTP">
                        Verify
                      </button>
                    </div>

                    <div
                      class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-black">
                      <p>Didn't receive code?</p> <a class="flex flex-row items-center font-medium text-blue-600"
                        href="http://" target="_blank" rel="noopener noreferrer">Resend code</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isCategoryPath($route.path)"
        class="hidden lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-6 lg:pl-10 lg:pr-10 lg:pt-2 lg:pb-2 lg:justify-center lg:text-black lg:bg-white lg:border-t ">
        <!-- Location 1 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-l-lg"
          :class="['location-card', locations[0].attrib, { 'active-effect': isActive(locations[0].link) }]">
          <RouterLink :to="locations[0].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[0].imgSrc" :alt="locations[0].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[0].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[0].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 2 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[1].attrib, { 'active-effect': isActive(locations[1].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[1].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[1].imgSrc" :alt="locations[1].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[1].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[1].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 3 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[2].attrib, { 'active-effect': isActive(locations[2].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[2].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[2].imgSrc" :alt="locations[2].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[2].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[2].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 4 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[3].attrib, { 'active-effect': isActive(locations[3].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[3].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[3].imgSrc" :alt="locations[3].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[3].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[3].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 5 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[4].attrib, { 'active-effect': isActive(locations[4].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[4].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[4].imgSrc" :alt="locations[4].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[4].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[4].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 6 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-r-lg"
          :class="['location-card', locations[5].attrib, { 'active-effect': isActive(locations[5].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[5].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[5].imgSrc" :alt="locations[5].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[5].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[5].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Repeat the above structure for each location, changing the indices accordingly -->
      </div>
    </div>
    <div class="lg:hidden">
      <!-- Login Modal -->
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center bottom' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full m-10">
            <div class="mb-5">
              <h2 class="text-2xl font-bold">Welcome!</h2>
              <p>Please log in to your account.</p>
            </div>
            <form @submit.prevent="login" style="width: 40%;">

              <div class="relative mb-4 w-full md:w-365">
                <label for="username" class="block text-gray-700">Enter Username</label>
                <div class="relative">
                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-2"
                    style="width: 15px;" alt="Username Icon" />
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 pl-10 border border-black rounded md:rounded-lg" placeholder="Username">
                </div>
              </div>
              <div class="relative mb-4 w-full md:w-365">
                <label for="username" class="block text-gray-700">Enter Password</label>
                <div class="relative">

                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-2"
                    style="width: 15px;" alt="Username Icon" />
                  <img src="@/assets/images/Modal/view.png" class="absolute inset-y-0 right-0 mx-3 my-2"
                    style="width: 15px;" alt="Eye Icon" />
                  <!-- <img src="@/assets/images/Modal/hidden.png" class="absolute inset-y-0 right-0 mx-3 my-2" style="width: 15px;" alt="Eye Icon" /> -->
                  <input type="password" id="password" v-model="password"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="Password">
                </div>
              </div>
              <div class="flex justify-between mb-4">
                <!-- <p>Don't have an account? <button @click="openSignUpModal" class="text-blue-600">Sign Up</button></p> -->
                <p>Don't have an account? <button @click="openPrivacyModal" class="text-blue-600">Sign Up</button></p>
                <button @click="openForgotModal" class="text-blue-600">Forgot Password?</button>
              </div>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-if="showPrivacyModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex justify-center items-center">
            <img src="@/assets/images/Header/makati_logo.png" alt="banner"
              class="w-8 h-auto mr-3 md:block md:w-16 md:h-auto">
            <img src="@/assets/images/Header/makaturismo.png" alt="logo" class="w-auto h-10 md:w-24 md:h-auto">
          </div>
          <div class="flex items-center">
            <button @click="openLoginModal" class="text-blue-600">
              <img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt="" class="my-2 mr-2">
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start h-full">
            <form @submit.prevent="signup" class="w-[100%] px-10">
              <div class="mb-5">

              </div>
              <!-- make it scrollable -->
              <div class="flex justify-start overflow-y-auto h-[200px] w-[100%] hidden-scrollbar mb-2">
                <div class="flex flex-col ">
                  <p class="font-bold text-center font text-3xl mb-5">Privacy Policy</p>
                  <p class="font-bold mb-5">Collection of Personal Information:</p>
                  <p class="mb-5">We may collect personal information from you when you interact with our website,
                    products,
                    or services. This information may include but is not limited to your name, email address, mailing
                    address, phone number, and payment details. We collect this information to provide you with our
                    services and to improve and customize your experience with us.</p>
                  <p class="font-bold mb-5">Use of Personal Information:</p>
                  <p class="mb-5">We use the personal information we collect for various purposes, including:</p>
                  <p class="mb-5">1. Providing and personalizing our services <br>
                    2. Processing transactions <br>
                    3. Communicating with you <br>
                    4. Improving our products and services <br>
                    5. Marketing and promotional purposes <br>
                    6. Complying with legal obligations</p>

                  <p class="mb-5">Protection of Personal Information:</p>


                  <p class="mb-5">We take the security of your personal information seriously and have implemented
                    appropriate measures
                    to protect it from unauthorized access, disclosure, alteration, or destruction. However, please note
                    that no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.</p>

                  <p class="font-bold mb-5">Sharing of Personal Information:</p>

                  <p class="mb-5">We may share your personal information with third-party service providers who assist
                    us in providing
                    our services, conducting our business, or servicing you. We may also share your information when
                    required by law or to protect our rights, property, or safety.</p>

                  <p class="font-bold mb-5">Your Rights:</p>

                  <p class="mb-5">You have the right to access, update, or delete your personal information. You may
                    also have the right
                    to object to or restrict certain types of processing. If you would like to exercise any of these
                    rights, please contact us using the information provided below.</p>

                  <p class="font-bold mb-5">Changes to this Privacy Policy:</p>

                  <p class="mb-5">We reserve the right to update or modify this Privacy Policy at any time. Any changes
                    will be
                    effective immediately upon posting the updated Privacy Policy on our website.</p>
                  <!-- contents -->
                </div>
              </div>
              <div class="flex items-center mt-10">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-5 w-5 text-blue-600 mr-2"
                  @change="toggleContinueButton">
                <label for="myCheckbox" class="mar">I have read and agreed to the above Privacy Policy Agreement</label>
              </div>

              <div class="text-center mt-5">
                <button type="submit" class="disabled:bg-gray-600 px-4 py-2 text-white bg-blue-600 rounded-md"
                  @click="openSignUpModal" :disabled="!checkboxChecked">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Sign Up Modal -->
      <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="signup" style="width: 60%;">
              <div class="mb-5">
                <div class="flex items-center mb-4">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Sign Up(Tourist)</h2>
                </div>
              </div>
              <!-- Firstname -->
              <div class="relative flex items-center mb-4">
                <label for="username" class="block text-gray-700" style="margin-right: 35px;">Firstname</label>
                <div class="relative flex-grow">
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <!-- Lastname -->
              <div class="relative flex items-center mb-4">
                <label for="lastname" class="block text-gray-700" style="margin-right: 36px;">Lastname</label>
                <div class="relative flex-grow">
                  <input type="text" id="lastname" v-model="lastname"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="relative flex items-center mb-4">
                <!-- E-mail Address -->
                <label for="email" class="block text-gray-700" style="margin-right: 36px;">E-mail Address</label>
                <div class="relative flex flex-grow mr-2">
                  <input type="text" id="email" v-model="email"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    style="padding-right:30px;">
                </div>
                <!-- Phone Number -->
                <label for="pnum" class="block mr-3 text-gray-700">Phone Number</label>
                <div class="relative flex flex-grow">
                  <input type="text" id="pnum" v-model="pnum"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="relative flex items-center mb-4">
                <!-- Citizenship -->
                <label for="citizenship" class="block text-gray-700" style="margin-right: 27px;">Citizenship</label>
                <div class="relative flex flex-grow mr-2">
                  <input type="text" id="citizenship" v-model="citizenship"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    tyle="padding-right:40px;">
                </div>
                <!-- Gender -->
                <label for="gender" class="block mr-3 text-gray-700">Gender</label>
                <div class="relative flex flex-grow">
                  <input type="text" id="gender" v-model="gender"
                    class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder=""
                    style="padding-left:0px;">
                </div>
              </div>
              <!-- Password -->
              <div class="relative flex items-center mb-4">
                <label for="password" class="block text-gray-700" style="margin-right: 36px;">Password</label>
                <div class="relative flex-grow">
                  <input type="text" id="password" v-model="password"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <!-- Confirm your passsword -->
              <div class="relative flex items-center mb-4">
                <label for="rePassword" class="block mr-3 text-gray-700">Confirm your <br> passsword</label>
                <div class="relative flex-grow">
                  <input type="text" id="rePassword" v-model="rePassword"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
                </div>
              </div>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Forgot Modal -->
      <div v-if="showForgotModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class=" pr-4 pt-21 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 30%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Change Password</h2>
                </div>
                <p class="mb-5">Enter your email to receive an OTP for access to changing passoword</p>
                <div class="relative mb-2">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                      style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email"
                      class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button @click="toggleshowOTP" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-if="showOTP" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30"
        @click="closeOTP">
        <!-- Modal Content -->
        <div class="relative flex justify-end">
          <button class=" pr-4 pt-21 ">
            <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
              stroke="black" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto w-full max-w-3xl rounded-2xl">
          <div class="mx-auto flex w-full max-w-3xl flex-col">
            <button class="relative flex pr-4 pt-10 justify-end">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="flex flex-col items-center justify-center text-center pt-5">
              <div class="font-semibold text-3xl">
                <p>Enter One-Time Password to verify your account</p>
              </div>
              <div class="flex flex-row text-lg font-medium text-black pb-12">
                <p>An OTP has been sent to your email for changing your password</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div class="flex flex-col space-y-10">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                    <div class="w-16 h-20 outline outline-2 rounded-xl">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text" name="" id="">
                    </div>
                  </div>

                  <div class="flex flex-col space-y-4 items-center justify-center">
                    <div>
                      <button
                        class="flex items-center justify-center font-semibold text-xl text-center w-[28rem] border rounded-xl outline-none py-3 bg-blue-700 border-none text-white"
                        @click="closeOTP">
                        Verify
                      </button>
                    </div>

                    <div
                      class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-black">
                      <p>Didn't receive code?</p> <a class="flex flex-row items-center font-medium text-blue-600"
                        href="http://" target="_blank" rel="noopener noreferrer">Resend code</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isCategoryPath($route.path)"
        class="hidden lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-6 lg:pl-10 lg:pr-10 lg:pt-2 lg:pb-2 lg:justify-center lg:text-black lg:bg-white lg:border-t ">
        <!-- Location 1 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-l-lg"
          :class="['location-card', locations[0].attrib, { 'active-effect': isActive(locations[0].link) }]">
          <RouterLink :to="locations[0].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[0].imgSrc" :alt="locations[0].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[0].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[0].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 2 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[1].attrib, { 'active-effect': isActive(locations[1].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[1].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[1].imgSrc" :alt="locations[1].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[1].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[1].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 3 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[2].attrib, { 'active-effect': isActive(locations[2].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[2].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[2].imgSrc" :alt="locations[2].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[2].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[2].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 4 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[3].attrib, { 'active-effect': isActive(locations[3].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[3].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[3].imgSrc" :alt="locations[3].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[3].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[3].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 5 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
          :class="['location-card', locations[4].attrib, { 'active-effect': isActive(locations[4].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[4].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[4].imgSrc" :alt="locations[4].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
          locations[4].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[4].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Location 6 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-r-lg"
          :class="['location-card', locations[5].attrib, { 'active-effect': isActive(locations[5].link) }]"
          style="margin: 0; width: 100%; height: auto;">
          <RouterLink :to="locations[5].link">
            <!-- Adjust height as needed -->
            <div class="flex items-center justify-center h-10">
              <img :src="locations[5].imgSrc" :alt="locations[5].alt" class="p-[26px]">
              <!-- Adjust height as needed -->
              <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                locations[5].mobile }}</span>
              <span class="font-bold text-1xl">{{ locations[5].mobile }}</span>
            </div>
          </RouterLink>
        </div>

        <!-- Repeat the above structure for each location, changing the indices accordingly -->
      </div>
    </div>


  </nav>


</template>

<script>
import { RouterLink } from 'vue-router';
import imageUrl from '@/assets/images/Modal/Intersect.png';
import imageUrl2 from '@/assets/images/Modal/bg2.png';
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';


export default {
  name: 'NavBar',
  components: {
    RouterLink,
  },
  data() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      showForgotModal: false,
      showOtpModal: false,
      showOTP: false,
      showPrivacyModal: false,
      checkboxChecked: false,
      username: '',
      password: '',
      imageUrl: imageUrl,
      imageUrl2: imageUrl2,
      locations: [
        { imgSrc: run, alt: 'location1', attrib: 'hover:rounded-l-lg active:rounded-l-lg', title: 'What to DO', mobile: 'Do', link: '/category/do' },
        { imgSrc: grocery, alt: 'location2', attrib: '', title: 'Where to SHOP', mobile: 'Shop', link: '/category/shop' },
        { imgSrc: binoculars, alt: 'location3', attrib: '', title: 'What to SEE', mobile: 'See', link: '/category/see' },
        { imgSrc: food, alt: 'location4', attrib: '', title: 'Where to EAT', mobile: 'Eat', link: '/category/eat' },
        { imgSrc: house, alt: 'location5', attrib: '', title: 'Where to STAY', mobile: 'Stay', link: '/category/stay' },
        { imgSrc: locationImg, alt: 'location6', attrib: 'hover:rounded-r-lg active:rounded-r-lg', title: 'Make TOUR', mobile: 'Tour', link: '/category/tour' }
        // Add more locations as needed
      ],
      currentRoute: ''
    };
  },
  created() {
    // Watch for route changes
    this.$watch(
      () => this.$route.path,
      newPath => {
        // Check if the new path starts with '/category/' and has exactly two segments
        if (newPath.startsWith('/category/') && newPath.split('/').length === 3) {
          console.log('active');
          this.currentRoute = newPath;
        }
      }
    );
  },

  methods: {
    isCategoryPath(path) {
      return path.startsWith('/category/') && path.split('/').length === 3;
    },
    isActive(link) {
      // Check if the current route contains the provided link

      return this.currentRoute.includes(link);
    },
    toggleContinueButton(event) {
      this.checkboxChecked = event.target.checked;
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    openSignUpModal() {
      this.showSignUpModal = true;
      this.showPrivacyModal = false;
    },
    openForgotModal() {
      this.showForgotModal = true;
    },
    openPrivacyModal() {
      this.showPrivacyModal = true;
    },
    openOtpModal() {
      this.showOtpModal = true;
    },
    toggleshowOTP() {
      this.showForgotModal = true;
      this.showOTP = true;
    },
    closeOTP() {
      this.showOTP = false;
      this.showLoginModal = false;
      this.showSignUpModal = false;
      this.showPrivacyModal = false;
      this.showForgotModal = false;
      this.showOtpModal = false;
    },
    login() {
      // Your login logic here
      console.log('Logging in...');
      // After successful login, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.username = '';
      this.password = '';
      this.showLoginModal = false;
    },
    signup() {
      // Your sign-up logic here
      console.log('Signing up...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showSignUpModal = false;
    },
    forgot() {
      // Your sign-up logic here
      console.log('Forgot...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showForgotModal = false;
    },
    otp() {
      // Your sign-up logic here
      console.log('...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showOtpModal = false;
    }
  }
};
</script>

<style scoped>
.bg-img {
  background-size: 300px 500px;
}

.swiper-container {
  height: 100%;
}

.active-effect img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.active-effect span {
  color: white;
}

.active-effect {
  background-color: #008EE4;
  color: white;
}

.active-effect-left {
  background-color: #008EE4;
  color: white;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.location-card {
  padding: 2px;
  margin: 0;
  text-align: center;
}

.location-card img {
  width: 30%;
  height: auto;
}

.location-card:hover {
  background-color: #008EE4;
  /* Set your desired background color on hover */
  transition: filter 0.3s ease;
}

.location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.location-card h6 {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: black;
  /* Set your desired text color */
}

.location-card:hover span {
  color: white;
  /* Set your desired text color on hover */
  transition: filter 0.3s ease;
}


.m-location-card {
  width: auto;
  padding: 4px;
  margin: 0;
  text-align: center;
}

.m-location-card img {
  width: 40%;
  height: auto;
}

.m-location-card:hover {
  background-color: #008EE4;
  /* Set your desired background color on hover */
  transition: filter 0.3s ease;
}

.m-location-card:hover img {
  filter: invert(1);
  transition: filter 0.3s ease;
}

.m-location-card h6 {
  font-size: 12px;
  color: black;
  /* Set your desired text color */
}

.m-location-card:hover h6 {
  color: white;
  /* Set your desired text color on hover */
  transition: filter 0.3s ease;
}

.z-neg-1 {
  z-index: -1;
}

.hidden-scrollbar {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.hidden-scrollbar::-webkit-scrollbar {
  width: 0;
  /* WebKit */
  height: 0;
}

.hidden-scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* WebKit */
}
</style>