<template>
    <div class="flex relative pt-[57px] md:pt-[80px] justify-center">
        <div class="relative">
            <div class="bg-[#102E61] h-[101%] lg:h-[105%]" style="position: absolute; top: 0; left: 0; width: 100%; ">
            </div>
            <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-10 flex items-center z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-10">
                    <div class="absolute top-4 left-3">
                        <router-link to="/category/do">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                stroke="white" class="w-7 lg:w-10 h-7 lg:h-10">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </router-link>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="lg:pl-9 grid grid-cols-1 lg:grid-cols-5 lg:pr-[7rem]">
                            <img src="@/assets/images/CategoryView/ToEat/eat1.png" alt=""
                                class="col-span-3 w-[100%] h-full lg:w-[97%] lg:h-[95%] rounded-l-3xl">
                            <div class="hidden col-span-2 md:grid md:grid-cols-2 gap-4 ">
                                <img src="@/assets/images/CategoryView/ToEat/eat2.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToEat/eat3.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-tr-3xl">
                                <img src="@/assets/images/CategoryView/ToEat/eat4.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToEat/eat5.jpg" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-br-3xl">
                            </div>
                        </div>
                        <!-- <div class="absolute bottom-2 right-[8rem] z-20 w-100">

                            <button class="hidden lg:block p-2 bg-white rounded-lg shadow outline outline-2 text-md">
                                <img src="@/assets/images/Content/9dots.png" alt="" class="w-10 h-10">
                                Show
                                All
                                Photos</button>
                        </div> -->
                    </div>


                    <div class="flex flex-col pl-8 lg:pl-8 lg:order-first">
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">Little Tokyo</h1>
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
                <p class="text-lg text-justify text-black pb-5">Savor the authentic flavors of Japan in the heart of
                    Makati at Little Tokyo. This culinary enclave offers a delightful array of Japanese restaurants and
                    eateries, serving up delicious sushi, ramen, tempura, and more. Whether you're a sushi aficionado or
                    a ramen lover, Little Tokyo promises a delectable dining experience in a charming Japanese setting.
                </p>

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
                    <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">N/A</p>
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
                    <p class="text-lg md:text-black text-left pl-2.5 pb-5">N/A</p>
                </div>

                <div class="my-4 lg:w-[100%]">
                    <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">BEST SELLERS</h1>
                    <div class="flex flex-wrap justify-start items-center text-white lg:w-[100%]">
                        <div
                            class="lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] w-[47%] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71"
                                style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                Spicy Maguro
                            </p>

                            <img class="rounded-md lg:h-[80%]" src="@/assets/images/CategoryView/ToEat/best1.png" alt=""
                                width="100%">
                            <button @click="toggleshowCart"
                                class="text-xs absolute bottom-4 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">Add
                                to Cart</button>

                            <div class="flex justify-end absolute bottom-[65px] right-[18px]">
                                <div class="flex justify-between">
                                    <div class="flex bg-blue-950 border-1 rounded-lg border-white">
                                        <p class="text-xs border rounded-lg border-white p-1">₱ 100.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            class="lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] w-[47%] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71"
                                style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                Modern Ika Tama
                            </p>

                            <img class="rounded-md lg:h-[80%]" src="@/assets/images/CategoryView/ToEat/best2.png" alt=""
                                width="100%">
                            <button @click="toggleshowCart"
                                class="text-xs absolute bottom-4 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">Add
                                to Cart</button>

                            <div class="flex justify-end absolute bottom-[65px] right-[18px]">
                                <div class="flex justify-between">
                                    <div class="flex bg-blue-950 border-1 rounded-lg border-white">
                                        <p class="text-xs border rounded-lg border-white p-1">₱ 100.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            class="lg:w-auto lg:flex-auto bg-blue-950 lg:h-[15rem] w-[47%] h-[190px] m-1 p-2 lg:p-3 rounded-xl relative flex flex-col justify-between">
                            <p class="rounded-lg lg:text-sm text-xs lg:px-2 pt-2 absolute top-2.5 left-3 right-3 text-white p-2 w-71"
                                style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(255,255,255,0) 100%);">
                                Udon
                            </p>

                            <img class="rounded-md lg:h-[70%]" src="@/assets/images/CategoryView/ToEat/best3.jpg" alt=""
                                width="100%">
                            <button @click="toggleshowCart"
                                class="text-xs absolute bottom-4 left-0 right-0 mx-auto bg-blue-600 rounded-md py-1 px-3 w-[90%]">Add
                                to Cart</button>

                            <div class="flex justify-end absolute bottom-[65px] right-[18px]">
                                <div class="flex justify-between">
                                    <div class="flex bg-blue-950 border-1 rounded-lg border-white">
                                        <p class="text-xs border rounded-lg border-white p-1">₱ 100.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div v-if="showCart"
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
                    @click.self="closeModal">
                    <div class="bg-white overflow-y-auto h-[680px] w-[900px] overflow-hidden scrollbar-hide rounded-lg shadow-md p-2 mx-5"
                        @click.stop>
                        <div class="lg:w-[100%] p-4 rounded-lg">
                            <div class="relative flex justify-end">
                                <button class=" pr-4 pt-21 ">
                                    <svg @click="closeCart" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 20 30" stroke-width="5" stroke="black" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div class="flex justify-between w-[100%]">
                                <div class="w-[40%]">

                                    <div class="flex justify-center items-center mb-3">
                                        <img src="@/assets/images/CategoryView/ToEat/best1.png"
                                            class="w-auto h-24 md:w-[500px] md:h-auto">
                                    </div>

                                    <div class="flex justify-between">


                                        <div class="flex justify-between items-center">
                                            <img src="@/assets/images/CategoryView/ToEat/best2.png"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>

                                        <div class="flex justify-center items-center">
                                            <img src="@/assets/images/CategoryView/ToEat/best3.jpg"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>

                                        <div class="flex justify-center items-center">
                                            <img src="@/assets/images/CategoryView/ToEat/other1.jpg"
                                                class="h-24 md:w-[80px] md:h-auto">
                                        </div>

                                        <div class="flex justify-center items-center mx-5">
                                            <img src="@/assets/images/CategoryView/ToShop/button.png"
                                                class="h-24 md:w-[40px] md:h-auto">
                                        </div>

                                    </div>

                                </div>

                                <div class="w-[60%] px-3">

                                    <div class="flex flex-col text-black">
                                        <p class="font-bold text-left text-1xl mb-2"> This culinary enclave offers a
                                            delightful array of Japanese restaurants and eateries, serving up delicious
                                            sushi, ramen, tempura, and more.</p>
                                    </div>

                                    <div class="text-black mb-5">
                                        <p class="font-bold">Little Tokyo</p>
                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] ">₱100.00</p>

                                            <div class="flex justify-end">
                                                <div class="flex justify-between">
                                                    <p class="mr-5">Quantity</p>
                                                    <div class="flex border border-black">
                                                        <button class="border border-black px-3">+</button>
                                                        <p class="border border-black px-3">1</p>
                                                        <button class="border border-black px-3">-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border border-gray-200 my-5"></div>

                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] text-xs">• Spicy Maguro</p>

                                        </div>
                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] text-xs">• Modern Ika Tama</p>

                                        </div>
                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] text-xs">• Udon</p>

                                        </div>
                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] text-xs">• Takoyaki</p>

                                        </div>

                                        <div class="flex justify-between mb-2">
                                            <p class="w-[100%] text-xs">• San Ten Mori
                                            </p>

                                        </div>

                                        <div class="flex justify-between mb-2">
                                            <p class="w-[70%] text-xs">• Oyako Don</p>

                                        </div>

                                        <p class="font-bold">Reviews</p>

                                        <button @click="toggleshowReviews">

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

                            <div class="flex justify-between">

                                <div class="w-[100%] flex justify-start">
                                    <button class="text-blue-600 border-blue-500 border-2 rounded-lg py-2 w-[90%]">Add
                                        to
                                        Cart</button>
                                </div>

                                <div class="w-[100%] flex justify-end">

                                    <router-link to="/checkoutshop" class="w-full">
                                        <button class="text-white bg-blue-600 rounded-lg py-3 w-[95%]">Buy
                                            Now</button>
                                    </router-link>


                                </div>

                            </div>



                        </div>
                    </div>
                </div>

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
                                            ⭐️⭐️⭐️⭐️⭐</label>
                                        <p class="flex text-xs">03-10-2024 11:30</p>
                                    </div>

                                    <div class="flex justify-between mb-2">
                                        <p class="w-[100%] text-md">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
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
                                        <p class="w-[100%] text-mb">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
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
                                        <p class="w-[100%] text-mb">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
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
                                        <p class="w-[100%] text-mb">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
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
                                        <p class="w-[100%] text-mb">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
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
                                        <p class="w-[100%] text-mb">I will buy
                                            again. The
                                            seller is
                                            kind
                                            and
                                            accommodating with my requests. Transaction is smooth.
                                            ❤️
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

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
                                    <p class="w-[70%]">Multi handed Tote Bag with embroidered Philippines Kalesa Scenery
                                    </p>
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



                            <button
                                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Check
                                Out</button>


                        </div>
                    </div>
                </div>



                <h1 class="mb-5 font-bold text-lg text-black text-left pb-2 lg:pt-5">OTHER ITEMS</h1>
                <div class="flex flex-wrap justify-between items-center mb-2 ">
                    <div class="lg:block flex flex-wrap items-center lg:w-[49%] text-white">
                        <div
                            class="bg-blue-950 w-[100%] border-2 h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other1.jpg" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        Takoyaki</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-3 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-blue-950 w-[100%] h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between  w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other2.png" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        Oyako Don</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-4 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-blue-950 w-[100%] h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between  w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other3.png" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        7 Kinds Chirashi</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-4 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden lg:block flex-wrap items-center lg:w-[49%] text-white">

                        <div
                            class="bg-blue-950 w-[100%] h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between  w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other4.jpg" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        San Ten Mori</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-4 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-blue-950 w-[100%] h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between  w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other5.png" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        Makunouchi Bento</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-4 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-blue-950 w-[100%] h-[190px] m-1 p-2 rounded-xl relative flex flex-col justify-between">
                            <div class="flex justify-between  w-[100%]">
                                <div class="w-[40%]">
                                    <img class="rounded-md mt-2 lg:h-[89%]"
                                        src="@/assets/images/CategoryView/ToEat/other6.png" alt="" width="100%">
                                </div>
                                <div class="w-[60%]">
                                    <p class="text-xs text-white p-2 w-[60%] mb-12">
                                        Chasyu Men</p>
                                    <p class="text-xs text-white p-2 w-[55%]">
                                        ₱ 100.00</p>
                                    <div class="flex justify-between items-center mt-4 mb-2">
                                        <button class="text-xs bg-blue-900 rounded-lg m-1 py-1 px-3 w-[40%]">See
                                            More</button>
                                        <button @click="toggleshowCart"
                                            class="text-xs bg-blue-600 rounded-lg py-1 px-3 w-[55%]">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:block">
            <div class="my-4 lg:w-[30%] lg:h-[30%] right-10 absolute top-[8rem]">
                <div class="lg:w-[75%] border border-gray-300 p-4 rounded-lg shadow"> <!-- center this div -->
                    <p class="text-center font-bold">Number of items</p>
                    <p class="text-center font-bold text-3xl">4</p>
                    <div class="mb-5">
                        <p class="font-bold">List of items</p>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Spicy Maguro</p>
                            <p>x1</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Takoyaki</p>
                            <p>x1</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Udon</p>
                            <p>x1</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <p class="w-[70%]">Oyako Don</p>
                            <p>x1</p>
                        </div>

                    </div>
                    <router-link to="/checkouteat">
                        <div class="w-[100%]">
                            <button
                                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">Check
                                Cart</button>

                        </div>
                    </router-link>
                </div>
            </div>
        </div>


    </div>


    <div class="flex flex-col lg:flex-col-reverse">
        <div class="grid lg:grid-cols-2 lg:gap-[10rem] relative mx-6 px-3 lg:px-32 pb-5 pt-5 ">
            <!-- Feedback Content -->
            <div class="relative bg-[#FFFFFF1A] from-[#FFFFFF1A]" v-for="(item, index) in paginatedItems" :key="index">

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
                    <p class="text-black text-md line-clamp-3">{{ item.description }}</p>
                </div>
                <div class="p-1 flex justify-end items-center mr-10">

                    <button @click="seeMore(item)"
                        class="flex items-center px-1 py-1.5 border-2 border-black text-black m-1 rounded-md hover:bg-black hover:text-white transition-colors duration-300 text-nowrap text-xs">
                        <span>See More</span>
                        <span class="ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>


        </div>

        <div class="relative mx-6 px-3 lg:px-32 pb-5 pt-5">
            <div>
                <h1 class="font-bold text-lg text-black text-left lg:pb-4">Where you'll be</h1>
                <MapRenderer :latitude="latitude" :longitude="longitude" :name="name" />

                <!-- <img src="@/assets/images/CategoryView/ToSee/Glorietta Map.jpg" alt="" class="pb-12 block lg:hidden"> -->
                <!-- <div class="hidden lg:block lg:pb-10">
                    <img src="@/assets/images/CategoryView/ToDo/Omniverse Web Map.png" alt="" class="w-[100%] h-[100%]">
                </div> -->
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
    </div>
</template>


<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Hide scrollbar for WebKit (Chrome, Safari) */
}
</style>


<script>
import MapRenderer from "@/components/MapRenderer.vue";



export default {
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    components: {
        MapRenderer
    },
    data() {
        return {
            items: [
                {
                    name: 'Juan Dela Cruz',
                    description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                    date: 'December 2023',

                },
                {
                    name: 'Luis Paolo',
                    description: "Immerse yourself in the vibrant atmosphere of Makati's Central Business District with a guided tour. Get a glimpse of the city's iconic skyscrapers, bustling streets, and impressive landmarks. Learn about the city's rich history and economic significance as you explore the heart of Makati's urban landscape.",
                    date: 'December 2023',

                },


            ],
            showCartModal: false,
            showCart: false,
            showReviews: false,
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            categories: ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'],
            locations: ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'],
        };
    },
    computed: {
        paginatedItems() {
            const startIndex = this.currentPage * this.pageSize;
            return this.items.slice(startIndex, startIndex + this.pageSize);
        },
    },
    methods: {
        toggleshowCart() {
            this.showAddtoCart = false;
            this.showCart = true;
        },
        closeCart() {
            this.showCart = false;
        },
        closeModal() {
            this.showCartModal = false;
        },
        toggleshowReviews() {
            this.showReviews = true;
            this.showCart = false;
        },
        closeReviews() {
            this.showReviews = false;
            this.showCart = true;
        },

    },
};
</script>