
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
                <div class=" hidden lg:block relative  " ref="searchContainer">
                    <SearchFilter />
                </div>
                <!-- Calendar -->
                <RouterLink to="/calendar" class="hidden text-white md:inline-block"><img
                        src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-6 mx-2"></RouterLink>
                <!-- WHEN USER IS LOGGED IN-->
                <div v-if="authStore.isAuthenticated">
                    <div class="hidden lg:flex items-center space-x-6">
                        <!-- Notification Icon -->
                        <svg @click="toggleNotif" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-7 h-7">
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
                                <RouterLink to="/cartallproducts">
                                    <button class=" hover:bg-blue-600 flex items-center w-full p-3 bg-white rounded-xl"
                                        @click="toggleDropdown(null)">
                                        <span class="ml-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                class="w-6 h-6">
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
                        <button @click="openModal" class="text-blue-600">Login</button>
                        <a class="hidden lg:block lg:bg-blue-500 lg:hover:bg-blue-700 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:border lg:border-blue-700 lg:rounded-lg"
                            href="http://bizmakati.simplevia.com/" target="_blank">
                            Become a partner
                        </a>
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
                                            <router-link to="/cartallproducts">Cart</router-link>
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
                                                    <button @click="openModal"
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


        <div v-if="isCategoryPath($route.path)"
            class="hidden lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-6 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 lg:justify-center lg:text-black lg:bg-white lg:border-t  max-w-full">
            <!-- Location 1 -->
            <div class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card flex items-center rounded-l-lg"
                :class="['location-card', locations[0].attrib, { 'active-effect': isActive(locations[0].link) }]">
                <RouterLink :to="locations[0].link">
                    <!-- Adjust height as needed -->
                    <div class="flex items-center justify-center h-10 max-w-full max-h-full">
                        <img :src="locations[0].imgSrc" :alt="locations[0].alt" class="p-[26px] max-w-full max-h-[230px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden " style="margin: 0;">{{
                            locations[0].mobile }}</span>
                        <span class="font-bold text-1xl lg:-ml-5">{{ locations[0].mobile }}</span>
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
                        <img :src="locations[1].imgSrc" :alt="locations[1].alt" class="p-[26px] max-w-full max-h-[180px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                            locations[1].mobile }}</span>
                        <span class="font-bold text-1xl lg:-ml-2">{{ locations[1].mobile }}</span>
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
                        <img :src="locations[2].imgSrc" :alt="locations[2].alt" class="p-[26px] max-w-full max-h-[200px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                            locations[2].mobile }}</span>
                        <span class="font-bold text-1xl lg:-ml-4">{{ locations[2].mobile }}</span>
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
                        <img :src="locations[3].imgSrc" :alt="locations[3].alt" class="p-[26px] max-w-full max-h-[200px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                            locations[3].mobile }}</span>
                        <span class="font-bold text-1xl lg:-ml-4">{{ locations[3].mobile }}</span>
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
                        <img :src="locations[4].imgSrc" :alt="locations[4].alt" class="p-[26px] max-w-full max-h-[190px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                            locations[4].mobile }}</span>
                        <span class="font-bold text-1xl lg:-ml-4">{{ locations[4].mobile }}</span>
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
                        <img :src="locations[5].imgSrc" :alt="locations[5].alt" class="p-[26px] max-w-full max-h-[210px]">
                        <!-- Adjust height as needed -->
                        <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{
                            locations[5].mobile }}</span>
                        <span class="font-bold text-1x lg:-ml-4">{{ locations[5].mobile }}</span>
                    </div>
                </RouterLink>
            </div>
            <!-- Repeat the above structure for each location, changing the indices accordingly -->
        </div>
        <LoginModal :showModal="showLoginModal" @close="closeModal" />

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
    ref
} from 'vue'
import {
    useAuthStore
} from '@/stores/auth'
import axios from 'axios';
import imageUrl from '@/assets/images/Modal/Intersect.png';
import imageUrl2 from '@/assets/images/Modal/bg2.png';
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';
import LoginModal from '@/components/LoginModal.vue'; // Adjust the path as necessary


import SearchFilter from '@/views/SearchFilter.vue';
export default {
    name: 'NavBar',
    components: {
        RouterLink,
        SearchFilter,
        LoginModal
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
            showLoginModal: false,
            showApproval: false,
            showBookingConfirmationModal: false,
            showOrderCompleteModal: false,
            showBookingCompleteModal: false,
            isSidebarOpen: false,
            showInput: false,
            showNotifModal: false,
            showPFPModal: false,

            showLoginModal: false,
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
        openModal() {
            this.showLoginModal = true;
        },
        closeModal() {
            this.showLoginModal = false;
        },
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

        isCategoryPath(path) {
            return path.startsWith('/category/') && path.split('/').length === 3;
        },
        isActive(link) {
            // Check if the current route contains the provided link
            return this.currentRoute.includes(link);
        },

    },
    setup() {
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
                closeModal();
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
            loginErrorMessage
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
