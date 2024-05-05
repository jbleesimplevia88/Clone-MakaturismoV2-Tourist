import { defineStore } from 'pinia';
import axios from 'axios';

export const useSignUpStore = defineStore('signUpStore', {
    state: () => ({
        user: null,
        nationalities:[],
        dashboard: '/dashboard',

    }),

    actions: {
        async signUp(formData) {
            try {
                const response = await axios.post('/signupTourist', formData);
                if (response && response.data) {
                    this.user = response.data;
                }

                return {status:true,user: this.user };
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return {status:false,error: error.response.data.message};
                }
            }
        },
        async sendOTP(email){

        },
        async verifyOTP(otp){

        },
        async verifyEmail() {
            try {
                const response = await axios.post(`/email/verifiedTourist/${this.user.id}`);
                return true;
            } catch (error) {
                return false;
            }
        },
        async fetchNationalities(){
            try{
                const response = await axios.get(`/reference/nationalities-list`);
                if (response.data && response.data.data) {
                    this.nationalities = response.data.data; 
                    return this.nationalities;
                }
                return [];  
            }catch(error){
                return false;
            }
        }
    },
});
