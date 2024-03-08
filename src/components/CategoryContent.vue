<template>
    <div class="" :class="containerClasses" style="z-index: 2;">
        <div v-for="(item, index) in locations" :key="index"
            class="m-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card"
            :class="`location-card ${item.attrib}`" style="margin: 0; width: 100%; height: auto;">
            <!-- Adjust height as needed -->
            <div class="flex items-center"> <!-- Use flexbox to align items horizontally -->
                <img :src="item.imgSrc" :alt="item.alt"
                    class="w-[50%] lg:h-[30px] lg:w-[30px] h-auto lg:px-[2rem] lg:pt-5 lh-auto p-1 mx-auto">
                <!-- Adjust height as needed -->
                <h6 :class="hideH6Classes" style="margin: 0;">{{
        item.mobile }}</h6>
            </div>
            <h6 :class="h6Classes">{{ item.title }}</h6>
        </div>
    </div>
</template>

<script>
import run from '@/assets/images/MainNav/run.png';
import binoculars from '@/assets/images/MainNav/binoculars.png';
import house from '@/assets/images/MainNav/house.png';
import food from '@/assets/images/MainNav/food.png';
import grocery from '@/assets/images/MainNav/grocery-store.png';
import locationImg from '@/assets/images/MainNav/location.png';

export default {
    data() {
        return {
            locations: [
                { imgSrc: run, alt: 'location1', attrib: 'lg:hover:rounded-l-lg', title: 'What to DO', mobile: 'Do' },
                { imgSrc: grocery, alt: 'location2', attrib: '', title: 'Where to SHOP', mobile: 'Shop' },
                { imgSrc: binoculars, alt: 'location3', attrib: '', title: 'What to SEE', mobile: 'See' },
                { imgSrc: food, alt: 'location4', attrib: '', title: 'Where to EAT', mobile: 'Eat' },
                { imgSrc: house, alt: 'location5', attrib: '', title: 'Where to STAY', mobile: 'Stay' },
                { imgSrc: locationImg, alt: 'location6', attrib: 'lg:hover:rounded-r-lg', title: 'Make TOUR', mobile: 'Tour' }
            ],
            currentUrl: window.location.pathname
        };
    },
    computed: {
        containerClasses() {
            return {
                'lg:absolute fixed inset-x-0 bottom-0 flex items-end justify-center lg:m-20 lg:mb-10 space-x-6 text-black bg-white lg:rounded-lg': true,
                'lg:sticky lg:top-0 lg:p': this.currentUrl.startsWith('/category')
            };
        },
        hideH6Classes() {
            return {
                'text-center my-3 font-bold text-1xl lg:my-0 lg:font-bold lg:text-xl lg:block hidden': true,
                'hidden': this.currentUrl.startsWith('/category')
            };
        },
        h6Classes() {
            return {
                'text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden ml-2': true,
                'lg:block:': this.currentUrl.startsWith('/category')
            };
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateIsMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    },
    methods: {
        updateIsMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
    },
};
</script>

<style scoped>
.swiper-container {
    height: 100%;
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
}

.location-card:hover h6 {
    color: white;
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
    transition: filter 0.3s ease;
}

.m-location-card:hover img {
    filter: invert(1);
    transition: filter 0.3s ease;
}

.m-location-card h6 {
    font-size: 12px;
    color: black;
}

.m-location-card:hover h6 {
    color: white;
    transition: filter 0.3s ease;
}

.z-neg-1 {
    z-index: -1;
}
</style>