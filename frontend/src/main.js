import store from '@/store';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies';


const app = createApp(App)

app.use(VueCookies)

async function initializeApp() {
  try {
    store.dispatch('checkAuthentication', VueCookies.$cookies); 
    app.use(store).use(router).mount('#app');
  } catch (error) {
    console.error('Erro ao verificar a autenticação:', error);
  }
}

initializeApp();
