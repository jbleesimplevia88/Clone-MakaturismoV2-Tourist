<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <NavBar />
        <div class="pt-[57px] flex-grow">
            <div class="flex mt-3 space-x-3 relative items-center justify-center" ref="searchContainer">
                <Router-link to="/">
                    <button class="flex items-center py-[0.25rem]" id="button-addon2">
                        <svg data-slot="icon" fill="none" stroke-width="2.4" stroke="currentColor" viewBox="0 0 24 24"
                            class="w-7 h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
                            </path>
                        </svg>
                    </button>
                </Router-link>
                <input type="search"
                    class="relative block rounded-xl border w-[290px] border-solid border-gray-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                    placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2"
                    ref="searchInput"> <!-- Adjust the width as needed -->
            </div>

            <!-- PUT COMPONENT FOR SEARCH RESULT -->
        </div>

        <!-- Footer -->
        <footer class=" sticky bottom-0">
            <FooterPage />
        </footer>
    </div>
</template>
