<template>
  <nav class="fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-white shadow md:px-20">
    <!-- Left side - Logo -->
    <div class="flex items-center">
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/images/Header/makati_logo.png" alt="banner" class="hidden w-8 h-auto mr-3 md:block md:w-16 md:h-auto">
        <img src="@/assets/images/Header/makaturismo.png" alt="logo" class="w-auto h-10 md:w-24 md:h-auto">
      </RouterLink>
    </div>

    <!-- Right side - Calendar and Login -->
    <div class="flex items-center space-x-4">
      <RouterLink to="/" class="hidden text-white md:inline-block"><img src="@/assets/images/Header/search.png" alt="logo" class="w-auto h-5 ml-2"></RouterLink>
      <RouterLink to="/calendar" class="hidden text-white md:inline-block"><img src="@/assets/images/Header/calendar.png" alt="logo" class="w-auto h-6 mx-2"></RouterLink>
      <button @click="openLoginModal" class="text-blue-600">Login</button>
    </div>
    
    <!-- Login Modal -->
    <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center bottom' } ">
        <!-- Modal Content -->
        <div class="relative z-10 flex flex-col items-start justify-center h-full">
          <div class="mb-5">
            <h2 class="text-2xl font-bold">Welcome!</h2>
            <p>Please log in to your account.</p>
          </div>
          <form @submit.prevent="login" style="width: 40%;">
            <div class="relative mb-4">
              <label for="username" class="block text-gray-700">Enter Username</label>
              <div class="relative">
                <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-2" style="width: 15px;" alt="Username Icon" />
                <input type="text" id="username" v-model="username" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="Username">
              </div>
            </div>
            <div class="relative mb-4">
              <label for="username" class="block text-gray-700">Enter Password</label>
              <div class="relative">
                <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-2" style="width: 15px;" alt="Username Icon" />
                <img src="@/assets/images/Modal/view.png" class="absolute inset-y-0 right-0 mx-3 my-2" style="width: 15px;" alt="Eye Icon" />
                <!-- <img src="@/assets/images/Modal/hidden.png" class="absolute inset-y-0 right-0 mx-3 my-2" style="width: 15px;" alt="Eye Icon" /> -->
                <input type="password" id="password" v-model="password" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="Password">
              </div>
            </div>
            <div class="flex justify-between mb-4">
              <p>Don't have an account? <button @click="openSignUpModal" class="text-blue-600">Sign Up</button></p>
              <button @click="openForgotModal" class="text-blue-600">Forgot Password?</button>
            </div>
            <label class="">
              <input type="radio" name="partnerType" value="regular"> Become a partner
            </label>
            <div class="mt-10 text-center">
              <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

   <!-- Sign Up Modal -->
    <div v-if="showSignUpModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover'}">        <!-- Modal Content -->
        <div class="relative z-10 flex flex-col items-start justify-center h-full">
          <form @submit.prevent="signup" style="width: 60%;">
            <div class="mb-5">
              <div class="flex items-center mb-4">
                <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                <h2 class="text-2xl font-bold">Sign Up(Tourist)</h2>
                <input type="radio" name="partnerType" value="regular" class="m-2"> Become a partner
              </div>
            </div>

            <!-- Firstname -->
            <div class="relative flex items-center mb-4">
              <label for="username" class="block text-gray-700" style="margin-right: 35px;">Firstname</label>
              <div class="relative flex-grow">
                <input type="text" id="username" v-model="username" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
              </div>
            </div>

            <!-- Lastname -->
            <div class="relative flex items-center mb-4">
              <label for="lastname" class="block text-gray-700" style="margin-right: 36px;">Lastname</label>
              <div class="relative flex-grow">
                <input type="text" id="lastname" v-model="lastname" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
              </div>
            </div>

           
            <div class="relative flex items-center mb-4">
               <!-- E-mail Address -->
              <label for="email" class="block text-gray-700" style="margin-right: 36px;">E-mail Address</label>
              <div class="relative flex flex-grow mr-2">
                <input type="text" id="email" v-model="email" class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="" style="padding-right:30px;">
              </div>
              
              <!-- Phone Number -->
              <label for="pnum" class="block mr-3 text-gray-700">Phone Number</label>
              <div class="relative flex flex-grow">
                <input type="text" id="pnum" v-model="pnum" class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="">
              </div>
            </div>

            <div class="relative flex items-center mb-4">
              
              <!-- Citizenship -->
              <label for="citizenship" class="block text-gray-700" style="margin-right: 27px;">Citizenship</label>
              <div class="relative flex flex-grow mr-2">
                <input type="text" id="citizenship" v-model="citizenship" class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="" tyle="padding-right:40px;">
              </div>
              <!-- Gender -->
              <label for="gender" class="block mr-3 text-gray-700">Gender</label>
              <div class="relative flex flex-grow">
                <input type="text" id="gender" v-model="gender" class="flex-grow w-1/2 h-8 pl-10 border border-black rounded-md" placeholder="" style="padding-left:0px;">
              </div>
            </div>
            
            <!-- Password -->
            <div class="relative flex items-center mb-4">
              <label for="password" class="block text-gray-700" style="margin-right: 36px;">Password</label>
              <div class="relative flex-grow">
                <input type="text" id="password" v-model="password" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
              </div>
            </div>

            <!-- Confirm your passsword -->
            <div class="relative flex items-center mb-4">
              <label for="rePassword" class="block mr-3 text-gray-700">Confirm your <br> passsword</label>
              <div class="relative flex-grow">
                <input type="text" id="rePassword" v-model="rePassword" class="w-full h-8 pl-10 border border-black rounded-md" placeholder="">
              </div>
            </div>

            <div class="mt-10 text-center">
              <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-md">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Forgot Modal -->
    <div v-if="showForgotModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover'}">        <!-- Modal Content -->
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 30%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Change Password</h2>
                </div>
                
                <p class="mb-20">Enter your email to receive an OTP for access to changing passoword</p>

                <div class="relative mb-4">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3" style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email" class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
                
              </div>
  
              <div class="mt-10 text-center">
                <button @click="openOtpModal" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    <!-- OTP Modal -->
    <div v-if="showForgotModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="relative p-8 bg-white" :style="{ width: '75%', height: '65%', borderRadius: '20px', backgroundImage: 'url(' + imageUrl2 + ')', backgroundSize: 'cover'}">        <!-- Modal Content -->
          <div class="relative z-10 flex flex-col items-start justify-center h-full">
            <form @submit.prevent="forgot" style="width: 60%;">
              <div class="mb-5">
                <div class="flex items-center mb-10">
                  <button @click="openLoginModal" class="text-blue-600"><img src="@/assets/images/Modal/back.png" style="width: 20px; height: 20px;" alt="" class="my-2 mr-2"></button>
                  <h2 class="text-2xl font-bold">Enter One-Time Password to verify your account</h2>
                </div>
                <p class="">An OTP has been sent to your email for changing your password</p>

                <div class="relative mb-4">
                  <div class="relative">
                    <img src="@/assets/images/Modal/profile.png" class="absolute inset-y-0 left-0 mx-3 my-3" style="width: 15px;" alt="Username Icon" />
                    <input type="text" id="email" v-model="email" class="w-full h-10 pl-10 border border-black rounded-lg" placeholder="Email">
                  </div>
                </div>
                
              </div>
  
              <div class="mt-10 text-center">
                <button @click="openOtpModal" class="px-4 py-2 text-white bg-blue-600 rounded-lg">Receive OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import imageUrl from '@/assets/images/Modal/Intersect.png';
import imageUrl2 from '@/assets/images/Modal/bg2.png';

export default {
  name: 'NavBar',
  components: {
    RouterLink,
  },
  data() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      showForgotModal: false, 
      showOtpModal: false,
      username: '',
      password: '',
      imageUrl: imageUrl,
      imageUrl2: imageUrl2
    };
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true;
    },
    openSignUpModal() {
      this.showSignUpModal = true;
    },
    openForgotModal() {
      this.showForgotModal = true;
    },
    openOtpModal() {
      this.showOtpModal = true;
    },
    login() {
      // Your login logic here
      console.log('Logging in...');
      // After successful login, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.username = '';
      this.password = '';
      this.showLoginModal = false;
    },
    signup() {
      // Your sign-up logic here
      console.log('Signing up...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showSignUpModal = false;
    },
    forgot() {
      // Your sign-up logic here
      console.log('Forgot...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showForgotModal = false;
    },
    otp() {
      // Your sign-up logic here
      console.log('...');
      // After successful sign-up, you might want to redirect the user
      // Example: this.$router.push('/dashboard');
      // Reset form fields and close modal
      this.showOtpModal = false;
    }
  }
};
</script>

<style>
.bg-img{
  background-size: 300px 500px;
}
</style>
