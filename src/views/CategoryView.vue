<script setup>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import CategoryContent from '@/components/CategoryContent.vue';
</script>

<template>
    <NavBar />
    <div v-if="isCategoryPath($route.path)" class="lg:hidden">
        <CategoryContent />
    </div>
    <RouterView />
    <FooterPage />
</template>

<script>


export default {
    name: 'CategoryView',
    components: {
    },
    data() {
        return {
            currentRoute: ''
        };
    },
    created() {
        // Watch for route changes
        this.$watch(
            () => this.$route.path,
            newPath => {
                // Check if the new path starts with '/category/' and has exactly two segments
                if (newPath.startsWith('/category/') && newPath.split('/').length === 3) {
                    this.currentRoute = newPath;
                }
            }
        );
    },

    methods: {
        isCategoryPath(path) {
            return path.startsWith('/category/') && path.split('/').length === 3;
        },
    }
};
</script>