<template>
    <div class="relative pt-[57px] md:pt-[80px] justify-center ">
        <div class="relative ">
            <div class="bg-[#102E61] h-[100%] lg:h-[100%]" style="position: absolute; top: 0px; left: 0; width: 100%; ">
            </div>
            <div class=" z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-16">
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
                    <div class=" lg:pr-[7rem] justify-center flex w-full ">
                        <ContentCarousel :items="items" class="mb-10 w-full lg:ml-9" />
                    </div>
                    <div class="lg:hidden fixed bottom-0 w-full bg-gray-100 p-5 shadow-lg z-50">
                        <div class="flex justify-between">
                            <div>
                                <p class="text-md">Ordering made easy</p>
                                <p class="text-lg font-bold">Just a click away</p>
                            </div>
                            <div>
                                <router-link to="/carteditbuyshop">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                                        Shop Now
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">{{ storedetails.storename }}
                        </h1>
                        <p class="text-md text-white text-left pb-5">Restaurant/Food District</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-between items-center mb-2 relative">
        <div class="my-4 lg:p-0 lg:w-[75%]">
            <div class="relative mx-6 px-3 lg:px-32 pt-5">
                <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
                <p class="text-lg text-justify text-black pb-5">{{ storedetails.description }}</p>
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
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">{{ storedetails.address }}</p>
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
                        <p class="text-lg md:text-black text-left pb-5">{{ storedetails.storehours }} | {{
                            storedetails.storesched }}
                        </p>
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
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">{{ storedetails.storecontact }}</p>
                </div>
                <!-- BEst seller -->
                <div class="my-4 lg:w-[100%]">
                    <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">BEST SELLERS</h1>
                    <!-- <div class="lg:flex justify-start text-white lg:w-[100%]"> -->
                    <div class="grid grid-cols-2 md:grid-cols-3 justify-start text-white lg:w-[70%]">
                        <!-- Cards in Best seller -->
                        <div v-for="(item, index) in bestProducts" :key="index"
                            class=" lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71"
                                style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                {{ item.title }}
                            </p>
                            <img class="rounded-md h-[80%]" :key="index" :src="item.image[0]" alt="" width="100%">
                            <button @click="toggleshowCart(item)"
                                class="text-xs absolute lg:bottom-4 bottom-2 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">
                                See More</button>
                            <div class="flex justify-end absolute lg:bottom-[65px] bottom-[50px] right-[18px]">
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
                <div class="flex w-[100%]">
                    <div class="flex justify-between items-center mb-2 space-x-5">
                        <!-- WEB VERSION OTHER ITEMS -->
                        <div v-for="(product, index) in model.productsArray" :key="index" class="card-wrapper">
                            <!-- Your card content goes here -->
                            <div
                                class="card bg-blue-950 w-[100%] border-2 m-1 p-2 rounded-xl relative flex flex-col justify-between">
                                <div class="flex justify-between w-[100%]">
                                    <div class="w-[40%]">
                                        <!-- Assuming product has an image array, you can display the first image -->
                                        <img class="rounded-md" :src="getImageUrl(product.uploadedphotos.split('|')[0])"
                                            alt="">
                                    </div>
                                    <div class="w-[60%]">
                                        <p class="text-xs text-white p-2 w-[75%]">{{ product.productname }}</p>
                                        <p class="text-xs text-white p-2 w-[55%]">₱ {{ product.productprice }}</p>
                                        <!-- Add any additional fields you want to display -->
                                        <div class="flex justify-between items-center mt-4 mb-2">
                                            <button @click="toggleshowCart(product)"
                                                class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%] text-white mt-12">See
                                                More</button>
                                            <button @click="addToCart(product)"
                                                class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%] text-white mt-12">Add
                                                to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Second column -->
                        <div class="flex-col lg:block hidden">
                            <div v-for="(item, index) in otherProducts.slice(3, 6)" :key="index" class="card-wrapper">
                                <!-- Your card content goes here -->
                                <div
                                    class="card bg-blue-950 w-[100%] border-2 m-1 p-2 rounded-xl relative flex flex-col justify-between">
                                    <div class="flex justify-between  w-[100%]">
                                        <div class="w-[40%]">
                                            <img class="rounded-md" :key="index" :src="item.image[0]">
                                        </div>
                                        <div class="w-[60%]">
                                            <p class="grid grid-cols-1 text-xs text-white mb-4 ml-2"> {{ item.title }}
                                            </p>
                                            <p class="text-xs text-white p-2 w-[55%]">₱ {{ item.price }}</p>
                                            <div class="flex justify-between items-center mt-4 mb-2">
                                                <button @click="toggleshowCart(item)"
                                                    class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%] text-white mt-12">See
                                                    More</button>
                                                <button @click="addToCart(item)"
                                                    class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%] text-white mt-12">Add
                                                    to
                                                    Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END WEB VERSION OTHER ITEMS -->
                        <!-- MOBILE VERSION OTHER ITEMS -->
                        <div class="lg:hidden grid-flow-row">
                            <!-- First column -->
                            <div class="flex flex-col">
                                <div v-for="(item, index) in otherProducts.slice(0, 3)" :key="index" class="card-wrapper">
                                    <!-- Your card content goes here -->
                                    <div
                                        class="card bg-blue-950 w-[100%] border-2 h-[170px] m-1 p-4 rounded-xl relative flex justify-between">
                                        <div class="flex justify-between w-[100%]">
                                            <div class="w-[50%]">
                                                <img class="rounded-md lg:h-full mb-1 w-full h-24" :src="item.image[0]"
                                                    alt="">
                                                <button @click="toggleshowCart(item)"
                                                    class=" text-white w-[98px] text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 -ml-[1px]">See
                                                    More</button>
                                            </div>
                                            <div class="w-[80%]">
                                                <p class="grid grid-cols-1 text-sm font-medium text-white mb-2 ml-2"> {{
                                                    item.title }}
                                                </p>
                                                <p class="text-sm font-medium text-white p-2 w-[55%] mb-[38px]">₱ {{
                                                    item.price }}
                                                </p>
                                                <button @click="addToCart(item)"
                                                    class="text-xs bg-blue-600 rounded-lg py-1 text-white px-3 w-full ml-2">Add
                                                    to
                                                    Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Second column -->
                            <div class="flex flex-col">
                                <div v-for="(item, index) in otherProducts.slice(3, 6)" :key="index" class="card-wrapper">
                                    <!-- Your card content goes here -->
                                    <!-- WEB VERION -->
                                    <div
                                        class="hidden lg:block card bg-blue-950 w-[100%] border-2 h-[190px] m-1 p-4 rounded-xl relative justify-between">
                                        <div class="flex justify-between w-[100%]">
                                            <div class="w-[40%]">
                                                <img class="rounded-md lg:h-full" :src="item.image[0]" alt="" width="90%">
                                            </div>
                                            <div class="w-[60%]">
                                                <p class="grid grid-cols-1 text-xs text-white mb-4 ml-2"> {{ item.title }}
                                                </p>
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
                                    <!-- END WEB VERSION -->
                                    <!-- MOBILE VERSION -->
                                    <div
                                        class="lg:hidden card bg-blue-950 w-[100%] border-2 h-[170px] m-1 p-4 rounded-xl relative flex justify-between">
                                        <div class="flex justify-between w-[100%]">
                                            <div class="w-[40%]">
                                                <img class="rounded-md lg:h-full mb-1 w-full h-24" :src="item.image[0]"
                                                    alt="">
                                                <button @click="toggleshowCart(item)"
                                                    class=" text-white text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 -ml-[1px] w-full">See
                                                    More</button>
                                            </div>
                                            <div class="w-[80%]">
                                                <p class="grid grid-cols-1 text-sm font-medium text-white mb-2 ml-2"> {{
                                                    item.title }}
                                                </p>
                                                <p class="text-sm font-medium text-white p-2 w-[55%] mb-[38px]">₱ {{
                                                    item.price }}
                                                </p>
                                                <button @click="addToCart(item)"
                                                    class="text-xs bg-blue-600 rounded-lg py-1 text-white px-3 w-full ml-2">Add
                                                    to
                                                    Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- END MOBILE VERISON -->
                                </div>
                            </div>
                        </div>
                        <!-- END MOBILE VERSION OTHER ITEMS -->
                    </div>
                </div>
                <!-- mobile verrrrrrrrrrrrrrrrr -->
                <!-- View Add to cart modal -->
                <div v-if="showCart" class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center "
                    @click.self="closeModal">
                    <div class="bg-white lg:h-[640px]  lg:w-auto lg:rounded-3xl h-full w-full shadow-md " @click.stop>
                        <div class="lg:w-[100%] p-4 rounded-lg h-full">
                            <div class="lg:block hidden relative  justify-end">
                                <button class=" pr-4 pt-21 ml-[97%]">
                                    <svg @click="closeCart" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 30" stroke-width="5" stroke="black" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <button @click="closeCart" class=" lg:hidden pt-21 ml-2">
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
                                            <img v-for="(image, index) in selectedProductImages" :key="index"
                                                :src="getImageUrl(image)" class="h-20 w-20 mb-2 cursor-pointer"
                                                @click="updateCurrentImage(index)" />
                                        </div>
                                        <div class="flex justify-center gap-4 mt-4">
                                            <!-- Button to navigate to the next image -->
                                            <svg @click="nextImage" class="w-10 h-8 cursor-pointer" viewBox="0 0 44 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="2" width="40" height="40" rx="20" stroke="black"
                                                    stroke-width="3" />
                                                <path
                                                    d="M28.5 22L27.5 21L28.5 20L29.5 21L28.5 22ZM14.5 22L13.5 21L14.5 20L15.5 21L14.5 22ZM15.5 21L27.5 21L27.5 23L15.5 23L15.5 21Z"
                                                    fill="black" />
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
                                    
                                        <img v-for="(image, index) in selectedProductImages" :key="index"
                                                :src="getImageUrl(image)" class="h-16 w-20 mb-2"
                                                @click="updateCurrentImage(index)" />


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="black" class="w-[60px] h-10 mt-2 ml-2 cursor-pointer"
                                            @click="nextImage" >
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                </div>

                                <!-- right section -->
                                <div class="lg:w-[60%] px-3">
                                    <div class="lg:flex lg:flex-col text-black">
                                        <p class="font-bold text-left lg:text-3xl text-2xl my-6 lg:my-0"
                                            style="line-height: 1.2;">
                                            {{ selectedProduct.productname }}
                                        </p>
                                    </div>
                                    <div class=" flex flex-col text-black mb-3 mt-4">
                                        <p class="font-bold text-xl">{{ storedetails.storename }}</p>
                                        <div class="lg:inline-flex hidden items-center justify-between"
                                            style="line-height: 2;">
                                            <div class="text-2xl">₱{{ selectedProduct.productprice }}</div>
                                            <div class="flex items-center">
                                                <p>Quantity</p>
                                                <button @click="decreaseQuantity"
                                                    class="ml-4 px-4 py-1 bg-gray-200 text-gray-700 rounded-l-lg">-</button>

                                                <span class="px-4">{{ selectedProduct ? selectedProduct.quantity : 1
                                                }}</span> <!-- Display the current quantity -->

                                                <button @click="increaseQuantity"
                                                    class="px-4 py-1 bg-gray-200 text-gray-700 rounded-r-lg">+</button>
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
                                        <div class="p-2 mt-3">
                                            <div class="lg:hidden flex items-center text-black my-6">
                                                Quantity
                                                <button @click="decreaseQuantity"
                                                    class="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg">-</button>
                                                <span v-if="selectedProduct && selectedProduct.quantity" class="p-2"> {{
                                                    selectedProduct.quantity
                                                }}</span>
                                                <button @click="increaseQuantity"
                                                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg">+</button>
                                            </div>
                                            <!-- buttons -->
                                            <div class="flex justify-between">
                                                <div class="w-[100%] flex justify-start ">
                                                    <button @click="addToCart(selectedProduct)"
                                                        class="text-blue-600 border-blue-500 border-2 rounded-lg py-2 w-[90%]">
                                                        Add to Cart</button>
                                                </div>
                                                <div class="w-[100%] flex justify-end">
                                                <div v-if="!isCartEmpty" class="w-full">

                                                    <!-- Update the click event handler to call handleBuyNow function -->
                                                    <button @click="handleBuyNow"
                                                        class="text-white bg-blue-600 rounded-lg py-3 w-[95%]">
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
            <div v-if="totalItemsInCart > 0" class="hidden lg:block ">
                <div class="cart-bg my-4 lg:w-[30%] lg:h-[85rem] right-7 absolute top-[8rem] ">
                    <div class="cart-list lg:w-[75%] h-[40rem] border border-gray-300 p-4 rounded-lg shadow">
                        <!-- center this div -->
                        <div class="grid grid-cols-2">
                            <div>
                        <p class="text-center font-bold">Number of items</p>
                        <p class="text-center font-bold text-3xl">{{ totalItemsInCart }}</p>
                    </div>
                        <template v-if="!isCartEmpty">
                                <div class="w-[120%]">
                                    <!-- Update the click event handler to call handleEditCart function -->
                                    <button @click="handleEditCart"
                                        class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[70%]">
                                        Edit Cart
                                    </button>
                                </div>
                            </template>
                        </div>


                        <div class="cart-list-scroll mb-5" style="height: 29rem; overflow-y: auto;">
                            <!-- Set specific height and add scrollbar -->
                            <p class="font-bold mb-5">List of items</p>
                            <div v-for="(cartItem, index) in cart" :key="index" class="flex justify-between mb-2 pr-4">
                                <p class="w-[70%]">{{ cartItem.title }}</p>
                                <p>x{{ cartItem.quantity }}</p>
                            </div>
                        </div>
                        <!-- AUTHHHHHH BUTTOONNNNNNNN -->
                        <div v-if="!isCartEmpty">

                            <!-- Update the click event handler to call handleBuyNow function -->
                            <button @click="handleBuyNow"
                                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%]">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile- cart -->
        <template v-if="showCartModal">
            <div class="lg:hidden fixed inset-0 h-full w-full z-50 flex items-center justify-center"
                @click.self="closeModal">
                <div class="bg-white rounded-lg shadow-md h-full w-full p-2 " @click.stop>
                    <div class="lg:w-[100%] p-4 rounded-lg">
                        <!-- Close button -->
                        <button @click="closeModal" class="absolute top-0 left-0 m-4 text-gray-600 hover:text-gray-800">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                        </button>
                        <!-- Cart items -->
                        <div class="flex justify-between mb-2 mt-12 border-b-2">
                            <div class="w-[50%]">
                                <p class="text-center font-bold">Number of items</p>
                                <p class="text-center font-bold text-3xl">{{ totalItemsInCart }}</p>
                            </div>
                            <template v-if="!isCartEmpty">
                                <div class="w-[120%] mt-4">
                                    <!-- Update the click event handler to call handleEditCart function -->
                                    <button @click="handleEditCart"
                                        class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">
                                        Edit Cart
                                    </button>
                                </div>
                            </template>
                        </div>

                        <div class="mb-5">
                            <p class="font-bold">List of items</p>
                            <template v-if="!isCartEmpty">
                                <div v-for="(cartItem, index) in cart" :key="index" class="flex justify-between mb-2 pr-4">
                                    <p class="w-[70%]">{{ cartItem.title }}</p>
                                    <p>x{{ cartItem.quantity }}</p>
                                </div>
                            </template>
                            <template v-else>
                                <p class="text-center">
                                    Your cart is empty</p>
                            </template>
                        </div>
                        <!-- AUTHHHHHH BUTTOONNNNNNNN -->
                        <div v-if="!isCartEmpty">

                            <!-- Update the click event handler to call handleBuyNow function -->
                            <button @click="handleBuyNow"
                                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%]">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </template>

    </div>
    <!--  -->
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
    <login-modal v-if="!authStore.isAuthenticated && showLoginModal" @close="showLoginModal = false"></login-modal>
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
    defineProps
} from 'vue';
import axios from 'axios';
import {
    useRoute, useRouter
} from 'vue-router';
import ContentCarousel from '@/components/ToEatCarousel.vue';
import MapRenderer from "@/components/MapRenderer.vue";
import LoginModal from '@/components/LoginModal.vue';
import {
    useAuthStore
} from '@/stores/auth';
import { useCartStore } from '@/stores/toShopCart';

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
const cartStore = useCartStore();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter(); // Initialize router

const cart = computed(() => cartStore.cart);
const shopData = computed(() => cartStore.shopData);
const editCartProducts = ref([]);
const buyNowProducts = ref([]);
const selectedProduct = ref(null);
const showToast = ref(false);
const toastMessage = ref("");
const currentIndex = ref(0);
const currentPage = ref(0);
const count = ref(0);
const showCart = ref(false);
const showCartModal = ref(false);
const showReviews = ref(false);
const showAddtoCart = ref(false);
const showLoginModal = ref(false);
const showSeeLessButton = ref(false);
const selectedProductIsFromBestProducts = ref(false);
const numFeedbackShown = ref(0);
const id = ref('');
const storedetails = ref('');
const imageArray = ref([]);
const currentImageIndex = ref(0);
const selectedProductImages = ref([]);
const currentImage = ref('');

const getImageUrl = (fileName) => {
    return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const getId = () => {
    console.log('Fetching product with ID:', id.value);
    console.log('Available products:', model.productsArray);
    axios.get(`/getStore/${id.value}`).then((response) => {
        const storeparse = JSON.parse(response.data.message);
        storedetails.value = storeparse;
        model.productsArray = JSON.parse(response.data.getProducts);
        console.log('Selected product:', selectedProduct.value);

    }).catch((error) => {
        console.log(error);
    });
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


const items = [];
const bestProducts = [];
const otherProducts = [];
const categories = ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'];
const locations = ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'];
const handleEditCart = () => {
    if (!authStore.isAuthenticated) {
        authStore.setIntendedRoute('/cart');
        showLoginModal.value = true;
    } else {
        router.push('/cart');
    }
};
const handleBuyNow = () => {
    if (!authStore.isAuthenticated) {
        authStore.setIntendedRoute('/checkoutshop');
        showLoginModal.value = true;
    } else {
        addToBuyNow(selectedProduct.value);
        router.push('/checkoutshop');
    }
};
const addToCart = (item, isFromEditCart = false) => {
    if (!authStore.isAuthenticated) {
        authStore.setIntendedRoute(router.currentRoute.value.path);
        showLoginModal.value = true;
        return;
    }
    const cartArray = isFromEditCart ? editCartProducts : buyNowProducts;
    cartStore.addToCart(item, isFromEditCart);
    cartArray.value = cartStore.cart.slice();
    showCartModal.value = false;
    showToastWithMessage("Item has been added to cart");
    if (!isFromEditCart && showAddtoCart.value) {
        addToBuyNow(item);
    }
};

const setDefaultQuantity = () => {
    if (selectedProduct.value) {
        selectedProduct.value.quantity = 1;
    }
};

watch(selectedProduct, () => {
    setDefaultQuantity();
}, { immediate: true });

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
const totalItemsInCart = computed(() => {
    return cartStore.cart.reduce((total, item) => total + item.quantity, 0);
});


const clearCartAndNavigate = () => {
    cartStore.clearCart();
};
const isCartEmpty = computed(() => {
    return cartStore.cart.length === 0;
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
    showCart.value = true;
};
const openCartModal = () => {
    showCartModal.value = true;
};
const closeLoginModal = () => {
    showLoginModal.value = false;
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
watch(cartStore.cart, (newCart) => {
    editCartProducts.value = [...newCart];
}, {
    deep: true
});
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
</script>
