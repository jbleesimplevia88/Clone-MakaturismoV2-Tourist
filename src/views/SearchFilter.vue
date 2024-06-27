<template>
    <!-- Mobile View -->
    <div class="flex flex-col min-h-screen z-50 lg:hidden">
      <!-- Search input -->
      <div class="flex mt-3 space-x-3 relative items-center justify-center">
        <router-link to="/">
          <button class="flex items-center py-[0.25rem]" id="button-addon2">
            <svg fill="none" stroke-width="2.4" stroke="currentColor" viewBox="0 0 24 24" class="w-7 h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0L10.5 4.5M3 12h18"></path>
            </svg>
          </button>
        </router-link>
        <input type="search" class="relative block rounded-xl border w-[290px] border-solid border-gray-700 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2" @input="handleInput" @focus="handleFocus" @blur="handleBlur">
      </div>
      <!-- Search results -->
      <div v-if="searchStore.query">
        <ul>
          <li v-for="item in searchStore.filteredItems" :key="item.id">
            <router-link :to="item.link" @click="closeResults">
              {{ item.name }} - {{ item.location }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  
    <!-- Desktop View -->
    <div class="flex-col lg:block hidden search-container relative">
      <input v-if="showInput" type="search" @input="handleInput" @focus="handleFocus" @blur="handleBlur" class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" placeholder="Search" aria-label="Search" id="exampleFormControlInput2" aria-describedby="button-addon2" ref="searchInput" />
      <span @click="toggleInputVisibility" class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5" id="button-addon2">
        <svg v-show="!showInput" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </span>
      <div v-if="searchStore.query && isFocused" class="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-[999] w-full" style="max-height: 240px; overflow-y: auto;">
        <ul>
          <li v-for="item in searchStore.filteredItems" :key="item.id" class="p-2 hover:bg-gray-100">
            <router-link :to="item.link" @click="closeResults">
              {{ item.name }} - {{ item.location }}
            </router-link>
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
  const isFocused = ref(false);
  
  const toggleInputVisibility = () => {
      showInput.value = !showInput.value;
      if (showInput.value) {
          nextTick(() => {
              if (searchInput.value) {
                  searchInput.value.focus();
              }
          });
      }
  };
  
  const closeInputField = (event) => {
      if (!event.target.closest('.search-container')) {
          showInput.value = false;
          isFocused.value = false;
      }
  };
  
  const handleBlur = () => {
      setTimeout(() => {
          isFocused.value = false;
      }, 100); // Timeout to allow click on results before hiding
  };
  
  const handleFocus = () => {
      isFocused.value = true;
  };
  
  onMounted(() => {
      document.addEventListener('click', closeInputField);
      router.afterEach(() => {
          isFocused.value = false;
      });
  });
  
  onBeforeUnmount(() => {
      document.removeEventListener('click', closeInputField);
  });
  
  const handleInput = (event) => {
      searchStore.setQuery(event.target.value);
  };
  
  const closeResults = () => {
      isFocused.value = false;
  };
  </script>
  