<template>
    <div class="w-full  h-[full] bg-[#102E61]  overflow-y-hidden">
        <!-- Profile router -->
        <div class="flex absolute mt-12 top-5 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl w-36    lg:mt-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor"
                class="w-6 h-6 mt-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <p class="text-[#102E61] text-lg font-black p-3 pr-4 ">
                PROFILE </p>
        </div>
        <!-- /Profile router -->
        <!-- MOBILE-->
        <div class="pt-36 justify-center flex lg:hidden ">
            <img src="@/assets/images/MainNav/card.svg" alt="" class="w-60"
                style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);">
        </div>
        <div class="rounded-t-xl p-10 mt-7 bg-white lg:hidden">
            <div class="grid place-items-center">
                <div>
                    <span>Add Profile Picture</span>
                    <div class="border rounded-lg border-black bg-white w-[145px] my-5">
                        <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange">
                        <label for="imageInput" class="cursor-pointer">
                            <img src="@/assets/images/MainNav/profilepic.svg" alt="" class="w-60 p-8">
                        </label>
                    </div>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="firstName" class="block font-bold mb-1">First Name<span style="color: red;">*</span></label>
                    <input required type="text" id="firstName" v-model="firstName" :placeholder="firstName || 'Juan'"
                        class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="lastName" class="block font-bold mb-1">Last Name<span style="color: red;">*</span></label>
                    <input required type="text" id="lastName" v-model="lastName" :placeholder="lastName || 'Dela Cruz'"
                        class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-bold mb-1">Email Address<span style="color: red;">*</span></label>
                    <input required type="email" id="email" v-model="email" :placeholder="email || 'juandelacruz@email.com'"
                        autocomplete="email" class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="phone" class="block font-bold mb-1">Phone Number</label>
                    <input type="tel" id="phone" v-model="phone" :placeholder="phone || '09876543212'"
                        class="w-full px-3 py-2 border rounded-lg">
                    <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
                </div>
                <div class="mb-4">
                    <label for="gender" class="block font-bold mb-1">Gender</label>
                    <select id="gender" v-model="gender" class="w-full px-3 py-2 border rounded-lg">
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="preferNotToSay">Prefer Not to Say</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="nationality" class="block font-bold mb-1">Nationality</label>
                    <input type="text" id="nationality" v-model="nationality" :placeholder="nationality || 'Filipino'"
                        class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="password" class="block font-bold mb-1">Password</label>
                    <input type="password" id="password" v-model="password" :placeholder="password || '1234567890'"
                        autocomplete="new-password" class="w-full px-3 py-2 border rounded-lg">
                    <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
                </div>
                <div class="mb-4">
                    <label for="confirmPassword" class="block font-bold mb-1">Confirm Password</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword"
                        :placeholder="confirmPassword || '1234567890'" autocomplete="new-password"
                        class="w-full px-3 py-2 border rounded-lg">
                    <span v-if="confirmPasswordError" class="text-red-500">{{ confirmPasswordError }}</span>
                </div>
                <div class="flex justify-center">
                    <button type="button" class="text-black px-4 py-2 rounded hover:bg-gray-600"
                        @click="cancelForm">Cancel</button>
                    <button type="submit"
                        class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Save</button>
                </div>
            </form>
        </div>
        <!-- /MOBILE-->
        <!-- WEB-->
        <div class=" p-10 hidden lg:block mt-44">
            <div class="h-[590px] overflow-y-auto scrollbar-hide ">
                <!-- Add Profile Picture -->
                <div class="grid place-items-center grid-cols-2  bg-white rounded-t-xl ">
                    <div class="mt-10 text-center  ml-40">
                        <div class="border rounded-lg border-black bg-white w-[165px] my-5">
                            <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange">
                            <label for="imageInput" class="cursor-pointer">
                                <img src="@/assets/images/MainNav/profilepic.svg" alt="" class="w-60 p-8">
                            </label>
                        </div>
                        <span class="font-semibold ">Add Profile Picture</span>
                    </div>
                    <div class="mr-40 mt-10">
                        <img src="@/assets/images/MainNav/card.svg" alt="" class="w-full rounded-xl"
                            style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);">
                    </div>

                </div>

                <!-- /Add Profile Picture -->
                <form @submit.prevent="submitForm" class="mb-32 bg-white rounded-b-xl px-40 pt-10  hidden lg:block h-full">
                    <!-- Horizontal line with specific width -->
                    <hr class="my-4 border-t border-gray-300 w-full pb-10">

                    <div class="grid grid-cols-2 grid-rows-1 gap-4">
                        <div>
                            <div class="mb-4">
                                <label for="firstName" class="block font-bold mb-1">First Name<span
                                        style="color: red;">*</span></label>
                                <input required type="text" id="firstName" v-model="firstName"
                                    :placeholder="firstName || 'Juan'" class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block font-bold mb-1">Email Address<span
                                        style="color: red;">*</span></label>
                                <input required type="email" id="email" v-model="email"
                                    :placeholder="email || 'juandelacruz@email.com'" autocomplete="email"
                                    class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div class="mb-4">
                                <label for="gender" class="block font-bold mb-1">Gender</label>
                                <select id="gender" v-model="gender" class="w-full px-3 py-2 border rounded-lg">
                                    <option value="">Select Gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="preferNotToSay">Prefer Not to Say</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="password" class="block font-bold mb-1">Password</label>
                                <input type="password" id="password" v-model="password"
                                    :placeholder="password || '1234567890'" autocomplete="new-password"
                                    class="w-full px-3 py-2 border rounded-lg">
                                <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
                            </div>
                        </div>
                        <div>
                            <div class="mb-4">
                                <label for="lastName" class="block font-bold mb-1">Last Name<span
                                        style="color: red;">*</span></label>
                                <input required type="text" id="lastName" v-model="lastName"
                                    :placeholder="lastName || 'Dela Cruz'" class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div class="mb-4">
                                <label for="phone" class="block font-bold mb-1">Phone Number</label>
                                <input type="tel" id="phone" v-model="phone" :placeholder="phone || '09876543212'"
                                    class="w-full px-3 py-2 border rounded-lg">
                                <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
                            </div>
                            <div class="mb-4">
                                <label for="nationality" class="block font-bold mb-1">Nationality</label>
                                <input type="text" id="nationality" v-model="nationality"
                                    :placeholder="nationality || 'Filipino'" class="w-full px-3 py-2 border rounded-lg">
                            </div>
                            <div class="mb-4">
                                <label for="confirmPassword" class="block font-bold mb-1">Confirm Password</label>
                                <input type="password" id="confirmPassword" v-model="confirmPassword"
                                    :placeholder="confirmPassword || '1234567890'" autocomplete="new-password"
                                    class="w-full px-3 py-2 border rounded-lg">
                                <span v-if="confirmPasswordError" class="text-red-500">{{ confirmPasswordError }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center lg:my-10">
                        <button type="button" class="text-black px-4 py-2 rounded hover:bg-gray-600"
                            @click="cancelForm">Cancel</button>
                        <button type="submit"
                            class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- /WEB-->
    </div>
</template>

<style scope>
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Optional: Show scrollbar on hover */
.scrollbar-hide:hover::-webkit-scrollbar {
    display: initial;
}
</style>
<script>
export default {
    data() {
        return {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            email: 'juandelacruz@email.com',
            phone: '09876543212',
            gender: '', // No pre-filled value for gender
            nationality: 'Filipino',
            password: '1234567890',
            confirmPassword: '1234567890',
            phoneError: '',
            passwordError: '',
            confirmPasswordError: ''
        }
    },
    methods: {
        submitForm() {
            // Reset error messages
            this.phoneError = '';
            this.passwordError = '';
            this.confirmPasswordError = '';
            // Validate phone number
            if (!/^09\d{9}$/.test(this.phone)) {
                this.phoneError = 'Phone number must be 11 digits and start with 09';
                return;
            }
            // Validate password
            if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}/.test(this.password)) {
                this.passwordError = 'Password must contain at least one letter, one number, one special character, and be at least 8 characters long';
                return;
            }
            // Validate password and confirm password
            if (this.password !== this.confirmPassword) {
                this.confirmPasswordError = 'Password and confirm password must match';
                return;
            }
            // Handle form submission here if all validations pass
            console.log('Form submitted!');
        },
        cancelForm() {
            // Handle form cancellation here
            console.log('Form cancelled!');
        }
    }
};
</script>