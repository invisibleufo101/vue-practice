import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router';

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App);
app.use(router); // .use() -> installs a plugin 
app.mount('#app'); // mount the application instance in the container element (<div id="app">)
