import { defineStore } from 'pinia';

export const useCartStore = defineStore('useCartStore',{
    id: 'cartShop',
    state: () => ({
        cart: [],
        editCartProducts: [], 
        buyNowProducts: [], 
        shopImages:[],
    }),

    actions: {
        addToCart(product) {
            const existingProductIndex = this.cart.findIndex(item => item.id === product.id); // Use 'id' instead of 'title'
        
            if (existingProductIndex !== -1) {
                this.cart[existingProductIndex].quantity += (product.quantity || 1);
            } else {
                this.cart.unshift({
                    id: product.id, 
                    image: product.uploadedphotos,
                    title: product.productname,
                    quantity: product.quantity || 1,
                    price: product.productprice,
                    busid: product.busid,
                    selected: true
                });
            }
        },
        clearCart() {
            this.cart = [];
            this.editCartProducts = [];
            this.buyNowProducts = [];
        },
        updateCartItemQuantity(itemId, newQuantity) {
            const item = this.cart.find(item => item.id === itemId);
            if (item) {
              item.quantity = newQuantity;
            }
        },

    getShopData(item){

        this.shopImages = item;
        console.log(this.shopData);

    },
       
    },

    getters: {
        totalItemsInCart: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
        isCartEmpty: (state) => state.cart.length === 0,
    },
});
