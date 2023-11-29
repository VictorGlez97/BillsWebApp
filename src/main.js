import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'

import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primevue/resources/primevue.min.css'
// import 'primevue/primeicons.css'

import store from './store/index'

const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.component('Dialog', Dialog);

app.mount('#app');