<template>
    <div class="flex flex-col min-h-screen">
        <!-- Your other components -->
        <!-- Search input -->
        <div class="flex mt-3 space-x-3 relative items-center justify-center">
            <router-link to="/">
                <button class="flex items-center py-[0.25rem]" id="button-addon2">
                    <svg data-slot="icon" fill="none" stroke-width="2.4" stroke="currentColor" viewBox="0 0 24 24"
                        class="w-7 h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">
                        </path>
                    </svg>
                </button>
            </router-link>
            <input type="search"
                class="relative block rounded-xl border w-[290px] border-solid border-gray-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2"
                @input="handleInput">
        </div>
        <!-- Search results -->
        <div v-if="searchStore.query">
            <ul>
                <li v-for="slide in filteredItems" :key="slide.name + '-' + slide.location">
                    <router-link :to="slide.link">
                        {{ slide.name }} - {{ slide.location }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- Your other components -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSearchStore } from '@/stores/search';
import { slides } from '@/components/CalendarMonthCarousel.vue';
import { toShopItem } from '@/components/ToShopHome.vue';

const searchStore = useSearchStore();
const toShopItems = toShopItem();

// Function to clean items by removing items with missing or empty fields
const cleanItems = (items) => {
    return items.filter(item => {
        return item && item.name && item.location && item.link && item.mapLocation;
    });
};

// Combine both cleaned items and slides into a single array for searching
const allData = computed(() => {
    const cleanedToShopItems = cleanItems(toShopItems.value);
    const combinedData = [...cleanedToShopItems, ...slides];
    return combinedData;
});

// Filter the combined data based on the search query
const filteredItems = computed(() => {
    const filtered = allData.value.filter(item => {
        if (!item) return false; // Skip null or undefined values

        const query = searchStore.query.toLowerCase();

        if (!searchStore.query) return true; // Show all items if no search query provided

        // Convert item.category to lowercase string for comparison
        let categoryLowerCase = '';
        if (Array.isArray(item.category)) {
            categoryLowerCase = item.category.map(cat => cat.toLowerCase()).join(' ');
        } else if (typeof item.category === 'string') {
            categoryLowerCase = item.category.toLowerCase();
        }

        return (
            (item.name && item.name.toLowerCase().includes(query)) ||
            (item.description && item.description.toLowerCase().includes(query)) ||
            categoryLowerCase.includes(query) ||
            (item.location && item.location.toLowerCase().includes(query))
        );
    });

    console.log(filtered); // Log the filtered items
    return filtered;
});

// Handle input change to update the search query
const handleInput = (event) => {
    searchStore.setQuery(event.target.value);
};
</script>
