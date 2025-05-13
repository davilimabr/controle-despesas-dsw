import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css';         // estilos globais simples

createApp(App)
  .use(createPinia())
  .mount('#app');
