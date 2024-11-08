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
