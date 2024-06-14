<template>
  <NavBar />
  <LandingBanner />
  <TopPlace />
  <FooterPage />
</template>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
import LandingBanner from '@/components/LandingBanner.vue';
import TopPlace from '@/components/TopPlace.vue';
import FooterPage from '@/components/FooterPage.vue';


const getBrowserInfo = () => {
  const { userAgent, platform, language, vendor } = navigator;
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Mozilla Firefox';
    browserVersion = userAgent.substring(userAgent.indexOf('Firefox') + 8);
  } else if (userAgent.indexOf('SamsungBrowser') > -1) {
    browserName = 'Samsung Internet';
    browserVersion = userAgent.substring(userAgent.indexOf('SamsungBrowser') + 15);
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    browserName = 'Opera';
    browserVersion = userAgent.substring(userAgent.indexOf('Opera') + 6);
    if (userAgent.indexOf('OPR') > -1) {
      browserVersion = userAgent.substring(userAgent.indexOf('OPR') + 4);
    }
  } else if (userAgent.indexOf('Trident') > -1) {
    browserName = 'Microsoft Internet Explorer';
    browserVersion = userAgent.substring(userAgent.indexOf('rv:') + 3);
  } else if (userAgent.indexOf('Edg') > -1) {
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.substring(userAgent.indexOf('Edg') + 4);
  } else if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edg') === -1) {
    browserName = 'Google Chrome';
    browserVersion = userAgent.substring(userAgent.indexOf('Chrome') + 7);
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    browserName = 'Safari';
    browserVersion = userAgent.substring(userAgent.indexOf('Safari') + 7);
    if (userAgent.indexOf('Version') > -1) {
      browserVersion = userAgent.substring(userAgent.indexOf('Version') + 8);
    }
  }

  return {
    browserName,
    browserVersion,
    platform,
    userAgent,
    language,
    vendor,
    screenWidth,
    screenHeight,
  };
};


const sendBrowserInfo = async () => {
  const browserInfo = getBrowserInfo();
  try {
    const response = await axios.post('/save-visitors', browserInfo);
    console.log('Browser information sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending browser information:', error);
  }
};


onMounted(() => {
  sendBrowserInfo();
});
</script>

<style scoped>
/* Your component styles */
</style>
