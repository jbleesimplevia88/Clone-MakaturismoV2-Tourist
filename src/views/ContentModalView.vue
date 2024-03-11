<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import ContentModal from '@/components/ContentModal.vue';

</script>

<template>
    <NavBar />
    <ContentModal />
    <RouterView />
    <FooterPage />
</template>