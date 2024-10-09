<template>
    <div class="containerGoogle">
      <div class="card shadow-lg">
        <div class="card-header text-center">
          <h5 class="card-title">Painel do Usuário</h5>
        </div>
        <div class="card-body text-center">
          <h6 class="card-subtitle mb-2 text-muted">Bem-vindo de volta, <strong>{{ user.email }}</strong>!</h6>
          <p class="card-text">
            Você está logado e pronto para explorar!
          </p>
          <div class="button-group">
            <button type="button" class="btn btn-danger me-2" @click="logout">
              Deslogar
            </button>
            <button type="button" class="btn btn-primary" @click="checkProtectedRoute">
              Ver Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import store from '@/store';
  
  export default {
    data() {
      return {
        user: store.state.autenticacao,
        apiUrl: store.state.apiUrl,
      };
    },
    methods: {
      async logout() {
        try {
          await axios.get(`${this.apiUrl}/login/logout`, {
            withCredentials: true,
          });
          alert('Você foi deslogado com sucesso!');
          location.reload();
        } catch (error) {
          console.error('Erro ao deslogar:', error);
          alert('Erro ao deslogar. Tente novamente.');
        }
      },
      async checkProtectedRoute() {
        try {
          const response = await axios.get(`${this.apiUrl}/rota-protegida`, {
            withCredentials: true,
          });
          alert(`Mensagem Surpresa: ${response.data}`);
        } catch (error) {
          console.error('Erro ao acessar a rota protegida:', error);
          alert('Erro ao acessar a rota protegida. Verifique se você está logado.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .containerGoogle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #f0f4f8, #e4e8f0);
  }
  
  .card {
    border-radius: 15px;
    border: none;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  
  .card-header {
    background-color: #007bff;
    color: white;
    padding: 20px;
  }
  
  .card-body {
    background-color: #fff;
    padding: 30px;
  }
  
  .card-subtitle {
    margin: 10px 0;
  }
  
  .button-group {
    margin-top: 20px;
  }
  
  .button-group .btn {
    width: 140px;
    border-radius: 15px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .button-group .btn:hover {
    transform: translateY(-2px);
  }
  
  .btn-danger {
    background-color: #dc3545;
    border: none;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
  }
  </style>
  