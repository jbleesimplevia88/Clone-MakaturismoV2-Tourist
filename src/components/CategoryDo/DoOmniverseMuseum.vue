<template>
    <div class="flex relative pt-[57px] md:pt-[80px] justify-center">
        <div class="relative">
            <div class="bg-[#102E61] h-[101%] lg:h-[105%]" style="position: absolute; top: 0; left: 0; width: 100%; ">
            </div>
            <div class="relative inset-0 sm:top-56 md:top-2 pl-0 md:pl-10 flex items-center z-[1]">
                <div class="relative flex flex-col pl-0 lg:pl-10">
                    <div class="absolute lg:top-4 lg:left-3 top-4 z-[1]">
                        <router-link to="/category/do">

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
                    <div class="relative flex flex-col items-center">
                        <div class="lg:pl-9 grid grid-cols-1 lg:grid-cols-5 lg:pr-[7rem]">
                            <img src="@/assets/images/CategoryView/ToDo/omni.jpg" alt=""
                                class="col-span-3 w-[100%] h-full lg:w-[97%] lg:h-[95%] rounded-l-3xl">
                            <div class="hidden col-span-2 md:grid md:grid-cols-2 gap-4 ">
                                <img src="@/assets/images/CategoryView/ToDo/Wonder Woman.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToDo/Avengers.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%] rounded-tr-3xl">
                                <img src="@/assets/images/CategoryView/ToDo/Iron Man Set.png" alt=""
                                    class="lg:w-[100%] lg:h-[90%]">
                                <img src="@/assets/images/CategoryView/ToDo/Iron Man Set.png" alt=""
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
                        <h1 class="font-bold text-2xl lg:text-3xl pt-4 text-white text-left">Omniverse</h1>
                        <p class="text-md text-white text-left pb-5">Museum</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="relative mx-6 px-3 lg:px-32 pt-5">


        <p class="font-bold text-lg text-black text-left pb-5 pt-3 lg:pt-[5rem]">About this place</p>
        <p class="text-lg text-justify text-black pb-5">Discover a fusion of art and technology at the Omniverse Museum
            in Makati. Step into a world of interactive exhibits, mind-bending installations, and awe-inspiring virtual
            reality experiences. This unique museum promises a captivating journey through the realms of creativity and
            innovation. Whether you're an art enthusiast or a tech-savvy explorer, the Omniverse Museum is a must-visit
            destination for an extraordinary adventure.</p>


        <div class="flex flex-row">
            <div class="pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </div>
            <p class=" text-lg md:text-black text-left pl-2.5 pb-5 pt-3">Omniverse Museum Japan Town 4/F Glorietta 2,
                Ayala Center Makati Palm Dr, Makati Ave, Makati, 1224 Metro Manila</p>
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
                <p class="text-lg md:text-black text-left pb-5">Tuesday to Sunday | 12:00 PM to 8:00 PM</p>

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
            <p class="text-lg md:text-black text-left pl-2.5 pb-5">0915 009 1034</p>
        </div>

        <h1 class="font-bold text-lg text-black text-left pb-2 lg:pt-5">BEST SPOT IN HERE IN OMNIVERSE MUSEUM</h1>

        <ContentCarousel class="mb-10" />


    </div>

    <div class="relative flex flex-col">

        <div class="relative mx-6 px-3 lg:px-32 pb-2 pt-5">
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

        <div class="grid lg:grid-cols-2 lg:gap-[2rem] relative mx-6 px-3 lg:px-32 pt-5">
            <!-- Feedback Content -->


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
                        style="position: absolute; bottom: 0; left: 0; height: 24%; width: 100%; background: linear-gradient(to bottom, transparent 30%, #FFFFFF 79%, #FFFFFF 50%);">
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


<style scoped></style>


<script>
import ContentCarousel from '@/components/ContentModalCarousel.vue';
import MapRenderer from "@/components/MapRenderer.vue";



export default {
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    components: {
        ContentCarousel,
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
            ],
            currentPage: 0,
            pageSize: 8,
            showDropdown: false,
            categories: ['Museum', 'Sightseeing Tour', 'Spa and Wellness', 'Entertainment', 'Gaming'],
            locations: ['Makati', 'Manila', 'Quezon City', 'Taguig', 'Pasig', 'Mandaluyong', 'San Juan', 'Pasay', 'Paranaque', 'Las Pinas', 'Muntinlupa', 'Malabon', 'Navotas', 'Valenzuela', 'Caloocan', 'Marikina', 'Pateros'],
            // New property to track number of feedback items shown
            numFeedbackShown: 0,
            showSeeLessButton: false
        };
    },
    computed: {
        paginatedItems() {
            // Return first 2 items initially and add additional items based on numFeedbackShown
            return this.items.slice(0, 2 + this.numFeedbackShown);
        },
        // Check if there are more feedback items to show
        showSeeMoreButton() {
            return this.numFeedbackShown < this.items.length - 2;
        }
    },
    methods: {
        // Method to handle "See More" button click
        seeMore() {
            // Increment the number of feedback items to show
            this.numFeedbackShown += 2; // Change this value as per your requirement
            // Show See Less button if all items are shown
            if (!this.showSeeMoreButton) {
                this.showSeeLessButton = true;
            }
        },
        // Method to handle "See Less" button click
        seeLess() {
            // Reset the number of feedback items shown to initial value
            this.numFeedbackShown = 0;
            // Hide See Less button
            this.showSeeLessButton = false;
        }
    }
};
</script>