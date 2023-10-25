import { createApp } from 'vue'
import App from './App.vue'

// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import store from './store/index'

const vuetify = createVuetify();

const app = createApp(App).use(vuetify).use(store).mount('#app')