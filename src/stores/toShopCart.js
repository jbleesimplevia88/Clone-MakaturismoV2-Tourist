import { defineStore } from 'pinia';

export const useCartStoreShop = defineStore({
    id: 'cartShop',
    state: () => ({
        shopData: [],
       
    }),

    actions: {
       
        getShopData(item) {
            this.shopData = item;
        },

      
    },


});
