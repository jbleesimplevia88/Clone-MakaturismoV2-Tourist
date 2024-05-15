import { defineStore } from 'pinia';
import axios from 'axios';

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        user: null,
    }),

    actions: {
        async users() {
            try {
                const response = await axios.post('/userDetails');
                if (response && response.data) {
                    this.user = JSON.parse(response.data.userdetails);
                }

                return { status: true, data: this.user };
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return { status: false, error: error.response.data.message };
                }
            }
        },
        async updateUser(data){
            try{
                const response = await axios.post('/updateTourist',data);
                if (response.data) {
                    return true;
                }
            }catch(error){
                return false;
            }
        },
    },
});