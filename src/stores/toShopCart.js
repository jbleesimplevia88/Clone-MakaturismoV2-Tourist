import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [], // Combine all items in a single cart array
        editCartProducts: [], // Define editCartProducts array to store products for editing
        buyNowProducts: [], // Define buyNowProducts array to store products for immediate purchase
    }),

    actions: {
      addToCart(product) {
        const existingProductIndex = this.cart.findIndex(item => item.title === product.title);
        
        if (existingProductIndex !== -1) {
            // If the product already exists, update the quantity
            this.cart[existingProductIndex].quantity += product.quantity;
        } else {
            // If it's a new product, add it to the cart
            this.cart.unshift({
                image: product.image,
                title: product.title,
                quantity: product.quantity,
                price: product.price,
                selected: true // Set the selected property
            });
        }

        this.editCartProducts = [...this.cart];
        this.buyNowProducts = [...this.cart];
    },
        clearCart() {
            // Clear the entire cart, editCartProducts, and buyNowProducts
            this.cart = [];
            this.editCartProducts = [];
            this.buyNowProducts = [];
        },

       
    },

    getters: {
        totalItemsInCart: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
        isCartEmpty: (state) => state.cart.length === 0,
    },
});
