Claro! Aqui está o **documento completo** para o seu projeto **Angular CRUD com Backend Node.js e MySQL**. 

---

# **Projeto Angular CRUD com Backend Node.js e MySQL**

Este é um projeto CRUD (Criar, Ler, Atualizar, Excluir) de cadastro de funcionários, utilizando **Angular** para o frontend, **Node.js** para o backend e **MySQL** para o banco de dados. Além disso, o projeto utiliza **Bootstrap** para um design responsivo e moderno.

## **Índice**

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Configuração do Projeto](#configuração-do-projeto)
   - [Configuração do Bootstrap](#configuração-do-bootstrap)
   - [Configuração do Backend Node.js](#configuração-do-backend-nodejs)
   - [Configuração dos Scripts no `package.json`](#configuração-dos-scripts-no-packagejson)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Comandos Principais](#comandos-principais)
6. [Exemplos de Código](#exemplos-de-código)
   - [Componentes Bootstrap no Angular](#componentes-bootstrap-no-angular)
   - [Backend Node.js](#backend-nodejs)
7. [Licença](#licença)

---

## **Pré-requisitos**

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (recomendado: versão 14 ou superior) – [Baixar Node.js](https://nodejs.org/)
- **npm** (vem junto com o Node.js)
- **Angular CLI**:
  
  Instale o Angular CLI globalmente com o comando:
  ```bash
  npm install -g @angular/cli
  ```

- **MySQL** (para configurar o banco de dados)

---

## **Instalação**

Para instalar o projeto, siga as etapas abaixo:

1. **Clone o repositório:**

   Clone o repositório para sua máquina local e navegue até o diretório do projeto:
   ```bash
   git clone https://github.com/seu-usuario/angular-crud.git
   cd angular-crud
   ```

2. **Instale as dependências do projeto:**

   Execute o comando abaixo para instalar as dependências do Angular e Node.js:
   ```bash
   npm install
   ```

---

## **Configuração do Projeto**

### **Configuração do Bootstrap**

1. **Instalar o Bootstrap:**

   No diretório do projeto, instale o Bootstrap utilizando o npm:
   ```bash
   npm install bootstrap
   ```

2. **Adicionar o Bootstrap no `angular.json`:**

   No arquivo `angular.json`, adicione o caminho do CSS do Bootstrap dentro da seção `"styles"`:
   ```json
   "styles": [
     "src/styles.css",
     "node_modules/bootstrap/dist/css/bootstrap.min.css"
   ]
   ```

   Isso fará com que o Angular carregue o Bootstrap globalmente em todo o projeto.

### **Configuração do Backend Node.js**

1. **Criação do banco de dados MySQL:**

   Primeiro, crie um banco de dados e a tabela necessária para o cadastro de funcionários:

   ```sql
   CREATE DATABASE funcionarios_db;
   USE funcionarios_db;

   CREATE TABLE funcionarios (
       id INT PRIMARY KEY AUTO_INCREMENT,
       nome VARCHAR(100),
       funcao VARCHAR(100),
       dataAdmissao DATE,
       salario DECIMAL(10, 2)
   );
   ```

2. **Instalar dependências do Node.js:**

   No diretório do projeto, inicialize o projeto Node.js e instale as dependências necessárias:
   ```bash
   npm init -y
   npm install express mysql2 cors
   ```

3. **Configuração do servidor Node.js em `app.js`:**

   Crie o arquivo `config/app.js` com o seguinte conteúdo para configurar o servidor e a conexão com o MySQL:

   ```javascript
   const express = require('express');
   const mysql = require('mysql2');
   const cors = require('cors');
   const app = express();
   const port = 3000;

   app.use(cors());
   app.use(express.json());

   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'funcionarios_db'
   });

   connection.connect((err) => {
       if (err) {
           console.error('Erro de conexão com o MySQL:', err.stack);
           return;
       }
       console.log('Conectado ao banco de dados MySQL com ID:', connection.threadId);
   });

   // Rotas para CRUD de funcionários
   app.get('/funcionarios', (req, res) => { /* código */ });
   app.get('/funcionarios/:id', (req, res) => { /* código */ });
   app.post('/funcionarios', (req, res) => { /* código */ });
   app.put('/funcionarios/:id', (req, res) => { /* código */ });
   app.delete('/funcionarios/:id', (req, res) => { /* código */ });

   app.listen(port, () => {
       console.log(`Servidor rodando em http://localhost:${port}`);
   });
   ```

4. **Iniciar o servidor backend:**

   No diretório do projeto, execute o seguinte comando para rodar o servidor Node.js:

   ```bash
   node config/app.js
   ```

### **Configuração dos Scripts no `package.json`**

1. **Instalar Concurrently:**

   Para rodar o backend e o frontend ao mesmo tempo, instale a dependência `concurrently`:

   ```bash
   npm install concurrently --save-dev
   ```

2. **Adicionar os scripts no `package.json`:**

   Abra o `package.json` e adicione os scripts para rodar o servidor e o cliente simultaneamente:

   ```json
   {
     "scripts": {
       "start": "concurrently \"npm run server\" \"npm run client\"",
       "server": "node config/app.js",
       "client": "ng serve",
       "build": "ng build",
       "watch": "ng build --watch --configuration development",
       "test": "ng test"
     }
   }
   ```

3. **Instalar as dependências do Angular e do Node.js:**

   Execute o comando para instalar as dependências necessárias:
   ```bash
   npm install
   ```

---

## **Estrutura do Projeto**

A estrutura de diretórios do projeto será semelhante a esta:

```
angular-crud/
├── src/
│   ├── app/              # Componentes principais do Angular
│   ├── assets/           # Arquivos estáticos
│   ├── styles.css        # Estilos personalizados
├── config/
│   └── app.js            # Configuração do backend (Node.js)
├── angular.json          # Configuração do Angular CLI
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```

---

## **Comandos Principais**

- **Rodar o projeto completo (frontend e backend):**
  ```bash
  npm start
  ```

- **Build do frontend Angular:**
  ```bash
  npm run build
  ```

- **Rodar Angular em modo de observação (auto-atualiza):**
  ```bash
  npm run watch
  ```

---

## **Exemplos de Código**

### **Componentes Bootstrap no Angular**

Para verificar se o Bootstrap está funcionando, adicione o seguinte código no arquivo `app.component.html`:

```html
<div class="container">
  <h1 class="text-primary">Bem-vindo ao Sistema de Cadastro de Funcionários</h1>
  <button class="btn btn-success">Clique Aqui</button>
</div>
```

Se o Bootstrap estiver configurado corretamente, você verá o texto e o botão estilizados com as classes do Bootstrap.

### **Backend Node.js**

No arquivo `config/app.js`, você pode adicionar a seguinte rota para listar todos os funcionários do banco de dados:

```javascript
app.get('/funcionarios', (req, res) => {
   connection.query('SELECT * FROM funcionarios', (err, results) => {
      if (err) {
         return res.status(500).send(err);
      }
      res.json(results);
   });
});
```

---

## **Licença**

Este projeto é licenciado sob a **MIT License**.

---

Esse é o **documento completo** para configurar, entender e rodar seu sistema de cadastro de funcionários com **Angular**, **Node.js** e **MySQL**. Certifique-se de seguir todos os passos e ajustar as configurações conforme necessário.