<template>
  <div class="flex flex-grow">
    <MainNav/>

    <SideNav/>
    <div class="flex flex-col flex-grow bg-gray-200">
      <div class="flex-grow">
        <!-- Main content goes here -->
        Main Content 1
      </div>
      <div class="flex-grow">
        <!-- Main content goes here -->
        Main Content 2
      </div>
      <div class="flex-grow">
        <!-- Main content goes here -->
        Main Content 3
      </div>
      <FooterPage/>
    </div>
  </div>
</template>

<script setup>
import MainNav from '@/components/Business/MainNav.vue';
import SideNav from '@/components/Business/SideNav.vue';
import FooterPage from '@/components/Business/FooterPage.vue';
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
