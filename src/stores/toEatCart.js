import { defineStore } from 'pinia';

export const useCartStoreEat = defineStore({
    id: 'cartEat',
    state: () => ({
        cart: [],
        editCartProducts: [], 
        buyNowProducts: [], 
        shopData:[],

    }),
 
    actions: {
        addToCart(product) {
            const existingProductIndex = this.cart.findIndex(item => item.title === product.productname);
            
            if (existingProductIndex !== -1) {
                // If the product already exists, update the quantity
                this.cart[existingProductIndex].quantity += product.quantity;
            } else {
                // If it's a new product, add it to the cart with a default quantity of 1
                this.cart.unshift({
                    image: product.uploadedphotos.split(',')[0],
                    title: product.productname,
                    quantity: product.quantity || 1, // Set default quantity to 1 if not provided
                    price: product.productprice,
                });
            }
        
            // Update the editCartProducts and buyNowProducts arrays
            this.editCartProducts = [...this.cart];
            this.buyNowProducts = [...this.cart];
        },
        
        clearCart() {
            // Clear the entire cart, editCartProducts, and buyNowProducts
            this.cart = [];
            this.editCartProducts = [];
            this.buyNowProducts = [];
        },
        getShopData(item){

            this.shopData = item;
            console.log(this.shopData);
    
        },
       
    },

    getters: {
        totalItemsInCart: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
        isCartEmpty: (state) => state.cart.length === 0,
    },
});
