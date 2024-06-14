<template>
    <!-- Mobile View -->
    <div class="flex flex-col min-h-screen z-50 lg:hidden">
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
    </div>

    <!-- Desktop View -->
    <div class="flex-col lg:block hidden search-container relative">
        <input v-if="showInput" type="search" @input="handleInput" @focus="showResults = true" @blur="handleBlur"
            class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
            placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2"
            ref="searchInput" />
        <span @click="toggleInputVisibility"
            class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2">
            <svg v-show="!showInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </span>
        <div v-if="showResults && searchStore.query"
            class="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 w-full"
            style="max-height: 240px; overflow-y: auto;">
            <ul>
                <li v-for="slide in filteredItems" :key="slide.name + '-' + slide.location" class="p-2 hover:bg-gray-100">
                    <router-link :to="slide.link">
                        {{ slide.name }} - {{ slide.location }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useSearchStore } from '@/stores/search';
import { toShopItem } from '@/components/ToShopHome.vue';
import { toDoItem } from '@/components/ToDoHome.vue';
import { toSeeItem } from '@/components/ToSeeHome.vue';
import { toEatItem } from '@/components/ToEatHome.vue';
import { toTourItem } from '@/components/ToTourHome.vue';

const searchStore = useSearchStore();
const toShopItems = toShopItem();
const toDoItems = toDoItem();
const toSeeItems = toSeeItem();
const toEatItems = toEatItem();
const toTourItems = toTourItem();

const showInput = ref(false);
const showResults = ref(false);
const searchInput = ref(null);

const toggleInputVisibility = () => {
    showInput.value = !showInput.value;
    if (showInput.value) {
        nextTick(() => {
            if (searchInput.value) {
                searchInput.value.focus();
            }
        });
    } else {
        showResults.value = false;
    }
};

const closeInputField = (event) => {
    if (!event.target.closest('.search-container')) {
        showInput.value = false;
        showResults.value = false;
    }
};

const handleBlur = () => {
    setTimeout(() => {
        showResults.value = false;
    }, 100); // Timeout to allow click on results before hiding
};

onMounted(() => {
    document.addEventListener('click', closeInputField);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', closeInputField);
});

const cleanItems = (items) => {
    return items.filter(item => {
        return item && item.name && item.location && item.link && item.mapLocation;
    });
};

const allData = computed(() => {
    const cleanedToDoItems = cleanItems(toDoItems.value);
    const cleanedToShopItems = cleanItems(toShopItems.value);
    const cleanedToSeeItems = cleanItems(toSeeItems.value);
    const cleanedToEatItems = cleanItems(toEatItems.value);
    const cleanedToTourItems = cleanItems(toTourItems.value);

    const combinedData = [...cleanedToShopItems, ...cleanedToEatItems, ...cleanedToDoItems, ...cleanedToTourItems, ...cleanedToSeeItems, ...slides];
    return combinedData;
});

const filteredItems = computed(() => {
    const filtered = allData.value.filter(item => {
        if (!item) return false;

        const query = searchStore.query.toLowerCase();
        if (!searchStore.query) return true;

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

    console.log(filtered);
    return filtered;
});

const handleInput = (event) => {
    searchStore.setQuery(event.target.value);
    showResults.value = true;
};
</script>
<style scoped>
.search-container {
    position: relative;
}

/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
