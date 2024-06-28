<template>
  <div>
     <!-- Navigation Filter -->
     <div class="bg-[#102E61] w-full h-[770px] z-10 lg:block hidden lg:p-10">
       <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar lg:p-10 ">
         <div class="text-[#102E61] w-full z-10 p-4 flex justify-center">
           <nav class="flex">
             <button @click="filterByStatus('Pending')"
               :class="{ 'bg-blue-200': selectedStatus === 'Pending', 'hover:bg-blue-200': selectedStatus !== 'Pending' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">Pending</button>
             <button @click="filterByStatus('toShipped')"
               :class="{ 'bg-blue-200': selectedStatus === 'toShipped', 'hover:bg-blue-200': selectedStatus !== 'toShipped' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Ship</button>
             <button @click="filterByStatus('toReceived')"
               :class="{ 'bg-blue-200': selectedStatus === 'toReceived', 'hover:bg-blue-200': selectedStatus !== 'toReceived' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Receive</button>
             <button @click="filterByStatus('Completed')"
               :class="{ 'bg-blue-200': selectedStatus === 'Completed', 'hover:bg-blue-200': selectedStatus !== 'Completed' }"
               class="px-4 py-2 text-[#2969D6] rounded-md">Completed</button>
           </nav>
         </div>
         <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
           <div v-for="(group, index) in filteredItems" :key="index" class="bg-[#E7EAEF] p-4 mb-4 rounded-lg">
             <!-- Order ID -->
             <div class="text-lg font-bold mb-2">Order ID: {{ group.orderid }}</div>
             <!-- Products -->
             <div v-for="item in group.products" :key="item.id" class="flex justify-between mb-2">
               <div class="w-1/3 lg:w-[15%] lg:h-[50%]">
                 <img :src="getImageUrl(getFirstImageUrl(item?.preproduct?.[0]?.uploadedphotos))"
                   :alt="item.productname" class="lg:w-[50%] lg:h-[30%] w-20 h-20 object-cover mb-2 rounded-lg">
                 <div class="text-sm text-gray-500">{{ formatDate(item.created_at) }}</div>
               </div>
               <div class="lg:w-1/3  flex flex-col justify-center">
                 <div class="text-md">{{ item.productname }}</div>
               </div>
               <div class="w-1/3 flex flex-col justify-center text-right">
                 <div class="text-md">{{ item.quantity }}x</div>
                 <div class="text-md">₱ {{ group.finaltotal}}</div>
               </div>
             </div>
             <!-- Action Button -->
             <div class="text-right">
               <button v-if="group.paymentstatus === 'toReceived' && group.order_accepted_status === 'Completed'" @click="orderReceived(group)"
                 class="px-4 py-2.5 bg-[#2969D6] font-bold text-white rounded-md">Order Received</button>
               <button v-else-if="group.paymentstatus === 'Completed'" @click="openParcelDetails(group)"
                 class="px-4 py-2.5 bg-[#2969D6] font-bold text-white rounded-md">See Details</button>
             </div>
           </div>
         </div>
       </div>
     </div>
 
     <!-- Mobile View -->
     <div class="bg-[#102E61] w-full h-[700px] z-10 block lg:hidden">
       <div class="bg-white p-6 pb-10 mx-auto -mt-[2rem] space-y-6 lg:w-[94%] rounded-lg hidden-scrollbar">
         <div class="text-[#102E61] w-full z-10 p-4 flex justify-center">
           <nav class="flex">
             <button @click="filterByStatus('Pending')"
               :class="{ 'bg-blue-500': selectedStatus === 'Pending', 'hover:bg-blue-400': selectedStatus !== 'Pending' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">Pending</button>
             <button @click="filterByStatus('toShipped')"
               :class="{ 'bg-blue-500': selectedStatus === 'toShipped', 'hover:bg-blue-400': selectedStatus !== 'toShipped' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Ship</button>
             <button @click="filterByStatus('toReceived')"
               :class="{ 'bg-blue-500': selectedStatus === 'toReceived', 'hover:bg-blue-400': selectedStatus !== 'toReceived' }"
               class="px-4 py-2 mr-4 text-[#2969D6] rounded-md">To Receive</button>
             <button @click="filterByStatus('Completed')"
               :class="{ 'bg-blue-500': selectedStatus === 'Completed', 'hover:bg-blue-400': selectedStatus !== 'Completed' }"
               class="px-4 py-2 text-[#2969D6] rounded-md">Completed</button>
           </nav>
         </div>
         <div class="w-[100%] h-[35rem] z-10 space-y-2 overflow-y-auto hidden-scrollbar">
           <div v-for="(group, index) in filteredItems" :key="index" class="bg-[#E7EAEF] p-4 mb-4 rounded-lg">
             <!-- Order ID -->
             <div class="text-lg font-bold mb-2">Order ID: {{ group.orderid }}</div>
             <!-- Products -->
             <div v-for="item in group.products" :key="item.id" class="flex justify-between mb-2">
               <div class="w-1/3">
                 <img :src="getImageUrl(getFirstImageUrl(item?.preproduct?.[0]?.uploadedphotos))"
                 :alt="item.productname" class="lg:w-[50%] lg:h-[30%] w-20 h-20 object-cover mb-2 rounded-lg">
                 <div class="text-sm text-gray-500">{{ formatDate(item.created_at) }}</div>
               </div>
               <div class="w-1/3 flex flex-col justify-center">
                 <div class="text-md">{{ item.productname }}</div>
               </div>
               <div class="w-1/3 flex flex-col justify-center text-right">
                 <div class="text-md">{{ item.quantity }}x</div>
                 <div class="text-md">₱ {{ group.finaltotal }}</div>
               </div>
             </div>
             <!-- Action Button -->
             <div class="text-right">
               <button v-if="group.paymentstatus === 'toShipped'" @click="cancelOrder(group)"
                 class="px-4 py-2.5 bg-[#2969D6] font-bold text-white rounded-md">Cancel</button>
               <button v-if="group.paymentstatus === 'toReceived' && group.order_accepted_status === 'Completed'" @click="orderReceived(group)"
                 class="px-4 py-2.5 bg-[#2969D6] font-bold text-white rounded-md">Order Received</button>
               <button v-else-if="group.paymentstatus === 'Completed'" @click="openParcelDetails(group)"
                 class="px-4 py-2.5 bg-[#2969D6] font-bold text-white rounded-md">See Details</button>
             </div>
           </div>
         </div>
       </div>
     </div>
<!-- Buy Again Modal -->
<div v-if="showParcelDetails" class="fixed inset-0 mt-[4.5rem] flex items-center justify-center bg-gray-800 bg-opacity-75">
  <div class="relative p-7 bg-white w-[90%] lg:w-[855px] lg:h-auto rounded-lg">
    <!-- Modal Content -->
    <div class="flex justify-between">
      <div>
        <p class="font-bold text-3xl">Order Completed</p>
        <p class="text-xs">Thank you for shopping with us!</p>
      </div>
      <div class="relative flex justify-end">
        <button class="absolute">
          <svg @click="closeParcelDetails" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="black" class="w-auto h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-5 flex justify-between">
      <p class="text-md">Shipping Information</p>
      <p class="text-xs text-[#008EE4] mt-1">Parcel has been delivered</p>
    </div>

    <div v-for="(product, index) in selectedItem.products" :key="index" class="flex flex-col justify-between mt-[1.5rem] w-auto lg:h-[154px] h-[120px] bg-[#E7EAEF] space-y-2 relative">
      <!-- Add relative positioning -->
      <div class="flex flex-row">
        <div class="w-[50%]">
        <img :src="getImageUrl(getFirstImageUrl(product?.preproduct?.[0]?.uploadedphotos))" class="h-[120px] w-[154px] lg:h-[154px] ">
      </div>
        <div class="w-full">
          <div class="grid grid-cols-2">
            <p class="h-[2rem] mt-3 text-md lg:text-lg">{{ product?.productname }}</p>
            <p class="mt-4 text-md absolute right-0 mr-10">{{ product?.quantity }}x</p>
          </div>
          <div class="absolute bottom-0 right-0 mb-4 mr-10">
            <!-- Positioning to bottom right corner -->
            <p class="text-md">₱ {{ product?.productprice }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem?.products && selectedItem.products.length > 0" class="flex justify-between mt-3 w-auto lg:h-auto bg-[#E7EAEF] space-y-2">
      <div class="flex flex-row gap-[5rem]">
        <div class="ml-4 flex flex-col">
          <p class="mt-1 text-md text-[#747474]">Merchandise Subtotal</p>
          <p class="mt-3 text-md text-[#747474]">Shipping Fee</p>
          <p class="mt-3 pb-3 text-lg">Order Total</p>
        </div>
      </div>
      <div class="flex flex-col items-center mr-10">
        <p class="mt-1 text-md text-[#747474] text-right">₱ {{ selectedItem.subtotal }}</p>
        <p class="mt-3 text-md text-[#747474] text-right">₱  {{ selectedItem.deliveryfee }}</p>
        <p class="mt-3 text-md">₱ {{ selectedItem.finaltotal }}</p>
      </div>
    </div>
    <div class="justify-end flex mt-6">
      <button @click="buyAgain(selectedItem?.products[0])" class="px-4 py-2.5 p-2 bg-[#2969D6] font-bold text-white rounded-md text-center">Buy Again</button>
    </div>
  </div>
</div>




    <!-- Order Received Modal -->
    <div v-if="showOrderReceived" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="relative p-7 bg-white w-[90%] lg:w-[50%] rounded-lg">
        <div class="flex justify-between mb-4">
          <p class="font-bold text-xl">Order Received</p>
          <button @click="closeOrderReceived()" class="text-gray-500 hover:text-gray-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>
        <p>Confirm that you have received your order?</p>
        <div class="flex justify-end mt-4">
          <button @click="closeOrderReceived()" class="px-4 py-2 bg-gray-200 rounded-md">No</button>
          <button @click="confirmOrderReceived" class="ml-2 px-4 py-2 bg-[#2969D6] text-white rounded-md">Yes</button>
        </div>
      </div>
    </div>

    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="relative p-7 bg-white w-[90%] lg:w-[50%] rounded-lg">
      <div class="flex justify-between mb-4">
        <p class="font-bold text-xl">Order Received</p>
        <button @click="closeSuccessModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p>Order confirmed successfully</p>
      <div class="flex justify-end mt-4">
        <button @click="closeSuccessModal" class="ml-2 px-4 py-2 bg-[#2969D6] text-white rounded-md">Close</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTransactionStore } from '../stores/transactionContent';
import { useRouter } from 'vue-router';

const transactionStore = useTransactionStore();
const router = useRouter();

const selectedStatus = ref('Pending');
const showParcelDetails = ref(false);
const showCancelOrder = ref(false);
const showOrderReceived = ref(false);
const selectedItem = ref({});
const showSuccessModal = ref(false);

const transactions = computed(() => transactionStore.transactions);

onMounted(() => {
  transactionStore.fetchTransactions();
});

const getFirstImageUrl = (pictureimage) => {
  if (!pictureimage) return '';
  const images = pictureimage.split('|').filter(img => img.trim() !== '');
  return images.length > 0 ? images[0] : '';
};

const getImageUrl = (fileName) => {
  return `${import.meta.env.VITE_STORAGE_BASE_URL}/${fileName}`;
};

const filteredItems = computed(() => {
  if (transactions.value) {
    return transactions.value.filter(group => group.paymentstatus === selectedStatus.value);
  }
  return [];
});

const formatDate = (dateTimeString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const date = new Date(dateTimeString);
  return date.toLocaleString('en-US', options);
};

const filterByStatus = (status) => {
  selectedStatus.value = status;
};

const cancelOrder = (group) => {
  selectedItem.value = group;
  showCancelOrder.value = true;
};

const closeSuccessModal = () => {
  showSuccessModal.value = false;
};

const orderReceived = (group) => {
  selectedItem.value = group;
  showOrderReceived.value = true;
};

const closeParcelDetails = () => {
  showParcelDetails.value = false;
};
const openParcelDetails = (group) => {
  if (group && group.products && group.products.length > 0) {
    selectedItem.value = group;
    showParcelDetails.value = true;
  }
};

const closeOrderReceived = () => {
  showOrderReceived.value = false;
};

const confirmOrderReceived = async () => {
  const success = await transactionStore.confirmOrderReceived(selectedItem.value.orderid);
  if (success) {
    showOrderReceived.value = false;
    selectedItem.value = {}; // Reset the selectedItem
    showSuccessModal.value = true; // Show success modal
  } else {
    alert('Error confirming the order. Please try again.');
  }
};

const buyAgain = (item) => {
  transactionStore.buyAgain(item, router);
};
</script>
