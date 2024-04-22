<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import Notification from '@/components/NotificationContent.vue';

</script>

<template>

    <Notification />
    <NavBar />
    <RouterView />
    <FooterPage />
    <!-- <FooterPage /> -->
</template>