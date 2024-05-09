import { defineStore } from 'pinia';
import axios from 'axios';

export const useSignUpStore = defineStore('signUpStore', {
    state: () => ({
        user: null,
        nationalities: [],
        dashboard: '/dashboard',

    }),

    actions: {
        async signUp(touristreg) {
            try {
                const response = await axios.post('/signupTourist', touristreg);
                if (response && response.data) {
                    this.user = response.data;
                }

                return { status: true, user: this.user };
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return { status: false, error: error.response.data.message };
                }
            }
        },
        async sendOTP(email) {

        },
        async verifyOTP(otp) {

        },
        async verifyEmail(id) {
            try {
                const response = await axios.get(`/email/verifiedTourist/${id}`);
                return true;
            } catch (error) {
                return false;
            }
        },
        async fetchNationalities() {
            try {
                const response = await axios.get(`/nationalities`);
                if (response.data && response.data.data) {
                    this.nationalities = response.data.data;
                    return this.nationalities;
                }
                return [];
            } catch (error) {
                return false;
            }
        }

    },
});