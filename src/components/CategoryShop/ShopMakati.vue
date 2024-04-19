<template>
    <div class="relative pt-[57px] md:pt-[80px] justify-center ">
        <div class="relative ">
            <div class="bg-[#102E61] h-[101%] lg:h-[110%]" style="position: absolute; top: 0px; left: 0; width: 100%; ">
            </div>
            <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-10 flex items-center z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-10">
                    <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
                        <router-link to="/category/shop">
                            <a class=" flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                    style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor"
                                    class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1 cursor-pointer text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </a>
                        </router-link>
                    </div>
                    <div class="relative flex flex-col items-center justify-between">
                        <div class="lg:pl-9 grid grid-cols-1 lg:grid-cols-5 ">
                            <img src="@/assets/images/CategoryView/ToShop/shop1.png" alt=""
                                class="col-span-3 w-[100%] h-full lg:w-[100%] lg:h-[95%] rounded-l-3xl">
                            <div class="hidden col-span-2 md:grid md:grid-cols-2 gap-4 ">
                                <img src="@/assets/images/CategoryView/ToShop/shop2.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToShop/shop3.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-tr-3xl">
                                <img src="@/assets/images/CategoryView/ToShop/shop4.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToShop/shop4.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-br-3xl">
                            </div>
                        </div>
                    </div>

                    <!-- Monile -->
                    <div class="lg:hidden fixed bottom-0 w-full bg-gray-100 p-5 shadow-lg">
                        <div class="flex justify-between">
                            <div>
                                <p class="text-md">Unbeatable Deals</p>
                                <p class="text-lg font-bold">Shop with ease</p>
                            </div>
                            <div>
                                <button @click="openCartModal"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">Makati Shop</h1>
                        <p class="text-md text-white text-left pb-5">Souvenirs/Gifts Shop</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-wrap justify-between items-center mb-2 relative">
        <div class="my-4 lg:p-0 lg:w-[75%]">
            <div class="relative mx-6 px-3 lg:px-32 pt-5">
                <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
                <p class="text-lg text-justify text-black pb-5">From handmade souvenirs, eco-friendly Barongs and
                    fashionable Filipiniana to artisanal chocolates and more, Makati Shop continues its mission to embrace
                    our heritage and keep them relevant; support communities and help grow small businesses;
                    protect the environment and elevate pride in our identity.</p>
                <div class="hidden border border-gray-400 lg:w-[]">
                    <p class="text-center font-bold">Number of items</p>
                </div>

                <div class="flex flex-row">
                    <div class="pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">123 Palm Dr, Makati, Metro Manila</p>
                </div>
                <div class="flex flex-row">
                    <div class="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col pl-2.5">
                        <p class="text-lg md:text-black text-left pb-5">N/A</p>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="pt-0.25">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">(02) 8892 1024</p>
                </div>

                <!-- Best sellers -->
                <div class="my-4 lg:w-[100%]">
                    <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">BEST SELLERS</h1>
                    <div class="flex flex-wrap justify-start items-center text-white lg:w-[100%]">
                        <!-- Cards in Best seller -->
                        <div v-for="(item, index) in bestProducts" :key="index"
                            class="lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] w-[47%] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71"
                                style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                {{ item.title }}
                            </p>
                            <img class="rounded-md lg:h-[80%]" :src="item.image" alt="" width="100%">
                            <button @click="toggleshowCart(item)"
                                class="text-xs absolute bottom-4 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">
                                See More</button>
                            <div class="flex justify-end absolute bottom-[65px] right-[18px]">
                                <div class="flex justify-between">
                                    <div class="flex bg-blue-950 border-1 rounded-lg border-white">
                                        <p class="text-xs border rounded-lg border-white p-1">₱{{ item.price }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Other Items -->
                <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">OTHER ITEMS</h1>
                <div class="flex flex-wrap justify-between items-center mb-2">
                    <!-- First column -->
                    <div class="lg:w-[49%] flex flex-wrap items-center">
                        <div v-for="(item, index) in otherProducts.slice(0, 3)" :key="index" class="card-wrapper">
                            <!-- Your card content goes here -->
                            <div
                                class="card bg-blue-950 w-[100%] border-2 h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                                <div class="flex justify-between  w-[100%]">
                                    <div class="w-[40%]">
                                        <img class="rounded-md mt-2 lg:h-[89%]" :src="item.image" alt="" width="100%">
                                    </div>
                                    <div class="w-[60%]">
                                        <p class="text-xs text-white p-2 w-[75%] mb-4">{{ item.title }}</p>
                                        <p class="text-xs text-white p-2 w-[55%]">₱ {{ item.price }}</p>
                                        <div class="flex justify-between items-center mt-3 mb-2">
                                            <button @click="toggleshowCart(item)"
                                                class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                                More</button>
                                            <button @click="addToCart(item)"
                                                class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                                Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Second column -->
                    <div class="lg:w-[49%] flex flex-wrap items-center">
                        <div v-for="(item, index) in otherProducts.slice(3, 6)" :key="index" class="card-wrapper">
                            <!-- Your card content goes here -->
                            <div
                                class="card bg-blue-950 w-[100%] border-2 h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                                <div class="flex justify-between  w-[100%]">
                                    <div class="w-[40%]">
                                        <img class="rounded-md mt-2 lg:h-[89%]" :src="item.image" alt="" width="100%">
                                    </div>
                                    <div class="w-[60%]">
                                        <p class="text-xs text-white p-2 w-[75%] mb-4">{{ item.title }}</p>
                                        <p class="text-xs text-white p-2 w-[55%]">₱ {{ item.price }}</p>
                                        <div class="flex justify-between items-center mt-3 mb-2">
                                            <button @click="toggleshowCart(item)"
                                                class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                                More</button>
                                            <button @click="addToCart(item)"
                                                class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                                Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- View Add to cart modal -->
                <div v-if="showCart" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                    @click.self="closeModal">
                    <div class="bg-white lg:h-[760px] h-[640px] w-[900px]  rounded-lg shadow-md p-2 mx-5" @click.stop>
                        <div class="lg:w-[100%] p-4 rounded-lg">
                            <div class="relative flex justify-end">
                                <button class=" pr-4 pt-21 ">
                                    <svg @click="closeCart" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 30" stroke-width="5" stroke="black" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div v-if="selectedProduct" class="lg:flex lg:justify-between w-[100%]">
                                <!-- Web gallery -->

                                <div class=" hidden lg:block lg:w-[40%]">
                                    <div class="lg:flex justify-center items-center mb-3">
                                        <img :src="selectedProduct.image" class="w-auto h-24 md:w-[500px] md:h-auto">
                                    </div>

                                    <div class="lg:flex lg:justify-between grid grid-cols-1 grid-rows-3 gap-4">
                                        <div class="lg:flex lg:justify-between items-center">
                                            <img src="@/assets/images/CategoryView/ToShop/shop-product2.png"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>
                                        <div class="lg:flex lg:justify-center items-center">
                                            <img src="@/assets/images/CategoryView/ToShop/shop-product3.png"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>
                                        <div class="lg:flex lg:justify-center items-center">
                                            <img src="@/assets/images/CategoryView/ToShop/shop-product4.png"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>
                                        <div class="lg:flex lg:justify-center items-center mx-5">
                                            <img src="@/assets/images/CategoryView/ToShop/button.png"
                                                class="h-24 md:w-[40px] md:h-auto">
                                        </div>
                                    </div>
                                </div>
                                <!-- Mobile - gallery -->
                                <div class="lg:hidden grid grid-cols-2 grid-rows-1 gap-4">
                                    <div class="w-[200px] ml-4">
                                        <img :src="currentImage" class="h-52 w-full" />
                                    </div>
                                    <div class="grid-cols-1 ml-16">
                                        <img v-for="(image, index) in images" :key="index" :src="image"
                                            class="h-9 w-10 mb-2" @click="updateCurrentImage(index)" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="black" class="w-10 h-8 mt-2 cursor-pointer"
                                            @click="changeImage">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                </div>
                                <!-- right section -->
                                <div class="lg:w-[60%] px-3 mt-3">
                                    <div class="lg:flex lg:flex-col text-black">
                                        <p class="font-bold text-left text-1xl mb-2">
                                            {{ selectedProduct.title }}
                                        </p>
                                    </div>
                                    <div class="text-black mb-5">
                                        <p class="font-bold">{{ selectedProduct.shop }}</p>
                                        <div class="lg:block hidden  justify-between mb-2">
                                            <p class="w-[100%] ">₱{{ selectedProduct.price }}</p>
                                            <div class="flex justify-end">
                                                <div class="justify-between hidden lg:block">
                                                    <p class="mr-5">Quantity</p>
                                                     <div class="flex items-center">
                                                        <button @click="increaseQuantity"
                                                            class="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg">+</button>
                                                        <span>{{ selectedProduct.quantity }}</span>
                                                        <button @click="decreaseQuantity"
                                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg">-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border border-gray-200 lg:my-5"></div>
                                        <!-- description -->
                                        <div class="overflow-y-auto lg:overflow-y-visible h-[110px] lg:h-auto">
                                            <div class="justify-between mb-2 grid gap-2 mt-2">
                                                <p class="w-[100%] text-xs">• Made from canvas material</p>
                                                <p class="w-[100%] text-xs">• Durable and lightweight bag</p>
                                                <p class="w-[100%] text-xs">• Can be washed by hand or washing machine
                                                </p>
                                                <p class="w-[100%] text-xs">• Multi handle feature</p>
                                                <p class="w-[100%] text-xs">• Can be used as a handbag or tote shoulder bag
                                                </p>
                                                <p class="w-[70%] text-xs">• Color: White</p>
                                            </div>
                                        </div>
                                        <!-- preview of reviews -->
                                        <p class="lg:block hidden font-bold">Reviews</p>
                                        <button class="lg:block hidden" @click="toggleshowReviews">
                                            <div>
                                                <div
                                                    class="flex w-[100%] flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                                    <div class="inline-block w-[100%]">
                                                        <label class="flex w-[100%] text-sm font-bold">juandelacruz
                                                            ⭐️⭐️⭐️⭐️⭐</label>
                                                        <p class="flex text-sm">03-10-2024 11:30</p>
                                                    </div>
                                                    <div class="flex justify-between mb-2">
                                                        <p class="w-[100%] text-xs text-left">I will buy again.
                                                            The seller is kind and accommodating with my
                                                            requests. Transaction is smooth. ❤️</p>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex w-[100%] flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                                    <div class="inline-block w-[100%]">
                                                        <label class="flex w-[100%] text-sm font-bold">faithstamaria
                                                            ⭐️⭐️⭐️⭐️⭐</label>
                                                        <p class="flex text-sm">09-03-2024 08:30</p>
                                                    </div>
                                                    <div class="flex justify-between mb-2">
                                                        <p class="w-[100%] text-xs text-left">I will buy again.
                                                            The seller is kind and accommodating with my
                                                            requests. Transaction is smooth. ❤️</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- Mobile - Quantity counter -->
                            <div class="lg:hidden flex items-center text-black mb-4">
                                Quantity
                                <!-- <button @click="decreaseQuantity"
                                    class="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg">-</button>
                                <span v-if="selectedProduct && selectedProduct.quantity">{{ selectedProduct.quantity
                                }}</span>
                                <button @click="increaseQuantity"
                                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg">+</button> -->
                            </div>

                            <!-- buttons -->
                            <div class="flex justify-between">
                                <div class="w-[100%] flex justify-start">
                                    <button @click="addToCart(selectedProduct)"
                                        class="text-blue-600 border-blue-500 border-2 rounded-lg py-2 w-[90%]">
                                        Add to Cart</button>
                                </div>
                                <div class="w-[100%] flex justify-end">
                                    <router-link to="/checkoutshop" class="w-full">
                                        <button class="text-white bg-blue-600 rounded-lg py-3 w-[95%]">
                                            Buy Now</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Toast -->
                <div id="app">
                    <!-- Other content -->
                    <div class="toast-container">
                        <div v-if="showToast" class="toast" role="alert">
                            <!-- Toast content -->
                            <div class="toast-content flex items-center p-4 text-black-500 bg-green-300 rounded-lg shadow ">
                                <!-- Toast icon -->
                                <div
                                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="sr-only">Check icon</span>
                                </div>
                                <!-- Toast message -->
                                <div class="ms-3 text-sm font-normal">{{ toastMessage }}</div>
                                <!-- Close button -->
                                <button @click="hideToast" type="button"
                                    class="ml-3 -mx-1 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                                    aria-label="Close">
                                    <span class="sr-only">Close</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Show reviews modal -->
                <div v-if="showReviews"
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                    @click.self="closeModal">
                    <div class="bg-white overflow-y-auto h-[680px] w-[900px] overflow-hidden scrollbar-hide rounded-lg shadow-md p-2 mx-5"
                        @click.stop>
                        <div class="lg:w-[100%] p-4 rounded-lg">
                            <div class="relative flex justify-end">
                                <button class=" pr-1 pt-23 ">
                                    <svg @click="closeReviews" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 30" stroke-width="5" stroke="black" class="w-9 h-9">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <h1 class="mb-5 font-bold text-xl text-black text-left pb-2 lg:pt-3">REVIEWS</h1>
                            <div class="overflow-y-auto h-[500px] scrollbar-hide mb-2">
                                <div
                                    class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-md font-bold">juandelacruz
                                            ⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-md">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">faithstamaria
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex w-[100%]  text-black  flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">clendafaith
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">juhannamarie
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex w-[100%]  text-black  flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">jobellenina
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">chezterfaith
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating
                                            with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cart -->
        <div>
            <div v-if="totalItemsInCart  > 0" class="hidden lg:block ">
                <div class="cart-bg my-4 lg:w-[30%] lg:h-[85rem] right-7 absolute top-[8rem] ">
                    <div class="cart-list lg:w-[75%] h-[40rem] border border-gray-300 p-4 rounded-lg shadow">
                        <!-- center this div -->
                        <p class="text-center font-bold">Number of items</p>
                        <p class="text-center font-bold text-3xl">{{ totalItemsInCart  }}</p>
                        <div class="cart-list-scroll mb-5" style="height: 29rem; overflow-y: auto;">
                            <!-- Set specific height and add scrollbar -->
                            <p class="font-bold mb-5">List of items</p>
                            <div v-for="(cartItem, index) in cart" :key="index" class="flex justify-between mb-2 pr-4">
                                <p class="w-[70%]">{{ cartItem.title }}</p>
                                <p>x{{ cartItem.quantity }}</p>
                            </div>
                        </div>
                        <!-- AUTHHHHHH BUTTOONNNNNNNN -->

                        <div>
                            <login-modal v-if="!authStore.isAuthenticated && showLoginModal"
                                @close="showLoginModal = false"></login-modal>
                            <button @click="handleCheckCart"
                                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">
                                Check Cart
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <!-- Mobile- cart -->
        <div v-if="showCartModal"
            class="lg:hidden fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
            @click.self="closeModal">
            <div class="bg-white rounded-lg shadow-md p-2 max-w-md mx-5" @click.stop>
                <div class="lg:w-[100%] p-4 rounded-lg">
                    <div class="flex justify-between mb-2">
                        <div class="w-[50%]">
                            <p class="text-center font-bold">Number of items</p>
                            <p class="text-center font-bold text-3xl">9</p>
                        </div>
                        <router-link to="/cart">
                            <div class="w-[120%]">
                                <button
                                    class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Edit
                                    Cart</button>
                            </div>
                        </router-link>
                    </div>
                    <div class="mb-5">
                        <p class="font-bold">List of items</p>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Multi handed Tote Bag with embroidered Philippines Kalesa Scenery</p>
                            <p>x1</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Multi handed Tote Bag with embroidered Philippines Jeepney</p>
                            <p>x3</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Beat the Heat Graphic Tee in blush</p>
                            <p>x1</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Never Stop Exploring Graphic Tee in Gray</p>
                            <p>x2</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Ethnic Stripes Book Tote Bag</p>
                            <p>x2</p>
                        </div>
                    </div>
                    <router-link to="/checkoutshop" class="w-full">
                        <button class="text-white bg-blue-600 rounded-lg py-3 w-[95%]">Buy
                            Now</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>




    <div class="relative flex flex-col">
        <!-- Map -->
        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
            <div>
                <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />
            </div>
            <hr style="border-top: 1px solid black">
            <div>
                <h1 class="font-bold text-lg text-black text-left pt-10 pb-4">5.0 Ratings (500 Reviews)</h1>
                <div class="grid lg:grid-cols-2">
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                    <div class="flex justify-evenly">
                        <p class=" ext-lgmdext-black text-left pb-5">Factor 1</p>
                        <div class="my-2 mx-2 flex font-bold">
                            <div class="h-2 w-[14rem] rounded-full bg-black">
                                <div class="flex h-full rounded-md bg-brand-500" style="width: 30%"></div>
                            </div>
                        </div>
                        <p class=" ext-lgmdext-black text-left pb-5">5.0</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feedback Content -->

        <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
            <div class="relative border-2 border-gray-200 rounded-md px-3 py-3" v-for="(item, index) in paginatedItems"
                :key="index">
                <div class="flex flex-row">
                    <div class="pt-[0.125rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="relative left-2 text-black text-lg xl:text-xl font-medium pb-3">
                            {{ item.name }}
                        </p>
                        <p class="relative bottom-4 left-2 text-gray-600 text-lg">{{ item.date }}
                        </p>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <p class="text-justify text-black text-md leading-7">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <div v-if="showSeeMoreButton || showSeeLessButton" class="flex items-center justify-center pr-[5rem] mt-5 mb-10">
            <div v-if="showSeeMoreButton">
                <div>
                    <div
                        style="position: absolute; bottom :0; left: 0; height: 24%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);">
                    </div>
                </div>
                <div class="absolute bottom-3">
                    <button @click="seeMore"
                        class="left-0 right-0 px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See More</span>
                    </button>
                </div>
            </div>
            <div v-if="showSeeLessButton" class="mb-10">
                <div class="absolute bottom-8">
                    <button @click="seeLess"
                        class=" px-3 py-3 border-2 border-black text-black  rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See Less</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Hide scrollbar for WebKit (Chrome, Safari) */
}

.cart-list-scroll::-webkit-scrollbar {
    width: 8px;
    /* Set the width of the scrollbar */
}

.cart-list-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Set the background color of the scrollbar track */
}

.cart-list-scroll::-webkit-scrollbar-thumb {
    background: #888;
    /* Set the color of the scrollbar thumb/handle */
    border-radius: 5px;
    /* Round the corners of the scrollbar thumb */
}

.cart-list-scroll::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* Change the color of the scrollbar thumb when hovering */
}

/* Your scoped styles here */
.toast-container {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 9999;
}

.toast {
    position: relative;
    transition: transform 0.3s ease-in-out;
}

.toast-content {
    max-width: 20rem;
    /* Adjust max-width as needed */
}
</style>




<script>
import MapRenderer from "@/components/MapRenderer.vue";
import LoginModal from '@/components/LoginModal.vue';
import { defineComponent, ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/toShopCart';
import { useRouter } from 'vue-router';
import shopProduct1 from '@/assets/images/CategoryView/ToShop/shop-product1.png';
import shopProduct2 from '@/assets/images/CategoryView/ToShop/shop-product2.png';
import shopProduct3 from '@/assets/images/CategoryView/ToShop/shop-product3.png';
import shopProduct4 from '@/assets/images/CategoryView/ToShop/shop-product4.png';
import bestProduct1 from '@/assets/images/CategoryView/ToShop/shop-product1.png';
import bestProduct2 from '@/assets/images/CategoryView/ToShop/shop-product2.png';
import bestProduct3 from '@/assets/images/CategoryView/ToShop/shop-product3.png';
import otherProduct4 from '@/assets/images/CategoryView/ToShop/shop-product4.png';
import otherProduct5 from '@/assets/images/CategoryView/ToShop/shop-product5.png';
import otherProduct6 from '@/assets/images/CategoryView/ToShop/shop-product6.png';
import otherProduct7 from '@/assets/images/CategoryView/ToShop/shop-product7.png';
import otherProduct8 from '@/assets/images/CategoryView/ToShop/shop-product8.png';
import otherProduct9 from '@/assets/images/CategoryView/ToShop/shop-product9.png';

export default defineComponent({
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    components: {
        MapRenderer,
        LoginModal
    },
    setup() {
        const cartStore = useCartStore();

        const router = useRouter();
        // nics
        const cart = computed(() => cartStore.cart);

        const showToast = ref(false);
        const toastMessage = ref("");
        const currentPage = ref(0);
        const showCart = ref(false);
        const showCartModal = ref(false);
        const selectedProduct = ref(null);

        const currentIndex = ref(0);
        // nics end
        const showReviews = ref(false);
        const showAddtoCart = ref(false); // Define showAddtoCart
        const authStore = useAuthStore();
        const showLoginModal = ref(false);
        const showSeeLessButton = ref(false);
        const count = ref(0);
        const numFeedbackShown = ref(0);
        const items = [
            {
                name: 'Juan Dela Cruz',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                date: 'December 2023',

            },
            {
                name: 'Luis Paolo',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
                date: 'December 2023',

            },
            {
                name: 'Luis Paolo',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
                date: 'December 2023',

            },
            {
                name: 'Juan Dela Cruz',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                date: 'December 2023',

            },
            {
                name: 'Juan Dela Cruz',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                date: 'December 2023',

            },
            {
                name: 'Luis Paolo',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
                date: 'December 2023',

            },
            {
                name: 'Luis Paolo',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. ",
                date: 'December 2023',

            },
            {
                name: 'Juan Dela Cruz',
                description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                date: 'December 2023',

            },
        ];

        const bestProducts = [{
            title: "1 Multi handle Tote bag with Embroided Philippine Kalesa Scenery",
            image: bestProduct1,
            price: 399.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "2 Multi handle Tote bag with Embroided Philippine Kalesa Scenery",
            image: bestProduct2,
            price: 399.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "3 Multi handle Tote bag with Embroided Philippine Kalesa Scenery",
            image: bestProduct3,
            price: 399.00,
            shop: "Makati Shop",
            quantity: 1
        },
            // Add more products as needed
        ];
        const otherProducts = [{
            title: "Beat the Heat Graphic Tee in Blush ",
            image: otherProduct4,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "Mini Gold Tin with Wooden Base Calesa",
            image: otherProduct5,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "Mini Gold Tin with Wooden Base Vinta ",
            image: otherProduct6,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "Never Stop Exploring Graphic Tee in Gray",
            image: otherProduct7,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "Mini Gold Tin with Wooden Base Nipa Hut Coconut Tree",
            image: otherProduct8,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        {
            title: "  Mini Gold Tin with Wooden Base Tricycle",
            image: otherProduct9,
            price: 100.00,
            shop: "Makati Shop",
            quantity: 1
        },
        ];
        const images = [shopProduct1, shopProduct2, shopProduct3, shopProduct4];
        const categories = ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'];
        const locations = ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'];


        // const getTotalItemsInCart = computed(() => {
        //     return this.cart.value.reduce((total, item) => total + item.quantity, 0);

        // });
        const paginatedItems = computed(() => {
            return items.slice(0, 2 + numFeedbackShown.value);
        });

        const currentImage = computed(() => {
            return images[currentIndex.value];
        });

        const showSeeMoreButton = computed(() => {
            return numFeedbackShown.value < items.length - 2;
        });

        const totalItemsInCart = computed(() => {
            return cartStore.cart.reduce((total, item) => total + item.quantity, 0);
        });

        const clearCartAndNavigate = () => {
            cartStore.clearCart();
            // navigate to checkoutshop route
        };

        const handleCheckCart = () => {
            if (!authStore.isAuthenticated) {
                // Set the intended route
                authStore.setIntendedRoute('/checkoutshop');
                // Show the login modal
                showLoginModal.value = true;
            } else {
                // If user is already authenticated, navigate to the checkoutshop route directly
                router.push('/checkoutshop');
            }
        };



        const openCartModal = () => {
            showCartModal.value = true;

        };

        const closeLoginModal = () => {
            showLoginModal.value = false;
        };

        const seeMore = () => {
            numFeedbackShown.value += 2;
            if (!showSeeMoreButton.value) {
                showSeeLessButton.value = true;
            }
        };

        const seeLess = () => {
            numFeedbackShown.value = 0;
            showSeeLessButton.value = false;
        };
        const changeImage = () => {
            currentIndex.value = (currentIndex.value + 1) % images.length;
        };

        const updateCurrentImage = (index) => {
            currentIndex.value = index;
        };

        const increment = () => {
            count.value++;
        };

        const decrement = () => {
            if (count.value > 0) {
                count.value--;
            }
        };

        const toggleshowCart = (item) => {
            selectedProduct.value = item;
            // console.log(selectedProduct.value); // Log selectedProduct to check its contents
            showCart.value = true;
        };


        const closeCart = () => {
            showCart.value = false;
        };

        const closeModal = () => {
            showCartModal.value = false;
        };

        const toggleshowReviews = () => {
            showReviews.value = true;
            showCart.value = false;
        };

        const closeReviews = () => {
            showReviews.value = false;
            showCart.value = true;
        };

        const increaseQuantity = () => {
            selectedProduct.value.quantity++;
        };

        const decreaseQuantity = () => {
            if (selectedProduct.value.quantity > 1) {
                selectedProduct.value.quantity--;
            }
        };

        const showToastWithMessage = (message) => {
            toastMessage.value = message;
            showToast.value = true;

            setTimeout(() => {
                showToast.value = false;
                toastMessage.value = "";
            }, 3000); // Hide the toast after 3 seconds
        };

        const hideToast = () => {
            showToast.value = false;
            toastMessage.value = "";
        };
        const addToCart = (item) => {
            selectedProduct.value = item;
            // Ensure cartStore.cart is initialized
            if (!cartStore.cart) {
                cartStore.cart = [];
            }
            
            const existingProductIndex = cartStore.cart.findIndex(cartItem => cartItem.title === item.title);
            if (existingProductIndex !== -1) {
                cartStore.cart[existingProductIndex].quantity += item.quantity;
                const updatedProduct = cartStore.cart.splice(existingProductIndex, 1)[0];
                cartStore.cart.unshift(updatedProduct);
            } else {
                cartStore.addToCart({
                    title: item.title,
                    quantity: item.quantity,
                    price: item.price
                });
            }
            showCart.value = false;
            selectedProduct.value.quantity = 1;
            showToastWithMessage("Item has been added to cart");
        };

        /////////////////////////////////////////
        return {
            clearCartAndNavigate,
            useCartStore,
            cart,
            showAddtoCart,
            openCartModal,
            // getTotalItemsInCart,
            bestProducts,
            otherProducts,
            showToast,
            toastMessage,
            currentPage,
            decreaseQuantity,
            increaseQuantity,
            hideToast,
            addToCart,
            showCart,
            router,
            authStore,
            showLoginModal,
            showCartModal,
            showReviews,
            items,
            images,
            currentIndex,
            count,
            numFeedbackShown,
            showSeeLessButton,
            categories,
            locations,
            paginatedItems,
            currentImage,
            showSeeMoreButton,
            closeLoginModal,
            seeMore,
            seeLess,
            handleCheckCart,
            changeImage,
            updateCurrentImage,
            increment,
            decrement,
            toggleshowCart,
            closeCart,
            closeModal,
            toggleshowReviews,
            closeReviews,
            selectedProduct,
            totalItemsInCart

        };
    }
});
</script>