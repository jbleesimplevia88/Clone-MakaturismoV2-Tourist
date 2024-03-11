<template>
    <div class="" :class="containerClasses" style="z-index: 2;">
        <div v-for="(item, index) in locations" :key="index" :class="`location-card ${cardClasses, item.attrib}`"
            style="margin: 0; width: 100%; height: auto;">
            <div :class="inlineClasses" class="inline-block">
                <img :src="item.imgSrc" :alt="item.alt" class="imgClasses inline-block">
                <h6 :class="hideClasses">{{ item.mobile }}</h6>
                <h6 :class="mobileClasses">{{ item.mobile }}</h6>
            </div>

            <h6 :class="webClasses">{{ item.title }}</h6>
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
        cardClasses() {
            return {
                'm-location-card lg:m-0 m-[0] w-[100%] h-auto lg:location-card': true,
                'inline-block': this.currentUrl.startsWith('/category')
            };
        },
        inlineClasses() {
            return {
                'hidden': true,
                'inline-block': this.currentUrl.startsWith('/category')
            };
        },
        imgClasses() {
            return {
                'w-[50%] lg:h-[30px] lg:w-[30px] h-auto lg:px-[1.5rem] lg:pt-5 lh-auto p-0 mx-auto': true,
                'lg:sticky lg:top-0': this.currentUrl.startsWith('/category'),
            };
        },
        mobileClasses() {
            return {
                'text-center lg:my-3 lg:font-bold lg:text-1xl lg:hidden': true,
                'block lg:block': this.currentUrl.startsWith('/category')
            };

        },
        hideClasses() {
            return {
                'text-center my-3 font-bold text-1xl lg:my-0 lg:font-bold lg:text-xl lg:block hidden': true,
                ' inline-block': this.currentUrl.startsWith('/category')
            };

        },
        webClasses() {
            return {
                'text-center my-3 font-bold text-1xl lg:my-0 lg:font-bold lg:text-xl lg:block hidden': true,
                'lg:hidden': this.currentUrl.startsWith('/category')
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