<template>
    <div class="relative pt-[57px] md:pt-[80px] justify-center ">
        <div class="relative ">
            <div class="bg-[#102E61] h-[100%] lg:h-[100%]" style="position: absolute; top: 0px; left: 0; width: 100%; ">
            </div>
            <div class=" z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-16">
                    <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
                        <router-link to="/category/eat">
                            <a class=" flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" style="filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));" stroke="currentColor" class="w-8 ml-5 lg:ml-0 lg:w-10 h-12 lg:h-10 hover:bg-gray-300 rounded-md p-1 cursor-pointer text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                            </a>
                        </router-link>
                    </div>
                    <div class=" lg:pr-[7rem] justify-center flex w-full ">
                        <ContentCarousel :items="items" class="mb-10 w-full lg:ml-9" />
                    </div>
                    <div class="lg:hidden fixed bottom-0 w-full bg-gray-100 p-5 shadow-lg z-50">
                        <div class="flex justify-between">
                            <div>
                                <p class="text-md" v-if="!hasWebsiteLink">Ordering made easy</p>
                                <p class="text-md text-[17px]" v-else>To see more of what the website offers, click the button below</p>
                                <p class="text-lg font-bold" v-if="!hasWebsiteLink">Just a click away</p>
                            </div>
                            <div>
                                <router-link v-if="!hasWebsiteLink" to="/cartallproducts">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                                            Shop Now
                                        </button>
                                </router-link>
                                <button v-else @click="visitWebsite" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg">
                                        Visit Website
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ storedetails.storename }}
                        </h1>
                        <p class="text-md text-white text-left pb-5">Restaurant</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-between items-center mb-2 relative">
        <div class="my-4 lg:p-0 lg:w-[75%] flex flex-col ">
            <div class="relative mx-6 px-3 lg:px-32 pt-5 ">
                <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
                <p class="text-lg lg:text-justify text-black pb-5 break-words overflow-wrap break-word word-break break-all">
                    {{ storedetails.description }}</p>
                <div class="hidden border border-gray-400 lg:w-[]">
                    <p class="text-center font-bold">Number of items</p>
                </div>
                <div class="flex flex-row">
                    <div class="pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                    </div>
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">{{ storedetails.address }}</p>
                </div>
                <div class="flex flex-row">
                    <div class="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </div>
                    <div class="flex flex-col pl-2.5">
                        <p class="text-lg md:text-black text-left pb-5">{{ storedetails.storehours }} | {{ storedetails.storesched }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="pt-0.25">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                    </div>
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{ storedetails.storecontact }}</p>
                </div>
                <!-- Best Seller -->
                <div class="my-4 lg:w-[100%]">
                    <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">BEST SELLERS</h1>
                    <div class="grid grid-cols-2 md:grid-cols-3 justify-start text-white lg:w-[70%]">
                        <!-- Cards in Best Seller -->
                        <div v-for="(product, index) in bestProducts" :key="index" class="lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                {{ product.productname }}
                            </p>
                            <img class="rounded-md h-[80%]" :src="getImageUrl(product.uploadedphotos.split('|')[0])" alt="" width="100%">
                            <button @click="toggleshowCart(product)" class="text-xs absolute lg:bottom-4 bottom-2 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">
                                    See More
                                </button>
                            <div class="flex justify-end absolute lg:bottom-[65px] bottom-[50px] right-[18px]">
                                <div class="flex justify-between">
                                    <div class="flex bg-blue-950 border-1 rounded-lg border-white">
                                        <p class="text-xs border rounded-lg border-white p-1">₱{{ product.productprice }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Other Items -->
                <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">OTHER ITEMS</h1>
                <div class="flex w-[100%]">
                    <div class="flex justify-between items-center mb-2 space-x-5 ">
                        <!-- WEB VERSION OTHER ITEMS -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-full w-[343px]">
                            <div v-for="(product, index) in otherProducts" :key="index" class="card-wrapper">
                                <div class="card bg-blue-950 w-full border-2 m-1 p-2 rounded-xl relative flex flex-col justify-between h-full">
                                    <div class="flex justify-between w-full h-full">
                                        <div class="w-[180px] overflow-hidden">
                                            <img class="w-full h-full object-cover" :src="getImageUrl(product.uploadedphotos.split('|')[0])" alt="" />
                                        </div>
                                        <div class="w-[calc(100%-200px)] flex flex-col justify-between">
                                            <div class="flex-grow">
                                                <p class="text-xs text-white p-2">{{ product.productname }}</p>
                                                <p class="text-xs text-white p-2">₱ {{ product.productprice }}</p>
                                            </div>
                                            <div class="mt-auto lg:flex lg:justify-between lg:items-center hidden">
                                                <button @click="toggleshowCart(product)" :class="{ 'w-[100%] mt-[80px]': hasWebsiteLink, 'w-[45%]': !hasWebsiteLink }" class="text-xs bg-blue-900 rounded-lg m-1  py-1  px-3 text-white">
                            See More
                        </button>
                                                <button v-if="!hasWebsiteLink" @click="addToCart(product)" class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[45%] text-white m-1">
                            Add to Cart
                        </button>
                                            </div>
                                            <div :class="{ 'items-center lg:hidden mt-8': hasWebsiteLink, 'grid grid-rows-2 items-center lg:hidden mt-8': !hasWebsiteLink }">
                                                <button @click="toggleshowCart(product)" :class="{ 'w-[100%]': hasWebsiteLink, 'w-[100%]': hasWebsiteLink }" class="text-xs bg-blue-900 rounded-lg py-2 px-3 w-[100%] text-white mt-5">
                            See More
                        </button>
                                                <button v-if="!hasWebsiteLink" @click="addToCart(product)" class="text-xs bg-blue-600 rounded-lg py-2 px-3 w-[100%] text-white">
                            Add to Cart
                        </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- mobile verrrrrrrrrrrrrrrrr -->
                <!-- View Add to cart modal -->
                <div v-if="showCart" class="fixed inset-0 bg-gray-500 bg-opacity-75  z-[10] flex items-center justify-center " @click.self="closeModal">
                    <div class="bg-white lg:h-[640px]  lg:w-[60%] lg:rounded-3xl h-full w-full shadow-md " @click.stop>
                        <div class="lg:w-[100%] p-4 rounded-lg h-full">
                            <div class="lg:block hidden relative  justify-end">
                                <button class=" pr-4 pt-21 ml-[97%]">
                                        <svg @click="closeCart" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 20 30" stroke-width="5" stroke="black" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                            </div>
                            <button @click="closeCart" class=" lg:hidden pt-21 ml-2 mt-20">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                    </svg>
                                </button>
                            <div v-if="selectedProduct" class="lg:flex lg:justify-between w-[100%]">
                                <div class="hidden lg:block lg:w-[40%]">
                                    <div class="lg:flex justify-center items-center mb-3">
                                        <!-- Display the currentImage in a larger view -->
                                        <img :src="currentImage" class="h-[400px] object-fill rounded-lg w-full" />
                                    </div>
                                    <div class="lg:flex lg:justify-between grid grid-cols-1 grid-rows-2">
                                        <div class="lg:flex lg:justify-center items-center gap-4">
                                            <!-- Loop through selectedProductImages and display thumbnails -->
                                            <img v-for="(image, index) in selectedProductImages" :key="index" :src="getImageUrl(image)" class="h-20 w-20 mb-2 cursor-pointer" @click="updateCurrentImage(index)" />
                                        </div>
                                        <div class="flex justify-center gap-4 mt-4">
                                            <!-- Button to navigate to the next image -->
                                            <svg @click="nextImage" class="w-10 h-10 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <!-- Mobile - gallery -->
                                <div class="lg:hidden grid grid-cols-2 grid-rows-1 gap-4 my-8">
                                    <div class="w-[235px] ml-4">
                                        <img :src="currentImage" class="h-60 w-full rounded-lg" />
                                    </div>
                                    <div class="grid-cols-1 ml-20">
                                        <img v-for="(image, index) in selectedProductImages" :key="index" :src="getImageUrl(image)" class="h-16 w-20 mb-2" @click="updateCurrentImage(index)" />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-[60px] h-10 mt-2 ml-2 cursor-pointer" @click="nextImage">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                    </div>
                                </div>
                                <!-- right section -->
                                <div class="lg:w-[60%] px-3">
                                    <div class="lg:flex lg:flex-col text-black">
                                        <p class="font-bold text-left lg:text-3xl text-2xl my-6 lg:my-0" style="line-height: 1.2;">
                                            {{ selectedProduct.productname }}
                                        </p>
                                    </div>
                                    <div class=" flex flex-col text-black mb-3 mt-4">
                                        <p class="font-bold text-xl">{{ storedetails.storename }}</p>
                                        <div class="lg:inline-flex hidden items-center justify-between" style="line-height: 2;">
                                            <div class="text-2xl">₱{{ selectedProduct.productprice }}</div>
                                            <div v-if="!hasWebsiteLink" class="flex items-center">
                                                <p>Quantity</p>
                                                <button @click="decreaseQuantity" class="ml-4 px-4 py-1 bg-gray-200 text-gray-700 rounded-l-lg">-</button>
                                                <span class="px-4">{{ selectedProduct ? selectedProduct.quantity : 1
                                                    }}</span>
                                                <!-- Display the current quantity -->
                                                <button @click="increaseQuantity" class="px-4 py-1 bg-gray-200 text-gray-700 rounded-r-lg">+</button>
                                            </div>
                                        </div>
                                        <div class="border border-gray-200 lg:my-3 my-2"></div>
                                        <!-- description -->
                                        <div class=" lg:h-auto">
                                            <div class="justify-between mb-2 grid  gap-2 mt-5 lg:mt-0">
                                                <p class="w-[100%]">{{ selectedProduct.description }}</p>
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
                                        <!-- Mobile - Quantity counter -->
                                        <div v-if="!hasWebsiteLink" class="p-2 mt-3">
                                            <div class="lg:hidden flex items-center text-black my-6">
                                                Quantity
                                                <button @click="decreaseQuantity" class="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg">-</button>
                                                <span class="p-2">{{ selectedProduct ? selectedProduct.quantity : 1
                                                    }}</span>
                                                <button @click="increaseQuantity" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg">+</button>
                                            </div>
                                            <!-- buttons -->
                                            <div class="flex justify-between">
                                                <div class="w-[100%] flex justify-start ">
                                                    <button v-if="!hasWebsiteLink" @click="addToCart(selectedProduct)" class="text-blue-600 border-blue-500 border-2 rounded-lg py-2 w-[90%]">
                                                            Add to Cart</button>
                                                </div>
                                                <div class="w-[100%] flex justify-end">
                                                    <div v-if="!isCartEmpty" class="w-full">
                                                        <!-- Update the click event handler to call handleBuyNow function -->
                                                        <button @click="handleBuyNow" class="text-white bg-blue-600 rounded-lg py-3 w-[95%]">
                                                                Buy Now
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    <span class="sr-only">Check icon</span>
                                </div>
                                <!-- Toast message -->
                                <div class="ms-3 text-sm font-normal">{{ toastMessage }}</div>
                                <!-- Close button -->
                                <button @click="hideToast" type="button" class="ml-3 -mx-1 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" aria-label="Close">
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
                <div v-if="showReviews" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center" @click.self="closeModal">
                    <div class="bg-white overflow-y-auto h-[680px] w-[900px] overflow-hidden scrollbar-hide rounded-lg shadow-md p-2 mx-5" @click.stop>
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
                                <div class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-md font-bold">juandelacruz
                                                ⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-md">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">faithstamaria
                                                ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-[100%]  text-black  flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">clendafaith
                                                ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">juhannamarie
                                                ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-[100%]  text-black  flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">jobellenina
                                                ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-[100%]  text-black flex-col col-span-2 items-left bg-gray-300 mt-3 mb-3 rounded-xl p-3">
                                    <div class="inline-block w-[100%]">
                                        <label class="flex w-[100%] text-mb font-bold">chezterfaith
                                                ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-mb">I will buy again. The seller is kind and accommodating with my requests. Transaction is smooth. ❤️
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Cart Modal Section -->
        <div v-if="showCartModal && totalItemsInCart > 0" class="z-[1]">
            <div class="lg:block hidden">
                <div class="cart-bg my-4 lg:w-[30%] lg:h-[85rem] right-7 absolute top-[8rem]">
                    <div class="cart-list lg:w-[75%] h-[40rem] border border-gray-300 p-4 rounded-lg shadow">
                        <div class="grid grid-rows-2 gap-0">
                            <div>
                                <p class="text-center font-bold">Number of items</p>
                            </div>
                            <div class="-mt-3">
                                <p class="text-center font-bold text-3xl">{{ totalItemsInCart }}</p>
                            </div>
                        </div>
                        <div class="cart-list-scroll mb-5" style="height: 29rem; overflow-y: auto;">
                            <p class="font-bold mb-5">List of items</p>
                            <div v-for="(cartItem, index) in cartFinalStore.cartItems.flatMap(group => group.items)" :key="index" class="flex justify-between mb-2 pr-4">
                                <p class="w-[70%]">{{ cartItem.product_details.productname || 'No name available' }}</p>
                                <p>x{{ cartItem.quantity }}</p>
                            </div>
                        </div>
                        <div v-if="!isCartEmpty">
                            <button @click="handleBuyNow" class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%] ">
                                    Buy Now
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="hasWebsiteLink" class="cart-bg my-4 lg:w-[30%] lg:h-[50rem] right-7 absolute top-[8rem] lg:block hidden">
            <div class="cart-list lg:w-[75%] h-[11rem] border border-gray-300 p-4 rounded-lg shadow">
                <div>
                    <p class="text-center text-lg font-semibold">To see more of what the website <br>offers, click the button below</p>
                    <button v-if="hasWebsiteLink" @click="visitWebsite" class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%] mt-5 font-semibold">
                            Visit website
                        </button>
                </div>
            </div>
        </div>
        <!-- Mobile- cart -->
        <!-- <template v-if="showCartModal && totalItemsInCart>
                                 0">
                                <div class="lg:hidden fixed inset-0 h-full w-full z-50 flex items-center justify-center" @click.self="closeModal">
                                    <div class="bg-white rounded-lg shadow-md h-full w-full p-2 " @click.stop>
                                        <div class="lg:w-[100%] p-4 rounded-lg">
                                            <button @click="closeModal" class="absolute top-0 left-0 m-4 text-gray-600 hover:text-gray-800">
                                                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                      d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                                              </svg>
                                                          </button>
                                            <div class=" flex mb-2 mt-12 border-b-2 justify-center">
                                                <div class="w-[50%]">
                                                    <p class="text-center font-bold">Number of items</p>
                                                    <p class="text-center font-bold text-3xl">{{ totalItemsInCart }}</p>
                                                </div>
                                       
                                                      
                                                  </div>
                                                  <div class="cart-list mb-5 p-4 border border-gray-200 rounded-lg shadow-sm">
                              <h2 class="text-lg font-semibold mb-4">List of Items</h2>
                              <template v-if="!isCartEmpty">
                                <div v-for="(cartItem, index) in cartFinalStore.cartItems.flatMap(group => group.items)" :key="index" class="flex justify-between items-center mb-3 p-2 bg-white border-b border-gray-200 rounded-md shadow-sm">
                                  <p class="w-3/4 text-gray-700">{{ cartItem.product_details.productname || 'No name available' }}</p>
                                  <p class="text-gray-500">x{{ cartItem.quantity }}</p>
                                </div>
</template>
<template v-else>
    <p class="text-center text-gray-500">
        Your cart is empty</p>
</template>
</div>

                      <div v-if="!isCartEmpty">

                          <button @click="handleBuyNow"
                              class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%]">
                              Buy Now
                          </button>
                      </div>

                  </div>
              </div>
          </div>
      </template> -->

    </div>
    <!--  -->
    <div class="relative flex flex-col">
        <!-- Map -->
        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5 ">
            <div class="">
                <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />
            </div>
            <hr style="border-top: 1px solid black">
            <!-- <div>
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
            </div> -->
        </div>
        <!-- Feedback Content -->
        <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
            <div class="relative border-2 border-gray-200 rounded-md px-3 py-3" v-for="( item, index ) in  paginatedItems "
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
    <div class="z-[999]">
        <login-modal v-if="showLoginModal" @close="handleCloseLoginModal" :showModal="showLoginModal" />
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
<script setup>
    import {
        ref,
        computed,
        watch,
        reactive,
        onMounted
    } from 'vue';
    import axios from 'axios';
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import {
        useCartFinalStore
    } from '@/stores/finalCart';
    import ContentCarousel from '@/components/Carousel.vue';
    import MapRenderer from "@/components/MapRenderer.vue";
    import {
        useAuthStore
    } from '@/stores/auth';
    import {
        useCartStoreEat
    } from '@/stores/toEatCart';
    import LoginModal from '@/components/LoginModal.vue';
    const props = defineProps({
        latitude: Number,
        longitude: Number,
        name: String,
        id: Number,
        item: String,
        imageList: String,
    });
    const model = reactive({
        productsArray: [],
    });
    const cartFinalStore = useCartFinalStore();
    const cartStore = useCartStoreEat();
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter(); // Initialize router
    const cart = computed(() => cartFinalStore.cartItems);
    const buyNowProducts = ref([]);
    const selectedProduct = ref(null);
    const showToast = ref(false);
    const toastMessage = ref("");
    const showCart = ref(false);
    const showCartModal = ref(false); // Ensure it's reactive
    const showReviews = ref(false);
    const showLoginModal = ref(false);
    const showSeeLessButton = ref(false);
    const numFeedbackShown = ref(0);
    const id = ref('');
    const storedetails = reactive({});
    const currentImageIndex = ref(0);
    const selectedProductImages = ref([]);
    const currentImage = ref('');
    const items = [];
    const bestProducts = ref([]);
    const otherProducts = ref([]);
    const categories = ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'];
    const hasWebsiteLink = computed(() => {
        if (storedetails.websitelink) {
            const websitelink = JSON.parse(storedetails.websitelink);
            return websitelink.redirectweb_status === "true";
        }
        return false;
    });
    const getImageUrl = (fileName) => {
        return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
    };
    const totalItemsInCart = computed(() => {
        const quantitiesByProductId = cartFinalStore.cartItems.flatMap(group => group.items).reduce((acc, item) => {
            const productId = item.product_id;
            const quantity = parseInt(item.quantity, 10); // Ensure quantity is treated as a number
            if (!acc[productId]) {
                acc[productId] = 0;
            }
            acc[productId] += quantity;
            return acc;
        }, {});
        return Object.values(quantitiesByProductId).reduce((total, qty) => total + qty, 0);
    });
    watch(totalItemsInCart, (newTotal) => {
        console.log("totalItemsInCart:", newTotal);
        console.log("totalItemsCount:", totalItemsInCart.value); // Log the totalItemsInCart value
    });
    const addToCart = async(product) => {
        if (!authStore.isAuthenticated) {
            console.log("User not authenticated");
            authStore.setIntendedRoute(router.currentRoute.value.path);
            showLoginModal.value = true;
            console.log("showLoginModal set to true:", showLoginModal.value);
            return;
        }
        product.quantity = product.quantity || 1; // Ensure quantity is initialized
        try {
            await cartFinalStore.addOrUpdateCart(product);
            console.log("Product added or updated in database:", product);
            showToastWithMessage("Item has been added to cart");
            showCartModal.value = true; // Show the cart modal after adding an item
            console.log("showCartModal:", showCartModal.value);
        } catch (error) {
            console.error("Error adding or updating item in cart:", error);
            showToastWithMessage("Error adding item to cart");
        }
    };
    const activeProductsArray = computed(() => {
        return model.productsArray.filter(product => product.status === 'Active');
    });
    const handleCloseLoginModal = () => {
        showLoginModal.value = false;
    };
    watch(() => authStore.isAuthenticated, (isAuthenticated) => {
        if (isAuthenticated) {
            showLoginModal.value = false;
            const intendedRoute = authStore.intendedRoute || '/';
            router.push(intendedRoute);
        }
    });
    const getId = () => {
        axios.get(`/getStore/${id.value}`).then((response) => {
            const storeparse = JSON.parse(response.data.message);
            Object.assign(storedetails, storeparse);
            // Assuming response.data.websitelink is already an object
            storedetails.websitelink = response.data.websitelink;
            const allProducts = JSON.parse(response.data.getProducts);
            const activeProducts = allProducts.filter(product => product.status === 'Active');
            model.productsArray = activeProducts; // Update model.productsArray to contain only active products
            categorizeProducts(activeProducts); // Categorize only active products
        }).catch((error) => {
            console.log(error);
        });
    };
    const visitWebsite = () => {
        if (hasWebsiteLink.value) {
            const websitelink = JSON.parse(storedetails.websitelink);
            window.location.href = websitelink.redirectweb;
        }
    };
    const categorizeProducts = (products) => {
        bestProducts.value = products.filter(product => product.featured === "true");
        otherProducts.value = products.filter(product => product.featured !== "true");
    };
    // Function to update the currentImage based on the clicked thumbnail
    const updateCurrentImage = (index) => {
        currentImageIndex.value = index;
        currentImage.value = getImageUrl(selectedProductImages.value[index]);
    };
    // Function to navigate to the next image
    const nextImage = () => {
        currentImageIndex.value = (currentImageIndex.value + 1) % selectedProductImages.value.length;
        currentImage.value = getImageUrl(selectedProductImages.value[currentImageIndex.value]);
    };
    const handleBuyNow = () => {
        if (!authStore.isAuthenticated) {
            authStore.setIntendedRoute('/cartallproducts');
            showLoginModal.value = true;
        } else {
            addToBuyNow(selectedProduct.value);
            router.push('/cartallproducts');
        }
    };
    const setDefaultQuantity = () => {
        if (selectedProduct.value) {
            selectedProduct.value.quantity = 1;
        }
    };
    watch(selectedProduct, () => {
        setDefaultQuantity();
    }, {
        immediate: true
    });
    // Function to increase quantity
    const increaseQuantity = () => {
        if (selectedProduct.value && selectedProduct.value.quantity < selectedProduct.value.availability) {
            selectedProduct.value.quantity++;
        } else {
            showToastWithMessage("Quantity exceeds availability");
        }
    };
    // Function to decrease quantity
    const decreaseQuantity = () => {
        if (selectedProduct.value && selectedProduct.value.quantity > 1) {
            selectedProduct.value.quantity--;
        } else {
            showToastWithMessage("Minimum quantity reached");
        }
    };
    const addToBuyNow = (item) => {
        buyNowProducts.value.push(item);
    };
    const isCartEmpty = computed(() => {
        return cart.value.length === 0;
    });
    const paginatedItems = computed(() => {
        return items.slice(0, 2 + numFeedbackShown.value);
    });
    const showSeeMoreButton = computed(() => {
        return numFeedbackShown.value < items.length - 2;
    });
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
    const toggleshowCart = (item) => {
        selectedProduct.value = item;
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
    const showToastWithMessage = (message) => {
        toastMessage.value = message;
        showToast.value = true;
        setTimeout(() => {
            showToast.value = false;
            toastMessage.value = "";
        }, 3000);
    };
    const hideToast = () => {
        showToast.value = false;
        toastMessage.value = "";
    };
    watch(
        () => route.params.id,
        (newId) => {
            if (newId) {
                id.value = newId;
                getId();
            }
        }, {
            immediate: true
        }
    );
    // Watch for changes in selectedProduct and update selectedProductImages accordingly
    watch(selectedProduct, (newSelectedProduct) => {
        if (newSelectedProduct) {
            selectedProductImages.value = newSelectedProduct.uploadedphotos.split('|');
            updateCurrentImage(0); // Reset currentImageIndex when selectedProduct changes
        }
    });
    onMounted(getId);
</script>
