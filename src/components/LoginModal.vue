<template>
    <div class="on-top">
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center  bg-gray-800 bg-opacity-75">

            <div class="relative bg-white lg:w-[65vw] w-[90vw] h-fit rounded-3xl">
                <img src="@/assets/images/Modal/Intersect.png" alt="" class="w-full lg:h-full absolute rounded-t-xl">
                <!-- Modal Content -->
                <div class="relative top-0 flex justify-end">
                    <button class="absolute  pr-4 pt-4">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div
                    class="relative z-10 flex flex-col items-start justify-center h-fit lg:mt-[5rem] mt-[5rem] lg:ml-[6%] m-8">
                    <div class="mt-5 mb-5">
                        <h2 class="text-2xl lg:text-3xl font-bold">Welcome!</h2>
                        <p class="text-xs lg:text-sm">Please log in to your account.</p>
                    </div>
                    <form @submit.prevent="login" class=" lg:w-[40%] h-fit md:w-[40%] w-full mr-8">
                        <!-- username -->
                        <div class="relative mb-4 w-full md:w-365">
                            <label for="username" class="block text-gray-700">Enter Username</label>
                            <div class="relative">
                                <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-3"
                                    style="width: 15px;" alt="Username Icon" />
                                <input type="text" id="username" v-model="username" @input="validateUsername"
                                    class="w-full h-8 py-5 pl-10 border border-black rounded-xl" placeholder="Username">
                                <span v-if="usernameError" class="text-red-500 text-xs">{{ usernameError }}</span>
                            </div>
                        </div>
                        <!-- login password -->
                        <div class="relative mb-4">
                            <label for="lpassword" class="w-full text-gray-700">Enter Password</label>
                            <div class="relative w-full">
                                <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-5 my-3"
                                    style="width: 15px;" alt="Username Icon" />
                                <img v-if="showPassword" src="@/assets/images/Modal/view.png"
                                    class="absolute inset-y-0 right-0 mx-3 my-3" style="width: 15px; cursor: pointer;"
                                    alt="Eye Icon" @click="togglePasswordVisibility">
                                <img v-else src="@/assets/images/Modal/hidden.png"
                                    class="absolute inset-y-0 right-0 mx-3 my-3" style="width: 15px; cursor: pointer;"
                                    alt="Eye Icon" @click="togglePasswordVisibility">
                                <input id="lpassword" v-model="lpassword" @input="validateLPassword"
                                    :type="showPassword ? 'text' : 'password'"
                                    class="w-full h-8 py-5 pl-10 border border-black rounded-xl" placeholder="Password">
                                <span v-if="lpasswordError" class="text-red-500 text-xs">{{ lpasswordError }}</span>
                            </div>
                        </div>
                        <div class="hidden lg:flex items-center justify-between mb-4">
                            <p class="text-xs">Don't have an account? <button @click="openPrivacyModal"
                                    class="text-xs font-bold text-blue-600">Sign Up</button></p>
                            <button @click="openForgotModal" class="text-xs text-blue-600 font-bold">Forgot
                                Password?</button>
                        </div>
                        <span v-if="loginErrorMessage" class="font-semibold text-red-500 text-xs">{{ loginErrorMessage
                        }}</span>
                        <div class="hidden lg:block lg:mt-10 text-center">
                            <button type="submit"
                                class="lg:w-[8rem] w-full lg:px-4 py-2 text-white disabled:bg-blue-400 bg-blue-600 rounded-md"
                                :disabled="!isLoginFormValid" @click="login">Login</button>
                        </div>
                        <div class="lg:hidden lg:mt-10 text-center">
                            <button type="submit" :disabled="!isLoginFormValid" @click="login"
                                class="lg:w-[8rem] w-full lg:px-4 py-2 lg:mb-10 text-white disabled:bg-blue-400  bg-blue-600 rounded-md">Login</button>
                            <button @click="openForgotModal" class="text-xs text-blue-600 mt-1">Forgot
                                Password?</button>
                            <button @click="openPrivacyModal"
                                class="w-full mt-8 py-2 border border-blue-400 text-blue-600 bg-white rounded-md">Sign
                                Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="showLoginSuccess" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="relative p-7 bg-white w-[90%] lg:w-[50%] rounded-lg">
        <div class="flex justify-between mb-4">
            <p class="font-bold text-xl">Success</p>
            <button @click="showLoginSuccess = false" class="text-gray-500 hover:text-gray-700">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <p>{{ loginSuccessMessage }}</p>
    </div>
</div>


        <div v-if="showPrivacyModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white  lg:w-[65vw] w-[90vw] lg:h-[53%] rounded-xl">
                <!-- Modal Content -->
                <div class="relative flex justify-end">
                    <button class="absolute ">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-auto h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex justify-center items-center">
                    <img src="@/assets/images/Header/makati_logo.png" alt="logo"
                        class="w-auto h-8 mr-3 md:block md:w-auto md:h-10">
                    <img src="@/assets/images/Header/makaturismo.png" alt="banner" class="w-auto h-8 md:w-auto md:h-8">
                </div>
                <div class="flex items-center">
                    <button @click="openLoginModal" class="text-blue-600">
                        <img src="@/assets/images/Header/back.svg" alt="backBtn"
                            class="h-4 lg:h-5 w-auto ml-4 lg:ml-8 mr-2">
                    </button>
                </div>
                <div class="relative z-10 flex flex-col items-center h-full">
                    <form @submit.prevent="signup" class="w-[90%] lg:px-10 px-2 lg:mt-0 mt-5">
                        <!-- <div class="mb-5">
                      </div> -->
                        <!-- make it scrollable -->
                        <div class="flex justify-between overflow-y-auto custom-scrollbar h-[300px] w-[100%]  p-5 mb-0">
                            <div class="flex flex-col">
                                <p class="font-bold text-center text-2xl lg:text-3xl mb-5">Privacy Policy</p>
                                <p class="font-bold mb-5">Collection of Personal Information:</p>
                                <p class="mb-5 text-sm text-justify">We may collect personal information from you when
                                    you interact with our website, products, or services. This information may include
                                    but is not limited to your name, email address, mailing address, phone number, and
                                    payment
                                    details. We collect this information to provide you with our services and to improve
                                    and customize your experience with us.</p>
                                <p class="font-bold mb-5">Use of Personal Information:</p>
                                <p class="mb-5 text-sm">We use the personal information we collect for various purposes,
                                    including:</p>
                                <p class="mb-5 text-sm">
                                    1. Providing and personalizing our services<br> 2. Processing transactions<br> 3.
                                    Communicating with you<br> 4. Improving our products and services<br> 5. Marketing
                                    and promotional purposes<br> 6. Complying with legal obligations
                                </p>
                                <p class="font-bold mb-5">Protection of Personal Information:</p>
                                <p class="mb-5 text-sm text-justify">We take the security of your personal information
                                    seriously and have implemented appropriate measures to protect it from unauthorized
                                    access, disclosure, alteration, or destruction. However, please note that no method
                                    of transmission
                                    over the Internet or electronic storage is secure, and we cannot guarantee absolute
                                    security.</p>
                                <p class="font-bold mb-5">Sharing of Personal Information:</p>
                                <p class="mb-5 text-sm text-justify">We may share your personal information with
                                    third-party service providers who assist us in providing our services, conducting
                                    our business, or servicing you. We may also share your information when required by
                                    law or to protect
                                    our rights, property, or safety.</p>
                                <p class="font-bold mb-5">Your Rights:</p>
                                <p class="mb-5 text-sm text-justify">You have the right to access, update, or delete
                                    your personal information. You may also have the right to object to or restrict
                                    certain types of processing. If you would like to exercise any of these rights,
                                    please contact
                                    us using the information provided below.</p>
                                <p class="font-bold mb-5">Changes to this Privacy Policy:</p>
                                <p class="mb-5 text-sm text-justify">We reserve the right to update or modify this
                                    Privacy Policy at any time. Any changes will be effective immediately upon posting
                                    the updated Privacy Policy on our website.</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center mt-4 ">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-5 w-5 text-blue-600 mr-2"
                                    v-model="checkboxChecked">
                                <label for="myCheckbox" class="">I have read and agreed to the above Privacy Policy
                                    Agreement</label>
                            </div>
                            <div class="text-center mt-8">
                                <button type="submit"
                                    class="disabled:bg-blue-400 lg:w-[50%] w-full px-4 py-4 text-white bg-blue-600 rounded-md"
                                    @click="openSignUpModal" :disabled="!checkboxChecked">Continue</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Sign Up Modal -->
        <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative pr-8 pt-8 bg-white lg:w-[65vw] w-[90vw] lg:h-fit h-[75%] rounded-xl">
                <img src="@/assets/images/Modal/bg2.png" alt=""
                    class=" bottom-0 right-0 lg:w-[50%] absolute rounded-tr-xl rounded-br-xl lg:h-full ">
                <!-- Modal Content -->
                <div class="relative top-0 flex justify-end">
                    <button class="absolute lg:pr-4 lg:pt-4 ">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="lg:ml-[5rem] ml-8 my-5">
                    <div class="flex items-center gap-4">
                        <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png"
                                style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                        <h2 class="text-4xl font-bold">Sign Up</h2>
                    </div>
                </div>
                <!-- Fill out the form starts here -->
                <div class="relative z-10 flex flex-col items-start justify-center lg:h-full">
                    <form @submit.prevent="signup" @input="validateForm"
                        class="lg:w-[62%] w-fit lg:mx-[5rem] mb-8 ml-8 text-sm lg:h-full h-[55vh] font-bold hidden-scrollbar"
                        style="overflow-y: auto;">
                        <div class="w-full grid grid-cols-1 lg:grid-cols-2">
                            <!-- Firstname -->
                            <div class="lg:flex items-center mb-3">
                                <label for="fname" class="w-[9.5rem] block mb-2 ">First Name: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="w-full flex flex-col items-start justify-center">
                                    <input id="fname" type="text" v-model="fname" placeholder="Enter First Name"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3"
                                        @input="validateFirstname">
                                    <span v-if="fnameError" class="text-red-500 text-xs">{{ fnameError }}</span>
                                </div>
                            </div>
                            <!-- Middlename -->
                            <div class="lg:flex items-center mb-3">
                                <label for="mname" class="w-[8rem] lg:ml-3 lg:mr-3">Middle Initial:</label>
                                <input id="mname" type="text" v-model="mname" placeholder="Enter Middle Initial"
                                    class="border border-gray-500 rounded-xl w-full py-3 px-3">
                            </div>
                        </div>
                        <!-- Lastname -->
                        <div class="lg:flex items-center mb-3 ">
                            <label for="lastname" class="w-[8.5rem] block">Last Name: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <input id="lastname" type="text" v-model="lastname" placeholder="Enter Last Name"
                                    class="border border-gray-500 rounded-xl w-full py-3 px-3" @input="validateLastname">
                                <span v-if="lastnameError" class="text-red-500 text-xs">{{ lastnameError }}</span>
                            </div>
                        </div>
                        <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
                            <!-- E-mail Address -->
                            <div class="lg:flex items-center mb-3">
                                <label for="email" class="w-[10rem] block mb-2 ">Email Address: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="w-full flex flex-col items-start justify-center">
                                    <input id="email" type="text" v-model="email" placeholder="Enter Email Address"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3" @input="validateEmail">
                                    <span v-if="emailError" class="text-red-500 text-xs">{{ emailError }}</span>
                                </div>
                            </div>
                            <!-- Phone Number -->
                            <div class="lg:flex items-center mb-3">
                                <label for="pnum" class="w-[8rem] mb-2 lg:ml-3 ">Phone No.: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="flex flex-col w-full items-start justify-between ml-4">
                                    <div class="flex w-full">
                                        <!-- Text box for dialing code -->
                                        <input type="text" v-model="dialingCode" readonly
                                            class="border border-gray-500 rounded-l-xl w-[3.5rem] py-3 px-3" value="+63">
                                        <input id="pnum" type="tel" v-model="pnum" placeholder="Enter Phone Number"
                                            class="border border-gray-500 rounded-r-xl lg:w-full  py-3 px-3" maxlength="10"
                                            @input="validatePhoneNumber">
                                    </div>
                                    <span v-if="pnumError" class="text-red-500 text-xs">{{ pnumError }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full grid lg:grid-cols-2 gap-2">
                            <!-- Nationality -->
                            <div class="lg:flex items-center mb-3">
                                <label for="citizenship" class="w-[10rem] block mb-2">Nationality: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="w-full flex flex-col items-start justify-center">
                                    <div class="relative w-full">
                                        <select id="nationality" v-model="nationality"
                                            class="border border-gray-500 rounded-xl w-full py-3 px-3 appearance-none cursor-pointer">
                                            <option v-for="(nation, index) in nationalityOptions" :key="index"
                                                :value="nation">{{ nation }}
                                            </option>
                                        </select>
                                        <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span v-if="nationalityError" class="text-red-500 text-xs">{{ nationalityError
                                    }}</span>
                                </div>
                            </div>
                            <!-- Gender -->
                            <div class="lg:flex items-center mb-3">
                                <label for="gender" class="w-[9.6rem] mb-2 lg:ml-2">Gender: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="w-full flex flex-col items-start justify-center">
                                    <div class="relative w-full">
                                        <select id="gender" v-model="gender"
                                            class="border border-gray-500 rounded-xl w-full py-3 px-3 pr-8 appearance-none cursor-pointer"
                                            @change="validateGender">
                                            <option value="" disabled selected hidden>Choose gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="prefer_not_to_say">Prefer not to say</option>
                                        </select>
                                        <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span v-if="genderError" class="text-red-500 text-xs">{{ genderError }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Password -->
                        <div class="lg:flex items-center mb-3">
                            <label for="password" class="w-[8.5rem] block ">Password: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <div class="relative w-full">
                                    <img v-if="showPassword" src="@/assets/images/Modal/view.png"
                                        class="absolute right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="togglePasswordVisibility">
                                    <img v-else src="@/assets/images/Modal/hidden.png" class="absolute  right-3 mx-3 my-4"
                                        style="width: 15px; cursor: pointer;" alt="Eye Icon"
                                        @click="togglePasswordVisibility">
                                    <input id="password" v-model="password" placeholder="Enter Password"
                                        @input="checkPasswordPolicy" :type="showPassword ? 'text' : 'password'"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3 ">
                                </div>
                                <span v-if="passwordError" class="text-red-500 text-xs">{{ passwordError }}</span>
                                <div v-if="passwordPolicy.length > 0" class="text-red-500 text-xs">
                                    <ul>
                                        <li v-for="(policy, index) in passwordPolicy" :key="index">{{ policy }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- Confirm your passsword -->
                        <div class="lg:flex items-center mb-3">
                            <label for="rePassword" class="lg:w-[8.5rem] block">Confirm Password: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <div class="relative w-full">
                                    <img v-if="showCPassword" src="@/assets/images/Modal/view.png"
                                        class="absolute right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="toggleCPasswordVisibility">
                                    <img v-else src="@/assets/images/Modal/hidden.png" class="absolute  right-3 mx-3 my-4"
                                        style="width: 15px; cursor: pointer;" alt="Eye Icon"
                                        @click="toggleCPasswordVisibility">
                                    <input id="rePassword" v-model="rePassword" placeholder="Confirm Password"
                                        @input="validateRePassword" :type="showCPassword ? 'text' : 'password'"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3 ">
                                </div>
                                <span v-if="rePasswordError" class="text-red-500 text-xs">{{ rePasswordError }}</span>
                            </div>
                        </div>
                        <div class="lg:ml-[6rem]">
                            <div class="flex">
                                <input type="checkbox" id="myCheckbox2" class="form-checkbox h-4 w-4 text-blue-600 mr-2"
                                    v-model="checkboxChecked">
                                <p class="text-xs">
                                    By using MAKATURISMO, you signify your agreement to
                                    <button @click="openTermsModal" class="text-xs font-bold text-blue-600">Terms and
                                        Conditions</button>
                                </p>
                            </div>
                            <div>
                                <span v-if="signupError" class="text-red-500 text-xs">{{ signupError }}</span>
                            </div>
                            <button type="submit"
                                class="w-full lg:w-[10rem] font-bold mt-3 px-4 py-3 text-white disabled:bg-blue-400 bg-blue-600 rounded-md"
                                :disabled="!isSignupFormValid">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Terms and Condition Modal -->
        <div v-if="showTermsModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white  lg:w-[65vw] w-[90vw] lg:h-[55%] rounded-xl">
                <!-- Modal Content -->
                <div class="relative flex justify-end">
                    <button class="absolute ">
                        <svg @click="closeTC" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-auto h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex justify-center items-center">
                    <img src="@/assets/images/Header/makati_logo.png" alt="logo"
                        class="w-auto h-8 mr-3 md:block md:w-auto md:h-10">
                    <img src="@/assets/images/Header/makaturismo.png" alt="banner" class="w-auto h-8 md:w-auto md:h-8">
                </div>
                <div class="flex items-center">
                    <button @click="openSignUpModal" class="text-blue-600">
                        <img src="@/assets/images/Header/back.svg" alt="backBtn"
                            class="h-4 lg:h-5 w-auto ml-4 lg:ml-8 mr-2">
                    </button>
                </div>
                <div class="relative z-10 flex flex-col items-center h-full">
                    <form @submit.prevent="signup" class="w-[85%] lg:px-10 px-2 lg:mt-0 mt-5">
                        <!-- make it scrollable -->
                        <p class="font-bold text-center text-2xl lg:text-3xl ">Terms and Conditions</p>
                        <div class="flex justify-between overflow-y-auto h-[280px] w-[100%] custom-scrollbar p-10">
                            <div class="flex flex-col">
                                <p class="mb-5">Welcome to <span class="font-bold">MAKATURISMO</span>, a local tourism
                                    website that connects users, businesses, advertisers, and showcases various products
                                    and services. By accessing and using this website, you agree to comply
                                    with the following terms and conditions:</p>
                                <p class="font-bold">1. Acceptance of Terms:</p>
                                <p class="ml-4 mb-5 text-sm text-justify">By using this website, you acknowledge that
                                    you have read, understood, and agree to be bound by these terms and conditions. If
                                    you do not agree with any part of these terms, please refrain from using this
                                    website.</p>
                                <p class="font-bold">2. User Accounts:</p>
                                <p class="ml-4 text-sm text-justify">a. To access certain features on the website, you
                                    may be required to create a user account. You must provide accurate and complete
                                    information during the registration process.</p>
                                <p class="ml-4 text-sm text-justify">b. You are responsible for maintaining the
                                    confidentiality of your account credentials and ensuring the security of your
                                    account.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. You are solely responsible for all
                                    activities conducted through your account, and you must notify us immediately of any
                                    unauthorized use or security breach.</p>
                                <p class="font-bold">3. User Responsibilities:</p>
                                <p class="ml-4 text-sm text-justify">a. Users must be at least 13 years old and above or
                                    have parental consent to use this website.</p>
                                <p class="ml-4 text-sm text-justify">b. Users shall not engage in any illegal, abusive,
                                    defamatory, or harmful activities while using the website.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. Users must respect the intellectual
                                    property rights of others, including businesses featured on the website.</p>
                                <p class="font-bold">4. Businesses:</p>
                                <p class="ml-4 text-sm text-justify">a. Businesses must provide accurate and up-to-date
                                    information about their products and services.</p>
                                <p class="ml-4 text-sm text-justify">b. We reserve the right to approve or reject
                                    business listings and advertisements based on our guidelines and policies.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. Businesses must comply with all applicable
                                    laws and regulations.</p>
                                <p class="font-bold">5. Products and Services:</p>
                                <p class="ml-4 text-sm text-justify">a. The website may feature products and services
                                    from various businesses. We do not endorse or guarantee the quality of these
                                    products and services.</p>
                                <p class="ml-4 text-sm text-justify">b. Users are solely responsible for any
                                    transactions or interactions they enter with businesses through this website.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. We are not liable for any losses, damages,
                                    or disputes arising from transactions between users and businesses.</p>
                                <p class="font-bold">6. Content Submission:</p>
                                <p class="ml-4 text-sm text-justify">a. Users may submit content to the website, such as
                                    reviews, comments, or images. By doing so, you grant us the right to use, modify,
                                    and display the content on the website.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Users must not submit content that is
                                    unlawful, defamatory, or infringes upon the rights of others.</p>
                                <p class="font-bold">7. Intellectual Property:</p>
                                <p class="ml-4 text-sm text-justify">a. All content and materials on this website,
                                    including logos, trademarks, text, images, and software, are the property of
                                    Makaturismo Tourism Website or its licensors and are protected by intellectual
                                    property laws.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Users must not use, reproduce, or
                                    distribute any content from this website without obtaining proper authorization.</p>
                                <p class="font-bold">8. Disclaimer of Liability:</p>
                                <p class="ml-4 text-sm text-justify">We shall not be liable for any direct, indirect,
                                    incidental, consequential, or punitive damages arising from the use or inability to
                                    use the website or its content.</p>
                                <p class="font-bold mt-6">9. Modification and Termination:</p>
                                <p class="ml-4 text-sm text-justify">a. We reserve the right to modify or terminate the
                                    website and these terms and conditions at any time without prior notice.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Continued use of the website after any
                                    changes to the terms constitutes your acceptance of the revised terms.</p>
                                <p class="font-bold">10. Governing Law and Jurisdiction:</p>
                                <p class="ml-4 text-sm text-justify">a. These terms and conditions shall be governed by
                                    and construed in accordance with the laws of the Philippines.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Any disputes arising from the use of this
                                    website shall be subject to the exclusive jurisdiction of the courts in the
                                    Philippines.</p>
                            </div>
                        </div>
                        <div class="text-center mt-16">
                            <button type="submit" class="lg:w-[50%] w-full px-4 py-4 text-white bg-blue-600 rounded-md"
                                @click="closeTC">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Forgot Modal -->
        <div v-if="showForgotModal" class=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative bg-white lg:w-[65vw] w-[90vw] lg:h-[34rem] h-[36rem] rounded-3xl">
                <img src="@/assets/images/Modal/Intersect.png" alt="" class="w-full lg:h-full absolute rounded-t-xl">
                <!-- Modal Content -->
                <div class="relative z-10 top-0 flex justify-end">
                    <button class="absolute  pr-4 pt-4">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="relative z-5 flex flex-col items-start justify-center h-full lg:ml-12">
                    <form @submit.prevent="validateForm"
                        class="lg:w-[35%] lg:mt-[10%] mt-[20%] mx-8 lg:mx-0 flex flex-col justify-between h-full">
                        <div class="mb-5">
                            <div class="flex items-center mb-12 w-[50%]">
                                <button @click="openLoginModal" class="hidden text-blue-600"><img
                                        src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt=""
                                        class="my-2 mr-2"></button>
                                <h2 class="lg:text-4xl text-2xl font-bold lg:mb-[10%] mb-[18%]">Change Password</h2>
                            </div>
                            <p class="mb-5 text-sm">Enter your email to change your password
                            </p>
                            <div class="relative mb-2">
                                <div class="relative">
                                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3"
                                        style="width: 15px;" alt="Username Icon" />
                                    <input type="text" id="otpEmail" v-model="otpEmail" @input="validateOtpEmail"
                                        class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                                    <span v-if="otpEmailError" class="text-red-500 text-xs">{{ otpEmailError }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center text-center mb-[10%]">
                            <button @click="recieveotp" :disabled="!isForgotFormValid"
                                class="lg:w-fit w-full px-4 py-2 text-white disabled:bg-blue-400 bg-blue-600 rounded-lg">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- thank you modal -->
        <div v-if="showApproval" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30">
            <!-- Modal Content -->
            <div class="relative bg-white px-5 pb-7 shadow-xl mx-auto w-full max-w-xl rounded-2xl">
                <div class="mx-auto flex w-full max-w-xl flex-col">
                    <div class="flex justify-center pt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#4BAA7C" class="w-[6rem] h-[6rem]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center pt-3">
                        <div class="font-semibold text-2xl text-gray-600">
                            <p>Account for Approval</p>
                        </div>
                        <div class="flex flex-row text-lg font-medium text-gray-600 pb-12">
                            <p>Thank you for registering with us using your email address! Kindly check your email
                                address to verify your account</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="p-3 w-[92%] text-white text-xl bg-[#2969D6] rounded-lg border border-gray-500"
                            @click="closeApproval">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--  end of modal -->
        <!-- OTP -->
        <div v-if="showOTPModal" class=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative bg-white  lg:w-[65vw] w-[90vw] lg:h-[34rem] h-[36rem] rounded-3xl">
                <img src="@/assets/images/Modal/Intersect.png" alt="" class="w-full lg:h-full absolute rounded-t-xl">
                <!-- Modal Content -->
                <div class="relative z-10 top-0 flex justify-end">
                    <button class="absolute  pr-4 pt-4">
                        <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="5" stroke="black" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div v-if="forgotnewpassword" class="relative z-5 flex flex-col items-start justify-center h-full lg:ml-12">
                    <form class="lg:w-[35%] lg:mt-[10%] mt-[20%] mx-8 lg:mx-0 flex flex-col justify-between h-full">
                        <div class="mb-5">
                            <div class="flex items-center mb-12 w-[50%]">
                                <button @click="openLoginModal" class="hidden text-blue-600">
                                    <img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt=""
                                        class="my-2 mr-2">
                                </button>
                                <h2 class="lg:text-4xl text-2xl font-bold lg:mb-[10%] mb-[18%]">Change Password</h2>
                            </div>
                            <div class="relative mb-4 w-full md:w-365">
                                <div class="relative">
                                    <img src="@/assets/images/Modal/profile.png"
                                        class="absolute inset-y-0 left-0 right-0 mx-5 my-1 mt-3" style="width: 15px;"
                                        alt="Username Icon" />
                                    <input type="password" id="newpass" name="newpass" v-model="forgotnewpass"
                                        placeholder="Enter new password" @input="checkPasswordPolicyForgot"
                                        class="w-full h-8 py-5 pl-10 border border-black rounded-xl">
                                    <div v-if="passwordPolicyForgot.length > 0" class="text-red-500 text-xs">
                                        <ul>
                                            <li v-for="(policy, index) in passwordPolicyForgot" :key="index">{{ policy
                                            }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="relative mb-4 mt-4 w-full md:w-365">
                                        <div class="relative">
                                            <img src="@/assets/images/Modal/profile.png"
                                                class="absolute inset-y-0 left-0 right-0 mx-5 my-1 mt-3"
                                                style="width: 15px;" alt="Username Icon" />
                                            <input type="password" id="confirmpass" name="confirmpass"
                                                v-model="forgotconfirmpass" placeholder="Confirm Password"
                                                class="w-full h-8 py-5 pl-10 border border-black rounded-xl"
                                                @input="matchForgotpassword">
                                            <span v-if="matchpassword" class="text-red-500 text-xs">{{
                                                forgotConfirmMessage
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center text-center mb-[10%]">
                            <button :disabled="!isForgotPasswordValid" @click="verifyOtpAfterPassword"
                                class="lg:w-fit w-full px-4 py-2 text-white disabled:bg-blue-400 bg-blue-600 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="otpverifforgot" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <!-- Modal Content -->
                <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto lg:w-full w-[90vw] h-fit max-w-3xl rounded-2xl">
                    <button @click="closeOTP" class="absolute top-0 right-0 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"
                            class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="flex flex-col items-center justify-center text-center pt-5">
                        <div class="font-semibold text-3xl">
                            <p>Enter One-Time OTP to verify your account</p>
                        </div>
                        <div class="flex flex-row text-lg font-medium text-black pb-8">
                            <p>An OTP has been sent to your email for changing your password</p>
                        </div>
                    </div>
                    <div>
                        <form action="" method="post">
                            <div class="flex flex-col space-y-10">
                                <div class="flex items-center justify-center gap-3">
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[0]" pattern="\d*" maxlength="1" />
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[1]" maxlength="1" />
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[2]" maxlength="1" />
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[3]" maxlength="1" />
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[4]" maxlength="1" />
                                    <input type="text"
                                        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                        v-model="otpDigits[5]" maxlength="1" />
                                </div>
                                <div class="flex flex-col space-y-2 items-center justify-center w-full">
                                    <p v-if="error.forgot" class="text-red-500 text-xs">{{ error.forgot }}</p>
                                    <button class="text-center lg:w-[24rem] w-full rounded-xl py-3 bg-blue-700 text-white"
                                        @click="changePassword">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showChangepass" class="fixed inset-0 z-[10] flex items-center justify-center bg-gray-800 bg-opacity-30">
            <!-- Modal Content -->
            <div class="relative bg-white px-5 pb-7 shadow-xl mx-auto w-full max-w-xl rounded-2xl">
                <div class="mx-auto flex w-full max-w-xl flex-col">
                    <div class="flex justify-center pt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#4BAA7C" class="w-[6rem] h-[6rem]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center pt-3">
                        <div class="flex flex-row text-lg font-medium text-gray-600 pb-12">
                            <p>Thank you! You successfully changed your password</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="p-3 w-[92%] text-white text-xl bg-[#2969D6] rounded-lg border border-gray-500"
                            @click="closeChangepass">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* Custom scrollbar */
.custom-scrollbar::-webkit-scrollbar {
    width: 15px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #b3afaf89;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #102E61;
    border-radius: 10px;
}

.on-top {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    /* still recommended to use a reasonably high z-index */
}
</style>

<script>
import {
    RouterLink
} from 'vue-router';
import {
    // isMemoSame,
    ref
} from 'vue'
import {
    useAuthStore
} from '@/stores/auth'
import axios from 'axios';
import imageUrl from '@/assets/images/Modal/Intersect.png';
import imageUrl2 from '@/assets/images/Modal/bg2.png';

import {
    useSignUpStore
} from '@/stores/signUp';
import SearchFilter from '@/views/SearchFilter.vue';
export default {
    name: 'LoginModal',
    props: {
        showModal: {
            type: Boolean,
            required: true
        }
    },
    setup(props, { emit }) {
        const close = () => {
            emit('close');
        };

        return {
            close
        };
    },
    components: {
        RouterLink,
        SearchFilter
    },
    data() {
        return {
            showLoginSuccess: false, // New property to track login success
            loginSuccessMessage: '',
            isForgotPasswordValid: false,
            showChangepass: false,
            showApproval: false,
            otpDigits: ['', '', '', '', '', ''],
            forgotnewpassword: false,
            showBookingConfirmationModal: false,
            showOrderCompleteModal: false,
            showBookingCompleteModal: false,
            isSidebarOpen: false,
            showInput: false,
            showNotifModal: false,
            showPFPModal: false,
            showSignUpModal: false,
            showForgotModal: false,
            showOTPModal: false,
            otpverifforgot: false,
            passwordPolicyForgot: [],
            showPrivacyModal: false,
            showTermsModal: false,
            otpcode: '',
            otpVerify: '',
            fname: '',
            mname: '',
            lastname: '',
            email: '',
            dialingCode: "+63",
            pnum: '',
            nationality: 'Filipino',
            gender: '',
            password: '',
            rePassword: '',
            otpEmail: '',
            otpEmailError: '',
            error: {
                signup: ''
            },
            matchpassword: false,
            forgotConfirmMessage: '',
            checkboxChecked: false,
            showPassword: false,
            showCPassword: false,
            passwordPolicy: [],
            signupError: '',
            usernameError: '',
            lpasswordError: '',
            checkboxChecked: false,
            fnameError: '',
            lastnameError: '',
            phoneNumberError: '',
            emailError: '',
            pnumError: '',
            nationalityError: '',
            genderError: '',
            passwordError: '',
            rePasswordError: '',
            loginClicked: false,
            signupClicked: false,
            receiveOtpClicked: false,
            imageUrl: imageUrl,
            imageUrl2: imageUrl2,
            nationalityOptions: [
                "Afghan",
                "Albanian",
                "Algerian",
                "American",
                "Andorran",
                "Angolan",
                "Antiguans",
                "Argentinean",
                "Armenian",
                "Australian",
                "Austrian",
                "Azerbaijani",
                "Bahamian",
                "Bahraini",
                "Bangladeshi",
                "Barbadian",
                "Barbudans",
                "Batswana",
                "Belarusian",
                "Belgian",
                "Belizean",
                "Beninese",
                "Bhutanese",
                "Bolivian",
                "Bosnian",
                "Brazilian",
                "British",
                "Bruneian",
                "Bulgarian",
                "Burkinabe",
                "Burmese",
                "Burundian",
                "Cambodian",
                "Cameroonian",
                "Canadian",
                "Cape Verdean",
                "Central African",
                "Chadian",
                "Chilean",
                "Chinese",
                "Colombian",
                "Comoran",
                "Congolese",
                "Costa Rican",
                "Croatian",
                "Cuban",
                "Cypriot",
                "Czech",
                "Danish",
                "Djibouti",
                "Dominican",
                "Dutch",
                "East Timorese",
                "Ecuadorean",
                "Egyptian",
                "Emirian",
                "Equatorial Guinean",
                "Eritrean",
                "Estonian",
                "Ethiopian",
                "Fijian",
                "Filipino",
                "Finnish",
                "French",
                "Gabonese",
                "Gambian",
                "Georgian",
                "German",
                "Ghanaian",
                "Greek",
                "Grenadian",
                "Guatemalan",
                "Guinea-Bissauan",
                "Guinean",
                "Guyanese",
                "Haitian",
                "Herzegovinian",
                "Honduran",
                "Hungarian",
                "I-Kiribati",
                "Icelander",
                "Indian",
                "Indonesian",
                "Iranian",
                "Iraqi",
                "Irish",
                "Israeli",
                "Italian",
                "Ivorian",
                "Jamaican",
                "Japanese",
                "Jordanian",
                "Kazakhstani",
                "Kenyan",
                "Kittian and Nevisian",
                "Kuwaiti",
                "Kyrgyz",
                "Laotian",
                "Latvian",
                "Lebanese",
                "Liberian",
                "Libyan",
                "Liechtensteiner",
                "Lithuanian",
                "Luxembourger",
                "Macedonian",
                "Malagasy",
                "Malawian",
                "Malaysian",
                "Maldivan",
                "Malian",
                "Maltese",
                "Marshallese",
                "Mauritanian",
                "Mauritian",
                "Mexican",
                "Micronesian",
                "Moldovan",
                "Monacan",
                "Mongolian",
                "Moroccan",
                "Mosotho",
                "Motswana",
                "Mozambican",
                "Namibian",
                "Nauruan",
                "Nepalese",
                "New Zealander",
                "Ni-Vanuatu",
                "Nicaraguan",
                "Nigerian",
                "Nigerien",
                "North Korean",
                "Northern Irish",
                "Norwegian",
                "Omani",
                "Pakistani",
                "Palauan",
                "Panamanian",
                "Papua New Guinean",
                "Paraguayan",
                "Peruvian",
                "Polish",
                "Portuguese",
                "Qatari",
                "Romanian",
                "Russian",
                "Rwandan",
                "Saint Lucian",
                "Salvadoran",
                "Samoan",
                "San Marinese",
                "Sao Tomean",
                "Saudi",
                "Scottish",
                "Senegalese",
                "Serbian",
                "Seychellois",
                "Sierra Leonean",
                "Singaporean",
                "Slovakian",
                "Slovenian",
                "Solomon Islander",
                "Somali",
                "South African",
                "South Korean",
                "Spanish",
                "Sri Lankan",
                "Sudanese",
                "Surinamer",
                "Swazi",
                "Swedish",
                "Swiss",
                "Syrian",
                "Taiwanese",
                "Tajik",
                "Tanzanian",
                "Thai",
                "Togolese",
                "Tongan",
                "Trinidadian or Tobagonian",
                "Tunisian",
                "Turkish",
                "Tuvaluan",
                "Ugandan",
                "Ukrainian",
                "Uruguayan",
                "Uzbekistani",
                "Venezuelan",
                "Vietnamese",
                "Welsh",
                "Yemenite",
                "Zambian",
                "Zimbabwean"
            ],

        };
    },
    computed: {
        isLoginFormValid() {
            return this.username.trim() !== '' && this.lpassword.trim() !== '';
        },
        isSignupFormValid() {
            return (
                this.fname.trim() !== '' &&
                this.lastname.trim() !== '' &&
                this.email.trim() !== '' &&
                this.pnum.trim() !== '' &&
                this.nationality.trim() !== '' &&
                this.gender &&
                this.password.trim() !== '' &&
                this.rePassword.trim() !== '' &&
                // If there are still errors, do not proceed
                this.fnameError === '' &&
                this.lastnameError === '' &&
                this.emailError === '' &&
                this.pnumError === '' &&
                this.nationalityError === '' &&
                this.genderError === '' &&
                this.passwordError === '' &&
                this.rePasswordError === '' &&
                this.passwordPolicy.length === 0 &&
                this.checkboxChecked
            );
        },
        isForgotFormValid() {
            return this.otpEmail.trim() !== '' && this.otpEmailError === '';
        },
    },

    methods: {
        close() {
            this.$emit('close');
        },
        isForgotPasswordValid() {
            return (
                this.forgotnewpass.trim() !== '' &&
                this.forgotconfirmpass.trim() !== '' &&
                this.passwordPolicyForgot.length === 0
            );
        },
        closeChangepass() {
            this.forgotnewpass = '';
            this.otpEmail = '';
            this.orgotconfirmpass = '';
            this.otpDigits = [];
            this.showChangepass = false;
            this.showOTPModal = false;
        },

        togglepfp() {
            this.showPFPModal = !this.showPFPModal;
            // Close notification modal if open
            if (this.showPFPModal && this.showNotifModal) {
                this.showNotifModal = false;
            }
        },

        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        toggleCPasswordVisibility() {
            this.showCPassword = !this.showCPassword;
        },
        // LOGIN VALIDATION
        validateUsername() {
            this.usernameError = this.username.trim() === '' ? 'Please enter your username' : '';
        },
        validateLPassword() {
            this.lpasswordError = this.lpassword.trim() === '' ? 'Please enter your password' : '';
        },
        validateFields() {
            // Validate fields only if the login button is clicked
            if (this.loginClicked) {
                this.validateUsername();
                this.validateLPassword();
            }
        },
        // END OF LOGIN VALIDATION
        // START SIGNUP VALIDATION
        validateFirstname() {
            this.fnameError = this.fname.trim() === '' ? 'Please enter your first name' : '';
        },
        validateLastname() {
            this.lastnameError = this.lastname.trim() === '' ? 'Please enter your last name' : '';
        },
        validateEmail() {
            // Regular expression for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailError = !emailPattern.test(this.email) ? 'Please enter a valid email address' : '';
        },
        validatePhoneNumber() {
            // Remove non-numeric characters from the input value
            this.pnum = this.pnum.replace(/\D/g, '');
            if (this.pnum.trim() === '') {
                // Check if phone number is empty
                this.pnumError = 'Please enter your Phone number';
            } else if (this.pnum.charAt(0) !== '9') {
                // Check if the phone number starts with the number 9
                this.pnumError = 'Phone number must start with 9';
            } else if (this.pnum.length < 10) {
                // Check if phone number length is less than 10 digits
                this.pnumError = 'Phone number must be 10 digits';
            } else {
                this.pnumError = '';
            }
        },
        validateNationality() {
            this.nationalityError = this.nationality.trim() === '' ? 'Please choose your nationality' : '';
        },
        validateGender() {
            this.genderError = !this.gender ? 'Please select your gender' : '';
        },
        validatePassword() {
            this.passwordError = this.password.trim() === '' ? 'Please enter a password' : '';
        },
        validateRePassword() {
            this.rePasswordError = this.rePassword.trim() === '' ? 'Please confirm your password' :
                (this.rePassword !== this.password ? 'Passwords do not match' : '');
        },
        checkPasswordPolicy() {
            this.passwordPolicy = [];
            // Check password length
            if (this.password.length < 8) {
                this.passwordPolicy.push('Password should be at least 8 characters long');
            }
            // Check if password is alphanumeric
            if (!/^(?=.*[0-9])(?=.*[a-zA-Z])/.test(this.password)) {
                this.passwordPolicy.push('Password should be alphanumeric');
            }
            // Check if password contains a special character
            if (!/[^a-zA-Z0-9]/.test(this.password)) {
                this.passwordPolicy.push('Password must contain a special character');
            }
            // Check if password contains at least one capital letter
            if (!/[A-Z]/.test(this.password)) {
                this.passwordPolicy.push('Password must have at least one capital letter');
            }
            // Check if password has no spaces
            if (/\s/.test(this.password)) {
                this.passwordPolicy.push('Password must not contain spaces');
            }
        },
        checkPasswordPolicyForgot() {
            this.passwordPolicyForgot = [];
            // Check password length
            if (this.forgotnewpass.length < 8) {
                this.passwordPolicyForgot.push('Password should be at least 8 characters long');
                this.isForgotPasswordValid = false;
            }
            // Check if password is alphanumeric
            if (!/^(?=.*[0-9])(?=.*[a-zA-Z])/.test(this.forgotnewpass)) {
                this.passwordPolicyForgot.push('Password should be alphanumeric');
                this.isForgotPasswordValid = false;
            }
            // Check if password contains a special character
            if (!/[^a-zA-Z0-9]/.test(this.forgotnewpass)) {
                this.passwordPolicyForgot.push('Password must contain a special character');
                this.isForgotPasswordValid = false;
            }
            // Check if password contains at least one capital letter
            if (!/[A-Z]/.test(this.forgotnewpass)) {
                this.passwordPolicyForgot.push('Password must have at least one capital letter');
                this.isForgotPasswordValid = false;
            }
            // Check if password has no spaces
            if (/\s/.test(this.forgotnewpass)) {
                this.passwordPolicyForgot.push('Password must not contain spaces');
                this.isForgotPasswordValid = false;
            } else {
                if (this.forgotconfirmpass = '') {
                    this.isForgotPasswordValid = false;
                }
            }
        },
        closeApproval() {
            this.showApproval = false;
            console.log(this.showApproval);
            console.log('working');
        },
        validateForm() {
            // Validate fields only if the signup button is clicked
            if (this.signupClicked) {
                this.validateFirstname();
                this.validateLastname();
                this.validateEmail();
                this.validatePhoneNumber();
                this.validateNationality();
                this.validateGender();
                this.validatePassword();
                this.validateRePassword();
            }
        },
        async signup() {
            this.signupClicked = true;
            // Validate the form fields
            await this.validateForm();
            // Check if the form is valid
            if (!this.isSignupFormValid) {
                // If the form is not valid, do not proceed with signup
                return;
            }
            // Extract form data
            const firstname = this.fname;
            const lastname = this.lastname;
            const email = this.email;
            const contact = this.pnum;
            const mi = this.mname;
            const national = this.nationality;
            const gender = this.gender;
            const password = this.password;
            const touristreg = {
                firstname,
                lastname,
                email,
                contact,
                mi,
                national,
                gender,
                password
            };
            try {
                const useSignUp = useSignUpStore();
                // Make signup request to the server
                const signupRes = await useSignUp.signUp(touristreg);
                if (signupRes.user) {
                    await useSignUp.verifyEmail(signupRes.user.id);
                    console.log(signupRes.user.id);
                    // Signup successful
                    this.showApproval = true;
                    this.showChangepass = false;
                    this.showLoginModal = false;
                    this.showPrivacyModal = false;
                    this.showSignUpModal = false;
                } else {
                    // Signup failed
                    // Display the error message
                    this.signupError = signupRes.error;
                }
            } catch (error) {
                console.error(error);
                this.signupError = 'An unexpected error occurred. Please try again later.';
            }
        },
        // END OF SIGNUP VALIDATION
        validateOtpEmail() {
            // Regular expression for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // this.otpEmailError = !emailPattern.test(this.otpEmail) ? 'Please enter a valid email address' : '';
            if (!emailPattern.test(this.otpEmail)) {
                if (this.otpEmail.trim() === '') {
                    this.otpEmailError = 'Please enter your email';
                } else {
                    this.otpEmailError = 'Please enter a valid email address';
                }
            } else {
                this.otpEmailError = '';
            }
            // this.otpEmailError = this.otpEmail.trim() === '' ? 'Please enter your email' : '';
        },
        validateForgotField() {
            // Validate fields only if the login button is clicked
            if (this.receiveOtpClicked) {
                this.validateOtpEmail();
            }
        },
        openOTPModal() {
            this.receiveOtpClicked = true;
            this.validateForgotField();
            if (this.isForgotFormValid) {
                console.log('Sending ...');
                this.showOTPModal = true;
                // this.showForgotModal = true;
                this.showLoginModal = true;
            }
        },
        isCategoryPath(path) {
            return path.startsWith('/category/') && path.split('/').length === 3;
        },
        isActive(link) {
            // Check if the current route contains the provided link
            return this.currentRoute.includes(link);
        },
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
        toggleInputVisibility() {
            this.showInput = !this.showInput;
            if (this.showInput) {
                this.$nextTick(() => {
                    this.$refs.searchInput.focus();
                });
            }
        },

        toggleshowOTP() {
            this.showForgotModal = true;
            this.showOTP = true;
        },
        closeOTP() {
            this.showOTPModal = false;
            this.showLoginModal = false;
            this.showSignUpModal = false;
            this.showPrivacyModal = false;
            this.showForgotModal = false;
            // Refresh the page
            window.location.reload();
        },
        closeTC() {
            this.showTermsModal = false;
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
        recieveotp(e) {
            e.preventDefault();
            this.error = [];
            console.log(this.otpEmail);
            const email = this.otpEmail;
            let getEmail = {
                email
            };
            axios.post('/sendotp', getEmail).then((response) => {
                if (response.data.result == 'true') {
                    this.showForgotModal = false;
                    this.showOTPModal = true;
                    this.forgotnewpassword = true;
                } else {
                    this.error.sendemail = 'Email doesnt match our records';
                }
            });
        },
        verifyOtpAfterPassword(e) {
            e.preventDefault();
            this.error = [];
            const password = this.forgotnewpass;
            const confirmpassword = this.forgotconfirmpass;
            const email = this.otpEmail;
            let getOtp = {
                email,
                password,
                confirmpassword
            };
            axios.post('http://makatiapi.simplevia.com/api/verifyotp', getOtp)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.otp) {
                        this.forgotnewpassword = false;
                        this.otpverifforgot = true;
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    this.error.matchpassword = error.response.data.message;
                });
        },
        matchForgotpassword() {
            if (this.forgotconfirmpass != this.forgotnewpass) {
                this.matchpassword = true;
                this.forgotConfirmMessage = "Password do not match."
                this.isForgotPasswordValid = false;
            } else {
                this.matchpassword = false;
                this.forgotConfirmMessage = "";
                this.isForgotPasswordValid = true;
            }
        },
        changePassword(event) {
            event.preventDefault();
            this.error = [];
            // console.log(this.forgotnewpass);
            // console.log(this.forgotconfirmpass);
            const password = this.forgotnewpass;
            const email = this.otpEmail;
            const otp = this.otpDigits.join('');
            // console.log(email);
            //const email = 'clemence@gmail.com';
            let forgot = {
                email,
                otp,
                password
            };
            console.log(forgot);
            axios.post('http://makatiapi.simplevia.com/api/changepass', forgot).then((response) => {
                console.log(response.data);
                this.otpverifforgot = false;
                this.showOTPModal = false;
                this.showChangepass = true;
            }).catch((error) => {
                console.log(error);
                console.log(error.response.data.message);
                this.error.forgot = error.response.data.message;
            });
        },
    },
    setup() {
        const showLoginSuccess = ref(false);
const loginSuccessMessage = ref('');

        const authStore = useAuthStore();
        const username = ref('');
        const lpassword = ref('');
        const showLoginModal = ref(false);
        const showPFPModal = ref(false);
        const showNotif = ref(false);
        const isSidebarOpen = ref(false);
        let loginPasswordError = ref(false); // Declare loginPasswordError as a ref
        const loginErrorMessage = ref(''); // Declare loginErrorMessage as a ref
        const openModal = () => {
            showLoginModal.value = true;
        };
        const closeModal = () => {
            showLoginModal.value = false;
        };
        const login = async () => {
    loginPasswordError.value = false;
    const credentials = {
        username: username.value,
        password: lpassword.value
    };
    const response = await authStore.login(credentials);
    if (response.status === false) {
        console.log(response);
        loginErrorMessage.value = response.message;
    } else {
        showLoginSuccess.value = true;
        loginSuccessMessage.value = 'Login successful!';
        setTimeout(() => {
            showLoginSuccess.value = false;
            emit('close'); // Emit close event after showing success message
        }, 3000); // Hide the success message after 3 seconds
    }
};



        const logout = () => {
            authStore.logout(); // Call the logout action from the store
            // Additional logout logic, such as redirecting to the login page, can be added here
            showPFPModal.value = false; // Close the modal in web
            showNotif.value = false;
            isSidebarOpen.value = false; // Close the modal in mobile
        };
        return {
            username,
            lpassword,
            showLoginModal,
            openModal,
            login,
            logout,
            authStore,
            loginErrorMessage,
            showLoginSuccess,
    loginSuccessMessage,
        };
        confirm
    },
    mounted() {
        document.addEventListener('click', this.closeInputField);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeInputField);
    },
};
</script>