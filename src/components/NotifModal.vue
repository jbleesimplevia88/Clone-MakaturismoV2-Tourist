<template>
    <div v-if="showBookingConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold">Booking Confirmed</h2>
                <button @click="closeBookingConfirmationModal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <p>Thank you for booking with iBayad. .</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showBookingConfirmationModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeBookingConfirmationModal() {
            this.$emit('close');
        }
    }
}
</script>
<template>
    <!-- Your parent component's content -->
    <YourModalComponent v-if="showBookingConfirmationModal" @close="showBookingConfirmationModal = false" />
</template>

<script>
import YourModalComponent from './YourModalComponent.vue';

export default {
    components: {
        YourModalComponent
    },
    data() {
        return {
            showBookingConfirmationModal: false
        }
    }
}
</script>
