import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
      cart: [] 
    }),
    actions: {
      addToCart(product) {state
        const existingProductIndex = this.$.cart.findIndex(item => item.title === product.title);

        if (existingProductIndex !== -1) {
          // If the product already exists, update the quantity
          this.$state.cart[existingProductIndex].quantity += product.quantity;
        } else {
          // If it's a new product, add it to the cart
          this.$state.cart.unshift({
            title: product.title,
            quantity: product.quantity,
            price: product.price
          });
        }
      },
      // clearCart() {
      //   // Clear the entire cart
      //   this.cart = [];
      // }
    }
});