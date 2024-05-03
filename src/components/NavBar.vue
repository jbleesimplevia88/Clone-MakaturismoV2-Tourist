<template>
    <nav class="fixed top-0 z-10 w-full">
        <div class="flex items-center justify-between w-full py-2 bg-white shadow md:px-20">
            <!-- Left side - Logo -->
            <div class="flex items-center pl-4">
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

                <adiv class=" hidden lg:block relative  " ref="searchContainer">
                    <input v-if="showInput" type="search"
                        class=" relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                        placeholder="Search" aria-label="Search" id="exampleFormControlInput2"
                        aria-describedby="button-addon2" ref="searchInput" />
                    <span @click="toggleInputVisibility"
                        class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5"
                        id="button-addon2">

                        <svg class="" v-show="!showInput" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </adiv>
                <!-- Calendar -->
                <RouterLink to="/calendar" class="hidden text-white md:inline-block"><img
                        src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-6 mx-2"></RouterLink>

                <!-- WHEN USER IS LOGGED IN-->

                <div v-if="authStore.isAuthenticated">
                    <div class="hidden lg:flex items-center space-x-6">
                        <!-- Notification Icon -->
                        <svg @click="toggleNotif" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                                clip-rule="evenodd" />
                        </svg>

                        <!-- Notification Modal -->
                        <div v-if="showNotifModal"
                            class="absolute top-[6.5rem] right-[1.2rem] bg-gray-100 shadow text-black rounded-lg w-[325px]">
                            <div class="p-4" role="none">
                                <p class="pb-3 text-xl font-bold">Notifications</p>

                                <!-- Notification Tray -->
                                <div class="w-full pt-30 bg-[#F2F2F2]">
                                    <div v-for="(notification, index) in bookingItems" :key="index"
                                        class="rounded-2xl p-1 flex bg-white hover:bg-blue-600 cursor-pointer w-100 mb-4"
                                        @click="openNotifModal(notification)">
                                        <!-- SVG Icon -->
                                        <svg data-v-c3ceb15a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            fill="currentColor" class="w-6 h-6 mr-2">
                                            <path data-v-c3ceb15a="" fill-rule="evenodd"
                                                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <!-- Notification Content -->
                                        <span class="text-lg">{{ notification }}</span>
                                    </div>
                                </div>

                                <!-- Booking Confirmation Modal -->
                                <div v-if="showBookingConfirmationModal"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div class="bg-white p-4 rounded-lg">
                                        <div class="flex items-center justify-between mb-1">
                                            <h2 class="text-xl font-semibold">Booking Confirmed</h2>


                                            <button @click="closeBookingConfirmationModal">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.9" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <p>Thank you for booking with iBayad. </p>
                                        <br><br>

                                        <p>Your booking reference is: </p>
                                        <p>An email sent to: <span class="font-bold">Juandelacruz@gmail.com</span></p>
                                    </div>
                                </div>

                                <!-- Order Complete Modal -->
                                <div v-if="showOrderCompleteModal"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div class="bg-white p-4 rounded-lg">
                                        <div class="flex items-center justify-between mb-1">
                                            <h2 class="text-xl font-semibold">Order Completed</h2>
                                            <button @click="closeOrderCompleteModal">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.9" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <p>Thank you for booking with iBayad. </p>
                                        <br><br>

                                        <p>Your booking reference is: </p>
                                        <p>An email sent to: <span class="font-bold">Juandelacruz@gmail.com</span></p>
                                    </div>
                                </div>

                                <!-- Booking Complete Modal -->
                                <div v-if="showBookingCompleteModal"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div class="bg-white p-4 rounded-lg">
                                        <div class="flex items-center justify-between mb-1">
                                            <h2 class="text-xl font-semibold">Booking Complete Modal</h2>
                                            <button @click="closeBookingCompleteModal">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.9" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <p>Thank you for booking with iBayad. </p>
                                        <br><br>

                                        <p>Your booking reference is: </p>
                                        <p>An email sent to: <span class="font-bold">Juandelacruz@gmail.com</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Person Icon -->
                        <svg @click=togglepfp xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>

                    <!-- PFP Modal -->
                    <div v-if="showPFPModal"
                        class="absolute top-[6.5rem] right-[1.2rem] bg-gray-100 shadow text-black rounded-lg w-[325px]">
                        <div class="p-4" role="none">
                            <p class="pb-3 text-xl font-bold">Account</p>
                            <div class="pb-2 text-center">
                                <RouterLink to="/profile">
                                    <button class=" hover:bg-blue-600 flex items-center w-full p-3 bg-white rounded-xl"
                                        @click="toggleDropdown(null)">
                                        <span class="ml-[0.2rem]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-7 h-7">
                                                <path fill-rule="evenodd"
                                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        <span class="ml-2 text-sm">Profile</span>
                                    </button>
                                </RouterLink>
                            </div>
                            <div class="pb-2 text-center">

                                <RouterLink to="/transactions">
                                    <button class=" hover:bg-blue-600 flex items-center w-full p-3 bg-white rounded-xl"
                                        @click="toggleDropdown(null)">
                                        <span class="ml-2">
                                            <img src="@/assets/images/Header/Transaction Icon.png" alt="transaction"
                                                class="w-4 h-5">
                                        </span>
                                        <span class="ml-3 text-sm">Transactions</span>
                                    </button>
                                </RouterLink>

                            </div>
                            <div class="pb-2 text-center">

                                <RouterLink to="/cart">
                                    <button class=" hover:bg-blue-600 flex items-center w-full p-3 bg-white rounded-xl"
                                        @click="toggleDropdown(null)">
                                        <span class="ml-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-6 h-6">
                                                <path
                                                    d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                            </svg>
                                        </span>
                                        <span class="ml-3 text-sm">Cart</span>
                                    </button>
                                </RouterLink>

                            </div>
                            <RouterLink to="/">
                                <div class="pt-4 pb-2 text-center">
                                    <button @click="logout"
                                        class="bg-[#102E61] w-full rounded-xl flex justify-center items-center p-2">
                                        <span class="ml-2 text-white">Logout</span>
                                    </button>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="hidden lg:flex items-center space-x-4">
                        <!-- Original Login Button -->
                        <button @click="openLoginModal" class="text-blue-600">Login</button>
                        <!-- Become a partner button -->
                        <a class="hidden lg:block lg:bg-blue-500 lg:hover:bg-blue-700 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:border lg:border-blue-700 lg:rounded-lg"
                            href="#">Become a partner</a>
                    </div>
                </div>

                <!-- SIDEBAR NAVIGATION -->
                <div class="relative lg:hidden">
                    <!-- Hamburger Icon for Mobile View -->
                    <div @click="toggleSidebar" class="lg:hidden pr-4">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6.19995H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M5 16.2H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M5 11.2H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>

                    <!-- Sidebar Navigation -->
                    <transition name="slide">

                        <div v-if="isSidebarOpen" class="absolute bg-white top-0 right-0 lg:hidden h-[100vh] w-[15rem]">
                            <div>
                                <!-- Close button -->
                                <button @click="toggleSidebar" class="absolute top-0 left-0 m-4">
                                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 6.19995H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M5 16.2H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M5 11.2H23" stroke="#222222" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <!-- Sidebar content goes here -->
                                <div class="mx-4 flex flex-col justify-between h-full">
                                    <h1 class="mt-[4rem] mb-4 font-bold text-xl">Dashboard</h1>
                                    <ul class="flex flex-row pb-5 justify-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-6 h-6">
                                            <path
                                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                            <path
                                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                        </svg>

                                        <li>
                                            <router-link to="/">Home</router-link>
                                        </li>
                                    </ul>
                                    <ul class="flex flex-row pb-5 justify-items-center gap-2 hover:bg-slate-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                                                clip-rule="evenodd" />
                                        </svg>

                                        <li>
                                            <router-link to="/notification">Notifications</router-link>
                                        </li>
                                    </ul>
                                    <ul class="flex flex-row pb-5 justify-items-center gap-2">
                                        <img src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-5 ">
                                        <li>
                                            <router-link to="/calendar">Calendar</router-link>
                                        </li>
                                    </ul>
                                    <ul class="flex flex-row pb-5 justify-items-center pl-0.5 gap-2.5">
                                        <img src="@/assets/images/Header/Transaction Icon.png" alt="transaction"
                                            class="w-4 h-5">
                                        <li>
                                            <router-link to="/transactions">Transactions</router-link>
                                        </li>
                                    </ul>
                                    <ul class="flex flex-row pb-5 justify-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-5 h-6">
                                            <path
                                                d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                        </svg>
                                        <li>
                                            <router-link to="/cart">Cart</router-link>
                                        </li>
                                    </ul>

                                    <ul @click="logout" class="flex flex-col pb-5 justify-items-center gap-2">
                                        <!-- Only render the logout button if the user has not logged out -->
                                        <div v-if="authStore.isAuthenticated">
                                            <h1 class="mt-[25rem] mb-4 font-bold text-gray-500 text-opacity-30">Settings
                                            </h1>

                                            <ul class="flex flex-col pb-5 text-left">
                                                <div class="flex flex-row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-auto h-5">
                                                        <path fill-rule="evenodd"
                                                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <li class="pl-2">
                                                        <router-link to="/profile">Profile</router-link>
                                                    </li>
                                                </div>
                                            </ul>

                                            <div class="flex flex-row">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                                </svg>
                                                <li class="pl-2">Logout</li>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="absolute bottom-[5rem] left-0 w-full p-4 flex flex-col gap-1">
                                                <div class="flex justify-center">
                                                    <button @click="openLoginModal"
                                                        class="text-left text-blue-600 py-2 bottom-3">Login</button>
                                                </div>

                                                <a class="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg text-center "
                                                    href="#">Become a Partner</a>
                                            </div>
                                        </div>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </transition>
                </div>

            </div>

        </div>

        <!-- Login Modal -->
        <div v-if="showLoginModal" class=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative bg-white lg:w-[70vw] w-[90vw] h-fit rounded-3xl">
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

                        <div class="hidden lg:block lg:flex items-center justify-between mb-4">
                            <p class="text-xs">Don't have an account? <button @click="openPrivacyModal"
                                    class="text-xs font-bold text-blue-600">Sign Up</button></p>
                            <button @click="openForgotModal" class="text-xs text-blue-600 font-bold">Forgot
                                Password?</button>
                        </div>

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

        <div v-if="showPrivacyModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white w-[90%] lg:w-[75%] lg:h-[70%] rounded-xl">
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
                    <form @submit.prevent="signup" class="w-[85%] lg:px-10 px-2 lg:mt-0 mt-5">
                        <!-- <div class="mb-5">

              </div> -->
                        <!-- make it scrollable -->
                        <div class="flex justify-between overflow-y-auto h-[230px] w-[100%] hidden-scrollbar mb-2">
                            <div class="flex flex-col">
                                <p class="font-bold text-center text-2xl lg:text-3xl mb-5">Privacy Policy</p>
                                <p class="font-bold mb-5">Collection of Personal Information:</p>
                                <p class="mb-5 text-sm text-justify">We may collect personal information from you when
                                    you interact
                                    with
                                    our website,
                                    products, or services. This information may include but is not limited to your name,
                                    email address,
                                    mailing
                                    address, phone number, and payment details. We collect this information to provide
                                    you with our
                                    services and to improve and customize your experience with us.</p>
                                <p class="font-bold mb-5">Use of Personal Information:</p>
                                <p class="mb-5 text-sm text-justify">We use the personal information we collect for
                                    various purposes,
                                    including:</p>
                                <p class="mb-5 text-sm">1. Providing and personalizing our services <br>
                                    2. Processing transactions <br>
                                    3. Communicating with you <br>
                                    4. Improving our products and services <br>
                                    5. Marketing and promotional purposes <br>
                                    6. Complying with legal obligations</p>

                                <p class="font-bold mb-5">Protection of Personal Information:</p>

                                <p class="mb-5 text-sm text-justify">We take the security of your personal information
                                    seriously and
                                    have implemented
                                    appropriate measures to protect it from unauthorized access, disclosure, alteration,
                                    or destruction.
                                    However, please note
                                    that no method of transmission over the internet or electronic storage is 100%
                                    secure, and we cannot
                                    guarantee absolute security.</p>

                                <p class="font-bold mb-5">Sharing of Personal Information:</p>

                                <p class="mb-5 text-sm text-justify">We may share your personal information with
                                    third-party service
                                    providers who assist
                                    us in providing our services, conducting our business, or servicing you. We may also
                                    share your
                                    information when
                                    required by law or to protect our rights, property, or safety.</p>

                                <p class="font-bold mb-5">Your Rights:</p>

                                <p class="mb-5 text-sm text-justify">You have the right to access, update, or delete
                                    your personal
                                    information. You may
                                    also have the right to object to or restrict certain types of processing. If you
                                    would like to
                                    exercise any of these
                                    rights, please contact us using the information provided below.</p>

                                <p class="font-bold mb-5">Changes to this Privacy Policy:</p>

                                <p class="mb-5 text-sm text-justify">We reserve the right to update or modify this
                                    Privacy Policy at
                                    any
                                    time. Any changes
                                    will be effective immediately upon posting the updated Privacy Policy on our
                                    website.</p>
                                <!-- contents -->
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center mt-10">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-5 w-5 text-blue-600 mr-2"
                                    v-model="checkboxChecked">
                                <label for="myCheckbox" class="mar">I have read and agreed to the above Privacy Policy
                                    Agreement</label>
                            </div>

                            <div class="text-center mt-5">
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
            <div class="relative pr-8 pt-8 bg-white lg:w-3/4 w-11/12 lg:h-fit h-[75%] rounded-xl">
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
                                <label for="fname" class="w-[9rem] block mb-2 ">First Name: <span
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
                                <label for="mname" class="w-[9rem] lg:ml-3 lg:mr-3">Middle Initial:</label>
                                <input id="mname" type="text" v-model="mname" placeholder="Enter Middle Initia"
                                    class="border border-gray-500 rounded-xl w-full py-3 px-3">
                            </div>
                        </div>
                        <!-- Lastname -->
                        <div class="lg:flex items-center mb-3 ">
                            <label for="lastname" class="w-[7.4rem] block">Last Name: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <input id="lastname" type="text" v-model="lastname" placeholder="Enter Last Name"
                                    class="border border-gray-500 rounded-xl w-full py-3 px-3"
                                    @input="validateLastname">
                                <span v-if="lastnameError" class="text-red-500 text-xs">{{ lastnameError }}</span>
                            </div>
                        </div>
                        <div class="w-full grid grid-cols-1 lg:grid-cols-2 ">
                            <!-- E-mail Address -->
                            <div class="lg:flex items-center mb-3">
                                <label for="email" class="w-[9rem] block mb-2 text-xs">Email Address: <span
                                        class="text-red-500 text-md">*</span></label>

                                <div class="w-full flex flex-col items-start justify-center">
                                    <input id="email" type="text" v-model="email" placeholder="Enter Email Address"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3"
                                        @input="validateEmail">
                                    <span v-if="emailError" class="text-red-500 text-xs">{{ emailError }}</span>
                                </div>
                            </div>
                            <!-- Phone Number -->
                            <div class="lg:flex items-center mb-3">
                                <label for="pnum" class="w-[7.9rem] mb-2 lg:ml-3 ">Phone No.: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="flex flex-col items-start justify-between">
                                    <div class="flex ">
                                        <!-- Text box for dialing code -->
                                        <input type="text" v-model="dialingCode" readonly
                                            class="border border-gray-500 rounded-l-xl w-[3.5rem] py-3 px-3"
                                            value="+63">
                                        <input id="pnum" type="tel" v-model="pnum" placeholder="Enter Phone Number"
                                            class="border border-gray-500 rounded-r-xl w-full py-3 px-3" maxlength="10"
                                            @input="validatePhoneNumber">
                                    </div>
                                    <span v-if="pnumError" class="text-red-500 text-xs">{{ pnumError }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full grid lg:grid-cols-2 gap-2">
                            <!-- Nationality -->
                            <div class="lg:flex items-center mb-3">
                                <label for="citizenship" class="w-[9rem] block mb-2">Nationality: <span
                                        class="text-red-500 text-md">*</span></label>
                                <div class="w-full flex flex-col items-start justify-center">
                                    <div class="relative w-full">
                                        <select id="nationality" v-model="nationality"
                                            class="border border-gray-500 rounded-xl w-full py-3 px-3 appearance-none cursor-pointer">
                                            <option v-for="(nation, index) in nationalityOptions" :key="index"
                                                :value="nation">{{ nation }}
                                            </option>
                                        </select>
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
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
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
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
                            <label for="password" class="w-[7.4rem] block ">Password: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <div class="relative w-full">
                                    <img v-if="showPassword" src="@/assets/images/Modal/view.png"
                                        class="absolute right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="togglePasswordVisibility">
                                    <img v-else src="@/assets/images/Modal/hidden.png"
                                        class="absolute  right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="togglePasswordVisibility">
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
                            <label for="rePassword" class="lg:w-[7.4rem] block">Confirm Password: <span
                                    class="text-red-500 text-md">*</span></label>
                            <div class="w-full flex flex-col items-start justify-center">
                                <div class="relative w-full">
                                    <img v-if="showCPassword" src="@/assets/images/Modal/view.png"
                                        class="absolute right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="toggleCPasswordVisibility">
                                    <img v-else src="@/assets/images/Modal/hidden.png"
                                        class="absolute  right-3 mx-3 my-4" style="width: 15px; cursor: pointer;"
                                        alt="Eye Icon" @click="toggleCPasswordVisibility">
                                    <input id="rePassword" v-model="rePassword" placeholder="Confirm Password"
                                        @input="validateRePassword" :type="showCPassword ? 'text' : 'password'"
                                        class="border border-gray-500 rounded-xl w-full py-3 px-3 ">
                                </div>
                                <span v-if="rePasswordError" class="text-red-500 text-xs">{{ rePasswordError }}</span>
                            </div>
                        </div>
                        <div class="lg:ml-[6rem]">
                            <p class=" text-xs">By using MAKATURISMO, you signify your agreement to <button
                                    @click="openTermsModal" class="text-xs font-bold text-blue-600">Terms and
                                    Conditions</button></p>
                            <button type="submit"
                                class="w-full lg:w-[10rem] font-bold mt-3 px-4 py-3 text-white disabled:bg-blue-400 bg-blue-600 rounded-md"
                                :disabled="!isSignupFormValid" @click="signup">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Terms and Condition Modal -->
        <div v-if="showTermsModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div class="relative p-7 bg-white w-[90%] lg:w-[75%] lg:h-[75%] rounded-xl">
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
                        <p class="font-bold text-center text-2xl lg:text-3xl mb-5">Terms and Conditions</p>

                        <div class="flex justify-between overflow-y-auto h-[230px] w-[100%] hidden-scrollbar mb-2">
                            <div class="flex flex-col">
                                <p class=" mb-5">Welcome to <span class="font-bold">MAKATURISMO</span>, a local tourism
                                    website that
                                    connects users, businesses, advertisers, and showcases various products and
                                    services. By accessing
                                    and
                                    using this website, you agree to comply with the following terms and conditions:</p>

                                <p class="font-bold ">1. Acceptance of Terms</p>
                                <p class="ml-4 mb-5 text-sm text-justify">By using this website, you acknowledge that
                                    you have read,
                                    understood, and agree to be bound by these terms and conditions. If you do not agree
                                    with any part
                                    of
                                    these terms, please refrain from using this website.</p>

                                <p class="font-bold ">2. User Accounts:</p>
                                <p class="ml-4 text-sm text-justify">a. To access certain features on the website, you
                                    may be required
                                    to create a user account. You must provide accurate and complete information during
                                    the registration
                                    process.</p>
                                <p class="ml-4 text-sm text-justify">b. You are responsible for maintaining the
                                    confidentiality of
                                    your
                                    account credentials and ensuring the security of your account.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. You are solely responsible for all
                                    activities conducted
                                    through your account, and you must notify us immediately of any unauthorized use or
                                    security breach.
                                </p>

                                <p class="font-bold ">3. User Responsibilities:</p>
                                <p class="ml-4 text-sm text-justify">a. Users must be at least 18 years old or have
                                    parental consent
                                    to
                                    use this website.</p>
                                <p class="ml-4 text-sm text-justify">b.Users shall not engage in any illegal, abusive,
                                    defamatory, or
                                    harmful activities while using the website.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. Users must respect the intellectual
                                    property rights of
                                    others, including businesses and advertisers featured on the website.</p>

                                <p class="font-bold ">4. Businesses and Advertisers:</p>
                                <p class="ml-4 text-sm text-justify">a. Businesses and advertisers must provide accurate
                                    and
                                    up-to-date
                                    information about their products and services.</p>
                                <p class="ml-4 text-sm text-justify">b. We reserve the right to approve or reject
                                    business listings
                                    and
                                    advertisements based on our guidelines and policies.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. Businesses and advertisers must comply with
                                    all
                                    applicable
                                    laws and regulations.</p>

                                <p class="font-bold ">5. Products and Services:</p>
                                <p class="ml-4 text-sm text-justify">a. The website may feature products and services
                                    from various
                                    businesses. We do not endorse or guarantee the quality of these products and
                                    services.</p>
                                <p class="ml-4 text-sm text-justify">b. Users are solely responsible for any
                                    transactions or
                                    interactions they enter into with businesses through this website.</p>
                                <p class="ml-4 mb-5 text-sm text-justify">c. We are not liable for any losses, damages,
                                    or disputes
                                    arising from transactions between users and businesses.</p>

                                <p class="font-bold ">6. Content Submission:</p>
                                <p class="ml-4 text-sm text-justify">a. Users may submit content to the website, such as
                                    reviews,
                                    comments, or images. By doing so, you grant us the right to use, modify, and display
                                    the content on
                                    the website. </p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Users must not submit content that is
                                    unlawful,
                                    defamatory,
                                    or infringes upon the rights of others.</p>

                                <p class="font-bold ">7. Intellectual Property:</p>
                                <p class="ml-4 text-sm text-justify">a. All content and materials on this website,
                                    including logos,
                                    trademarks, text, images, and software, are the property of Love Laguna or its
                                    licensors and are
                                    protected by intellectual property laws. </p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Users must not use, reproduce, or
                                    distribute any content
                                    from this website without obtaining proper authorization.</p>

                                <p class="font-bold ">8. Disclaimer of Liability</p>
                                <p class="ml-4 text-sm text-justify">a. The website and its content are provided "as is"
                                    without any
                                    warranties, express or implied. We do not guarantee the accuracy, completeness, or
                                    reliability of
                                    the
                                    information provided. </p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. We shall not be liable for any direct,
                                    indirect,
                                    incidental, consequential, or punitive damages arising from the use or inability to
                                    use the website
                                    or
                                    its content</p>

                                <p class="font-bold ">9. Modification and Termination</p>
                                <p class="ml-4 text-sm text-justify">a. We reserve the right to modify or terminate the
                                    website and
                                    these terms and conditions at any time without prior notice </p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Continue use of the website after any
                                    changes to the
                                    terms
                                    constitutes your acceptance of the revised terms</p>

                                <p class="font-bold ">10. Governing Law and Jurisdiction</p>
                                <p class="ml-4 text-sm text-justify">a. These terms and conditions shall be governed by
                                    and construed
                                    in
                                    accordance with the laws of the Philippines </p>
                                <p class="ml-4 mb-5 text-sm text-justify">b. Any disputes arising from the use of the
                                    website shall be
                                    subject to the exclusive jurisdiction of the courts in the Philippines.</p>

                            </div>
                        </div>

                        <div class="text-center mt-10">
                            <button type="submit" class="lg:w-[50%] w-full px-4 py-4 text-white bg-blue-600 rounded-md"
                                @click="closeTC">Continue</button>
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
                            <p class="mb-5 text-sm">Enter your email to receive an OTP for access to changing passoword
                            </p>

                            <div class="relative mb-2">
                                <div class="relative">
                                    <img src="@/assets/images/Modal/profile.png"
                                        class="absolute inset-y-0 left-0 mx-3 my-3" style="width: 15px;"
                                        alt="Username Icon" />
                                    <input type="text" id="otpEmail" v-model="otpEmail" @input="validateOtpEmail"
                                        class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                                    <span v-if="otpEmailError" class="text-red-500 text-xs">{{ otpEmailError }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center text-center mb-[10%]">
                            <button @click="openOTPModal" :disabled="!isForgotFormValid"
                                class="lg:w-fit w-full px-4 py-2 text-white disabled:bg-blue-400 bg-blue-600 rounded-lg">Receive
                                OTP
                            </button>

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
                    <svg @click="closeOTP" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="5" stroke="black" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="relative bg-white px-6 pb-9 shadow-xl mx-auto lg:w-full w-[90vw] h-fit max-w-3xl rounded-2xl">
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

    
    <div v-if="isCategoryPath($route.path)" class="hidden lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-6 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 lg:justify-center lg:text-black lg:bg-white lg:border-t  max-w-full">
        <!-- Location 1 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-l-lg" :class="['location-card', locations[0].attrib, { 'active-effect': isActive(locations[0].link) }]">
            <RouterLink :to="locations[0].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10 max-w-full max-h-full">
                    <img :src="locations[0].imgSrc" :alt="locations[0].alt" class="p-[26px] max-w-full max-h-[230px]">
                    <img :src="locations[0].imgSrc" :alt="locations[0].alt" class="p-[26px] max-w-full max-h-[230px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden " style="margin: 0;">{{
            locations[0].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-5">{{ locations[0].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-5">{{ locations[0].mobile }}</span>
                </div>
            </RouterLink>
        </div>

        <!-- Location 2 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center" :class="['location-card', locations[1].attrib, { 'active-effect': isActive(locations[1].link) }]" style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="locations[1].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10">
                    <img :src="locations[1].imgSrc" :alt="locations[1].alt" class="p-[26px] max-w-full max-h-[180px]">
                    <img :src="locations[1].imgSrc" :alt="locations[1].alt" class="p-[26px] max-w-full max-h-[180px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
            locations[1].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-2">{{ locations[1].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-2">{{ locations[1].mobile }}</span>
                </div>
            </RouterLink>
        </div>

        <!-- Location 3 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center" :class="['location-card', locations[2].attrib, { 'active-effect': isActive(locations[2].link) }]" style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="locations[2].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10">
                    <img :src="locations[2].imgSrc" :alt="locations[2].alt" class="p-[26px] max-w-full max-h-[200px]">
                    <img :src="locations[2].imgSrc" :alt="locations[2].alt" class="p-[26px] max-w-full max-h-[200px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
            locations[2].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[2].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[2].mobile }}</span>
                </div>
            </RouterLink>
        </div>

        <!-- Location 4 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center" :class="['location-card', locations[3].attrib, { 'active-effect': isActive(locations[3].link) }]" style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="locations[3].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10">
                    <img :src="locations[3].imgSrc" :alt="locations[3].alt" class="p-[26px] max-w-full max-h-[200px]">
                    <img :src="locations[3].imgSrc" :alt="locations[3].alt" class="p-[26px] max-w-full max-h-[200px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
            locations[3].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[3].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[3].mobile }}</span>
                </div>
            </RouterLink>
        </div>

        <!-- Location 5 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center" :class="['location-card', locations[4].attrib, { 'active-effect': isActive(locations[4].link) }]" style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="locations[4].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10">
                    <img :src="locations[4].imgSrc" :alt="locations[4].alt" class="p-[26px] max-w-full max-h-[190px]">
                    <img :src="locations[4].imgSrc" :alt="locations[4].alt" class="p-[26px] max-w-full max-h-[190px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
            locations[4].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[4].mobile }}</span>
                    <span class="font-bold text-1xl lg:-ml-4">{{ locations[4].mobile }}</span>
                </div>
            </RouterLink>
        </div>

        <!-- Location 6 -->
        <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-r-lg" :class="['location-card', locations[5].attrib, { 'active-effect': isActive(locations[5].link) }]" style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="locations[5].link">
                <!-- Adjust height as needed -->
                <div class="flex items-center justify-center h-10">
                    <img :src="locations[5].imgSrc" :alt="locations[5].alt" class="p-[26px] max-w-full max-h-[210px]">
                    <img :src="locations[5].imgSrc" :alt="locations[5].alt" class="p-[26px] max-w-full max-h-[210px]">
                    <!-- Adjust height as needed -->
                    <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
            locations[5].mobile }}</span>
                    <span class="font-bold text-1x lg:-ml-4">{{ locations[5].mobile }}</span>
                    <span class="font-bold text-1x lg:-ml-4">{{ locations[5].mobile }}</span>
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
        height: 100%;
        /* Adjust the height as needed */
        background-position: center;
    }
}
</style>

<script>
import {
    RouterLink
} from 'vue-router';
import {
    isMemoSame,
    ref
} from 'vue'
import {
    useAuthStore
} from '@/stores/auth'
import imageUrl from '@/assets/images/Modal/Intersect.png';
import imageUrl2 from '@/assets/images/Modal/bg2.png';
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: 'NavBar',
    components: {
        RouterLink,
    },
    data() {
        return {

            bookingItems: [
                "Booking Confirmation",
                "Order Complete",
                "Order Complete",
                "Booking Complete",
                "Order Complete",
                "Booking Complete"
            ],
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
            showPrivacyModal: false,
            showTermsModal: false,

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

            checkboxChecked: false,
            showPassword: false,
            showCPassword: false,
            passwordPolicy: [],

            usernameError: '',
            lpasswordError: '',
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
                this.passwordPolicy.length === 0
            );
        },
        isForgotFormValid() {
            return this.otpEmail.trim() !== '' && this.otpEmailError === '';
        },
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
        openNotifModal(notification) {
            switch (notification) {
                case "Booking Confirmation":
                    this.showBookingConfirmationModal = true;
                    break;
                case "Order Complete":
                    this.showOrderCompleteModal = true;
                    break;
                case "Booking Complete":
                    this.showBookingCompleteModal = true;
                    break;
                // Add cases for other types of notifications if needed
            }
        },
        closeBookingConfirmationModal() {
            this.showBookingConfirmationModal = false;
        },
        closeOrderCompleteModal() {
            this.showOrderCompleteModal = false;
        },
        closeBookingCompleteModal() {
            this.showBookingCompleteModal = false;
        },
        togglepfp() {
            this.showPFPModal = !this.showPFPModal;
            // Close notification modal if open
            if (this.showPFPModal && this.showNotifModal) {
                this.showNotifModal = false;
            }
        },

        toggleBookingConfirmationModal() {
            this.showBookingConfirmationModal = true;
        },

        toggleNotif() {
            this.showNotifModal = !this.showNotifModal;
            // Close profile modal if open
            if (this.showNotifModal && this.showPFPModal) {
                this.showPFPModal = false;
            }
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
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
            this.validateForm();

            if (!this.isSignupFormValid) {
                Swal.fire({
                    title: 'Invalid Form',
                    text: 'Please check your entries and try again.',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
                return;
            }

            const formData = new FormData();
            formData.append('firstname', this.fname);
            formData.append('lastname', this.lastname);
            formData.append('mi', this.mname);
            formData.append('email', this.email);
            formData.append('contact', this.pnum);
            formData.append('national', this.nationality);
            formData.append('gender', this.gender);
            formData.append('password', this.password);

 
            const response = await axios.post('/signupTourist', formData);
                if (response.data.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been created successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.$router.push('/dashboard');
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Signup Failed',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
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
        closeInputField(event) {
            if (!this.$refs.searchContainer.contains(event.target)) {
                this.showInput = false;
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
        }
    },
    setup() {
        const authStore = useAuthStore();
        const username = ref('');
        const lpassword = ref('');
        const showLoginModal = ref(false);
        const showPFPModal = ref(false);
        const showNotif = ref(false);
        const isSidebarOpen = ref(false);

        const openModal = () => {
            showLoginModal.value = true;
        };

        const closeModal = () => {
            showLoginModal.value = false;
        };

        const login = () => {

            const credentials = {
                username: username.value,
                password: lpassword.value
            };

            const loginSuccess = authStore.login(credentials);
            if (loginSuccess) {
                console.log('logging in...');
                closeModal(); // Close the modal if login is successful
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
            authStore
        };
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

.sidebar {
    height: 100vh;
    /* Set height to 100% of viewport height */
    width: 250px;
    /* Set desired width of sidebar */
    background-color: #fff;
    /* Set background color */
    position: fixed;
    /* Fix the position of sidebar */
    top: 0;
    /* Align to top */
    right: -250px;
    /* Initially position outside the viewport */
    transition: right 0.3s ease;
    /* Add transition effect */
    padding: 20px;
    /* Add padding */
}

.sidebar.open {
    right: 0;
    /* Move sidebar into view */

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

.hidden-scrollbar::-webkit-scrollbar {
    width: 2px;
    /* WebKit */
    height: 25px;
    background-color: transparent;
}

.hidden-scrollbar::-webkit-scrollbar-thumb {
    background-color: black;
    /* WebKit */
}

/* .slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(-10%);
} */

/*  */
.slide-enter-active,
.slide-leave-active {
    transition: 0.3s linear;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
    transform: translateX(0);

}
</style>
