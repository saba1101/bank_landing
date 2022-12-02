import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)
//////git test
AOS.init()

app.mount('#app')
