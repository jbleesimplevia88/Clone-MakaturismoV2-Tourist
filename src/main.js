import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import lazyloadDirective from './lazyload.directive.js' // Import the directive
import './assets/index.css'

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.use(router)

app.use(lazyloadDirective) // Use the lazyload directive
app.mount('#app')
