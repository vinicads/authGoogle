<template>
  <div class="page-container d-flex justify-content-center align-items-center vh-100">
    <div class="google-button">
      <button type="button" class="btn btn-light" @click="google()">
        <img src="../assets/google.png" alt="Google Logo" loading="lazy" class="me-2" /> 
        Entrar com Google
      </button>
    </div>
  </div>
  </template>
  
  <script>
 
 import store from '@/store';
  import 'bootstrap/dist/css/bootstrap.min.css';
  export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        async google(){
          const width = 600;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `${store.state.apiUrl}/auth/google`;
  
        const popup = window.open(url, '_blank', `width=${width}, height=${height}, top=${top}, left=${left}`);
  
        if (!popup) {
          console.error('Failed to open popup');
          return;
        }
  
        window.addEventListener('message', async(event) => {
          const token = event.data.token;
          if (token) {
            const redirectPath = this.$route.query.redirect;
            if (redirectPath){
              await store.dispatch('checkAuthentication');
              this.$router.push(redirectPath);
            }else{
              window.location.reload();
            }
          }
        }, { once: true }); 
        }
    }
  }
  </script>
  
  <style scoped>

.page-container {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white; 
  text-align: center; 
  padding: 20px; 
  border-radius: 20px;
}

.google-button {
  margin-top: 20px; 
}

.google-button button {
  width: 300px;
  border: none;
  display: flex;
  align-items: center; 
  padding: 0.75rem;
  border-radius: 30px; 
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #f5f4f4;
  color: #000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; 
}

.google-button button:hover {
  background-color: #dedede;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px; 
}

.google-button button img {
  width: 25px;
  height: 25px;
  object-fit: cover;
}
  </style>