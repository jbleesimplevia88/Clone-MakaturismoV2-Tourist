<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import ToDo from '@/components/ToDo.vue';
</script>

<template>
    <NavBar/>
    <ToDo/>
    <RouterView/>
    <FooterPage/>
</template>