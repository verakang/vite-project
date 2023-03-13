import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'
import moment from 'moment'

const app = createApp(App)

app.config.globalProperties.$moment = moment
app.use(moment)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
