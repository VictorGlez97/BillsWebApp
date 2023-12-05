import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ImportGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Dropdown from 'primevue/dropdown'

import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// import 'primevue/primeicons.css'

import store from './store/index'

const app = createApp(App);

app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('ImportGroup', ImportGroup);
app.component('InputGroupAddon', InputGroupAddon);

app.use(store);
app.use(PrimeVue, { ripple: true });

app.component('Dialog', Dialog);

app.mount('#app');