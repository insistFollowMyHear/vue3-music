import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/style/index.less'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
