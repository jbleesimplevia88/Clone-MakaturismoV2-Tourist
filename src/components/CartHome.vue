<template>
    <div class="bg-cover bg-center w-screen  h-[750px]" style="background-image: url('src/assets/images/CategoryView/ToShop/bgoverlay.png');">
        <div class="px-5 overflow-y-auto h-[690px]  ">
            <div class="flex bg-white pl-3 lg:pl-5 rounded-r-xl w-36  lg:mt-28  mt-[20%] lg:w-56 -ml-6">
                <button @click="goToPreviousPage" class="flex cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
                            stroke="currentColor" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p class="text-[#102E61] text-lg font-black p-3 pr-4 lg:text-3xl">CART</p>
                    </button>
            </div>
          
            <div class=" bg-white-200 mb-5 bg-white rounded-tl-lg  rounded-tr-lg mt-10">
                <div class="flex items-center gap-4 mb-2 ">
                    <div class=" text-xl font-semibold  p-3 mb-3 border-b-2 w-full"><span class=" ">Shop Makati</span>
                    </div>
                </div>
                <div class=" lg:hidden flex items-center gap-4 mt-1">
                    <div class="overflow-y-scroll lg:w-full h-[500px]">
                        <div v-if="editCartProducts.length === 0" class="p-3">Cart is empty.</div>
                        <div v-else>
                            <div v-for="(cartItem, index) in editCartProducts" :key="index" class=" bg-gray-100 rounded-xl  m-5 flex lg:justify-normal justify-between mb-3">
                                <div class="flex items-center justify-center">
                                    <input type="checkbox" v-model="cartItem.selected" @change="updateSelectAll" :id="'checkbox_' + index" class="ml-2 w-8 h-5 border">
                                </div>
                                <img :src="getImageUrl(cartItem.image)"  class=" lg:w-[10%] lg:h-[20%] w-28 object-fit rounded-lg m-2">
                                <div class="p-3 grid lg:w-full lg:ml-11 ">
                                    <span class="font-bold">{{ cartItem.title }} </span>
                                    <span>₱ {{ cartItem.price }} </span>
                                    <div class="flex items-center mt-2">
                                        <p class="mr-2">Quantity</p>
                                        <div class="flex items-center justify-between border border-gray-200 rounded-md w-20 px-2">
                                            <div class="flex items-center">
                                                <span class="cursor-pointer" @click="updateQuantity(cartItem, 'decrease')">-</span>
                                            </div>
                                            <p class="mx-2">{{ cartItem.quantity }}</p>
                                            <div class="flex items-center">
                                                <span class="cursor-pointer" @click="updateQuantity(cartItem, 'increase')">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- MOBILE -->
                <div class="lg:block hidden  items-center gap-4 mt-1 p-5">
                    <div class="overflow-y-scroll h-[500px] lg:h-full lg:overflow-hidden lg:w-full">
                        <div v-for="(cartItem, index) in editCartProducts" :key="index" class="flex justify-between mb-3 ">
                            <div class="flex items-center justify-center">
                                <input type="checkbox" v-model="cartItem.selected" @change="updateSelectAll" :id="'checkbox_' + index" class="ml-2 w-8 h-5 border">
                            </div>
                            <div class="lg:bg-[#E7EAEF] lg:w-full lg: flex rounded-lg">
                                <img :src="cartItem.image[0]" class="w-28 object-fit rounded-l-lg">
                                <div class="px-5 py-1 grid w-full">
                                    <div class="grid grid-cols-2 text-lg">
                                        <div>{{ cartItem.title }}</div>
                                        <div class="lg:block hidden text-right">x{{ cartItem.quantity }}</div>
                                    </div>
                                    <span class="text-right text-lg">₱ {{ cartItem.price }} </span>
                                    <div class="flex items-center text-lg">
                                        <div class="flex items-center justify-between border border-black rounded-md w-20 px-2 bg-white">
                                            <div class="flex items-center border-black border-r pr-1 bg-white">
                                                <span class="cursor-pointer " @click="updateQuantity(cartItem, 'decrease')">-</span>
                                            </div>
                                            <p class="mx-2 ">{{ cartItem.quantity }}</p>
                                            <div class="flex items-center border-black border-l pl-1 bg-white">
                                                <span class="cursor-pointer" @click="updateQuantity(cartItem, 'increase')">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex sticky bottom-0 bg-gray-200 " style="box-shadow: 0 -6px 7px 0 rgba(0, 0, 0, 0.342); margin-top: -60px">
        <input type="checkbox" v-model="selectAll" @change="selectAllItems" id="selectAllCheckbox" class="ml-2 w-5 h-5 border-2 mt-7">
        <div class="p-3 flex gap-4 lg:w-full">
            <span class="pt-3">Select All ({{ selectedItemsCount }})</span>
            <div class="lg:hidden">
                <p>
                    Total ({{ selectedItemsCount }} Items):<br>
                    <span class="text-lg font-semibold ">₱ {{ totalAmount }}</span>
                </p>
            </div>
            <div class="hidden lg:block w-[85%] mt-2">
                <p class=" text-right ">
                    Total ({{ selectedItemsCount }} Items):
                    <span class="text-lg font-semibold ">₱ {{ totalAmount }}</span>
                </p>
            </div>
            <router-link to="/checkoutshop">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg ">
                        Check Out
                    </button>
            </router-link>
        </div>
    </div>
</template>


<script setup>
import { computed, ref, watch } from 'vue';
import { useCartStore } from '@/stores/toShopCart';
import { useRouter } from 'vue-router';

const router = useRouter();
const cartStore = useCartStore();
const editCartProducts = computed(() => cartStore.editCartProducts);
const shopData = computed(() => cartStore.shopData);

const selectAll = ref(false);

const updateQuantity = (item, action) => {
    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    }
    // Update the cart in the store after changing the quantity
    cartStore.editCartProducts = [...editCartProducts.value]; // Change cart to editCartProducts
};

const updateSelectAll = () => {
    selectAll.value = editCartProducts.value.every(item => item.selected);
};

const selectAllItems = () => {
    editCartProducts.value.forEach(item => (item.selected = selectAll.value));
};
const selectedItemsCount = computed(() => {
    if (editCartProducts.value) {
        return editCartProducts.value.filter(item => item.selected).length;
    } else {
        return 0; // Return 0 if editCartProducts is not defined yet
    }
});

const totalAmount = computed(() => {
    if (editCartProducts.value) {
        return editCartProducts.value.reduce((total, item) => {
            if (item.selected) {
                return total + item.quantity * item.price;
            }
            return total;
        }, 0);
    } else {
        return 0; // Return 0 if editCartProducts is not defined yet
    }
});

// Watch for the final selected product
const updateCart = () => {
    cartStore.editCartProducts = editCartProducts.value;
};
const getImageUrl = (imageString) => {
    if (imageString) {
        const images = imageString.split('|');
        return `${import.meta.env.VITE_STORAGE_BASE_URL}/${images[0]}`;
    }
    return ''; // Return empty string if imageString is not defined
};
// Watch for changes in the cart and update the store accordingly
watch(editCartProducts, (newCart, oldCart) => {
    if (newCart.length !== oldCart.length) {
        updateCart();
    } else {
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].quantity !== oldCart[i].quantity) {
                updateCart();
                break;
            }
        }
    }
}, { deep: true });

const goToPreviousPage = () => {
    router.go(-1); // Navigate to the most recent past page
};


</script>