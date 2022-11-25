import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueAos from 'vue-aos'
const app = createApp(App)

app.mount('#app')
app.use(VueAos)
