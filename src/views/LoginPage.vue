<template>
    
    <div>
      <!-- Button to trigger the modal -->
      <button @click="showModal = true" class="px-4 py-2 text-white bg-blue-500 rounded">Open Modal</button>
  
      <!-- Include the Modal component -->
      <Modal v-if="showModal" />
  
      <!-- Other content of your component or view -->
    </div>
  </template>
  
  <script>
  import Modal from '@/components/LoginModal.vue';
  
  export default {
    components: {
      Modal,
    },
    data() {
      return {
        showModal: false,
      };
    },
  };
  </script>