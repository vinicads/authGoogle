# Projeto de Autenticação com Google

Este projeto consiste em uma aplicação simples que implementa a autenticação com o Google. A estrutura do projeto é dividida em duas pastas principais: `api` e `frontend`.

## O que o projeto faz

- O **backend** (API) é desenvolvido em **NestJS** e gerencia a lógica de autenticação utilizando JWT (JSON Web Tokens) para garantir a segurança do login.
- O **frontend** é desenvolvido em **Vue.js** e oferece uma interface simples onde os usuários podem fazer login com sua conta do Google e acessar uma mensagem protegida, disponível apenas para usuários logados.

## Configurações Necessárias

Antes de testar o projeto, você precisa configurar as credenciais do Google:

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um projeto existente.
3. Ative a API de autenticação do Google.
4. Crie credenciais do tipo "ID do cliente OAuth 2.0".
5. Salve as credenciais (client ID e client secret) que você irá usar no backend.

## Instruções para Testar

### Configurando o Backend

1. Navegue até a pasta `api`:
   cd api
2. Instale as dependências:
   npm install
3. Rode o backend:
   npm run start:dev

### Configurando o Frontend

1. Navegue até a pasta `frontend`:
   cd frontend
2. Instale as dependências:
   npm install
3. Rode o `frontend`:
   npm run serve

### Banco de Dados

Certifique-se de que o banco de dados MySQL esteja em execução no localhost antes de iniciar a aplicação.

### Conclusão

Após seguir estas etapas, você deverá conseguir testar a aplicação de autenticação com o Google. Sinta-se à vontade para explorar o código e fazer melhorias!

Se você tiver dúvidas ou sugestões, não hesite em entrar em contato!
