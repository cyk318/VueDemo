import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css';
import router from "./infra/router.js";
import { createPinia } from 'pinia';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
