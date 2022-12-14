import { createApp } from 'vue'

import  App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Vue from 'vue'
import router from './router'
import store from "@/store"
import axios from "axios"
import VueAxios from 'vue-axios'
import './assets/index.css'



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .provide('axios', app.config.globalProperties.axios)
    .mount('#app')
