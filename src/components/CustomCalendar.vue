<template>
    <div class="calendar ">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <div>
          <select v-model="year" @change="changeYear">
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
          <select v-model="month" @change="changeMonth">
            <option v-for="(m, index) in monthNames" :key="m" :value="index">{{ m }}</option>
          </select>
        </div>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="calendar-body">
        <div class="calendar-grid">
          <div v-for="day in days" :key="day" class="calendar-day">{{ day }}</div>
        </div>
        <div class="calendar-grid">
          <div v-for="blank in blankDays" :key="blank" class="calendar-day"></div>
          <div
            v-for="date in daysInMonth"
            :key="date"
            :class="['calendar-day', { selectable: isDateSelectable(date), selected: isSelected(date) }]"
            @click="selectDate(date)"
          >
            {{ date }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const props = defineProps({
    availableDays: Array,
    selectedDate: String,
  });
  
  const emit = defineEmits(['update:selectedDate']);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const today = new Date();
  const month = ref(today.getMonth());
  const year = ref(today.getFullYear());
  const selectedDay = ref('');
  const years = Array.from({ length: 10 }, (_, i) => today.getFullYear() + i); // Next 10 years
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const daysInMonth = computed(() => {
    const dim = new Date(year.value, month.value + 1, 0).getDate();
    return dim;
  });
  
  const blankDays = computed(() => {
    const bd = new Date(year.value, month.value, 1).getDay();
    return bd;
  });
  
  const isDateSelectable = (date) => {
    const fullDate = new Date(year.value, month.value, date);
    const dayOfWeek = fullDate.getDay();
    const selectable = props.availableDays.includes(dayOfWeek);
    return selectable;
  };
  
  const isSelected = (date) => {
    const fullDate = new Date(year.value, month.value, date);
    const localDate = new Date(fullDate.getTime() - fullDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const selected = localDate === props.selectedDate;
    return selected;
  };
  
  const selectDate = (date) => {
    const fullDate = new Date(year.value, month.value, date);
    const localDate = new Date(fullDate.getTime() - fullDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    if (!isDateSelectable(date)) return;
    if (localDate === props.selectedDate) {
      emit('update:selectedDate', '');
    } else {
      emit('update:selectedDate', localDate);
    }
  };
  
  const prevMonth = () => {
    if (month.value === 0) {
      month.value = 11;
      year.value--;
    } else {
      month.value--;
    }
  };
  
  const nextMonth = () => {
    if (month.value === 11) {
      month.value = 0;
      year.value++;
    } else {
      month.value++;
    }
  };
  
  const changeYear = () => {
    selectedDay.value = '';
  };
  
  const changeMonth = () => {
    selectedDay.value = '';
  };
  
  watch([month, year], () => {
  });
  </script>
  
  <style scoped>
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
  .calendar-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }
  .calendar-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }
  .calendar-day {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .calendar-day.selectable {
    background-color: #e0e0e0;
  }

.selectable {
  background-color: #e0e0e0;
  border-radius: 50%;
  cursor: pointer;
}

.calendar-day.selected {
  background-color: blue;
  color: white;
  border-color: black;
}
  </style>
  