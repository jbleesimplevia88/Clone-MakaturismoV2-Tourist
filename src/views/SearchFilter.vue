<template>
  <!-- Mobile View -->
  <div class="flex flex-col min-h-screen z-50 lg:hidden">
    <!-- Search input -->
    <div class="flex space-x-3 relative items-center justify-center search-container  bg-[#102E61] ">
      <div class="mt-4">
      <router-link to="/">
        <button class="flex items-center py-[0.25rem] " id="button-addon2">
          <svg fill="white" stroke-width="2.4" stroke="white" viewBox="0 0 24 24" class="w-7 h-8 mb-2 " xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0L10.5 4.5M3 12h18"></path>
          </svg>
        </button>
      </router-link>
    </div>
      <input type="search" class=" bg-white relative block rounded-xl border w-[290px] border-solid border-gray-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" placeholder="Search" aria-label="Search" @input="handleInput" @focus="handleFocus" ref="searchInput">
     
    </div>
    <!-- Search results -->
    <div class="p-10 ">
    <div v-if="searchStore.query">
      <ul class="">
        <li v-for="item in searchStore.filteredItems" :key="item.id" class="hover:bg-gray-200 rounded-lg">
          <div @click="handleLinkClick(item.link)" class="search-result-item">
            {{ item.name }} - {{ item.location }}

          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>

  <!-- Desktop View -->
  <div class="flex-col lg:block hidden search-container relative w-full">
    <input v-if="showInput" type="search" @input="handleInput" @focus="handleFocus" class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" placeholder="Search" aria-label="Search" ref="searchInput" />
    <span @click="toggleInputVisibility($event)" class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5" id="button-addon2">
      <svg v-show="!showInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </span>
    <div v-if="searchStore.query && showInput" class="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-[999] w-full" style="max-height: 240px; overflow-y: auto;">
      <ul>
        <li v-for="item in searchStore.filteredItems" :key="item.id" class="p-2 hover:bg-gray-100">
          <div @click="handleLinkClick(item.link)" class="search-result-item">
            {{ item.name }} - {{ item.location }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useSearchStore } from '@/stores/search';
import { useRouter } from 'vue-router';

const searchStore = useSearchStore();
const router = useRouter();

const showInput = ref(false);
const searchInput = ref(null);
const inputFocused = ref(false);

const toggleInputVisibility = (event) => {
  event.stopPropagation();
  showInput.value = !showInput.value;
  if (showInput.value) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
};

const handleInput = (event) => {
  searchStore.setQuery(event.target.value);
};

const handleFocus = () => {
  inputFocused.value = true;
};

const handleClickOutside = (event) => {
  if (showInput.value && searchInput.value && !searchInput.value.contains(event.target)) {
    showInput.value = false;
    searchStore.setQuery('');
  }
};

const handleLinkClick = async (link) => {
  try {
    console.log('Attempting to navigate to:', link);
    await router.push(link);
    console.log('Navigation successful to:', link);
    showInput.value = false; // Close the input field after routing
    searchStore.setQuery(''); // Clear the search query after routing
  } catch (error) {
    console.error('Navigation failed:', error);
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.search-result-item {
  padding: 10px;
  cursor: pointer;
}

.search-result-item:hover {
  background-color: #f0f0f0;
}
</style>
