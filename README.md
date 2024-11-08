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
   git clone https://github.com/Contagiovaneines/angular-crud.git
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

Aqui está o código formatado em Markdown com a separação de exemplos de componentes, backend, serviços, e outros arquivos de forma organizada:

```md
## **Exemplos de Código**

### **Componentes Bootstrap no Angular**

Para verificar se o Bootstrap está funcionando, adicione o seguinte código no arquivo `app.component.html`:

```html
<div class="container mt-4">
  <!-- Barra de navegação -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://cdn-icons-png.flaticon.com/512/4844/4844589.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Funcionários
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn btn-link nav-link" (click)="showList()">
              <i class="bi bi-list-ul"></i> Mostrar Lista
            </button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" (click)="showForm()">
              <i class="bi bi-person-plus"></i> Cadastrar Novo Funcionário
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Exibe o componente de lista de funcionários se showFuncionarioList for true -->
  <div *ngIf="showFuncionarioList">
    <app-funcionario-list></app-funcionario-list>
  </div>

  <!-- Exibe o formulário de funcionário se showFuncionarioForm for true -->
  <div *ngIf="showFuncionarioForm">
    <app-funcionario-form></app-funcionario-form>
  </div>
</div>
```

Se o Bootstrap estiver configurado corretamente, você verá o texto e o botão estilizados com as classes do Bootstrap.

---

### **Backend Node.js**

No arquivo `config/app.js`:

```javascript
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conectar ao banco de dados MySQL
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

// Rota para obter todos os funcionários
app.get('/funcionarios', (req, res) => {
    const query = 'SELECT * FROM funcionarios';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar funcionários:', err);
            return res.status(500).json({ message: 'Erro ao buscar funcionários' });
        }
        res.status(200).json(results);
    });
});

// Rota para obter um único funcionário pelo ID
app.get('/funcionarios/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM funcionarios WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar funcionário:', err);
            return res.status(500).json({ message: 'Erro ao buscar funcionário' });
        }
        res.status(200).json(results[0]);
    });
});

// Rota para adicionar um novo funcionário
app.post('/funcionarios', (req, res) => {
    const { nome, funcao, dataAdmissao, salario } = req.body;
    const query = 'INSERT INTO funcionarios (nome, funcao, dataAdmissao, salario) VALUES (?, ?, ?, ?)';
    connection.query(query, [nome, funcao, dataAdmissao, salario], (err, results) => {
        if (err) {
            console.error('Erro ao adicionar funcionário:', err);
            return res.status(500).json({ message: 'Erro ao adicionar funcionário' });
        }
        res.status(201).json({ id: results.insertId, nome, funcao, dataAdmissao, salario });
    });
});

// Rota para editar um funcionário
app.put('/funcionarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, funcao, dataAdmissao, salario } = req.body;
    const query = 'UPDATE funcionarios SET nome = ?, funcao = ?, dataAdmissao = ?, salario = ? WHERE id = ?';
    connection.query(query, [nome, funcao, dataAdmissao, salario, id], (err, results) => {
        if (err) {
            console.error('Erro ao editar funcionário:', err);
            return res.status(500).json({ message: 'Erro ao editar funcionário' });
        }
        res.status(200).json({ id, nome, funcao, dataAdmissao, salario });
    });
});

// Rota para deletar um funcionário
app.delete('/funcionarios/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM funcionarios WHERE id = ?';
    connection.query(query, [id], (err) => {
        if (err) {
            console.error('Erro ao deletar funcionário:', err);
            return res.status(500).json({ message: 'Erro ao deletar funcionário' });
        }
        res.status(200).json({ message: 'Funcionário deletado com sucesso' });
    });
});

// Iniciar o servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
```

---

### **Service em Angular**

No arquivo `funcionario.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:3000/funcionarios'; // A URL da API para o backend

  constructor(private http: HttpClient) { }

  // Método para obter todos os funcionários
  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  // Método para obter um único funcionário
  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar um novo funcionário
  addFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }

  // Método para editar um funcionário
  editarFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${id}`, funcionario);
  }

  // Método para deletar um funcionário
  deletarFuncionario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

---

### **Rotas do Angular**

No arquivo `app-routing.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },  // Rota inicial
  { path: 'funcionario/new', component: FuncionarioFormComponent },  // Criar novo funcionário
  { path: 'funcionario/edit/:id', component: FuncionarioFormComponent }  // Editar funcionário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

### **Componente Principal do Angular**

No arquivo `app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'angular-crud';
  showFuncionarioList: boolean = true;  // Controla qual componente mostrar
  showFuncionarioForm: boolean = false;  // Controla qual componente mostrar

  // Método para exibir a lista de funcionários
  showList() {
    this.showFuncionarioList = true;
    this.showFuncionarioForm = false;
  }

  // Método para exibir o formulário
  showForm() {
    this.showFuncionarioList = false;
    this.showFuncionarioForm = true;


  }
}
```

---

