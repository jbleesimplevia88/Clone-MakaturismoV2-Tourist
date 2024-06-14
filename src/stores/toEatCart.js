import { defineStore } from 'pinia';

export const useCartStoreEat = defineStore({
    id: 'cartEat',
    state: () => ({
        shopData: [],

    }),

    actions: {
       
        getShopData(item) {
            this.shopData = item;
        },
    
    },

 
});
