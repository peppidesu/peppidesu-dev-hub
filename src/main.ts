import './assets/main.css'
import 'primevue/resources/themes/aura-dark-cyan/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import AnimateOnScroll from 'primevue/animateonscroll';


const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app')
