import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import App1 from './App1.vue'
import router from './router'

const app = createApp(App)
const app1 = createApp(App1)

app.use(router)

app.mount('#app')
app1.mount('#app1')


