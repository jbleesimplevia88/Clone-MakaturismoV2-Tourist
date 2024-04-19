import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cart: [] // Array to hold the products added to the cart
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
