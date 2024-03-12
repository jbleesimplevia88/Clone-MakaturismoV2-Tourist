<template>
    <div>
        <!-- Check if the current route matches the specified path -->
        <template v-if="isCategorySeeRoute">
            <!-- Render the HomeView component -->
            <HomeView />
        </template>
        <template v-else>
            <!-- Render a router-link component -->
            <RouterView />
        </template>
    </div>
</template>

<script>
import HomeView from '@/components/ToSeeHome.vue';

export default {
    components: {
        HomeView,
    },
    computed: {
        // Check if the current route matches the specified path
        isCategorySeeRoute() {
            return this.$route.path === '/category/see';
        },
    },
};
</script>