// auth/verificaLogin.js
import store from '../store';
import VueCookies from 'vue-cookies';
const verifyLogin = async (to, from, next) => {
  if (!store.state.isVerified){
    await store.dispatch('checkAuthentication', VueCookies.$cookies);
  }
    if (store.state.isAuthenticated) {
        next({ name: 'home' });
      } else {
        next();
      }
};

export default verifyLogin;
