import { defineStore } from 'pinia';

export const useCartStore = defineStore('useCartStore',{
    id: 'cartShop',
    state: () => ({
        cart: [],
        editCartProducts: [], 
        buyNowProducts: [], 
        shopImages:[],
        deliveryFee: 50,
        vouchers: [
            { code: 'DISCOUNT999', amount: 999.00, applied: false },
            { code: 'DISCOUNT100', amount: 100.00, applied: false },
            { code: 'DISCOUNT50', amount: 50.00, applied: false },
            { code: 'DISCOUNT200', amount: 200.00, applied: false }
        ]
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
                    productid: product.productid, // Include the productid
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

            // Reset vouchers
            this.vouchers.forEach(voucher => voucher.applied = false);
        },
        
        getShopData(item) {
            this.shopData = item;
        },

        updatePrices(subTotal, finalPrice) {
            
            this.subTotal = subTotal;
            this.finalPrice = finalPrice;
        },
    },

    getters: {
        totalItemsInCart: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
        isCartEmpty: (state) => state.cart.length === 0,
    },
});
