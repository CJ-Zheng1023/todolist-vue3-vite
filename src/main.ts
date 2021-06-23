import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Todo from '@/components/todo'
createApp(App).use(Todo).use(store).mount('#app')
