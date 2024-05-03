import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import lazyloadDirective from './lazyload.directive.js' // Import the directive
import './assets/index.css'
import axios from 'axios'

axios.defaults.baseURL = `${ import.meta.env.VITE_TOURIST_API_URL }`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const pinia = createPinia()
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(pinia)
app.use(router)

app.use(lazyloadDirective) // Use the lazyload directive
app.mount('#app')
