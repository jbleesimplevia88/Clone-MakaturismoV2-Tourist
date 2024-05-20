<template>
    <div class="w-full h-full bg-[#102E61] overflow-y-hidden">
      <!-- Profile router -->
      <RouterLink to="/">
        <div class="flex absolute mt-12 top-5 z-[1] bg-white pl-3 lg:pl-5 rounded-r-xl w-36 lg:mt-20 lg:w-56">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" class="w-6 h-6 mt-3 lg:w-10 lg:h-[30px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <p class="text-[#102E61] text-lg font-black p-3 pr-4 lg:text-3xl">PROFILE</p>
        </div>
      </RouterLink>
      <!-- /Profile router -->
  
      <!-- MOBILE-->
      <div class="pt-36 justify-center flex lg:hidden">
        <img src="@/assets/images/MainNav/card.svg" alt="" class="w-40" style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);" />
      </div>
      <div class="p-6 mt-7 bg-white lg:hidden">
        <div class="grid place-items-center">
          <div>
            <span>Add Profile Picture</span>
            <div class="border rounded-lg border-black bg-white w-[120px] my-3">
              <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange" />
              <label for="imageInput" class="cursor-pointer">
                <img v-if="model.previewImage" :src="model.previewImage" alt="Profile Picture" class="w-full h-full object-cover" />
                <img v-else src="@/assets/images/MainNav/profilepic.svg" alt="Profile Picture" class="w-full h-full object-cover" />
              </label>
            </div>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="mb-10">
          <!-- Form Fields -->
          <div class="mb-3">
            <label for="firstName" class="block font-bold mb-1">First Name<span style="color: red;">*</span></label>
            <input required type="text" id="firstName" v-model="model.userDetails.firstname" :placeholder="model.userDetails.firstname || 'Juan'" class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="mb-3">
            <label for="lastName" class="block font-bold mb-1">Last Name<span style="color: red;">*</span></label>
            <input required type="text" id="lastName" v-model="model.userDetails.lastname" :placeholder="model.userDetails.lastname || 'Dela Cruz'" class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="mb-3">
            <label for="email" class="block font-bold mb-1">Email Address<span style="color: red;">*</span></label>
            <input required type="email" id="email" v-model="model.userDetails.email" :placeholder="model.userDetails.email || 'juandelacruz@email.com'" autocomplete="email" class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="mb-3">
            <label for="phone" class="block font-bold mb-1">Phone Number</label>
            <input type="tel" id="phone" v-model="model.userDetails.contact" :placeholder="model.userDetails.contact || '09876543212'" class="w-full px-3 py-2 border rounded-lg" />
            <span v-if="model.phoneError" class="text-red-500">{{ model.phoneError }}</span>
          </div>
          <div class="mb-3">
            <label for="gender" class="block font-bold mb-1">Gender</label>
            <select id="gender" v-model="model.userDetails.gender" class="w-full px-3 py-2 border rounded-lg">
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="nationality" class="block font-bold mb-1">Nationality</label>
            <input type="text" id="nationality" v-model="model.userDetails.national" :placeholder="model.userDetails.national || 'Filipino'" class="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div class="mb-3">
            <label for="password" class="block font-bold mb-1">Password</label>
            <input type="password" id="password" v-model="model.userDetails.password" :placeholder="model.userDetails.password || '1234567890'" autocomplete="new-password" class="w-full px-3 py-2 border rounded-lg" />
            <span v-if="model.passwordError" class="text-red-500">{{ model.passwordError }}</span>
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="block font-bold mb-1">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="model.confirmPassword" :placeholder="model.confirmPassword || '1234567890'" autocomplete="new-password" class="w-full px-3 py-2 border rounded-lg" />
            <span v-if="model.confirmPasswordError" class="text-red-500">{{ model.confirmPasswordError }}</span>
          </div>
          <div class="flex justify-center">
            <button type="button" class="text-black px-4 py-2 rounded" @click="cancelForm">Cancel</button>
            <button type="submit" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded ml-4">Save</button>
          </div>
        </form>
      </div>
      <!-- /MOBILE-->
  
      <!-- WEB-->
      <div class="p-10 hidden lg:block mt-44">
        <!-- Add Profile Picture -->
        <div class="grid place-items-center grid-cols-2 bg-white rounded-t-xl">
          <div class="mt-10 text-center ml-40">
            <div class="border rounded-lg border-black bg-white w-[165px] my-5 relative">
              <input type="file" class="hidden" id="imageInput" accept="image/*" @change="handleImageChange" />
              <label for="imageInput" class="cursor-pointer">
                <img v-if="model.previewImage" :src="model.previewImage" alt="Profile Picture" class="w-full h-full object-cover" />
                <img v-else src="@/assets/images/MainNav/profilepic.svg" alt="Profile Picture" class="w-full h-full object-cover" />
              </label>
            </div>
            <span class="font-semibold">Add Profile Picture</span>
          </div>
          <div class="mr-40 mt-10">
            <img src="@/assets/images/MainNav/card.svg" alt="" class="w-full rounded-xl" style="box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.868);" />
          </div>
        </div>
        <!-- /Add Profile Picture -->
  
        <form @submit.prevent="submitForm" class="mb-32 bg-white rounded-b-xl px-40 py-8 hidden lg:block h-full">
          <hr class="my-4 border-t border-gray-300 w-full pb-10" />
          <div class="grid grid-cols-2 grid-rows-1 gap-4">
            <div>
              <div class="mb-4">
                <label for="firstName" class="block font-bold mb-1">First Name<span style="color: red;">*</span></label>
                <input required type="text" id="firstName" v-model="model.userDetails.firstname" :placeholder="model.userDetails.firstname || 'Juan'" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div class="mb-4">
                <label for="email" class="block font-bold mb-1">Email Address<span style="color: red;">*</span></label>
                <input required type="email" id="email" v-model="model.userDetails.email" :placeholder="model.userDetails.email || 'juandelacruz@email.com'" autocomplete="email" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div class="mb-4">
                <label for="gender" class="block font-bold mb-1">Gender</label>
                <select id="gender" v-model="model.userDetails.gender" class="w-full px-3 py-2 border rounded-lg">
                  <option value="">Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="password" class="block font-bold mb-1">Password</label>
                <input type="password" id="password" v-model="model.userDetails.password" :placeholder="model.userDetails.password || '1234567890'" autocomplete="new-password" class="w-full px-3 py-2 border rounded-lg" />
                <span v-if="model.passwordError" class="text-red-500">{{ model.passwordError }}</span>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label for="lastName" class="block font-bold mb-1">Last Name<span style="color: red;">*</span></label>
                <input required type="text" id="lastName" v-model="model.userDetails.lastname" :placeholder="model.userDetails.lastname || 'Dela Cruz'" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div class="mb-4">
                <label for="phone" class="block font-bold mb-1">Phone Number</label>
                <input type="tel" id="phone" v-model="model.userDetails.contact" :placeholder="model.userDetails.contact || '09876543212'" class="w-full px-3 py-2 border rounded-lg" />
                <span v-if="model.phoneError" class="text-red-500">{{ model.phoneError }}</span>
              </div>
              <div class="mb-4">
                <label for="nationality" class="block font-bold mb-1">Nationality</label>
                <input type="text" id="nationality" v-model="model.userDetails.national" :placeholder="model.userDetails.national || 'Filipino'" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div class="mb-4">
                <label for="confirmPassword" class="block font-bold mb-1">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="model.confirmPassword" :placeholder="model.confirmPassword || '1234567890'" autocomplete="new-password" class="w-full px-3 py-2 border rounded-lg" />
                <span v-if="model.confirmPasswordError" class="text-red-500">{{ model.confirmPasswordError }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center lg:my-10">
            <button type="button" class="text-black px-4 py-2 rounded" @click="cancelForm">Cancel</button>
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
  import { reactive, onBeforeMount } from 'vue';
  import { useProfileStore } from '@/stores/profile';
  import axios from 'axios';
  
  const model = reactive({
    userDetails: [],
    previewImage: '',
    confirmPassword: '',
    confirmPasswordError: '',
    nationalities: [],
    photo: {},
    phoneError: '',
    passwordError: '',
  });
  
  const profileStore = useProfileStore();
  
  const fetchUser = async () => {
    try {
      const user = await profileStore.users();
      if (user.data) {
        model.userDetails = user.data;
        model.confirmPassword = user.data.password
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
        model.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
      model.photo = file;
    }
  };
  
  const submitForm = async () => {
    model.phoneError = '';
    model.passwordError = '';
    model.confirmPasswordError = '';
  
    if (!/^09\d{9}$/.test(model.userDetails.contact)) {
      model.phoneError = 'Phone number must be 11 digits and start with 09';
      return;
    }
  
    if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}/.test(model.userDetails.password)) {
      model.passwordError = 'Password must contain at least one letter, one number, one special character, and be at least 8 characters long';
      return;
    }
  
    if (model.userDetails.password !== model.confirmPassword) {
      model.confirmPasswordError = 'Password and confirm password must match';
      return;
    }
  
    const formData = new FormData();
    formData.append('id', model.userDetails.id);
    formData.append('lastname', model.userDetails.lastname);
    formData.append('firstname', model.userDetails.firstname);
    formData.append('email', model.userDetails.email);
    formData.append('national', model.userDetails.national);
    formData.append('gender', model.userDetails.gender);
    formData.append('contact', model.userDetails.contact);
    formData.append('password', model.userDetails.password);
  
    if (model.photo) {
      formData.append('photo', model.photo);
    }
  
      const updateRes = await profileStore.updateUser(formData);
    
  
  };
  
  const cancelForm = () => {
    console.log('Form cancelled!');
  };
  
  const fetchNationalities = async () => {
    const response = await axios.post(`/nationality`);
    model.nationalities = response.data;
    console.log(model.nationalities);
  };
  
  onBeforeMount(async () => {
    await fetchUser();
    await fetchNationalities();
  });
  </script>
  