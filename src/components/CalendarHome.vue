<script setup>
import NavBar from '@/components/NavBar.vue';
import CalendarContent from '@/components/CalendarContent.vue';
import FooterPage from '@/components/FooterPage.vue';

</script>

<template>
    <NavBar />
    <div class="bg-[#102E61] w-[100%] h-50">

        <div :class="{ 'pt-[5rem] pb-[1.5rem]': isMobile, 'pt-[6.7rem] pb-[1.8rem]': !isMobile }">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="absolute w-6 h-6 mt-4 ml-4 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </router-link>

            <button class="flex pl-[3rem] pr-[1.5rem] py-1.5 text-3xl font-bold text-blue-900 bg-white shadow"
                style="border-top-right-radius: 7px; border-bottom-right-radius: 7px;">CALENDAR</button>
        </div>

    </div>

    <CalendarContent />
    <FooterPage />
</template>

<script scoped>


export default {
    data() {
        return {
            isMobile: window.innerWidth <= 768, // Adjust the breakpoint as needed
        };
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
    },
};
</script>

<style scoped></style>
