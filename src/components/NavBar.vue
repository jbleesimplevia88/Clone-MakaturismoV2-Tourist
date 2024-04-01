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
        <RouterLink to="/searchfilter" class=" lg:hidden flex items-center">
          <span
            class=" flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </RouterLink>

        <div class=" hidden lg:block relative  " ref="searchContainer">
          <input v-if="showInput" type="search"
            class=" relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2"
            ref="searchInput" />
          <span @click="toggleInputVisibility"
            class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2">

            <svg class="" v-show="!showInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="3" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>

        <RouterLink to="/calendar" class="hidden text-white md:inline-block"><img
            src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-6 mx-2"></RouterLink>
        <button @click="openLoginModal" class="text-blue-600">Login</button>
        <RouterLink to="/calendar" class="hidden text-white md:inline-block"></RouterLink>
        <a class="hidden lg:block lg:bg-blue-500 lg:hover:bg-blue-700 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:border lg:border-blue-700 lg:rounded-lg"
          href="#">Become a partner</a>
      </div>

    </div>

      <!-- Login Modal -->
      <div v-if="showLoginModal" class=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative bg-white lg:w-[70vw] w-[90vw] h-[30rem] rounded-3xl">
          <img src="@/assets/images/Modal/Intersect.png" alt="" class="w-full absolute rounded-t-xl">

          <!-- Modal Content -->
           <div class="relative top-0 flex justify-end">
            <button class="absolute  pr-4 pt-4">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="relative z-10 flex flex-col items-start justify-center h-full lg:mt-12 mt-8 lg:ml-[6%] m-8">
            <div class="mb-5">
              <h2 class="text-2xl lg:text-3xl font-bold">Welcome!</h2>
              <p class="text-xs lg:text-sm">Please log in to your account.</p>
            </div>

          <form @submit.prevent="login" class=" lg:w-[40%] md:w-[40%] w-full mr-8">
           <div class="relative mb-4 w-full md:w-365">
                <label for="username" class="block text-gray-700">Enter Username</label>
                <div class="relative ">
                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-3"
                    style="width: 15px;" alt="Username Icon" />
                  <input type="text" id="username" v-model="username"
                    class="w-full h-8 py-5 pl-10 border border-black rounded-xl" placeholder="Username">
                </div>
              </div>
              <div class="relative mb-4">
                <label for="username" class="w-full text-gray-700">Enter Password</label>
                <div class="relative w-full">
                  <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-3"
                  style="width: 15px;" alt="Username Icon" />
                  <img src="@/assets/images/Modal/view.png" class="absolute inset-y-0 right-0 mx-3 my-3"
                  style="width: 15px;" alt="Eye Icon" />
                  <input type="password" id="password" v-model="password"
                    class="w-full h-8 py-5 pl-10 border border-black rounded-xl" placeholder="Password">
                </div>
              </div>
              <div class="hidden lg:block lg:flex items-center justify-between mb-4">
                <p class="text-xs">Don't have an account? <button @click="openPrivacyModal" class="text-xs font-bold text-blue-600">Sign Up</button></p>
                <button @click="openForgotModal" class="text-xs text-blue-600 font-bold">Forgot Password?</button>
              </div>
              <div class="hidden lg:block lg:mt-10 text-center">
                <button type="submit" class="lg:w-[8rem] w-full lg:px-4 py-2 lg:mb-10 text-white bg-blue-600 rounded-md">Login</button>
              </div>
              <div class="lg:hidden lg:mt-10 text-center">
                <button type="submit" class="lg:w-[8rem] w-full lg:px-4 py-2 lg:mb-10 text-white bg-blue-600 rounded-md">Login</button>
                <button @click="openForgotModal" class="text-xs text-blue-600 mt-1">Forgot Password?</button>
                <button @click="openPrivacyModal" class="w-full mt-8 py-2 border border-blue-400 text-blue-600 bg-white rounded-md">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-if="showPrivacyModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-7 bg-white w-[90%] lg:w-[75%] lg:h-[65%] rounded-xl">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class="absolute ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-auto h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="flex justify-center items-center">
            <img src="@/assets/images/Header/makati_logo.png" alt="logo" class="w-auto h-8 mr-3 md:block md:w-auto md:h-10">
            <img src="@/assets/images/Header/makaturismo.png" alt="banner" class="w-auto h-8 md:w-auto md:h-8">
          </div>

          <div class="flex items-center">
            <button @click="openLoginModal" class="text-blue-600">
              <img src="@/assets/images/Header/back.svg" alt="backBtn" class="h-4 lg:h-5 w-auto ml-4 lg:ml-8 mr-2">
            </button>
          </div>
          
          <div class="relative z-10 flex flex-col items-center h-full">
            <form @submit.prevent="signup" class="w-[85%] lg:px-10 px-2 lg:mt-0 mt-5">
              <!-- <div class="mb-5">

              </div> -->
              <!-- make it scrollable -->
              <div class="flex justify-between overflow-y-auto h-[230px] w-[100%] hidden-scrollbar mb-2">
                <div class="flex flex-col">
                  <p class="font-bold text-center text-2xl lg:text-3xl mb-5">Privacy Policy</p>
                  <p class="font-bold mb-5">Collection of Personal Information:</p>
                  <p class="mb-5 text-sm text-justify">We may collect personal information from you when you interact with our website,
                    products, or services. This information may include but is not limited to your name, email address, mailing
                    address, phone number, and payment details. We collect this information to provide you with our
                    services and to improve and customize your experience with us.</p>
                  <p class="font-bold mb-5">Use of Personal Information:</p>
                  <p class="mb-5 text-sm text-justify">We use the personal information we collect for various purposes, including:</p>
                  <p class="mb-5 text-sm">1. Providing and personalizing our services <br>
                    2. Processing transactions <br>
                    3. Communicating with you <br>
                    4. Improving our products and services <br>
                    5. Marketing and promotional purposes <br>
                    6. Complying with legal obligations</p>

                  <p class="font-bold mb-5">Protection of Personal Information:</p>


                  <p class="mb-5 text-sm text-justify">We take the security of your personal information seriously and have implemented
                    appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, please note
                    that no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.</p>

                  <p class="font-bold mb-5">Sharing of Personal Information:</p>

                  <p class="mb-5 text-sm text-justify">We may share your personal information with third-party service providers who assist
                    us in providing our services, conducting our business, or servicing you. We may also share your information when
                    required by law or to protect our rights, property, or safety.</p>

                  <p class="font-bold mb-5">Your Rights:</p>

                  <p class="mb-5 text-sm text-justify">You have the right to access, update, or delete your personal information. You may
                    also have the right to object to or restrict certain types of processing. If you would like to exercise any of these
                    rights, please contact us using the information provided below.</p>

                  <p class="font-bold mb-5">Changes to this Privacy Policy:</p>

                  <p class="mb-5 text-sm text-justify">We reserve the right to update or modify this Privacy Policy at any time. Any changes
                    will be effective immediately upon posting the updated Privacy Policy on our website.</p>
                  <!-- contents -->
                </div>
              </div>
             <div>
              <div class="flex items-center mt-10">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-5 w-5 text-blue-600 mr-2"  v-model="checkboxChecked">
                <label for="myCheckbox" class="mar">I have read and agreed to the above Privacy Policy Agreement</label>
              </div>

              <div class="text-center mt-5">
                <button type="submit" class="disabled:bg-blue-400 lg:w-[50%] w-full px-4 py-4 text-white bg-blue-600 rounded-md"
                  @click="openSignUpModal" :disabled="!checkboxChecked" >Continue</button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Sign Up Modal -->
      <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative pr-8 pt-8 bg-white lg:w-3/4 w-11/12 lg:h-3/4 h-[75%] rounded-xl">
          <img src="@/assets/images/Modal/bg2.png" alt="" class=" bottom-0 right-0 lg:w-[50%] absolute rounded-tr-xl rounded-br-xl lg:h-full ">

          <!-- Modal Content -->
          <div class="relative top-0 flex justify-end">
            <button class="absolute lg:pr-4 lg:pt-4 ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="lg:ml-[5rem] ml-8 my-5">
            <div class="flex items-center">
              <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                  style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
              <h2 class="text-4xl font-bold">Sign Up</h2>
            </div>
          </div>
          
          <div class="relative z-10 flex flex-col items-start justify-center lg:h-full">
            <form @submit.prevent="signup" class="lg:w-[62%] lg:mx-[5rem] mb-8 ml-8 text-sm lg:h-full h-[55vh] font-bold" style="overflow-y: auto;">
              
              <div class="w-full grid grid-cols-1 lg:grid-cols-2" >
                <!-- Firstname -->
                <div class="lg:flex items-center mb-3">
                    <label for="username" class="w-[7rem] block mb-2 mr-5 ">First Name:</label>
                    <input id="username" type="text" v-model="username" placeholder="Enter First Name" class="border border-gray-500 rounded-xl w-full py-3 px-3">
                </div>
                <!-- Middlename -->
                <div class="lg:inline-flex lg:flex items-center mb-3">
                    <label for="username" class="w-[7rem] block lg:ml-2">Middle Initial:</label>
                    <input id="username" type="text" v-model="username" placeholder="Enter Middle Initia" class="border border-gray-500 rounded-xl w-full py-3 px-3">
                </div>
              </div>
              <!-- Lastname -->
              <div class="lg:flex items-center mb-3">
                <label for="lastname" class="w-[7rem] block">Last Name:</label>
                <input id="lastname" type="text" v-model="lastname" placeholder="Enter Last Name" class="border border-gray-500 rounded-xl w-full py-3 px-3">
              </div>
              <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
                <!-- E-mail Address -->
                 <div class="lg:flex items-center mb-3">
                    <label for="email" class="w-[7rem] block mb-2 mr-5">Email Address:</label>
                    <input id="email" type="text" v-model="email" placeholder="Enter Email Address" class="border border-gray-500 rounded-xl w-full py-3 px-3">
                </div>
                <!-- Phone Number -->
                <div class="lg:flex items-center mb-3">
                    <label for="pnum" class="w-[7rem] block mb-2 lg:ml-2">Phone Number:</label>
                    <input id="pnum" type="text" v-model="pnum" placeholder="Enter Phone Number" class="border border-gray-500 rounded-xl w-full py-3 px-3">
                </div>
              </div>
              <div class="w-full grid lg:grid-cols-2 gap-2">
                <!-- Citizenship -->
                <div class="lg:flex items-center mb-3">
                  <label for="citizenship" class="w-[7rem] block mb-2 mr-3">Citizenship:</label>
                  <input id="citizenship" type="text" v-model="citizenship" placeholder="Citizenship" class="border border-gray-500 rounded-xl w-full py-3 px-3">
                </div>
                <!-- Gender -->
                <div class="lg:flex items-center mb-3">
                  <label for="gender" class="w-[7rem] block mb-2 lg:ml-2">Gender:</label>
                  <div class="relative w-full">
                    <select id="gender" v-model="gender" class="border border-gray-500 rounded-xl w-full py-3 px-3 pr-8 appearance-none cursor-pointer">
                      <option value="" disabled selected hidden>Choose gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Password -->
              <div class="lg:flex items-center mb-3">
                  <label for="password" class="w-[7rem] block ">Password:</label>
                  <input id="password" type="password" v-model="password" placeholder="Enter Password" class="border border-gray-500 rounded-xl w-full py-3 px-3">
              </div>
              <!-- Confirm your passsword -->
              <div class="lg:flex items-center mb-3">
                  <label for="rePassword" class="lg:w-[7rem] block">Confirm Password:</label>
                  <input id="rePassword" type="text" v-model="rePassword" placeholder="Confirm Password" class="border border-gray-500 rounded-xl w-full py-3 px-3">
              </div>
              <div class="lg:ml-[6rem]">
                <p class=" text-xs">By using MAKATURISMO, you signify your agreement to <button @click="openTermsModal" class="text-xs font-bold text-blue-600">Terms and Conditions</button></p>
                <button type="submit" class="w-full lg:w-[10rem] font-bold mt-3 px-4 py-3 text-white bg-blue-600 rounded-md">Sign Up</button>
                <!-- <button type="submit" class="lg:hidden w-full lg:w-[10rem] font-bold mt-3 px-4 py-3 bg-white text-blue-600 border border-blue-600 rounded-md">Login</button> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Terms and Condition Modal -->
      <div v-if="showTermsModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="relative p-7 bg-white w-[90%] lg:w-[75%] lg:h-[65%] rounded-xl">
          <!-- Modal Content -->
          <div class="relative flex justify-end">
            <button class="absolute ">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-auto h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex justify-center items-center">
            <img src="@/assets/images/Header/makati_logo.png" alt="logo" class="w-auto h-8 mr-3 md:block md:w-auto md:h-10">
            <img src="@/assets/images/Header/makaturismo.png" alt="banner" class="w-auto h-8 md:w-auto md:h-8">
          </div>
          <div class="flex items-center">
            <button @click="openSignUpModal" class="text-blue-600">
              <img src="@/assets/images/Header/back.svg" alt="backBtn" class="h-4 lg:h-5 w-auto ml-4 lg:ml-8 mr-2">
            </button>
          </div>
          
          <div class="relative z-10 flex flex-col items-center h-full">
            <form @submit.prevent="signup" class="w-[85%] lg:px-10 px-2 lg:mt-0 mt-5">
              <!-- make it scrollable -->
              <p class="font-bold text-center text-2xl lg:text-3xl mb-5">Terms and Conditions</p>

              <div class="flex justify-between overflow-y-auto h-[230px] w-[100%] hidden-scrollbar mb-2">
                <div class="flex flex-col">
                  <p class=" mb-5">Welcome to <span class="font-bold">MAKATURISMO</span>, a local tourism website that connects users, businesses, advertisers, and showcases various products and services. By accessing and using this website, you agree to comply with the following terms and conditions:</p>


                  <p class="font-bold ">1. Acceptance of Terms</p>
                  <p class="ml-4 mb-5 text-sm text-justify">By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using this website.</p>
                  
                  <p class="font-bold ">2. User Accounts:</p>
                  <p class="ml-4 text-sm text-justify">a. To access certain features on the website, you may be required to create a user account. You must provide accurate and complete information during the registration process.</p>
                  <p class="ml-4 text-sm text-justify">b. You are responsible for maintaining the confidentiality of your account credentials and ensuring the security of your account.</p>
                  <p class="ml-4 mb-5 text-sm text-justify">c. You are solely responsible for all activities conducted through your account, and you must notify us immediately of any unauthorized use or security breach.</p>

                  <p class="font-bold ">3. User Responsibilities:</p>
                  <p class="ml-4 text-sm text-justify">a. Users must be at least 18 years old or have parental consent to use this website.</p>
                  <p class="ml-4 text-sm text-justify">b.Users shall not engage in any illegal, abusive, defamatory, or harmful activities while using the website.</p>
                  <p class="ml-4 mb-5 text-sm text-justify">c. Users must respect the intellectual property rights of others, including businesses and advertisers featured on the website.</p>

                  <p class="font-bold ">4. Businesses and Advertisers:</p>
                  <p class="ml-4 text-sm text-justify">a. Businesses and advertisers must provide accurate and up-to-date information about their products and services.</p>
                  <p class="ml-4 text-sm text-justify">b. We reserve the right to approve or reject business listings and advertisements based on our guidelines and policies.</p>
                  <p class="ml-4 mb-5 text-sm text-justify">c. Businesses and advertisers must comply with all applicable laws and regulations.</p>

                  <p class="font-bold ">5. Products and Services:</p>
                  <p class="ml-4 text-sm text-justify">a. The website may feature products and services from various businesses. We do not endorse or guarantee the quality of these products and services.</p>
                  <p class="ml-4 text-sm text-justify">b. Users are solely responsible for any transactions or interactions they enter into with businesses through this website.</p>
                  <p class="ml-4 mb-5 text-sm text-justify">c. We are not liable for any losses, damages, or disputes arising from transactions between users and businesses.</p>

                  <p class="font-bold ">6. Content Submission:</p>
                  <p class="ml-4 text-sm text-justify">a. Users may submit content to the website, such as reviews, comments, or images. By doing so, you grant us the right to use, modify, and display the content on the website. </p>
                  <p class="ml-4 mb-5 text-sm text-justify">b. Users must not submit content that is unlawful, defamatory, or infringes upon the rights of others.</p>

                  <p class="font-bold ">7. Intellectual Property:</p>
                  <p class="ml-4 text-sm text-justify">a. All content and materials on this website, including logos, trademarks, text, images, and software, are the property of Love Laguna or its licensors and are protected by intellectual property laws. </p>
                  <p class="ml-4 mb-5 text-sm text-justify">b. Users must not use, reproduce, or distribute any content from this website without obtaining proper authorization.</p>

                  <p class="font-bold ">8. Disclaimer of Liability</p>
                  <p class="ml-4 text-sm text-justify">a. The website and its content are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the information provided. </p>
                  <p class="ml-4 mb-5 text-sm text-justify">b. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the website or its content</p>

                  <p class="font-bold ">9. Modification and Termination</p>
                  <p class="ml-4 text-sm text-justify">a. We reserve the right to modify or terminate the website and these terms and conditions at any time without prior notice </p>
                  <p class="ml-4 mb-5 text-sm text-justify">b. Continue use of the website after any changes to the terms constitutes your acceptance of the revised terms</p>

                  <p class="font-bold ">10. Governing Law and Jurisdiction</p>
                  <p class="ml-4 text-sm text-justify">a. These terms and conditions shall be governed by and construed in accordance with the laws of the Philippines </p>
                  <p class="ml-4 mb-5 text-sm text-justify">b. Any disputes arising from the use of the website shall be subject to the exclusive jurisdiction of the courts in the Philippines.</p>

                </div>
              </div>
            
              <div class="text-center mt-5">
                <button type="submit" class="lg:w-[50%] w-full px-4 py-4 text-white bg-blue-600 rounded-md"
                  @click="openSignUpModal" >Continue</button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <!-- Forgot Modal -->
      <div v-if="showForgotModal" class=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
       <div class="relative bg-white lg:w-[70vw] w-[90vw] h-[30rem] rounded-3xl">
          <img src="@/assets/images/Modal/Intersect.png" alt="" class="w-full absolute rounded-t-xl">

          <!-- Modal Content -->
           <div class="relative z-10 top-0 flex justify-end">
            <button class="absolute  pr-4 pt-4">
              <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
                stroke="black" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="relative z-5 flex flex-col items-start justify-center h-full lg:ml-12">
            <form @submit.prevent="forgot" class="lg:w-[35%] lg:mt-[10%] mt-[20%] mx-8 lg:mx-0 flex flex-col justify-between h-full">
              <div class="mb-5">
                <div class="flex items-center mb-12 w-[50%]">
                  <button @click="openLoginModal" class="hidden text-blue-600"><img src="@/assets/images/Modal/back.png"
                      style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="lg:text-4xl text-2xl font-bold lg:mb-[10%] mb-[18%]">Change Password</h2>
                </div>
                <p class="mb-5 text-sm">Enter your email to receive an OTP for access to changing passoword</p>
                <div class="relative mb-2">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                      style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email"
                      class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center text-center mb-[10%]">
                <!-- <button @click="openOTPModal" class="lg:w-fit w-full px-4 py-2 text-white bg-blue-600 rounded-lg ">Receive OTP</button> -->
                <p @click="openOTPModal" class="lg:w-fit w-full px-4 py-2 text-white bg-blue-600 rounded-lg  cursor-pointer ">Receive OTP</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    

     <!-- OTP -->
      <div v-if="showOTPModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <!-- Modal Content -->
      <div class="relative flex justify-end">
        <button class="absolute pr-4 pt-4 ">
          <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5"
            stroke="black" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
        
      <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto lg:w-full w-[90vw] h-fit max-w-3xl rounded-2xl">
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
            <div class="flex flex-row text-lg font-medium text-black pb-8">
              <p>An OTP has been sent to your email for changing your password</p>
            </div>
          </div>
          <div>
            <form action="" method="post">
              <div class="flex flex-col space-y-10">
                <div class="flex flex-row items-center justify-center lg:gap-5 mx-auto w-full max-w-md">
                  <div class="w-[3rem] h-[5rem] outline outline-2 ">
                    <input
                      class=" w-full h-full flex flex-col items-center justify-center text-center outline-none border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                  <div class="w-[3rem] h-[5rem] outline outline-2">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center outline-none border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                  <div class="w-[3rem] h-[5rem] outline outline-2">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center outline-none border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                  <div class="w-[3rem] h-[5rem] outline outline-2">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center outline-none border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                  <div class="w-[3rem] h-[5rem] outline outline-2">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center outline-none border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                  <div class="w-[3rem] h-[5rem] outline outline-2">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text" name="" id="" placeholder="*">
                  </div>
                </div>

                <div class="flex flex-col space-y-2 items-center justify-center w-full">
                    <button
                      class=" text-center lg:w-[24rem] w-full rounded-xl py-3 bg-blue-700 text-white"
                      @click="closeOTP">
                      Verify
                    </button>
                 
                  <div
                    class="flex flex-row items-center justify-center text-center text-sm text-black">
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

  </nav>

</template>


<style>
/* Media query for mobile screens */
@media (width: 375px) {
  .bg-cover-mobile {
    background-size: 200px;
    height: 100%; /* Adjust the height as needed */
    background-position: center;
  }
}
</style>




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
      showInput: false,
      showLoginModal: false,
      showSignUpModal: false,
      showForgotModal: false,
      showOTPModal: false,
      // showOTP: false,
      showPrivacyModal: false,
      showTermsModal: false,
      checkboxChecked: false,
      username: '',
      lastname: '',
      password: '',
      email: '',
      pnum: '',
      citizenship: '',
      gender: '',
      
      imageUrl: imageUrl,
      imageUrl2: imageUrl2,
      locations: [{
        imgSrc: run,
        alt: 'location1',
        attrib: 'hover:rounded-l-lg active:rounded-l-lg',
        title: 'What to DO',
        mobile: 'Do',
        link: '/category/do'
      },
      {
        imgSrc: grocery,
        alt: 'location2',
        attrib: '',
        title: 'Where to SHOP',
        mobile: 'Shop',
        link: '/category/shop'
      },
      {
        imgSrc: binoculars,
        alt: 'location3',
        attrib: '',
        title: 'What to SEE',
        mobile: 'See',
        link: '/category/see'
      },
      {
        imgSrc: food,
        alt: 'location4',
        attrib: '',
        title: 'Where to EAT',
        mobile: 'Eat',
        link: '/category/eat'
      },
      {
        imgSrc: house,
        alt: 'location5',
        attrib: '',
        title: 'Where to STAY',
        mobile: 'Stay',
        link: '/category/stay'
      },
      {
        imgSrc: locationImg,
        alt: 'location6',
        attrib: 'hover:rounded-r-lg active:rounded-r-lg',
        title: 'Make TOUR',
        mobile: 'Tour',
        link: '/category/tour'
      }
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
    // toggleContinueButton(event) {
    //   this.checkboxChecked = event.target.checked;
    // },
    // toggleCheckbox() {
    //   this.checkboxChecked = !this.checkboxChecked;
    // },
    openLoginModal() {
      this.showLoginModal = true;
      this.showPrivacyModal = false;
      this.showSignUpModal = false;
    },
    openSignUpModal() {
      this.showSignUpModal = true;
      this.showPrivacyModal = false;
      this.showTermsModal = false;
    },
    openPrivacyModal() {
      this.showPrivacyModal = true;
    },
    openTermsModal() {
      this.showTermsModal = true;
    },
    openForgotModal() {
      this.showForgotModal = true;
      // this.showOTPModal = false;
    },
    openOTPModal() {
      this.showOTPModal = true;
      // this.showForgotModal = true;


      this.showLoginModal = true;

      },

    toggleInputVisibility() {
      this.showInput = !this.showInput;
      if (this.showInput) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
    closeInputField(event) {
      if (!this.$refs.searchContainer.contains(event.target)) {
        this.showInput = false;
      }
    }
    ,
    toggleshowOTP() {
      this.showForgotModal = true;
      this.showOTP = true;
    },
    closeOTP() {
      this.showOTPModal = false;
      this.showLoginModal = false;
      this.showSignUpModal = false;
      this.showPrivacyModal = false;
      this.showTermsModal = false;
      this.showForgotModal = false;
      // this.showOtpModal = false;
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
  },
  mounted() {
    document.addEventListener('click', this.closeInputField);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeInputField);
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

/* Hide the scrollbar */
::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}
</style>