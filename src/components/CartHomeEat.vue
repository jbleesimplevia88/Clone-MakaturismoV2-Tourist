<template>
    <div class="lg:hidden bg-cover bg-center w-screen  h-[750px]"
        style="background-image: url('src/assets/images/CategoryView/ToShop/bgoverlay.png');">
        <div class="p-5 overflow-y-auto h-[690px] ">
            <div
                className="grid grid-cols-2 grid-rows-1 gap-4 mt-20  w-331 h-14 bg-white rounded-tl-lg  rounded-tr-lg mb-3">
                <div>
                    <input type="checkbox" v-model="selectAll" @change="selectAllItems" id="selectAllCheckbox"
                        class="ml-2 w-5 h-5 border-2 mt-7">
                    <span class="mt-1 ml-1 text-xl font-semibold text-left ">
                        Items</span>
                </div>
                <router-link to="/category/shop" class="justify-end flex m-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </router-link>
            </div>
            <div class=" bg-white-200 mb-5 bg-white rounded-bl-lg rounded-br-lg">
                <div class="flex items-center gap-4 mb-2 ">
                    <div class=" text-xl font-semibold  mt-2 mb-3 border-b-2 w-full"><span class="ml-10">Kultura</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 mt-1">
                    <div class="overflow-y-scroll h-[500px]">
                        <div v-for="(cartItem, index) in editCartProducts" :key="index" class="flex justify-between mb-3">
                            <div class="flex items-center justify-center">
                                <input type="checkbox" v-model="cartItem.selected" @change="updateSelectAll"
                                    :id="'checkbox_' + index" class="ml-2 w-8 h-5 border">
                            </div>
                            <img :src="cartItem.image[0]" class="w-28 object-fit rounded-lg m-2">
                            <div class="p-3 grid">
                                <span>{{ cartItem.title }} </span>
                                <span>₱ {{ cartItem.price }} </span>
                                <div class="flex items-center mt-2">
                                    <p class="mr-2">Quantity</p>
                                    <div
                                        class="flex items-center justify-between border border-gray-200 rounded-md w-20 px-2">
                                        <div class="flex items-center">
                                            <span class="cursor-pointer"
                                                @click="updateQuantity(cartItem, 'decrease')">-</span>
                                        </div>
                                        <p class="mx-2">{{ cartItem.quantity }}</p>
                                        <div class="flex items-center">
                                            <span class="cursor-pointer"
                                                @click="updateQuantity(cartItem, 'increase')">+</span>
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
    <div class="flex sticky bottom-0 bg-gray-200" style="box-shadow: 0 -6px 7px 0 rgba(0, 0, 0, 0.342); margin-top: -60px">
        <input type="checkbox" v-model="selectAll" @change="selectAllItems" id="selectAllCheckbox"
            class="ml-2 w-5 h-5 border-2 mt-7">
        <div class="p-3 flex gap-4">
            <span class="pt-3">Select All ({{ selectedItemsCount }})</span>
            <p>
                Total ({{ selectedItemsCount }} Items):<br>
                <span class="text-lg font-semibold ">₱ {{ totalAmount }}</span>
            </p>
            <router-link to="/checkouteat">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                    Check Out
                </button>
            </router-link>
        </div>
    </div>
</template>


<script>
import { useCartStoreEat } from '@/stores/toEatCart';
import { computed, ref, watch } from 'vue';

export default {
    setup() {
        const cartStore = useCartStoreEat();
        const editCartProducts = computed(() => cartStore.editCartProducts); // Fetch editCartProducts from the store

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

        return {
            editCartProducts,
            selectAll,
            updateQuantity,
            updateSelectAll,
            selectAllItems,
            selectedItemsCount,
            totalAmount
        };
    },
};
</script>
