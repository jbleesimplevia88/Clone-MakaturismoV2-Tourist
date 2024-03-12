<template>
  <nav class="fixed top-0 z-10 w-full">
    <div class="flex items-center justify-between w-full px-4 py-2 bg-white shadow md:px-20">
      <!-- Left side - Logo -->
      <div class="flex items-center">
        <RouterLink to="/" class="flex items-center">
          <img src="@/assets/images/Header/makati_logo.png" alt="banner"
            class="hidden w-8 h-auto mr-3 md:block md:w-16 md:h-auto">
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
      </div>
      <!-- Login Modal -->
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center bottom' }">
          <!-- Modal Content -->
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <div class="mb-5">
              <h2 class="text-2xl font-bold">Welcome!</h2>
              <p>Please log in to your account.</p>
            </div>
            <form @submit.prevent="login" style="width: 40%;">
              <div class="relative mb-4">
                <label for="username" class="block text-gray-700">Enter Username</label>
                <div class="relative">
                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-2"
                    style="width: 15px;" alt="Username Icon" />
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 pl-10 border border-black rounded-md" placeholder="Username">
                </div>
              </div>
              <div class="relative mb-4">
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
                <p>Don't have an account? <button @click="openSignUpModal" class="text-blue-600">Sign Up</button></p>
                <button @click="openForgotModal" class="text-blue-600">Forgot Password?</button>
              </div>
              <label class="">
                <input type="radio" name="partnerType" value="regular"> Become a partner
              </label>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Login</button>
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
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="signup" style="width: 60%;">
              <div class="mb-5">
                <div class="flex items-center mb-4">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Sign Up(Tourist)</h2>
                  <input type="radio" name="partnerType" value="regular" class="m-2"> Become a partner
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
              <div class="flex flex-col justify-center items-start mx-[11rem]">
                        <div class="flex justify-center gap-2">
                            <input class="mt-11 rounded-2xl border-black h-5 w-5" id="checkbox" type="checkbox"
                                v-model="acceptTerms">
                            <p class="font-bold text-baseline pt-1  text-black">By using MAKATURISMO, you signify your
                                agreement
                                to these</p>
                            <p class="font-bold text-baseline pt-1 text-blue-600 no-underline hover:underline"
                                @click="toggleshowTC">terms
                                and conditions.</p>
                        </div>

                    </div>
              <div class="mt-10 text-center">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '75%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="signup" style="width: 60%;">
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
              <div class="flex flex-col justify-center items-start mx-[11rem]">
                        <div class="flex justify-center gap-2">
                            <input class="mt-11 rounded-2xl border-black h-5 w-5" id="checkbox" type="checkbox"
                                v-model="acceptTerms">
                            <p class="font-bold text-baseline pt-1  text-black">By using MAKATURISMO, you signify your
                                agreement
                                to these</p>
                            <p class="font-bold text-baseline pt-1 text-blue-600 no-underline hover:underline"
                                @click="toggleshowTC">terms
                                and conditions.</p>
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
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 30%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Change Password</h2>
                </div>
                <p class="mb-20">Enter your email to receive an OTP for access to changing passoword</p>
                <div class="relative mb-4">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                      style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email"
                      class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="mt-10 text-center">
                <button @click="toggleShowOTP" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- OTP Modal -->
      <div v-if="showForgotModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-8 bg-white"
          :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover' }">
          <!-- Modal Content -->
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 60%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Enter One-Time Password to verify your account</h2>
                </div>
                <p class="">An OTP has been sent to your email for changing your password</p>
                <div class="relative mb-4">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                      style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email"
                      class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="mt-10 text-center">
                <button @click="toggleshowOTP" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showOTP" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30"
            @click="closeOTP">
            <!-- Modal Content -->
            <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto w-full max-w-3xl rounded-2xl">
                <div class="mx-auto flex w-full max-w-3xl flex-col">
                    <button class="relative flex pr-4 pt-10 justify-end">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
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
                                        <p>Didn't receive code?</p> <a
                                            class="flex flex-row items-center font-medium text-blue-600" href="http://"
                                            target="_blank" rel="noopener noreferrer">Resend code</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        

        <div v-if="showTC" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30"
            @click="closeTC">
            <!-- Modal Content -->

            <div
                class="relative p-10 pb-10 w-full max-w-6xl max-h-[90%] bg-gradient-to-b from-blue-500 to-white rounded-xl overflow-y-auto hidden-scrollbar">
                <div class="relative flex justify-end">
                    <button class=" pr-4 pt-21 ">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h1 class="font-bold text-xl text-center pt-3 pb-7">Terms and Conditions</h1>

                <div class="relative bg-white px-5 pb-7 shadow-xl mx-auto w-full max-w-4xl rounded-2xl ">
                    <div class="flex justify-start px-12 ">
                        <div class="flex justify-start flex-col">
                            <p class="text-lg pb-[5rem] pt-12">Welcome to <b>MAKATURISMO,</b> a local tourism website that connects users, businesses, advertisers, and showcases various products and services. By accessing and using this website, you agree to comply with the following terms and conditions:</p>
                            <p class="text-lg" style="line-height: 3;"> <b> 1. Acceptance of Terms:</b>
                              By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using this website.
                            </p>
                            <p class="text-lg" style="line-height: 3;"> <b> 2. User Accounts:</b> </p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. To access certain features on the website, you may be required to create a user account. You must provide accurate and complete information during the registration process.</li>
                                <li class="text-lg" style="line-height: 3;">b. You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account.</li>
                                <li class="text-lg" style="line-height: 3;">c. You are solely responsible for all activities conducted through your account, and you must notify us immediately of any unauthorized use or security breach.</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b> 3. User Responsibilities:</b> </p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. Users must be at least 18 years old or have parental consent to use this website.</li>
                                <li class="text-lg" style="line-height: 3;">b. Users shall not engage in any illegal, abusive, defamatory, or harmful activities while using the website.</li>
                                <li class="text-lg" style="line-height: 3;">c. Users must respect the intellectual property rights of others, including businesses and advertisers featured on the website.</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b> 4. Businesses and Advertisers:</b> </p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. Businesses and advertisers must provide accurate and up-to-date information about their products and services.</li>
                                <li class="text-lg" style="line-height: 3;">b. We reserve the right to approve or reject business listings and advertisements based on our guidelines and policies.</li>
                                <li class="text-lg" style="line-height: 3;">c. Businesses and advertisers must comply with all applicable laws and regulations.</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>5. Products and Services:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. The website may feature products and services from various businesses. We do not endorse or guarantee the quality of these products and services.</li>
                                <li class="text-lg" style="line-height: 3;">b. Users are solely responsible for any transactions or interactions they enter into with businesses through this website.</li>
                                <li class="text-lg" style="line-height: 3;">c. We are not liable for any losses, damages, or disputes arising from transactions between users and businesses.</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>6. Content Submission:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. Users may submit content to the website, such as reviews, comments, or images. By doing so, you grant us the right to use, modify, and display the content on the website.</li>
                                <li class="text-lg" style="line-height: 3;">b. Users must not submit content that is unlawful, defamatory, or infringes upon the rights of others</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>7. Intellectual Property:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. All content and materials on this website, including logos, trademarks, text, images, and software, are the property of Love Laguna or its licensors and are protected by intellectual property laws.</li>
                                <li class="text-lg" style="line-height: 3;">b. Users must not use, reproduce, or distribute any content from this website without obtaining proper authorization.</li>    
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>8. Disclaimer of Liability:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. The website and its content are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the information provided.</li>
                                <li class="text-lg" style="line-height: 3;">b. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the website or its content.</li>   
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>9. Modification and Termination:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. We reserve the right to modify or terminate the website and these terms and conditions at any time without prior notice.</li>
                                <li class="text-lg" style="line-height: 3;">b. Continued use of the website after any changes to the terms constitutes your acceptance of the revised terms.</li>   
                            </ul>
                            <p class="text-lg" style="line-height: 3;"> <b>10. Governing Law and Jurisdiction:</b></p>
                            <ul class="pl-3">
                                <li class="text-lg" style="line-height: 3;">a. These terms and conditions shall be governed by and construed in accordance with the laws of the Philippines.</li>
                                <li class="text-lg" style="line-height: 3;">b. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in the Philippines.</li>   
                            </ul>
                            
                        </div>



                    </div>
                </div>

            </div>
        </div>
    <div class="inset-x-0 bottom-0 grid grid-cols-6 pl-10 pr-10 pt-2 pb-2 justify-center text-black bg-white border-t">
      <div v-for="(item, index) in locations" :key="index"
        class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center"
        :class="`location-card ${item.attrib}`" style="margin: 0; width: 100%; height: auto;">
        <RouterLink :to="item.link">
          <!-- Adjust height as needed -->
          <div class="flex items-center justify-center h-10">
            <img :src="item.imgSrc" :alt="item.alt" class="p-[26px]">
            <!-- Adjust height as needed -->
            <h6 class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{ item.mobile }}</h6>
            <h6 class="font-bold text-1xl">{{ item.mobile }}</h6>
          </div>
        </RouterLink>
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
      showTC: false,
      showOTP: false,
      showLoginModal: false,
      showSignUpModal: false,
      showForgotModal: false,
      showOtpModal: false,
      username: '',
      password: '',
      imageUrl: imageUrl,
      imageUrl2: imageUrl2,
      locations: [
        { imgSrc: run, alt: 'location1', attrib: 'hover:rounded-l-lg', title: 'What to DO', mobile: 'Do', link: 'do' },
        { imgSrc: grocery, alt: 'location2', attrib: '', title: 'Where to SHOP', mobile: 'Shop', link: 'shop' },
        { imgSrc: binoculars, alt: 'location3', attrib: '', title: 'What to SEE', mobile: 'See', link: 'see' },
        { imgSrc: food, alt: 'location4', attrib: '', title: 'Where to EAT', mobile: 'Eat', link: 'eat' },
        { imgSrc: house, alt: 'location5', attrib: '', title: 'Where to STAY', mobile: 'Stay', link: 'stay' },
        { imgSrc: locationImg, alt: 'location6', attrib: 'hover:rounded-r-lg', title: 'Make TOUR', mobile: 'Tour', link: 'tour' }
        // Add more locations as needed
      ],
    };
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true;
    },
    openSignUpModal() {
      this.showSignUpModal = true;
    },
    openForgotModal() {
      this.showForgotModal = true;
    },
    openOtpModal() {
      this.showOtpModal = true;
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
    },
    toggleshowOTP() {
            this.showLogin = false;
            this.showForgotPassword = false;
            this.showOTP = !this.showOTP;
        },
        toggleshowTC() {
            this.showTC = !this.showTC;
        },
        closeOTP() {
            this.showOTP = false;
        },
        closeTC() {
            this.showTC = false;
        },
  }
};
</script>

<style>
.bg-img {
  background-size: 300px 500px;
}

.swiper-container {
  height: 100%;
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

.location-card:hover h6 {
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
</style>
