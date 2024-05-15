<template>
    <div class="w-full  h-[full] bg-[#102E61]  overflow-y-hidden">
        <!-- Profile router -->
        <RouterLink to="/">
            <div class="flex absolute mt-12 top-5 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl w-36  lg:mt-20 lg:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0"
                    stroke="currentColor" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p class="text-[#102E61] text-lg font-black p-3 pr-4 lg:text-3xl">
                    PROFILE </p>
            </div>
        </RouterLink>

        <!-- /Profile router -->
        <!-- MOBILE-->
        <div class="pt-36 justify-center flex lg:hidden">
            <img src="@/assets/images/MainNav/card.svg" alt="" class="w-60"
                style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);">
        </div>
        <div class="rounded-t-xl p-10 mt-7 bg-white lg:hidden">
            <div class="grid place-items-center">
                <div>
                    <span>Add Profile Picture</span>
                    <div class="border rounded-lg border-black bg-white w-[145px] my-5 relative">
                        <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange">
                        <label for="imageInput" class="cursor-pointer">
                            <img v-if="previewImage" :src="previewImage" alt="Profile Picture" class="w-full h-full object-cover">
                            <img v-else src="@/assets/images/MainNav/profilepic.svg" alt="Profile Picture" class="w-full h-full object-cover">
                        </label>
                    </div>
                </div>
            </div>
            <form @submit.prevent="submitForm" class="mb-32 bg-white rounded-b-xl px-40 py-8 h-full">
                <div class="mb-4">
                    <label for="firstName" class="block font-bold mb-1">First Name<span
                            style="color: red;">*</span></label>
                    <input required type="text" id="firstName" v-model="firstName" :placeholder="firstName || 'Juan'"
                        class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="lastName" class="block font-bold mb-1">Last Name<span
                            style="color: red;">*</span></label>
                    <input required type="text" id="lastName" v-model="lastName" :placeholder="lastName || 'Dela Cruz'"
                        class="w-full px-3 py-2 border rounded-lg">
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-bold mb-1">Email Address<span
                            style="color: red;">*</span></label>
                    <input required type="email" id="email" v-model="email"
                        :placeholder="email || 'juandelacruz@email.com'" autocomplete="email"
                        class="w-full px-3 py-2 border rounded-lg">
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
                        <option value="preferNotToSay">Prefer not to say</option>
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
                    <button type="button" class="text-black px-4 py-2 rounded" @click="cancelForm">Cancel</button>
                    <button type="submit" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded ">Save</button>
                </div>
            </form>
        </div>
        <!-- /MOBILE-->
        <!-- WEB-->
        <div class=" p-10 hidden lg:block mt-44">
            <!-- Add Profile Picture -->
            <div class="grid place-items-center grid-cols-2  bg-white rounded-t-xl ">
                <div class="mt-10 text-center ml-40">
                    <div class="border rounded-lg border-black bg-white w-[165px] my-5 relative">
                        <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange">
                        <label for="imageInput" class="cursor-pointer">
                            <img v-if="previewImage" :src="previewImage" alt="Profile Picture" class="w-full h-full object-cover">
                            <img v-else src="@/assets/images/MainNav/profilepic.svg" alt="Profile Picture" class="w-full h-full object-cover">
                        </label>
                    </div>
                    <span class="font-semibold">Add Profile Picture</span>
                </div>
                <div class="mr-40 mt-10">
                    <img src="@/assets/images/MainNav/card.svg" alt="" class="w-full rounded-xl"
                        style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);">
                </div>

            </div>

            <!-- /Add Profile Picture -->
            <form @submit.prevent="submitForm" class="mb-32 bg-white rounded-b-xl px-40 py-8  hidden lg:block h-full">
                <!-- Horizontal line with specific width -->
                <hr class="my-4 border-t border-gray-300 w-full pb-10 ">

                <div class="grid grid-cols-2 grid-rows-1 gap-4 ">

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
                                <option value="">Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="preferNotToSay">Prefer not to say</option>
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
                    <button type="button" class="text-black px-4 py-2 rounded " @click="cancelForm">Cancel</button>
                    <button type="submit" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded">Save</button>
                </div>
            </form>
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
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
import { useProfileStore } from '@/stores/profile'

const id = ref(0);
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const gender = ref('');
const nationality = ref('');
const password = ref('');
const confirmPassword = ref('');
const phoneError = ref('');
const passwordError = ref('');
const profilephoto = ref('');
const previewImage = ref('');
const confirmPasswordError = ref('');
const profileStore = useProfileStore();





onMounted(() => {
    fetchUser();
});

const fetchUser = async () => {
    try {
        const user = await profileStore.users();

        if (user.data) {
            id.value = user.data.id;
            firstName.value = user.data.firstname;
            lastName.value = user.data.lastname;
            email.value = user.data.email;
            phone.value = user.data.contact;
            gender.value = user.data.gender;
            nationality.value = user.data.national;
            password.value = user.data.password;
            profilephoto.value = user.data.profilephoto;
            confirmPassword.value = user.data.password;
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
};


const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
        profilephoto.value = file;
    }
};

const submitForm = async () => {
    phoneError.value = '';
    passwordError.value = '';
    confirmPasswordError.value = '';

    if (!/^09\d{9}$/.test(phone.value)) {
        phoneError.value = 'Phone number must be 11 digits and start with 09';
        return;
    }

    if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}/.test(password.value)) {
        passwordError.value = 'Password must contain at least one letter, one number, one special character, and be at least 8 characters long';
        return;
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.value = 'Password and confirm password must match';
        return;
    }

    const formData = new FormData();
    formData.append('id', id.value);
    formData.append('lastname', lastName.value);
    formData.append('firstname', firstName.value);
    formData.append('email', email.value);
    formData.append('national', nationality.value);
    formData.append('gender', gender.value);
    formData.append('contact', phone.value);
    formData.append('password', password.value);

    if (profilephoto.value) {
        formData.append('profilephoto', profilephoto.value);
    }

    try {
        const updateRes = await profileStore.updateUser(formData);
        console.log(updateRes);
    } catch (error) {
        console.error('Error updating user profile:', error);
    }
};


const cancelForm = () => {

    console.log('Form cancelled!');
};
</script>
