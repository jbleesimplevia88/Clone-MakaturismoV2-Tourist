<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <MainNav class="sticky top-0 z-10 flex items-center justify-between w-full px-10 py-2"/>

    <!-- Sidebar and Main Content Area -->
    <div class="flex flex-1 overflow-hidden">
      
      <SideNav/>

      <!-- Main Content Area -->
      <div class="flex flex-col flex-1 overflow-y-auto">
          <router-view/>
      </div>
    </div>

    <!-- Footer -->
    <FooterPage class="py-4 text-white bg-gray-900"/>
  </div>
</template>

<script>
import MainNav from '@/components/Business/MainNav.vue';
import SideNav from '@/components/Business/SideNav.vue';
import FooterPage from '@/components/Business/FooterPage.vue';

export default {
  components: {
    MainNav,
    SideNav,
    FooterPage
  }
}
</script>
