<template>
    <div class="lg:absolute fixed inset-x-0 bottom-0 flex items-end justify-center lg:m-20 lg:mb-10 space-x-6 text-black bg-white lg:rounded-lg"
        style="z-index: 2;">
        <!-- <div v-for="(item, index) in locations" :key="index"
            class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card"
            :class="`location-card ${item.attrib}`" :class="{ 'active-effect': isActive(item.link) }"
             style="margin: 0; width: 100%; height: auto;"> -->
        <div v-for="(item, index) in locations" :key="index"
            class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card border-bg-primary border-r border-opacity-20"
            :class="['location-card', item.attrib, { 'active-effect': isActive(item.link) }]"
            style="margin: 0; width: 100%; height: auto;">
            <RouterLink :to="item.link">
                <!-- Adjust height as needed -->
                <img :src="item.imgSrc" :alt="item.alt"
                    class="w-[50%] lg:h-[30px] lg:w-[30px] h-auto lg:px-[1.5rem] lg:pt-5 lh-auto p-1 mx-auto">
                <!-- Adjust height as needed -->
                <span class="text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden" style="margin: 0;">{{ item.mobile
                    }}
                </span>
                <h6 class="text-center my-3 font-bold text-1xl lg:my-0 lg:font-bold lg:text-xl lg:block hidden">{{
                    item.title }}</h6>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';
import { useRoute } from "vue-router";

// Import Swiper core and required modules

export default {
    data() {
        return {
            locations: [
                { imgSrc: run, alt: 'location1', attrib: 'hover:rounded-l-lg', title: 'What to DO', mobile: 'Do', link: '/category/do' },
                { imgSrc: grocery, alt: 'location2', attrib: '', title: 'Where to SHOP', mobile: 'Shop', link: '/category/shop' },
                { imgSrc: binoculars, alt: 'location3', attrib: '', title: 'What to SEE', mobile: 'See', link: '/category/see' },
                { imgSrc: food, alt: 'location4', attrib: '', title: 'Where to EAT', mobile: 'Eat', link: '/category/eat' },
                { imgSrc: house, alt: 'location5', attrib: '', title: 'Where to STAY', mobile: 'Stay', link: '/category/stay' },
                { imgSrc: locationImg, alt: 'location6', attrib: 'hover:rounded-r-lg', title: 'Make TOUR', mobile: 'Tour', link: '/category/tour' }
                // Add more locations as needed
            ],
            isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
        };
    },
    components: {
        RouterLink
    },
    mounted() {
        // Update isMobile on window resize
        window.addEventListener('resize', this.updateIsMobile);
    },
    beforeUnmount() {
        // Remove event listener on component destroy
        window.removeEventListener('resize', this.updateIsMobile);
    },
    methods: {
        updateIsMobile() {
            this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
        },
        isActive(url) {
            const route = useRoute();
            return route.path === url;
        }
    },
};

</script>



<style scoped>
.swiper-container {
    height: 100%;
}

.active-effect img {
    filter: invert(1);
    transition: filter 0.3s ease;
}

.active-effect span {
    color: #008EE4;
}

.active-effect {
    background-color: white;
    color: #008EE4;
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

/* Add any additional styles if needed */
</style>