<template>
    <!-- Cart items -->
    <div class="h-screen flex flex-col">
        <div class="flex bg-[#102E61] pl-3 lg:pl-5 rounded-r-xl w-36  mt-[20%]">
            <button @click="goToPreviousPage" class="flex cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
                    stroke="white" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p class="text-white text-lg font-black p-3 pr-4 lg:text-3xl">SHOP</p>
            </button>
        </div>
        <div class="flex justify-between mb-2 mt-4">
            <div class="w-[50%] p-5">
                <p class="font-bold">Number of items</p>
                <p class="font-bold text-3xl">{{ totalItemsInCart }}</p>
            </div>
            <template v-if="!isCartEmpty">
                <div class="w-[120%] mt-4 m-2">
                    <button @click="handleEditCart"
                        class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[100%]">
                        Edit Cart
                    </button>
                </div>
            </template>
        </div>

        <div class="mb-5 p-5">
            <p class="font-bold">List of items</p>
            <template v-if="!isCartEmpty">
                <div v-for="(cartItem, index) in cart" :key="index" class="flex justify-between mb-2 pr-4">
                    <p class="w-[70%]">{{ cartItem.title }}</p>
                    <p>x{{ cartItem.quantity }}</p>
                </div>
            </template>
            <template v-else>
                <p class="text-center">
                    Your cart is empty</p>
            </template>
        </div>
        <!-- Buy Now button -->
        <div v-if="!isCartEmpty">
            <login-modal v-if="!authStore.isAuthenticated && showLoginModal" @close="showLoginModal = false"></login-modal>
            <button @click="handleBuyNow"
                class="text-white flex justify-center mx-auto bg-blue-600 rounded-lg py-4 w-[90%]">
                Buy Now
            </button>
        </div>
    </div>
    <login-modal v-if="!authStore.isAuthenticated && showLoginModal" @close="showLoginModal = false"></login-modal>
</template>



<script>
import ContentCarousel from '@/components/ToShopCarousel.vue';
import MapRenderer from "@/components/MapRenderer.vue";
import LoginModal from '@/components/LoginModal.vue';
import {
    defineComponent,
    ref,
    computed,
    watch
} from 'vue';
import {
    useAuthStore
} from '@/stores/auth';
import {
    useCartStore
} from '@/stores/toShopCart';
import {
    useRouter
} from 'vue-router';
export default defineComponent({
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    components: {
        MapRenderer,
        LoginModal,
        ContentCarousel
    },
    setup() {
        const cartStore = useCartStore();
        const router = useRouter();
        const authStore = useAuthStore();
        const cart = computed(() => cartStore.cart);
        const editCartProducts = ref([]);
        const buyNowProducts = ref([]);
        const selectedProduct = ref(null);
        const showToast = ref(false);
        const currentIndex = ref(0);
        const count = ref(0);
        const showCart = ref(false);
        const showCartModal = ref(false);
        const showAddtoCart = ref(false);
        const showLoginModal = ref(false);
        const selectedProductImages = ref([]);
        const selectedProductIsFromBestProducts = ref(false);


        //*******************ALL CODE FOR CHECKING WHETHER PRODUCT IS COMING FROM EDEITCART ARRAY OR BUYNOW ARRAY***********//
        const handleEditCart = () => {
            if (!authStore.isAuthenticated) {
                authStore.setIntendedRoute('/cart');
                showLoginModal.value = true;
            } else {
                router.push('/cart');
            }
        };
        const handleBuyNow = () => {
            if (!authStore.isAuthenticated) {
                authStore.setIntendedRoute('/checkoutshop');
                showLoginModal.value = true;
            } else {
                addToBuyNow(selectedProduct.value);
                router.push('/checkoutshop');
            }
        };
        const addToCart = (item, isFromEditCart = false) => {
            if (!authStore.isAuthenticated) {
                authStore.setIntendedRoute(router.currentRoute.value.path);
                showLoginModal.value = true;
                return;
            }
            const cartArray = isFromEditCart ? editCartProducts : buyNowProducts;
            cartStore.addToCart(item, isFromEditCart);
            cartArray.value = cartStore.cart.slice();
            showCartModal.value = false;
            if (item !== null) {
                item.quantity = 1;
            }
            showToastWithMessage("Item has been added to cart");
            if (!isFromEditCart && showAddtoCart.value) {
                addToBuyNow(item);
            }
        };
        const addToBuyNowAndCheckCart = () => {
            if (!authStore.isAuthenticated) {
                authStore.setIntendedRoute('/checkoutshop');
                showLoginModal.value = true;
            } else {
                addToBuyNow(selectedProduct.value);
            }
        };
        const addToBuyNow = (item) => {
            buyNowProducts.value.push(item);
        };
        const totalItemsInCart = computed(() => {
            return cartStore.cart.reduce((total, item) => total + item.quantity, 0);
        });
        watch(cartStore.cart, (newCart) => {
            editCartProducts.value = [...newCart];
        }, {
            deep: true
        });
        // Define computed property to get the current image based on the currentIndex

        const clearCartAndNavigate = () => {
            cartStore.clearCart();
        };
        const isCartEmpty = computed(() => {
            return cartStore.cart.length === 0;
        });

        const openCartModal = () => {
            console.log("Opening cart modal");
            showCartModal.value = true;
        };
        const closeLoginModal = () => {
            showLoginModal.value = false;
        };


        return {
            handleEditCart,
            handleBuyNow,
            addToBuyNowAndCheckCart,
            editCartProducts,
            selectedProduct,
            selectedProductIsFromBestProducts,
            selectedProductImages,
            isCartEmpty,
            totalItemsInCart,
            clearCartAndNavigate,
            useCartStore,
            cart,
            showAddtoCart,
            openCartModal,
            // getTotalItemsInCart,
            showToast,

            addToCart,
            showCart,
            router,
            authStore,
            showLoginModal,
            showCartModal,
            currentIndex,
            count,

            closeLoginModal,

        };
    },
    methods: {
        goToPreviousPage() {
            const router = this.$router;
            router.go(-1); // Navigate to the most recent past page
        }
    }
});
</script>