<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import CategoryContent from '@/components/CategoryContent.vue';
</script>

<template>
    <NavBar />
    <CategoryContent />
    <RouterView />
    <FooterPage />
</template>