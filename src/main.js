import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import lazyloadDirective from './lazyload.directive.js' // Import the directive
import './assets/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.use(lazyloadDirective) // Use the lazyload directive

app.mount('#app')
