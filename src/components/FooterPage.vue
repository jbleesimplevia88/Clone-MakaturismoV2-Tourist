<template>
  <!-- Your main content goes here -->

  <footer class="mt-auto text-white bg-[#132540] hidden lg:block w-full lg:w-full">
    <div class="py-2 bg-secondary">
      <p class="p-2 m-0 text-sm md:text-base">Official Tourism site of Makati City - Philippines</p>
    </div>
    <div class="containe flex flex-col flex-grow p-10 ">
      <div class="flex flex-row ml-20">

        <!-- Section 1 -->
        <div class="footer-section sm:w-1/4  align-middle" id="section1">
          <div class="flex items-center mb-2 mr-">
            <img src="@/assets/images/Footer/makati_logo.png" alt="makati logo"
              class="inline w-6 h-auto mr-2 align-middle">
            <h6 class="text-sm md:text-base">Makaturismo</h6>
          </div>


          <router-link to="/" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Home</button>
          </router-link>

          <div>

            <div>

              <router-link to="/category/do" class="mb-2 text-sm md:text-base">
                <button class="text-white-500 hover:underline">What to Do</button>
              </router-link>
            </div>

          </div>
          <router-link to="/category/shop" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Where to Shop</button>
          </router-link>
          <div>

            <router-link to="/category/see" class="mb-2 text-sm md:text-base">
              <button class="text-white-500 hover:underline">What to See</button>
            </router-link>
          </div>

          <router-link to="/category/eat" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Where to Eat</button>
          </router-link>


          <div>

            <router-link to="/category/stay" class="mb-2 text-sm md:text-base">
              <button class="text-white-500 hover:underline">Where to Stay</button>
            </router-link>
          </div>

          <router-link to="/category/tour" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">MakatiTour</button>
          </router-link>

        </div>

        <!-- Section 2 -->


        <!-- Section 3 -->
        <div class="footer-section sm:w-1/4 ml-80 " id="section3">
          <!-- Contact Us -->
          <div>
            <h6 class="mb-2 text-sm md:text-base">Contact Us</h6>
            <div class="flex items-center">
              <img src="@/assets/images/Footer/Location.png" alt="Makati City" class="inline-block mr-2 mb-2">
              <p class="mb-2 text-sm md:text-base">Makati City</p>
            </div>
            <div class="flex items-center">
              <img src="@/assets/images/Footer/email.png" alt="tourism.makati@gmail.com"
                class="inline-block mr-2 mb-2">
              <p class="mb-2 text-sm md:text-base">tourism.makati@gmail.com</p>
            </div>
            <div class="flex items-center">
              <img src="@/assets/images/Footer/Vector.png" alt="(632) 8870-1000" class="inline-block mr-2 mb-2">
              <p class="mb-2 text-sm md:text-base">8870-1196/1992</p>
            </div>

            <h6 class="mb-2 text-sm md:text-base">MAKATI TOURIST CENTER</h6>
            <div class="flex items-center">
              <img src="@/assets/images/Footer/loc.png" alt="Makaturismo.sample@gmail.com"
                class="inline-block mr-2 mb-2">
              <p class="mb-2 text-sm md:text-base">Glorietta 2, Palm Drive</p>
            </div>
         
          </div>
        </div>
        <div class="footer-section sm:w-1/4  ml-80" id="section2">
          <!-- Other Related Sites -->
          <div>
            <h6 class="mb-2 text-xl md:text-base">Other Related Site</h6>
            <div>
              <p class="mb-2 text-sm md:text-base">
                <img src="@/assets/images/Footer/makati.png" alt="(makati.gov.ph)" class="inline-block mr-2 mb-2">
                <a href="https://www.makati.gov.ph/" target="_blank" rel="noopener noreferrer">makati.gov.ph</a>
              </p>
            </div>
          </div>
        </div>
        <!-- Section 4 -->
        <div class="footer-section sm:w-1/4  ml-80" id="section4 ml-20">
          <!-- FAQ -->
          <div>
            <h6 class="mb-2 text-sm md:text-base">FAQ</h6>
          </div>
        </div>
      </div>
      <hr class="my-4 border-white section-divider">
      <div class="flex items-center justify-between mx-10">
        <p class="text-sm sm:text-left md:text-base lg:text-lg">Copyright &copy; Makati City, Philippines</p>
        <div class="flex items-center ">
          <img src="@/assets/images/Footer/facebook.png" alt="facebook" class="
            flex m-1 soc-logo w-20">
          <img src="@/assets/images/Footer/instagram.png" alt="instagram" class=" flex m-1 soc-logo w-20">
          <img src="@/assets/images/Footer/twitter.png" alt="twitter" class=" flex m-1 soc-logo w-20">
          <img src="@/assets/images/Footer/youtube.png" alt="youtube" class=" flex m-1 soc-logo w-20 ">
        </div>
      </div>
    </div>
  </footer>
  <footer class="mt-auto fit-content text-white bg-primary block lg:hidden w-full">
    <div class="py-2 bg-secondary">
      <p class="p-2 m-0 text-sm md:text-base">Official Tourism site of Makati City - Philippines</p>
    </div>
    <div class="container flex flex-col flex-grow px-4 mx-auto sm:px-8">
      <div class="flex flex-row">
        <!-- Section 1 -->
        <div class="footer-section mt-4 w-1/2" id="section1">
          <div class="flex items-center mb-2">
            <img src="@/assets/images/Footer/makati_logo.png" alt="makati logo"
              class="inline w-6 h-auto mr-2 align-middle">
            <h6 class="text-sm md:text-base">Makaturismo</h6>
          </div>
          <router-link to="/" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Home</button>
          </router-link>

          <div>

            <div>

              <router-link to="/category/do" class="mb-2 text-sm md:text-base">
                <button class="text-white-500 hover:underline">What to Do</button>
              </router-link>
            </div>

          </div>
          <router-link to="/category/shop" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Where to Shop</button>
          </router-link>
          <div>

            <router-link to="/category/see" class="mb-2 text-sm md:text-base">
              <button class="text-white-500 hover:underline">What to See</button>
            </router-link>
          </div>

          <router-link to="/category/eat" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">Where to Eat</button>
          </router-link>


          <div>

            <router-link to="/category/stay" class="mb-2 text-sm md:text-base">
              <button class="text-white-500 hover:underline">Where to Stay</button>
            </router-link>
          </div>

          <router-link to="/category/tour" class="mb-2 text-sm md:text-base">
            <button class="text-white-500 hover:underline">MakatiTour</button>
          </router-link>
        </div>
        <!-- Section 2 to 4 (Displayed in a column on mobile) -->
        <div class=" footer-section w-1/2  md:pl-0 mt-4 -ml-4">
          <div class="   flex flex-col">
            <!-- Section 2 -->
            <div class="  w-full sm:w-1/2 mb-4 sm:mb-0">
              <h6 class="mb-2 text-xl md:text-base">Contact Us</h6>
              <div class="flex items-center">
                <img src="@/assets/images/Footer/Location.png" alt="Makati City" class="inline-block mr-2 mb-2">
                <p class="mb-2 text-sm md:text-base">Makati City</p>
              </div>
              <div class="flex items-center" style="max-width: 200px;">
                <img src="@/assets/images/Footer/email.png" alt="tourism.makati@gmail.com"
                  class="inline-block mr-2 mb-2">
                <p class="mb-2 text-xs md:text-base text-custom-size ">
                  Makaturismo.sample@gmail.com
                </p>
              </div>
              <div class="flex items-center mb-2">
                <img src="@/assets/images/Footer/Vector.png" alt="(632) 8870-1000" class="inline-block mr-2 mb-2">
                <p class="mb-2 text-sm md:text-base">8870-1196/1992</p>
              </div>
              <div class="  w-full sm:w-1/2 mb-6 mt-4 sm:mb-0">
              <h6 class="mb-2 text-xl md:text-base">MAKATI TOURIST CENTER</h6>
              <div class="flex items-center">
                <img src="@/assets/images/Footer/loc.png" alt="(632) 8870-1000" class="inline-block mr-2 mb-2">
                <p class="mb-2 text-sm md:text-base whitespace-nowrap">Glorietta 2, Palm Drive </p>

              </div>
              </div>
              
            </div>
            <div class="mb-2 w-full sm:w-1/2 mb-10 sm:mb-0">
              <h6 class="mb-2 text-sm md:text-base">Other Related Site</h6>
              <p class="mb-2 text-sm md:text-base">
                <img src="@/assets/images/Footer/makati.png" alt="(makati.gov.ph)" class="inline-block mr-2 mb-2">
                <a href="https://www.makati.gov.ph/" target="_blank" rel="noopener noreferrer">makati.gov.ph</a>
              </p>
            </div>
            <!-- Section 3 -->
            <!-- Section 4 -->
            <div class="mb-4 w-full sm:w-1/2">
              <h6 class="mb-0 text-sm md:text-base">FAQ</h6>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4 border-white section-divider">
      <div class="flex justify-between items-center mx-0 ">
        <p class="w-40 text-sm sm:text-left md:text-base lg:text-lg">Copyright &copy; Makati City, Philippines</p>
        <div class="flex items-center">
          <img src="@/assets/images/Footer/facebook.png" alt="facebook"
            class="inline-block soc-logo mr-1  w-16 md:w-20 lg:w-24 xl:w-32">
          <img src="@/assets/images/Footer/instagram.png" alt="instagram"
            class="inline-block mr-1 soc-logo  w-16:w-20 lg:w-24 xl:w-32">
          <img src="@/assets/images/Footer/twitter.png" alt="twitter"
            class="inline-block mr-1 soc-logo  w-16 md:w-20 lg:w-24 xl:w-32">
          <img src="@/assets/images/Footer/youtube.png" alt="youtube"
            class="inline-block soc-logo mr-1 w-16 md:w-20 lg:w-24 xl:w-32">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}


.section-divider {
  margin: 10px 0;
}

.soc-logo {
  width: 40px;
  filter: invert(100%);
}

.bg-primary {
  background-color: rgb(13, 25, 40);
}

.bg-secondary {
  background-color: #52688D;
}

/* Ensure the footer stays at the bottom */
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

/* Responsive text size for small screens using Tailwind CSS */
@media (max-width: 640px) {
  .text-sm {
    @apply text-xs;
  }

  .md\:text-base {
    @apply text-sm;
  }

  .lg\:text-lg {
    @apply text-base;
  }
}
</style>
