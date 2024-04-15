<template>
    <div class="bg-[#102E61] w-[100%] h-[30rem] z-10">
        <div
            class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] sm:px-10 sm:mx-12 lg:rounded-lg dark:bg-gray-50">
            <div class="space-y-2">
                <div
                    class="gris grid-cols-2 justify-between mt-5 mb-10 mx-auto w-[90%] h-[154px] bg-[#E7EAEF] rounded-sm space-y-2">
                    <div class="flex flex-row gap-[5rem]">
                        <img src="@/assets/images/shirt.png" alt="banner" class="w-8 h-auto lg:w-[154px] lg:h-[154px]">
                        <div>
                            <p class="mt-3 text-lg ">Never Stop Exploring Graphic Tee in Gray</p>
                        </div>
                    </div>
                    <div class="">

                    </div>
                </div>
            </div>
            <!-- <div class="dark:text-gray-800">
                <p>Insert the actual text content here...</p>
            </div> -->
        </div>
    </div>


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

<style scoped>
.fixed-width-300 {
    width: 300px;
}

/* Responsive text size for small screens using Tailwind CSS */
@media (max-width: 640px) {
    .text-sm {
        @apply text-xs;
    }

    .md\:text-base {
        @apply text-sm;
    }

    .lg\:text-lg {
        @apply text-base;
    }
}
</style>