<template>
    <!-- Your main content goes here -->

    <footer class="mt-auto text-white bg-primary">
      <div class="py-2 bg-secondary">
        <p class="p-2 m-0 text-sm md:text-base">Official Tourism site of Makati City - Philippines</p>
      </div>
      <div class="container flex flex-col flex-grow px-4 mx-auto sm:px-8">
        <table class="w-full mx-0 my-2 sm:mx-5">
          <tr>
            <!-- Section 1 -->
            <td class="footer-section" id="section1">
              <div class="flex items-center mb-2">
                <img src="@/assets/images/Footer/makati_logo.png" alt="makati logo" class="inline w-6 h-auto mr-2 align-middle">
                <h6 class="text-sm md:text-base">
                  Makaturismo
                </h6>
              </div>
              <p class="mb-2 text-sm md:text-base">Home</p>
              <p class="mb-2 text-sm md:text-base">What to Do</p>
              <p class="mb-2 text-sm md:text-base">What to See</p>
              <p class="mb-2 text-sm md:text-base">Where to Eat</p>
              <p class="mb-2 text-sm md:text-base">Where to Stay</p>
              <p class="mb-2 text-sm md:text-base">Where to Shop</p>
              <p class="mb-2 text-sm md:text-base">MakatiTour</p>
            </td>

            <!-- Section 2 -->
            <td class="footer-section" id="section2">
              <table class="w-full">
                <tr>
                  <!-- Section 3 -->
                  <td class="footer-section">
                    <h6 class="mb-2 text-sm md:text-base">Other Related Site</h6>
                    <p class="mb-2 text-sm md:text-base">makati.gov.ph</p>
                  </td>

                  <!-- Section 4 -->
                  <td class="footer-section">
                    <h6 class="mb-2 text-sm md:text-base">FAQ</h6>
                  </td>
                </tr>
                <!-- Contact Us section -->
                <tr>
                  <td class="footer-section" colspan="2">
                    <h6 class="mb-2 text-sm md:text-base">Contact Us</h6>
                    <p class="mb-2 text-sm md:text-base">Makati City</p>
                    <p class="mb-2 text-sm md:text-base">Makaturismo.sample@gmail.com</p>
                    <p class="mb-2 text-sm md:text-base">8-7000</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <hr class="my-4 border-white section-divider">

        <div class="flex flex-col items-center justify-between py-2 mx-0 sm:flex-row sm:mx-7">
          <div class="flex-grow mb-2 sm:mb-0 sm:flex-col">
            <p class="text-sm sm:text-left md:text-base lg:text-lg">
              Copyright &copy; Makati City, Philippines
            </p>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/Footer/facebook.png" alt="facebook" class="inline-block m-1 soc-logo md:w-20 lg:w-24 xl:w-32">
            <img src="@/assets/images/Footer/instagram.png" alt="instagram" class="inline-block m-1 soc-logo md:w-20 lg:w-24 xl:w-32">
            <img src="@/assets/images/Footer/twitter.png" alt="twitter" class="inline-block m-1 soc-logo md:w-20 lg:w-24 xl:w-32">
            <img src="@/assets/images/Footer/youtube.png" alt="youtube" class="inline-block m-1 soc-logo md:w-20 lg:w-24 xl:w-32">
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  margin-top: auto; /* Add this line to remove space at the top */
}

.footer-section {
  padding: 10px;
  margin: 5px;
  vertical-align: top; /* Align content at the top */
}

.section-divider {
  margin: 10px 0; /* Adjust margin as needed */
}

.soc-logo {
  width: 40px;
  filter: invert(100%); /* Invert colors to make the image white */
}

.bg-primary {
  background-color: rgb(13, 25, 40);
}

.bg-secondary {
  background-color: #52688D;
}

/* Ensure the footer stays at the bottom */
html, body {
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
